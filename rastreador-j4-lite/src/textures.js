import * as THREE from 'three';
import { D, HOLES, WIRE_PADS, FRONT, BACK } from './layout.js';

// ------------------------------------------------------------------ utilidades de canvas
function canvas(w, h) { const c = document.createElement('canvas'); c.width = w; c.height = h; return c; }
function rand(seed) { let s = seed >>> 0 || 1; return () => ((s = (s * 16807) % 2147483647) / 2147483647); }
export function tex(c, { srgb = true, aniso = 8, repeat = false } = {}) {
  const t = new THREE.CanvasTexture(c);
  if (srgb) t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = aniso;
  if (repeat) t.wrapS = t.wrapT = THREE.RepeatWrapping;
  return t;
}
// ruído leve pixel a pixel (granulado de plástico, papel, metal)
function grain(ctx, w, h, amount, seed = 7) {
  const r = rand(seed), img = ctx.getImageData(0, 0, w, h), d = img.data;
  for (let i = 0; i < d.length; i += 4) {
    const n = (r() - 0.5) * amount;
    d[i] += n; d[i + 1] += n; d[i + 2] += n;
  }
  ctx.putImageData(img, 0, 0);
}
function rr(ctx, x, y, w, h, r) {
  r = Math.min(r, w / 2, h / 2);
  ctx.beginPath();
  ctx.moveTo(x + r, y); ctx.arcTo(x + w, y, x + w, y + h, r); ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r); ctx.arcTo(x, y, x + w, y, r); ctx.closePath();
}

// ------------------------------------------------------------------ placa: as duas faces da mesma PCB
const PXU = 24; // pixels por unidade
export const PCB_TEX = { W: (D.B_X1 - D.B_X0) * PXU, H: (D.B_Y1 - D.B_Y0) * PXU };

