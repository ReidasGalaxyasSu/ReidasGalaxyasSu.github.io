// O salão: cozinha com a doca de recarga, o corredor e as 3 mesas; e os utensílios que a pinça sabe pegar.
// Todas as posições de mesa são dadas no "referencial de estacionamento": o referencial do robô parado ao lado
// da mesa (rumo +X do mundo, mesa à direita). Assim as mesmas coordenadas servem ao braço e ao desenho.
import * as THREE from 'three';
import {rbox} from './robot.js';

const PI = Math.PI;
const V3 = THREE.Vector3;

export const HEADING = PI / 2;             // rumo do robô no corredor (anda para +X do mundo)
export const DOCK_X = -2.9;                // doca de recarga na cozinha
export const TABLE_X = [-1.3, 0.2, 1.7];   // onde o robô estaciona para cada mesa
export const TABLE_TOP = 0.75;
export const TABLE_EDGE = 0.60;            // borda da mesa a 0,60 m do centro do robô (x do estacionamento)
export const TABLE_SIZE = 0.9;
export const TABLE_C = {x: TABLE_EDGE + TABLE_SIZE / 2, z: 0.0}; // centro da mesa no referencial de estacionamento
export const EDGE_BAND = 0.24;             // faixa da borda alcançável (a partir da borda do lado do corredor)

/** referencial de estacionamento da mesa k → mundo */
export const parkToWorld = (k, x, y, z) => new V3(TABLE_X[k] + z, y, -x);

// ------------------------------------------------------------------ utensílios
// r = raio de contato, gripH = altura da ponta dos dedos acima do fundo, mode = lateral (almofadas) ou apoio (abas sob a borda)
export const TYPES = {
  garrafa: {nome: 'Garrafa', curto: 'Garrafa', r: 0.036, h: 0.30, gripH: 0.16, mass: 1.2, mode: 'lateral', icon: '🍾',
    nota: 'Pega lateral pelo corpo. A palma fica 1 cm acima da tampa; dedos de 150 mm alcançam o corpo.'},
  copo: {nome: "Copo d'água", curto: 'Copo', r: 0.034, h: 0.12, gripH: 0.045, mass: 0.38, mode: 'lateral', icon: '🥛',
    nota: 'Pega lateral a 45 mm do fundo; o fin-ray se curva no vidro e a força fica baixa.'},
  cafe: {nome: 'Café (xícara + pires)', curto: 'Café', r: 0.075, h: 0.085, gripH: 0.003, mass: 0.32, mode: 'apoio', icon: '☕',
    nota: 'Pega pelo pires: abas sob a borda, a xícara vai junto, sem derramar.'},
  sobremesa: {nome: 'Prato de sobremesa', curto: 'Sobremesa', r: 0.095, h: 0.06, gripH: 0.004, mass: 0.45, mode: 'apoio', icon: '🍰',
    nota: 'Prato de 190 mm: abas sob a borda, almofadas só centralizam.'},
  prato: {nome: 'Prato principal', curto: 'Prato', r: 0.13, h: 0.05, gripH: 0.004, mass: 0.85, mode: 'apoio', icon: '🍽️',
    nota: 'Prato raso de 260 mm: abertura de 290 mm, abas entram 6 mm sob a borda.'},
};
export const DELIVER_ORDER = ['garrafa', 'copo', 'cafe', 'sobremesa', 'prato']; // o mais alto sai primeiro
export const BUS_ORDER = [...DELIVER_ORDER].reverse();                          // e volta por último

// posições na bandeja de trabalho (referencial do robô)
export const TRAY_SLOT = {
  sobremesa: [-0.18, -0.09], copo: [-0.04, -0.13], garrafa: [0.06, -0.12], cafe: [0.18, -0.07], prato: [-0.14, 0.17],
};
// posições na borda da mesa (referencial de estacionamento): x = borda + 3 cm + raio
export const EDGE_SPOT = {
  prato: [-0.30], sobremesa: [-0.06], cafe: [0.12], copo: [0.25], garrafa: [0.36],
};
for (const k of Object.keys(EDGE_SPOT)) EDGE_SPOT[k] = [TABLE_EDGE + 0.03 + TYPES[k].r, EDGE_SPOT[k][0]];
// fora de alcance (centro da mesa)
export const CENTER_SPOT = {
  prato: [TABLE_C.x + 0.12, -0.08], sobremesa: [TABLE_C.x + 0.12, 0.12], cafe: [TABLE_C.x + 0.18, 0.0], copo: [TABLE_C.x + 0.2, 0.2], garrafa: [TABLE_C.x + 0.24, -0.25],
};
export const isOnEdge = (x) => x - TABLE_EDGE <= EDGE_BAND;

