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

// Ruído suave e repetível (tileable), calculado direto nos pixels — rápido mesmo em CPU
function smoothNoise(N, r, cells) {
  const g = new Float32Array(cells * cells);
  for (let i = 0; i < g.length; i++) g[i] = r();
  const out = new Float32Array(N * N);
  for (let y = 0; y < N; y++) {
    const fy = y / N * cells, y0 = Math.floor(fy), ty = fy - y0, sy = ty * ty * (3 - 2 * ty), y1 = (y0 + 1) % cells;
    for (let x = 0; x < N; x++) {
      const fx = x / N * cells, x0 = Math.floor(fx), tx = fx - x0, sx = tx * tx * (3 - 2 * tx), x1 = (x0 + 1) % cells;
      const a = g[y0 * cells + x0], b = g[y0 * cells + x1], c = g[y1 * cells + x0], d = g[y1 * cells + x1];
      out[y * N + x] = a + (b - a) * sx + (c - a) * sy + (a - b - c + d) * sx * sy;
    }
  }
  return out;
}
function clouds(N, r) {
  const a = smoothNoise(N, r, 4), b = smoothNoise(N, r, 9), c = smoothNoise(N, r, 23);
  for (let i = 0; i < a.length; i++) a[i] = a[i] * 0.55 + b[i] * 0.3 + c[i] * 0.15;
  return a;
}
function rgbOf(hex) { const v = parseInt(hex.slice(1), 16); return [v >> 16 & 255, v >> 8 & 255, v & 255]; }

// Pinta a cor base modulada por um campo de ruído (manchas) + granulado
function paint(N, base, field, strength, grainAmt, r) {
  const [c, ctx] = canvas(N);
  const [R, G, B] = typeof base === 'string' ? rgbOf(base) : base;
  const img = ctx.createImageData(N, N), d = img.data;
  for (let i = 0, p = 0; i < N * N; i++, p += 4) {
    const k = 1 + (field[i] - 0.5) * 2 * strength, n = (r() - 0.5) * grainAmt;
    d[p] = R * k + n; d[p + 1] = G * k + n; d[p + 2] = B * k + n; d[p + 3] = 255;
  }
  ctx.putImageData(img, 0, 0);
  return [c, ctx];
}

export function concrete(base = '#8a8580', seed = 1, repeat = [1, 1], strength = 0.16, N = 512) {
  const r = rng(seed);
  const [c] = paint(N, base, clouds(N, r), strength * 1.6, 20, r);
  return tex(c, { repeat });
}

// Porcelanato grande (90x90) com rejunte fino — a textura tem 2x2 placas
export function tiles(base = '#6f6d6a', seed = 3, size = 0.9, N = 1024) {
  const r = rng(seed);
  const [c, ctx] = paint(N, base, clouds(N, r), 0.14, 10, r);
  ctx.fillStyle = 'rgba(20,18,16,0.6)';
  const g = Math.max(2, N / 256);
  for (const i of [0, N / 2, N]) { ctx.fillRect(i - g / 2, 0, g, N); ctx.fillRect(0, i - g / 2, N, g); }
  const t = tex(c);
  t.userData.tileSize = size * 2;
  return t;
}

// Madeira (nogueira) — veios longitudinais com leve ondulação, réguas com tons diferentes
export function wood(base = [92, 58, 36], seed = 7, { dark = 0.0, N = 1024 } = {}) {
  const r = rng(seed);
  const [R, G, B] = base.map(v => v * (1 - dark));
  const profile = new Float32Array(N);
  for (let k = 0; k < 90; k++) {
    const c0 = r() * N, w = (0.6 + r() * 3.5) * N / 512, amp = (r() - 0.6) * 0.22;
    for (let dx = -24; dx <= 24; dx++) profile[((Math.round(c0) + dx) % N + N) % N] += amp * Math.exp(-(dx / w) * (dx / w));
  }
  const planks = [0, 1, 2, 3].map(() => 0.88 + r() * 0.24);
  const ph1 = r() * 6.28, ph2 = r() * 6.28;
  const [c, ctx] = canvas(N);
  const img = ctx.createImageData(N, N), d = img.data;
  for (let y = 0; y < N; y++) {
    const wy = (Math.sin(y / N * 6.283 + ph1) * 5 + Math.sin(y / N * 18.85 + ph2) * 2) * N / 512;
    for (let x = 0; x < N; x++) {
      const warp = wy * (1 + 0.6 * Math.sin(x / N * 12.566));
      const k = planks[Math.floor(x * 4 / N)] * (1 + profile[((x + Math.round(warp)) % N + N) % N]);
      const n = (r() - 0.5) * 8, p = (y * N + x) * 4;
      d[p] = R * k + n; d[p + 1] = G * k + n; d[p + 2] = B * k + n; d[p + 3] = 255;
    }
  }
  ctx.putImageData(img, 0, 0);
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

// Granito preto — base escura com grãos claros
export function granite(seed = 41) {
  const N = 512, r = rng(seed);
  const [c, ctx] = paint(N, '#161616', clouds(N, r), 0.25, 14, r);
  for (let i = 0; i < 2600; i++) {
    const v = 70 + r() * 110;
    ctx.fillStyle = `rgba(${v},${v * 0.97},${v * 0.92},${0.25 + r() * 0.5})`;
    ctx.fillRect(r() * N, r() * N, 1 + r() * 2, 1 + r() * 2);
  }
  return tex(c);
}

// Tecido (sofá, cama) — trama fina
export function fabric(base = '#5a5550', seed = 5) {
  const N = 256, r = rng(seed);
  const [R, G, B] = rgbOf(base);
  const [c, ctx] = canvas(N);
  const img = ctx.createImageData(N, N), d = img.data;
  for (let y = 0; y < N; y++) for (let x = 0; x < N; x++) {
    const k = 1 + (y % 2 ? 0.03 : -0.01) - (x % 2 ? 0.04 : 0) + (r() - 0.5) * 0.12, p = (y * N + x) * 4;
    d[p] = R * k; d[p + 1] = G * k; d[p + 2] = B * k; d[p + 3] = 255;
  }
  ctx.putImageData(img, 0, 0);
  return tex(c);
}

// Couro (sofá caramelo) — manchas + poros
export function leather(base = '#7b3f1d', seed = 9) {
  const r = rng(seed);
  const [c] = paint(512, base, clouds(512, r), 0.16, 22, r);
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