function pcbFace(face) {
  const { W, H } = PCB_TEX, c = canvas(W, H), ctx = c.getContext('2d');
  // frente: vista de frente; verso: vista de trás (espelhada em X, como na foto do verso)
  const X = x => (face === 'front' ? x - D.B_X0 : D.B_X1 - x) * PXU;
  const Y = y => (D.B_Y1 - y) * PXU;
  const U = v => v * PXU;
  const r = rand(face === 'front' ? 11 : 23);

  // máscara verde com leve variação
  ctx.fillStyle = '#17602d'; ctx.fillRect(0, 0, W, H);
  const pour = (x0, y0, x1, y1) => { // plano de cobre sob a máscara (mais claro)
    ctx.fillStyle = '#1d6e36';
    rr(ctx, Math.min(X(x0), X(x1)), Y(y1), Math.abs(X(x1) - X(x0)), Y(y0) - Y(y1), U(0.6)); ctx.fill();
  };
  const trace = (pts, w = 0.28) => {
    ctx.strokeStyle = '#258241'; ctx.lineWidth = U(w); ctx.lineJoin = ctx.lineCap = 'round';
    ctx.beginPath(); pts.forEach(([x, y], i) => (i ? ctx.lineTo(X(x), Y(y)) : ctx.moveTo(X(x), Y(y)))); ctx.stroke();
  };
  const via = (x, y) => {
    ctx.fillStyle = '#c9a24a'; ctx.beginPath(); ctx.arc(X(x), Y(y), U(0.32), 0, 7); ctx.fill();
    ctx.fillStyle = '#0d2a16'; ctx.beginPath(); ctx.arc(X(x), Y(y), U(0.14), 0, 7); ctx.fill();
  };
  const gold = '#d4a54a';
  const pad = (x, y, w, h) => { ctx.fillStyle = gold; ctx.fillRect(X(x) - U(w) / 2, Y(y) - U(h) / 2, U(w), U(h)); };
  const silk = '#eef0e6';
  const box = (x, y, w, h, lw = 0.13) => { ctx.strokeStyle = silk; ctx.lineWidth = U(lw); ctx.strokeRect(X(x) - U(w) / 2, Y(y) - U(h) / 2, U(w), U(h)); };
  const text = (s, x, y, size = 0.9, rot = 0) => {
    ctx.save(); ctx.translate(X(x), Y(y)); ctx.rotate(rot);
    ctx.fillStyle = silk; ctx.font = `600 ${U(size)}px "DejaVu Sans", Arial, sans-serif`; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.fillText(s, 0, 0); ctx.restore();
  };

  if (face === 'front') {
    pour(-10.4, -38.2, 10.4, -31.2);
    pour(-10.6, -24.6, -8.6, -6.2); pour(8.6, -24.6, 10.6, -6.2);
    pour(-10.6, 2.8, -9.6, 20.4); pour(9.6, 2.8, 10.6, 20.4);
    // trilhas visíveis entre os componentes
    trace([[-6.2, 32.4], [-6.2, 30.8], [-7.2, 30.2]]);
    trace([[-3.4, 32.4], [-3.4, 29.4], [-4.0, 28.6]]);
    trace([[-0.6, 32.4], [-0.6, 30.4], [-1.2, 29.9]]);
    trace([[2.2, 32.4], [2.2, 30.6], [3.6, 30.0]]);
    trace([[5.0, 32.4], [5.6, 31.2], [6.6, 30.2]]);
    trace([[9.6, 26.2], [9.6, 24.6], [8.6, 23.6]]);
    trace([[-8.8, 25.0], [-9.0, 23.3]]);
    trace([[-3.6, 23.5], [-6.0, 23.5], [-6.0, 25.2]]);
    trace([[3.6, 23.5], [4.8, 22.9]]);
    trace([[6.4, -1.8], [6.4, -4.6], [8.4, -6.0], [8.4, -22.0], [6.0, -25.6]]);
    trace([[-5.4, -1.2], [-8.4, -4.4], [-8.4, -22.0], [-6.0, -25.6]]);
    trace([[-2.4, -25.6], [-2.4, -24.4]]); trace([[2.4, -25.6], [2.4, -24.4]]);
    trace([[-3.8, -0.6], [-4.6, 0.8]]); trace([[3.8, -0.6], [4.6, 1.0]]);
    [[-9.8, 21.2], [9.8, 21.2], [-9.9, 1.8], [9.9, 1.8], [-9.6, -5.4], [9.6, -5.4], [-7.4, -31.8], [7.4, -31.8],
      [-4.2, -33.6], [4.2, -33.6], [0, -35.4], [-8.8, -36.2], [8.8, -36.2], [-9.8, -18.6], [9.8, -18.6],
      [-1.6, 31.4], [7.8, 31.8], [-9.8, 27.2]].forEach(([x, y]) => via(x, y));

    // pads e serigrafia por componente
    const { sw, ant, usb, sim, leds, diodes } = FRONT;
    [[-1, -1], [1, -1], [-1, 1], [1, 1]].forEach(([a, b]) => pad(sw.x + a * (sw.w / 2 + 0.2), sw.y + b * 1.1, 1.0, 0.8));
    text('SW1', sw.x - 5.6, sw.y + 0.2, 0.8, -Math.PI / 2);
    box(ant.x, ant.y, ant.s + 0.9, ant.s + 0.9, 0.12);
    text('ANT', ant.x - 10.0, ant.y - 6.2, 0.75, -Math.PI / 2);
    pad(usb.x - 4.3, usb.y, 1.0, 2.2); pad(usb.x + 4.3, usb.y, 1.0, 2.2);
    for (let i = 0; i < 5; i++) pad(usb.x - 1.3 + i * 0.65, usb.y + 2.1, 0.35, 1.0);
    // porta-SIM: pads das lâminas e abas de solda
    for (let i = 0; i < 7; i++) pad(sim.x - 4.8 + i * 1.6, sim.y + sim.h / 2 + 0.7, 0.8, 1.6);
    pad(sim.x - sim.w / 2 - 0.4, sim.y - 5, 1.0, 2.4); pad(sim.x + sim.w / 2 + 0.4, sim.y - 5, 1.0, 2.4);
    pad(sim.x - sim.w / 2 - 0.4, sim.y + 4, 1.0, 2.4); pad(sim.x + sim.w / 2 + 0.4, sim.y + 4, 1.0, 2.4);
    text('SIM1', sim.x - 9.6, sim.y - 2, 0.75, -Math.PI / 2);
    leds.forEach((l, i) => { pad(l.x - 0.75, l.y, 0.7, 0.9); pad(l.x + 0.75, l.y, 0.7, 0.9); box(l.x, l.y, 2.6, 1.6, 0.1); text(['LED1', 'LED2'][i], l.x + (i ? 2.6 : -2.6), l.y - 1.6, 0.6); });
    diodes.forEach((d, i) => { pad(d.x, d.y + 1.9, 1.6, 1.3); pad(d.x, d.y - 1.9, 1.6, 1.3); text('D' + (i + 1), d.x, d.y - 3.4, 0.6); });
    text('SBS', -9.9, 30.2, 0.75, Math.PI / 2);
    text('Q1', -7.2, 31.1, 0.55); text('Q2', -4.0, 26.4, 0.55); text('Q3', -1.2, 31.3, 0.55);
    text('C3', 8.9, 25.0, 0.55); text('R7', -9.8, 24.4, 0.5, -Math.PI / 2);
    text('J2', usb.x - 5.6, usb.y - 1.3, 0.6);
  } else {
    // verso: componentes na parte de cima; a região da bateria fica só com a máscara e algumas vias (como na foto)
    pour(-10.6, 22.6, -8.0, 26.2);
    pour(-0.4, 23.6, 4.0, 26.8);
    const sh = BACK.shield;
    // moldura dourada da blindagem
    ctx.strokeStyle = gold; ctx.lineWidth = U(0.5);
    ctx.beginPath();
    const P = [[sh.x0 + sh.nx, sh.y0], [sh.x1, sh.y0], [sh.x1, sh.y1], [sh.x0, sh.y1], [sh.x0, sh.y0 + sh.ny], [sh.x0 + sh.nx, sh.y0 + sh.ny]];
    P.forEach(([x, y], i) => (i ? ctx.lineTo(X(x), Y(y)) : ctx.moveTo(X(x), Y(y)))); ctx.closePath(); ctx.stroke();
    trace([[-8.6, 3.6], [-8.6, 5.2], [-7.0, 6.6]]);
    trace([[-6.2, 3.6], [-6.2, 4.4], [-4.0, 5.4], [-1.0, 5.4]]);
    trace([[-5.2, 10.4], [-5.2, 15.6]]);
    trace([[-2.2, 16.6], [-2.2, 21.0], [-1.6, 21.6]]);
    trace([[-1.6, 26.6], [-1.6, 24.8]]);
    trace([[3.6, 28.2], [2.6, 30.4]]);
    trace([[-9.2, 25.4], [-9.2, 23.6]]);
    trace([[-9.4, 15.6], [-9.4, 18.0]]);
    trace([[1.8, 4.4], [1.8, 5.2]]);
    [[-9.8, 10.8], [-9.8, 6.0], [-3.2, 4.2], [0.4, 22.6], [9.6, 23.0], [3.6, 31.4], [-6.4, 33.4],
      // poucas vias na área lisa da bateria (como na placa nua)
      [-6.8, -6.0], [5.2, -10.4], [-2.6, -15.8], [6.8, -21.4], [-5.8, -26.8], [1.2, -31.4], [-8.4, -36.4], [8.6, -36.4]].forEach(([x, y]) => via(x, y));
    const { cap, soic, ind, tant, batPads } = BACK;
    // capacitor: pads e contorno com canto chanfrado (polaridade)
    pad(cap.x, cap.y + 2.4, 1.4, 2.2); pad(cap.x, cap.y - 2.4, 1.4, 2.2);
    box(cap.x, cap.y, 7.0, 7.0, 0.12);
    text('C1', cap.x - 4.4, cap.y + 2.6, 0.6);
    for (let i = 0; i < 4; i++) { pad(soic.x - 1.9 + i * 1.27, soic.y + 2.8, 0.55, 1.3); pad(soic.x - 1.9 + i * 1.27, soic.y - 2.8, 0.55, 1.3); }
    text('U1', soic.x, soic.y - 4.3, 0.6);
    pad(ind.x, ind.y + 2.2, 4.0, 1.6); pad(ind.x, ind.y - 2.2, 4.0, 1.6);
    text('L1', ind.x + 3.6, ind.y + 3.4, 0.6);
    pad(tant.x, tant.y + 1.8, 2.0, 1.3); pad(tant.x, tant.y - 1.8, 2.0, 1.3);
    text('C9', tant.x + 2.5, tant.y - 2.6, 0.55);
    BACK.diodes.forEach((d, i) => { pad(d.x, d.y + 1.9, 1.6, 1.3); pad(d.x, d.y - 1.9, 1.6, 1.3); text('D' + (4 + i), d.x + 1.9, d.y - 3.0, 0.5); });
    batPads.forEach(p => { ctx.fillStyle = gold; ctx.beginPath(); ctx.arc(X(p.x), Y(p.y), U(0.7), 0, 7); ctx.fill(); });
    text('BAT', -7.4, 4.6, 0.55);
    text('SBS', -9.9, 30.0, 0.75, -Math.PI / 2);
  }

  // pads comuns às duas faces
  for (const h of HOLES) if (h.ring) { ctx.fillStyle = gold; ctx.beginPath(); ctx.arc(X(h.x), Y(h.y), U(h.ring), 0, 7); ctx.fill(); }
  for (const p of WIRE_PADS) { ctx.fillStyle = gold; ctx.beginPath(); ctx.arc(X(p.x), Y(p.y), U(p.ring), 0, 7); ctx.fill(); }
  // pads dos componentes pequenos
  const list = face === 'front' ? FRONT : BACK;
  for (const s of list.sot) {
    const v = s.r ? 1 : 0;
    const P = v ? [[-1.1, -0.95], [-1.1, 0.95], [1.1, 0]] : [[-0.95, -1.1], [0.95, -1.1], [0, 1.1]];
    P.forEach(([a, b]) => pad(s.x + a, s.y + b, v ? 0.9 : 0.7, v ? 0.7 : 0.9));
  }
  for (const s of list.r0603) s.v ? (pad(s.x, s.y + 0.75, 0.9, 0.7), pad(s.x, s.y - 0.75, 0.9, 0.7)) : (pad(s.x + 0.75, s.y, 0.7, 0.9), pad(s.x - 0.75, s.y, 0.7, 0.9));
  for (const s of list.r0402) s.v ? (pad(s.x, s.y + 0.48, 0.6, 0.45), pad(s.x, s.y - 0.48, 0.6, 0.45)) : (pad(s.x + 0.48, s.y, 0.45, 0.6), pad(s.x - 0.48, s.y, 0.45, 0.6));

  grain(ctx, W, H, 7, face === 'front' ? 3 : 5);
  // furos: escuro (a geometria também é vazada)
  ctx.fillStyle = '#0b0f0c';
  for (const h of [...HOLES, ...WIRE_PADS]) { ctx.beginPath(); ctx.arc(X(h.x), Y(h.y), U(h.r), 0, 7); ctx.fill(); }
  return c;
}
export const pcbFront = () => tex(pcbFace('front'));
export const pcbBack = () => tex(pcbFace('back'));

