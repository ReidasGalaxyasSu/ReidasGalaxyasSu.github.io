// Modelo 3D do apartamento, construído a partir das cotas da planta.
// Sistema de coordenadas (metros): x → leste (direita da planta), z → sul (para baixo na planta), y → altura.
// Origem: canto interno noroeste da sala.
import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import * as T from './textures.js';

export const H = 2.7; // pé-direito

// Planta: pixel → metro (73,3 px/m; origem no canto interno da sala em px 57,50)
export const PLAN_BOUNDS = { x0: -57 / 73.3, x1: (732 - 57) / 73.3, z0: -50 / 73.3, z1: (537 - 50) / 73.3 };

// ---------------------------------------------------------------- materiais
const allMaterials = new Set();
function std(params) {
  const m = new THREE.MeshStandardMaterial(params);
  allMaterials.add(m);
  return m;
}
function phys(params) {
  const m = new THREE.MeshPhysicalMaterial(params);
  allMaterials.add(m);
  return m;
}
function withRepeat(t, size) { t.repeat.set(1 / size, 1 / size); return t; }
// tecido: brilho aveludado (sheen) + relevo da trama
function cloth(color, seed, size, sheenColor, extra = {}) {
  const t = withRepeat(T.fabric(color, seed), size);
  return phys({ map: t, bumpMap: t, bumpScale: 0.35, roughness: 0.92, sheen: 1, sheenRoughness: 0.55, sheenColor, ...extra });
}

function makeMaterials() {
  const stone = T.stone();
  withRepeat(stone.map, 1.0); withRepeat(stone.bump, 1.0);
  const walnutTex = withRepeat(T.wood([96, 60, 38], 7), 1.2);
  const walnutDarkTex = withRepeat(T.wood([70, 44, 28], 8), 1.2);
  const floorWood = withRepeat(T.wood([120, 92, 70], 12), 1.6);
  const wallTex = withRepeat(T.concrete('#7e7973', 2, [1, 1], 0.045, 1024), 2.6);
  const tileTex = withRepeat(T.tiles('#77736e', 3), 1.8);
  const bathTex = withRepeat(T.tiles('#4a4744', 6, 0.6, 512), 1.2);
  const leatherTex = withRepeat(T.leather('#5e2f17'), 1.2);
  const cementTex = withRepeat(T.concrete('#8e8a85', 5), 1.4);
  return {
    wall: std({ map: wallTex, bumpMap: wallTex, bumpScale: 0.35, roughness: 0.9 }),
    wallDark: std({ map: withRepeat(T.concrete('#4f4b47', 4), 2.0), roughness: 0.6 }),
    cut: std({ color: '#181615', roughness: 1 }),
    black: std({ color: '#121212', roughness: 0.7 }),
    blackGloss: phys({ color: '#0b0b0c', roughness: 0.3, metalness: 0.1, clearcoat: 1, clearcoatRoughness: 0.08 }),
    floorTile: std({ map: tileTex, bumpMap: tileTex, bumpScale: 0.8, roughness: 0.34 }),
    floorBath: std({ map: bathTex, bumpMap: bathTex, bumpScale: 0.8, roughness: 0.3 }),
    floorWood: std({ map: floorWood, bumpMap: floorWood, bumpScale: 0.5, roughness: 0.48 }),
    slab: std({ map: withRepeat(T.concrete('#3a3735', 9), 3), roughness: 1 }),
    walnut: std({ map: walnutTex, bumpMap: walnutTex, bumpScale: 0.45, roughness: 0.48 }),
    walnutDark: std({ map: walnutDarkTex, bumpMap: walnutDarkTex, bumpScale: 0.45, roughness: 0.5 }),
    granite: phys({ map: withRepeat(T.granite(), 0.6), roughness: 0.25, clearcoat: 1, clearcoatRoughness: 0.06 }),
    cement: std({ map: cementTex, bumpMap: cementTex, bumpScale: 0.4, roughness: 0.78 }),
    stoneTop: std({ map: withRepeat(T.concrete('#7c7873', 15), 0.8), roughness: 0.32 }),
    stone: std({ map: stone.map, bumpMap: stone.bump, bumpScale: 3, roughness: 0.95 }),
    leather: phys({ map: leatherTex, bumpMap: leatherTex, bumpScale: 0.5, roughness: 0.52, clearcoat: 0.35, clearcoatRoughness: 0.45 }),
    redLacquer: phys({ color: '#9d1518', roughness: 0.35, clearcoat: 0.9, clearcoatRoughness: 0.12 }),
    greenVelvet: cloth('#1f3a2a', 13, 0.4, '#6f9c7b', { sheenRoughness: 0.4 }),
    linen: cloth('#8e867c', 14, 0.5, '#d8cfc2'),
    duvet: cloth('#6d6760', 15, 0.6, '#b9b1a6'),
    charcoal: cloth('#2c2a28', 16, 0.5, '#6e6a66'),
    headboard: cloth('#4a433c', 17, 0.5, '#91877b'),
    rug: cloth('#45423f', 18, 0.8, '#7d7873', { bumpScale: 0.8, roughness: 1 }),
    rugDark: cloth('#33302d', 19, 0.8, '#69645f', { bumpScale: 0.8, roughness: 1 }),
    curtain: cloth('#a39684', 20, 0.6, '#efe3d0', { side: THREE.DoubleSide }),
    steel: std({ color: '#b9b9b6', roughness: 0.22, metalness: 1 }),
    brass: std({ color: '#b8925c', roughness: 0.28, metalness: 1 }),
    ceramic: phys({ color: '#f1efea', roughness: 0.15, clearcoat: 1, clearcoatRoughness: 0.05 }),
    terracotta: std({ color: '#a8643f', roughness: 0.85 }),
    leaf: std({ color: '#2f4728', roughness: 0.6 }),
    branch: std({ color: '#5b4330', roughness: 0.9 }),
    art: std({ map: T.roundArt(), roughness: 0.6 }),
    sphere: std({ map: T.panelSphere(), roughness: 0.85 }),
    screenOff: phys({ color: '#060708', roughness: 0.1, metalness: 0.2, clearcoat: 1, clearcoatRoughness: 0.03 }),
    glass: (() => { const m = new THREE.MeshStandardMaterial({ color: '#a9c2c8', roughness: 0.03, metalness: 0.1, transparent: true, opacity: 0.16, depthWrite: false, envMapIntensity: 1.4 }); allMaterials.add(m); return m; })(),
    glassDark: (() => { const m = new THREE.MeshStandardMaterial({ color: '#1c1a18', roughness: 0.06, metalness: 0.2, transparent: true, opacity: 0.45, depthWrite: false }); allMaterials.add(m); return m; })(),
    mirror: std({ color: '#c9ccd0', roughness: 0.02, metalness: 1 }),
    weave: (() => { const m = new THREE.MeshStandardMaterial({ color: '#2a2018', roughness: 0.9, alphaMap: T.weave(), alphaTest: 0.5, side: THREE.DoubleSide }); allMaterials.add(m); return m; })(),
  };
}

