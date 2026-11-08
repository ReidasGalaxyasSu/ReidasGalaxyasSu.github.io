// Modelo 3D do apartamento, construído a partir das cotas e da escala da nova planta (72,4 px por metro).
// Sistema de coordenadas (metros): x → leste (direita da planta), z → sul (para baixo na planta), y → altura.
// Origem: canto interno noroeste da sala (face interna das paredes norte e oeste).
import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import * as T from './textures.js';

export const H = 2.7; // pé-direito

// Recorte da planta usada na folha de papel: px (14,14)–(914,720) da imagem original, origem em px (130,131), 72,4 px/m
const PX = 72.4;
export const PLAN_BOUNDS = { x0: (14 - 130) / PX, x1: (914 - 130) / PX, z0: (14 - 131) / PX, z1: (720 - 131) / PX };

// Medidas-chave (m) lidas da planta
const TW = 0.15;      // espessura das paredes
const X_R = 8.64;     // face interna da parede leste
const X_B = 4.43;     // sala (parte alta) | banho e dormitório
const X_P = 3.87;     // divisória sala | dormitório (parede da TV)
const Z_STEP = 2.19;  // dente da divisória
const Z_S = 4.38;     // face interna da parede sul do dormitório (e do vidro da sala)
const Z_F = 6.32;     // borda da laje do terraço

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
  const wallTex = withRepeat(T.concrete('#c4bfb7', 2, [1, 1], 0.022, 512), 2.4);
  const wallDarkTex = withRepeat(T.concrete('#2f2d2b', 4, [1, 1], 0.05, 512), 2.0);
  const floorTex = withRepeat(T.concrete('#6d818b', 5, [1, 1], 0.05, 1024), 3.2);
  const terraceTex = withRepeat(T.tiles('#76858c', 6, 0.6, 1024), 1.2);
  const showerTex = withRepeat(T.tiles('#6f7173', 8, 0.3, 512), 0.6);
  const walnutTex = withRepeat(T.wood([62, 38, 25], 9), 1.2);
  const walnutDarkTex = withRepeat(T.wood([40, 25, 17], 8), 1.2);
  const blackOakTex = withRepeat(T.wood([34, 31, 29], 21), 1.4);
  const leatherTex = withRepeat(T.leather('#0f0e0e', 12), 1.2);
  const redLeatherTex = withRepeat(T.leather('#a8281f', 14), 0.9);
  const taupeTex = withRepeat(T.leather('#5b4a45', 15), 0.9);
  const cementTex = withRepeat(T.concrete('#8f8c88', 5), 1.4);
  return {
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

// ---------------------------------------------------------------- construção
export function buildHouse() {
  const M = makeMaterials();
  const root = new THREE.Group();

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
  for (const sl of [bx(-TW - 0.05, 8.84, -0.3, -0.002, -TW - 0.05, 4.58, M.slab), bx(-TW - 0.05, 4.07, -0.3, -0.002, 4.58, Z_F, M.slab)]) {
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
  const floorMats = [M.floorMicro, M.floorTerrace, M.floorShower].map(m => { const c = m.clone(); c.transparent = true; c.opacity = 0; allMaterials.add(c); return c; });
  const [fMicro, fTerrace, fShower] = floorMats;
  // sala
  floorRect(0, 0, X_B, Z_STEP, fMicro);
  floorRect(0, Z_STEP, X_P, Z_S + TW, fMicro);          // até a soleira do vidro
  // dormitório (inclui o vão das portas)
  floorRect(4.02, 2.34, X_R, Z_S, fMicro);
  floorRect(X_B, 1.48, X_R, 2.34, fMicro);
  floorRect(6.98, 0, X_R, 1.48, fMicro);
  floorRect(X_B, 1.48, X_B + TW, Z_STEP, fMicro);
  floorRect(4.67, 1.33, 5.36, 1.48, fMicro);
  // banho e box
  floorRect(4.58, 0, 6.10, 1.33, fMicro);
  floorRect(6.10, 0.40, 6.84, 1.33, fShower);
  floorRect(6.26, 0, 6.84, 0.26, fMicro);        // cavidade atrás do box
  // terraço
  floorRect(0, Z_S + TW, X_P, Z_F, fTerrace);
  floorRect(X_P, 5.34, X_P + TW, Z_F, fTerrace);
  root.add(floors);

  // Sombras de contato no pé das paredes (ambient occlusion falso): faixas com degradê, num só desenho
  const aoGroup = new THREE.Group();
  const aoFloorMat = new THREE.MeshBasicMaterial({ map: aoEdgeTexture(), transparent: true, opacity: 0, depthWrite: false, side: THREE.DoubleSide, polygonOffset: true, polygonOffsetFactor: -2, polygonOffsetUnits: -2 });
  aoFloorMat.userData.max = 0.36;
  const floorDecals = [aoFloorMat];
  {
    const geos = [];
    // (x1,z1)→(x2,z2) ao longo da face da parede; (nx,nz) aponta para dentro do ambiente
    const foot = (x1, z1, x2, z2, nx, nz, w = 0.32) => {
      const pos = [x1, 0, z1, x2, 0, z2, x2 + nx * w, 0, z2 + nz * w, x1 + nx * w, 0, z1 + nz * w];
      const g = new THREE.BufferGeometry();
      g.setAttribute('position', new THREE.Float32BufferAttribute(pos.map((v, i) => i % 3 === 1 ? 0.0046 : v), 3));
      g.setAttribute('normal', new THREE.Float32BufferAttribute([0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0], 3));
      g.setAttribute('uv', new THREE.Float32BufferAttribute([0, 0, 1, 0, 1, 1, 0, 1], 2));
      g.setIndex([0, 1, 2, 0, 2, 3]);
      geos.push(g);
    };
    // sala
    foot(0, 0, X_B, 0, 0, 1); foot(0, 0, 0, Z_S, 1, 0); foot(X_B, 0, X_B, 1.48, -1, 0);
    foot(X_P, 2.34, X_P, Z_S, -1, 0); foot(X_P, Z_STEP, X_B, Z_STEP, 0, -1);
    // dormitório
    foot(4.02, Z_S, X_R, Z_S, 0, -1); foot(X_R, 0, X_R, Z_S, -1, 0); foot(4.58, 1.48, 6.98, 1.48, 0, 1); foot(6.98, 0, 6.98, 1.48, 1, 0);
    // banho
    foot(4.58, 0, 6.10, 0, 0, 1); foot(4.58, 0, 4.58, 1.33, 1, 0); foot(4.58, 1.33, 6.10, 1.33, 0, -1);
    // terraço
    foot(0, Z_S + TW, 0, Z_F - TW, 1, 0); foot(X_P, Z_S + TW, X_P, 5.34, -1, 0); foot(0, Z_S + TW, X_P, Z_S + TW, 0, 1);
    const m = new THREE.Mesh(mergeGeometries(geos), aoFloorMat);
    m.renderOrder = 1;
    aoGroup.add(m);
  }
  root.add(aoGroup);

  // ------------------------------------------------ paredes (retângulos que não se sobrepõem)
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
  const WIN = { y1: 0.8, y2: 2.25 };
  const win1 = { a: 4.60, b: 5.62, ...WIN }, win2 = { a: 6.80, b: 8.00, ...WIN };
  wall(-TW, 8.79, -TW, 0, [{ a: 1.27, b: 2.11, y1: 0, y2: DOOR }]);                 // norte (porta de entrada)
  wall(-TW, 0, 0, Z_F);                                                            // oeste (sala, cozinha e terraço)
  wall(X_R, 8.79, 0, Z_S + TW);                                                    // leste
  wall(4.02, X_R, Z_S, Z_S + TW, [win1, win2]);                                    // sul do dormitório (janelas)
  wall(X_P, 4.02, 2.34, 5.34);                                                     // divisória (parede da TV) e lateral do terraço
  wall(X_P, X_B + TW, Z_STEP, 2.34);                                               // dente da divisória
  wall(X_B, X_B + TW, 0, Z_STEP, [{ a: 1.48, b: Z_STEP, y1: 0, y2: DOOR }]);       // sala | banho, com porta do dormitório
  wall(4.58, 6.98, 1.33, 1.48, [{ a: 4.67, b: 5.36, y1: 0, y2: DOOR }]);           // banho, lado sul, com porta
  wall(6.84, 6.98, 0, 1.33);                                                       // banho, lado leste
  wall(0, X_P, Z_S, Z_S + TW, [{ a: 0, b: X_P, y1: 0, y2: 2.5 }], [M.wall, M.wall, M.wall, M.wall, M.wall, M.wall]); // verga sobre o vidro da sala

  // Bloco do box: parede lateral + parede de fundo (0,14) com nicho; atrás dela, a pequena cavidade 0,58 × 0,25 do desenho
  {
    const g = new THREE.Group(), wm = wallMats;
    const add = (x1, x2, y1, y2, z1, z2) => { const m = bx(x1, x2, y1, y2, z1, z2, M.wall); m.material = wm; g.add(m); };
    add(6.10, 6.26, 0, H, 0, 0.40);                 // lateral oeste
    add(6.26, 6.84, 0, 1.08, 0.26, 0.40);           // parede do fundo do box, com nicho (y 1,08 – 1,52)
    add(6.26, 6.84, 1.52, H, 0.26, 0.40);
    add(6.26, 6.34, 1.08, 1.52, 0.26, 0.40);
    add(6.76, 6.84, 1.08, 1.52, 0.26, 0.40);
    add(6.34, 6.76, 1.08, 1.52, 0.26, 0.30);        // fundo do nicho
    g.userData.center = new THREE.Vector3(6.47, 0, 0.2);
    walls.push(g); root.add(g);
  }

  // Guarda-corpo do terraço: mureta baixa + barras verticais pretas (como no desenho)
  function rail(x1, z1, x2, z2) {
    const g = new THREE.Group(), alongX = (x2 - x1) > (z2 - z1);
    const cx = (x1 + x2) / 2, cz = (z1 + z2) / 2;
    g.add(bx(x1, x2, 0, 0.1, z1, z2, wallMats));                                    // mureta
    if (alongX) {
      g.add(bx(x1, x2, 1.06, 1.12, cz - 0.03, cz + 0.03, M.black));                  // corrimão
      g.add(bx(x1, x2, 0.1, 0.14, cz - 0.015, cz + 0.015, M.black));
      for (let x = x1 + 0.06; x < x2; x += 0.16) g.add(bx(x - 0.008, x + 0.008, 0.14, 1.06, cz - 0.008, cz + 0.008, M.black));
    } else {
      g.add(bx(cx - 0.03, cx + 0.03, 1.06, 1.12, z1, z2, M.black));
      g.add(bx(cx - 0.015, cx + 0.015, 0.1, 0.14, z1, z2, M.black));
      for (let z = z1 + 0.06; z < z2; z += 0.16) g.add(bx(cx - 0.008, cx + 0.008, 0.14, 1.06, z - 0.008, z + 0.008, M.black));
    }
    mergeByMaterial(g);
    g.userData.center = new THREE.Vector3(cx, 0, cz);
    walls.push(g); root.add(g);
  }
  rail(0, Z_F - TW, X_P + TW, Z_F);
  rail(X_P, 5.34, X_P + TW, Z_F - TW);

  // ------------------------------------------------ vidro de correr (sala | terraço), portas e janelas
  const openings = new THREE.Group();
  {
    // porta de entrada, em nogueira escura, com fechadura e puxador em aço
    openings.add(bx(1.27, 1.30, 0, DOOR, -TW, 0, M.black), bx(2.08, 2.11, 0, DOOR, -TW, 0, M.black), bx(1.27, 2.11, DOOR - 0.03, DOOR, -TW, 0, M.black));
    openings.add(bx(1.30, 2.08, 0, DOOR - 0.03, -0.095, -0.055, M.walnutDark));
    for (let i = 0; i < 6; i++) openings.add(bx(1.30 + i * 0.13, 1.302 + i * 0.13, 0.02, DOOR - 0.05, -0.056, -0.052, M.black));
    openings.add(bx(1.96, 1.985, 0.9, 1.5, -0.052, -0.03, M.steel, 0.008));

    // sala | terraço: esquadria preta de 4 folhas, em dois trilhos
    const fr = M.black, gz1 = Z_S + 0.045, gz2 = Z_S + 0.105;
    openings.add(bx(0, X_P, 0, 0.05, Z_S, Z_S + TW, M.steel));                            // soleira
    openings.add(bx(0, X_P, 2.46, 2.5, Z_S, Z_S + TW, fr));
    for (let i = 0; i <= 4; i++) {
      const x = i * X_P / 4;
      openings.add(bx(Math.max(0, x - 0.03), Math.min(X_P, x + 0.03), 0.05, 2.46, i % 2 ? gz2 - 0.02 : gz1 - 0.02, i % 2 ? gz2 + 0.03 : gz1 + 0.03, fr));
    }
    for (let i = 0; i < 4; i++) {
      const x1 = i * X_P / 4 + 0.03, x2 = (i + 1) * X_P / 4 - 0.03, zz = i % 2 ? gz2 : gz1;
      openings.add(bx(x1, x2, 0.06, 2.45, zz - 0.004, zz + 0.004, M.glass));
      openings.add(bx(x1, x2, 0.05, 0.1, zz - 0.02, zz + 0.02, fr), bx(x1, x2, 2.41, 2.46, zz - 0.02, zz + 0.02, fr));
    }
    openings.add(bx(0.93, 0.95, 1.0, 1.4, gz2 + 0.02, gz2 + 0.035, M.steel), bx(2.9, 2.92, 1.0, 1.4, gz1 - 0.035, gz1 - 0.02, M.steel));

    // janelas do dormitório: caixilho preto dentro do vão, duas folhas de correr, peitoril em concreto
    for (const w of [win1, win2]) {
      const t = 0.045, y1 = w.y1 + 0.02, mid = (w.a + w.b) / 2;
      openings.add(bx(w.a - 0.02, w.b + 0.02, w.y1, y1, Z_S - 0.02, Z_S + TW + 0.02, M.concretePot));       // peitoril
      openings.add(bx(w.a, w.b, y1, y1 + t, Z_S, Z_S + TW, M.black), bx(w.a, w.b, w.y2 - t, w.y2, Z_S, Z_S + TW, M.black));
      openings.add(bx(w.a, w.a + t, y1 + t, w.y2 - t, Z_S, Z_S + TW, M.black), bx(w.b - t, w.b, y1 + t, w.y2 - t, Z_S, Z_S + TW, M.black));
      openings.add(bx(mid - 0.03, mid + 0.03, y1 + t, w.y2 - t, Z_S + 0.03, Z_S + 0.11, M.black));
      openings.add(bx(w.a + t, mid, y1 + t, w.y2 - t, Z_S + 0.055, Z_S + 0.059, M.glass), bx(mid, w.b - t, y1 + t, w.y2 - t, Z_S + 0.085, Z_S + 0.089, M.glass));
      openings.add(bx(mid - 0.05, mid - 0.035, 1.2, 1.5, Z_S + 0.025, Z_S + 0.03, M.steel));
    }

    // portas internas abertas a 90°, como no desenho
    for (const z of [1.48, Z_STEP]) openings.add(bx(X_B, X_B + TW, 0, DOOR, z - (z > 2 ? 0.02 : 0), z + (z > 2 ? 0 : 0.02), M.black));
    openings.add(bx(X_B, X_B + TW, DOOR - 0.03, DOOR, 1.48, Z_STEP, M.black));
    openings.add(bx(X_B + TW, 5.2, 0, DOOR - 0.04, 1.505, 1.54, M.walnutDark), bx(4.98, 5.12, 1.0, 1.03, 1.54, 1.565, M.steel, 0.004));
    for (const x of [4.67, 5.36]) openings.add(bx(x - (x < 5 ? 0.02 : 0), x + (x < 5 ? 0 : 0.02), 0, DOOR, 1.33, 1.48, M.black));
    openings.add(bx(4.67, 5.36, DOOR - 0.03, DOOR, 1.33, 1.48, M.black));
    openings.add(bx(4.69, 4.725, 0, DOOR - 0.04, 0.72, 1.33, M.walnutDark), bx(4.725, 4.745, 1.0, 1.04, 0.74, 0.9, M.steel));
  }
  mergeByMaterial(openings);
  root.add(openings);

  // Acabamentos que acompanham as paredes (sobem junto com elas)
  const finishes = new THREE.Group();
  finishes.add(bx(X_P - 0.015, X_P, 0, H, 2.34, Z_S, M.wallDark));                   // painel grafite atrás da TV
  finishes.add(bx(X_P - 0.015, X_B, 0, H, Z_STEP - 0.015, Z_STEP, M.wallDark));      // continua na face norte do dente
  finishes.add(bx(0.0, 0.012, 0.92, 1.5, 0.90, Z_S, M.blackStone));                     // painel de pedra atrás da bancada
  // rodapés grafite
  const skirt = (x1, x2, z1, z2) => finishes.add(bx(x1, x2, 0, 0.08, z1, z2, M.black));
  skirt(0, 1.27, 0, 0.012); skirt(2.11, X_B, 0, 0.012);                               // sala, parede norte
  skirt(X_B - 0.012, X_B, 0, 1.48);                                                   // sala, face do banho
  skirt(5.36, 6.98, 1.48, 1.492); skirt(8.628, X_R, 2.2, Z_S);
  skirt(5.62, 6.80, Z_S - 0.012, Z_S); skirt(8.0, X_R, Z_S - 0.012, Z_S);              // dormitório
  mergeByMaterial(finishes);
  root.add(finishes);

  // Forros (só são vistos de dentro: a face aponta para baixo)
  const ceilings = new THREE.Group();
  {
    const cmat = std({ map: withRepeat(T.concrete('#d6d2cb', 22, [1, 1], 0.02, 512), 2.5), roughness: 0.95 });
    cmat.shadowSide = THREE.DoubleSide;
    const ceil = (x1, z1, x2, z2) => {
      const g = new THREE.PlaneGeometry(x2 - x1, z2 - z1);
      g.rotateX(Math.PI / 2);
      g.translate((x1 + x2) / 2, H, (z1 + z2) / 2);
      const cm = new THREE.Mesh(g, cmat); cm.castShadow = true; cm.receiveShadow = true;
      ceilings.add(cm);
    };
    ceil(-TW, -TW, X_B + TW, Z_STEP + TW); ceil(-TW, Z_STEP + TW, X_P + TW, Z_F);
    ceil(X_B + TW, -TW, 8.79, Z_S + TW); ceil(X_P + TW, Z_STEP, X_B + TW, Z_S + TW);
    // spots embutidos
    const spot = (x, z) => {
      ceilings.add(cyl(0.05, 0.012, M.black, x, H - 0.012, z, 20));
      const d = new THREE.Mesh(new THREE.CircleGeometry(0.038, 20), ledSoft);
      d.rotation.x = Math.PI / 2; d.position.set(x, H - 0.0125, z);
      ceilings.add(d);
    };
    for (const z of [0.9, 2.1, 3.3]) spot(0.95, z);
    for (const [x, z] of [[2.2, 0.55], [3.5, 0.55], [2.2, 3.7], [3.2, 2.7]]) spot(x, z);
    for (const [x, z] of [[1.0, 5.0], [2.2, 5.0], [3.2, 5.0], [1.2, 5.9], [3.0, 5.9]]) spot(x, z);
    for (const [x, z] of [[5.2, 2.0], [5.2, 3.5], [6.6, 3.5], [7.6, 3.0], [5.2, 0.8], [7.6, 1.6]]) spot(x, z);
    for (const [x, z] of [[4.95, 0.7], [5.8, 0.9], [6.45, 0.8]]) spot(x, z);
  }
  root.add(ceilings);

  // Sancas de LED no encontro parede/forro (aparecem à noite)
  const coves = new THREE.Group();
  {
    const y1 = 2.6, y2 = 2.63;
    coves.add(ledBox(0.36, 4.40, y1, y2, 0.01, 0.04));            // sala: parede norte
    coves.add(ledBox(X_P - 0.04, X_P - 0.01, y1, y2, 2.4, Z_S - 0.05)); // sala: parede da TV
    coves.add(ledBox(4.62, 8.60, y1, y2, 4.31, 4.34));           // dormitório: sul
    coves.add(ledBox(8.60, 8.63, y1, y2, 2.25, 4.3));            // dormitório: leste
    coves.add(ledBox(4.62, 6.95, y1, y2, 1.52, 1.55));           // dormitório: face do banho
    coves.add(ledBox(0.05, 3.8, y1, y2, 5.9, 5.93));             // terraço
    coves.add(ledBox(4.62, 6.05, y1, y2, 0.03, 0.06));           // banho
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

  // sombras de contato por ambiente (aparecem junto com o ambiente, ver main.js)
  const roomDecals = {};
  const aoMats = new Map();
  function decal(key, x1, z1, x2, z2, alpha = 0.4, pad = 0.1) {
    const k = `${key}:${alpha}`;
    if (!aoMats.has(k)) {
      const mat = new THREE.MeshBasicMaterial({ map: aoTexture(), transparent: true, opacity: 0, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -2, polygonOffsetUnits: -2 });
      mat.userData.max = alpha;
      aoMats.set(k, mat);
      (roomDecals[key] ||= { group: new THREE.Group(), mats: [] }).mats.push(mat);
    }
    const g = new THREE.PlaneGeometry(x2 - x1 + pad * 2, z2 - z1 + pad * 2);
    g.rotateX(-Math.PI / 2);
    const m = new THREE.Mesh(g, aoMats.get(k));
    m.position.set((x1 + x2) / 2, 0.0048, (z1 + z2) / 2);
    m.renderOrder = 1;
    roomDecals[key].group.add(m);
  }

  // ===== COZINHA (linha preta na parede oeste + geladeira + marcenaria superior em nogueira escura)
  const kitchen = room('cozinha');
  {
    // geladeira grafite de duas portas
    item(kitchen, [
      bx(0.0, 0.69, 0.04, 1.86, 0.02, 0.90, M.fridge, 0.012),
      bx(0.0, 0.62, 0, 0.04, 0.06, 0.86, M.black),
      bx(0.689, 0.693, 0.04, 1.86, 0.452, 0.46, M.black),
      bx(0.69, 0.71, 0.95, 1.55, 0.40, 0.425, M.steel, 0.008), bx(0.69, 0.71, 0.95, 1.55, 0.487, 0.512, M.steel, 0.008),
      ledBox(0.28, 0.42, 0.012, 0.02, 0.06, 0.86),
    ]);
    // armários inferiores pretos, rodapé recuado com LED e puxador tipo gola
    const base = [
      bx(0.0, 0.60, 0.10, 0.88, 0.90, Z_S, M.cabBlack),
      bx(0.0, 0.52, 0.0, 0.10, 0.92, Z_S - 0.02, M.black),
      ledBox(0.515, 0.525, 0.015, 0.03, 0.94, Z_S - 0.04),
      bx(0.598, 0.612, 0.855, 0.88, 0.90, Z_S, M.steel),
      bx(0.598, 0.606, 0.18, 0.76, 3.76, 4.28, M.blackGloss), bx(0.606, 0.62, 0.68, 0.70, 3.8, 4.24, M.steel),
    ];
    for (const z of [1.48, 2.06, 2.64, 3.22]) base.push(bx(0.597, 0.603, 0.12, 0.85, z - 0.004, z + 0.004, M.cut));
    item(kitchen, base);
    // bancada de granito preto com cuba de aço, torneira gourmet e cooktop
    const top = [
      bx(0.0, 0.69, 0.88, 0.92, 0.90, 2.36, M.blackStone, 0.004), bx(0.0, 0.20, 0.88, 0.92, 2.36, 2.89, M.blackStone, 0.004),
      bx(0.56, 0.69, 0.88, 0.92, 2.36, 2.89, M.blackStone, 0.004), bx(0.0, 0.69, 0.88, 0.92, 2.89, Z_S, M.blackStone, 0.004),
      bx(0.20, 0.56, 0.70, 0.705, 2.36, 2.89, M.steel),
      bx(0.20, 0.205, 0.70, 0.92, 2.36, 2.89, M.steel), bx(0.555, 0.56, 0.70, 0.92, 2.36, 2.89, M.steel),
      bx(0.20, 0.56, 0.70, 0.92, 2.36, 2.365, M.steel), bx(0.20, 0.56, 0.70, 0.92, 2.885, 2.89, M.steel),
      cyl(0.02, 0.3, M.steelDark, 0.10, 0.92, 2.625, 16),
      tube([[0.10, 1.2, 2.625], [0.10, 1.28, 2.625], [0.15, 1.31, 2.625], [0.26, 1.28, 2.625], [0.30, 1.18, 2.625]], 0.012, M.steelDark),
      bx(0.09, 0.59, 0.92, 0.926, 3.72, 4.32, M.blackGloss),
    ];
    for (const [x, z] of [[0.22, 3.87], [0.46, 3.87], [0.22, 4.17], [0.46, 4.17]]) {
      const ring = mesh(new THREE.TorusGeometry(0.07, 0.005, 6, 28), M.fridge, x, 0.931, z);
      ring.rotation.x = Math.PI / 2; top.push(ring);
    }
    // cafeteira, tábua, porta-utensílios e fruteira
    top.push(bx(0.10, 0.40, 0.92, 1.30, 1.15, 1.45, M.blackGloss, 0.02), bx(0.13, 0.37, 0.92, 0.96, 1.2, 1.4, M.steel), bx(0.2, 0.3, 1.0, 1.04, 1.36, 1.45, M.steel));
    top.push(bx(0.16, 0.52, 0.92, 0.94, 1.78, 2.14, M.walnut, 0.004), cyl(0.055, 0.17, M.black, 0.10, 0.92, 2.22, 18));
    for (let i = 0; i < 4; i++) top.push(bx(0.085 + i * 0.012, 0.09 + i * 0.012, 1.09, 1.24 + i * 0.03, 2.2 + (i % 2) * 0.03, 2.215 + (i % 2) * 0.03, M.steel));
    const bowl = mesh(new THREE.SphereGeometry(0.13, 20, 10, 0, Math.PI * 2, Math.PI / 2, Math.PI / 2), M.black, 0.34, 1.0, 3.18);
    bowl.scale.y = 0.5; top.push(bowl);
    const orange = std({ color: '#d9731c', roughness: 0.55 });
    for (const [x, z, y] of [[0.30, 3.14, 0.99], [0.38, 3.2, 0.99], [0.33, 3.24, 0.99], [0.35, 3.17, 1.05]]) top.push(mesh(new THREE.SphereGeometry(0.045, 14, 10), orange, x, y, z));
    item(kitchen, top);
    // armários superiores, nicho aberto com LED e coifa
    const up = [
      bx(0, 0.35, 1.92, 2.6, 0.02, 0.90, M.walnutDark), bx(0, 0.35, 1.5, 2.6, 0.90, 2.22, M.walnutDark), bx(0, 0.35, 1.5, 2.6, 3.10, 3.60, M.walnutDark),
      bx(0, 0.02, 1.5, 2.6, 2.22, 3.10, M.walnutDark), bx(0, 0.35, 1.5, 1.52, 2.22, 3.10, M.walnut), bx(0, 0.35, 2.58, 2.6, 2.22, 3.10, M.walnut),
      bx(0, 0.33, 1.9, 1.92, 2.22, 3.10, M.walnut), bx(0, 0.35, 1.5, 2.6, 2.22, 2.245, M.walnutDark), bx(0, 0.35, 1.5, 2.6, 3.075, 3.10, M.walnutDark),
      bx(0, 0.54, 1.5, 1.58, 3.60, 4.36, M.steel), bx(0, 0.30, 1.58, 2.6, 3.7, 4.26, M.steel),
      ledBox(0.04, 0.30, 1.885, 1.895, 2.26, 3.07), ledBox(0.30, 0.33, 1.495, 1.5, 0.92, 2.2), ledBox(0.30, 0.33, 1.495, 1.5, 3.12, 3.58),
    ];
    for (const z of [0.46, 1.35, 1.78]) up.push(bx(0.348, 0.354, z === 0.46 ? 1.94 : 1.52, 2.58, z - 0.003, z + 0.003, M.cut));
    up.push(bx(0.348, 0.354, 1.52, 2.58, 3.35, 3.356, M.cut));
    // objetos no nicho: livros e vasos
    up.push(bx(0.06, 0.28, 1.52, 1.68, 2.3, 2.34, M.paper), bx(0.07, 0.27, 1.68, 1.76, 2.3, 2.34, M.redFabric), cyl(0.05, 0.2, M.ceramic, 0.16, 1.52, 2.55, 20), cyl(0.04, 0.14, M.concretePot, 0.16, 1.52, 2.8, 20));
    up.push(cyl(0.05, 0.12, M.ceramic, 0.16, 1.92, 2.5, 20), cyl(0.045, 0.12, M.black, 0.16, 1.92, 2.85, 20));
    item(kitchen, up);
    decal('cozinha', 0, 0.02, 0.69, Z_S, 0.55, 0.14);
  }

  // ===== SALA (ilha-bancada, banquetas vermelhas, sofá preto, TV)
  const living = room('sala');
  {
    // ilha: corpo preto com frisos verticais, tampo em granito com balanço sobre as banquetas
    const isl = [
      bx(1.47, 1.86, 0, 0.96, 2.22, 4.36, M.cabBlack),
      bx(1.27, 1.86, 0.96, 1.005, 2.22, 4.36, M.blackStone, 0.006),
      ledBox(1.455, 1.47, 0.012, 0.03, 2.26, 4.32), ledBox(1.27, 1.47, 0.945, 0.955, 2.24, 4.34),
    ];
    for (let z = 2.27; z < 4.33; z += 0.06) isl.push(bx(1.462, 1.47, 0.05, 0.93, z, z + 0.03, M.blackGloss));
    item(living, isl);
    // banquetas vermelhas com encosto curvo
    for (const z of [2.585, 3.165]) {
      const s = [cyl(0.19, 0.06, M.redLeather, 0, 0.66, 0, 32), cyl(0.2, 0.012, M.black, 0, 0.648, 0, 32),
        arcBack(0.19, 0.208, Math.PI - 1.0, Math.PI + 1.0, 0.74, 0.98, M.redLeather)];
      for (const a of [0.8, 2.35, 3.95, 5.5]) s.push(cyl(0.012, 0.65, M.black, Math.cos(a) * 0.15, 0, Math.sin(a) * 0.15, 8, 0.014));
      for (const dz of [-0.11, 0.11]) s.push(cyl(0.008, 0.1, M.black, -0.175, 0.64, dz, 8));
      const ring = mesh(new THREE.TorusGeometry(0.15, 0.007, 6, 28), M.black, 0, 0.27, 0); ring.rotation.x = Math.PI / 2; s.push(ring);
      item(living, place(s, 1.28, z, 0));
    }
    // sofá preto de 2 lugares (costas na ilha, voltado para a TV)
    {
      const L = M.leatherBlack, x1 = 1.91, x2 = 2.90, z1 = 2.31, z2 = 4.34, zm = (z1 + z2) / 2;
      const s = [
        bx(x1, x2, 0.10, 0.36, z1, z2, L, 0.05),
        bx(x1, x2, 0.10, 0.62, z1, z1 + 0.17, L, 0.07), bx(x1, x2, 0.10, 0.62, z2 - 0.17, z2, L, 0.07),
        bx(x1, x1 + 0.23, 0.10, 0.84, z1 + 0.15, z2 - 0.15, L, 0.08),
        bx(x1 + 0.23, x2 - 0.01, 0.36, 0.50, z1 + 0.17, zm - 0.004, L, 0.06), bx(x1 + 0.23, x2 - 0.01, 0.36, 0.50, zm + 0.004, z2 - 0.17, L, 0.06),
      ];
      for (const [a, b] of [[z1 + 0.18, zm - 0.01], [zm + 0.01, z2 - 0.18]]) {
        const c = bx(-0.1, 0.1, -0.23, 0.23, a - (a + b) / 2, b - (a + b) / 2, L, 0.07);
        c.position.set(x1 + 0.34, 0.74, (a + b) / 2); c.rotation.z = 0.2; s.push(c);
      }
      // almofada vermelha que repete a cor das banquetas
      const pil = bx(-0.08, 0.08, -0.19, 0.19, -0.19, 0.19, M.redFabric, 0.05);
      pil.position.set(x1 + 0.36, 0.7, z1 + 0.4); pil.rotation.z = 0.3; pil.rotation.y = 0.15; s.push(pil);
      for (const [x, z] of [[x1 + 0.09, z1 + 0.09], [x2 - 0.09, z1 + 0.09], [x1 + 0.09, z2 - 0.09], [x2 - 0.09, z2 - 0.09]]) s.push(cyl(0.022, 0.1, M.black, x, 0, z, 10));
      item(living, s);
    }
    // TV de 75" na parede grafite, barra de som e LED traseiro
    item(living, [
      bx(3.79, 3.86, 0.86, 1.80, 2.56, 4.22, M.screenOff, 0.004),
      (() => { const p = mesh(new THREE.PlaneGeometry(1.62, 0.9), tvMat, 3.788, 1.33, 3.39); p.rotation.y = -Math.PI / 2; p.castShadow = false; return p; })(),
      bx(3.80, 3.86, 0.70, 0.76, 2.95, 3.85, M.black, 0.01),
      ledBox(3.855, 3.86, 0.88, 1.78, 2.54, 2.56, ledSoft), ledBox(3.855, 3.86, 0.88, 1.78, 4.22, 4.24, ledSoft),
    ]);
    // pendentes sobre a ilha
    for (const z of [2.75, 3.3, 3.85]) {
      const p = [
        cyl(0.003, 1.15, M.black, 1.56, 1.55, z, 6),
        cyl(0.14, 0.2, M.black, 1.56, 1.35, z, 28, 0.04),
        (() => { const d = new THREE.Mesh(new THREE.CircleGeometry(0.12, 24), ledSoft); d.rotation.x = Math.PI / 2; d.position.set(1.56, 1.351, z); return d; })(),
        halo(1.56, 1.25, z, 0.7, '255,175,100', 0.55),
      ];
      item(living, p);
    }
    decal('sala', 1.27, 2.22, 1.86, 4.36, 0.5, 0.12);
    decal('sala', 1.91, 2.31, 2.90, 4.34, 0.55, 0.16);
    decal('sala', 1.0, 2.38, 1.5, 2.8, 0.35, 0.05); decal('sala', 1.0, 2.96, 1.5, 3.38, 0.35, 0.05);
  }

  // ===== HOME OFFICE (mesa de nogueira, notebook, cadeira, planta de galhos secos)
  const office = room('escritorio');
  {
    const d = [bx(2.45, 3.95, 0.72, 0.76, 0.02, 0.81, M.walnut, 0.008)];
    for (const x of [2.5, 3.9]) for (const z of [0.07, 0.76]) d.push(bx(x - 0.02, x + 0.02, 0, 0.72, z - 0.02, z + 0.02, M.black));
    d.push(bx(2.5, 3.9, 0.62, 0.66, 0.05, 0.09, M.black), bx(2.5, 3.9, 0.62, 0.66, 0.74, 0.78, M.black));
    // notebook aberto
    {
      const lap = [bx(-0.155, 0.155, 0, 0.012, -0.11, 0.11, M.steel, 0.004), bx(-0.13, 0.13, 0.012, 0.014, -0.02, 0.09, M.steelDark)];
      const lid = bx(-0.155, 0.155, 0, 0.21, -0.004, 0.004, M.steel, 0.003); lid.position.set(0, 0.114, -0.11); lid.rotation.x = -0.28; lap.push(lid);
      const scr = mesh(new THREE.PlaneGeometry(0.29, 0.19), laptopMat, 0, 0.114, -0.104); scr.rotation.x = -0.28; scr.castShadow = false; lap.push(scr);
      place(lap, 2.78, 0.36, 0.3).forEach(m => { m.position.y += 0.76; d.push(m); });
    }
    // teclado branco, mouse, caneca
    {
      const k = [bx(-0.22, 0.22, 0, 0.014, -0.06, 0.06, M.paper, 0.004), bx(-0.2, 0.2, 0.014, 0.016, -0.045, 0.045, M.steel)];
      place(k, 3.60, 0.46, -0.35).forEach(m => { m.position.y += 0.76; d.push(m); });
      const ms = [bx(-0.03, 0.03, 0, 0.03, -0.05, 0.05, M.paper, 0.02)];
      place(ms, 3.88, 0.60, -0.2).forEach(m => { m.position.y += 0.76; d.push(m); });
      d.push(cyl(0.04, 0.09, M.ceramic, 3.12, 0.76, 0.2, 20));
    }
    item(office, d);
    // cadeira ergonômica preta (encosto em tela), recolhida sob a mesa
    {
      const c = [
        bx(-0.25, 0.25, 0.44, 0.50, -0.24, 0.24, M.black, 0.04),
        bx(-0.23, 0.23, 0.50, 0.54, -0.22, 0.22, M.leatherBlack, 0.03),
        bx(-0.23, 0.23, 0.56, 1.0, 0.19, 0.22, M.black, 0.02), bx(-0.2, 0.2, 0.62, 0.94, 0.17, 0.19, M.steelDark, 0.01),
        cyl(0.025, 0.4, M.steel, 0, 0.04, 0, 12),
        bx(-0.28, -0.25, 0.5, 0.64, -0.2, 0.05, M.black, 0.01), bx(0.25, 0.28, 0.5, 0.64, -0.2, 0.05, M.black, 0.01),
      ];
      for (const x of [-0.27, 0.27]) c.push(bx(x - 0.015, x + 0.015, 0.64, 0.67, -0.2, 0.06, M.black, 0.01));
      for (let i = 0; i < 5; i++) {
        const a = i * Math.PI * 2 / 5, leg = bx(0, 0.3, 0, 0.03, -0.015, 0.015, M.black);
        leg.position.set(0, 0.07, 0); leg.rotation.y = a; leg.geometry.translate(0.15, 0, 0); c.push(leg);
        c.push(cyl(0.02, 0.04, M.black, Math.cos(-a) * 0.3, 0.02, Math.sin(-a) * 0.3, 10));
      }
      // o encosto fica ao sul (z+) e o assento olha para a mesa (z−)
      item(office, place(c, 3.2, 0.97, 0));
    }
    // vaso de concreto com galhos secos (ramos que se bifurcam, com folhinhas secas)
    {
      const p = [cyl(0.15, 0.3, M.concretePot, 4.19, 0, 0.25, 28, 0.13), cyl(0.125, 0.012, M.cut, 4.19, 0.29, 0.25, 24)];
      const rnd = (s => () => ((s = (s * 16807) % 2147483647) / 2147483647))(17);
      const dry = std({ color: '#7a6249', roughness: 0.95 });
      const branch = (x, y, z, a, tilt, len, rad, depth) => {
        const dx = Math.cos(a) * Math.sin(tilt), dz = Math.sin(a) * Math.sin(tilt), dy = Math.cos(tilt);
        const x2 = x + dx * len, y2 = y + dy * len, z2 = z + dz * len;
        const cl = ([a, b, c]) => [Math.min(4.34, Math.max(4.03, a)), b, Math.min(0.62, Math.max(0.05, c))]; // não atravessa a parede nem a mesa
        p.push(tube([cl([x, y, z]), cl([(x + x2) / 2 + (rnd() - 0.5) * 0.03, (y + y2) / 2, (z + z2) / 2 + (rnd() - 0.5) * 0.03]), cl([x2, y2, z2])], rad, M.twig, 6));
        if (depth > 0) {
          const n = depth === 2 ? 3 : 2;
          for (let k = 0; k < n; k++) {
            const t = 0.5 + 0.45 * (k + 1) / n;
            branch(x + dx * len * t, y + dy * len * t, z + dz * len * t, a + (rnd() - 0.5) * 2.4, Math.min(1.25, tilt + 0.25 + rnd() * 0.45), len * (0.5 + rnd() * 0.2), rad * 0.62, depth - 1);
          }
        } else {
          for (let k = 0; k < 4; k++) {
            const lf = mesh(new THREE.SphereGeometry(0.018, 5, 4), dry, Math.min(4.34, Math.max(4.03, x2 + (rnd() - 0.5) * 0.06)), y2 + (rnd() - 0.5) * 0.04, Math.min(0.62, Math.max(0.05, z2 + (rnd() - 0.5) * 0.06)));
            lf.scale.set(1, 0.4, 1.9); lf.rotation.set(rnd() * 3, rnd() * 3, rnd() * 3); p.push(lf);
          }
        }
      };
      for (let i = 0; i < 9; i++) branch(4.19 + (rnd() - 0.5) * 0.08, 0.3, 0.25 + (rnd() - 0.5) * 0.08, rnd() * Math.PI * 2, 0.08 + rnd() * 0.3, 0.55 + rnd() * 0.35, 0.0045, 2);
      item(office, p);
    }
    decal('escritorio', 2.45, 0.02, 3.95, 0.81, 0.4, 0.1);
    decal('escritorio', 2.9, 0.75, 3.5, 1.25, 0.4, 0.06);
  }

  // ===== VARANDA (mesa oval preta, poltronas taupe, banco de canto, armário de apoio)
  const terrace = room('varanda');
  {
    // armário de apoio na parede oeste
    item(terrace, [
      bx(0.25, 0.69, 0, 2.45, 4.60, Z_F - TW, M.cabBlack), bx(0.0, 0.25, 0, 2.45, 5.35, Z_F - TW, M.walnutDark),
      bx(0.688, 0.694, 0.05, 2.4, 5.1, 5.108, M.cut), bx(0.688, 0.694, 0.05, 2.4, 5.62, 5.628, M.cut),
      bx(0.69, 0.71, 0.9, 1.5, 4.95, 4.97, M.steel, 0.006), bx(0.69, 0.71, 0.9, 1.5, 5.45, 5.47, M.steel, 0.006),
    ]);
    // mesa em "barril", tampo preto com veios
    item(terrace, [
      barrelSlab(2.86, 5.435, 1.8, 0.9, 0.42, 0.045, 0.75, M.blackOak),
      bx(2.18, 2.26, 0, 0.7, 5.18, 5.69, M.black, 0.01), bx(3.46, 3.54, 0, 0.7, 5.18, 5.69, M.black, 0.01),
      cyl(0.045, 0.2, M.ceramic, 2.86, 0.76, 5.435, 24, 0.03),
      tube([[2.86, 0.95, 5.435], [2.84, 1.2, 5.42], [2.9, 1.45, 5.46]], 0.004, M.twig, 8), tube([[2.86, 0.95, 5.435], [2.92, 1.15, 5.46], [2.97, 1.38, 5.42]], 0.004, M.twig, 8),
    ]);
    // poltronas: encosto curvo atrás, assento redondo
    const chair = (x, z, ry) => {
      const c = [
        cyl(0.235, 0.09, M.taupe, 0, 0.38, 0, 32),
        cyl(0.16, 0.06, M.black, 0, 0.32, 0, 20, 0.2),
        arcBack(0.225, 0.275, Math.PI - 1.15, Math.PI + 1.15, 0.45, 0.86, M.taupe),
      ];
      for (const [dx, dz] of [[0.16, 0.16], [0.16, -0.16], [-0.16, 0.16], [-0.16, -0.16]]) c.push(cyl(0.013, 0.34, M.black, dx, 0, dz, 8, 0.01));
      item(terrace, place(c, x, z, ry));
    };
    chair(2.45, 4.80, -Math.PI / 2); chair(3.15, 4.80, -Math.PI / 2); chair(1.80, 5.45, 0);
    // banco de canto em L, em bouclé grafite, com almofadas de encosto
    item(terrace, [
      bx(2.14, X_P, 0.10, 0.42, 5.64, Z_F - TW, M.black, 0.02), bx(3.37, X_P, 0.10, 0.42, 4.96, 5.64, M.black, 0.02),
      bx(2.14, 3.37, 0.42, 0.53, 5.64, Z_F - TW - 0.0, M.boucle, 0.05), bx(3.37, X_P, 0.42, 0.53, 4.96, Z_F - TW, M.boucle, 0.05),
      bx(2.14, 3.70, 0.53, 0.92, 5.97, Z_F - TW - 0.0, M.boucle, 0.07), bx(3.70, X_P, 0.53, 0.92, 4.96, Z_F - TW, M.boucle, 0.07),
    ]);
    decal('varanda', 0.0, 4.60, 0.69, Z_F - TW, 0.5, 0.1);
    decal('varanda', 1.96, 4.99, 3.76, 5.88, 0.45, 0.12);
    decal('varanda', 2.14, 4.96, X_P, Z_F - TW, 0.35, 0.08);
  }

  // ===== BANHO (bancada preta suspensa, cuba oval, vaso suspenso, box de vidro com ducha de teto)
  const bath = room('banho');
  {
    // gabinete suspenso preto + tampo de pedra + cuba oval de apoio
    item(bath, [
      bx(4.58, 5.43, 0.45, 0.85, 0.0, 0.37, M.cabBlack),
      bx(4.58, 5.43, 0.85, 0.89, 0.0, 0.37, M.stoneTop, 0.004),
      (() => { const g = new THREE.SphereGeometry(1, 32, 12, 0, Math.PI * 2, 0, Math.PI / 2); g.scale(0.24, 0.07, 0.145); const m = mesh(g, M.basin, 5.04, 0.89, 0.21); return m; })(),
      cyl(0.012, 0.18, M.steelDark, 5.04, 0.89, 0.04, 14),
      tube([[5.04, 1.05, 0.04], [5.04, 1.08, 0.1], [5.04, 1.04, 0.16]], 0.009, M.steelDark, 8),
      ledBox(4.6, 5.41, 0.435, 0.445, 0.04, 0.34),
      bx(4.62, 4.64, 1.0, 1.04, 0.42, 0.62, M.steelDark), bx(4.6, 4.64, 0.98, 1.4, 0.58, 0.62, M.paper, 0.01),
    ]);
    // espelho largo com luz de fundo
    {
      const mir = mesh(new THREE.ShapeGeometry(roundedRectShape(0.78, 0.9, 0.06), 12), M.mirror, 5.0, 1.58, 0.012);
      const back = mesh(new THREE.ShapeGeometry(roundedRectShape(0.86, 0.98, 0.09), 12), ledSoft, 5.0, 1.58, 0.004);
      back.castShadow = false;
      item(bath, [back, mir, halo(5.0, 1.58, 0.1, 1.4, '255,180,110', 0.3)]);
    }
    // vaso sanitário suspenso com caixa embutida e placa de descarga
    item(bath, [
      bx(5.60, 5.96, 0.18, 0.4, 0.1, 0.63, M.ceramic, 0.11),
      bx(5.62, 5.94, 0.4, 0.43, 0.12, 0.62, M.ceramic, 0.012),
      bx(5.62, 5.94, 0.42, 0.85, 0.0, 0.2, M.ceramic, 0.04),
      bx(5.73, 5.83, 1.05, 1.17, 0.0, 0.012, M.steel, 0.003),
    ]);
    // box: vidro fixo com perfil preto, ducha de teto e misturador
    {
      const b = [
        bx(6.08, 6.095, 0, 2.08, 0.40, 1.02, M.glass),
        bx(6.075, 6.1, 0, 2.1, 0.39, 0.41, M.black), bx(6.075, 6.1, 2.07, 2.1, 0.39, 1.03, M.black), bx(6.075, 6.1, 0, 2.1, 1.01, 1.03, M.black),
        cyl(0.13, 0.02, M.steelDark, 6.48, 2.5, 0.76, 32), bx(6.475, 6.485, 2.5, 2.7, 0.755, 0.765, M.steelDark),
        bx(6.40, 6.56, 1.0, 1.08, 0.40, 0.44, M.steelDark, 0.01), cyl(0.014, 0.6, M.steelDark, 6.72, 0.9, 0.42, 10), bx(6.46, 6.50, 1.04, 1.08, 0.4, 0.46, M.steelDark),
        bx(6.36, 6.74, 1.08, 1.1, 0.30, 0.40, M.stoneTop), ledBox(6.36, 6.74, 1.5, 1.51, 0.305, 0.395),
        bx(6.36, 6.74, 1.3, 1.315, 0.30, 0.40, M.stoneTop),
        cyl(0.03, 0.12, M.ceramic, 6.46, 1.1, 0.35, 16), cyl(0.028, 0.14, M.ceramic, 6.6, 1.1, 0.35, 16),
      ];
      item(bath, b);
    }
    // toalha e planta
    item(bath, [
      bx(4.62, 4.64, 0.95, 1.55, 0.95, 1.2, M.bedGrey, 0.01),
      bx(4.59, 4.62, 0.92, 0.95, 0.9, 1.25, M.steelDark),
      cyl(0.04, 0.1, M.ceramic, 4.82, 0.89, 0.07, 16),
      mesh(new THREE.IcosahedronGeometry(0.08, 1), M.leaf, 4.82, 1.04, 0.07),
    ]);
    decal('banho', 4.58, 0.0, 5.43, 0.37, 0.3, 0.08);
  }

  // ===== DORMITÓRIO (cama queen com roupa branca, armários em laca cinza, janelas com cortinas)
  const bed = room('dormitorio');
  {
    const BZ1 = 2.22, BZ2 = 3.80, bzm = (BZ1 + BZ2) / 2;
    // tapete grafite
    item(bed, [bx(5.08, 5.77, 0, 0.014, 2.42, 3.91, M.rug, 0.005)]);
    // cama: estrado escuro, colchão, edredom com manta dobrada ao pé, travesseiros e almofadas
    item(bed, [
      bx(6.35, 8.62, 0.10, 0.30, BZ1, BZ2, M.headboard, 0.02),
      bx(6.35, 6.45, 0.10, 0.52, BZ1, BZ2, M.headboard, 0.02),
      ledBox(6.36, 8.6, 0.02, 0.05, BZ1 + 0.02, BZ2 - 0.02),
      bx(6.45, 8.54, 0.30, 0.55, BZ1 + 0.03, BZ2 - 0.03, M.bedWhite, 0.07),
    ]);
    item(bed, [
      bx(6.40, 7.98, 0.53, 0.64, BZ1 + 0.015, BZ2 - 0.015, M.bedWhite, 0.05),
      bx(6.41, 6.46, 0.32, 0.6, BZ1 + 0.01, BZ2 - 0.01, M.bedWhite, 0.02),
      bx(7.58, 8.0, 0.60, 0.69, BZ1 + 0.005, BZ2 - 0.005, M.bedGrey, 0.045),
      bx(7.58, 7.99, 0.35, 0.66, BZ1 - 0.01, BZ1 + 0.02, M.bedWhite, 0.015), bx(7.58, 7.99, 0.35, 0.66, BZ2 - 0.02, BZ2 + 0.01, M.bedWhite, 0.015),
    ]);
    {
      const pil = [];
      for (const z of [2.6, 3.42]) {
        const p = bx(-0.26, 0.26, -0.1, 0.1, -0.37, 0.37, M.bedWhite, 0.07);
        p.position.set(8.29, 0.69, z); p.rotation.z = 0.28; pil.push(p);
      }
      for (const z of [2.62, 3.4]) {
        const p = bx(-0.2, 0.2, -0.1, 0.1, -0.2, 0.2, M.bedGrey, 0.06);
        p.position.set(8.0, 0.72, z); p.rotation.z = 0.2; p.rotation.y = z < 3 ? 0.15 : -0.15; pil.push(p);
      }
      item(bed, pil);
    }
    // cabeceira estofada e luminárias de leitura
    item(bed, [
      bx(8.53, 8.63, 0.30, 1.18, BZ1 - 0.04, BZ2 + 0.04, M.headboard, 0.03),
      ...[2.45, 3.57].flatMap(z => [
        bx(8.44, 8.53, 1.34, 1.38, z - 0.01, z + 0.01, M.black),
        cyl(0.04, 0.12, M.black, 8.43, 1.30, z, 16),
        (() => { const d = new THREE.Mesh(new THREE.CircleGeometry(0.035, 16), ledSoft); d.rotation.x = Math.PI / 2; d.position.set(8.43, 1.299, z); return d; })(),
        halo(8.4, 1.2, z, 0.7, '255,175,100', 0.5),
      ]),
    ]);
    // armário do lado da sala (laca cinza-claro, portas sem puxador)
    {
      const w = [bx(4.02, 4.58, 0, 2.62, 2.38, Z_S, M.lacquer, 0.004), ledBox(4.578, 4.583, 0.05, 2.55, 2.385, 2.39)];
      for (const z of [2.88, 3.38, 3.88]) w.push(bx(4.577, 4.583, 0.04, 2.58, z - 0.003, z + 0.003, M.lacquerLine));
      item(bed, w);
    }
    // closet em U junto ao banho, com espelho no fundo do corredor
    {
      const cl = [
        bx(6.98, X_R, 0, 2.62, 0.0, 0.54, M.lacquer, 0.004),
        bx(8.10, X_R, 0, 2.62, 0.54, 2.20, M.lacquer, 0.004),
        bx(6.98, 7.39, 0, 2.62, 0.54, 1.46, M.lacquer, 0.004),
        bx(7.42, 8.08, 0.12, 2.42, 0.533, 0.541, M.mirror), bx(7.40, 8.10, 0.1, 0.12, 0.53, 0.545, M.black), bx(7.40, 8.10, 2.42, 2.44, 0.53, 0.545, M.black),
        ledBox(7.39, 7.40, 0.05, 2.55, 0.575, 0.595), ledBox(8.09, 8.10, 0.05, 2.55, 0.575, 0.595),
      ];
      for (const z of [0.9, 1.2]) cl.push(bx(7.387, 7.393, 0.04, 2.58, z - 0.003, z + 0.003, M.lacquerLine));
      for (const z of [0.9, 1.3, 1.7]) cl.push(bx(8.097, 8.103, 0.04, 2.58, z - 0.003, z + 0.003, M.lacquerLine));
      for (const x of [7.15, 7.27]) cl.push(bx(x - 0.003, x + 0.003, 0.04, 2.58, 1.457, 1.463, M.lacquerLine));
      item(bed, cl);
    }
    // cortinas: voil branco nas duas janelas e cortinas grafite nas laterais
    {
      const wavy = (w, amp, k) => {
        const g = new THREE.PlaneGeometry(w, H - 0.08, Math.ceil(w * 40), 1);
        const p = g.attributes.position;
        for (let i = 0; i < p.count; i++) { const x = p.getX(i); p.setZ(i, Math.sin(x * k) * amp + Math.sin(x * k * 0.3) * amp * 0.3); }
        g.computeVertexNormals(); worldUV(g);
        return g;
      };
      const cs = [];
      for (const w of [win1, win2]) cs.push(mesh(wavy(w.b - w.a + 0.3, 0.012, 18), M.sheer, (w.a + w.b) / 2, (H - 0.08) / 2 + 0.02, Z_S - 0.07));
      for (const [x1, x2] of [[5.64, 6.08], [6.36, 6.78], [8.02, 8.6]]) cs.push(mesh(wavy(x2 - x1, 0.035, 26), M.drape, (x1 + x2) / 2, (H - 0.08) / 2 + 0.02, Z_S - 0.1));
      cs.forEach(m => { m.castShadow = false; });
      cs.push(bx(4.62, 8.62, 2.62, 2.65, Z_S - 0.14, Z_S - 0.07, M.black));
      item(bed, cs);
    }
    decal('dormitorio', 6.35, BZ1, 8.62, BZ2, 0.45, 0.14);
    decal('dormitorio', 4.02, 2.38, 4.58, Z_S, 0.4, 0.1);
    decal('dormitorio', 6.98, 0.0, X_R, 0.54, 0.35, 0.1); decal('dormitorio', 8.10, 0.54, X_R, 2.2, 0.4, 0.1); decal('dormitorio', 6.98, 0.54, 7.39, 1.46, 0.4, 0.1);
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
  pl(2.1, 2.3, 2.4, 6.5, 6.5, undefined, true);    // sala + cozinha
  pl(0.6, 1.4, 2.2, 2.2, 3.0);                     // cozinha (sob armários)
  pl(2.2, 2.2, 5.4, 4.0, 4.5, undefined, true);    // varanda
  pl(7.0, 2.0, 3.1, 4.5, 5.0, undefined, true);    // dormitório
  pl(5.3, 2.2, 0.7, 2.4, 2.6);                     // banho
  pl(3.2, 1.9, 0.9, 2.2, 3.0);                     // home office

  // Sombras e bounding dos itens (para a animação de "queda")
  root.traverse(o => {
    if (o.isMesh && o.material && (o.material.transparent || o.material.isMeshBasicMaterial)) o.castShadow = false;
  });
  for (const r of Object.values(rooms)) for (const it of r.userData.items) it.userData.baseY = it.position.y;
  for (const [key, d] of Object.entries(roomDecals)) { rooms[key].userData.decals = d; root.add(d.group); }
  walls.sort((a, b) => a.userData.center.x - b.userData.center.x);

  return {
    root, M, walls, floors, floorMats, floorDecals, aoGroup, openings, finishes, ceilings, coves, rooms, nightLights, glows,
    leds: [led, ledSoft], screens: [tvMat, laptopMat], allMaterials,
  };
}