// ------------------------------------------------------------------ painel fosco da tampa (com a marca) e do fundo
// Desenhado em coordenadas do equipamento: x ∈ [-HW, HW], y ∈ [-HL, HL]; topo do canvas = ponta do chicote
export function panelTexture(withLogo) {
  const ppu = 14, W = Math.round(2 * D.HW * ppu), H = Math.round(2 * D.HL * ppu);
  const c = canvas(W, H), ctx = c.getContext('2d');
  ctx.fillStyle = '#161617'; ctx.fillRect(0, 0, W, H);
  grain(ctx, W, H, 16, withLogo ? 31 : 37);
  if (withLogo) {
    const cx = W / 2 - 0.9 * ppu;
    // ícone de trilhas convergentes (próximo da ponta do chicote)
    ctx.strokeStyle = '#4a4a4e'; ctx.fillStyle = '#4a4a4e'; ctx.lineWidth = 0.42 * ppu; ctx.lineCap = 'round';
    const iy = 10.5 * ppu;
    const lines = [[-3.2, -2.0, 0.6], [-1.6, -2.8, 0.0], [0.4, -2.4, -0.6], [2.2, -1.2, -1.2]];
    for (const [ox, oy, k] of lines) {
      ctx.beginPath(); ctx.moveTo(cx + ox * ppu, iy + oy * ppu); ctx.lineTo(cx + ox * ppu, iy + (oy + 1.4) * ppu);
      ctx.lineTo(cx + (ox * 0.25 + k * 0.3) * ppu, iy + 2.8 * ppu); ctx.lineTo(cx + (ox * 0.25 + k * 0.3) * ppu, iy + 4.6 * ppu); ctx.stroke();
      ctx.beginPath(); ctx.arc(cx + ox * ppu, iy + oy * ppu, 0.55 * ppu, 0, 7); ctx.fill();
    }
    // "REALTRACKER" ao longo do comprimento (lido da ponta do chicote para baixo)
    ctx.save(); ctx.translate(cx, 21.5 * ppu); ctx.rotate(Math.PI / 2);
    ctx.fillStyle = '#4c4c50'; ctx.font = `500 ${3.4 * ppu}px "DejaVu Sans", Arial, sans-serif`; ctx.textBaseline = 'middle';
    const word = 'REALTRACKER', spacing = 1.55 * ppu;
    let x = 0; for (const ch of word) { ctx.fillText(ch, x, 0); x += ctx.measureText(ch).width + spacing; }
    ctx.restore();
  }
  return tex(c);
}