// ---------------------------------------------------------------- geometria
// UV em metros: projeção pela normal dominante (mantém a escala das texturas em qualquer peça)
function worldUV(geo) {
  const p = geo.attributes.position, n = geo.attributes.normal, uv = geo.attributes.uv;
  for (let i = 0; i < p.count; i++) {
    const ax = Math.abs(n.getX(i)), ay = Math.abs(n.getY(i)), az = Math.abs(n.getZ(i));
    if (ax >= ay && ax >= az) uv.setXY(i, p.getZ(i), p.getY(i));
    else if (ay >= az) uv.setXY(i, p.getX(i), p.getZ(i));
    else uv.setXY(i, p.getX(i), p.getY(i));
  }
  uv.needsUpdate = true;
  return geo;
}

function mesh(geo, mat, x = 0, y = 0, z = 0) {
  const m = new THREE.Mesh(geo, mat);
  m.position.set(x, y, z);
  m.castShadow = true; m.receiveShadow = true;
  return m;
}

// Caixa por limites (x1..x2, y1..y2, z1..z2); r > 0 = cantos arredondados
function bx(x1, x2, y1, y2, z1, z2, mat, r = 0) {
  const w = x2 - x1, h = y2 - y1, d = z2 - z1;
  const g = r > 0 ? new RoundedBoxGeometry(w, h, d, 3, Math.min(r, w / 2, h / 2, d / 2) * 0.98) : new THREE.BoxGeometry(w, h, d);
  worldUV(g);
  return mesh(g, mat, (x1 + x2) / 2, (y1 + y2) / 2, (z1 + z2) / 2);
}

function cyl(r, h, mat, x, y, z, seg = 32, rTop = r) {
  const g = new THREE.CylinderGeometry(rTop, r, h, seg);
  return mesh(g, mat, x, y + h / 2, z);
}

function roundedRectShape(w, d, r) {
  const s = new THREE.Shape(), x = -w / 2, y = -d / 2;
  s.moveTo(x + r, y); s.lineTo(x + w - r, y); s.quadraticCurveTo(x + w, y, x + w, y + r);
  s.lineTo(x + w, y + d - r); s.quadraticCurveTo(x + w, y + d, x + w - r, y + d);
  s.lineTo(x + r, y + d); s.quadraticCurveTo(x, y + d, x, y + d - r);
  s.lineTo(x, y + r); s.quadraticCurveTo(x, y, x + r, y);
  return s;
}

// Tampo arredondado no plano (x,z), espessura t, topo em y
function roundedSlab(cx, cz, w, d, r, t, yTop, mat) {
  const g = new THREE.ExtrudeGeometry(roundedRectShape(w, d, r), { depth: t, bevelEnabled: true, bevelSize: 0.008, bevelThickness: 0.008, bevelSegments: 2, curveSegments: 10 });
  g.rotateX(Math.PI / 2);
  worldUV(g);
  return mesh(g, mat, cx, yTop, cz);
}

function tube(points, radius, mat, seg = 40) {
  const curve = new THREE.CatmullRomCurve3(points.map(p => new THREE.Vector3(...p)));
  return mesh(new THREE.TubeGeometry(curve, seg, radius, 8, false), mat);
}

// Junta as peças de um grupo que usam o mesmo material numa malha só (menos chamadas de desenho)
function mergeByMaterial(group) {
  const buckets = new Map();
  for (const m of [...group.children]) {
    if (!m.isMesh || Array.isArray(m.material)) continue;
    m.updateMatrix();
    const g = (m.geometry.index ? m.geometry.toNonIndexed() : m.geometry.clone()).applyMatrix4(m.matrix);
    for (const k of Object.keys(g.attributes)) if (!['position', 'normal', 'uv'].includes(k)) g.deleteAttribute(k);
    if (!g.attributes.uv || !g.attributes.normal) continue;
    if (!buckets.has(m.material)) buckets.set(m.material, { geos: [], cast: m.castShadow });
    buckets.get(m.material).geos.push(g);
    group.remove(m);
  }
  for (const [mat, { geos, cast }] of buckets) {
    const merged = new THREE.Mesh(mergeGeometries(geos), mat);
    merged.castShadow = cast; merged.receiveShadow = true;
    group.add(merged);
  }
  return group;
}

