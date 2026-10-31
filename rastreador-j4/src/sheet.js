// Folha de desenho técnico do J4 (o equivalente à "planta baixa").
// Desenhada em coordenadas do mundo: o equipamento deitado com a tampa para cima e o chicote para a esquerda,
// de modo que a vista frontal da folha coincide com o objeto 3D que surge em cima dela.
//   mundo x = -S·y_eq   mundo z = -S·x_eq
import { D, S, SETS } from './layout.js';

export const SHEET = { x0: -168, x1: 142, z0: -104, z1: 92 };

const INK = '#231d2e', SOFT = 'rgba(43,36,54,0.66)', ACC = '#6B4FA0', PAPER = '#f6f5f9';
const MONO = '"JetBrains Mono", "DejaVu Sans Mono", ui-monospace, monospace';
const SANS = '"Inter", "DejaVu Sans", Arial, sans-serif';
const sstep = t => { t = Math.min(1, Math.max(0, t)); return t * t * (3 - 2 * t); };

// percurso de cada fio do chicote fora da carcaça (mesma regra do modelo): [x_eq, y_eq]
export function wirePath(j, n = 40) {
  const xg = (3 - j) * 0.03;
  const xc = j < 4 ? D.CONN_A.x + (1.5 - j) * 0.045 : D.CONN_B.x + (5 - j) * 0.04 * Math.cos(0.349);
  const ya = 0.568, yb = D.CONN_Y[0] - 0.08, pts = [];
  for (let i = 0; i <= n; i++) {
    const y = ya + (yb - ya) * i / n, t = sstep((y - ya) / (yb - ya));
    pts.push([xg + (xc - xg) * t - 0.035 * Math.sin(Math.PI * (y - ya) / (yb - ya)), y]);
  }
  pts.push([xc, D.CONN_Y[0]]);
  return pts;
}