// ------------------------------------------------------------------ etiqueta de IMEI (lateral)
export function labelTexture() {
  const W = 1400, H = 352, c = canvas(W, H), ctx = c.getContext('2d');
  ctx.fillStyle = '#f7f7f4'; ctx.fillRect(0, 0, W, H);
  // código de barras (ilustrativo)
  const r = rand(99); let x = 60;
  ctx.fillStyle = '#111';
  while (x < 1180) { const w = 3 + Math.floor(r() * 4) * 3; if (r() > 0.42) ctx.fillRect(x, 34, w, 190); x += w + 3 + Math.floor(r() * 3) * 3; }
  ctx.font = '600 64px "DejaVu Sans Mono", monospace'; ctx.textBaseline = 'alphabetic';
  ctx.fillText('IMEI:860000000000000', 60, 306);
  // selo 4G
  ctx.font = 'italic 800 92px "DejaVu Sans", Arial, sans-serif';
  ctx.fillText('4G', 1222, 300);
  ctx.lineWidth = 10; ctx.strokeStyle = '#111';
  for (let i = 0; i < 3; i++) { ctx.beginPath(); ctx.arc(1262, 182, 30 + i * 26, -Math.PI * 0.85, -Math.PI * 0.35); ctx.stroke(); }
  grain(ctx, W, H, 6, 4);
  return tex(c);
}

