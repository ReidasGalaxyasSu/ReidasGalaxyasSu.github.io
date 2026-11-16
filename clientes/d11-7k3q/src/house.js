// Modelo 3D do apartamento do cliente, construído sobre a planta de contrato (escala lida das cotas: 118,2 px/m na planta a 300 dpi).
// Sistema de coordenadas (metros): x → leste (direita da planta), z → sul (para baixo na planta), y → altura.
// Origem: x = face interna da parede oeste do dormitório 1; z = face interna da parede norte (cozinha).
import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import * as T from './textures.js';

export const H = 2.6; // pé-direito

// Recorte da planta usada na folha de papel: 850 × 1375 px (300 dpi), origem em px (54, 61), 118,2 px/m
const PX = 118.2;
export const PLAN_BOUNDS = { x0: -54 / PX, x1: (850 - 54) / PX, z0: -61 / PX, z1: (1375 - 61) / PX };

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
  const wallTex = withRepeat(T.concrete('#d6d2cb', 2, [1, 1], 0.02, 512), 2.4);
  const wallDarkTex = withRepeat(T.concrete('#2f2d2b', 4, [1, 1], 0.05, 512), 2.0);
  const floorTex = withRepeat(T.concrete('#6c7a82', 5, [1, 1], 0.06, 1024), 3.2);
  const terraceTex = withRepeat(T.tiles('#8b9094', 6, 0.6, 1024), 1.2);
  const showerTex = withRepeat(T.tiles('#6f7173', 8, 0.3, 512), 0.6);
  const walnutTex = withRepeat(T.wood([92, 57, 36], 9), 1.2);
  const walnutDarkTex = withRepeat(T.wood([70, 43, 27], 8), 1.2);
  const blackOakTex = withRepeat(T.wood([34, 31, 29], 21), 1.4);
  const leatherTex = withRepeat(T.leather('#0f0e0e', 12), 1.2);
  const redLeatherTex = withRepeat(T.leather('#a8281f', 14), 0.9);
  const taupeTex = withRepeat(T.leather('#5b4a45', 15), 0.9);
  const stone = T.stone();
  withRepeat(stone.map, 1.0); withRepeat(stone.bump, 1.0);
  const cementTex = withRepeat(T.concrete('#8f8c88', 5), 1.4);
  return {
    stone: std({ map: stone.map, bumpMap: stone.bump, bumpScale: 3, roughness: 0.95 }),
    wall: std({ map: wallTex, bumpMap: wallTex, bumpScale: 0.18, roughness: 0.92 }),
    wallDark: std({ map: wallDarkTex, bumpMap: wallDarkTex, bumpScale: 0.2, roughness: 0.8 }),
    cut: std({ color: '#161514', roughness: 1 }),
    black: std({ color: '#111112', roughness: 0.62 }),
    cabBlack: std({ color: '#1c1c1e', roughness: 0.5 }),
    blackGloss: phys({ color: '#0b0b0c', roughness: 0.28, metalness: 0.1, clearcoat: 1, clearcoatRoughness: 0.08 }),
    floorMicro: phys({ map: floorTex, bumpMap: floorTex, bumpScale: 0.12, roughness: 0.34, clearcoat: 0.12, clearcoatRoughness: 0.35 }),
    floorTerrace: std({ map: terraceTex, bumpMap: terraceTex, bumpScale: 0.6, roughness: 0.55 }),
    floorShower: std({ map: showerTex, bumpMap: showerTex, bumpScale: 0.8, roughness: 0.5 }),
    slab: std({ map: withRepeat(T.concrete('#3a3735', 9), 3), roughness: 1 }),
    walnut: std({ map: walnutTex, bumpMap: walnutTex, bumpScale: 0.4, roughness: 0.42 }),
    walnutDark: std({ map: walnutDarkTex, bumpMap: walnutDarkTex, bumpScale: 0.4, roughness: 0.46 }),
    blackOak: std({ map: blackOakTex, bumpMap: blackOakTex, bumpScale: 0.5, roughness: 0.4 }),
    granite: phys({ map: withRepeat(T.granite(), 0.6), roughness: 0.22, clearcoat: 1, clearcoatRoughness: 0.06 }),
    cement: std({ map: cementTex, bumpMap: cementTex, bumpScale: 0.4, roughness: 0.78 }),
    leatherBlack: phys({ map: leatherTex, bumpMap: leatherTex, bumpScale: 0.5, roughness: 0.42, clearcoat: 0.4, clearcoatRoughness: 0.4 }),
    redLeather: phys({ map: redLeatherTex, bumpMap: redLeatherTex, bumpScale: 0.5, roughness: 0.4, clearcoat: 0.5, clearcoatRoughness: 0.3 }),
    taupe: phys({ map: taupeTex, bumpMap: taupeTex, bumpScale: 0.5, roughness: 0.5, clearcoat: 0.25, clearcoatRoughness: 0.5 }),
    lacquer: phys({ color: '#cfd0d0', roughness: 0.38, clearcoat: 0.3, clearcoatRoughness: 0.35 }),
    lacquerLine: std({ color: '#7d7e80', roughness: 0.6 }),
    fridge: std({ color: '#7a7c82', roughness: 0.34, metalness: 0.6 }),
    boucle: cloth('#4f5053', 31, 0.5, '#9a9b9e'),
    bedWhite: cloth('#ece9e3', 32, 0.6, '#ffffff', { roughness: 0.95 }),
    bedGrey: cloth('#a8a7a4', 33, 0.6, '#e1dfdb'),
    headboard: cloth('#3b3a39', 34, 0.5, '#7d7b78'),
    redFabric: cloth('#9b2e22', 35, 0.4, '#d9776a'),
    rug: cloth('#575757', 36, 0.8, '#9a9a9a', { bumpScale: 0.9, roughness: 1 }),
    drape: cloth('#6a6864', 37, 0.6, '#b5b1aa', { side: THREE.DoubleSide }),
    steel: std({ color: '#b9b9b6', roughness: 0.22, metalness: 1 }),
    steelDark: std({ color: '#4b4d52', roughness: 0.32, metalness: 0.7 }),
    brass: std({ color: '#b8925c', roughness: 0.28, metalness: 1 }),
    ceramic: phys({ color: '#f3f1ed', roughness: 0.15, clearcoat: 1, clearcoatRoughness: 0.05 }),
    basin: phys({ color: '#6f7072', roughness: 0.45, clearcoat: 0.3, clearcoatRoughness: 0.4 }),
    stoneTop: phys({ color: '#26262a', roughness: 0.3, clearcoat: 0.6, clearcoatRoughness: 0.2 }),
    blackStone: phys({ color: '#0d0d10', roughness: 0.34, metalness: 0.0, clearcoat: 0.7, clearcoatRoughness: 0.25 }),
    concretePot: std({ color: '#8d8e90', roughness: 0.85 }),
    leaf: std({ color: '#2f4728', roughness: 0.6 }),
    twig: std({ color: '#6b5846', roughness: 0.9 }),
    paper: std({ color: '#efece6', roughness: 0.9 }),
    screenOff: phys({ color: '#060708', roughness: 0.1, metalness: 0.2, clearcoat: 1, clearcoatRoughness: 0.03 }),
    glass: (() => { const m = new THREE.MeshStandardMaterial({ color: '#a9c2c8', roughness: 0.03, metalness: 0.1, transparent: true, opacity: 0.16, depthWrite: false, envMapIntensity: 1.4 }); allMaterials.add(m); return m; })(),
    glassSmoke: (() => { const m = new THREE.MeshStandardMaterial({ color: '#2a2c2e', roughness: 0.06, metalness: 0.2, transparent: true, opacity: 0.3, depthWrite: false }); allMaterials.add(m); return m; })(),
    mirrorDoor: phys({ color: '#aeb6bf', roughness: 0.1, metalness: 0.35, clearcoat: 1, clearcoatRoughness: 0.03 }),
    mirror: std({ color: '#c9ccd0', roughness: 0.02, metalness: 1 }),
    sheer: (() => { const m = new THREE.MeshStandardMaterial({ color: '#efeae0', roughness: 1, transparent: true, opacity: 0.5, depthWrite: false, side: THREE.DoubleSide }); allMaterials.add(m); return m; })(),
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

// Tampo no plano (x,z) com extremidades elípticas ("barril"), espessura t, topo em yTop
function barrelSlab(cx, cz, w, d, rx, t, yTop, mat) {
  const s = new THREE.Shape(), a = w / 2, b = d / 2;
  s.moveTo(-a + rx, -b); s.lineTo(a - rx, -b);
  s.absellipse(a - rx, 0, rx, b, -Math.PI / 2, Math.PI / 2, false);
  s.lineTo(-a + rx, b);
  s.absellipse(-a + rx, 0, rx, b, Math.PI / 2, Math.PI * 1.5, false);
  const g = new THREE.ExtrudeGeometry(s, { depth: t, bevelEnabled: true, bevelSize: 0.008, bevelThickness: 0.008, bevelSegments: 2, curveSegments: 32 });
  g.rotateX(Math.PI / 2);
  worldUV(g);
  return mesh(g, mat, cx, yTop, cz);
}

// Tampo arredondado no plano (x,z), espessura t, topo em y
function roundedSlab(cx, cz, w, d, r, t, yTop, mat) {
  const g = new THREE.ExtrudeGeometry(roundedRectShape(w, d, r), { depth: t, bevelEnabled: true, bevelSize: 0.008, bevelThickness: 0.008, bevelSegments: 2, curveSegments: 10 });
  g.rotateX(Math.PI / 2);
  worldUV(g);
  return mesh(g, mat, cx, yTop, cz);
}

// Arco de parede (encosto curvo): anel entre r0 e r1, de ang0 a ang1 (rad, no plano x,z), de y0 a y1
function arcBack(r0, r1, ang0, ang1, y0, y1, mat, cx = 0, cz = 0) {
  const s = new THREE.Shape();
  s.absarc(0, 0, r1, ang0, ang1, false);
  s.absarc(0, 0, r0, ang1, ang0, true);
  const g = new THREE.ExtrudeGeometry(s, { depth: y1 - y0, bevelEnabled: true, bevelSize: 0.006, bevelThickness: 0.006, bevelSegments: 2, curveSegments: 16 });
  g.rotateX(-Math.PI / 2); // extrusão vira altura; sy → -z
  worldUV(g);
  return mesh(g, mat, cx, y0, cz);
}

function tube(points, radius, mat, seg = 40) {
  const curve = new THREE.CatmullRomCurve3(points.map(p => new THREE.Vector3(...p)));
  return mesh(new THREE.TubeGeometry(curve, seg, radius, 8, false), mat);
}

// Posiciona (e gira em torno do eixo y) peças modeladas em coordenadas locais (origem no centro da peça)
const _Y = new THREE.Vector3(0, 1, 0);
function place(meshes, x, z, ry = 0) {
  const q = new THREE.Quaternion().setFromAxisAngle(_Y, ry);
  for (const m of meshes) {
    m.position.applyQuaternion(q);
    m.position.x += x; m.position.z += z;
    m.quaternion.premultiply(q);
  }
  return meshes;
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

// Sombra suave de contato (ambient occlusion falso) — textura compartilhada
let _aoTex = null;
function aoTexture() {
  if (_aoTex) return _aoTex;
  const N = 64, c = document.createElement('canvas'); c.width = c.height = N;
  const ctx = c.getContext('2d'), img = ctx.createImageData(N, N);
  for (let y = 0; y < N; y++) for (let x = 0; x < N; x++) {
    // 1 no miolo, cai suavemente até 0 na borda do retângulo
    const dx = Math.min(x + 0.5, N - x - 0.5) / (N * 0.5), dy = Math.min(y + 0.5, N - y - 0.5) / (N * 0.5);
    let a = Math.min(1, Math.min(dx, dy) * 1.0);
    a = a * a * (3 - 2 * a);
    const p = (y * N + x) * 4; img.data[p] = img.data[p + 1] = img.data[p + 2] = 0; img.data[p + 3] = Math.round(a * 255);
  }
  ctx.putImageData(img, 0, 0);
  _aoTex = new THREE.CanvasTexture(c);
  _aoTex.colorSpace = THREE.SRGBColorSpace;
  return _aoTex;
}

// Degradê de um lado só (para faixas junto às paredes): opaco na linha da parede, transparente 0,32 m adiante
let _aoEdge = null;
function aoEdgeTexture() {
  if (_aoEdge) return _aoEdge;
  const W = 4, N = 64, c = document.createElement('canvas'); c.width = W; c.height = N;
  const ctx = c.getContext('2d'), img = ctx.createImageData(W, N);
  for (let y = 0; y < N; y++) for (let x = 0; x < W; x++) {
    const t = y / (N - 1), a = Math.pow(1 - t, 2.2);
    const p = (y * W + x) * 4; img.data[p] = img.data[p + 1] = img.data[p + 2] = 0; img.data[p + 3] = Math.round(a * 255);
  }
  ctx.putImageData(img, 0, 0);
  _aoEdge = new THREE.CanvasTexture(c);
  _aoEdge.colorSpace = THREE.SRGBColorSpace;
  return _aoEdge;
}

// Folha com nervura (planta de folhas largas) — textura com transparência, usada em planos dos dois lados
let _leafTex = null;
function leafTexture() {
  if (_leafTex) return _leafTex;
  const W = 128, Hh = 256, c = document.createElement('canvas'); c.width = W; c.height = Hh;
  const g = c.getContext('2d');
  const grd = g.createLinearGradient(0, 0, W, Hh); grd.addColorStop(0, '#5f8f3e'); grd.addColorStop(1, '#2f5a26');
  g.fillStyle = grd;
  g.beginPath(); g.moveTo(W / 2, 6);
  g.bezierCurveTo(W * 1.02, Hh * 0.22, W * 0.98, Hh * 0.7, W / 2, Hh - 4);
  g.bezierCurveTo(W * 0.02, Hh * 0.7, -W * 0.02, Hh * 0.22, W / 2, 6); g.fill();
  g.strokeStyle = 'rgba(200,230,170,0.55)'; g.lineWidth = 3; g.beginPath(); g.moveTo(W / 2, 10); g.lineTo(W / 2, Hh - 8); g.stroke();
  g.lineWidth = 1.4;
  for (let i = 1; i < 8; i++) { const y = Hh * i / 9; g.beginPath(); g.moveTo(W / 2, y); g.quadraticCurveTo(W * 0.78, y - 10, W * 0.9, y - 26); g.moveTo(W / 2, y); g.quadraticCurveTo(W * 0.22, y - 10, W * 0.1, y - 26); g.stroke(); }
  _leafTex = new THREE.CanvasTexture(c); _leafTex.colorSpace = THREE.SRGBColorSpace;
  return _leafTex;
}

// Quadro com paisagem pintada (montanhas em névoa) ou galho floral
function artTexture(kind, seed) {
  const W = 512, Hh = kind === 'wide' ? 288 : 640, c = document.createElement('canvas'); c.width = W; c.height = Hh;
  const g = c.getContext('2d');
  const r = (s => () => ((s = (s * 16807) % 2147483647) / 2147483647))(seed);
  if (kind === 'flower') {
    g.fillStyle = '#efe9e2'; g.fillRect(0, 0, W, Hh);
    g.strokeStyle = '#7a5148'; g.lineWidth = 3;
    g.beginPath(); g.moveTo(W * 0.5, Hh * 0.88); g.quadraticCurveTo(W * 0.46, Hh * 0.5, W * 0.56, Hh * 0.18); g.stroke();
    for (let i = 0; i < 70; i++) { const t = r(); const x = W * (0.5 + (r() - 0.5) * 0.5 * t), y = Hh * (0.2 + 0.5 * t); g.fillStyle = `rgba(${190 + r() * 30},${110 + r() * 30},${110 + r() * 20},0.85)`; g.beginPath(); g.ellipse(x, y, 5 + r() * 6, 3 + r() * 4, r() * 3, 0, 7); g.fill(); }
  } else {
    const sky = g.createLinearGradient(0, 0, 0, Hh); sky.addColorStop(0, '#d9d3c8'); sky.addColorStop(1, '#b9b6ae'); g.fillStyle = sky; g.fillRect(0, 0, W, Hh);
    for (let k = 0; k < 4; k++) {
      const base = Hh * (0.45 + k * 0.13), tone = 150 - k * 30;
      g.fillStyle = `rgb(${tone},${tone + 4},${tone + 6})`; g.beginPath(); g.moveTo(0, Hh);
      for (let x = 0; x <= W; x += 8) g.lineTo(x, base - Math.abs(Math.sin(x / (60 + k * 25) + k * 2 + r())) * Hh * (0.18 - k * 0.025) - r() * 4);
      g.lineTo(W, Hh); g.fill();
    }
  }
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

// ---------------------------------------------------------------- construção
export function buildHouse() {
  const M = makeMaterials();
  const root = new THREE.Group();
  // materiais extras deste projeto (referências do cliente)
  const X = {
    taupe: cloth('#8c7d70', 41, 0.5, '#d6c9bb'),
    taupeDark: cloth('#6f6359', 42, 0.5, '#bcae9f'),
    linen: cloth('#e7e1d8', 43, 0.5, '#ffffff'),
    knit: cloth('#cdbfa8', 44, 0.25, '#f2e6d2', { bumpScale: 0.9 }),
    jute: cloth('#b2a38c', 45, 0.35, '#e0d4bf', { bumpScale: 1.0, roughness: 1 }),
    pink: cloth('#c3887f', 46, 0.35, '#f0c2b8', { bumpScale: 0.7 }),
    pinkSoft: cloth('#d8aea6', 47, 0.4, '#f6d7cf'),
    greyFab: cloth('#5d5e60', 48, 0.5, '#a9aaac'),
    door: phys({ color: '#efede8', roughness: 0.45, clearcoat: 0.2, clearcoatRoughness: 0.5 }),
    inox: std({ color: '#c7c9cb', roughness: 0.28, metalness: 0.9 }),
    bathWall: std({ map: withRepeat(T.concrete('#d9d3ca', 51, [1, 1], 0.03, 512), 1.6), roughness: 0.75 }),
    leaf: (() => { const m = new THREE.MeshStandardMaterial({ map: leafTexture(), alphaTest: 0.5, side: THREE.DoubleSide, roughness: 0.6 }); allMaterials.add(m); return m; })(),
    potWhite: std({ color: '#e7e2da', roughness: 0.8 }),
    rattan: std({ color: '#c7a476', roughness: 0.85 }),
  };

  // Materiais emissivos (fitas de LED, luminárias) — a intensidade é animada pela "noite"
  const led = new THREE.MeshBasicMaterial({ color: new THREE.Color('#ffb46b') });
  const ledSoft = new THREE.MeshBasicMaterial({ color: new THREE.Color('#ffc58a') });
  const tvMat = new THREE.MeshBasicMaterial({ map: T.tvScreen(), color: new THREE.Color(0.25, 0.25, 0.25) });
  const laptopMat = new THREE.MeshBasicMaterial({ map: T.tvScreen(), color: new THREE.Color(0.3, 0.3, 0.3) });
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
  for (const [x1, x2, z1, z2] of [[-0.27, 6.49, 6.10, 10.84], [1.37, 6.49, -0.29, 6.10], [0.57, 1.37, -0.29, 4.32]]) {
    const sl = bx(x1, x2, -0.3, -0.002, z1, z2, M.slab); sl.castShadow = false; root.add(sl);
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
  const floorMats = [M.floorMicro, M.floorTerrace, M.floorShower].map(m => { const c = m.clone(); c.transparent = true; c.opacity = 0; allMaterials.add(c); return c; });
  const [fMicro, fTerrace, fShower] = floorMats;
  // estar, cozinha e circulação
  floorRect(2.906, 0, 6.252, 1.557, fMicro);
  floorRect(1.90, 1.557, 6.252, 4.08, fMicro);
  floorRect(1.607, 4.08, 4.65, 6.39, fMicro);
  floorRect(3.752, 6.39, 4.65, 7.28, fMicro);
  // vãos de porta
  for (const r of [[1.726, 2.09, 1.90, 3.68], [2.74, 0.816, 2.906, 1.40], [4.65, 4.34, 4.75, 4.92], [4.65, 6.595, 4.75, 7.19], [3.596, 6.47, 3.752, 7.20], [3.84, 7.28, 4.535, 7.39], [2.22, 6.93, 2.30, 7.56]]) floorRect(...r, fMicro);
  // dormitórios
  floorRect(0, 7.735, 3.596, 10.575, fMicro);
  floorRect(2.30, 6.39, 3.596, 7.735, fMicro);
  floorRect(3.752, 7.39, 6.252, 10.575, fMicro);
  // banheiros
  floorRect(4.75, 4.243, 6.06, 5.45, fMicro);
  floorRect(4.75, 5.60, 5.51, 7.28, fMicro); floorRect(5.51, 6.52, 6.252, 7.28, fMicro); floorRect(5.51, 5.60, 6.252, 6.52, fShower);
  floorRect(0.69, 6.38, 2.22, 7.62, fMicro); floorRect(0, 6.68, 0.69, 7.62, fShower);
  // varanda e área de serviço
  floorRect(0.83, 0, 2.74, 1.40, fTerrace);
  floorRect(0.83, 1.40, 1.726, 4.02, fTerrace);
  root.add(floors);

  // Sombras de contato no pé das paredes
  const aoGroup = new THREE.Group();
  const aoFloorMat = new THREE.MeshBasicMaterial({ map: aoEdgeTexture(), transparent: true, opacity: 0, depthWrite: false, side: THREE.DoubleSide, polygonOffset: true, polygonOffsetFactor: -2, polygonOffsetUnits: -2 });
  aoFloorMat.userData.max = 0.36;
  const floorDecals = [aoFloorMat];
  {
    const geos = [];
    const foot = (x1, z1, x2, z2, nx, nz, w = 0.3) => {
      const pos = [x1, 0.0046, z1, x2, 0.0046, z2, x2 + nx * w, 0.0046, z2 + nz * w, x1 + nx * w, 0.0046, z1 + nz * w];
      const g = new THREE.BufferGeometry();
      g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
      g.setAttribute('normal', new THREE.Float32BufferAttribute([0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0], 3));
      g.setAttribute('uv', new THREE.Float32BufferAttribute([0, 0, 1, 0, 1, 1, 0, 1], 2));
      g.setIndex([0, 1, 2, 0, 2, 3]);
      geos.push(g);
    };
    // estar / circulação
    foot(6.252, 1.16, 6.252, 3.15, -1, 0); foot(6.252, 3.98, 6.252, 4.08, -1, 0); foot(1.90, 1.557, 1.90, 2.09, 1, 0); foot(1.90, 1.557, 2.906, 1.557, 0, 1);
    foot(4.65, 4.08, 6.252, 4.08, 0, -1); foot(1.607, 4.26, 1.607, 6.24, 1, 0); foot(4.65, 4.08, 4.65, 7.28, -1, 0); foot(1.607, 6.39, 3.596, 6.39, 0, 1);
    // dormitórios
    foot(0, 7.735, 0, 10.575, 1, 0); foot(0, 10.575, 3.596, 10.575, 0, -1); foot(0, 7.735, 2.30, 7.735, 0, 1); foot(3.596, 6.39, 3.596, 10.575, -1, 0);
    foot(3.752, 7.39, 3.752, 10.575, 1, 0); foot(3.752, 10.575, 6.252, 10.575, 0, -1); foot(6.252, 7.39, 6.252, 10.575, -1, 0); foot(3.752, 7.39, 6.252, 7.39, 0, 1);
    // banheiros
    foot(4.75, 4.243, 6.06, 4.243, 0, 1); foot(4.75, 5.45, 6.06, 5.45, 0, -1); foot(4.75, 5.60, 6.252, 5.60, 0, 1); foot(4.75, 7.28, 6.252, 7.28, 0, -1);
    foot(0.69, 6.38, 2.22, 6.38, 0, 1); foot(0, 7.62, 2.22, 7.62, 0, -1); foot(2.22, 6.38, 2.22, 7.62, -1, 0);
    // varanda / A.S.
    foot(0.83, 0, 2.74, 0, 0, 1); foot(1.726, 1.557, 1.726, 4.02, -1, 0); foot(0.83, 1.40, 1.726, 1.40, 0, 1);
    const m = new THREE.Mesh(mergeGeometries(geos), aoFloorMat);
    m.renderOrder = 1;
    aoGroup.add(m);
  }
  root.add(aoGroup);

  // ------------------------------------------------ paredes (retângulos que não se sobrepõem)
  const walls = [];
  const wallMats = [M.wall, M.wall, M.cut, M.wall, M.wall, M.wall];
  function wall(x1, x2, z1, z2, openings = [], mat = wallMats, h = H) {
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
      piece(cur, o.a, 0, h);
      piece(o.a, o.b, 0, o.y1);
      piece(o.a, o.b, o.y2, h);
      cur = o.b;
    }
    piece(cur, hi, 0, h);
    g.userData.center = new THREE.Vector3((x1 + x2) / 2, 0, (z1 + z2) / 2);
    walls.push(g);
    root.add(g);
    return g;
  }
  const DOOR = 2.1;
  const winSuite = { a: 8.38, b: 9.94, y1: 0.9, y2: 2.2 }, winBath3 = { a: 6.83, b: 7.48, y1: 1.5, y2: 2.1 };
  const winQ2 = { a: 4.37, b: 5.62, y1: 0.9, y2: 2.2 }, winCirc = { a: 4.64, b: 5.81, y1: 1.0, y2: 2.2 };
  wall(0.62, 6.44, -0.24, 0);                                                       // norte
  wall(6.252, 6.44, 0, 10.575, [{ a: 3.15, b: 3.98, y1: 0, y2: DOOR }]);            // leste (porta de entrada)
  wall(-0.22, 6.44, 10.575, 10.79, [winQ2]);                                        // sul (janela do dormitório 2)
  wall(-0.22, 0, 6.38, 10.575, [winBath3, winSuite]);                               // oeste do dormitório 1 e banho 3
  wall(0.62, 0.83, 0, 0.73);                                                        // oeste da área de serviço
  wall(2.74, 2.906, 0, 1.40, [{ a: 0.816, b: 1.40, y1: 0, y2: DOOR }]);             // cozinha | A.S.
  wall(1.726, 2.906, 1.40, 1.557);                                                  // dente da A.S.
  wall(1.726, 1.90, 1.557, 3.95, [{ a: 2.09, b: 3.68, y1: 0, y2: 2.2 }]);           // sala | varanda (porta de correr)
  wall(1.42, 1.90, 3.95, 4.26);                                                     // pilar
  wall(1.42, 1.607, 4.26, 6.15, [winCirc]);                                         // oeste da circulação
  wall(-0.22, 1.607, 6.15, 6.38);                                                   // norte do banho 3
  wall(1.607, 3.752, 6.24, 6.39);                                                   // circulação | dormitório 1
  wall(2.22, 2.30, 6.39, 7.62, [{ a: 6.93, b: 7.56, y1: 0, y2: DOOR }]);            // banho 3 | dormitório 1
  wall(0, 2.30, 7.62, 7.735);                                                       // banho 3 | dormitório 1 (sul)
  wall(3.596, 3.752, 6.39, 10.575, [{ a: 6.47, b: 7.20, y1: 0, y2: DOOR }]);        // parede de 4,20 m (dormitórios)
  wall(3.752, 6.252, 7.28, 7.39, [{ a: 3.84, b: 4.535, y1: 0, y2: DOOR }]);         // norte do dormitório 2
  wall(4.65, 4.75, 4.08, 7.28, [{ a: 4.34, b: 4.92, y1: 0, y2: DOOR }, { a: 6.595, b: 7.19, y1: 0, y2: DOOR }]); // banhos 1 e 2
  wall(4.75, 6.252, 4.08, 4.243);                                                   // norte do banho 1
  wall(4.75, 6.252, 5.45, 5.60);                                                    // banho 1 | banho 2
  wall(6.06, 6.252, 4.243, 5.45);                                                   // shaft do banho 1
  wall(0, 0.69, 6.38, 6.68);                                                        // shaft do banho 3
  wall(2.02, 2.74, 0, 0.25);                                                        // shaft da A.S.

  // Mureta + gradil da varanda (h = 1,20 m)
  function rail(x1, z1, x2, z2) {
    const g = new THREE.Group(), alongX = (x2 - x1) > (z2 - z1);
    const cx = (x1 + x2) / 2, cz = (z1 + z2) / 2;
    g.add(bx(x1, x2, 0, 0.45, z1, z2, wallMats));
    if (alongX) {
      g.add(bx(x1, x2, 1.16, 1.2, cz - 0.025, cz + 0.025, M.black));
      for (let x = x1 + 0.05; x < x2; x += 0.11) g.add(bx(x - 0.01, x + 0.01, 0.45, 1.16, cz - 0.01, cz + 0.01, M.black));
    } else {
      g.add(bx(cx - 0.025, cx + 0.025, 1.16, 1.2, z1, z2, M.black));
      for (let z = z1 + 0.05; z < z2; z += 0.11) g.add(bx(cx - 0.01, cx + 0.01, 0.45, 1.16, z - 0.01, z + 0.01, M.black));
    }
    mergeByMaterial(g);
    g.userData.center = new THREE.Vector3(cx, 0, cz);
    walls.push(g); root.add(g);
  }
  rail(0.62, 0.73, 0.83, 4.27);
  rail(0.83, 4.02, 1.42, 4.27);

  // ------------------------------------------------ esquadrias e portas
  const openings = new THREE.Group();
  {
    // porta de entrada (fechada), madeira escura com puxador vertical
    openings.add(bx(6.252, 6.44, 0, DOOR, 3.15, 3.17, M.black), bx(6.252, 6.44, 0, DOOR, 3.96, 3.98, M.black), bx(6.252, 6.44, DOOR - 0.025, DOOR, 3.15, 3.98, M.black));
    openings.add(bx(6.30, 6.34, 0, DOOR - 0.025, 3.17, 3.96, M.walnutDark));
    openings.add(bx(6.285, 6.30, 0.85, 1.45, 3.86, 3.88, M.steel, 0.006));
    // porta de correr da varanda: 2 folhas de vidro com perfil preto
    const zA = 2.09, zB = 3.68, zm = (zA + zB) / 2;
    openings.add(bx(1.726, 1.90, 2.17, 2.2, zA, zB, M.black), bx(1.726, 1.90, 0, 0.03, zA, zB, M.steel));
    for (const [z1, z2, x] of [[zA, zm + 0.03, 1.79], [zm - 0.03, zB, 1.84]]) {
      openings.add(bx(x - 0.003, x + 0.003, 0.04, 2.16, z1 + 0.03, z2 - 0.03, M.glass));
      openings.add(bx(x - 0.02, x + 0.02, 0.03, 2.17, z1, z1 + 0.035, M.black), bx(x - 0.02, x + 0.02, 0.03, 2.17, z2 - 0.035, z2, M.black));
      openings.add(bx(x - 0.02, x + 0.02, 0.03, 0.08, z1, z2, M.black), bx(x - 0.02, x + 0.02, 2.12, 2.17, z1, z2, M.black));
    }
    // janelas: caixilho preto dentro do vão, duas folhas de correr, peitoril
    const winX = (x1, x2, w, horizontal) => { // janela numa parede (horizontal = parede ao longo de x)
      const t = 0.04, mid = (w.a + w.b) / 2, c = (x1 + x2) / 2;
      const B = (a, b, y1, y2, d1, d2, m) => openings.add(horizontal ? bx(a, b, y1, y2, d1, d2, m) : bx(d1, d2, y1, y2, a, b, m));
      B(w.a - 0.02, w.b + 0.02, w.y1 - 0.02, w.y1, x1 - 0.02, x2 + 0.02, M.concretePot);
      B(w.a, w.b, w.y1, w.y1 + t, x1, x2, M.black); B(w.a, w.b, w.y2 - t, w.y2, x1, x2, M.black);
      B(w.a, w.a + t, w.y1, w.y2, x1, x2, M.black); B(w.b - t, w.b, w.y1, w.y2, x1, x2, M.black);
      B(mid - 0.025, mid + 0.025, w.y1 + t, w.y2 - t, c - 0.04, c + 0.04, M.black);
      B(w.a + t, mid, w.y1 + t, w.y2 - t, c - 0.025, c - 0.021, M.glass); B(mid, w.b - t, w.y1 + t, w.y2 - t, c + 0.021, c + 0.025, M.glass);
    };
    winX(10.575, 10.79, winQ2, true);
    winX(-0.22, 0, winSuite, false); winX(-0.22, 0, winBath3, false);
    winX(1.42, 1.607, winCirc, false);
    // portas internas brancas, abertas a 90°, com batente e maçaneta preta
    const jambsZ = (x1, x2, a, b) => { openings.add(bx(x1, x2, 0, DOOR, a, a + 0.02, M.black), bx(x1, x2, 0, DOOR, b - 0.02, b, M.black), bx(x1, x2, DOOR - 0.025, DOOR, a, b, M.black)); };
    const jambsX = (z1, z2, a, b) => { openings.add(bx(a, a + 0.02, 0, DOOR, z1, z2, M.black), bx(b - 0.02, b, 0, DOOR, z1, z2, M.black), bx(a, b, DOOR - 0.025, DOOR, z1, z2, M.black)); };
    const leaf = (x1, x2, z1, z2, hx, hz) => { openings.add(bx(x1, x2, 0.01, DOOR - 0.04, z1, z2, X.door, 0.004)); openings.add(bx(hx - 0.012, hx + 0.012, 1.0, 1.03, hz - 0.06, hz + 0.06, M.black)); };
    jambsZ(3.596, 3.752, 6.47, 7.20); leaf(2.93, 3.596, 7.145, 7.18, 3.0, 7.13);                  // dormitório 1 (abre para a antessala)
    jambsX(7.28, 7.39, 3.84, 4.535); leaf(3.86, 3.895, 7.39, 8.05, 3.91, 7.98);                    // dormitório 2
    jambsZ(4.65, 4.75, 4.34, 4.92); leaf(4.75, 5.30, 4.345, 4.38, 5.24, 4.39);                     // banho 1
    jambsZ(4.65, 4.75, 6.595, 7.19); leaf(4.75, 5.33, 7.155, 7.19, 5.27, 7.14);                    // banho 2
    jambsZ(2.22, 2.30, 6.93, 7.56); leaf(1.62, 2.22, 7.525, 7.56, 1.68, 7.51);                     // banho 3
    jambsZ(2.74, 2.906, 0.816, 1.40); leaf(2.20, 2.74, 1.365, 1.40, 2.26, 1.35);                  // área de serviço
  }
  mergeByMaterial(openings);
  root.add(openings);

  // Acabamentos que acompanham as paredes
  const finishes = new THREE.Group();
  finishes.add(bx(6.235, 6.252, 0, H, 1.16, 3.13, M.wallDark));                                  // painel grafite da TV
  finishes.add(bx(3.64, 6.252, 0.92, 1.5, 0, 0.012, M.blackStone));                             // frontão de pedra da cozinha
  finishes.add(bx(6.24, 6.252, 0.92, 1.5, 0.012, 1.12, M.blackStone));
  // revestimento claro nos banheiros
  for (const [x1, x2, z1, z2] of [[4.75, 6.06, 4.243, 4.255], [4.75, 6.06, 5.438, 5.45], [4.75, 6.252, 5.60, 5.612], [6.24, 6.252, 5.60, 7.28], [0.69, 2.22, 6.38, 6.392], [0, 0.012, 6.68, 7.62], [0.69, 2.22, 7.608, 7.62]]) finishes.add(bx(x1, x2, 0, H, z1, z2, X.bathWall));
  const skirt = (x1, x2, z1, z2) => finishes.add(bx(x1, x2, 0, 0.07, z1, z2, M.cabBlack));
  skirt(0, 0.012, 7.735, 10.575); skirt(0, 3.0, 10.563, 10.575); skirt(3.752, 4.0, 10.563, 10.575); skirt(3.752, 3.764, 7.39, 10.575);
  skirt(1.607, 1.619, 4.26, 6.24); skirt(4.638, 4.65, 4.08, 4.34); skirt(4.638, 4.65, 4.92, 6.595);
  mergeByMaterial(finishes);
  root.add(finishes);

  // Forros (vistos só de dentro) e spots
  const ceilings = new THREE.Group();
  {
    const cmat = std({ map: withRepeat(T.concrete('#dcd8d1', 22, [1, 1], 0.02, 512), 2.5), roughness: 0.95 });
    cmat.shadowSide = THREE.DoubleSide;
    const ceil = (x1, z1, x2, z2) => {
      const g = new THREE.PlaneGeometry(x2 - x1, z2 - z1);
      g.rotateX(Math.PI / 2);
      g.translate((x1 + x2) / 2, H, (z1 + z2) / 2);
      const cm = new THREE.Mesh(g, cmat); cm.castShadow = true; cm.receiveShadow = true;
      ceilings.add(cm);
    };
    ceil(0.62, -0.24, 6.44, 4.27); ceil(1.42, 4.27, 6.44, 6.15); ceil(-0.22, 6.15, 6.44, 10.79);
    const spot = (x, z) => {
      ceilings.add(cyl(0.045, 0.012, M.black, x, H - 0.012, z, 20));
      const d = new THREE.Mesh(new THREE.CircleGeometry(0.034, 20), ledSoft);
      d.rotation.x = Math.PI / 2; d.position.set(x, H - 0.0125, z);
      ceilings.add(d);
    };
    for (const [x, z] of [[3.6, 0.45], [4.6, 0.45], [5.6, 0.45], [5.6, 1.6], [5.6, 2.6], [3.1, 3.7], [4.6, 3.7], [2.6, 4.8], [3.6, 5.6], [4.2, 6.8],
      [1.27, 0.7], [1.27, 2.4], [1.27, 3.5], [5.4, 4.85], [5.0, 6.4], [5.9, 6.9], [1.4, 7.0], [0.35, 7.15],
      [0.6, 8.2], [2.6, 8.2], [2.9, 6.9], [1.6, 9.0], [4.4, 8.0], [5.2, 9.2], [4.9, 10.1]]) spot(x, z);
  }
  root.add(ceilings);

  // Sancas de LED (aparecem à noite)
  const coves = new THREE.Group();
  {
    const y1 = 2.52, y2 = 2.55;
    coves.add(ledBox(3.0, 6.2, y1, y2, 0.36, 0.39));                    // cozinha
    coves.add(ledBox(6.2, 6.23, y1, y2, 1.2, 3.1));                      // parede da TV
    coves.add(ledBox(1.93, 1.96, y1, y2, 1.6, 3.9));                     // parede da varanda
    coves.add(ledBox(0.04, 0.07, y1, y2, 7.8, 10.5));                    // suíte
    coves.add(ledBox(3.79, 6.2, y1, y2, 7.43, 7.46));                    // dormitório 2
    coves.add(ledBox(1.66, 4.6, y1, y2, 6.18, 6.21));                    // circulação
  }
  mergeByMaterial(coves);
  root.add(coves);

  // ------------------------------------------------ mobiliário por ambiente
  const rooms = {};
  function room(key) { const g = new THREE.Group(); g.userData.items = []; rooms[key] = g; root.add(g); return g; }
  function item(r, ...meshes) {
    const g = new THREE.Group();
    meshes.flat().forEach(m => g.add(m));
    const c = new THREE.Box3().setFromObject(g).getCenter(new THREE.Vector3());
    g.children.forEach(m => { m.position.x -= c.x; m.position.z -= c.z; });
    g.position.set(c.x, 0, c.z);
    mergeByMaterial(g);
    r.add(g); r.userData.items.push(g);
    return g;
  }
  const roomDecals = {};
  const aoMats = new Map();
  function decal(key, x1, z1, x2, z2, alpha = 0.4, pad = 0.1) {
    const k = `${key}:${alpha}`;
    if (!aoMats.has(k)) {
      const mat = new THREE.MeshBasicMaterial({ map: aoTexture(), transparent: true, opacity: 0, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -2, polygonOffsetUnits: -2 });
      mat.userData.max = alpha; aoMats.set(k, mat);
      (roomDecals[key] ||= { group: new THREE.Group(), mats: [] }).mats.push(mat);
    }
    const g = new THREE.PlaneGeometry(x2 - x1 + pad * 2, z2 - z1 + pad * 2);
    g.rotateX(-Math.PI / 2);
    const m = new THREE.Mesh(g, aoMats.get(k));
    m.position.set((x1 + x2) / 2, 0.0048, (z1 + z2) / 2); m.renderOrder = 1;
    roomDecals[key].group.add(m);
  }
  const rnd = (s => () => ((s = (s * 16807) % 2147483647) / 2147483647))(7);
  // planta em vaso: folhas largas em planos com textura (sem sombra quadrada)
  function plant(x, z, { potR = 0.16, potH = 0.34, h = 1.1, n = 26, spread = 0.38, pot = X.potWhite, y0 = 0, leafS = 1 } = {}) {
    const p = [cyl(potR, potH, pot, x, y0, z, 24, potR * 1.08), cyl(potR * 0.95, 0.01, M.cut, x, y0 + potH - 0.02, z, 20)];
    for (let i = 0; i < n; i++) {
      const a = rnd() * Math.PI * 2, t = 0.35 + rnd() * 0.65, r = spread * t * (0.5 + rnd() * 0.5);
      const top = [x + Math.cos(a) * r, y0 + potH + h * t, z + Math.sin(a) * r];
      const st = tube([[x, y0 + potH - 0.02, z], [x + Math.cos(a) * r * 0.3, y0 + potH + h * t * 0.6, z + Math.sin(a) * r * 0.3], top], 0.006, M.twig, 6);
      st.castShadow = false; p.push(st);
      const lf = new THREE.Mesh(new THREE.PlaneGeometry(0.11 * leafS, 0.2 * leafS), X.leaf);
      lf.position.set(...top); lf.rotation.set(-0.6 + rnd() * 1.2, a + Math.PI / 2, (rnd() - 0.5) * 0.8);
      lf.castShadow = false; lf.receiveShadow = true; p.push(lf);
    }
    return p;
  }
  // jiboia pendente: ramos que caem com folhas pequenas
  function vine(x, y, z, len, n = 4, dir = [0, 0, 0]) {
    const p = [];
    for (let k = 0; k < n; k++) {
      const ox = (rnd() - 0.5) * 0.18 + dir[0], oz = (rnd() - 0.5) * 0.18 + dir[2], L = len * (0.5 + rnd() * 0.5);
      const pts = [[x, y, z], [x + ox * 0.6, y - L * 0.35, z + oz * 0.6], [x + ox, y - L, z + oz]];
      const st = tube(pts, 0.004, M.leaf, 10); st.castShadow = false; p.push(st);
      for (let j = 0; j < 7; j++) {
        const t = (j + 0.5) / 7, lx = x + ox * t, ly = y - L * t, lz = z + oz * t;
        const lf = new THREE.Mesh(new THREE.PlaneGeometry(0.075, 0.11), X.leaf);
        lf.position.set(lx + (rnd() - 0.5) * 0.05, ly, lz + (rnd() - 0.5) * 0.05); lf.rotation.set(-0.3 + rnd() * 0.6, rnd() * 6.28, 0.6 + rnd() * 0.6);
        lf.castShadow = false; p.push(lf);
      }
    }
    return p;
  }
  // quadro com moldura preta fina; normal (nx, nz) aponta para o ambiente
  function frame(x, y, z, w, h, nx, nz, tex) {
    const ry = Math.atan2(nx, nz);
    const mat = std({ map: tex, roughness: 0.7 });
    const art = new THREE.Mesh(new THREE.PlaneGeometry(w - 0.04, h - 0.04), mat);
    const f = [bx(-w / 2, w / 2, -h / 2, h / 2, -0.012, 0.012, M.black, 0.003), (() => { art.position.set(0, 0, 0.0125); return art; })()];
    f.forEach(m => { m.position.y += y; });
    return place(f, x + nx * 0.014, z + nz * 0.014, ry);
  }
  // portas de armário: frisos verticais finos
  const doorLines = (arr, axis, fixed, from, to, y1, y2, count) => {
    for (let i = 1; i < count; i++) {
      const v = from + (to - from) * i / count;
      arr.push(axis === 'x' ? bx(fixed - 0.003, fixed + 0.003, y1, y2, v - 0.003, v + 0.003, M.lacquerLine) : bx(v - 0.003, v + 0.003, y1, y2, fixed - 0.003, fixed + 0.003, M.lacquerLine));
    }
  };

  // ===== COZINHA
  const kitchen = room('cozinha');
  {
    item(kitchen, [
      bx(2.93, 3.62, 0.0, 1.85, 0.03, 0.72, X.inox, 0.03),
      bx(2.93, 3.62, 1.12, 1.13, 0.719, 0.725, M.black),
      bx(3.55, 3.57, 0.25, 1.05, 0.72, 0.76, X.inox, 0.008), bx(3.55, 3.57, 1.22, 1.75, 0.72, 0.76, X.inox, 0.008),
      bx(2.92, 3.64, 1.9, 2.52, 0.0, 0.62, M.walnut), bx(3.27, 3.29, 1.92, 2.5, 0.618, 0.624, M.cut),
    ]);
    const base = [
      bx(3.64, 6.252, 0.1, 0.88, 0.0, 0.60, M.cabBlack), bx(5.652, 6.252, 0.1, 0.88, 0.60, 1.12, M.cabBlack),
      bx(3.66, 6.24, 0.0, 0.1, 0.0, 0.54, M.black), bx(5.70, 6.24, 0.0, 0.1, 0.54, 1.08, M.black),
      ledBox(3.68, 5.6, 0.015, 0.03, 0.535, 0.545),
    ];
    for (const x of [4.18, 4.72, 5.15, 5.65]) base.push(bx(x - 0.003, x + 0.003, 0.12, 0.86, 0.598, 0.604, M.cut));
    base.push(bx(4.72, 5.15, 0.47, 0.476, 0.598, 0.604, M.cut), bx(4.72, 5.15, 0.68, 0.686, 0.598, 0.604, M.cut));
    base.push(bx(5.649, 5.655, 0.12, 0.86, 0.62, 1.10, M.cut));
    item(kitchen, base);
    const top = [
      bx(3.64, 3.90, 0.88, 0.92, 0, 0.62, M.blackStone, 0.004), bx(3.90, 4.40, 0.88, 0.92, 0, 0.08, M.blackStone, 0.004),
      bx(3.90, 4.40, 0.88, 0.92, 0.50, 0.62, M.blackStone, 0.004), bx(4.40, 6.252, 0.88, 0.92, 0, 0.62, M.blackStone, 0.004),
      bx(5.632, 6.252, 0.88, 0.92, 0.62, 1.12, M.blackStone, 0.004),
      bx(3.90, 4.40, 0.70, 0.705, 0.08, 0.50, X.inox), bx(3.90, 3.905, 0.70, 0.92, 0.08, 0.50, X.inox), bx(4.395, 4.40, 0.70, 0.92, 0.08, 0.50, X.inox),
      bx(3.90, 4.40, 0.70, 0.92, 0.08, 0.085, X.inox), bx(3.90, 4.40, 0.70, 0.92, 0.495, 0.50, X.inox),
      cyl(0.02, 0.32, X.inox, 4.15, 0.92, 0.04, 16),
      tube([[4.15, 1.22, 0.04], [4.15, 1.3, 0.06], [4.15, 1.31, 0.14], [4.15, 1.24, 0.22], [4.15, 1.12, 0.24]], 0.012, X.inox),
      bx(5.13, 5.77, 0.92, 0.925, 0.05, 0.57, M.blackGloss),
      cyl(0.03, 0.18, M.black, 3.75, 0.92, 0.1, 14),
    ];
    for (const [x, z] of [[5.28, 0.18], [5.62, 0.18], [5.28, 0.44], [5.62, 0.44]]) {
      const ring = mesh(new THREE.TorusGeometry(0.06, 0.007, 6, 24), X.inox, x, 0.935, z); ring.rotation.x = Math.PI / 2; top.push(ring);
      top.push(bx(x - 0.1, x + 0.1, 0.93, 0.945, z - 0.006, z + 0.006, M.black), bx(x - 0.006, x + 0.006, 0.93, 0.945, z - 0.1, z + 0.1, M.black));
    }
    // tábuas de nogueira apoiadas no frontão, fruteira com limões
    for (const [x, w, h] of [[4.70, 0.2, 0.4], [4.86, 0.16, 0.32]]) { const b = bx(-w / 2, w / 2, 0, h, -0.009, 0.009, M.walnut, 0.01); b.position.set(x, 0.92, 0.05); b.rotation.x = -0.12; top.push(b); }
    const bowl = mesh(new THREE.SphereGeometry(0.12, 20, 10, 0, Math.PI * 2, Math.PI / 2, Math.PI / 2), X.potWhite, 5.98, 1.0, 0.85); bowl.scale.y = 0.45; top.push(bowl);
    const lime = std({ color: '#6aa338', roughness: 0.5 });
    for (const [dx, dz, dy] of [[-0.04, -0.03, 0], [0.04, -0.02, 0], [0, 0.04, 0], [0.01, 0, 0.05]]) top.push(mesh(new THREE.SphereGeometry(0.035, 12, 8), lime, 5.98 + dx, 0.99 + dy, 0.85 + dz));
    item(kitchen, top);
    const up = [
      bx(3.64, 6.252, 1.5, 2.3, 0, 0.35, M.walnut), bx(5.902, 6.252, 1.5, 2.3, 0.35, 1.12, M.walnut),
      ledBox(3.66, 6.23, 1.495, 1.5, 0.29, 0.31), ledBox(6.0, 6.02, 1.495, 1.5, 0.37, 1.1),
    ];
    for (const x of [4.16, 4.68, 5.2, 5.72]) up.push(bx(x - 0.003, x + 0.003, 1.52, 2.28, 0.348, 0.354, M.cut));
    up.push(bx(5.899, 5.905, 1.52, 2.28, 0.74, 0.746, M.cut));
    item(kitchen, up);
    item(kitchen, vine(3.72, 1.5, 0.3, 0.55, 4, [0, 0, 0.06]), plant(6.08, 0.25, { potR: 0.07, potH: 0.12, h: 0.32, n: 12, spread: 0.18, y0: 0.92, leafS: 0.8 }));
    decal('cozinha', 2.93, 0.02, 6.252, 0.62, 0.55, 0.14); decal('cozinha', 5.652, 0.6, 6.252, 1.12, 0.5, 0.1);
  }

  // ===== SALA (estar e jantar)
  const living = room('sala');
  {
    // painel da TV: rack suspenso preto, TV 55"
    item(living, [
      bx(5.85, 6.235, 0.30, 0.62, 1.32, 3.0, M.cabBlack, 0.006), ledBox(5.86, 6.22, 0.295, 0.30, 1.34, 2.98),
      bx(5.848, 5.852, 0.32, 0.6, 2.15, 2.156, M.cut),
      bx(6.19, 6.235, 1.05, 1.75, 1.62, 2.84, M.screenOff, 0.004),
      (() => { const p = mesh(new THREE.PlaneGeometry(1.18, 0.66), tvMat, 6.188, 1.4, 2.23); p.rotation.y = -Math.PI / 2; p.castShadow = false; return p; })(),
      bx(5.95, 6.15, 0.62, 0.66, 2.55, 2.85, M.walnutDark, 0.01), bx(5.97, 6.13, 0.66, 0.69, 2.58, 2.82, X.linen, 0.008),
      cyl(0.05, 0.05, X.potWhite, 6.05, 0.62, 2.35, 18),
    ], plant(6.04, 1.55, { potR: 0.07, potH: 0.26, h: 0.42, n: 16, spread: 0.2, y0: 0.62, leafS: 0.9 }), vine(6.10, 0.62, 2.95, 0.6, 3, [-0.05, 0, 0]));
    // tapete de juta
    item(living, [bx(3.5, 5.62, 0, 0.014, 1.35, 3.75, X.jute, 0.006)]);
    // sofá taupe de 3 lugares, de frente para a TV
    {
      const L = X.taupe, x1 = 3.65, x2 = 4.62, z1 = 1.5, z2 = 3.6;
      const s = [
        bx(x1, x2, 0.12, 0.40, z1, z2, L, 0.04),
        bx(x1, x2, 0.12, 0.62, z1, z1 + 0.16, L, 0.06), bx(x1, x2, 0.12, 0.62, z2 - 0.16, z2, L, 0.06),
        bx(x1, x1 + 0.22, 0.12, 0.86, z1 + 0.15, z2 - 0.15, L, 0.07),
      ];
      const seats = 3, w = (z2 - z1 - 0.32) / seats;
      for (let i = 0; i < seats; i++) {
        const a = z1 + 0.16 + i * w;
        s.push(bx(x1 + 0.22, x2 - 0.01, 0.40, 0.56, a + 0.006, a + w - 0.006, L, 0.06));
        const c = bx(-0.1, 0.1, -0.24, 0.24, -w / 2 + 0.01, w / 2 - 0.01, L, 0.08); c.position.set(x1 + 0.34, 0.78, a + w / 2); c.rotation.z = 0.2; s.push(c);
      }
      for (const [z, mat] of [[z1 + 0.42, X.linen], [z2 - 0.46, X.taupeDark]]) { const p = bx(-0.08, 0.08, -0.2, 0.2, -0.2, 0.2, mat, 0.06); p.position.set(x1 + 0.4, 0.74, z); p.rotation.z = 0.28; p.rotation.y = 0.18; s.push(p); }
      // manta de tricô no braço
      s.push(bx(x1 + 0.05, x2 - 0.02, 0.62, 0.65, z2 - 0.2, z2 - 0.02, X.knit, 0.01), bx(x2 - 0.03, x2 + 0.005, 0.18, 0.64, z2 - 0.2, z2 - 0.02, X.knit, 0.008));
      for (const [x, z] of [[x1 + 0.08, z1 + 0.08], [x2 - 0.08, z1 + 0.08], [x1 + 0.08, z2 - 0.08], [x2 - 0.08, z2 - 0.08]]) s.push(cyl(0.015, 0.12, M.black, x, 0, z, 10));
      item(living, s);
    }
    // mesa lateral redonda com luminária de piso
    item(living, [cyl(0.22, 0.03, M.walnut, 3.95, 0.5, 3.85, 32), cyl(0.02, 0.5, M.black, 3.95, 0, 3.85, 10), cyl(0.16, 0.012, M.black, 3.95, 0, 3.85, 24),
      bx(3.88, 4.04, 0.53, 0.58, 3.78, 3.9, X.linen, 0.008)]);
    // mesa de jantar em nogueira, 4 cadeiras estofadas
    {
      const t = [bx(2.35, 3.15, 0.715, 0.75, 1.75, 2.95, M.walnut, 0.006)];
      for (const [x, z] of [[2.42, 1.82], [3.08, 1.82], [2.42, 2.88], [3.08, 2.88]]) t.push(bx(x - 0.025, x + 0.025, 0, 0.715, z - 0.025, z + 0.025, M.walnut));
      t.push(cyl(0.11, 0.08, X.potWhite, 2.75, 0.75, 2.35, 24, 0.14));
      item(living, t, plant(2.75, 2.35, { potR: 0.11, potH: 0.1, h: 0.22, n: 14, spread: 0.2, y0: 0.75, pot: X.potWhite, leafS: 0.7 }));
      const chair = (x, z, ry) => {
        const c = [bx(-0.21, 0.21, 0.44, 0.52, -0.21, 0.21, X.taupe, 0.04), bx(-0.24, -0.19, 0.5, 0.92, -0.2, 0.2, X.taupe, 0.03)];
        for (const [dx, dz] of [[0.17, 0.17], [0.17, -0.17], [-0.17, 0.17], [-0.17, -0.17]]) c.push(cyl(0.013, 0.44, M.walnutDark, dx, 0, dz, 8, 0.011));
        item(living, place(c, x, z, ry));
      };
      chair(2.12, 2.05, 0); chair(2.12, 2.65, 0); chair(3.38, 2.05, Math.PI); chair(3.38, 2.65, Math.PI);
      // pendente sobre a mesa
      item(living, [cyl(0.003, 0.82, M.black, 2.75, 1.78, 2.35, 6), cyl(0.23, 0.025, M.black, 2.75, 1.76, 2.35, 32, 0.06),
        (() => { const d = new THREE.Mesh(new THREE.CircleGeometry(0.2, 28), ledSoft); d.rotation.x = Math.PI / 2; d.position.set(2.75, 1.759, 2.35); return d; })(),
        halo(2.75, 1.62, 2.35, 0.9, '255,175,100', 0.55)]);
    }
    // figueira junto à porta da varanda
    item(living, plant(2.12, 3.82, { potR: 0.2, potH: 0.45, h: 1.25, n: 34, spread: 0.42, pot: M.cement, leafS: 1.15 }));
    decal('sala', 3.65, 1.5, 4.62, 3.6, 0.5, 0.14); decal('sala', 5.85, 1.32, 6.235, 3.0, 0.25, 0.1); decal('sala', 2.35, 1.75, 3.15, 2.95, 0.3, 0.2);
  }

  // ===== VARANDA E ÁREA DE SERVIÇO
  const terrace = room('varanda');
  {
    const arm = (x, z, ry) => {
      const c = [
        bx(-0.31, 0.31, 0.12, 0.42, -0.31, 0.31, X.taupe, 0.06), bx(-0.24, 0.3, 0.42, 0.52, -0.22, 0.22, X.taupe, 0.06),
        bx(-0.31, -0.17, 0.12, 0.8, -0.31, 0.31, X.taupe, 0.07),
        bx(-0.31, 0.31, 0.12, 0.62, -0.31, -0.22, X.taupe, 0.06), bx(-0.31, 0.31, 0.12, 0.62, 0.22, 0.31, X.taupe, 0.06),
      ];
      const pil = bx(-0.07, 0.07, -0.17, 0.17, -0.17, 0.17, X.taupeDark, 0.06); pil.position.set(-0.12, 0.7, 0); pil.rotation.z = 0.25; c.push(pil);
      for (const [dx, dz] of [[0.25, 0.25], [0.25, -0.25], [-0.25, 0.25], [-0.25, -0.25]]) c.push(cyl(0.013, 0.12, M.black, dx, 0, dz, 8));
      item(terrace, place(c, x, z, ry));
    };
    arm(1.28, 2.25, -Math.PI / 2); arm(1.28, 3.6, Math.PI / 2);
    item(terrace, [cyl(0.22, 0.03, M.walnut, 1.28, 0.45, 2.93, 32), cyl(0.02, 0.45, M.black, 1.28, 0, 2.93, 10), cyl(0.14, 0.012, M.black, 1.28, 0, 2.93, 24),
      bx(1.2, 1.38, 0.48, 0.51, 2.95, 3.07, X.linen, 0.006)], plant(1.32, 2.85, { potR: 0.06, potH: 0.1, h: 0.18, n: 12, spread: 0.14, y0: 0.48, leafS: 0.7 }));
    // máquina de lavar, tanque, armário com nicho e cestos
    item(terrace, [
      bx(1.38, 1.98, 0.0, 0.85, 0.02, 0.62, X.inox, 0.03), bx(1.40, 1.96, 0.85, 0.86, 0.04, 0.6, M.cabBlack),
      (() => { const d = mesh(new THREE.CylinderGeometry(0.19, 0.19, 0.02, 32), M.glassSmoke, 1.68, 0.45, 0.63); d.rotation.x = Math.PI / 2; return d; })(),
      (() => { const d = mesh(new THREE.TorusGeometry(0.2, 0.02, 8, 32), M.steelDark, 1.68, 0.45, 0.625); return d; })(),
      bx(2.08, 2.62, 0.62, 0.86, 0.26, 0.78, M.ceramic, 0.04), bx(2.13, 2.57, 0.83, 0.865, 0.31, 0.73, M.basin),
      cyl(0.015, 0.2, X.inox, 2.35, 0.86, 0.28, 12), bx(2.12, 2.14, 0, 0.62, 0.3, 0.32, X.inox), bx(2.56, 2.58, 0, 0.62, 0.3, 0.32, X.inox),
      bx(1.36, 2.0, 1.85, 2.4, 0, 0.36, M.cabBlack), bx(1.36, 2.0, 1.55, 1.57, 0, 0.32, M.walnut), bx(1.36, 2.0, 1.83, 1.85, 0, 0.36, M.walnut),
      ledBox(1.38, 1.98, 1.825, 1.83, 0.28, 0.3),
      bx(1.42, 1.62, 1.57, 1.72, 0.06, 0.28, X.rattan, 0.02), bx(1.7, 1.9, 1.57, 1.72, 0.06, 0.28, X.rattan, 0.02),
    ], plant(1.02, 0.32, { potR: 0.15, potH: 0.36, h: 0.9, n: 26, spread: 0.32, leafS: 1.1 }), vine(1.95, 1.55, 0.25, 0.5, 3));
    decal('varanda', 1.0, 2.0, 1.56, 3.85, 0.4, 0.1); decal('varanda', 1.38, 0.02, 2.62, 0.78, 0.45, 0.1);
  }

  // ===== BANHEIROS
  const bath = room('banho');
  {
    const vessel = (x, z, rx = 0.22, rz = 0.16) => { const g = new THREE.SphereGeometry(1, 32, 14, 0, Math.PI * 2, 0, Math.PI / 2); g.rotateX(Math.PI); g.scale(rx, 0.13, rz); return mesh(g, M.ceramic, x, 0.99, z); };
    const mirrorLED = (x1, x2, y1, y2, along, fixed, n) => {
      // espelho com cantos arredondados e luz de fundo
      const w = x2 - x1, h = y2 - y1, c = (x1 + x2) / 2;
      const mir = mesh(new THREE.ShapeGeometry(roundedRectShape(w, h, 0.08), 12), M.mirror);
      const back = mesh(new THREE.ShapeGeometry(roundedRectShape(w + 0.06, h + 0.06, 0.1), 12), ledSoft); back.castShadow = false;
      const ry = Math.atan2(n[0], n[1]);
      const ps = place([back, mir], along === 'x' ? c : fixed + n[0] * 0.012, along === 'x' ? fixed + n[1] * 0.012 : c, ry);
      ps[0].position.y = ps[1].position.y = (y1 + y2) / 2;
      ps[1].position.x += n[0] * 0.008; ps[1].position.z += n[1] * 0.008;
      return [...ps, halo(ps[1].position.x + n[0] * 0.08, (y1 + y2) / 2, ps[1].position.z + n[1] * 0.08, 1.2, '255,180,110', 0.28)];
    };
    const wc = (x, z, ry) => place([
      bx(-0.18, 0.18, 0.2, 0.4, -0.27, 0.27, M.ceramic, 0.13), bx(-0.17, 0.17, 0.4, 0.425, -0.26, 0.26, M.ceramic, 0.012),
      bx(-0.09, 0.09, 1.0, 1.15, -0.27 - 0.005 + 0, -0.27 + 0.004, M.black),
    ], x, z, ry);
    // banho 1 (lavabo): vaso e bancada na parede sul
    item(bath, wc(5.61, 5.18, Math.PI));
    item(bath, [bx(4.80, 5.30, 0.74, 0.86, 5.07, 5.45, M.blackStone, 0.008), vessel(5.05, 5.24, 0.19, 0.14),
      bx(5.035, 5.065, 1.0, 1.04, 5.36, 5.45, M.black), tube([[5.05, 1.02, 5.36], [5.05, 1.02, 5.3]], 0.01, M.black, 4)], mirrorLED(4.83, 5.27, 1.15, 1.85, 'x', 5.438, [0, -1]));
    // banho 2: vaso na parede norte, box no canto nordeste, bancada na parede leste
    item(bath, wc(5.12, 5.87, 0));
    item(bath, [
      bx(5.51, 5.52, 0.0, 2.05, 5.60, 6.12, M.glass), bx(5.51, 6.252, 0.0, 2.05, 6.515, 6.525, M.glass),
      bx(5.505, 5.525, 0, 2.06, 6.10, 6.12, M.black), bx(5.505, 6.252, 2.04, 2.06, 6.51, 6.53, M.black),
      cyl(0.13, 0.015, M.black, 5.88, 2.4, 6.06, 32), bx(5.875, 5.885, 2.415, 2.6, 6.055, 6.065, M.black),
      cyl(0.04, 0.02, M.black, 6.22, 1.0, 6.06, 20), bx(6.15, 6.24, 0.98, 1.02, 6.05, 6.07, M.black),
      bx(6.18, 6.25, 1.25, 1.55, 5.75, 6.3, M.wallDark), ledBox(6.19, 6.24, 1.545, 1.55, 5.76, 6.29),
    ]);
    item(bath, [bx(5.80, 6.24, 0.74, 0.86, 6.62, 7.22, M.blackStone, 0.008), vessel(6.0, 6.92, 0.15, 0.2),
      bx(6.16, 6.24, 1.0, 1.04, 6.905, 6.935, M.black)], mirrorLED(6.62, 7.2, 1.15, 1.9, 'z', 6.236, [-1, 0]));
    // banho 3 (suíte): box com janela alta, vaso e bancada na parede norte
    item(bath, wc(1.11, 6.65, 0));
    item(bath, [
      bx(0.69, 0.70, 0, 2.05, 6.68, 7.26, M.glass), bx(0.685, 0.705, 0, 2.06, 7.24, 7.26, M.black), bx(0.685, 0.705, 2.04, 2.06, 6.68, 7.26, M.black),
      cyl(0.13, 0.015, M.black, 0.35, 2.4, 7.15, 32), bx(0.345, 0.355, 2.415, 2.6, 7.145, 7.155, M.black),
      bx(0.1, 0.6, 1.1, 1.4, 7.6, 7.62, M.wallDark), ledBox(0.11, 0.59, 1.395, 1.4, 7.59, 7.615),
      cyl(0.03, 0.14, M.black, 0.25, 1.1, 7.6, 12), cyl(0.03, 0.14, M.black, 0.35, 1.1, 7.6, 12),
      cyl(0.04, 0.02, M.black, 0.35, 1.0, 7.61, 20),
    ], vine(0.5, 1.4, 7.58, 0.35, 2));
    item(bath, [bx(1.50, 2.20, 0.74, 0.86, 6.38, 6.86, M.blackStone, 0.008), vessel(1.85, 6.6), bx(1.835, 1.865, 1.0, 1.04, 6.38, 6.47, M.black),
      bx(2.0, 2.12, 0.86, 1.06, 6.5, 6.6, X.potWhite, 0.02), bx(2.15, 2.2, 0.6, 0.74, 6.5, 6.8, X.linen, 0.01)],
    mirrorLED(1.55, 2.15, 1.15, 1.95, 'x', 6.392, [0, 1]), plant(1.62, 6.48, { potR: 0.05, potH: 0.16, h: 0.3, n: 12, spread: 0.12, y0: 0.86, leafS: 0.6 }));
    decal('banho', 4.80, 5.07, 5.80, 5.45, 0.25, 0.08); decal('banho', 1.50, 6.38, 2.20, 6.86, 0.25, 0.08);
  }

  // ===== DORMITÓRIO 1 (suíte)
  const suite = room('dormitorio1');
  {
    // guarda-roupa de ponta a ponta na parede de 4,20 m (abaixo da porta)
    const w = [bx(3.0, 3.596, 0, 2.5, 7.35, 10.575, M.lacquer, 0.004), bx(3.0, 3.596, 2.5, H, 7.35, 10.575, M.wall)];
    doorLines(w, 'x', 3.0, 7.35, 10.575, 0.03, 2.47, 6);
    for (let i = 0; i < 6; i++) { const z = 7.35 + (10.575 - 7.35) * (i + (i % 2 ? 0.1 : 0.9)) / 6; w.push(bx(2.995, 3.0, 0.7, 1.6, z - 0.006, z + 0.006, M.steelDark)); }
    item(suite, w);
    // cama queen: base, colchão, edredom branco, manta de tricô, travesseiros
    item(suite, [bx(0.72, 2.32, 0.1, 0.3, 8.5, 10.48, X.greyFab, 0.02), bx(0.62, 2.42, 0.3, 1.25, 10.47, 10.575, X.greyFab, 0.03)]);
    item(suite, [
      bx(0.76, 2.28, 0.3, 0.55, 8.52, 10.46, M.bedWhite, 0.06),
      bx(0.70, 2.34, 0.5, 0.62, 8.46, 10.0, M.bedWhite, 0.05), bx(0.69, 0.73, 0.3, 0.6, 8.46, 10.0, M.bedWhite, 0.015), bx(2.31, 2.35, 0.3, 0.6, 8.46, 10.0, M.bedWhite, 0.015),
      bx(0.70, 2.34, 0.61, 0.67, 8.6, 9.1, X.knit, 0.03), bx(0.68, 0.71, 0.4, 0.66, 8.6, 9.1, X.knit, 0.01), bx(2.33, 2.36, 0.4, 0.66, 8.6, 9.1, X.knit, 0.01),
    ]);
    {
      const pil = [];
      for (const x of [1.13, 1.91]) { const p = bx(-0.36, 0.36, -0.1, 0.1, -0.24, 0.24, M.bedWhite, 0.08); p.position.set(x, 0.72, 10.25); p.rotation.x = 0.3; pil.push(p); }
      const lum = bx(-0.3, 0.3, -0.08, 0.08, -0.06, 0.06, X.greyFab, 0.05); lum.position.set(1.52, 0.7, 10.05); lum.rotation.x = 0.25; pil.push(lum);
      item(suite, pil);
    }
    // criados-mudos em nogueira com luminárias de cúpula preta
    for (const x of [0.37, 2.67]) {
      item(suite, [bx(x - 0.24, x + 0.24, 0.12, 0.55, 10.1, 10.56, M.walnut, 0.008), bx(x - 0.23, x + 0.23, 0.335, 0.34, 10.096, 10.1, M.cut),
        cyl(0.07, 0.015, M.black, x, 0.55, 10.33, 20), cyl(0.008, 0.2, M.black, x, 0.565, 10.33, 8),
        mesh(new THREE.SphereGeometry(0.1, 20, 10, 0, Math.PI * 2, 0, Math.PI / 2), M.black, x, 0.75, 10.33),
        (() => { const d = new THREE.Mesh(new THREE.CircleGeometry(0.085, 20), ledSoft); d.rotation.x = Math.PI / 2; d.position.set(x, 0.749, 10.33); return d; })(),
        halo(x, 0.7, 10.33, 0.7, '255,175,100', 0.55)]);
    }
    item(suite, plant(0.3, 10.25, { potR: 0.045, potH: 0.2, h: 0.28, n: 10, spread: 0.12, y0: 0.55, leafS: 0.6 }));
    // quadro de paisagem sobre a cabeceira
    item(suite, frame(1.52, 1.78, 10.575, 1.1, 0.62, 0, -1, artTexture('wide', 3)));
    // tapete e cortinas (voil + blackout grafite)
    item(suite, [bx(0.35, 2.7, 0, 0.012, 8.2, 10.05, X.linen, 0.004)]);
    {
      const wavy = (w, amp, k) => {
        const g = new THREE.PlaneGeometry(w, H - 0.06, Math.ceil(w * 40), 1), p = g.attributes.position;
        for (let i = 0; i < p.count; i++) { const x = p.getX(i); p.setZ(i, Math.sin(x * k) * amp + Math.sin(x * k * 0.3) * amp * 0.3); }
        g.computeVertexNormals(); worldUV(g); return g;
      };
      const sheer = mesh(wavy(1.9, 0.012, 18), M.sheer); sheer.rotation.y = Math.PI / 2; sheer.position.set(0.08, (H - 0.06) / 2 + 0.02, 9.16);
      const drape = mesh(wavy(0.48, 0.035, 26), M.drape); drape.rotation.y = Math.PI / 2; drape.position.set(0.12, (H - 0.06) / 2 + 0.02, 10.2);
      const drape2 = mesh(wavy(0.4, 0.035, 26), M.drape); drape2.rotation.y = Math.PI / 2; drape2.position.set(0.12, (H - 0.06) / 2 + 0.02, 8.05);
      [sheer, drape, drape2].forEach(m => { m.castShadow = false; });
      item(suite, [sheer, drape, drape2, bx(0.03, 0.06, 2.53, 2.55, 7.8, 10.5, M.black)]);
    }
    decal('dormitorio1', 0.72, 8.5, 2.32, 10.575, 0.45, 0.16); decal('dormitorio1', 3.0, 7.35, 3.596, 10.575, 0.35, 0.1);
  }

  // ===== DORMITÓRIO 2 (adolescente)
  const q2 = room('dormitorio2');
  {
    const w = [bx(5.70, 6.252, 0, 2.5, 7.39, 9.85, M.lacquer, 0.004), bx(5.70, 6.252, 2.5, H, 7.39, 9.85, M.wall)];
    doorLines(w, 'x', 5.70, 7.39, 9.85, 0.03, 2.47, 4);
    for (let i = 0; i < 4; i++) { const z = 7.39 + (9.85 - 7.39) * (i + (i % 2 ? 0.1 : 0.9)) / 4; w.push(bx(5.695, 5.70, 0.7, 1.6, z - 0.006, z + 0.006, M.steelDark)); }
    item(q2, w);
    // cama de solteiro com colcha rosa em favo
    item(q2, [bx(4.62, 5.52, 0.1, 0.3, 7.39, 9.42, X.linen, 0.02), bx(4.64, 5.50, 0.3, 0.52, 7.41, 9.40, M.bedWhite, 0.05)]);
    item(q2, [
      bx(4.60, 5.54, 0.48, 0.58, 7.85, 9.44, X.pink, 0.04), bx(4.59, 4.62, 0.22, 0.56, 7.85, 9.44, X.pink, 0.012), bx(5.52, 5.55, 0.22, 0.56, 7.85, 9.44, X.pink, 0.012),
      bx(4.60, 5.54, 0.22, 0.56, 9.43, 9.46, X.pink, 0.012),
    ]);
    {
      const pil = [];
      for (const [x, z, mat, s, rx] of [[5.07, 7.5, M.bedWhite, 1, 0.35], [5.07, 7.6, X.pinkSoft, 0.82, 0.3], [5.07, 7.7, X.greyFab, 0.62, 0.25]]) {
        const p = bx(-0.36 * s, 0.36 * s, -0.1 * s, 0.1 * s, -0.14 * s, 0.14 * s, mat, 0.06 * s); p.position.set(x, 0.64, z); p.rotation.x = rx; pil.push(p);
      }
      item(q2, pil);
    }
    item(q2, frame(4.92, 1.55, 7.39, 0.34, 0.46, 0, 1, artTexture('tall', 5)), frame(5.32, 1.5, 7.39, 0.26, 0.36, 0, 1, artTexture('flower', 9)));
    // escrivaninha sob a janela, cadeira rosa, estante metálica com livros e jiboia
    {
      const d = [bx(3.80, 5.68, 0.72, 0.755, 10.0, 10.565, M.walnut, 0.006), bx(3.82, 3.85, 0, 0.72, 10.02, 10.55, M.walnut), bx(5.2, 5.66, 0.2, 0.72, 10.02, 10.55, M.walnut, 0.004),
        bx(5.2, 5.66, 0.46, 0.465, 9.995, 10.0, M.cut)];
      const lap = bx(-0.16, 0.16, 0, 0.016, -0.11, 0.11, M.steel, 0.005); lap.position.set(4.35, 0.755, 10.25); lap.rotation.y = 0.1; d.push(lap);
      d.push(cyl(0.035, 0.1, M.concretePot, 4.0, 0.755, 10.42, 16), bx(4.95, 5.15, 0.755, 0.79, 10.3, 10.45, X.linen, 0.004), cyl(0.06, 0.2, X.pinkSoft, 4.75, 0.755, 10.42, 20, 0.04));
      for (let i = 0; i < 3; i++) d.push(cyl(0.004, 0.11, M.black, 3.99 + i * 0.012, 0.8, 10.42 + (i - 1) * 0.01, 4));
      item(q2, d, plant(4.75, 10.42, { potR: 0.001, potH: 0.2, h: 0.26, n: 3, spread: 0.12, y0: 0.755, leafS: 1.6 }));
      const ch = [cyl(0.24, 0.08, X.pink, 0, 0.42, 0, 32), arcBack(0.21, 0.255, Math.PI - 1.3, Math.PI + 1.3, 0.5, 0.82, X.pink)];
      for (const [dx, dz] of [[0.16, 0.16], [0.16, -0.16], [-0.16, 0.16], [-0.16, -0.16]]) ch.push(cyl(0.012, 0.42, M.black, dx, 0, dz, 8, 0.01));
      item(q2, place(ch, 4.55, 9.72, -Math.PI / 2));
      const sh = [];
      for (const [x, z] of [[3.77, 9.0], [4.08, 9.0], [3.77, 9.9], [4.08, 9.9]]) sh.push(bx(x - 0.01, x + 0.01, 0, 2.1, z - 0.01, z + 0.01, M.black));
      for (const y of [0.4, 0.85, 1.3, 1.75, 2.08]) sh.push(bx(3.76, 4.09, y, y + 0.025, 8.99, 9.91, M.walnut));
      const tones = [X.pinkSoft, X.linen, M.bedWhite, X.taupe, M.paper];
      for (const y of [0.425, 0.875, 1.325]) for (let i = 0; i < 6; i++) sh.push(bx(3.82, 4.03, y, y + 0.18 + (i % 3) * 0.03, 9.1 + i * 0.05, 9.14 + i * 0.05, tones[(i + y * 10 | 0) % 5]));
      item(q2, sh, vine(3.93, 2.1, 9.45, 0.9, 5), plant(3.93, 9.7, { potR: 0.07, potH: 0.12, h: 0.2, n: 10, spread: 0.14, y0: 1.775, leafS: 0.7 }));
    }
    {
      const g = new THREE.PlaneGeometry(1.6, H - 0.06, 64, 1), p = g.attributes.position;
      for (let i = 0; i < p.count; i++) { const x = p.getX(i); p.setZ(i, Math.sin(x * 18) * 0.012); }
      g.computeVertexNormals(); worldUV(g);
      const sheer = mesh(g, M.sheer, 5.0, (H - 0.06) / 2 + 0.02, 10.5); sheer.castShadow = false;
      item(q2, [sheer, bx(4.15, 5.85, 2.53, 2.55, 10.48, 10.51, M.black)]);
    }
    decal('dormitorio2', 4.62, 7.39, 5.52, 9.42, 0.4, 0.14); decal('dormitorio2', 5.70, 7.39, 6.252, 9.85, 0.35, 0.1); decal('dormitorio2', 3.80, 10.0, 5.68, 10.565, 0.25, 0.1);
  }

  // ------------------------------------------------ luzes noturnas
  const nightLights = [];
  function pl(x, y, z, intensity, distance, color = '#ffb070', shadow = false) {
    const l = new THREE.PointLight(color, 0, distance, 2);
    l.position.set(x, y, z); l.userData.max = intensity;
    if (shadow) {
      l.castShadow = true; l.shadow.mapSize.set(512, 512);
      l.shadow.camera.near = 0.08; l.shadow.camera.far = distance;
      l.shadow.bias = -0.004; l.shadow.normalBias = 0.03; l.shadow.radius = 4;
      l.shadow.autoUpdate = false;
    }
    nightLights.push(l); root.add(l);
  }
  pl(4.4, 2.25, 2.4, 6.0, 6.5, undefined, true);   // estar
  pl(4.8, 1.4, 0.7, 2.2, 3.0);                     // cozinha
  pl(2.75, 1.55, 2.35, 2.6, 3.5);                  // pendente do jantar
  pl(1.28, 2.2, 2.9, 2.6, 3.6);                    // varanda
  pl(3.2, 2.2, 5.3, 3.0, 4.2);                     // circulação
  pl(1.6, 2.1, 9.2, 4.5, 4.6, undefined, true);    // suíte
  pl(4.9, 2.1, 8.9, 4.0, 4.2, undefined, true);    // dormitório 2
  pl(5.4, 2.1, 6.4, 1.8, 2.4); pl(1.2, 2.1, 7.0, 1.8, 2.4); pl(5.4, 2.1, 4.85, 1.4, 2.0); pl(1.8, 2.1, 0.7, 1.4, 2.4);

  root.traverse(o => { if (o.isMesh && o.material && (o.material.transparent || o.material.isMeshBasicMaterial)) o.castShadow = false; });
  for (const r of Object.values(rooms)) for (const it of r.userData.items) it.userData.baseY = it.position.y;
  for (const [key, d] of Object.entries(roomDecals)) { rooms[key].userData.decals = d; root.add(d.group); }
  walls.sort((a, b) => a.userData.center.z - b.userData.center.z);

  return {
    root, M, walls, floors, floorMats, floorDecals, aoGroup, openings, finishes, ceilings, coves, rooms, nightLights, glows,
    leds: [led, ledSoft], screens: [tvMat, laptopMat], allMaterials,
  };
}
