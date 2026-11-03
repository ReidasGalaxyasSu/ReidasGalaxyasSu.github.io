/**
 * glass-adaptive.js — tom adaptativo para barras de vidro (parte da skill apple-liquid-glass-web)
 *
 * Imita o comportamento do Liquid Glass: barras pequenas ficam escuras sobre conteúdo escuro e
 * claras sobre conteúdo claro. Como o navegador não expõe os pixels de trás, marque as seções:
 *
 *   <section data-tone="dark">…</section>     <section data-tone="light">…</section>
 *   <header class="navbar glass" data-glass-adaptive>…</header>
 *
 * Marque SÓ seções de cor fixa (hero escuro com foto, faixa colorida). Seções que acompanham o
 * tema claro/escuro ficam SEM data-tone — senão a barra fica clara sobre fundo escuro no modo escuro.
 *
 * O script adiciona .is-on-dark ou .is-on-light ao elemento [data-glass-adaptive] conforme a
 * seção que está sob o centro dele. Seções sem data-tone devolvem o tom do tema (remove as classes).
 * Sem JS, o vidro continua funcionando no tom do tema.
 */
(function () {
  "use strict";

  function init() {
    var bars = Array.prototype.slice.call(document.querySelectorAll("[data-glass-adaptive]"));
    if (!bars.length) return;

    var ticking = false;

    function toneAt(x, y, bar) {
      // Desliga temporariamente a barra para "ver" o que está atrás dela.
      var prev = bar.style.pointerEvents;
      bar.style.pointerEvents = "none";
      var el = document.elementFromPoint(x, y);
      bar.style.pointerEvents = prev;
      var section = el && el.closest ? el.closest("[data-tone]") : null;
      return section ? section.getAttribute("data-tone") : null;
    }

    function update() {
      ticking = false;
      bars.forEach(function (bar) {
        var r = bar.getBoundingClientRect();
        var x = Math.min(Math.max(r.left + r.width / 2, 0), window.innerWidth - 1);
        var y = Math.min(Math.max(r.top + r.height / 2, 0), window.innerHeight - 1);
        var tone = toneAt(x, y, bar);
        bar.classList.toggle("is-on-dark", tone === "dark");
        bar.classList.toggle("is-on-light", tone === "light");
      });
    }

    function schedule() {
      if (!ticking) { ticking = true; window.requestAnimationFrame(update); }
    }

    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule, { passive: true });
    update();
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