// ------------------------------------------------------------------ "ON OFF" ao lado do acesso à chave
export function onOffTexture() {
  const c = canvas(512, 128), ctx = c.getContext('2d');
  ctx.fillStyle = '#b9b9bd'; ctx.font = '600 84px "DejaVu Sans", Arial, sans-serif'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.fillText('ON', 140, 66); ctx.fillText('OFF', 370, 66);
  return tex(c);
}

// ------------------------------------------------------------------ antena cerâmica (topo)
export function antennaTexture() {
  const s = 18, ppu = 28, W = s * ppu, c = canvas(W, W), ctx = c.getContext('2d');
  ctx.fillStyle = '#7b4a2b'; ctx.fillRect(0, 0, W, W);
  grain(ctx, W, W, 18, 41);
  const m = 1.25 * ppu;
  ctx.fillStyle = '#ebe5d6'; ctx.fillRect(m, m, W - 2 * m, W - 2 * m);
  // textura de prata sinterizada
  const r = rand(5);
  for (let i = 0; i < 2600; i++) { ctx.fillStyle = `rgba(${r() > 0.5 ? '255,255,255' : '150,140,120'},${r() * 0.16})`; ctx.fillRect(m + r() * (W - 2 * m), m + r() * (W - 2 * m), 2, 2); }
  ctx.fillStyle = 'rgba(214,170,90,0.9)'; ctx.fillRect(W * 0.62, W * 0.33, 3, 3);
  ctx.save(); ctx.translate(m + 1.5 * ppu, W * 0.58); ctx.rotate(-Math.PI / 2);
  ctx.fillStyle = '#2a2a2a'; ctx.font = `600 ${1.4 * ppu}px "DejaVu Sans Mono", monospace`; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.fillText('070', 0, 0); ctx.restore();
  return tex(c);
}