export function drawSheet(ppu) {
  const W = Math.round((SHEET.x1 - SHEET.x0) * ppu), H = Math.round((SHEET.z1 - SHEET.z0) * ppu);
  const mk = () => { const c = document.createElement('canvas'); c.width = W; c.height = H; return c; };
  const X = x => (x - SHEET.x0) * ppu, Z = z => (z - SHEET.z0) * ppu, U = v => v * ppu;

  // ---------------- papel
  const paper = mk(), p = paper.getContext('2d');
  p.fillStyle = PAPER; p.fillRect(0, 0, W, H);
  let s = 777; const r = () => ((s = (s * 16807) % 2147483647) / 2147483647);
  for (let i = 0; i < W * H / 260; i++) { p.fillStyle = `rgba(${r() > 0.5 ? '255,255,255' : '110,100,140'},${r() * 0.045})`; p.fillRect(r() * W, r() * H, 1 + r() * 3, 1); }
  p.lineWidth = Math.max(1, U(0.08));
  for (let x = Math.ceil(SHEET.x0 / 5) * 5; x <= SHEET.x1; x += 5) { p.strokeStyle = x % 25 === 0 ? 'rgba(107,79,160,0.16)' : 'rgba(107,79,160,0.07)'; p.beginPath(); p.moveTo(X(x), 0); p.lineTo(X(x), H); p.stroke(); }
  for (let z = Math.ceil(SHEET.z0 / 5) * 5; z <= SHEET.z1; z += 5) { p.strokeStyle = z % 25 === 0 ? 'rgba(107,79,160,0.16)' : 'rgba(107,79,160,0.07)'; p.beginPath(); p.moveTo(0, Z(z)); p.lineTo(W, Z(z)); p.stroke(); }
  p.strokeStyle = 'rgba(43,36,54,0.6)'; p.lineWidth = U(0.35);
  p.strokeRect(U(4), U(4), W - U(8), H - U(8));

  // ---------------- tinta
  const ink = mk(), c = ink.getContext('2d');
  c.drawImage(paper, 0, 0);
  c.lineJoin = c.lineCap = 'round';
  const line = (pts, w = 0.42, color = INK, dash = null, close = false) => {
    c.strokeStyle = color; c.lineWidth = U(w); c.setLineDash(dash ? dash.map(U) : []);
    c.beginPath(); pts.forEach(([x, z], i) => (i ? c.lineTo(X(x), Z(z)) : c.moveTo(X(x), Z(z)))); if (close) c.closePath(); c.stroke();
    c.setLineDash([]);
  };
  const rect = (x0, z0, x1, z1, rad = 0, w = 0.32, color = INK, dash = null) => {
    const [a, b] = [Math.min(x0, x1), Math.max(x0, x1)], [e, f] = [Math.min(z0, z1), Math.max(z0, z1)];
    c.strokeStyle = color; c.lineWidth = U(w); c.setLineDash(dash ? dash.map(U) : []);
    c.beginPath(); c.roundRect(X(a), Z(e), U(b - a), U(f - e), U(rad)); c.stroke(); c.setLineDash([]);
  };
  const text = (t, x, z, size = 2.2, { font = MONO, weight = 500, color = INK, align = 'left', base = 'alphabetic', rot = 0, track = 0 } = {}) => {
    c.save(); c.translate(X(x), Z(z)); c.rotate(rot);
    c.fillStyle = color; c.font = `${weight === 500 ? 600 : weight} ${U(size * 1.12)}px ${font}`; c.textAlign = align; c.textBaseline = base;
    if ('letterSpacing' in c) c.letterSpacing = `${U(track)}px`;
    c.fillText(t, 0, 0); c.restore();
  };
  const dim = (x0, z0, x1, z1, label, off, { vertical = false } = {}) => {
    c.strokeStyle = ACC; c.fillStyle = ACC; c.lineWidth = U(0.22);
    const arrow = (x, z, dx, dz) => { const a = Math.atan2(dz, dx); c.beginPath(); c.moveTo(X(x), Z(z)); c.lineTo(X(x) - U(1.8) * Math.cos(a - 0.3), Z(z) - U(1.8) * Math.sin(a - 0.3)); c.lineTo(X(x) - U(1.8) * Math.cos(a + 0.3), Z(z) - U(1.8) * Math.sin(a + 0.3)); c.closePath(); c.fill(); };
    if (!vertical) {
      const zz = z0 + off;
      line([[x0, z0], [x0, zz + Math.sign(off) * 1.5]], 0.22, ACC); line([[x1, z1], [x1, zz + Math.sign(off) * 1.5]], 0.22, ACC);
      line([[x0, zz], [x1, zz]], 0.30, ACC); arrow(x0, zz, -1, 0); arrow(x1, zz, 1, 0);
      text(label, (x0 + x1) / 2, zz - 1.0, 2.3, { color: ACC, align: 'center', weight: 600 });
    } else {
      const xx = x0 + off;
      line([[x0, z0], [xx + Math.sign(off) * 1.5, z0]], 0.22, ACC); line([[x1, z1], [xx + Math.sign(off) * 1.5, z1]], 0.22, ACC);
      line([[xx, z0], [xx, z1]], 0.30, ACC); arrow(xx, z0, 0, -1); arrow(xx, z1, 0, 1);
      text(label, xx + (off > 0 ? 1.6 : -1.6), (z0 + z1) / 2, 2.3, { color: ACC, align: off > 0 ? 'left' : 'right', base: 'middle', weight: 600 });
    }
  };
  const balloon = (n, x, z, tx, tz) => {
    line([[tx, tz], [x, z]], 0.24, ACC);
    c.fillStyle = ACC; c.beginPath(); c.arc(X(tx), Z(tz), U(0.55), 0, 7); c.fill();
    c.fillStyle = PAPER; c.strokeStyle = ACC; c.lineWidth = U(0.28); c.beginPath(); c.arc(X(x), Z(z), U(2.6), 0, 7); c.fill(); c.stroke();
    text(n, x, z + 0.05, 2.2, { color: ACC, align: 'center', base: 'middle', weight: 700 });
  };

  // ======== VISTA FRONTAL (de cima, coincide com o objeto 3D)
  const fx = ye => -S * ye, fz = xe => -S * xe;
  const hl = S * D.CL / 2, hw = S * D.CW / 2;
  text('VISTA FRONTAL', -150, -27, 2.4, { weight: 700, track: 0.4 });
  text('tampa para cima · chicote à esquerda', -150, -24, 1.7, { color: SOFT });
  rect(-hl, -hw, hl, hw, S * D.CR, 0.45);
  rect(-hl + 1.1, -hw + 1.1, hl - 1.1, hw - 1.1, S * D.CR - 1, 0.16, SOFT);
  // ressalto e passa-fios
  rect(fx(0.5), fz(D.BOSS[0]), fx(D.BOSS[1]), fz(-D.BOSS[0]), 0.6, 0.38);
  rect(fx(D.BOSS[1]), fz(0.135), fx(0.552), fz(-0.135), 0.6, 0.38);
  rect(fx(0.552), fz(0.124), fx(0.568), fz(-0.124), 0.6, 0.32);
  // ocultos: placa, antena (no verso), bateria
  rect(fx(D.PCB.y0), fz(D.PCB.x), fx(D.PCB.y1), fz(-D.PCB.x), 0.4, 0.22, SOFT, [1.2, 0.8]);
  rect(fx(-0.096), fz(0.201), fx(0.300), fz(-0.195), 0.8, 0.16, SOFT, [1.2, 0.8]);
  rect(fx(-0.148), fz(-0.175), fx(-0.375), fz(0.100), 0.4, 0.16, SOFT, [1.2, 0.8]);
  rect(fx(D.BAT.y0), fz(D.BAT.x0), fx(D.BAT.y1), fz(D.BAT.x1), 0.6, 0.14, 'rgba(107,79,160,0.55)', [2.4, 0.8, 0.4, 0.8]);
  // fios e conectores
  for (let j = 0; j < 7; j++) line(wirePath(j).map(([xe, ye]) => [fx(ye), fz(xe)]), 0.3);
  const cy0 = fx(D.CONN_Y[0]), cy1 = fx(D.CONN_Y[1]);
  rect(cy0, fz(D.CONN_A.x - D.CONN_A.w / 2), cy1, fz(D.CONN_A.x + D.CONN_A.w / 2), 0.4, 0.45);
  rect(cy0 - 3.5, fz(D.CONN_A.x + D.CONN_A.w / 2), cy0 - 10.5, fz(D.CONN_A.x + D.CONN_A.w / 2 + 0.024), 0.3, 0.3);
  rect(cy0 - 3.5, fz(D.CONN_A.x - D.CONN_A.w / 2), cy0 - 10.5, fz(D.CONN_A.x - D.CONN_A.w / 2 - 0.024), 0.3, 0.3);
  const bh = 0.075 * Math.cos(0.349) + 0.055 * Math.sin(0.349);
  rect(cy0, fz(D.CONN_B.x - bh), cy1, fz(D.CONN_B.x + bh), 0.4, 0.45);
  for (let k = 0; k < 4; k++) line([[cy1, fz(D.CONN_A.x + (k - 1.5) * 0.045)], [cy1 + 2.4, fz(D.CONN_A.x + (k - 1.5) * 0.045)]], 0.2, SOFT);
  // eixo
  line([[-118, 0], [44, 0]], 0.16, 'rgba(107,79,160,0.5)', [5, 1, 1, 1]);
  // cotas (proporções; sem medidas reais)
  dim(-hl, -hw, hl, -hw, 'L = 1,00', -8);
  dim(hl, -hw, hl, hw, '0,56 L', 6, { vertical: true });
  dim(cy1, hw, -hl, hw, 'chicote ≈ 1,1 L', 8);

  // ======== VISTA LATERAL (lado -X do equipamento; a face THIS SIDE UP fica para baixo)
  const zb = -45, lz = ze => zb - S * ze;
  text('VISTA LATERAL', -150, -75, 2.4, { weight: 700, track: 0.4 });
  text('lado "4G ● ● GPS"', -150, -72, 1.7, { color: SOFT });
  c.strokeStyle = INK; c.lineWidth = U(0.42);
  c.beginPath(); c.roundRect(X(-hl), Z(lz(D.CH)), U(2 * hl), U(S * D.CH), [U(0.5), U(0.5), U(1.6), U(1.6)]); c.stroke();
  c.beginPath(); c.roundRect(X(-hl), Z(lz(D.SEAT + D.LID)), U(2 * hl), U(S * D.LID), [U(1.2), U(1.2), U(0.4), U(0.4)]); c.stroke();
  rect(fx(0.5), lz(0.02), fx(D.BOSS[1]), lz(D.CH), 0.5, 0.32);
  rect(fx(D.BOSS[1]), lz(0.0455), fx(0.568), lz(0.2195), 0.6, 0.32);
  rect(fx(D.PCB.y0), lz(D.PCB.z0), fx(D.PCB.y1), lz(D.PCB.z1), 0.1, 0.16, SOFT, [1.2, 0.8]);
  rect(fx(-0.096), lz(0.031), fx(0.300), lz(0.089), 0.3, 0.16, SOFT, [1.2, 0.8]);
  rect(fx(D.BAT.y0), lz(D.BAT.z0), fx(D.BAT.y1), lz(D.BAT.z1), 0.4, 0.14, 'rgba(107,79,160,0.55)', [2.4, 0.8, 0.4, 0.8]);
  line([[fx(0.568), lz(D.WIRE_Z + 0.02)], [cy0, lz(D.WIRE_Z + 0.02)]], 0.36); line([[fx(0.568), lz(D.WIRE_Z - 0.02)], [cy0, lz(D.WIRE_Z - 0.02)]], 0.36);
  rect(cy0, lz(D.WIRE_Z - 0.06), cy1, lz(D.WIRE_Z + 0.06), 0.4, 0.45);
  text('4G ● ● GPS', fx(0.134), lz(0.13) + 0.8, 1.9, { color: SOFT, align: 'center', weight: 600 });
  dim(hl, lz(D.SEAT + D.LID), hl, lz(0), '0,27 L', 6, { vertical: true });
  text('tampa', fx(-0.30), lz(D.SEAT + D.LID) - 1.6, 1.7, { color: SOFT });
  text('carcaça · face THIS SIDE UP', fx(0.1), lz(0) + 3.4, 1.7, { color: SOFT });

  // ======== VISTA EXPLODIDA (elevação reduzida)
  const ex = 100, k = 34, base = -32;
  const yy = v => base - v * k;
  const eh = k * D.CL / 2;
  text('VISTA EXPLODIDA', 52, -96, 2.4, { weight: 700, track: 0.4 });
  text('escala reduzida · montagem de baixo para cima', 52, -93, 1.7, { color: SOFT });
  // 01 carcaça (U)
  line([[ex - eh, yy(D.CH)], [ex - eh, yy(0)], [ex + eh, yy(0)], [ex + eh, yy(D.CH)]], 0.43);
  line([[ex - eh + 0.8, yy(D.CH)], [ex - eh + 0.8, yy(0.028)], [ex + eh - 0.8, yy(0.028)], [ex + eh - 0.8, yy(D.CH)]], 0.19, SOFT);
  // 02 placa (+ antena embaixo, blindagens em cima)
  const pz = 0.35;
  rect(ex - D.PCB.y1 * k, yy(pz + D.PCB.z0), ex - D.PCB.y0 * k, yy(pz + D.PCB.z1), 0.1, 0.3);
  rect(ex - 0.3 * k, yy(pz + 0.031), ex + 0.096 * k, yy(pz + 0.089), 0.1, 0.24);
  rect(ex - 0.353 * k, yy(pz + 0.125), ex + 0.132 * k, yy(pz + 0.153), 0.1, 0.2);
  // 03 chicote, preso à placa
  line([[ex - eh, yy(pz + D.WIRE_Z)], [ex - D.CONN_Y[0] * k, yy(pz + D.WIRE_Z)]], 0.68);
  rect(ex - D.CONN_Y[0] * k, yy(pz + D.WIRE_Z) - 1.4, ex - D.CONN_Y[1] * k, yy(pz + D.WIRE_Z) + 1.4, 0.3, 0.3);
  // 04 bateria
  rect(ex - D.BAT.y1 * k, yy(0.65 + D.BAT.z0), ex - D.BAT.y0 * k, yy(0.65 + D.BAT.z1), 0.4, 0.3);
  // 05 tampa
  rect(ex - eh, yy(0.95 + D.SEAT), ex + eh, yy(0.95 + D.SEAT + D.LID), 0.6, 0.32);
  line([[ex + eh + 5, yy(0)], [ex + eh + 5, yy(1.25)]], 0.19, 'rgba(107,79,160,0.6)', [2, 1]);
  balloon('05', ex + eh + 10, yy(1.2), ex + eh - 1, yy(0.95 + D.SEAT + 0.025));
  balloon('04', ex + eh + 10, yy(0.88), ex + 0.12 * k, yy(0.65 + 0.183));
  balloon('02', ex + eh + 10, yy(0.52), ex + 0.4 * k, yy(pz + 0.118));
  balloon('01', ex + eh + 10, yy(0.12), ex + eh - 0.4, yy(0.12));
  balloon('03', ex - D.CONN_Y[0] * k - 1, yy(pz + 0.55), ex - (D.CONN_Y[0] + 0.1) * k, yy(pz + D.WIRE_Z) - 1.4);

  // ======== LISTA DE CONJUNTOS
  const tx = 52, tz = -10, rowH = 5.2;
  text('LISTA DE CONJUNTOS', tx, tz - 3, 2.4, { weight: 700, track: 0.4 });
  line([[tx, tz], [136, tz]], 0.41);
  SETS.forEach((st, i) => {
    const z = tz + (i + 1) * rowH;
    text(st.n, tx + 1, z - 1.6, 2.1, { weight: 700, color: ACC });
    text(st.nome, tx + 7, z - 1.6, 2.1, { font: SANS, weight: 600 });
    text(st.id, tx + 34, z - 1.6, 1.75, { color: SOFT });
    line([[tx, z], [136, z]], 0.16, 'rgba(43,36,54,0.3)');
  });

  // ======== SEQUÊNCIA DE MONTAGEM
  const sz = 34;
  text('SEQUÊNCIA DE MONTAGEM', -150, sz, 2.4, { weight: 700, track: 0.4 });
  const steps = ['Carcaça na base', 'Placa com o chicote', 'Bateria', 'Tampa'];
  steps.forEach((t, i) => {
    const x = -150 + i * 46;
    c.fillStyle = ACC; c.beginPath(); c.arc(X(x + 2.2), Z(sz + 6.2), U(2.2), 0, 7); c.fill();
    text(String(i + 1), x + 2.2, sz + 6.3, 2.2, { color: PAPER, align: 'center', base: 'middle', weight: 700 });
    text(t, x + 5.6, sz + 7.0, 2.0, { font: SANS, weight: 600 });
    if (i < 3) line([[x + 40.5, sz + 6.2], [x + 44, sz + 6.2]], 0.41, ACC);
  });
  text('Desmontagem: ordem inversa. O chicote acompanha a placa.', -150, sz + 13, 1.8, { color: SOFT });

  // ======== CARIMBO
  const bx0 = 52, bz0 = 46, bx1 = 136, bz1 = 86;
  c.strokeStyle = INK; c.lineWidth = U(0.35); c.strokeRect(X(bx0), Z(bz0), U(bx1 - bx0), U(bz1 - bz0));
  line([[bx0, bz0 + 13], [bx1, bz0 + 13]], 0.27); line([[bx0, bz0 + 26], [bx1, bz0 + 26]], 0.27); line([[bx0 + 40, bz0 + 26], [bx0 + 40, bz1]], 0.27);
  text('REALTRACKER', bx0 + 2, bz0 + 5.4, 2.0, { weight: 700, color: ACC, track: 0.6 });
  text('J4 · COMPOSIÇÃO 3D', bx0 + 2, bz0 + 10.8, 3.6, { font: SANS, weight: 800 });
  text('5 conjuntos separados · uma única placa principal', bx0 + 2, bz0 + 17.6, 1.8, { color: SOFT });
  text('Proporções tiradas das fotos do equipamento', bx0 + 2, bz0 + 22, 1.8, { color: SOFT });
  text('ESCALA', bx0 + 2, bz0 + 30.4, 1.6, { color: SOFT }); text('NORMALIZADA', bx0 + 2, bz0 + 35.4, 2.4, { weight: 700 });
  text('FOLHA', bx0 + 42, bz0 + 30.4, 1.6, { color: SOFT }); text('01 / 01', bx0 + 42, bz0 + 35.4, 2.4, { weight: 700 });
  text('Detalhes ocultos: não modelados · medidas a conferir', -150, 86, 1.7, { color: SOFT });

  return { paper, ink, W, H };
}