// ---------------------------------------------------------------- construção
export function buildHouse() {
  const M = makeMaterials();
  const root = new THREE.Group();

  // Materiais emissivos (fitas de LED, luminárias) — a intensidade é animada pela "noite"
  const led = new THREE.MeshBasicMaterial({ color: new THREE.Color('#ffb46b') });
  const ledSoft = new THREE.MeshBasicMaterial({ color: new THREE.Color('#ffc58a') });
  const tvMat = new THREE.MeshBasicMaterial({ map: T.tvScreen(), color: new THREE.Color(0.25, 0.25, 0.25) });
  const monitorMat = new THREE.MeshBasicMaterial({ color: new THREE.Color('#14324a') });
  const glowMat = (color, opacity = 1) => new THREE.SpriteMaterial({ map: T.glow(color), transparent: true, opacity, depthWrite: false, blending: THREE.AdditiveBlending });
  const glows = [];
  function halo(x, y, z, size, color = '255,180,110', opacity = 0.8) {
    const s = new THREE.Sprite(glowMat(color, 0));
    s.position.set(x, y, z); s.scale.set(size, size, size);
    s.userData.maxOpacity = opacity;
    glows.push(s);
    return s;
  }
  function ledBox(x1, x2, y1, y2, z1, z2, mat = led) {
    const m = bx(x1, x2, y1, y2, z1, z2, mat);
    m.castShadow = false;
    return m;
  }

  // ------------------------------------------------ laje e pisos
  for (const sl of [bx(-0.2, 8.74, -0.3, -0.002, -0.2, 4.53, M.slab), bx(-0.2, 3.95, -0.3, -0.002, 4.53, 6.15, M.slab)]) {
    sl.castShadow = false;
    root.add(sl);
  }

  const floors = new THREE.Group();
  function floorRect(x1, z1, x2, z2, mat) {
    const g = new THREE.PlaneGeometry(x2 - x1, z2 - z1);
    g.rotateX(-Math.PI / 2);
    g.translate((x1 + x2) / 2, 0.003, (z1 + z2) / 2);
    worldUV(g);
    const m = new THREE.Mesh(g, mat);
    m.receiveShadow = true;
    floors.add(m);
  }
  // Clones transparentes para o "fade in" sobre a planta
  const floorMats = [M.floorTile, M.floorWood, M.floorBath].map(m => { const c = m.clone(); c.transparent = true; c.opacity = 0; allMaterials.add(c); return c; });
  const [fTile, fWood, fBath] = floorMats;
  floorRect(0, 0, 4.40, 2.30, fTile);           // sala superior + hall
  floorRect(0, 2.30, 3.79, 4.35, fTile);        // sala inferior
  floorRect(0, 4.35, 3.95, 6.03, fTile);        // terraço integrado
  floorRect(6.92, 0, 8.54, 1.36, fWood);        // dormitório (faixa ao lado do banho)
  floorRect(4.55, 1.36, 8.54, 2.35, fWood);
  floorRect(3.95, 2.35, 8.54, 4.35, fWood);
  floorRect(4.55, 0, 6.79, 1.24, fBath);        // banho
  root.add(floors);

  // ------------------------------------------------ paredes
  const walls = [];
  const wallMats = [M.wall, M.wall, M.cut, M.wall, M.wall, M.wall];
  // Parede retangular com aberturas ao longo do eixo maior. openings: [{a, b, y1, y2}]
  function wall(x1, x2, z1, z2, openings = [], mat = wallMats) {
    const g = new THREE.Group();
    const alongX = (x2 - x1) >= (z2 - z1);
    const lo = alongX ? x1 : z1, hi = alongX ? x2 : z2;
    const piece = (a, b, y1, y2) => {
      if (b - a < 0.001 || y2 - y1 < 0.001) return;
      const m = alongX ? bx(a, b, y1, y2, z1, z2, M.wall) : bx(x1, x2, y1, y2, a, b, M.wall);
      m.material = mat;
      g.add(m);
    };
    let cur = lo;
    for (const o of [...openings].sort((p, q) => p.a - q.a)) {
      piece(cur, o.a, 0, H);
      piece(o.a, o.b, 0, o.y1);
      piece(o.a, o.b, o.y2, H);
      cur = o.b;
    }
    piece(cur, hi, 0, H);
    g.userData.center = new THREE.Vector3((x1 + x2) / 2, 0, (z1 + z2) / 2);
    walls.push(g);
    root.add(g);
    return g;
  }
  const DOOR = 2.1;
  wall(-0.2, 8.74, -0.2, 0, [{ a: 1.27, b: 2.07, y1: 0, y2: DOOR }, { a: 6.12, b: 6.62, y1: 1.65, y2: 2.15 }]); // norte (porta de entrada, janela do banho)
  wall(-0.2, 0, 0, 6.15);                                                // oeste
  wall(8.54, 8.74, 0, 4.53);                                             // leste
  wall(3.95, 8.74, 4.35, 4.53, [{ a: 4.35, b: 6.15, y1: 0.55, y2: 2.35 }]); // sul do dormitório (janela)
  wall(3.79, 3.95, 2.30, 4.35);                                          // divisória sala/dormitório (parede da TV)
  wall(3.79, 4.55, 2.22, 2.35);                                          // dente da divisória
  wall(4.40, 4.55, 0, 2.22, [{ a: 0.40, b: 1.10, y1: 0, y2: DOOR }, { a: 1.42, b: 2.17, y1: 0, y2: DOOR }]); // portas banho/dormitório
  wall(6.79, 6.92, 0, 1.36);                                             // banho leste
  wall(4.55, 6.92, 1.24, 1.36);                                          // banho sul

  // Pilar + arco de pedra entre sala e terraço
  const archGroup = new THREE.Group();
  {
    const s = new THREE.Shape();
    s.moveTo(0, 2.3); s.lineTo(0, H); s.lineTo(3.95, H); s.lineTo(3.95, 0); s.lineTo(3.70, 0);
    s.lineTo(3.70, 1.62);
    s.absarc(3.02, 1.62, 0.68, 0, Math.PI / 2, false);
    s.lineTo(0, 2.3);
    const g = new THREE.ExtrudeGeometry(s, { depth: 0.24, bevelEnabled: true, bevelSize: 0.03, bevelThickness: 0.03, bevelSegments: 2, curveSegments: 24 });
    worldUV(g);
    const arch = mesh(g, M.stone, 0, 0, 4.32);
    archGroup.add(arch);
    archGroup.add(bx(3.70, 3.95, 0, H, 4.56, 5.12, M.stone)); // pilar no terraço
  }
  archGroup.userData.center = new THREE.Vector3(2, 0, 4.4);
  walls.push(archGroup);
  root.add(archGroup);

  // Guarda-corpo: mureta + vidro (h = 1,20 m)
  const railing = new THREE.Group();
  railing.add(bx(0, 3.95, 0, 0.42, 6.03, 6.15, wallMats));
  railing.add(bx(0.02, 3.93, 0.42, 1.18, 6.07, 6.10, M.glass));
  railing.add(bx(0, 3.95, 1.18, 1.21, 6.05, 6.12, M.black));
  railing.add(bx(3.80, 3.92, 0, 0.42, 5.12, 6.03, wallMats));
  railing.add(bx(3.84, 3.87, 0.42, 1.18, 5.12, 6.03, M.glass));
  railing.add(bx(3.82, 3.89, 1.18, 1.21, 5.12, 6.10, M.black));
  railing.userData.center = new THREE.Vector3(2, 0, 6.1);
  walls.push(railing);
  root.add(railing);

  // ------------------------------------------------ portas e janelas (aparecem depois das paredes)
  const openings = new THREE.Group();
  {
    // porta de entrada (fechada)
    openings.add(bx(1.29, 2.05, 0, 2.08, -0.13, -0.08, M.black));
    openings.add(bx(1.92, 1.95, 0.98, 1.02, -0.07, -0.02, M.steel));
    // porta do dormitório aberta (a do banho é de correr, recolhida na parede)
    openings.add(bx(4.55, 5.27, 0, 2.08, 2.12, 2.16, M.black));
    // batentes pretos
    for (const z of [0.40, 1.10, 1.42, 2.17]) openings.add(bx(4.38, 4.57, 0, DOOR + 0.03, z - 0.015, z + 0.015, M.black));
    // janela do dormitório
    openings.add(bx(4.35, 6.15, 0.53, 0.57, 4.40, 4.48, M.black));
    openings.add(bx(4.35, 6.15, 2.33, 2.37, 4.40, 4.48, M.black));
    openings.add(bx(5.23, 5.27, 0.55, 2.35, 4.40, 4.48, M.black));
    openings.add(bx(4.35, 6.15, 0.57, 2.33, 4.43, 4.45, M.glass));
    // janela basculante do banho
    openings.add(bx(6.12, 6.62, 1.65, 2.15, -0.11, -0.09, M.glass));
    openings.add(bx(6.12, 6.62, 1.63, 1.66, -0.15, -0.05, M.black));
  }
  mergeByMaterial(openings);
  root.add(openings);

  // Painéis de acabamento que acompanham as paredes
  const finishes = new THREE.Group();
  finishes.add(bx(3.755, 3.79, 0, H, 2.30, 4.35, M.black));        // parede preta da TV (sala)
  finishes.add(bx(3.79, 4.40, 0, H, 2.185, 2.22, M.black));        // continua no dente
  for (const [a, b] of [[0, 0.40], [1.10, 1.42], [2.17, 2.22]]) finishes.add(bx(4.365, 4.40, 0, H, a, b, M.black)); // parede preta das portas
  finishes.add(bx(4.365, 4.40, DOOR, H, 0.40, 1.10, M.black)); finishes.add(bx(4.365, 4.40, DOOR, H, 1.42, 2.17, M.black));
  finishes.add(bx(6.0, 6.79, 0, H, 0.0, 0.03, M.wallDark));        // box: revestimento escuro
  finishes.add(bx(6.76, 6.79, 0, H, 0.03, 1.24, M.wallDark));
  finishes.add(bx(4.55, 6.0, 0, H, 0.0, 0.025, M.wallDark));       // banho: parede da bancada
  // painel ripado de madeira no dormitório (entre armário e cama)
  for (let i = 0; i < 14; i++) {
    const z = 0.66 + i * 0.05;
    finishes.add(bx(8.48, 8.54, 0, H, z, z + 0.032, M.walnutDark));
  }
  mergeByMaterial(finishes);
  root.add(finishes);

  // Forros (só são vistos de dentro: a face aponta para baixo)
  const ceilings = new THREE.Group();
  {
    const cmat = std({ map: withRepeat(T.concrete('#5d5955', 22), 2.5), roughness: 0.95 });
    const ceil = (x1, z1, x2, z2) => {
      const g = new THREE.PlaneGeometry(x2 - x1, z2 - z1);
      g.rotateX(Math.PI / 2);
      g.translate((x1 + x2) / 2, H, (z1 + z2) / 2);
      const m = new THREE.Mesh(g, cmat);
      ceilings.add(m);
    };
    ceil(-0.2, -0.2, 4.40, 2.30); ceil(-0.2, 2.30, 3.79, 6.15);
    ceil(4.55, -0.2, 8.74, 4.53); ceil(3.79, 2.22, 4.6, 4.53);
    // trilho de spots na sala
    ceilings.add(bx(2.18, 2.22, 2.64, 2.68, 2.3, 4.2, M.black));
    for (const z of [2.6, 3.3, 4.0]) {
      const spot = cyl(0.035, 0.12, M.black, 2.2, 2.52, z, 16);
      ceilings.add(spot);
      ceilings.add(ledBox(2.175, 2.225, 2.515, 2.52, z - 0.025, z + 0.025, ledSoft));
    }
  }
  root.add(ceilings);

  // Sancas de LED no encontro parede/forro
  const coves = new THREE.Group();
  {
    const y1 = 2.6, y2 = 2.63;
    coves.add(ledBox(0.0, 3.7, y1, y2, 0.01, 0.04));         // sala: parede norte
    coves.add(ledBox(3.72, 3.75, y1, y2, 2.4, 4.3));          // sala: parede da TV
    coves.add(ledBox(4.57, 8.5, y1, y2, 1.38, 1.41));         // dormitório
    coves.add(ledBox(8.49, 8.52, y1, y2, 0.02, 4.3));
    coves.add(ledBox(3.97, 8.5, y1, y2, 4.31, 4.34));
    coves.add(ledBox(4.58, 6.75, y1, y2, 0.03, 0.06));        // banho
  }
  mergeByMaterial(coves);
  root.add(coves);

  // ------------------------------------------------ mobiliário por ambiente
  const rooms = {};
  function room(key) { const g = new THREE.Group(); g.userData.items = []; rooms[key] = g; root.add(g); return g; }
  function item(r, ...meshes) {
    const g = new THREE.Group();
    meshes.flat().forEach(m => g.add(m));
    // origem do grupo no centro da peça (x,z) para a animação de escala acontecer no lugar
    const c = new THREE.Box3().setFromObject(g).getCenter(new THREE.Vector3());
    g.children.forEach(m => { m.position.x -= c.x; m.position.z -= c.z; });
    g.position.set(c.x, 0, c.z);
    mergeByMaterial(g);
    r.add(g); r.userData.items.push(g);
    return g;
  }

  // ===== COZINHA
  const kitchen = room('cozinha');
  {
    // armários inferiores em nogueira, rodapé recuado com LED
    const base = [
      bx(0, 0.58, 0.1, 0.88, 0.84, 4.33, M.walnut),
      bx(0, 0.5, 0, 0.1, 0.84, 4.33, M.black),
      ledBox(0.49, 0.51, 0.015, 0.03, 0.86, 4.31),
    ];
    for (let z = 0.84; z < 4.32; z += 0.58) base.push(bx(0.58, 0.586, 0.12, 0.86, z - 0.004, z + 0.004, M.black));
    base.push(bx(0.58, 0.586, 0.62, 0.628, 0.84, 3.45, M.black));
    // forno sob o cooktop
    base.push(bx(0.581, 0.59, 0.18, 0.76, 3.5, 4.02, M.blackGloss));
    base.push(bx(0.59, 0.61, 0.66, 0.68, 3.55, 3.97, M.steel));
    item(kitchen, base);
    // bancada de granito preto + cuba + torneira gourmet + cooktop
    const top = [bx(0, 0.62, 0.88, 0.91, 0.84, 4.33, M.granite)];
    top.push(bx(0.13, 0.47, 0.905, 0.912, 2.55, 3.1, M.steel));
    top.push(bx(0.15, 0.45, 0.906, 0.913, 2.57, 3.08, M.blackGloss));
    top.push(cyl(0.022, 0.06, M.steel, 0.08, 0.91, 2.83, 16));
    top.push(tube([[0.08, 0.95, 2.83], [0.08, 1.25, 2.83], [0.12, 1.36, 2.83], [0.24, 1.32, 2.83], [0.28, 1.18, 2.83]], 0.014, M.steel));
    top.push(bx(0.08, 0.54, 0.91, 0.918, 3.45, 4.05, M.blackGloss));
    for (const [x, z] of [[0.2, 3.6], [0.42, 3.6], [0.2, 3.9], [0.42, 3.9]]) {
      const ring = mesh(new THREE.TorusGeometry(0.06, 0.008, 6, 24), M.steel, x, 0.922, z);
      ring.rotation.x = Math.PI / 2; top.push(ring);
    }
    // air fryer + cafeteira
    top.push(bx(0.1, 0.42, 0.91, 1.25, 4.0, 4.3, M.blackGloss, 0.02));
    top.push(bx(0.1, 0.32, 0.91, 1.2, 1.05, 1.3, M.black, 0.02));
    item(kitchen, top);
    // armários superiores + nicho aberto + coifa
    const up = [
      bx(0, 0.35, 1.6, 2.4, 0.84, 2.2, M.walnutDark),
      bx(0, 0.35, 1.6, 2.4, 3.1, 4.33, M.walnutDark),
      bx(0, 0.35, 2.4, H, 0.84, 4.33, M.walnutDark),
      // nicho
      bx(0, 0.32, 1.72, 1.75, 2.2, 3.1, M.walnut), bx(0, 0.32, 2.07, 2.1, 2.2, 3.1, M.walnut),
      bx(0, 0.02, 1.72, 2.1, 2.2, 3.1, M.walnut),
      ledBox(0.26, 0.29, 2.065, 2.07, 2.22, 3.08),
      // coifa
      bx(0, 0.5, 1.5, 1.6, 3.45, 4.05, M.steel),
      // fita de LED sob os armários
      ledBox(0.28, 0.31, 1.595, 1.6, 0.86, 2.18), ledBox(0.28, 0.31, 1.595, 1.6, 3.12, 4.31),
    ];
    for (let z = 0.84; z < 4.32; z += 0.45) if (z < 2.2 || z > 3.1) up.push(bx(0.35, 0.356, 1.62, 2.38, z - 0.003, z + 0.003, M.black));
    item(kitchen, up);
    // geladeira preta + torre em nogueira
    item(kitchen, [
      bx(0, 0.7, 0, 1.86, 0.07, 0.8, M.blackGloss, 0.02),
      bx(0.7, 0.72, 1.0, 1.7, 0.42, 0.44, M.steel), bx(0.7, 0.72, 0.4, 0.95, 0.42, 0.44, M.steel),
      bx(0, 0.7, 1.86, H, 0.05, 0.82, M.walnutDark),
    ]);
    // armário alto no terraço (esconde a área de serviço)
    item(kitchen, [
      bx(0, 0.62, 0, 2.4, 5.3, 6.02, M.walnutDark),
      bx(0.62, 0.626, 0.05, 2.35, 5.66, 5.665, M.black),
      bx(0, 0.62, 2.4, H, 5.3, 6.02, M.walnutDark),
    ]);
  }

  // ===== SALA (ilha, banquetas, sofá, TV, home office)
  const living = room('sala');
  {
    // ilha em cimento (cascata) com LED na base
    item(living, [
      bx(1.27, 1.68, 0, 1.05, 2.05, 4.33, M.cement),
      ledBox(1.255, 1.26, 0.01, 0.03, 2.1, 4.28),
    ]);
    // banquetas vermelhas
    for (const z of [2.45, 3.05]) {
      const parts = [bx(0.82, 1.2, 0.7, 0.75, z - 0.19, z + 0.19, M.redLacquer, 0.02),
        bx(0.82, 0.86, 0.75, 0.98, z - 0.18, z + 0.18, M.redLacquer, 0.015)];
      for (const [dx, dz] of [[0.86, -0.15], [1.16, -0.15], [0.86, 0.15], [1.16, 0.15]]) parts.push(bx(dx - 0.012, dx + 0.012, 0, 0.7, z + dz - 0.012, z + dz + 0.012, M.redLacquer));
      parts.push(bx(0.86, 1.16, 0.3, 0.32, z - 0.16, z - 0.14, M.redLacquer), bx(0.86, 1.16, 0.3, 0.32, z + 0.14, z + 0.16, M.redLacquer));
      item(living, parts);
    }
    // tapete
    item(living, [bx(1.8, 3.6, 0, 0.012, 2.4, 4.15, M.rug)]);
    // sofá de couro caramelo (encostado na ilha, voltado para a TV)
    {
      const L = M.leather, z1 = 2.16, z2 = 4.2, x1 = 1.7, x2 = 2.64;
      const s = [
        bx(x1, x2, 0.06, 0.3, z1, z2, L, 0.04),
        bx(x1, x2, 0.06, 0.62, z1, z1 + 0.2, L, 0.06), bx(x1, x2, 0.06, 0.62, z2 - 0.2, z2, L, 0.06),
        bx(x1, x1 + 0.22, 0.06, 0.8, z1 + 0.18, z2 - 0.18, L, 0.06),
      ];
      const zm = (z1 + z2) / 2;
      s.push(bx(x1 + 0.22, x2 - 0.02, 0.3, 0.46, z1 + 0.2, zm - 0.005, L, 0.06), bx(x1 + 0.22, x2 - 0.02, 0.3, 0.46, zm + 0.005, z2 - 0.2, L, 0.06));
      for (const [a, b] of [[z1 + 0.2, zm - 0.005], [zm + 0.005, z2 - 0.2]]) {
        const c = bx(-0.1, 0.1, -0.24, 0.24, a - zm, b - zm, L, 0.07);
        c.position.set(x1 + 0.3, 0.7, (a + b) / 2); c.rotation.z = -0.18; s.push(c);
      }
      for (const [x, z] of [[x1 + 0.08, z1 + 0.08], [x2 - 0.08, z1 + 0.08], [x1 + 0.08, z2 - 0.08], [x2 - 0.08, z2 - 0.08]]) s.push(bx(x - 0.025, x + 0.025, 0, 0.06, z - 0.025, z + 0.025, M.black));
      item(living, s);
    }
    // mesa de centro redonda escura + objetos
    item(living, [
      cyl(0.28, 0.34, M.black, 3.02, 0, 3.25, 40),
      cyl(0.34, 0.04, M.walnutDark, 3.02, 0.34, 3.25, 40),
      bx(2.9, 3.1, 0.38, 0.42, 3.1, 3.25, M.charcoal),
      cyl(0.05, 0.1, M.ceramic, 3.15, 0.38, 3.38, 16),
      mesh(new THREE.IcosahedronGeometry(0.07, 1), M.leaf, 3.15, 0.52, 3.38),
    ]);
    // TV na parede preta
    item(living, [
      bx(3.7, 3.75, 0.82, 1.68, 2.55, 4.05, M.screenOff),
      (() => { const p = mesh(new THREE.PlaneGeometry(1.46, 0.82), tvMat, 3.698, 1.25, 3.3); p.rotation.y = -Math.PI / 2; p.castShadow = false; return p; })(),
      ledBox(3.745, 3.75, 0.85, 1.65, 2.53, 2.55, ledSoft), ledBox(3.745, 3.75, 0.85, 1.65, 4.05, 4.07, ledSoft),
    ]);
    // espelho oval na parede preta do hall
    item(living, [(() => {
      const g = new THREE.CircleGeometry(0.5, 48); g.scale(0.28, 1, 1);
      const m = mesh(g, M.mirror, 4.36, 1.35, 1.27); m.rotation.y = -Math.PI / 2; return m;
    })()]);
    // home office: mesa em nogueira, monitor, notebook, cadeira
    {
      const d = [roundedSlab(2.93, 0.36, 1.46, 0.6, 0.03, 0.04, 0.76, M.walnut)];
      for (const x of [2.25, 3.61]) for (const z of [0.1, 0.6]) d.push(bx(x - 0.015, x + 0.015, 0, 0.72, z - 0.015, z + 0.015, M.black));
      d.push(bx(3.0, 3.6, 0.95, 1.31, 0.13, 0.15, M.black, 0.005));
      d.push((() => { const p = mesh(new THREE.PlaneGeometry(0.58, 0.33), monitorMat, 3.3, 1.13, 0.152); p.castShadow = false; return p; })());
      d.push(bx(3.27, 3.33, 0.76, 0.95, 0.12, 0.15, M.black), bx(3.18, 3.42, 0.76, 0.775, 0.08, 0.24, M.black));
      const lap = bx(2.45, 2.79, 0.77, 0.785, 0.2, 0.44, M.steel); d.push(lap);
      const lid = bx(-0.17, 0.17, 0, 0.22, -0.005, 0.005, M.steel); lid.position.set(2.62, 0.89, 0.19); lid.rotation.x = -0.25; d.push(lid);
      item(living, d);
      const c = [
        bx(2.68, 3.18, 0.44, 0.52, 0.82, 1.3, M.black, 0.03),
        bx(2.7, 3.16, 0.6, 1.12, 1.27, 1.31, M.charcoal, 0.02),
        cyl(0.025, 0.42, M.steel, 2.93, 0.04, 1.06, 12),
      ];
      for (let i = 0; i < 5; i++) {
        const a = i * Math.PI * 2 / 5, leg = bx(0, 0.3, 0, 0.03, -0.015, 0.015, M.black);
        leg.position.set(2.93, 0.04, 1.06); leg.rotation.y = a; leg.geometry.translate(0.15, 0, 0); c.push(leg);
      }
      item(living, c);
      // quadro redondo colorido
      const art = mesh(new THREE.CylinderGeometry(0.36, 0.36, 0.03, 48), M.art, 2.6, 1.6, 0.03);
      art.rotation.x = Math.PI / 2; art.rotation.y = 0;
      item(living, [art]);
      // vaso com galhos secos
      const v = [cyl(0.17, 0.48, M.terracotta, 4.1, 0, 0.25, 24, 0.2)];
      const rnd = (s => () => ((s = (s * 16807) % 2147483647) / 2147483647))(42);
      for (let i = 0; i < 7; i++) {
        const a = rnd() * Math.PI * 2, h = 1.3 + rnd() * 0.6, lean = 0.08 + rnd() * 0.18;
        v.push(tube([[4.1, 0.45, 0.25], [4.1 + Math.cos(a) * lean * 0.4, 0.45 + h * 0.5, 0.25 + Math.sin(a) * lean * 0.4], [4.1 + Math.cos(a) * lean, 0.45 + h, 0.25 + Math.sin(a) * lean]], 0.012, M.branch, 12));
      }
      item(living, v);
    }
  }

  // ===== JANTAR NO TERRAÇO
  const dining = room('jantar');
  {
    item(dining, [
      roundedSlab(2.64, 5.16, 1.15, 0.78, 0.16, 0.05, 0.75, M.walnut),
      bx(2.18, 2.24, 0, 0.7, 4.92, 5.4, M.walnut), bx(3.04, 3.1, 0, 0.7, 4.92, 5.4, M.walnut),
    ]);
    // poltronas verdes de veludo (encosto curvo)
    for (const [x, rot] of [[1.82, 0], [3.48, Math.PI]]) {
      const g = [];
      g.push(bx(-0.24, 0.24, 0.42, 0.52, -0.24, 0.24, M.greenVelvet, 0.05));
      const back = mesh(new THREE.CylinderGeometry(0.27, 0.27, 0.34, 32, 1, true, Math.PI, Math.PI), M.greenVelvet, 0, 0.67, 0);
      back.material = M.greenVelvet.clone(); back.material.side = THREE.DoubleSide; allMaterials.add(back.material);
      g.push(back);
      for (const [dx, dz] of [[-0.18, -0.18], [0.18, -0.18], [-0.18, 0.18], [0.18, 0.18]]) g.push(bx(dx - 0.012, dx + 0.012, 0, 0.42, dz - 0.012, dz + 0.012, M.black));
      const ch = item(dining, g);
      ch.position.set(x, 0, 5.16); ch.rotation.y = rot + Math.PI / 2 * 0;
      // encosto voltado para fora da mesa
      ch.rotation.y = rot;
    }
    // pendente trançado + luz
    {
      const pts = [];
      for (let i = 0; i <= 12; i++) { const t = i / 12; pts.push(new THREE.Vector2(0.06 + Math.sin(t * Math.PI) * 0.15, -0.16 + t * 0.32)); }
      const shade = mesh(new THREE.LatheGeometry(pts, 32), M.weave, 2.64, 1.88, 5.16);
      const bulb = mesh(new THREE.SphereGeometry(0.06, 16, 12), ledSoft, 2.64, 1.86, 5.16); bulb.castShadow = false;
      item(dining, [shade, bulb, cyl(0.004, 0.66, M.black, 2.64, 2.04, 5.16, 6), halo(2.64, 1.86, 5.16, 0.9, '255,170,95', 0.9)]);
    }
    // planta grande no canto do terraço
    {
      const p = [cyl(0.2, 0.5, M.black, 3.45, 0, 5.75, 24, 0.22)];
      const rnd = (s => () => ((s = (s * 16807) % 2147483647) / 2147483647))(7);
      for (let i = 0; i < 40; i++) {
        const leaf = mesh(new THREE.SphereGeometry(0.07 + rnd() * 0.05, 8, 5), M.leaf, 3.45 + (rnd() - 0.5) * 0.55, 0.7 + rnd() * 0.95, 5.75 + (rnd() - 0.5) * 0.45);
        leaf.scale.set(0.9, 0.25, 1.9); leaf.rotation.set(rnd() * 3, rnd() * 3, rnd() * 3); p.push(leaf);
      }
      p.push(tube([[3.45, 0.5, 5.75], [3.42, 1.0, 5.74], [3.47, 1.5, 5.76]], 0.02, M.branch, 8));
      item(dining, p);
    }
  }

  // ===== BANHO
  const bath = room('banho');
  {
    // bancada em pedra com gabinete suspenso em nogueira
    item(bath, [
      bx(4.62, 5.42, 0.38, 0.76, 0.02, 0.47, M.walnut),
      bx(4.6, 5.44, 0.76, 0.86, 0.02, 0.5, M.stoneTop),
      bx(4.82, 5.22, 0.84, 0.865, 0.12, 0.4, M.wallDark),
      ledBox(4.64, 5.4, 0.36, 0.375, 0.42, 0.45),
      cyl(0.012, 0.16, M.brass, 5.02, 0.86, 0.08, 12),
      tube([[5.02, 1.02, 0.08], [5.02, 1.04, 0.14], [5.02, 1.0, 0.18]], 0.01, M.brass, 8),
    ]);
    // espelho com luz de fundo
    {
      const g = new THREE.ShapeGeometry(roundedRectShape(0.52, 0.82, 0.16), 12);
      const mir = mesh(g, M.mirror, 5.02, 1.55, 0.045);
      const back = mesh(new THREE.ShapeGeometry(roundedRectShape(0.58, 0.88, 0.19), 12), ledSoft, 5.02, 1.55, 0.035);
      back.castShadow = false;
      item(bath, [back, mir, halo(5.02, 1.55, 0.1, 1.1, '255,180,110', 0.3)]);
    }
    // bacia sanitária
    item(bath, [
      bx(5.55, 5.95, 0.0, 0.4, 0.12, 0.6, M.ceramic, 0.12),
      bx(5.57, 5.93, 0.4, 0.43, 0.14, 0.62, M.ceramic, 0.012),
      bx(5.6, 5.9, 0.42, 0.8, 0.03, 0.2, M.ceramic, 0.03),
    ]);
    // box: vidro com perfil dourado, ducha de teto, nicho iluminado
    item(bath, [
      bx(6.0, 6.015, 0, 2.05, 0.03, 0.78, M.glass),
      bx(5.995, 6.02, 2.05, 2.07, 0.03, 0.78, M.brass),
      bx(5.995, 6.02, 0, 0.02, 0.03, 0.78, M.brass),
      cyl(0.11, 0.015, M.brass, 6.4, 2.22, 0.55, 32),
      bx(6.39, 6.41, 2.235, 2.27, 0.03, 0.55, M.brass),
      bx(6.12, 6.74, 1.1, 1.38, 0.03, 0.12, M.wallDark),
      ledBox(6.13, 6.73, 1.375, 1.38, 0.03, 0.11),
      bx(6.3, 6.36, 1.12, 1.27, 0.06, 0.1, M.black), bx(6.42, 6.48, 1.12, 1.22, 0.06, 0.1, M.black),
    ]);
    // toalha e planta
    item(bath, [
      bx(4.58, 4.62, 0.9, 1.5, 0.75, 1.05, M.charcoal, 0.01),
      cyl(0.05, 0.12, M.ceramic, 5.32, 0.86, 0.2, 16),
      mesh(new THREE.IcosahedronGeometry(0.09, 1), M.leaf, 5.32, 1.04, 0.2),
    ]);
  }

  // ===== DORMITÓRIO
  const bed = room('dormitorio');
  {
    // tapete
    item(bed, [bx(5.9, 8.3, 0, 0.012, 1.55, 4.15, M.rugDark)]);
    // cama: plataforma flutuante em nogueira com LED, colchão, edredom, manta e travesseiros
    item(bed, [
      bx(6.3, 8.4, 0, 0.08, 2.0, 3.7, M.black),
      ledBox(6.29, 6.3, 0.02, 0.05, 2.0, 3.7), ledBox(6.3, 8.4, 0.02, 0.05, 1.99, 2.0), ledBox(6.3, 8.4, 0.02, 0.05, 3.7, 3.71),
      bx(6.15, 8.44, 0.08, 0.28, 1.86, 3.84, M.walnutDark, 0.01),
    ]);
    item(bed, [
      bx(6.35, 8.4, 0.28, 0.52, 2.06, 3.64, M.linen, 0.06),
      bx(6.3, 7.95, 0.5, 0.58, 2.0, 3.7, M.duvet, 0.04),
      bx(6.3, 7.95, 0.3, 0.58, 1.99, 2.03, M.duvet, 0.015), bx(6.3, 7.95, 0.3, 0.58, 3.67, 3.71, M.duvet, 0.015),
      bx(6.28, 6.31, 0.32, 0.58, 2.0, 3.7, M.duvet, 0.012),
      bx(6.55, 7.25, 0.58, 0.6, 1.97, 3.73, M.charcoal, 0.008),
      bx(6.55, 7.25, 0.3, 0.6, 1.958, 1.975, M.charcoal, 0.006), bx(6.55, 7.25, 0.3, 0.6, 3.725, 3.742, M.charcoal, 0.006),
    ]);
    {
      const pil = [];
      for (const [z, x, mat, h] of [[2.45, 8.24, M.duvet, 0.42], [3.25, 8.24, M.duvet, 0.42], [2.5, 8.08, M.charcoal, 0.34], [3.2, 8.08, M.charcoal, 0.34]]) {
        const p = bx(-0.08, 0.08, -h / 2, h / 2, -0.33, 0.33, mat, 0.07);
        p.position.set(x, 0.5 + h / 2, z); p.rotation.z = 0.32; pil.push(p);
      }
      item(bed, pil);
    }
    // cabeceira estofada larga
    item(bed, [
      bx(8.42, 8.48, 0.28, 1.2, 1.38, 2.84, M.headboard, 0.03),
      bx(8.42, 8.48, 0.28, 1.2, 2.86, 4.32, M.headboard, 0.03),
    ]);
    // criados-mudos suspensos + luminárias
    for (const z of [1.62, 4.05]) {
      item(bed, [
        bx(7.95, 8.42, 0.36, 0.6, z - 0.22, z + 0.22, M.walnutDark, 0.01),
        bx(7.948, 7.952, 0.47, 0.475, z - 0.2, z + 0.2, M.black),
        ledBox(7.97, 8.4, 0.355, 0.36, z - 0.2, z + 0.2),
      ]);
    }
    item(bed, [
      cyl(0.03, 0.26, M.black, 8.18, 0.6, 1.62, 16),
      mesh(new THREE.SphereGeometry(0.15, 24, 12, 0, Math.PI * 2, 0, Math.PI / 2), M.black, 8.18, 0.86, 1.62),
      (() => { const b = mesh(new THREE.CircleGeometry(0.13, 24), ledSoft, 8.18, 0.859, 1.62); b.rotation.x = Math.PI / 2; b.castShadow = false; return b; })(),
      halo(8.18, 0.75, 1.62, 0.9, '255,175,100', 0.6),
      bx(8.06, 8.3, 0.6, 0.63, 1.5, 1.7, M.charcoal),
    ]);
    item(bed, [
      cyl(0.004, 1.5, M.black, 8.18, 1.2, 4.05, 6),
      cyl(0.045, 0.3, M.black, 8.18, 0.9, 4.05, 20),
      (() => { const b = mesh(new THREE.CircleGeometry(0.04, 16), ledSoft, 8.18, 0.899, 4.05); b.rotation.x = Math.PI / 2; b.castShadow = false; return b; })(),
      halo(8.18, 0.86, 4.05, 0.7, '255,175,100', 0.6),
    ]);
    // escultura esférica com fenda luminosa sobre a cabeceira
    {
      const R = 0.62, cz = 2.85, cy = 1.95;
      const sph = mesh(new THREE.SphereGeometry(R, 48, 32, -Math.PI / 2, Math.PI), M.sphere, 8.48, cy, cz);
      sph.scale.set(0.45, 1, 1);
      const crack = [];
      const rnd = (s => () => ((s = (s * 16807) % 2147483647) / 2147483647))(3);
      for (let i = 0; i <= 18; i++) {
        const t = i / 18, a = -Math.PI / 2 + t * Math.PI;
        const y = cy + Math.sin(a) * R, rr = Math.cos(a) * R;
        crack.push([8.48 - rr * 0.45 - 0.006, y, cz + 0.05 + (rnd() - 0.5) * 0.06]);
      }
      const c = tube(crack, 0.012, led, 60); c.castShadow = false;
      item(bed, [sph, c, halo(8.4, cy, cz, 2.2, '255,170,90', 0.7)]);
    }
    // armário com portas de vidro fumê e iluminação interna
    {
      const w = [
        bx(6.94, 8.52, 0, 0.08, 0.02, 0.6, M.black),
        bx(6.94, 6.97, 0.08, H, 0.02, 0.6, M.walnutDark), bx(8.49, 8.52, 0.08, H, 0.02, 0.6, M.walnutDark),
        bx(6.94, 8.52, 2.55, H, 0.02, 0.6, M.walnutDark),
        bx(7.72, 7.74, 0.08, 2.55, 0.02, 0.58, M.walnutDark),
        bx(6.97, 8.49, 0.08, 2.55, 0.02, 0.04, M.walnutDark),
        bx(6.97, 7.72, 1.85, 1.87, 0.04, 0.58, M.walnutDark),
        bx(7.74, 8.49, 0.9, 0.92, 0.04, 0.58, M.walnutDark), bx(7.74, 8.49, 1.5, 1.52, 0.04, 0.58, M.walnutDark), bx(7.74, 8.49, 2.0, 2.02, 0.04, 0.58, M.walnutDark),
        ledBox(6.98, 7.71, 2.53, 2.545, 0.3, 0.33), ledBox(7.75, 8.48, 0.885, 0.895, 0.5, 0.53), ledBox(7.75, 8.48, 1.485, 1.495, 0.5, 0.53), ledBox(7.75, 8.48, 1.985, 1.995, 0.5, 0.53),
        bx(6.97, 7.72, 1.78, 1.8, 0.29, 0.31, M.steel),
        bx(6.95, 8.51, 0.08, 2.55, 0.585, 0.6, M.glassDark),
      ];
      const tones = [M.charcoal, M.linen, M.headboard, M.duvet];
      for (let i = 0; i < 9; i++) w.push(bx(7.02 + i * 0.075, 7.06 + i * 0.075, 1.0 + (i % 3) * 0.08, 1.77, 0.14, 0.48, tones[i % 4], 0.01));
      for (const y of [0.92, 1.52]) for (let i = 0; i < 3; i++) w.push(bx(7.82 + i * 0.22, 8.0 + i * 0.22, y, y + 0.08 + (i % 2) * 0.04, 0.1, 0.5, tones[(i + 1) % 4], 0.01));
      item(bed, w);
    }
    // TV e rack suspenso na parede oposta à cama
    item(bed, [
      bx(3.95, 4.35, 0.35, 0.55, 2.6, 4.1, M.walnutDark, 0.01),
      ledBox(3.97, 4.33, 0.345, 0.35, 2.62, 4.08),
      bx(3.95, 4.0, 1.0, 1.75, 2.7, 4.0, M.screenOff),
      (() => { const p = mesh(new THREE.PlaneGeometry(1.28, 0.73), tvMat, 4.002, 1.375, 3.35); p.rotation.y = Math.PI / 2; p.castShadow = false; return p; })(),
      cyl(0.06, 0.12, M.ceramic, 4.15, 0.55, 3.95, 16),
      mesh(new THREE.IcosahedronGeometry(0.12, 1), M.leaf, 4.15, 0.78, 3.95),
    ]);
    // cortinas de linho na janela
    {
      const g = new THREE.PlaneGeometry(2.3, H - 0.08, 80, 1);
      const p = g.attributes.position;
      for (let i = 0; i < p.count; i++) { const x = p.getX(i); p.setZ(i, Math.sin(x * 24) * 0.045 + Math.sin(x * 7.3) * 0.015); }
      g.computeVertexNormals(); worldUV(g);
      const cur = mesh(g, M.curtain, 5.15, (H - 0.08) / 2 + 0.02, 4.24);
      const sheer = mesh(g.clone(), M.curtain.clone(), 5.15, (H - 0.08) / 2 + 0.02, 4.31);
      Object.assign(sheer.material, { transparent: true, opacity: 0.5, depthWrite: false, sheen: 0, color: new THREE.Color('#e9e2d6') });
      allMaterials.add(sheer.material); sheer.castShadow = false;
      cur.scale.x = 0.42; cur.position.x = 4.55; // cortina pesada recolhida no canto; voil cobre a janela
      item(bed, [sheer, cur, bx(3.98, 6.32, 2.62, 2.64, 4.15, 4.33, M.black)]);
    }
    // oliveira em vaso
    {
      const p = [cyl(0.17, 0.42, M.cement, 6.62, 0, 1.75, 24, 0.19)];
      p.push(tube([[6.62, 0.4, 1.75], [6.6, 1.0, 1.73], [6.66, 1.5, 1.78]], 0.025, M.branch, 10));
      const rnd = (s => () => ((s = (s * 16807) % 2147483647) / 2147483647))(99);
      for (let i = 0; i < 70; i++) {
        const leaf = mesh(new THREE.SphereGeometry(0.035 + rnd() * 0.03, 6, 4), M.leaf, 6.64 + (rnd() - 0.5) * 0.6, 1.2 + rnd() * 0.8, 1.76 + (rnd() - 0.5) * 0.55);
        leaf.scale.set(0.6, 0.35, 1.8); leaf.rotation.set(rnd() * 3, rnd() * 3, rnd() * 3); p.push(leaf);
      }
      item(bed, p);
    }
  }

  // ------------------------------------------------ luzes noturnas (intensidade animada)
  const nightLights = [];
  function pl(x, y, z, intensity, distance, color = '#ffb070', shadow = false) {
    const l = new THREE.PointLight(color, 0, distance, 2);
    l.position.set(x, y, z); l.userData.max = intensity;
    if (shadow) {
      // sombra suave das luzes da noite: a cena não se move à noite, então o mapa é gerado só uma vez
      l.castShadow = true;
      l.shadow.mapSize.set(512, 512);
      l.shadow.camera.near = 0.08; l.shadow.camera.far = distance;
      l.shadow.bias = -0.004; l.shadow.normalBias = 0.03; l.shadow.radius = 4;
      l.shadow.autoUpdate = false;
    }
    nightLights.push(l); root.add(l);
  }
  pl(2.4, 2.3, 2.4, 6.5, 6, undefined, true);    // sala + home office
  pl(0.6, 1.4, 2.6, 2.5, 3.2);  // cozinha (sob armários)
  pl(2.64, 1.62, 5.16, 4.5, 4.5, undefined, true); // pendente do jantar
  pl(7.75, 1.95, 2.85, 4.5, 4.5, undefined, true); // escultura
  pl(5.6, 2.3, 3.2, 3.0, 4.5, undefined, true);  // dormitório geral
  pl(5.4, 2.1, 0.7, 2.5, 2.6);  // banho

  // Sombras e bounding dos itens (para a animação de "queda")
  root.traverse(o => {
    if (o.isMesh && o.material && (o.material.transparent || o.material.isMeshBasicMaterial)) o.castShadow = false;
  });
  for (const r of Object.values(rooms)) for (const it of r.userData.items) it.userData.baseY = it.position.y;

  return {
    root, M, walls, floors, floorMats, openings, finishes, ceilings, coves, rooms, nightLights, glows,
    leds: [led, ledSoft], screens: [tvMat, monitorMat], allMaterials,
  };
}