// ------------------------------------------------------------------ topo do capacitor eletrolítico (10 µF 100 V)
export function capTopTexture() {
  const W = 256, c = canvas(W, W), ctx = c.getContext('2d');
  ctx.fillStyle = '#c9cbcd'; ctx.fillRect(0, 0, W, W);
  grain(ctx, W, W, 14, 8);
  ctx.fillStyle = '#121212';
  ctx.beginPath(); ctx.arc(W / 2, W / 2, W * 0.5, Math.PI * 0.5, Math.PI * 1.5); ctx.closePath(); ctx.fill();
  ctx.fillStyle = '#121212'; ctx.font = '700 52px "DejaVu Sans", Arial, sans-serif'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.fillStyle = '#e9e9e9'; ctx.fillText('10', 100, 74);
  ctx.fillText('100V', 120, 128); ctx.fillText('VT', 96, 184);
  return tex(c);
}

// ------------------------------------------------------------------ marcação "470" do indutor
export function inductorTexture() {
  const W = 256, c = canvas(W, W), ctx = c.getContext('2d');
  ctx.fillStyle = '#2b2b2d'; ctx.fillRect(0, 0, W, W);
  grain(ctx, W, W, 12, 9);
  ctx.save(); ctx.translate(W / 2, W / 2); ctx.rotate(Math.PI / 2);
  ctx.fillStyle = '#c8c8c8'; ctx.font = '600 92px "DejaVu Sans", Arial, sans-serif'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.fillText('470', 0, 4); ctx.restore();
  return tex(c);
}

// ------------------------------------------------------------------ chapa amassada da blindagem / metal escovado
export function metalNoise(seed = 3, base = 200, amount = 26) {
  const W = 256, c = canvas(W, W), ctx = c.getContext('2d');
  ctx.fillStyle = `rgb(${base},${base},${base - 3})`; ctx.fillRect(0, 0, W, W);
  const r = rand(seed);
  for (let i = 0; i < 900; i++) {
    const x = r() * W, y = r() * W, len = 6 + r() * 26, a = r() * Math.PI;
    ctx.strokeStyle = `rgba(${r() > 0.5 ? '255,255,255' : '60,60,60'},${0.05 + r() * 0.09})`; ctx.lineWidth = 1 + r() * 2;
    ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x + Math.cos(a) * len, y + Math.sin(a) * len); ctx.stroke();
  }
  grain(ctx, W, W, amount, seed + 1);
  return tex(c, { repeat: true });
}

// ------------------------------------------------------------------ brilho suave (pontos de luz)
export function glowTexture() {
  const c = canvas(64, 64), ctx = c.getContext('2d');
  const g = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
  g.addColorStop(0, 'rgba(255,255,255,1)'); g.addColorStop(0.3, 'rgba(255,255,255,0.45)'); g.addColorStop(1, 'rgba(255,255,255,0)');
  ctx.fillStyle = g; ctx.fillRect(0, 0, 64, 64);
  return tex(c);
}