// ------------------------------------------------------------------ modelos dos utensílios (origem no centro do fundo)
const lathe = (pts, seg = 48) => new THREE.LatheGeometry(pts.map(([r, y]) => new THREE.Vector2(r, y)), seg);
const M = {
  porcelain: new THREE.MeshStandardMaterial({color: '#fbfaf6', roughness: 0.22, side: THREE.DoubleSide}),
  glass: new THREE.MeshStandardMaterial({color: '#dff1f4', roughness: 0.05, metalness: 0.1, transparent: true, opacity: 0.38, side: THREE.DoubleSide, depthWrite: false}),
  water: new THREE.MeshStandardMaterial({color: '#bfe3ee', roughness: 0.1, transparent: true, opacity: 0.45, depthWrite: false}),
  bottle: new THREE.MeshStandardMaterial({color: '#2f5d3a', roughness: 0.12, metalness: 0.2, transparent: true, opacity: 0.86, side: THREE.DoubleSide}),
  label: new THREE.MeshStandardMaterial({color: '#efe6d2', roughness: 0.7}),
  cap: new THREE.MeshStandardMaterial({color: '#7a1f2b', roughness: 0.4, metalness: 0.4}),
  coffee: new THREE.MeshStandardMaterial({color: '#3b2314', roughness: 0.25}),
  steak: new THREE.MeshStandardMaterial({color: '#8a4b2a', roughness: 0.75}),
  green: new THREE.MeshStandardMaterial({color: '#5fa043', roughness: 0.8}),
  red: new THREE.MeshStandardMaterial({color: '#e0482f', roughness: 0.5}),
  rice: new THREE.MeshStandardMaterial({color: '#f3eedf', roughness: 0.9}),
  cake: new THREE.MeshStandardMaterial({color: '#f0d9a8', roughness: 0.8}),
  choco: new THREE.MeshStandardMaterial({color: '#4a2a1a', roughness: 0.5}),
  berry: new THREE.MeshStandardMaterial({color: '#b3123c', roughness: 0.4}),
  crumbs: new THREE.MeshStandardMaterial({color: '#b28a5b', roughness: 0.9}),
};
const add = (g, geo, mat, x = 0, y = 0, z = 0, cast = true) => {
  const m = new THREE.Mesh(geo, mat);
  m.position.set(x, y, z);
  m.castShadow = cast;
  m.receiveShadow = true;
  g.add(m);
  return m;
};
function plateGeo(R) {
  const k = R / 0.13;
  return lathe([[0, 0], [0.06 * k, 0], [0.07 * k, 0.004], [0.11 * k, 0.016], [0.122 * k, 0.022], [R, 0.026], [R - 0.004, 0.027], [0.108 * k, 0.021], [0.07 * k, 0.011], [0.06 * k, 0.009], [0, 0.009]], 64);
}
/** used = louça suja (restos) em vez de comida servida */
export function makeItem(type, used = false) {
  const g = new THREE.Group();
  g.userData.type = type;
  if (type === 'prato') {
    add(g, plateGeo(0.13), M.porcelain);
    if (!used) {
      const s = add(g, new THREE.SphereGeometry(0.05, 20, 12), M.steak, -0.02, 0.012, 0.0);
      s.scale.set(1.2, 0.42, 0.85);
      const r = add(g, new THREE.SphereGeometry(0.035, 16, 10), M.rice, 0.05, 0.012, -0.03);
      r.scale.set(1, 0.6, 1);
      for (let i = 0; i < 5; i++) add(g, new THREE.SphereGeometry(0.011, 10, 8), i % 2 ? M.red : M.green, 0.04 + Math.cos(i) * 0.02, 0.016, 0.04 + Math.sin(i * 1.7) * 0.012);
    } else {
      for (let i = 0; i < 6; i++) add(g, new THREE.SphereGeometry(0.006, 8, 6), i % 2 ? M.crumbs : M.green, Math.cos(i * 2.1) * 0.05, 0.012, Math.sin(i * 1.3) * 0.04, false);
    }
  } else if (type === 'sobremesa') {
    add(g, plateGeo(0.095), M.porcelain);
    if (!used) {
      const w = add(g, new THREE.CylinderGeometry(0.055, 0.055, 0.045, 24, 1, false, 0, PI / 3), M.cake, 0, 0.032, 0);
      w.rotation.y = 0.4;
      const t = add(g, new THREE.CylinderGeometry(0.056, 0.056, 0.008, 24, 1, false, 0, PI / 3), M.choco, 0, 0.058, 0);
      t.rotation.y = 0.4;
      add(g, new THREE.SphereGeometry(0.009, 10, 8), M.berry, 0.022, 0.066, 0.012);
    } else add(g, new THREE.SphereGeometry(0.008, 8, 6), M.choco, 0.01, 0.01, 0.0, false);
  } else if (type === 'cafe') {
    add(g, plateGeo(0.075), M.porcelain);
    const cup = add(g, lathe([[0.022, 0.009], [0.03, 0.012], [0.038, 0.04], [0.041, 0.075], [0.039, 0.075], [0.036, 0.042], [0.028, 0.016], [0, 0.016]]), M.porcelain);
    cup.castShadow = true;
    const h = add(g, new THREE.TorusGeometry(0.014, 0.004, 8, 20, PI * 1.2), M.porcelain, 0.045, 0.048, 0);
    h.rotation.z = -PI * 0.6;
    if (!used) add(g, new THREE.CylinderGeometry(0.035, 0.035, 0.002, 24), M.coffee, 0, 0.066, 0, false);
  } else if (type === 'copo') {
    add(g, lathe([[0.028, 0], [0.03, 0], [0.0375, 0.12], [0.0355, 0.12], [0.028, 0.006], [0, 0.006]]), M.glass, 0, 0, 0, false);
    if (!used) add(g, new THREE.CylinderGeometry(0.034, 0.029, 0.08, 24), M.water, 0, 0.046, 0, false);
    else add(g, new THREE.CylinderGeometry(0.031, 0.029, 0.018, 24), M.water, 0, 0.015, 0, false);
  } else if (type === 'garrafa') {
    add(g, lathe([[0, 0], [0.034, 0], [0.036, 0.006], [0.036, 0.2], [0.03, 0.235], [0.014, 0.255], [0.0135, 0.29], [0.0135, 0.29]], 40), M.bottle);
    add(g, new THREE.CylinderGeometry(0.0365, 0.0365, 0.08, 32, 1, true), M.label, 0, 0.1, 0, false);
    add(g, new THREE.CylinderGeometry(0.0145, 0.0145, 0.022, 20), M.cap, 0, 0.29, 0);
  }
  return g;
}

