// Folha de desenho técnico do J4 Lite (o equivalente à "planta baixa").
// Desenhada em coordenadas do mundo: o equipamento deitado com a tampa para cima e o chicote para a esquerda,
// de modo que a vista frontal da folha coincide com o objeto 3D que surge em cima dela.
import { D, SETS } from './layout.js';

export const SHEET = { x0: -152, x1: 128, z0: -94, z1: 86 };

const INK = '#231d2e', SOFT = 'rgba(43,36,54,0.66)', ACC = '#6B4FA0', PAPER = '#f6f5f9';
const MONO = '"JetBrains Mono", "DejaVu Sans Mono", ui-monospace, monospace';
const SANS = '"Inter", "DejaVu Sans", Arial, sans-serif';

export function drawSheet(ppu) {
  const W = Math.round((SHEET.x1 - SHEET.x0) * ppu), H = Math.round((SHEET.z1 - SHEET.z0) * ppu);
  const mk = () => { const c = document.createElement('canvas'); c.width = W; c.height = H; return c; };
  const X = x => (x - SHEET.x0) * ppu, Z = z => (z - SHEET.z0) * ppu, U = v => v * ppu;

  // ---------------- papel
  const paper = mk(), p = paper.getContext('2d');
  p.fillStyle = PAPER; p.fillRect(0, 0, W, H);
  let s = 777; const r = () => ((s = (s * 16807) % 2147483647) / 2147483647);
  for (let i = 0; i < W * H / 260; i++) { p.fillStyle = `rgba(${r() > 0.5 ? '255,255,255' : '110,100,140'},${r() * 0.045})`; p.fillRect(r() * W, r() * H, 1 + r() * 3, 1); }
  // malha milimetrada
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
  const rrect = (x0, z0, x1, z1, rad, w = 0.32, color = INK, dash = null) => {
    c.strokeStyle = color; c.lineWidth = U(w); c.setLineDash(dash ? dash.map(U) : []);
    c.beginPath(); c.roundRect(X(x0), Z(z0), U(x1 - x0), U(z1 - z0), U(rad)); c.stroke(); c.setLineDash([]);
  };
  const text = (t, x, z, size = 2.2, { font = MONO, weight = 500, color = INK, align = 'left', base = 'alphabetic', rot = 0, track = 0 } = {}) => {
    c.save(); c.translate(X(x), Z(z)); c.rotate(rot);
    c.fillStyle = color; c.font = `${weight === 500 ? 600 : weight} ${U(size * 1.12)}px ${font}`; c.textAlign = align; c.textBaseline = base;
    if ('letterSpacing' in c) c.letterSpacing = `${U(track)}px`;
    c.fillText(t, 0, 0); c.restore();
  };
  // cota com setas
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

  // ======== VISTA FRONTAL (coincide com o objeto 3D) — mundo: x = -y_eq, z = -x_eq
  const L = D.HL, Wd = D.HW;
  text('VISTA FRONTAL', -95, -22.5, 2.4, { weight: 700, track: 0.4 });
  text('tampa externa para cima · chicote à esquerda', -95, -19.6, 1.7, { color: SOFT });
  rrect(-L, -Wd, L, Wd, D.CR, 0.42);
  // painel fosco cintado da tampa
  c.strokeStyle = SOFT; c.lineWidth = U(0.16); c.beginPath();
  { const he = 11.2, hm = 9.4, hl = 40.2; c.moveTo(X(-hl), Z(-he)); c.quadraticCurveTo(X(0), Z(-(2 * hm - he)), X(hl), Z(-he)); c.lineTo(X(hl), Z(he)); c.quadraticCurveTo(X(0), Z(2 * hm - he), X(-hl), Z(he)); c.closePath(); }
  c.stroke();
  // ocultos: placa, antena, SIM, bateria
  line([[-35, -11], [39, -11], [39, 11], [-35, 11]], 0.22, SOFT, [1.2, 0.8], true);
  rrect(-11.6 - 9, -9, -11.6 + 9, 9, 0.5, 0.16, SOFT, [1.2, 0.8]);
  rrect(15 - 8.7, -8.1, 15 + 8.7, 8.1, 0.6, 0.16, SOFT, [1.2, 0.8]);
  rrect(-1.5, -10, 34, 10, 1.2, 0.14, 'rgba(107,79,160,0.55)', [2.4, 0.8, 0.4, 0.8]);
  // eixo
  line([[-96, 0], [48, 0]], 0.16, 'rgba(107,79,160,0.5)', [5, 1, 1, 1]);
  // chicote (vista de cima)
  const prof = [[-43.6, 4.3], [-44.3, 4.3], [-44.9, 3.5], [-45.5, 4.25], [-46.2, 4.25], [-46.7, 3.45], [-47.25, 4.15], [-47.95, 4.15], [-48.45, 2.9], [-48.5, 2.4],
    [-61.2, 2.4], [-61.25, 2.95], [-61.8, 3.1], [-75.4, 3.2], [-76.6, 3.4], [-78, 4.1], [-79.4, 4.85], [-80.9, 5.2], [-90.5, 5.2]];
  line(prof.map(([x, a]) => [x, -a]), 0.49); line(prof.map(([x, a]) => [x, a]), 0.49);
  line([[-90.5, -5.2], [-90.5, 5.2]], 0.49);
  line([[-61.5, -2.4], [-61.5, 2.4]], 0.22, SOFT); line([[-75.6, -3.2], [-75.6, 3.2]], 0.22, SOFT); line([[-80.9, -5.2], [-80.9, 5.2]], 0.27);
  line([[-89, -5.6], [-84, -7.6]], 0.41); line([[-89, 5.6], [-84, 7.6]], 0.41);
  for (const k of [-3.45, -1.15, 1.15, 3.45]) line([[-90.5, k], [-87.2, k]], 0.19, SOFT);
  // cotas (proporções; sem medidas reais)
  dim(-L, -Wd, L, -Wd, 'L = 1,00', -8);
  dim(L, -Wd, L, Wd, '0,31 L', 6, { vertical: true });
  dim(-90.5, Wd, -L, Wd, 'chicote ≈ 0,55 L', 8);

  // ======== VISTA LATERAL
  const zc = -52;
  text('VISTA LATERAL', -95, zc - 15, 2.4, { weight: 700, track: 0.4 });
  const bot = zc + 8, topZ = zc - 8; // base (z=0 do equipamento) e topo (z=16)
  c.strokeStyle = INK; c.lineWidth = U(0.42); c.beginPath(); c.roundRect(X(-L), Z(topZ + 3), U(2 * L), U(13), [U(0.6), U(0.6), U(2.2), U(2.2)]); c.stroke();
  c.beginPath(); c.roundRect(X(-L), Z(topZ), U(2 * L), U(3.1), U(1.2)); c.stroke();
  line([[-L + 2, topZ + 3.2], [L - 2, topZ + 3.2]], 0.19, SOFT);
  rrect(-34, bot - 18.6, 22, bot - 12.6, 0.6, 0.14, SOFT, [1.2, 0.8]);
  const hz = bot - D.CZ;
  const sprof = [[-43.6, 3.85], [-44.3, 3.85], [-44.9, 3.05], [-45.5, 3.8], [-46.2, 3.8], [-46.7, 3.0], [-47.25, 3.7], [-47.95, 3.7], [-48.45, 2.55], [-48.5, 2.1],
    [-61.2, 2.1], [-61.25, 2.7], [-61.8, 2.85], [-75.4, 2.95], [-80.9, 2.8], [-90.5, 2.8]];
  line(sprof.map(([x, b]) => [x, hz - b]), 0.49); line(sprof.map(([x, b]) => [x, hz + b]), 0.49);
  line([[-90.5, hz - 2.8], [-90.5, hz + 2.8]], 0.49); line([[-80.9, hz - 2.8], [-80.9, hz + 2.8]], 0.27);
  dim(L, topZ, L, bot, '0,19 L', 6, { vertical: true });
  text('tampa externa', -20, topZ - 2.2, 1.7, { color: SOFT }); text('carcaça', 0, bot + 3.6, 1.7, { color: SOFT });

  // ======== VISTA EXPLODIDA (elevação reduzida)
  const ex = 92, k = 0.36, base = -26;
  text('VISTA EXPLODIDA', 62, -86, 2.4, { weight: 700, track: 0.4 });
  text('escala reduzida · montagem de baixo para cima', 62, -83, 1.7, { color: SOFT });
  const yy = v => base - v * k; // z do equipamento (com deslocamento) -> z da folha
  const hl = L * k;
  // 01 carcaça (U)
  line([[ex - hl, yy(13)], [ex - hl, yy(0)], [ex + hl, yy(0)], [ex + hl, yy(13)]], 0.43);
  line([[ex - hl + 0.6, yy(13)], [ex - hl + 0.6, yy(1.5)], [ex + hl - 0.6, yy(1.5)], [ex + hl - 0.6, yy(13)]], 0.19, SOFT);
  // 03 bateria
  rrect(ex - 1.5 * k, yy(22 + 5.7), ex + 34 * k, yy(22 + 1.7), 0.4, 0.3);
  // 02 placa (+ antena)
  rrect(ex - 35 * k, yy(36 + 6.9), ex + 39 * k, yy(36 + 5.9), 0.1, 0.3);
  rrect(ex - 20.6 * k, yy(36 + 9.3), ex - 2.6 * k, yy(36 + 6.9), 0.1, 0.24);
  rrect(ex + 6.2 * k, yy(36 + 8.4), ex + 23.8 * k, yy(36 + 6.9), 0.1, 0.2);
  // 06 chicote preso à placa
  line([[ex - hl, yy(36 + 6.6)], [ex - hl - 47 * k, yy(36 + 6.6)]], 0.68);
  rrect(ex - hl - 47 * k - 0.4, yy(36 + 6.6) - 1.0, ex - hl - 37 * k, yy(36 + 6.6) + 1.0, 0.3, 0.3);
  // 04 proteção interna
  rrect(ex - 41.3 * k, yy(47 + 11.1), ex + 41.3 * k, yy(47 + 9.9), 0.1, 0.3);
  // 05 tampa externa
  rrect(ex - hl, yy(58 + 16), ex + hl, yy(58 + 13), 0.6, 0.32);
  // eixo de montagem
  line([[ex + hl + 5, yy(0)], [ex + hl + 5, yy(72)]], 0.19, 'rgba(107,79,160,0.6)', [2, 1]);
  balloon('05', ex + hl + 9, yy(64), ex + hl - 1, yy(58 + 14.5));
  balloon('04', ex + hl + 9, yy(52), ex + 41.3 * k - 1, yy(47 + 10.5));
  balloon('02', ex + hl + 9, yy(41), ex + 37 * k, yy(36 + 6.4));
  balloon('03', ex + hl + 9, yy(28), ex + 30 * k, yy(22 + 3.7));
  balloon('01', ex + hl + 9, yy(8), ex + hl - 0.4, yy(8));
  balloon('06', ex - hl - 12, yy(52), ex - hl - 42 * k, yy(36 + 6.6) - 0.6);

  // ======== LISTA DE CONJUNTOS
  const tx = 62, tz = -18, rowH = 5.2;
  text('LISTA DE CONJUNTOS', tx, tz - 3, 2.4, { weight: 700, track: 0.4 });
  line([[tx, tz], [124, tz]], 0.41);
  SETS.forEach((st, i) => {
    const z = tz + (i + 1) * rowH;
    text(st.n, tx + 1, z - 1.6, 2.1, { weight: 700, color: ACC });
    text(st.nome, tx + 7, z - 1.6, 2.1, { font: SANS, weight: 600 });
    text(st.id, tx + 31, z - 1.6, 1.75, { color: SOFT });
    line([[tx, z], [124, z]], 0.16, 'rgba(43,36,54,0.3)');
  });

  // ======== SEQUÊNCIA DE MONTAGEM
  const sz = 30;
  text('SEQUÊNCIA DE MONTAGEM', -95, sz, 2.4, { weight: 700, track: 0.4 });
  const steps = ['Bateria no verso da placa', 'Conjunto na carcaça', 'Proteção interna', 'Tampa externa'];
  steps.forEach((t, i) => {
    const x = -95 + i * 44;
    c.fillStyle = ACC; c.beginPath(); c.arc(X(x + 2.2), Z(sz + 6.2), U(2.2), 0, 7); c.fill();
    text(String(i + 1), x + 2.2, sz + 6.3, 2.2, { color: PAPER, align: 'center', base: 'middle', weight: 700 });
    text(t, x + 5.6, sz + 7.0, 2.0, { font: SANS, weight: 600 });
    if (i < 3) line([[x + 38.5, sz + 6.2], [x + 42, sz + 6.2]], 0.41, ACC);
  });
  text('Desmontagem: ordem inversa. O chicote acompanha a placa.', -95, sz + 13, 1.8, { color: SOFT });

  // ======== CARIMBO
  const bx0 = 62, bz0 = 44, bx1 = 124, bz1 = 82;
  c.strokeStyle = INK; c.lineWidth = U(0.35); c.strokeRect(X(bx0), Z(bz0), U(bx1 - bx0), U(bz1 - bz0));
  line([[bx0, bz0 + 13], [bx1, bz0 + 13]], 0.27); line([[bx0, bz0 + 25], [bx1, bz0 + 25]], 0.27); line([[bx0 + 31, bz0 + 25], [bx0 + 31, bz1]], 0.27);
  text('REALTRACKER', bx0 + 2, bz0 + 5.4, 2.0, { weight: 700, color: ACC, track: 0.6 });
  text('J4 LITE · COMPOSIÇÃO 3D', bx0 + 2, bz0 + 10.6, 3.4, { font: SANS, weight: 800 });
  text('6 conjuntos separados · uma única placa principal', bx0 + 2, bz0 + 17.4, 1.8, { color: SOFT });
  text('Proporções tiradas das fotos do equipamento', bx0 + 2, bz0 + 21.6, 1.8, { color: SOFT });
  text('ESCALA', bx0 + 2, bz0 + 29.4, 1.6, { color: SOFT }); text('RELATIVA', bx0 + 2, bz0 + 34.2, 2.4, { weight: 700 });
  text('FOLHA', bx0 + 33, bz0 + 29.4, 1.6, { color: SOFT }); text('01 / 01', bx0 + 33, bz0 + 34.2, 2.4, { weight: 700 });
  text('Detalhes ocultos: aproximações', -95, 80, 1.7, { color: SOFT });

  return { paper, ink, W, H };
}
