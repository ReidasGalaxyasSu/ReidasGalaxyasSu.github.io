// Texturas procedurais (canvas) — nenhuma imagem externa é necessária.
import * as THREE from 'three';

function canvas(w, h = w) {
  const c = document.createElement('canvas');
  c.width = w; c.height = h;
  return [c, c.getContext('2d')];
}

// Ruído de valor simples e determinístico
function rng(seed) {
  let s = seed >>> 0;
  return () => ((s = (s * 1664525 + 1013904223) >>> 0) / 4294967296);
}

function tex(c, { repeat = [1, 1], srgb = true } = {}) {
  const t = new THREE.CanvasTexture(c);
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.repeat.set(repeat[0], repeat[1]);
  t.anisotropy = 8;
  if (srgb) t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

// Manchas suaves sobrepostas: base para cimento queimado / concreto
function blotches(ctx, w, h, r, count, colors, alpha) {
  for (let i = 0; i < count; i++) {
    const x = r() * w, y = r() * h, rad = (0.04 + r() * 0.22) * w;
    const g = ctx.createRadialGradient(x, y, 0, x, y, rad);
    const col = colors[Math.floor(r() * colors.length)];
    g.addColorStop(0, col.replace('A', String(alpha * (0.4 + r() * 0.6))));
    g.addColorStop(1, col.replace('A', '0'));
    ctx.fillStyle = g;
    // desenha com wrap para a textura ficar contínua
    for (const dx of [-w, 0, w]) for (const dy of [-h, 0, h]) {
      ctx.save(); ctx.translate(dx, dy); ctx.fillRect(x - rad, y - rad, rad * 2, rad * 2); ctx.restore();
    }
  }
}

function grain(ctx, w, h, r, amount) {
  const img = ctx.getImageData(0, 0, w, h);
  const d = img.data;
  for (let i = 0; i < d.length; i += 4) {
    const n = (r() - 0.5) * amount;
    d[i] += n; d[i + 1] += n; d[i + 2] += n;
  }
  ctx.putImageData(img, 0, 0);
}

export function concrete(base = '#8a8580', seed = 1, repeat = [1, 1], strength = 0.16) {
  const [c, ctx] = canvas(512);
  const r = rng(seed);
  ctx.fillStyle = base; ctx.fillRect(0, 0, 512, 512);
  blotches(ctx, 512, 512, r, 70, ['rgba(255,250,240,A)', 'rgba(40,36,32,A)'], strength);
  grain(ctx, 512, 512, r, 22);
  return tex(c, { repeat });
}

// Porcelanato grande (90x90) com rejunte fino
export function tiles(base = '#6f6d6a', seed = 3, size = 0.9) {
  const [c, ctx] = canvas(1024);
  const r = rng(seed);
  ctx.fillStyle = base; ctx.fillRect(0, 0, 1024, 1024);
  blotches(ctx, 1024, 1024, r, 90, ['rgba(255,255,255,A)', 'rgba(20,20,20,A)'], 0.09);
  grain(ctx, 1024, 1024, r, 12);
  ctx.strokeStyle = 'rgba(20,18,16,0.55)'; ctx.lineWidth = 3;
  for (let i = 0; i <= 2; i++) {
    ctx.beginPath(); ctx.moveTo(i * 512, 0); ctx.lineTo(i * 512, 1024); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(0, i * 512); ctx.lineTo(1024, i * 512); ctx.stroke();
  }
  const t = tex(c);
  t.userData.tileSize = size * 2; // a textura tem 2x2 placas
  return t;
}

// Madeira (nogueira) — veios longitudinais
export function wood(base = [92, 58, 36], seed = 7, { dark = 0.0 } = {}) {
  const [c, ctx] = canvas(512);
  const r = rng(seed);
  const [R, G, B] = base.map(v => v * (1 - dark));
  ctx.fillStyle = `rgb(${R},${G},${B})`; ctx.fillRect(0, 0, 512, 512);
  // tábuas
  for (let p = 0; p < 4; p++) {
    const k = 0.85 + r() * 0.3;
    ctx.fillStyle = `rgba(${R * k},${G * k},${B * k},0.6)`;
    ctx.fillRect(p * 128, 0, 128, 512);
  }
  // veios
  for (let i = 0; i < 260; i++) {
    const x0 = r() * 512, amp = 1 + r() * 5, freq = 0.004 + r() * 0.012, ph = r() * 6;
    const light = r() > 0.5;
    ctx.strokeStyle = light ? `rgba(255,220,180,${0.02 + r() * 0.04})` : `rgba(20,10,4,${0.04 + r() * 0.08})`;
    ctx.lineWidth = 0.5 + r() * 1.4;
    ctx.beginPath();
    for (let y = -8; y <= 520; y += 8) {
      const x = x0 + Math.sin(y * freq + ph) * amp + Math.sin(y * 0.05 + ph) * 1.5;
      y === -8 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
    }
    ctx.stroke();
  }
  grain(ctx, 512, 512, r, 10);
  return tex(c);
}

// Pedra rústica (arco) — Voronoi com rejunte escuro. Retorna mapa de cor e de relevo.
export function stone(seed = 11) {
  const N = 512, cells = 13; // grade de 13x13 células
  const r = rng(seed);
  const pts = [], cols = [];
  for (let j = 0; j < cells; j++) for (let i = 0; i < cells; i++) {
    pts.push([(i + 0.1 + r() * 0.8) / cells, (j + 0.1 + r() * 0.8) / cells]);
    const v = 62 + r() * 62, warm = 4 + r() * 16;
    cols.push([v + warm, v + warm * 0.7, v]);
  }
  const [c, ctx] = canvas(N);
  const [cb, bctx] = canvas(N);
  const img = ctx.createImageData(N, N), bimg = bctx.createImageData(N, N);
  const noise = rng(seed + 1);
  for (let y = 0; y < N; y++) for (let x = 0; x < N; x++) {
    const u = x / N, v = y / N;
    const gi = Math.floor(u * cells), gj = Math.floor(v * cells);
    let d1 = 9, d2 = 9, best = 0;
    for (let dj = -1; dj <= 1; dj++) for (let di = -1; di <= 1; di++) {
      let ii = gi + di, jj = gj + dj, ox = 0, oy = 0;
      if (ii < 0) { ii += cells; ox = -1; } else if (ii >= cells) { ii -= cells; ox = 1; }
      if (jj < 0) { jj += cells; oy = -1; } else if (jj >= cells) { jj -= cells; oy = 1; }
      const k = jj * cells + ii, p = pts[k];
      const dx = p[0] + ox - u, dy = p[1] + oy - v;
      const d = Math.sqrt(dx * dx + dy * dy);
      if (d < d1) { d2 = d1; d1 = d; best = k; } else if (d < d2) d2 = d;
    }
    const edge = (d2 - d1) * cells; // 0 na junta
    const mortar = Math.min(1, Math.max(0, (edge - 0.03) / 0.1));
    const dome = Math.min(1, edge * 2.2);
    const n = (noise() - 0.5) * 30 + Math.sin(x * 0.21 + y * 0.13) * 4;
    const col = cols[best];
    const o = (y * N + x) * 4;
    const shade = 0.55 + 0.45 * dome;
    img.data[o] = (col[0] * shade + n) * mortar + 34 * (1 - mortar);
    img.data[o + 1] = (col[1] * shade + n) * mortar + 32 * (1 - mortar);
    img.data[o + 2] = (col[2] * shade + n) * mortar + 30 * (1 - mortar);
    img.data[o + 3] = 255;
    const b = 255 * (0.25 + 0.75 * dome) * mortar + n * 0.6;
    bimg.data[o] = bimg.data[o + 1] = bimg.data[o + 2] = b; bimg.data[o + 3] = 255;
  }
  ctx.putImageData(img, 0, 0); bctx.putImageData(bimg, 0, 0);
  return { map: tex(c), bump: tex(cb, { srgb: false }) };
}

// Tecido (sofá, cama) — trama fina
export function fabric(base = '#5a5550', seed = 5) {
  const [c, ctx] = canvas(256);
  const r = rng(seed);
  ctx.fillStyle = base; ctx.fillRect(0, 0, 256, 256);
  for (let i = 0; i < 256; i += 2) {
    ctx.fillStyle = `rgba(255,255,255,${0.02 + r() * 0.03})`; ctx.fillRect(0, i, 256, 1);
    ctx.fillStyle = `rgba(0,0,0,${0.03 + r() * 0.04})`; ctx.fillRect(i, 0, 1, 256);
  }
  grain(ctx, 256, 256, r, 16);
  return tex(c);
}

// Couro (sofá caramelo) — manchas + poros
export function leather(base = '#7b3f1d', seed = 9) {
  const [c, ctx] = canvas(512);
  const r = rng(seed);
  ctx.fillStyle = base; ctx.fillRect(0, 0, 512, 512);
  blotches(ctx, 512, 512, r, 80, ['rgba(255,190,130,A)', 'rgba(30,10,0,A)'], 0.1);
  grain(ctx, 512, 512, r, 26);
  return tex(c);
}

// Arte redonda colorida (quadro da sala)
export function roundArt(seed = 21) {
  const [c, ctx] = canvas(512);
  const r = rng(seed);
  ctx.fillStyle = '#2a1840'; ctx.fillRect(0, 0, 512, 512);
  const pal = ['#ff4f8b', '#ffb000', '#3dd6c4', '#7b5cff', '#ff6a3d', '#1fa2ff', '#c2f970', '#ff9ad5'];
  for (let i = 0; i < 520; i++) {
    const a = r() * Math.PI * 2, d = Math.pow(r(), 0.7) * 250;
    const x = 256 + Math.cos(a) * d, y = 256 + Math.sin(a) * d, s = 6 + r() * 26;
    ctx.fillStyle = pal[Math.floor(r() * pal.length)];
    ctx.globalAlpha = 0.6 + r() * 0.4;
    ctx.beginPath(); ctx.ellipse(x, y, s, s * (0.5 + r() * 0.5), r() * 3, 0, Math.PI * 2); ctx.fill();
  }
  ctx.globalAlpha = 1;
  const g = ctx.createRadialGradient(256, 256, 30, 256, 256, 120);
  g.addColorStop(0, 'rgba(60,40,140,0.9)'); g.addColorStop(1, 'rgba(60,40,140,0)');
  ctx.fillStyle = g; ctx.fillRect(0, 0, 512, 512);
  return tex(c);
}

// Tela da TV (cena abstrata, sem marcas)
export function tvScreen() {
  const [c, ctx] = canvas(512, 288);
  const g = ctx.createLinearGradient(0, 0, 512, 288);
  g.addColorStop(0, '#0b2a3a'); g.addColorStop(0.5, '#1d6d8c'); g.addColorStop(1, '#0a1622');
  ctx.fillStyle = g; ctx.fillRect(0, 0, 512, 288);
  const s = ctx.createRadialGradient(380, 90, 4, 380, 90, 90);
  s.addColorStop(0, 'rgba(255,214,150,0.95)'); s.addColorStop(1, 'rgba(255,214,150,0)');
  ctx.fillStyle = s; ctx.fillRect(0, 0, 512, 288);
  ctx.fillStyle = 'rgba(5,12,18,0.85)';
  ctx.beginPath(); ctx.moveTo(0, 230);
  for (let x = 0; x <= 512; x += 16) ctx.lineTo(x, 200 + Math.sin(x * 0.03) * 14 + Math.sin(x * 0.11) * 6);
  ctx.lineTo(512, 288); ctx.lineTo(0, 288); ctx.fill();
  return tex(c, { repeat: [1, 1] });
}

// Painel esférico (escultura sobre a cama) — placas em relevo
export function panelSphere(seed = 31) {
  const [c, ctx] = canvas(512, 256);
  const r = rng(seed);
  ctx.fillStyle = '#7d756b'; ctx.fillRect(0, 0, 512, 256);
  for (let i = 0; i < 700; i++) {
    const x = r() * 512, y = r() * 256, w = 4 + r() * 26, h = 3 + r() * 12;
    const v = 90 + r() * 70;
    ctx.fillStyle = `rgb(${v},${v * 0.95},${v * 0.88})`;
    ctx.fillRect(x, y, w, h);
  }
  ctx.fillStyle = 'rgba(40,36,30,0.9)'; ctx.fillRect(0, 126, 512, 4);
  return tex(c);
}

// Trama do pendente (cesto escuro vazado) — usada como alphaMap
export function weave() {
  const [c, ctx] = canvas(256);
  ctx.fillStyle = '#000'; ctx.fillRect(0, 0, 256, 256);
  ctx.strokeStyle = '#fff'; ctx.lineWidth = 7;
  for (let i = -256; i < 512; i += 22) {
    ctx.beginPath(); ctx.moveTo(i, 0); ctx.lineTo(i + 256, 256); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(i + 256, 0); ctx.lineTo(i, 256); ctx.stroke();
  }
  return tex(c, { repeat: [3, 2], srgb: false });
}

// Brilho radial (sprites de luz / halo)
export function glow(color = '255,190,120') {
  const [c, ctx] = canvas(128);
  const g = ctx.createRadialGradient(64, 64, 0, 64, 64, 64);
  g.addColorStop(0, `rgba(${color},1)`); g.addColorStop(0.35, `rgba(${color},0.35)`); g.addColorStop(1, `rgba(${color},0)`);
  ctx.fillStyle = g; ctx.fillRect(0, 0, 128, 128);
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace;
  return t;
}
