/**
 * liquid-glass-lens.js — refração real (lente) + brilho especular que segue o ponteiro.
 * Parte da skill apple-liquid-glass-web. Sem dependências. Aprimoramento progressivo.
 *
 * O QUE FAZ
 *  1. [data-lg-lens]      gera, para o tamanho exato do elemento, um mapa de deslocamento
 *                         (canvas → feImage) e um filtro SVG feDisplacementMap, e aplica em
 *                         backdrop-filter: o fundo "entorta" na borda como num vidro grosso.
 *       data-lg-lens="bezel"    (padrão) só a borda refrata — barras, botões, cápsulas, modais
 *       data-lg-lens="magnify"  o miolo amplia levemente — lupa, o "thumb" de um seletor (ref. 3)
 *       data-lg-lens="sphere"   bola de vidro maciça: o fundo aparece invertido e ampliado,
 *                               como a bolha clara da referência 2 (força padrão = 2 × diâmetro)
 *       data-lg-bezel="18"      largura da borda que refrata, em px (padrão 16)
 *       data-lg-strength="60"   intensidade do deslocamento, em px (padrão 48)
 *       data-lg-blur="6"        desfoque somado à refração, em px (padrão 4; 0 = vidro clear)
 *       data-lg-chroma="1.5"    dispersão cromática (aberração RGB na borda); 0 desliga
 *  2. [data-lg-specular]  atualiza --lg-mx / --lg-my (0–100%) com a posição do ponteiro,
 *                         para o brilho especular de liquid-glass-pro.css seguir a luz.
 *
 * ONDE FUNCIONA
 *  - Refração via backdrop-filter: url(#filtro) só renderiza em navegadores Chromium
 *    (Chrome, Edge, Opera, Arc, Brave). Safari e Firefox ignoram: o elemento continua com o
 *    vidro normal (blur + preenchimento) definido no CSS. Nunca dependa da refração para
 *    legibilidade.
 *  - Desliga sozinho com prefers-reduced-transparency, prefers-contrast: more e
 *    prefers-reduced-motion (o especular), e respeita window.LG_LENS_DISABLED = true.
 *
 * CUSTO
 *  - Cada lente é uma camada com filtro SVG no backdrop: caro em GPU. Use em 1–3 elementos por
 *    tela, nunca em listas. O mapa é regenerado só quando o tamanho muda (ResizeObserver).
 */
