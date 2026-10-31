import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { Brush, Evaluator, ADDITION, SUBTRACTION } from 'three-bvh-csg';
import { D, HOLES, WIRE_PADS, WIRE_COLORS, FRONT, BACK, SETS, EXPLODE } from './layout.js';
import * as T from './textures.js';

const PI = Math.PI;
const V = (x, y, z) => new THREE.Vector3(x, y, z);

// ------------------------------------------------------------------ formas 2D
function rrPath(p, x0, y0, x1, y1, r) {
  r = Math.max(0, Math.min(r, (x1 - x0) / 2, (y1 - y0) / 2));
  p.moveTo(x0 + r, y0);
  p.lineTo(x1 - r, y0); if (r) p.absarc(x1 - r, y0 + r, r, -PI / 2, 0);
  p.lineTo(x1, y1 - r); if (r) p.absarc(x1 - r, y1 - r, r, 0, PI / 2);
  p.lineTo(x0 + r, y1); if (r) p.absarc(x0 + r, y1 - r, r, PI / 2, PI);
  p.lineTo(x0, y0 + r); if (r) p.absarc(x0 + r, y0 + r, r, PI, PI * 1.5);
  return p;
}
const rrShape = (hw, hl, r, cx = 0, cy = 0) => rrPath(new THREE.Shape(), cx - hw, cy - hl, cx + hw, cy + hl, r);
const rrHole = (hw, hl, r, cx = 0, cy = 0) => rrPath(new THREE.Path(), cx - hw, cy - hl, cx + hw, cy + hl, r);
const circleHole = (x, y, r) => new THREE.Path().absarc(x, y, r, 0, PI * 2, true);

// contorno "cintado" do painel fosco (mais estreito no meio, como o reflexo das fotos)
function waistShape(hwEnd, hwMid, hl, r) {
  const s = new THREE.Shape(), c = 2 * hwMid - hwEnd;
  s.moveTo(-hwEnd + r, -hl); s.lineTo(hwEnd - r, -hl); s.absarc(hwEnd - r, -hl + r, r, -PI / 2, 0);
  s.quadraticCurveTo(c, 0, hwEnd, hl - r); s.absarc(hwEnd - r, hl - r, r, 0, PI / 2);
  s.lineTo(-hwEnd + r, hl); s.absarc(-hwEnd + r, hl - r, r, PI / 2, PI);
  s.quadraticCurveTo(-c, 0, -hwEnd, -hl + r); s.absarc(-hwEnd + r, -hl + r, r, PI, PI * 1.5);
  return s;
}

// placa extrudada entre z0 e z1; com chanfro arredondado, o contorno máximo = forma + bevel
function slab(shape, z0, z1, bevel = 0, { bevelT, segs = 3, curve = 12 } = {}) {
  const bt = bevel ? (bevelT ?? bevel) : 0;
  const g = new THREE.ExtrudeGeometry(shape, {
    depth: Math.max(0.001, z1 - z0 - 2 * bt), bevelEnabled: bevel > 0,
    bevelSize: bevel, bevelThickness: bt, bevelSegments: segs, curveSegments: curve,
  });
  g.translate(0, 0, z0 + bt);
  return g;
}
// separa as tampas da extrusão: grupo 0 = face de trás (-Z), 1 = face da frente (+Z), 2 = laterais
function splitLids(g) {
  const [lids, sides] = g.groups, half = lids.count / 2;
  g.clearGroups();
  g.addGroup(lids.start, half, 0); g.addGroup(lids.start + half, half, 1); g.addGroup(sides.start, sides.count, 2);
  return g;
}
// UV planar em XY; mirror = espelha U (texturas vistas por trás)
function planarUV(g, x0, x1, y0, y1, { start = 0, count = Infinity, mirror = false } = {}) {
  const p = g.attributes.position, uv = g.attributes.uv, end = Math.min(p.count, start + count);
  for (let i = start; i < end; i++) {
    const u = (p.getX(i) - x0) / (x1 - x0);
    uv.setXY(i, mirror ? 1 - u : u, (p.getY(i) - y0) / (y1 - y0));
  }
  uv.needsUpdate = true;
  return g;
}
function lidUV(g, x0, x1, y0, y1, mirrorBack = true) {
  const [back, front] = g.groups;
  planarUV(g, x0, x1, y0, y1, { start: back.start, count: back.count, mirror: mirrorBack });
  planarUV(g, x0, x1, y0, y1, { start: front.start, count: front.count });
  return g;
}
const box = (w, h, d, x, y, z) => new THREE.BoxGeometry(w, h, d).translate(x, y, z);