// ------------------------------------------------------------------ salão
export function buildWorld(scene) {
  const W = {tables: [], bands: [], pathLine: null};
  const mat = (c, r = 0.7, m = 0) => new THREE.MeshStandardMaterial({color: c, roughness: r, metalness: m});

  // piso de madeira clara em réguas (textura procedural)
  {
    const c = document.createElement('canvas');
    c.width = 1024;
    c.height = 1024;
    const g = c.getContext('2d');
    g.fillStyle = '#e8dcc8';
    g.fillRect(0, 0, 1024, 1024);
    for (let row = 0; row < 16; row++) {
      const y = row * 64;
      let x = -(row * 137) % 400;
      while (x < 1024) {
        const w = 260 + ((row * 31 + x) % 140);
        const t = 0.94 + (((row * 7 + x) % 13) / 13) * 0.08;
        g.fillStyle = `rgb(${232 * t | 0},${218 * t | 0},${196 * t | 0})`;
        g.fillRect(x + 1, y + 1, w - 2, 62);
        for (let k = 0; k < 6; k++) {
          g.strokeStyle = `rgba(160,130,95,${0.05 + 0.05 * ((k * 3 + row) % 3)})`;
          g.beginPath();
          g.moveTo(x, y + 8 + k * 9);
          g.bezierCurveTo(x + w * 0.3, y + 4 + k * 9, x + w * 0.6, y + 14 + k * 9, x + w, y + 8 + k * 9);
          g.stroke();
        }
        x += w;
      }
    }
    const tex = new THREE.CanvasTexture(c);
    tex.colorSpace = THREE.SRGBColorSpace;
    tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
    tex.repeat.set(3, 3);
    tex.anisotropy = 8;
    const floor = new THREE.Mesh(new THREE.PlaneGeometry(14, 10), new THREE.MeshStandardMaterial({map: tex, roughness: 0.6}));
    floor.rotation.x = -PI / 2;
    floor.position.set(0, 0, -0.6);
    floor.receiveShadow = true;
    scene.add(floor);
  }
  // paredes
  const wall = mat('#efe9df', 0.95);
  const back = new THREE.Mesh(new THREE.PlaneGeometry(14, 4), wall);
  back.position.set(0, 2, -2.6);
  back.receiveShadow = true;
  scene.add(back);
  const west = new THREE.Mesh(new THREE.PlaneGeometry(10, 4), wall);
  west.rotation.y = PI / 2;
  west.position.set(-4.1, 2, -0.6);
  west.receiveShadow = true;
  scene.add(west);
  const skirt = mat('#b48f63', 0.6);
  add(scene, new THREE.BoxGeometry(14, 0.09, 0.02), skirt, 0, 0.045, -2.59);
  add(scene, new THREE.BoxGeometry(0.02, 0.09, 10), skirt, -4.09, 0.045, -0.6);
  // ripado de madeira e quadros na parede do fundo
  for (let i = 0; i < 30; i++) add(scene, new THREE.BoxGeometry(0.045, 2.2, 0.035), mat('#c9a77b', 0.6), -1.9 + i * 0.075, 1.25, -2.57);
  for (const [x, c] of [[1.2, '#e2792b'], [2.0, '#19a7a1']]) {
    add(scene, new THREE.BoxGeometry(0.6, 0.45, 0.02), mat('#fbfaf6', 0.8), x, 1.65, -2.58);
    add(scene, new THREE.BoxGeometry(0.46, 0.31, 0.022), mat(c, 0.8), x, 1.65, -2.58);
  }

  // cozinha: balcão de passe com lâmpadas de calor, trilho de comandas e a doca de recarga
  {
    const k = new THREE.Group();
    scene.add(k);
    add(k, rbox(0.55, 1.0, 1.6, 0.03, 0.01), mat('#2b2e33', 0.6), -3.55, 0, 0.1);
    add(k, rbox(0.62, 0.04, 1.7, 0.02, 0.008), mat('#c9ccd0', 0.3, 0.8), -3.52, 1.0, 0.1);
    add(k, new THREE.BoxGeometry(0.05, 0.05, 1.5), mat('#c9ccd0', 0.3, 0.8), -3.5, 1.62, 0.1);
    for (let i = 0; i < 3; i++) {
      const z = -0.4 + i * 0.5;
      add(k, new THREE.CylinderGeometry(0.004, 0.004, 0.32, 6), mat('#222'), -3.5, 1.78, z);
      add(k, new THREE.CylinderGeometry(0.06, 0.13, 0.12, 24, 1, true), mat('#e2792b', 0.5), -3.5, 1.56, z).material.side = THREE.DoubleSide;
      const bulb = add(k, new THREE.SphereGeometry(0.04, 12, 8), new THREE.MeshStandardMaterial({color: '#ffd7a0', emissive: '#ff9a3c', emissiveIntensity: 0.9}), -3.5, 1.5, z, false);
      bulb.castShadow = false;
    }
    for (let i = 0; i < 5; i++) add(k, new THREE.BoxGeometry(0.003, 0.08, 0.06), mat('#fbfaf6', 0.9), -3.47, 1.55, -0.6 + i * 0.3, false);
    // parede da cozinha com janela de passe
    add(k, new THREE.BoxGeometry(0.06, 2.6, 1.9), mat('#e6dfd3', 0.95), -3.9, 1.3, -1.85);
    add(k, new THREE.BoxGeometry(0.06, 2.6, 1.6), mat('#e6dfd3', 0.95), -3.9, 1.3, 1.9);
    add(k, new THREE.BoxGeometry(0.06, 0.9, 1.9), mat('#e6dfd3', 0.95), -3.9, 2.15, 0.15);
    // doca de recarga no chão
    const dock = add(k, new THREE.CylinderGeometry(0.42, 0.42, 0.012, 48), mat('#d9d4cb', 0.7), DOCK_X, 0.006, 0, false);
    dock.receiveShadow = true;
    add(k, new THREE.TorusGeometry(0.4, 0.008, 6, 64).rotateX(PI / 2), new THREE.MeshStandardMaterial({color: '#19d3cc', emissive: '#12c9c2', emissiveIntensity: 0.7}), DOCK_X, 0.014, 0, false);
    add(k, new THREE.BoxGeometry(0.16, 0.012, 0.36), mat('#2b2e33', 0.5), DOCK_X - 0.34, 0.012, 0, false);
  }

  // mesas quadradas de madeira, toalha de linho, 2 cadeiras do lado oposto ao corredor
  const wood = mat('#cfa673', 0.5);
  const woodLeg = mat('#a8794a', 0.6);
  const cloth = new THREE.MeshStandardMaterial({color: '#f6f2ea', roughness: 0.95, side: THREE.DoubleSide});
  for (let k = 0; k < 3; k++) {
    const t = new THREE.Group();
    const c = parkToWorld(k, TABLE_C.x, 0, TABLE_C.z);
    t.position.copy(c);
    scene.add(t);
    const S = TABLE_SIZE;
    add(t, rbox(S, 0.035, S, 0.02, 0.008), wood, 0, TABLE_TOP - 0.035, 0);
    // toalha central (runner) deixa a madeira à mostra nas bordas
    add(t, new THREE.BoxGeometry(S * 0.42, 0.002, S + 0.06), cloth, 0, TABLE_TOP + 0.001, 0, false);
    for (const [sx, sz] of [[-1, -1], [1, -1], [-1, 1], [1, 1]]) add(t, new THREE.BoxGeometry(0.045, TABLE_TOP - 0.035, 0.045), woodLeg, sx * (S / 2 - 0.05), (TABLE_TOP - 0.035) / 2, sz * (S / 2 - 0.05));
    for (const s of [-1, 1]) {
      add(t, new THREE.BoxGeometry(S - 0.14, 0.07, 0.02), woodLeg, 0, TABLE_TOP - 0.07, s * (S / 2 - 0.05));
      add(t, new THREE.BoxGeometry(0.02, 0.07, S - 0.14), woodLeg, s * (S / 2 - 0.05), TABLE_TOP - 0.07, 0);
    }
    // cadeiras do lado de trás (−Z do mundo)
    for (const dx of [-0.22, 0.22]) {
      const ch = new THREE.Group();
      ch.position.set(dx, 0, -S / 2 - 0.3);
      t.add(ch);
      add(ch, rbox(0.42, 0.04, 0.42, 0.05, 0.012), wood, 0, 0.44, 0);
      add(ch, rbox(0.42, 0.32, 0.03, 0.03, 0.01), wood, 0, 0.5, -0.2);
      for (const [px, pz] of [[-0.18, -0.18], [0.18, -0.18], [-0.18, 0.18], [0.18, 0.18]]) add(ch, new THREE.CylinderGeometry(0.015, 0.013, 0.44, 10), woodLeg, px, 0.22, pz);
    }
    // placa com o número da mesa
    const cv = document.createElement('canvas');
    cv.width = 128;
    cv.height = 64;
    const g2 = cv.getContext('2d');
    g2.fillStyle = '#1d1f23';
    g2.fillRect(0, 0, 128, 64);
    g2.fillStyle = '#ffffff';
    g2.font = '700 40px Inter, sans-serif';
    g2.textAlign = 'center';
    g2.fillText(String(k + 1), 64, 47);
    const tx = new THREE.CanvasTexture(cv);
    tx.colorSpace = THREE.SRGBColorSpace;
    const plaque = new THREE.Mesh(new THREE.PlaneGeometry(0.08, 0.04), new THREE.MeshBasicMaterial({map: tx}));
    const pl = new THREE.Group();
    pl.position.set(0.0, TABLE_TOP, -S / 2 + 0.14);
    t.add(pl);
    add(pl, new THREE.BoxGeometry(0.09, 0.05, 0.012), mat('#1d1f23'), 0, 0.03, 0).rotation.x = -0.35;
    plaque.position.set(0, 0.032, 0.0075);
    plaque.rotation.x = -0.35;
    pl.add(plaque);
    // faixa de alcance na borda do corredor
    const band = new THREE.Mesh(
      new THREE.PlaneGeometry(S - 0.02, EDGE_BAND),
      new THREE.MeshBasicMaterial({color: '#19d3cc', transparent: true, opacity: 0.0, depthWrite: false}),
    );
    band.rotation.x = -PI / 2;
    band.position.set(0, TABLE_TOP + 0.003, S / 2 - EDGE_BAND / 2 - 0.01);
    band.renderOrder = 2;
    t.add(band);
    W.bands.push(band);
    W.tables.push(t);
  }
  // trajeto no piso: corredor e marcas de estacionamento
  {
    const pts = [];
    const n = 120;
    for (let i = 0; i <= n; i++) pts.push(new V3(DOCK_X + (TABLE_X[2] - DOCK_X) * (i / n), 0.004, 0));
    const geo = new THREE.BufferGeometry().setFromPoints(pts);
    const line = new THREE.Line(geo, new THREE.LineDashedMaterial({color: '#19a7a1', dashSize: 0.08, gapSize: 0.06, transparent: true, opacity: 0}));
    line.computeLineDistances();
    scene.add(line);
    W.pathLine = line;
    W.marks = TABLE_X.map((x) => {
      const m = new THREE.Mesh(new THREE.RingGeometry(0.3, 0.32, 48), new THREE.MeshBasicMaterial({color: '#19a7a1', transparent: true, opacity: 0, depthWrite: false}));
      m.rotation.x = -PI / 2;
      m.position.set(x, 0.005, 0);
      scene.add(m);
      return m;
    });
  }
  return W;
}