(function () {
  "use strict";
  if (window.LG_LENS_DISABLED) return;

  var mq = function (q) { return window.matchMedia && window.matchMedia(q).matches; };
  var reduceTransparency = mq("(prefers-reduced-transparency: reduce)") || mq("(prefers-contrast: more)");
  var reduceMotion = mq("(prefers-reduced-motion: reduce)");
  // Blink de verdade (Chrome, Edge, Opera, Brave, Arc; também HeadlessChrome). No iOS todo
  // navegador é WebKit ("CriOS", "EdgiOS") e não renderiza url() no backdrop: fica de fora.
  var isChromium = /Chrom(e|ium)\//.test(navigator.userAgent) && !/CriOS|EdgiOS|FxiOS/.test(navigator.userAgent);
  var canBackdropUrl = isChromium && window.CSS && CSS.supports &&
    (CSS.supports("backdrop-filter", "url(#a)") || CSS.supports("-webkit-backdrop-filter", "url(#a)"));

  var SVGNS = "http://www.w3.org/2000/svg";
  var defs = null, uid = 0;

  function ensureDefs() {
    if (defs) return defs;
    var svg = document.createElementNS(SVGNS, "svg");
    svg.setAttribute("aria-hidden", "true");
    svg.setAttribute("width", "0"); svg.setAttribute("height", "0");
    svg.style.cssText = "position:absolute;width:0;height:0;overflow:hidden;pointer-events:none";
    defs = document.createElementNS(SVGNS, "defs");
    svg.appendChild(defs);
    document.body.appendChild(svg);
    return defs;
  }

  // Distância com sinal a um retângulo arredondado centrado na origem (negativa por dentro).
  function sdRoundRect(px, py, hw, hh, r) {
    var qx = Math.abs(px) - hw + r, qy = Math.abs(py) - hh + r;
    var ox = Math.max(qx, 0), oy = Math.max(qy, 0);
    return Math.min(Math.max(qx, qy), 0) + Math.sqrt(ox * ox + oy * oy) - r;
  }

  /**
   * Mapa de deslocamento: R = deslocamento x, G = deslocamento y (0.5 = parado).
   * bezel   → perfil convexo (cresce para a borda, como o arredondado de um vidro grosso),
   *           direção = normal da forma (gradiente da distância), puxando o fundo para dentro.
   * magnify → deslocamento proporcional à distância do centro (lupa) + reforço na borda.
   */
  function buildMap(w, h, radius, bezel, mode) {
    var c = document.createElement("canvas");
    c.width = w; c.height = h;
    var ctx = c.getContext("2d");
    var img = ctx.createImageData(w, h), d = img.data;
    var hw = w / 2, hh = h / 2, r = Math.min(radius, hw, hh), e = 0.75;
    for (var y = 0; y < h; y++) {
      for (var x = 0; x < w; x++) {
        var px = x + 0.5 - hw, py = y + 0.5 - hh;
        var dist = sdRoundRect(px, py, hw, hh, r);
        var dx = 0, dy = 0;
        if (dist < 0) {
          // normal aproximada por diferenças finitas
          var nx = sdRoundRect(px + e, py, hw, hh, r) - sdRoundRect(px - e, py, hw, hh, r);
          var ny = sdRoundRect(px, py + e, hw, hh, r) - sdRoundRect(px, py - e, hw, hh, r);
          var nl = Math.sqrt(nx * nx + ny * ny) || 1; nx /= nl; ny /= nl;
          var depth = -dist; // px a partir da borda
          var t = depth < bezel ? 1 - depth / bezel : 0; // 1 na borda, 0 no fim do bezel
          var edge = t * t * (3 - 2 * t); // smoothstep: curva de um vidro arredondado
          if (mode === "sphere") {
            // bola de vidro: amostra do lado oposto (imagem invertida), com borda comprimida
            var k = Math.sqrt(px * px / (hw * hw) + py * py / (hh * hh));
            var bulge = 0.75 + 0.25 * Math.min(1, k);
            dx = -px / hw * bulge;
            dy = -py / hh * bulge;
          } else if (mode === "magnify") {
            // lupa: amostra mais perto do centro (amplia); reforço convexo na borda
            // escala uniforme (mesmo fator nos dois eixos) para não esticar texto
            var m = Math.max(hw, hh);
            dx = -px / m * 0.6 - nx * edge * 0.4;
            dy = -py / m * 0.6 - ny * edge * 0.4;
          } else {
            dx = -nx * edge;
            dy = -ny * edge;
          }
        }
        var i = (y * w + x) * 4;
        d[i] = Math.round((0.5 + dx * 0.5) * 255);
        d[i + 1] = Math.round((0.5 + dy * 0.5) * 255);
        d[i + 2] = 128;
        d[i + 3] = 255;
      }
    }
    ctx.putImageData(img, 0, 0);
    return c.toDataURL("image/png");
  }

  function el(name, attrs) {
    var n = document.createElementNS(SVGNS, name);
    for (var k in attrs) n.setAttribute(k, attrs[k]);
    return n;
  }

  function buildFilter(id, url, w, h, strength, blur, chroma) {
    var f = el("filter", { id: id, x: "0", y: "0", width: w, height: h,
      filterUnits: "userSpaceOnUse", primitiveUnits: "userSpaceOnUse", "color-interpolation-filters": "sRGB" });
    f.appendChild(el("feImage", { href: url, x: "0", y: "0", width: w, height: h, result: "map", preserveAspectRatio: "none" }));
    var src = "SourceGraphic";
    if (blur > 0) { f.appendChild(el("feGaussianBlur", { in: "SourceGraphic", stdDeviation: blur / 2, result: "soft" })); src = "soft"; }
    if (chroma > 0) {
      // um deslocamento por canal → dispersão cromática (arco-íris fino na borda, referência 4/5)
      var chans = [["R", strength * (1 + 0.04 * chroma), "1 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 0"],
                   ["G", strength, "0 0 0 0 0  0 1 0 0 0  0 0 0 0 0  0 0 0 1 0"],
                   ["B", strength * (1 - 0.04 * chroma), "0 0 0 0 0  0 0 0 0 0  0 0 1 0 0  0 0 0 1 0"]];
      chans.forEach(function (c) {
        f.appendChild(el("feDisplacementMap", { in: src, in2: "map", scale: c[1], xChannelSelector: "R", yChannelSelector: "G", result: "d" + c[0] }));
        f.appendChild(el("feColorMatrix", { in: "d" + c[0], type: "matrix", values: c[2], result: "c" + c[0] }));
      });
      f.appendChild(el("feBlend", { in: "cR", in2: "cG", mode: "screen", result: "rg" }));
      f.appendChild(el("feBlend", { in: "rg", in2: "cB", mode: "screen" }));
    } else {
      f.appendChild(el("feDisplacementMap", { in: src, in2: "map", scale: strength, xChannelSelector: "R", yChannelSelector: "G" }));
    }
    return f;
  }

  function applyLens(node) {
    var rect = node.getBoundingClientRect();
    var w = Math.max(2, Math.round(rect.width)), h = Math.max(2, Math.round(rect.height));
    if (node._lgSize === w + "x" + h) return;
    node._lgSize = w + "x" + h;
    var cs = getComputedStyle(node);
    var radius = parseFloat(cs.borderTopLeftRadius) || 0;
    if (cs.borderTopLeftRadius.indexOf("%") > -1) radius = Math.min(w, h) * parseFloat(cs.borderTopLeftRadius) / 100;
    var mode = node.getAttribute("data-lg-lens") || "bezel";
    var bezel = parseFloat(node.getAttribute("data-lg-bezel")) || (mode === "bezel" ? 16 : mode === "magnify" ? Math.min(w, h) / 3 : Math.min(w, h) / 2);
    var strength = parseFloat(node.getAttribute("data-lg-strength")) || (mode === "sphere" ? 2 * Math.min(w, h) : 48);
    var blurAttr = node.getAttribute("data-lg-blur");
    var blur = blurAttr === null ? 4 : parseFloat(blurAttr) || 0;
    var chroma = parseFloat(node.getAttribute("data-lg-chroma")) || 0;

    var id = node._lgId || (node._lgId = "lg-lens-" + (++uid));
    var old = document.getElementById(id);
    if (old) old.parentNode.removeChild(old);
    ensureDefs().appendChild(buildFilter(id, buildMap(w, h, radius, bezel, mode), w, h, strength, blur, chroma));

    var sat = node.getAttribute("data-lg-saturate") || "1.6";
    var value = "url(#" + id + ") saturate(" + sat + ")";
    node.style.backdropFilter = value;
    node.style.webkitBackdropFilter = value;
    node.classList.add("lg-has-lens");
  }

  function initLenses() {
    if (!canBackdropUrl || reduceTransparency) return;
    var nodes = Array.prototype.slice.call(document.querySelectorAll("[data-lg-lens]"));
    if (!nodes.length) return;
    var ro = window.ResizeObserver ? new ResizeObserver(function (entries) {
      entries.forEach(function (en) { applyLens(en.target); });
    }) : null;
    nodes.forEach(function (n) { applyLens(n); if (ro) ro.observe(n); });
  }

  function initSpecular() {
    if (reduceMotion) return;
    var nodes = Array.prototype.slice.call(document.querySelectorAll("[data-lg-specular]"));
    nodes.forEach(function (n) {
      var raf = 0, lx = 50, ly = 0;
      n.addEventListener("pointermove", function (ev) {
        var r = n.getBoundingClientRect();
        lx = ((ev.clientX - r.left) / r.width) * 100;
        ly = ((ev.clientY - r.top) / r.height) * 100;
        if (!raf) raf = requestAnimationFrame(function () {
          raf = 0;
          n.style.setProperty("--lg-mx", lx.toFixed(1) + "%");
          n.style.setProperty("--lg-my", ly.toFixed(1) + "%");
        });
      }, { passive: true });
      n.addEventListener("pointerleave", function () {
        n.style.removeProperty("--lg-mx"); n.style.removeProperty("--lg-my");
      });
    });
  }

  function init() { initLenses(); initSpecular(); }
  window.LiquidGlassLens = { refresh: function () {
    Array.prototype.forEach.call(document.querySelectorAll("[data-lg-lens]"), function (n) { n._lgSize = ""; });
    initLenses();
  }, supported: canBackdropUrl };

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