// seção "superelipse" que percorre o eixo Y (cabo, termorretrátil, passa-fios, bota)
function loft(stations, { cz = D.CZ, seg = 48, caps = [true, true] } = {}) {
  const pos = [], uv = [], idx = [], n = stations.length;
  stations.forEach((st, k) => {
    const e = 2 / (st.n || 2);
    for (let i = 0; i <= seg; i++) {
      const t = (i / seg) * PI * 2, c = Math.cos(t), s = Math.sin(t);
      pos.push(st.a * Math.sign(c) * Math.abs(c) ** e, st.y, cz + st.b * Math.sign(s) * Math.abs(s) ** e);
      uv.push(i / seg, k / (n - 1));
    }
  });
  for (let k = 0; k < n - 1; k++) for (let i = 0; i < seg; i++) {
    const a = k * (seg + 1) + i, b = a + seg + 1;
    idx.push(a, b, a + 1, b, b + 1, a + 1);
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
  g.setIndex(idx);
  g.computeVertexNormals();
  const nr = g.attributes.normal; // costura: mesma normal no primeiro e no último ponto do anel
  for (let k = 0; k < n; k++) {
    const a = k * (seg + 1), b = a + seg;
    const v = V(nr.getX(a) + nr.getX(b), nr.getY(a) + nr.getY(b), nr.getZ(a) + nr.getZ(b)).normalize();
    nr.setXYZ(a, v.x, v.y, v.z); nr.setXYZ(b, v.x, v.y, v.z);
  }
  const parts = [g];
  const cap = (k, dir) => {
    const cp = [], cn = [], cu = [], y = stations[k].y;
    for (let i = 0; i < seg; i++) {
      const p0 = k * (seg + 1) + i, p1 = p0 + 1;
      const A = [0, y, cz], B = [pos[p0 * 3], y, pos[p0 * 3 + 2]], C = [pos[p1 * 3], y, pos[p1 * 3 + 2]];
      const tri = dir < 0 ? [A, B, C] : [A, C, B];
      for (const q of tri) { cp.push(...q); cn.push(0, dir, 0); cu.push(0.5 + (q[0]) * 0.05, 0.5 + (q[2] - cz) * 0.05); }
    }
    const cg = new THREE.BufferGeometry();
    cg.setAttribute('position', new THREE.Float32BufferAttribute(cp, 3));
    cg.setAttribute('normal', new THREE.Float32BufferAttribute(cn, 3));
    cg.setAttribute('uv', new THREE.Float32BufferAttribute(cu, 2));
    parts.push(cg);
  };
  if (caps[0]) cap(0, -1);
  if (caps[1]) cap(n - 1, 1);
  return parts.length === 1 ? g : mergeGeometries(parts.map(prep));
}

function tube(points, r, { seg = 48, radial = 12 } = {}) {
  const curve = new THREE.CatmullRomCurve3(points.map(p => V(...p)), false, 'centripetal');
  return new THREE.TubeGeometry(curve, seg, r, radial, false);
}

// ------------------------------------------------------------------ montagem dos nós (subobjetos com pivô próprio)
function prep(g) {
  let x = g.index ? g.toNonIndexed() : g.clone();
  for (const k of Object.keys(x.attributes)) if (!['position', 'normal', 'uv'].includes(k)) x.deleteAttribute(k);
  if (!x.attributes.normal) x.computeVertexNormals();
  if (!x.attributes.uv) x.setAttribute('uv', new THREE.Float32BufferAttribute(new Float32Array(x.attributes.position.count * 2), 2));
  x.clearGroups();
  x.morphAttributes = {};
  return x;
}
// separa uma geometria com grupos em uma lista [geo, material]
function byGroups(g, mats) {
  const x = g.index ? g.toNonIndexed() : g;
  return x.groups.map(gr => {
    const sub = new THREE.BufferGeometry();
    for (const k of ['position', 'normal', 'uv']) {
      const a = x.attributes[k]; if (!a) continue;
      sub.setAttribute(k, new THREE.BufferAttribute(a.array.slice(gr.start * a.itemSize, (gr.start + gr.count) * a.itemSize), a.itemSize));
    }
    return [sub, mats[gr.materialIndex]];
  });
}
// cria um subobjeto: geometrias em coordenadas do equipamento, recentralizadas no pivô
function node(name, parts, pivot) {
  const piv = V(...pivot), buckets = new Map();
  for (const [g, m] of parts) {
    const list = Array.isArray(m) ? byGroups(g, m) : [[g, m]];
    for (const [gg, mm] of list) { if (!buckets.has(mm)) buckets.set(mm, []); buckets.get(mm).push(prep(gg)); }
  }
  const meshes = [...buckets].map(([m, gs]) => {
    const g = gs.length > 1 ? mergeGeometries(gs) : gs[0];
    g.translate(-piv.x, -piv.y, -piv.z);
    g.computeBoundingSphere();
    const mesh = new THREE.Mesh(g, m);
    mesh.name = buckets.size > 1 ? `${name}__${m.name}` : name;
    return mesh;
  });
  let o;
  if (meshes.length === 1) o = meshes[0];
  else { o = new THREE.Group(); o.name = name; meshes.forEach(m => o.add(m)); }
  o.userData.devPivot = piv;
  return o;
}
function makeSet(name, pivot, children, extras = {}) {
  const g = new THREE.Group(); g.name = name;
  const piv = V(...pivot);
  g.position.copy(piv);
  for (const c of children) { c.position.copy(c.userData.devPivot).sub(piv); delete c.userData.devPivot; g.add(c); }
  g.userData = { ...extras };
  return g;
}

// ------------------------------------------------------------------ materiais
export function makeMaterials() {
  const m = {};
  const std = (name, o) => { const x = new THREE.MeshStandardMaterial(o); x.name = name; m[name] = x; return x; };
  const phy = (name, o) => { const x = new THREE.MeshPhysicalMaterial(o); x.name = name; m[name] = x; return x; };
  // plásticos
  phy('plastico_preto_brilho', { color: '#0b0b0d', roughness: 0.26, clearcoat: 0.6, clearcoatRoughness: 0.16 });
  std('plastico_preto_fosco', { color: '#141416', roughness: 0.62 });
  std('plastico_preto_interno', { color: '#111113', roughness: 0.82 });
  std('plastico_protecao', { color: '#19191c', roughness: 0.68 });
  std('painel_tampa', { map: T.panelTexture(true), roughness: 0.8 });
  std('painel_fundo', { map: T.panelTexture(false), roughness: 0.8 });
  std('etiqueta_imei', { map: T.labelTexture(), roughness: 0.55 });
  std('texto_on_off', { map: T.onOffTexture(), transparent: true, roughness: 0.7, depthWrite: false });
  // placa
  phy('pcb_frente', { map: T.pcbFront(), roughness: 0.4, clearcoat: 0.4, clearcoatRoughness: 0.28 });
  phy('pcb_verso', { map: T.pcbBack(), roughness: 0.4, clearcoat: 0.4, clearcoatRoughness: 0.28 });
  std('pcb_borda_fr4', { color: '#a7ab6a', roughness: 0.72 });
  std('ouro', { color: '#d9a948', metalness: 1, roughness: 0.28 });
  std('estanho', { color: '#cdd0d3', metalness: 1, roughness: 0.3 });
  std('metal_blindagem', { color: '#e9e9e6', map: T.metalNoise(3, 205, 26), metalness: 1, roughness: 0.4 });
  std('metal_usb', { color: '#dadcde', metalness: 1, roughness: 0.2 });
  std('metal_sim', { color: '#f2f2ee', map: T.metalNoise(8, 222, 14), metalness: 1, roughness: 0.3 });
  std('smd_preto', { color: '#19191b', roughness: 0.42 });
  std('smd_capacitor', { color: '#a9835a', roughness: 0.5 });
  std('marcacao_cinza', { color: '#8e8e92', roughness: 0.5 });
  std('plastico_sim', { color: '#141414', roughness: 0.5 });
  std('ceramica_antena', { map: T.antennaTexture(), roughness: 0.5, metalness: 0.15 });
  std('ceramica_borda', { color: '#7a492a', roughness: 0.6 });
  std('capacitor_lata', { color: '#d3d5d7', metalness: 0.9, roughness: 0.3 });
  std('capacitor_topo', { map: T.capTopTexture(), metalness: 0.5, roughness: 0.36 });
  std('indutor', { color: '#2a2a2c', roughness: 0.62 });
  std('indutor_topo', { map: T.inductorTexture(), roughness: 0.6 });
  std('tantalo', { color: '#e2a11c', roughness: 0.45 });
  std('tantalo_faixa', { color: '#6a3c10', roughness: 0.5 });
  std('led_status_1', { color: '#f3f6f2', roughness: 0.3, emissive: '#000000' });
  std('led_status_2', { color: '#f3f4f8', roughness: 0.3, emissive: '#000000' });
  std('chave_alavanca', { color: '#1d1d1f', roughness: 0.45 });
  // bateria
  std('bateria_aluminio', { color: '#eef0f3', map: T.metalNoise(12, 228, 9), metalness: 0.85, roughness: 0.3 });
  phy('fita_kapton', { color: '#f1ad00', roughness: 0.2, clearcoat: 1, clearcoatRoughness: 0.1, transparent: true, opacity: 0.8 });
  std('pcb_protecao_bateria', { color: '#1d6b34', roughness: 0.5 });
  std('niquel', { color: '#cfcfca', metalness: 1, roughness: 0.34 });
  ['vermelho', 'preto', 'laranja', 'amarelo'].forEach((c, i) => std('fio_' + c, { color: WIRE_COLORS[i], roughness: 0.38 }));
  // chicote
  std('cabo_revestimento', { color: '#121214', roughness: 0.42 });
  std('termorretratil', { color: '#0f0f11', roughness: 0.8 });
  std('borracha_passa_fios', { color: '#111113', roughness: 0.6 });
  std('conector_corpo', { color: '#141416', roughness: 0.46 });
  std('contato_metal', { color: '#dfe1e2', metalness: 1, roughness: 0.18 });
  std('fundo_contato', { color: '#050506', roughness: 0.9 });
  return m;
}

// ------------------------------------------------------------------ 01 carcaça
function buildCarcaca(M) {
  const ev = new Evaluator();
  ev.attributes = ['position', 'uv', 'normal'];
  ev.useGroups = true;
  const brush = (g, m) => { if (!Array.isArray(m)) g.clearGroups(); const b = new Brush(g, m); b.updateMatrixWorld(); return b; };
  const bk = 2.0, tp = 0.6;
  // casca: fundo bem arredondado + aro com raio pequeno (unidos)
  const back = slab(rrShape(D.HW - bk, D.HL - bk, D.CR - bk), 0, 7, bk, { segs: 6, curve: 12 });
  const top = slab(rrShape(D.HW - tp, D.HL - tp, D.CR - tp), 5, D.DEPTH, tp, { segs: 3, curve: 12 });
  const outerMats = [M.plastico_preto_fosco, M.plastico_preto_brilho];
  let r = ev.evaluate(brush(back, outerMats), brush(top, outerMats), ADDITION);
  // cavidade com cantos internos arredondados
  const cav = slab(rrShape(D.IHW - 0.6, D.IHL - 0.6, D.ICR - 0.6), D.FLOOR, 30, 0.6, { segs: 3, curve: 10 });
  r = ev.evaluate(r, brush(cav, M.plastico_preto_interno), SUBTRACTION);
  // encaixe do passa-fios na parede da ponta (U aberto para a frente)
  const ns = rrPath(new THREE.Shape(), -3.65, D.CZ - 3.25, 3.65, 40, 3.0);
  const notch = new THREE.ExtrudeGeometry(ns, { depth: 6, bevelEnabled: false, curveSegments: 18 });
  notch.rotateX(PI / 2).translate(0, 46, 0);
  r = ev.evaluate(r, brush(notch, M.plastico_preto_interno), SUBTRACTION);
  // alojamentos das travas da proteção interna (todos de uma vez)
  const pk = [];
  for (const y of [-31, -10, 11, 30]) for (const s of [-1, 1]) pk.push(box(0.9, 4.2, 1.5, s * 12.35, y, 10.65));
  for (const y of [-1, 1]) for (const s of [-1, 1]) pk.push(box(4.4, 0.9, 1.5, s * 7.5, y * 41.95, 10.65));
  r = ev.evaluate(r, brush(mergeGeometries(pk.map(prep)), M.plastico_preto_interno), SUBTRACTION);
  // apoios da placa nas paredes laterais
  const ld = [];
  for (const y of [-27.5, -6, 18.5, 30.5]) for (const s of [-1, 1]) ld.push(box(1.45, 3.0, 4.4, s * 11.475, y, D.FLOOR + 2.2));
  r = ev.evaluate(r, brush(mergeGeometries(ld.map(prep)), M.plastico_preto_interno), ADDITION);

  const body = node('corpo_carcaca', [[r.geometry, r.material]], [0, 0, D.DEPTH / 2]);
  // painel fosco do fundo (face traseira)
  const panel = new THREE.ShapeGeometry(waistShape(10.6, 8.8, 39.6, 2.0), 12);
  planarUV(panel, -D.HW, D.HW, -D.HL, D.HL);
  panel.rotateY(PI).translate(0, 0, -0.025);
  const panelNode = node('painel_fosco_fundo', [[panel, M.painel_fundo]], [0, 0, 0]);
  // etiqueta de IMEI na lateral (-X)
  const lab = new THREE.PlaneGeometry(35, 8.8);
  lab.applyMatrix4(new THREE.Matrix4().makeBasis(V(0, -1, 0), V(0, 0, 1), V(-1, 0, 0)));
  lab.translate(-D.HW - 0.03, 20.5, 6.9);
  const label = node('etiqueta_imei', [[lab, M.etiqueta_imei]], [-D.HW, 20.5, 6.9]);
  return makeSet('carcaca_j4_lite', [0, 0, D.DEPTH / 2], [body, panelNode, label]);
}

// ------------------------------------------------------------------ 05 tampa externa
function buildTampa(M) {
  const bv = 1.2;
  const body = splitLids(slab(rrShape(D.HW - bv, D.HL - bv, D.CR - bv), D.T0, D.T1, bv, { bevelT: 1.0, segs: 6, curve: 14 }));
  const corpo = node('corpo_tampa', [[body, [M.plastico_preto_interno, M.plastico_preto_brilho, M.plastico_preto_brilho]]], [0, 0, (D.T0 + D.T1) / 2]);
  // aba que entra no aro da carcaça e fecha todo o contorno
  const lipS = rrShape(D.IHW - 0.15, D.IHL - 0.15, D.ICR - 0.15);
  lipS.holes.push(rrHole(D.IHW - 1.1, D.IHL - 1.1, 0.6));
  const lip = node('aba_encaixe', [[slab(lipS, 12.0, D.T0 + 0.1), M.plastico_preto_interno]], [0, 0, 12.5]);
  const panel = new THREE.ShapeGeometry(waistShape(11.2, 9.4, 40.2, 2.2), 12);
  planarUV(panel, -D.HW, D.HW, -D.HL, D.HL);
  panel.translate(0, 0, D.T1 + 0.02);
  const pn = node('painel_fosco_marca', [[panel, M.painel_tampa]], [0, 0, D.T1]);
  return makeSet('tampa_externa_j4_lite', [0, 0, (D.T0 + D.T1) / 2], [corpo, lip, pn]);
}

// ------------------------------------------------------------------ 04 proteção interna (três aberturas passantes)
export const OPEN = {
  chave: { x: 0, y: FRONT.sw.y, hw: 3.2, hl: 1.5, r: 1.0 },
  usb: { x: 0, y: FRONT.usb.y, hw: 4.3, hl: 1.6, r: 1.6 },
  sim: { x: 0, y: -16.4, hw: 8.4, hl: 11.2, r: 1.4 },
};
function buildProtecao(M) {
  const bv = 0.12, o = OPEN;
  const s = rrShape(D.PHW - bv, D.PHL - bv, D.PCR - bv);
  for (const k of ['chave', 'usb', 'sim']) s.holes.push(rrHole(o[k].hw + bv, o[k].hl + bv, o[k].r + bv, o[k].x, o[k].y));
  const plate = slab(s, D.P0, D.P1, bv, { segs: 2, curve: 12 });
  const ring = rrShape(D.PHW, D.PHL, D.PCR); ring.holes.push(rrHole(D.PHW - 0.9, D.PHL - 0.9, 1.0));
  const aro = slab(ring, 9.5, D.P0 + 0.05);
  const boss = rrShape(4.7 - bv, 3.0 - bv, 1.8 - bv, o.chave.x, o.chave.y);
  boss.holes.push(rrHole(o.chave.hw + bv, o.chave.hl + bv, o.chave.r + bv, o.chave.x, o.chave.y));
  const ressalto = slab(boss, D.P1 - 0.1, D.P1 + 0.5, bv, { segs: 2 });
  const tabs = [];
  for (const y of [-31, -10, 11, 30]) for (const sx of [-1, 1]) tabs.push(box(0.9, 3.6, 0.8, sx * 12.05, y, 10.5));
  for (const y of [-1, 1]) for (const sx of [-1, 1]) tabs.push(box(4.0, 0.9, 0.8, sx * 7.5, y * 41.75, 10.5));
  const tongue = [box(7.0, 2.0, 2.1, 0, 42.0, 10.9), box(7.0, 1.55, 1.05, 0, 42.225, 12.475)];
  const txt = new THREE.PlaneGeometry(7.4, 1.85).translate(0, o.chave.y + 4.3, D.P1 + 0.015);

  const kids = [
    node('painel_protecao', [[plate, M.plastico_protecao], [aro, M.plastico_protecao]], [0, 0, (D.P0 + D.P1) / 2]),
    node('ressalto_acesso_chave', [[ressalto, M.plastico_protecao]], [o.chave.x, o.chave.y, D.P1 + 0.2]),
    node('travas_laterais', tabs.map(t => [t, M.plastico_protecao]), [0, 0, 10.5]),
    node('lingueta_passa_fios', tongue.map(t => [t, M.plastico_protecao]), [0, 42, 11.4]),
    node('texto_on_off', [[txt, M.texto_on_off]], [0, o.chave.y + 4.3, D.P1]),
  ];
  return makeSet('protecao_interna_j4_lite', [0, 0, (D.P0 + D.P1) / 2], kids, {
    aberturas: {
      acesso_chave: [o.chave.x, o.chave.y], abertura_usb: [o.usb.x, o.usb.y], janela_sim: [o.sim.x, o.sim.y],
    },
  });
}

// ------------------------------------------------------------------ 02 placa principal (uma única placa, duas faces)
const ZF = D.B_Z1, ZB = D.B_Z0; // face da frente e face de trás
// caixa apoiada numa face: 'f' cresce para +Z a partir da frente; 'b' cresce para -Z a partir do verso
const onF = (w, h, t, x, y, lift = 0) => box(w, h, t, x, y, ZF + lift + t / 2);
const onB = (w, h, t, x, y, lift = 0) => box(w, h, t, x, y, ZB - lift - t / 2);

function smdSet(list, face, M) {
  const on = face === 'f' ? onF : onB, P = [];
  for (const s of list.sot) {
    const v = !!s.r;
    P.push([on(v ? 1.3 : 2.9, v ? 2.9 : 1.3, 1.0, s.x, s.y, 0.12), M.smd_preto]);
    const legs = v ? [[-1.0, -0.95], [-1.0, 0.95], [1.0, 0]] : [[-0.95, -1.0], [0.95, -1.0], [0, 1.0]];
    for (const [a, b] of legs) P.push([on(v ? 0.7 : 0.42, v ? 0.42 : 0.7, 0.18, s.x + a, s.y + b), M.estanho]);
  }
  list.r0603.forEach((s, i) => {
    const mat = i % 2 ? M.smd_capacitor : M.smd_preto;
    if (s.v) { P.push([on(0.8, 1.0, 0.45, s.x, s.y), mat]); P.push([on(0.8, 0.3, 0.45, s.x, s.y + 0.65), M.estanho]); P.push([on(0.8, 0.3, 0.45, s.x, s.y - 0.65), M.estanho]); }
    else { P.push([on(1.0, 0.8, 0.45, s.x, s.y), mat]); P.push([on(0.3, 0.8, 0.45, s.x + 0.65, s.y), M.estanho]); P.push([on(0.3, 0.8, 0.45, s.x - 0.65, s.y), M.estanho]); }
  });
  list.r0402.forEach((s, i) => {
    const mat = i % 2 ? M.smd_preto : M.smd_capacitor;
    if (s.v) { P.push([on(0.5, 0.6, 0.35, s.x, s.y), mat]); P.push([on(0.5, 0.2, 0.35, s.x, s.y + 0.4), M.estanho]); P.push([on(0.5, 0.2, 0.35, s.x, s.y - 0.4), M.estanho]); }
    else { P.push([on(0.6, 0.5, 0.35, s.x, s.y), mat]); P.push([on(0.2, 0.5, 0.35, s.x + 0.4, s.y), M.estanho]); P.push([on(0.2, 0.5, 0.35, s.x - 0.4, s.y), M.estanho]); }
  });
  return P;
}
function diode(x, y, face, M) { // SMA na vertical, faixa de polaridade do lado de cima
  const on = face === 'f' ? onF : onB;
  return [[on(2.6, 3.5, 2.0, x, y, 0.1), M.smd_preto], [on(2.62, 0.6, 2.02, x, y + 1.1, 0.1), M.marcacao_cinza],
    [on(1.5, 0.5, 1.0, x, y + 2.0), M.estanho], [on(1.5, 0.5, 1.0, x, y - 2.0), M.estanho]];
}

function buildPlaca(M) {
  const { B_X0: x0, B_X1: x1, B_Y0: y0, B_Y1: y1, B_TAIL: yt, B_TAILW: tw, B_CHAMF: ch } = D;
  const s = new THREE.Shape();
  s.moveTo(x0 + 0.5, y1); s.lineTo(x1 - 0.5, y1); s.lineTo(x1, y1 - 0.5);
  s.lineTo(x1, yt); s.lineTo(tw, yt - 0.5); s.lineTo(tw, y0 + ch); s.lineTo(tw - ch, y0);
  s.lineTo(-tw + ch, y0); s.lineTo(-tw, y0 + ch); s.lineTo(-tw, yt - 0.5); s.lineTo(x0, yt);
  s.lineTo(x0, y1 - 0.5); s.closePath();
  for (const h of [...HOLES, ...WIRE_PADS]) s.holes.push(circleHole(h.x, h.y, h.r));
  const pcb = lidUV(splitLids(slab(s, ZB, ZF, 0, { curve: 14 })), x0, x1, y0, y1);
  const kids = [node('substrato_pcb', [[pcb, [M.pcb_verso, M.pcb_frente, M.pcb_borda_fr4]]], [0, (y0 + y1) / 2, (ZB + ZF) / 2])];

  // ---- face da frente (antena / SIM)
  const { sw, ant, usb, sim, leds } = FRONT;
  // antena GPS cerâmica
  const aBase = lidUV(splitLids(slab(rrShape(ant.s / 2 - 0.2, ant.s / 2 - 0.2, 0.5, ant.x, ant.y), ZF, ZF + ant.t, 0.2, { segs: 2 })),
    ant.x - ant.s / 2, ant.x + ant.s / 2, ant.y - ant.s / 2, ant.y + ant.s / 2);
  const pin = new THREE.CylinderGeometry(0.62, 0.7, 0.3, 24).rotateX(PI / 2).translate(ant.x - 0.6, ant.y, ZF + ant.t + 0.15);
  const pinTop = new THREE.SphereGeometry(0.62, 20, 10, 0, PI * 2, 0, PI / 2).rotateX(PI / 2).scale(1, 1, 0.55).translate(ant.x - 0.6, ant.y, ZF + ant.t + 0.3);
  const zt = ZF + ant.t + 0.06;
  const w1 = tube([[ant.x + 3.4, ant.y + 7.9, zt], [ant.x + 3.45, ant.y + 6.8, zt], [ant.x + 3.4, ant.y + 5.6, zt]], 0.09, { seg: 8, radial: 6 });
  const w2 = tube([[ant.x + 7.9, ant.y - 1.6, zt], [ant.x + 6.9, ant.y - 1.6, zt], [ant.x + 5.6, ant.y - 1.65, zt]], 0.09, { seg: 8, radial: 6 });
  kids.push(node('antena_gps_ceramica', [[aBase, [M.ceramica_borda, M.ceramica_antena, M.ceramica_borda]], [pin, M.estanho], [pinTop, M.estanho], [w1, M.ouro], [w2, M.ouro]], [ant.x, ant.y, ZF + ant.t / 2]));

  // chave liga/desliga
  kids.push(node('chave_liga_desliga', [
    [slab(rrShape(sw.w / 2 - 0.1, sw.h / 2 - 0.1, 0.3, sw.x, sw.y), ZF + 0.05, ZF + 1.45, 0.1, { segs: 1 }), M.estanho],
    [box(4.6, 1.3, 0.06, sw.x, sw.y, ZF + 1.47), M.fundo_contato],
    [box(1.6, 1.25, 1.0, sw.x - 1.0, sw.y, ZF + 1.95), M.chave_alavanca],
    ...[[-1, -1], [1, -1], [-1, 1], [1, 1]].map(([a, b]) => [onF(0.8, 0.6, 0.3, sw.x + a * (sw.w / 2 + 0.25), sw.y + b * 1.1), M.estanho]),
  ], [sw.x, sw.y, ZF + 1]));

  // micro-USB (abertura voltada para a proteção)
  const uS = new THREE.Shape();
  { const hw = usb.w / 2, hh = usb.h / 2, c = 0.9; uS.moveTo(-hw + 0.5, hh); uS.lineTo(hw - 0.5, hh); uS.quadraticCurveTo(hw, hh, hw, hh - 0.5); uS.lineTo(hw, -hh + c); uS.lineTo(hw - c, -hh); uS.lineTo(-hw + c, -hh); uS.lineTo(-hw, -hh + c); uS.lineTo(-hw, hh - 0.5); uS.quadraticCurveTo(-hw, hh, -hw + 0.5, hh); }
  const iw = usb.w / 2 - 0.4, ih = usb.h / 2 - 0.4;
  const hole = new THREE.Path(); hole.moveTo(-iw, ih); hole.lineTo(iw, ih); hole.lineTo(iw, -ih + 0.5); hole.lineTo(iw - 0.6, -ih); hole.lineTo(-iw + 0.6, -ih); hole.lineTo(-iw, -ih + 0.5); hole.closePath();
  uS.holes.push(hole);
  const shell = slab(uS, ZF, ZF + usb.t).translate(usb.x, usb.y, 0);
  kids.push(node('conector_micro_usb', [
    [shell, M.metal_usb],
    [box(usb.w - 0.8, usb.h - 0.8, 0.1, usb.x, usb.y, ZF + 0.05), M.fundo_contato],
    [box(5.0, 0.6, 1.7, usb.x, usb.y + 0.25, ZF + 0.9), M.smd_preto],
    [box(4.2, 0.08, 1.2, usb.x, usb.y - 0.08, ZF + 1.1), M.ouro],
    [onF(1.0, 2.2, 0.3, usb.x - 4.3, usb.y), M.metal_usb], [onF(1.0, 2.2, 0.3, usb.x + 4.3, usb.y), M.metal_usb],
  ], [usb.x, usb.y, ZF + usb.t / 2]));

  // porta-SIM (base plástica, tampa metálica com furos, lâminas douradas)
  const zc = ZF + 1.15;
  const cover = rrShape(7.4, 7.9, 0.8, sim.x, sim.y + 0.4);
  for (const yy of [4.6, -3.8]) for (const xx of [-4.5, -1.5, 1.5, 4.5]) cover.holes.push(circleHole(sim.x + xx, sim.y + yy, 0.62));
  cover.holes.push(rrHole(3.0, 0.62, 0.6, sim.x, sim.y + 0.4));
  const simParts = [
    [slab(rrShape(sim.w / 2, sim.h / 2, 0.6, sim.x, sim.y), ZF, zc), M.plastico_sim],
    [slab(cover, zc, zc + 0.3, 0.06, { segs: 1, curve: 8 }), M.metal_sim],
    [new THREE.CylinderGeometry(0.42, 0.42, 14.6, 16).rotateZ(PI / 2).translate(sim.x, sim.y - 7.7, zc + 0.05), M.metal_sim],
  ];
  for (const yy of [4.6, -3.8]) for (const xx of [-4.5, -1.5, 1.5, 4.5]) simParts.push([box(1.0, 1.7, 0.1, sim.x + xx, sim.y + yy, zc - 0.05), M.ouro]);
  for (let i = 0; i < 7; i++) simParts.push([onF(0.5, 1.5, 0.22, sim.x - 4.8 + i * 1.6, sim.y + sim.h / 2 + 0.6), M.ouro]);
  for (const [a, b] of [[-1, -5], [1, -5], [-1, 4], [1, 4]]) simParts.push([onF(0.8, 2.2, 0.5, sim.x + a * (sim.w / 2 + 0.35), sim.y + b), M.metal_sim]);
  kids.push(node('porta_sim', simParts, [sim.x, sim.y, ZF + 0.8]));

  // LEDs de status
  kids.push(node('leds_status', leds.flatMap((l, i) => [
    [onF(1.0, 0.8, 0.6, l.x, l.y), i ? M.led_status_2 : M.led_status_1],
    [onF(0.3, 0.8, 0.5, l.x - 0.65, l.y), M.estanho], [onF(0.3, 0.8, 0.5, l.x + 0.65, l.y), M.estanho],
  ]), [0, leds[0].y, ZF + 0.3]));
  kids.push(node('diodos_frente', FRONT.diodes.flatMap(d => diode(d.x, d.y, 'f', M)), [6.6, 28.2, ZF + 1]));
  kids.push(node('componentes_smd_frente', smdSet(FRONT, 'f', M), [0, 20, ZF + 0.3]));

  // ---- verso (componentes; a área da bateria fica lisa)
  const { cap, soic, shield: sh, ind, tant } = BACK;
  const can = new THREE.CylinderGeometry(cap.r, cap.r, cap.h - 0.6, 40, 1).rotateX(-PI / 2).translate(cap.x, cap.y, ZB - 0.6 - (cap.h - 0.6) / 2);
  kids.push(node('capacitor_eletrolitico', [
    [can, [M.capacitor_lata, M.capacitor_topo, M.capacitor_lata]],
    [onB(6.6, 6.6, 0.6, cap.x, cap.y), M.smd_preto],
    [onB(1.1, 1.6, 0.4, cap.x, cap.y + 3.4), M.estanho], [onB(1.1, 1.6, 0.4, cap.x, cap.y - 3.4), M.estanho],
  ], [cap.x, cap.y, ZB - cap.h / 2]));
  const sp = [[onB(soic.w, soic.h, 1.5, soic.x, soic.y, 0.12), M.smd_preto]];
  for (let i = 0; i < 4; i++) for (const sy of [-1, 1]) sp.push([onB(0.42, 1.0, 0.2, soic.x - 1.9 + i * 1.27, soic.y + sy * 2.35, 0.05), M.estanho]);
  kids.push(node('ci_soic8', sp, [soic.x, soic.y, ZB - 0.8]));
  // blindagem metálica com o canto recortado
  const ls = new THREE.Shape();
  ls.moveTo(sh.x0 + sh.nx, sh.y0); ls.lineTo(sh.x1, sh.y0); ls.lineTo(sh.x1, sh.y1); ls.lineTo(sh.x0, sh.y1);
  ls.lineTo(sh.x0, sh.y0 + sh.ny); ls.lineTo(sh.x0 + sh.nx, sh.y0 + sh.ny); ls.closePath();
  const shg = slab(ls, ZB - sh.h, ZB, 0.12, { segs: 1 });
  planarUV(shg, 0, 12, 0, 12);
  kids.push(node('blindagem_metalica', [[shg, M.metal_blindagem]], [(sh.x0 + sh.x1) / 2, (sh.y0 + sh.y1) / 2, ZB - sh.h / 2]));
  const indG = lidUV(splitLids(slab(rrShape(ind.s / 2 - 0.25, ind.s / 2 - 0.25, 0.6, ind.x, ind.y), ZB - ind.h, ZB, 0.25, { segs: 2 })),
    ind.x - ind.s / 2, ind.x + ind.s / 2, ind.y - ind.s / 2, ind.y + ind.s / 2);
  kids.push(node('indutor_470', [[indG, [M.indutor_topo, M.indutor, M.indutor]]], [ind.x, ind.y, ZB - ind.h / 2]));
  kids.push(node('capacitor_tantalo', [
    [onB(tant.w, tant.h, 1.9, tant.x, tant.y), M.tantalo],
    [onB(tant.w + 0.02, 0.6, 1.92, tant.x, tant.y + tant.h / 2 - 0.5), M.tantalo_faixa],
    [onB(1.8, 0.4, 1.0, tant.x, tant.y + tant.h / 2 + 0.15), M.estanho], [onB(1.8, 0.4, 1.0, tant.x, tant.y - tant.h / 2 - 0.15), M.estanho],
  ], [tant.x, tant.y, ZB - 1]));
  kids.push(node('diodos_verso', BACK.diodes.flatMap(d => diode(d.x, d.y, 'b', M)), [-9.3, 20, ZB - 1]));
  kids.push(node('componentes_smd_verso', smdSet(BACK, 'b', M), [0, 20, ZB - 0.3]));

  return makeSet('placa_j4_lite', [0, (y0 + y1) / 2, (ZB + ZF) / 2], kids);
}

// ------------------------------------------------------------------ 03 bateria (verso da placa)
function buildBateria(M) {
  const { BAT_X: bx, BAT_Y0: y0, BAT_Y1: y1, BAT_TAPE: ty, BAT_Z0: z0, BAT_Z1: z1 } = D;
  const hw = bx - 0.6, py0 = y0, py1 = ty; // bolsa
  const pouch = slab(rrShape(hw - 0.85, (py1 - py0) / 2 - 0.85, 0.5, 0, (py0 + py1) / 2), z0, z1, 0.85, { bevelT: 1.1, segs: 5 });
  planarUV(pouch, -10, 10, -34, 2);
  const seals = [-1, 1].map(s => new THREE.CapsuleGeometry(0.5, py1 - py0 - 1.6, 4, 12).translate(s * (hw + 0.25), (py0 + py1) / 2, (z0 + z1) / 2));
  const tape = slab(rrShape(bx - 0.2 - 0.4, (y1 - (ty - 0.6)) / 2 - 0.4, 0.5, 0, (y1 + ty - 0.6) / 2), z0 + 0.25, z1 - 0.25, 0.4, { segs: 3 });
  const inner = [
    [box(hw * 2 - 1, 1.8, 0.3, 0, ty - 0.2 + 0.9, (z0 + z1) / 2), M.bateria_aluminio],    // terraço da bolsa
    [box(16.5, 2.8, 0.55, 0, -1.4, 4.35), M.pcb_protecao_bateria],                          // placa de proteção
    [box(2.9, 1.6, 0.6, -3.0, -1.4, 4.92), M.smd_preto], [box(2.0, 2.0, 0.55, 2.4, -1.4, 4.9), M.smd_preto],
    [box(3.0, 3.4, 0.12, -6.2, -3.4, 4.2), M.niquel], [box(3.0, 3.4, 0.12, 6.2, -3.4, 4.2), M.niquel],
  ];
  const red = tube([[4.2, 1.0, 4.7], [3.0, 2.1, 4.95], [-3.0, 2.25, 5.15], [-7.2, 2.5, 5.45], [-8.6, 2.9, 5.84]], 0.45);
  const blk = tube([[5.4, 1.0, 4.7], [4.4, 1.7, 4.85], [-2.0, 1.85, 4.95], [-5.2, 2.3, 5.3], [-6.2, 2.9, 5.84]], 0.45);
  const blobs = BACK.batPads.map(p => new THREE.SphereGeometry(0.75, 16, 8).scale(1, 1, 0.45).translate(p.x, p.y, ZB - 0.05));
  const kids = [
    node('bolsa_aluminio', [[pouch, M.bateria_aluminio], ...seals.map(g => [g, M.bateria_aluminio])], [0, (py0 + py1) / 2, (z0 + z1) / 2]),
    node('fita_kapton_amarela', [[tape, M.fita_kapton]], [0, (y1 + ty) / 2, (z0 + z1) / 2]),
    node('circuito_protecao_bateria', inner, [0, -1.6, 4.3]),
    node('fios_bateria', [[red, M.fio_vermelho], [blk, M.fio_preto], ...blobs.map(b => [b, M.estanho])], [-2, 2.2, 5.2]),
  ];
  return makeSet('bateria_j4_lite', [0, (y0 + y1) / 2, (z0 + z1) / 2], kids);
}

// ------------------------------------------------------------------ 06 chicote (acompanha a placa)
function buildChicote(M) {
  const g = (y, a, b, n = 2) => ({ y, a, b, n });
  // passa-fios: flange interna, gola na parede e três anéis externos
  const grommet = loft([
    g(40.3, 4.6, 2.4, 3.2), g(40.45, 5.1, 2.8, 3.2), g(41.25, 5.1, 2.8, 3.2), g(41.4, 4.6, 2.6, 3),
    g(41.45, 3.55, 3.12, 2.4), g(43.1, 3.55, 3.12, 2.4),
    g(43.35, 3.95, 3.5), g(43.65, 4.3, 3.85), g(44.35, 4.3, 3.85), g(44.65, 3.75, 3.3), g(44.9, 3.5, 3.05),
    g(45.15, 3.9, 3.45), g(45.45, 4.25, 3.8), g(46.15, 4.25, 3.8), g(46.45, 3.7, 3.25), g(46.7, 3.45, 3.0),
    g(46.95, 3.85, 3.4), g(47.25, 4.15, 3.7), g(47.95, 4.15, 3.7), g(48.25, 3.6, 3.15), g(48.45, 2.9, 2.55),
  ], { seg: 56 });
  // cabo revestido
  const cable = loft([g(48.0, 2.4, 2.1), g(61.8, 2.4, 2.1)], { caps: [false, false] });
  // termorretrátil (leves ondulações)
  const hs = [g(61.0, 2.55, 2.3), g(61.25, 2.95, 2.7), g(61.6, 3.1, 2.85)];
  for (let i = 0; i <= 26; i++) { const y = 61.9 + i * 0.5, w = Math.sin(i * 1.7) * 0.05 + Math.sin(i * 0.6) * 0.04; hs.push(g(y, 3.15 + w + i * 0.004, 2.9 + w + i * 0.003)); }
  hs.push(g(75.4, 3.2, 2.95), g(75.7, 3.05, 2.8));
  const shrink = loft(hs, { seg: 48 });
  // bota de transição (redonda -> retangular)
  const boot = loft([g(75.2, 3.1, 2.85), g(76.6, 3.4, 2.85, 2.4), g(78.0, 4.1, 2.82, 3), g(79.4, 4.85, 2.8, 3.6), g(80.9, 5.2, 2.8, 4), g(81.1, 5.0, 2.65, 4)], { seg: 48 });

  // conector de 4 contatos com travas laterais
  const ev = new Evaluator(); ev.attributes = ['position', 'uv', 'normal']; ev.useGroups = true;
  const bs = rrPath(new THREE.Shape(), -5.2, D.CZ - 2.8, 5.2, D.CZ + 2.8, 0.7);
  const cb = new THREE.ExtrudeGeometry(bs, { depth: 9.4, bevelEnabled: true, bevelSize: 0.25, bevelThickness: 0.25, bevelSegments: 2, curveSegments: 8 });
  cb.rotateX(PI / 2).translate(0, 80.85 + 9.4, 0); // forma em (x, z); extrusão ao longo de Y
  cb.clearGroups();
  let body = new Brush(cb, M.conector_corpo); body.updateMatrixWorld();
  const XS = [-3.45, -1.15, 1.15, 3.45];
  const pockets = new Brush(mergeGeometries(XS.map(x => prep(box(1.8, 4.0, 3.4, x, 89.0, D.CZ)))), M.fundo_contato);
  pockets.updateMatrixWorld();
  body = ev.evaluate(body, pockets, SUBTRACTION);
  const contacts = [];
  for (const x of XS) {
    contacts.push([new THREE.CylinderGeometry(0.55, 0.55, 3.3, 18).translate(x, 88.85, D.CZ + 0.15), M.contato_metal]);
    contacts.push([box(1.25, 3.3, 0.18, x, 88.85, D.CZ - 1.45), M.contato_metal]);
  }
  const wings = [-1, 1].map(s => {
    const w = new THREE.BoxGeometry(0.7, 5.6, 4.6);
    w.translate(0, -2.6, 0).rotateZ(s * 0.22).translate(s * 5.55, 89.2, D.CZ);
    return [w, M.conector_corpo];
  });
  const ribs = [-1, 1].map(s => [box(0.5, 2.6, 4.4, s * 6.5, 85.0, D.CZ), M.conector_corpo]);
  const key = [box(2.4, 6.0, 0.5, 0, 84.6, D.CZ + 3.0), M.conector_corpo];

  // fios internos (vermelho, preto, laranja, amarelo) do passa-fios até os pads da placa
  const wires = [], ends = [];
  const mats = [M.fio_vermelho, M.fio_preto, M.fio_laranja, M.fio_amarelo];
  WIRE_PADS.slice(0, 4).forEach((p, i) => {
    const xs = -2.1 + i * 1.4;
    wires.push([tube([[xs, 40.6, D.CZ], [xs + (p.x - xs) * 0.4, 38.4, D.CZ + 0.9], [p.x, 35.6, ZF + 1.15], [p.x, 34.2, ZF + 0.85], [p.x, 33.75, ZF + 0.55]], 0.55), mats[i]]);
    ends.push([new THREE.CylinderGeometry(0.36, 0.36, 0.9, 12).rotateX(PI / 2).translate(p.x, p.y + 0.15, ZF + 0.3), M.estanho]);
    ends.push([new THREE.SphereGeometry(0.85, 16, 8).scale(1, 1, 0.42).translate(p.x, p.y, ZF), M.estanho]);
  });

  const kids = [
    node('passa_fios', [[grommet, M.borracha_passa_fios]], [0, 44.4, D.CZ]),
    node('cabo_revestido', [[cable, M.cabo_revestimento]], [0, 55, D.CZ]),
    node('termorretratil', [[shrink, M.termorretratil]], [0, 68.4, D.CZ]),
    node('bota_conector', [[boot, M.conector_corpo]], [0, 78.2, D.CZ]),
    node('conector_4_vias', [[body.geometry, body.material], ...contacts, ...wings, ...ribs, key], [0, 85.5, D.CZ]),
    node('fios_internos', [...wires, ...ends], [-2, 37, D.CZ + 0.5]),
  ];
  return makeSet('chicote_j4_lite', [0, D.HL, D.CZ], kids);
}

// ------------------------------------------------------------------ conjunto completo
export function buildJ4() {
  const M = makeMaterials();
  const root = new THREE.Group();
  root.name = 'J4_Lite';
  const sets = {
    carcaca_j4_lite: buildCarcaca(M),
    placa_j4_lite: buildPlaca(M),
    bateria_j4_lite: buildBateria(M),
    protecao_interna_j4_lite: buildProtecao(M),
    tampa_externa_j4_lite: buildTampa(M),
    chicote_j4_lite: buildChicote(M),
  };
  SETS.forEach((s, i) => {
    const o = sets[s.id];
    o.userData = {
      ...o.userData, conjunto: s.n, nome: s.nome, descricao: s.desc,
      ordem_montagem: [1, 2, 3, 4][['bateria_j4_lite', 'placa_j4_lite', 'protecao_interna_j4_lite', 'tampa_externa_j4_lite'].indexOf(s.id)] ?? (s.id === 'chicote_j4_lite' ? 'acompanha a placa' : 'base'),
      posicao_montado: o.position.toArray().map(v => +v.toFixed(4)),
      posicao_explodido: [o.position.x, o.position.y, +(o.position.z + EXPLODE[s.id]).toFixed(4)],
      escala: 'relativa (1 unidade ≈ 1 mm estimado pelas fotos)',
    };
    root.add(o);
  });
  sets.placa_j4_lite.userData.aproximacoes = 'Componentes sob a blindagem e o lado escondido pela bateria não foram inventados: a área fica lisa, como na placa nua.';
  sets.bateria_j4_lite.userData.aproximacoes = 'O circuito de proteção sob a fita amarela é uma aproximação.';
  sets.chicote_j4_lite.userData.aproximacoes = 'Contatos internos do conector aproximados.';
  return { root, sets, M };
}
