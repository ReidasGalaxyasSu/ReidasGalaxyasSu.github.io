import * as THREE from 'three';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import glbBytes from '../modelo/j4_rastreador.glb';
import { S, SETS, EXPLODE, eq } from './layout.js';
import { drawSheet, SHEET } from './sheet.js';

// ------------------------------------------------------------------ utilidades
const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));
const lerp = (a, b, t) => a + (b - a) * t;
const ease = t => t * t * (3 - 2 * t);
const ease2 = t => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
const seg = (p, a, b) => clamp((p - a) / (b - a));
const qs = new URLSearchParams(location.search);
const isMobile = () => window.innerWidth < 820 || window.innerWidth / window.innerHeight < 0.9;
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const FILM = qs.has('film');

// ------------------------------------------------------------------ renderer, cena e luz de estúdio
const canvas = document.getElementById('scene');
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: 'high-performance', preserveDrawingBuffer: FILM });
const maxRatio = () => Math.min(window.devicePixelRatio || 1, 2);
let pixelRatio = FILM ? 1 : Math.min(window.devicePixelRatio || 1, isMobile() ? 1.5 : 1.75);
renderer.setPixelRatio(pixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.02;
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;

const BG = new THREE.Color('#e9e8ef');
const scene = new THREE.Scene();
scene.background = BG;
scene.fog = new THREE.Fog(BG, 560, 1350);
const camera = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight, 1, 4000);
const pmrem = new THREE.PMREMGenerator(renderer);
scene.environment = pmrem.fromScene(new RoomEnvironment(renderer), 0.04).texture;

scene.add(new THREE.HemisphereLight('#ffffff', '#c9c6d4', 0.85));
const key = new THREE.DirectionalLight('#fffaf3', 2.1);
key.position.set(-110, 230, 150); key.target.position.set(-30, 0, 0);
key.castShadow = true;
key.shadow.mapSize.set(2048, 2048);
Object.assign(key.shadow.camera, { left: -190, right: 190, top: 170, bottom: -170, near: 40, far: 620 });
key.shadow.bias = -0.0004; key.shadow.normalBias = 0.25; key.shadow.radius = 4;
key.shadow.autoUpdate = false;
scene.add(key, key.target);
const rim = new THREE.DirectionalLight('#e6e0ff', 1.15);
rim.position.set(140, 120, -220);
scene.add(rim);
const under = new THREE.DirectionalLight('#ffffff', 0.0); // ilumina a face de baixo quando o equipamento gira
under.position.set(40, -120, 160);
scene.add(under);

// chão de estúdio (some na névoa) + folha de desenho
const floor = new THREE.Mesh(new THREE.PlaneGeometry(4000, 4000), new THREE.MeshStandardMaterial({ color: '#e4e3ea', roughness: 0.95 }));
floor.rotation.x = -Math.PI / 2; floor.position.y = -0.3; floor.receiveShadow = true;
scene.add(floor);

const sheetU = { uReveal: { value: -0.1 } };
const sheetMat = new THREE.MeshStandardMaterial({ color: '#ffffff', roughness: 0.92 });
sheetMat.onBeforeCompile = sh => {
  sh.uniforms.uReveal = sheetU.uReveal;
  sh.uniforms.inkMap = { value: sheetMat.userData.ink };
  sh.fragmentShader = sh.fragmentShader
    .replace('#include <common>', '#include <common>\nuniform float uReveal;\nuniform sampler2D inkMap;')
    .replace('#include <map_fragment>', `#include <map_fragment>
      float dRev = vMapUv.x * 0.72 + (1.0 - vMapUv.y) * 0.28;
      float mRev = 1.0 - smoothstep(uReveal - 0.03, uReveal, dRev);
      diffuseColor.rgb = mix(diffuseColor.rgb, texture2D(inkMap, vMapUv).rgb, mRev);
      float edge = smoothstep(uReveal - 0.025, uReveal, dRev) * (1.0 - smoothstep(uReveal, uReveal + 0.004, dRev));
      totalEmissiveRadiance += vec3(0.42, 0.29, 0.86) * edge * 1.4 * step(uReveal, 1.05);`);
};
const sheet = new THREE.Mesh(new THREE.PlaneGeometry(SHEET.x1 - SHEET.x0, SHEET.z1 - SHEET.z0), sheetMat);
sheet.rotation.x = -Math.PI / 2;
sheet.position.set((SHEET.x0 + SHEET.x1) / 2, 0, (SHEET.z0 + SHEET.z1) / 2);
sheet.receiveShadow = true;
sheet.visible = false;
scene.add(sheet);

// ------------------------------------------------------------------ o equipamento (GLB embutido no app.js)
// Os conjuntos são grupos criados já na posição MONTADO; as malhas do GLB entram neles ao carregar.
// Posições de repouso (coordenadas do glTF, Y para cima) lidas do GLB gerado em j4-3d/.
const REST = {
  carcaca_j4: [0, 0, 0], tampa_j4: [0, 0.2205, 0], placa_j4: [0, 0.118, -0.005],
  bateria_j4: [0.0135, 0.156, -0.11], chicote_j4: [0, 0.097, -0.51],
};
const root = new THREE.Group(); root.name = 'J4_rastreador';
const sets = {};
for (const s of SETS) { const g = new THREE.Group(); g.name = s.id; g.position.set(...REST[s.id]); root.add(g); sets[s.id] = g; }
// glTF (x, y, z) -> mundo (z, y, -x): deitado sobre a folha, tampa para cima, chicote para a esquerda (-X)
// e a lateral "4G ● ● GPS" voltada para a câmera (+Z)
const dev = new THREE.Group();
dev.quaternion.setFromRotationMatrix(new THREE.Matrix4().makeBasis(new THREE.Vector3(0, 0, -1), new THREE.Vector3(0, 1, 0), new THREE.Vector3(1, 0, 0)));
dev.scale.setScalar(S);
dev.add(root);
// grupo de giro: eixo no centro do corpo, ao longo do comprimento (X do mundo)
const ROLL_Y = 0.135 * S;
const roll = new THREE.Group();
roll.position.y = ROLL_Y + 0.06;
dev.position.y = -ROLL_Y;
roll.add(dev);
scene.add(roll);

async function loadModel() {
  const buf = glbBytes.buffer.slice(glbBytes.byteOffset, glbBytes.byteOffset + glbBytes.byteLength);
  const gltf = await new GLTFLoader().parseAsync(buf, '');
  for (const s of SETS) {
    const src = gltf.scene.getObjectByName(s.id);
    for (const ch of [...src.children]) sets[s.id].add(ch);
  }
}

// "do desenho ao volume": um plano de varredura revela o sólido com uma borda luminosa
const scanU = { uScan: { value: -1e4 }, uGlow: { value: 0 } };
const scanChunk = `
  if (vScanX > uScan) discard;`;
function patchScan(mat) {
  mat.onBeforeCompile = sh => {
    sh.uniforms.uScan = scanU.uScan; sh.uniforms.uGlow = scanU.uGlow;
    sh.vertexShader = sh.vertexShader.replace('#include <common>', '#include <common>\nvarying float vScanX;')
      .replace('#include <project_vertex>', '#include <project_vertex>\n  vScanX = (modelMatrix * vec4(transformed, 1.0)).x;');
    sh.fragmentShader = sh.fragmentShader.replace('#include <common>', '#include <common>\nvarying float vScanX;\nuniform float uScan;\nuniform float uGlow;')
      .replace('void main() {', 'void main() {' + scanChunk);
    if (sh.fragmentShader.includes('#include <emissivemap_fragment>')) {
      sh.fragmentShader = sh.fragmentShader.replace('#include <emissivemap_fragment>', `#include <emissivemap_fragment>
      totalEmissiveRadiance += vec3(0.45, 0.32, 1.0) * uGlow * (1.0 - smoothstep(0.0, 2.6, uScan - vScanX)) * 3.0;`);
    }
  };
}
const depthMat = new THREE.MeshDepthMaterial({ depthPacking: THREE.RGBADepthPacking });
patchScan(depthMat);
const maxAniso = renderer.capabilities.getMaxAnisotropy();
function setupMaterials() {
  const allMats = new Set();
  root.traverse(o => {
    if (!o.isMesh) return;
    const decal = /^(etiqueta|inscricao)/.test(o.name);
    o.castShadow = !decal; o.receiveShadow = true;
    o.customDepthMaterial = depthMat;
    (Array.isArray(o.material) ? o.material : [o.material]).forEach(m => {
      allMats.add(m);
      if (decal) { m.polygonOffset = true; m.polygonOffsetFactor = -2; m.depthWrite = !m.transparent; }
    });
  });
  for (const m of allMats) {
    patchScan(m);
    m.envMapIntensity = m.metalness > 0.5 ? 1.0 : /^fio_/.test(m.name) ? 0.45 : 0.85;
    if (m.map) m.map.anisotropy = maxAniso;
    if (m.name === 'bateria_pelicula_aluminio') { m.color.setRGB(0.55, 0.56, 0.58); m.roughness = 0.38; }
  }
}

// posições de repouso (MONTADO) e vínculo do chicote com a placa
const ids = SETS.map(s => s.id);
const rest = {};
for (const id of ids) rest[id] = { pos: sets[id].position.clone() };
const placaRestInv = new THREE.Matrix4().makeTranslation(rest.placa_j4.pos).invert();
const chicoteRel = placaRestInv.clone().multiply(new THREE.Matrix4().makeTranslation(rest.chicote_j4.pos));
const _m = new THREE.Matrix4(), _q = new THREE.Quaternion(), _s = new THREE.Vector3(), _p = new THREE.Vector3();

// pose = { z: deslocamento em +Z do equipamento (unidades normalizadas), flip, roll, lift, hide }
function applyPose(pose) {
  for (const id of ['carcaca_j4', 'bateria_j4', 'tampa_j4']) {
    sets[id].position.copy(rest[id].pos); sets[id].position.y += pose.z[id] || 0;
  }
  const pl = sets.placa_j4;
  pl.position.copy(rest.placa_j4.pos); pl.position.y += pose.z.placa_j4 || 0;
  pl.rotation.set(0, 0, pose.flip || 0); // gira em torno do comprimento da placa
  pl.updateMatrix();
  _m.multiplyMatrices(pl.matrix, chicoteRel).decompose(_p, _q, _s);
  sets.chicote_j4.position.copy(_p); sets.chicote_j4.quaternion.copy(_q);
  for (const id of ids) sets[id].visible = pose.hide ? !pose.hide[id] : true;
  roll.rotation.x = pose.roll || 0;
  roll.position.y = ROLL_Y + 0.06 + (pose.lift || 0);
  under.intensity = 1.4 * Math.abs(Math.sin((pose.roll || 0) / 2));
}

// trilhas: [início, fim, valor] em sequência
function track(p, keys, v0 = 0) {
  let v = v0;
  for (const [a, b, to] of keys) {
    if (p <= a) break;
    v = lerp(v, to, ease2(seg(p, a, b)));
    if (p < b) break;
  }
  return v;
}

// ------------------------------------------------------------------ roteiro do scroll
// remontagem: 1 carcaça (base) → 2 placa com chicote → 3 bateria → 4 tampa
const R = [[0.784, 0.80], [0.806, 0.852], [0.858, 0.902], [0.908, 0.952]];
const UPX = 1.9; // tampa e bateria sobem mais para liberar a vista da placa
function poseScroll(p) {
  const E = EXPLODE;
  return {
    z: {
      tampa_j4: track(p, [[0.315, 0.355, E.tampa_j4], [0.49, 0.515, E.tampa_j4 + UPX], [0.70, 0.73, E.tampa_j4], [...R[3], 0]]),
      bateria_j4: track(p, [[0.375, 0.415, E.bateria_j4], [0.49, 0.515, E.bateria_j4 + UPX], [0.70, 0.73, E.bateria_j4], [...R[2], 0]]),
      placa_j4: track(p, [[0.435, 0.475, E.placa_j4], [...R[1], 0]]),
    },
    flip: track(p, [[0.568, 0.598, Math.PI], [0.642, 0.668, 0]]),
    lift: track(p, [[0.196, 0.212, 26], [0.262, 0.276, 0]]),
    roll: track(p, [[0.206, 0.228, Math.PI], [0.250, 0.272, Math.PI * 2]]),
  };
}

const keys = [
  { p: 0.000, pos: [-13, 400, 0.01], tgt: [-13, 0, -6], fov: 35 },
  { p: 0.085, pos: [-13, 362, 0.01], tgt: [-13, 0, -6], fov: 35 },
  { p: 0.185, pos: [60, 170, 230], tgt: [-36, 4, 0], fov: 33 },
  { p: 0.215, pos: [40, 150, 215], tgt: [-34, 26, 0], fov: 33 },
  { p: 0.250, pos: [10, 175, 175], tgt: [-30, 30, 0], fov: 33 },
  { p: 0.278, pos: [-30, 48, 205], tgt: [-34, 10, 0], fov: 33 },
  { p: 0.305, pos: [-10, 62, 200], tgt: [-30, 10, 0], fov: 33 },
  { p: 0.36, pos: [80, 170, 225], tgt: [-18, 44, 0], fov: 33 },
  { p: 0.42, pos: [90, 165, 215], tgt: [-12, 40, 0], fov: 33 },
  { p: 0.495, pos: [105, 175, 175], tgt: [-12, 16, 0], fov: 33 },
  { p: 0.535, pos: [6, 200, 92], tgt: [-4, 33, 2], fov: 31 },
  { p: 0.565, pos: [-4, 196, 96], tgt: [-4, 33, 2], fov: 31 },
  { p: 0.61, pos: [-14, 190, 100], tgt: [-4, 34, 2], fov: 31 },
  { p: 0.642, pos: [-20, 186, 96], tgt: [-4, 34, 2], fov: 31 },
  { p: 0.68, pos: [-140, 120, 150], tgt: [-78, 30, 0], fov: 31 },
  { p: 0.705, pos: [-128, 110, 160], tgt: [-78, 30, 0], fov: 31 },
  { p: 0.745, pos: [125, 170, 270], tgt: [-28, 46, 0], fov: 33 },
  { p: 0.78, pos: [112, 165, 265], tgt: [-28, 44, 0], fov: 33 },
  { p: 0.80, pos: [104, 160, 250], tgt: [-26, 36, 0], fov: 33 },
  { p: 0.955, pos: [34, 135, 240], tgt: [-34, 12, 0], fov: 33 },
  { p: 1.000, pos: [80, 105, 255], tgt: [-34, 8, 0], fov: 33 },
];

const _sph = new THREE.Spherical(), _v = new THREE.Vector3();
function keyState(k, aspect) {
  const tgt = new THREE.Vector3(...k.tgt), pos = new THREE.Vector3(...k.pos);
  if (aspect < 1.3) { // tela estreita: afasta a câmera para caber
    const f = clamp(1.3 / aspect, 1, 2.4) * (aspect < 0.9 ? 1.0 : 0.92);
    pos.sub(tgt).multiplyScalar(Math.max(1, f)).add(tgt);
  }
  return { pos, tgt, fov: k.fov };
}
function interpCam(A, B, e) {
  const tgt = A.tgt.clone().lerp(B.tgt, e);
  const sa = new THREE.Spherical().setFromVector3(_v.copy(A.pos).sub(A.tgt));
  const sb = new THREE.Spherical().setFromVector3(_v.copy(B.pos).sub(B.tgt));
  let dT = sb.theta - sa.theta;
  if (dT > Math.PI) dT -= Math.PI * 2; if (dT < -Math.PI) dT += Math.PI * 2;
  _sph.set(lerp(sa.radius, sb.radius, e), lerp(sa.phi, sb.phi, e), sa.theta + dT * e);
  return { pos: new THREE.Vector3().setFromSpherical(_sph).add(tgt), tgt, fov: lerp(A.fov, B.fov, e) };
}
function camFromKeys(list, p, aspect, k = 'p') {
  let i = 0;
  while (i < list.length - 2 && p >= list[i + 1][k]) i++;
  const a = list[i], b = list[i + 1];
  return interpCam(keyState(a, aspect), keyState(b, aspect), ease(clamp((p - a[k]) / (b[k] - a[k]))));
}

// ------------------------------------------------------------------ rótulos (componentes apontados na tela)
// âncoras em coordenadas do EQUIPAMENTO (unidades normalizadas), na posição de repouso de cada conjunto
const CALLOUTS = [
  { from: 0.228, to: 0.250, items: [
    ['carcaca_j4', [0, 0.175, 0], 'Etiqueta de código de barras', [120, -90]],
    ['carcaca_j4', [0.02, -0.27, 0], 'Face "THIS SIDE UP"', [110, 90]],
    ['chicote_j4', [0, 0.55, 0.12], 'Passa-fios', [-120, -80]],
  ] },
  { from: 0.278, to: 0.312, items: [
    ['carcaca_j4', [-0.28, 0.134, 0.13], 'Indicação 4G ● ● GPS', [-60, -120]],
    ['tampa_j4', [-0.28, -0.32, 0.245], 'Tampa', [90, -110]],
    ['carcaca_j4', [-0.28, -0.3, 0.06], 'Carcaça', [120, 70]],
  ] },
  { from: 0.345, to: 0.372, items: [
    ['tampa_j4', [0.239, 0.02, 0.19], 'Alça de trava', [130, 60]],
    ['tampa_j4', [-0.212, -0.432, 0.19], 'Pinos dos cantos', [-90, 90]],
    ['tampa_j4', [0, 0.47, 0.21], 'Lingueta perimetral', [-130, -60]],
  ] },
  { from: 0.405, to: 0.432, items: [
    ['bateria_j4', [0.0135, 0.29, 0.212], 'Fita amarela', [-120, -80]],
    ['bateria_j4', [-0.205, 0.335, 0.15], 'Fios até os pads 1V8 / GND', [-150, 50]],
    ['bateria_j4', [0.12, -0.06, 0.212], 'Bolsa de alumínio', [110, -90]],
  ] },
  { from: 0.47, to: 0.498, items: [
    ['carcaca_j4', [0, 0.49, 0.16], 'Rasgo do passa-fios', [-120, -90]],
    ['carcaca_j4', [0.212, -0.432, 0.22], 'Ressaltos com furos', [110, 70]],
    ['carcaca_j4', [-0.25, 0.05, 0.212], 'Degrau da borda', [-80, 110]],
    ['carcaca_j4', [0, -0.2, 0.03], 'Fundo (THIS SIDE UP por fora)', [130, -70]],
  ] },
  { from: 0.528, to: 0.568, items: [
    ['placa_j4', [0.03, 0.282, 0.147], 'Blindagem superior', [-40, -150]],
    ['placa_j4', [0, 0.0, 0.153], 'Blindagem do módulo', [140, -60]],
    ['placa_j4', [-0.04, -0.26, 0.143], 'Porta-SIM (livre)', [-120, 110]],
    ['placa_j4', [0.136, -0.27, 0.139], 'Capacitores de tântalo', [130, 90]],
    ['placa_j4', [0.01, 0.38, 0.139], 'Pads do chicote', [70, -140]],
    ['placa_j4', [-0.205, 0.295, 0.125], 'Pads da bateria', [-140, -40]],
  ] },
  { from: 0.602, to: 0.642, items: [
    ['placa_j4', [0.003, 0.102, 0.031], 'Antena patch GNSS', [-30, -160]],
    ['placa_j4', [0.0, -0.25, 0.089], 'Módulo celular 4G', [130, 90]],
    ['placa_j4', [0.157, -0.37, 0.104], 'Pino de contato', [-130, 100]],
    ['chicote_j4', [0.0, 0.42, 0.097], 'Fios soldados nos pads', [-120, -120]],
  ] },
  { from: 0.675, to: 0.705, items: [
    ['chicote_j4', [0, 0.56, 0.16], 'Passa-fios (peça única)', [90, -130]],
    ['chicote_j4', [0.1, 1.59, 0.157], '4 vias: vermelho · preto · laranja · amarelo', [-20, -150]],
    ['chicote_j4', [-0.16, 1.59, 0.15], '3 vias: verde · branco · roxo', [-40, 140]],
    ['chicote_j4', [0.02, 1.0, 0.108], '7 fios individuais', [110, 120]],
  ] },
  { from: 0.738, to: 0.782, items: [
    ['tampa_j4', [-0.28, -0.25, 0.245], '05 Tampa', [110, -40]],
    ['bateria_j4', [0.0135, -0.125, 0.183], '04 Bateria', [130, -10]],
    ['placa_j4', [-0.235, -0.3, 0.118], '02 Placa principal', [130, 10]],
    ['chicote_j4', [-0.16, 1.5, 0.15], '03 Chicote', [-60, -110]],
    ['carcaca_j4', [-0.28, -0.3, 0.11], '01 Carcaça', [120, 60]],
  ] },
];
const calloutsEl = document.getElementById('callouts');
const _e = new THREE.Vector3();
for (const grp of CALLOUTS) {
  grp.els = grp.items.map(([set, pt, label, off]) => {
    const el = document.createElement('div');
    el.className = 'co';
    el.innerHTML = `<i></i><b></b><span>${label}</span>`;
    calloutsEl.appendChild(el);
    return { el, set, pt: _e.set(...eq(pt)).clone().sub(rest[set].pos), off, line: el.querySelector('b'), lbl: el.querySelector('span') };
  });
}
const _a = new THREE.Vector3();
function updateCallouts(p) {
  const W = window.innerWidth, Hh = window.innerHeight, k = isMobile() ? 0.55 : 1;
  for (const grp of CALLOUTS) {
    const o = clamp((p - grp.from) / 0.006) * clamp((grp.to - p) / 0.006);
    const placed = []; // retângulos já ocupados por rótulos deste grupo
    for (const c of grp.els) {
      if (o <= 0) { if (c.shown) { c.el.style.opacity = 0; c.el.style.visibility = 'hidden'; c.shown = false; } continue; }
      sets[c.set].updateWorldMatrix(true, false);
      _a.copy(c.pt).applyMatrix4(sets[c.set].matrixWorld).project(camera);
      const x = (_a.x + 1) / 2 * W, y = (1 - _a.y) / 2 * Hh;
      // o rótulo nunca sai da tela: encosta na borda e a linha acompanha
      const lw = c.lw || (c.lw = c.lbl.offsetWidth + 10);
      let dx = c.off[0] * k, dy = c.off[1] * k;
      if (dx >= 0) dx = Math.min(x + dx, W - lw - 6) - x; else dx = Math.max(x + dx, lw + 6) - x;
      // lado definitivo pelo sinal final; a caixa inteira fica dentro da tela
      { const right = dx >= 0, l0 = right ? x + dx : x + dx - lw, l1 = clamp(l0, 6, Math.max(6, W - lw - 6));
        dx = right ? l1 - x : l1 + lw - x; if (right && dx < 0 && dx > -1) dx = 0; c.right = right; }
      dy = clamp(y + dy, 70, Hh - 24) - y;
      const lh = c.lh || (c.lh = c.lbl.offsetHeight + 6);
      const rectAt = d => { const l = c.right ? x + dx : x + dx - lw; return [l, y + d - lh / 2, l + lw, y + d + lh / 2]; };
      const hit = r => placed.some(q => r[0] < q[2] && r[2] > q[0] && r[1] < q[3] && r[3] > q[1]);
      for (let tries = 0, dir = dy < 0 ? -1 : 1; tries < 8 && hit(rectAt(dy)); tries++) {
        const nd = dy + dir * lh;
        if (y + nd < 70 || y + nd > Hh - 24) { dir = -dir; dy += dir * lh * 2; } else dy = nd;
      }
      placed.push(rectAt(dy));
      const len = Math.hypot(dx, dy), ang = Math.atan2(dy, dx);
      c.el.style.opacity = o; c.el.style.visibility = 'visible'; c.shown = true;
      c.el.style.transform = `translate(${x.toFixed(1)}px, ${y.toFixed(1)}px)`;
      c.line.style.width = `${len.toFixed(1)}px`; c.line.style.transform = `rotate(${ang}rad)`;
      c.lbl.style.transform = `translate(${dx.toFixed(1)}px, ${dy.toFixed(1)}px) translate(${c.right ? '0' : '-100%'}, -50%)`;
      c.lbl.classList.toggle('l', !c.right);
    }
  }
}

// ------------------------------------------------------------------ interface
const chapters = [...document.querySelectorAll('[data-chapter]')].map(el => ({ el, from: +el.dataset.from, to: +el.dataset.to }));
const navLinks = [...document.querySelectorAll('[data-goto]')];
const progressBar = document.querySelector('.progress i');
const stepEls = [...document.querySelectorAll('[data-step]')];
const hint = document.querySelector('.hint');
let activeChapter = -1;
function maxScroll() { return document.documentElement.scrollHeight - window.innerHeight; }
navLinks.forEach(a => a.addEventListener('click', e => {
  e.preventDefault();
  window.scrollTo({ top: +a.dataset.goto * maxScroll() + 2, behavior: reduceMotion ? 'auto' : 'smooth' });
}));
function updateUI(p) {
  progressBar.style.transform = `scaleX(${p})`;
  if (FILM) for (const c of chapters) { // gravação: o texto entra e sai em função do scroll, sem relógio
    const o = clamp((p - c.from) / 0.012) * (c.to > 1 ? 1 : clamp((c.to - p) / 0.012));
    c.el.style.opacity = o; c.el.style.visibility = o > 0 ? 'visible' : 'hidden';
  }
  const idx = chapters.findIndex(c => p >= c.from && p < c.to);
  const ci = idx === -1 ? chapters.length - 1 : idx;
  if (ci !== activeChapter) { chapters.forEach((c, i) => c.el.classList.toggle('active', i === ci)); activeChapter = ci; }
  navLinks.forEach(a => a.classList.toggle('on', p >= +a.dataset.goto && p < +a.dataset.until));
  stepEls.forEach((el, i) => { el.classList.toggle('done', p >= R[i][1]); el.classList.toggle('on', p >= R[i][0] - 0.004 && p < R[i][1] + 0.004); });
  hint.classList.toggle('gone', p > 0.02);
  updateCallouts(p);
}

function viewOffset(on = 1) {
  const W = window.innerWidth, Hh = window.innerHeight, aspect = W / Hh;
  if (on === 'video') { camera.setViewOffset(W, Hh, -W * 0.05, Hh * 0.08, W, Hh); return; }
  if (!on) { camera.clearViewOffset(); return; }
  if (aspect >= 1.15) camera.setViewOffset(W, Hh, -W * 0.16, 0, W, Hh);
  else if (aspect < 0.95) camera.setViewOffset(W, Hh, 0, Hh * 0.17, W, Hh);
  else camera.setViewOffset(W, Hh, -W * 0.08, Hh * 0.08, W, Hh);
}

// ------------------------------------------------------------------ estado em função do scroll
let introStart = Infinity, stillMode = qs.has('still') || FILM;
function applyScroll(p) {
  const intro = stillMode ? 1 : seg(performance.now() - introStart, 300, 3000);
  sheetU.uReveal.value = lerp(-0.06, 1.12, Math.max(ease(intro), ease(seg(p, 0.01, 0.08))));
  const sc = seg(p, 0.095, 0.18);
  scanU.uScan.value = sc <= 0 ? -1e4 : sc >= 1 ? 1e4 : lerp(-118, 44, ease(sc));
  scanU.uGlow.value = sc > 0 && sc < 1 ? 1 : 0;
  applyPose(poseScroll(p));
}

function setCamera(c, offset = 1) {
  camera.position.copy(c.pos); camera.lookAt(c.tgt); camera.fov = c.fov;
  camera.aspect = window.innerWidth / window.innerHeight;
  viewOffset(offset);
  camera.updateProjectionMatrix();
  camera.updateMatrixWorld();
}

let shadowDirty = true;
function render() {
  if (shadowDirty) { key.shadow.needsUpdate = true; shadowDirty = false; }
  renderer.render(scene, camera);
}

function draw(p) {
  setCamera(camFromKeys(keys, p, window.innerWidth / window.innerHeight));
  applyScroll(p);
  scene.updateMatrixWorld();
  updateUI(p);
  shadowDirty = true;
  render();
}

// ------------------------------------------------------------------ loop (desenha só quando algo muda)
let target = 0, current = 0, last = performance.now(), lastDrawn = -1, needsDraw = true, introDone = false, drewLast = false;
function readScroll() { target = clamp(window.scrollY / Math.max(1, maxScroll())); }
window.addEventListener('scroll', readScroll, { passive: true });
const frameTimes = []; let qualityCooldown = 0;
function adaptQuality(dt) {
  frameTimes.push(dt);
  if (frameTimes.length < 24) return;
  const avg = frameTimes.reduce((a, b) => a + b, 0) / frameTimes.length; frameTimes.length = 0;
  if (qualityCooldown-- > 0) return;
  let next = pixelRatio;
  if (avg > 0.022 && pixelRatio > 0.75) next = Math.max(0.75, pixelRatio - 0.2);
  else if (avg < 0.012 && pixelRatio < maxRatio()) next = Math.min(maxRatio(), pixelRatio + 0.1);
  if (next !== pixelRatio) { pixelRatio = next; renderer.setPixelRatio(pixelRatio); qualityCooldown = 2; }
}
function frame(now) {
  const dt = Math.min(0.1, (now - last) / 1000); last = now;
  if (free.active) { frameFree(now, dt); requestAnimationFrame(frame); return; }
  current += (target - current) * (reduceMotion ? 1 : 1 - Math.exp(-dt * 8));
  if (Math.abs(target - current) < 0.00002) current = target;
  const introRunning = !introDone && now - introStart < 3100;
  if (!introRunning && introStart !== Infinity) introDone = true;
  if (needsDraw || introRunning || current !== lastDrawn) {
    draw(current);
    lastDrawn = current; needsDraw = false;
    if (drewLast) adaptQuality(dt);
    drewLast = true;
  } else drewLast = false;
  if (!STILL || stillFrames-- > 0) requestAnimationFrame(frame);
}
// ?still (testes): desenha poucos quadros e para
const STILL = qs.has('still');
let stillFrames = 2;

function onResize() {
  const W = window.innerWidth, Hh = window.innerHeight;
  pixelRatio = Math.min(pixelRatio, maxRatio());
  renderer.setPixelRatio(pixelRatio);
  renderer.setSize(W, Hh);
  if (!free.active) readScroll();
  needsDraw = true;
}
window.addEventListener('resize', onResize);

// ------------------------------------------------------------------ modo livre
const free = { active: false, controls: null, e: 1, eTarget: 1, flip: 0, flipTarget: 0, saved: 0, hidden: {} };
const freeHelp = document.getElementById('free-help');
const chipsEl = document.querySelector('.free-sets');
const btnMont = document.getElementById('btn-montado'), btnExp = document.getElementById('btn-explodido'), btnFlip = document.getElementById('btn-virar');
const touchUI = window.matchMedia('(pointer: coarse)').matches;
freeHelp.textContent = touchUI ? 'Arraste para girar · pinça para aproximar · dois dedos para mover'
  : 'Arraste para girar · role para aproximar · botão direito para mover';
for (const s of SETS) {
  const b = document.createElement('button');
  b.type = 'button'; b.className = 'on'; b.dataset.set = s.id;
  b.innerHTML = `<em>${s.n}</em>${s.nome}`;
  b.title = s.id;
  b.addEventListener('click', () => { free.hidden[s.id] = !free.hidden[s.id]; b.classList.toggle('on', !free.hidden[s.id]); needsDraw = true; shadowDirty = true; });
  chipsEl.appendChild(b);
}
// explosão contínua (0 = MONTADO, 1 = EXPLODIDO) seguindo a ordem de montagem
function poseExplode(e, flip) {
  const E = EXPLODE, st = i => ease2(seg(e, i / 3, (i + 1) / 3));
  return {
    z: { tampa_j4: E.tampa_j4 * st(0), bateria_j4: E.bateria_j4 * st(1), placa_j4: E.placa_j4 * st(2) },
    flip, hide: free.hidden,
  };
}
function setFreeButtons() {
  btnMont.classList.toggle('on', free.eTarget === 0);
  btnExp.classList.toggle('on', free.eTarget === 1);
  btnFlip.disabled = free.eTarget !== 1;
  btnFlip.classList.toggle('on', free.flipTarget !== 0);
}
btnMont.addEventListener('click', () => { free.flipTarget = 0; free.eTarget = 0; setFreeButtons(); });
btnExp.addEventListener('click', () => { free.eTarget = 1; setFreeButtons(); });
btnFlip.addEventListener('click', () => { if (free.eTarget !== 1) return; free.flipTarget = free.flipTarget ? 0 : Math.PI; setFreeButtons(); });

function drawFree() {
  scanU.uScan.value = 1e4; scanU.uGlow.value = 0; sheetU.uReveal.value = 1.12;
  applyPose(poseExplode(free.e, free.flip));
  scene.updateMatrixWorld();
  shadowDirty = true;
  render();
}
function frameFree(now, dt) {
  let changed = needsDraw;
  changed = free.controls.update() || changed;
  // a placa só gira quando já está fora da carcaça; ao montar, ela desvira antes
  if (free.flip !== free.flipTarget) {
    const k = Math.sign(free.flipTarget - free.flip) * dt * 2.6;
    free.flip = Math.abs(free.flipTarget - free.flip) < Math.abs(k) ? free.flipTarget : free.flip + k; changed = true;
  } else if (free.e !== free.eTarget && (free.eTarget === 1 || free.flip === 0)) {
    const k = Math.sign(free.eTarget - free.e) * dt / 2.4;
    free.e = clamp(Math.abs(free.eTarget - free.e) < Math.abs(k) ? free.eTarget : free.e + k); changed = true;
  }
  if (changed) { drawFree(); needsDraw = false; if (drewLast) adaptQuality(dt); drewLast = true; } else drewLast = false;
}
function enterFree() {
  if (free.active || !document.body.classList.contains('ready')) return;
  free.active = true; free.saved = window.scrollY;
  document.documentElement.classList.add('free-lock');
  document.body.classList.add('free');
  calloutsEl.querySelectorAll('.co').forEach(c => { c.style.opacity = 0; c.style.visibility = 'hidden'; });
  CALLOUTS.forEach(g => g.els.forEach(c => { c.shown = false; }));
  const pose = poseScroll(current);
  free.e = free.eTarget = pose.z.placa_j4 > 0.01 ? 1 : 0;
  free.flip = free.flipTarget = 0;
  setFreeButtons();
  const c = free.controls = new OrbitControls(camera, canvas);
  c.enableDamping = true; c.dampingFactor = 0.08;
  c.minDistance = 50; c.maxDistance = 620; c.maxPolarAngle = Math.PI * 0.49;
  camera.clearViewOffset();
  const aspect = window.innerWidth / window.innerHeight;
  const start = keyState({ pos: [80, 150, 250], tgt: [-34, 30, 0], fov: 35 }, aspect);
  camera.position.copy(start.pos); c.target.copy(start.tgt);
  camera.fov = aspect < 1 ? 50 : 35; camera.updateProjectionMatrix();
  c.addEventListener('change', () => { c.target.x = clamp(c.target.x, -130, 60); c.target.y = clamp(c.target.y, 0, 110); c.target.z = clamp(c.target.z, -50, 50); });
  c.update();
  needsDraw = true;
}
function exitFree() {
  if (!free.active) return;
  free.active = false;
  free.controls.dispose(); free.controls = null;
  free.hidden = {}; chipsEl.querySelectorAll('button').forEach(b => b.classList.add('on'));
  document.documentElement.classList.remove('free-lock');
  document.body.classList.remove('free');
  window.scrollTo(0, free.saved);
  readScroll(); current = target;
  needsDraw = true;
}
document.querySelectorAll('[data-explore]').forEach(b => b.addEventListener('click', e => { e.preventDefault(); enterFree(); }));
document.getElementById('btn-exit').addEventListener('click', exitFree);
window.addEventListener('keydown', e => { if (free.active && e.code === 'Escape') exitFree(); });

// ------------------------------------------------------------------ preparação: modelo, folha, shaders e sombras na tela de carregamento
async function prepare() {
  await loadModel();
  setupMaterials();
  try { await Promise.race([document.fonts.ready, new Promise(r => setTimeout(r, 1800))]); } catch (e) { /* sem fontes da web: usa as do sistema */ }
  const ppu = isMobile() ? 7 : 11;
  const { paper, ink } = drawSheet(ppu);
  const tP = new THREE.CanvasTexture(paper), tI = new THREE.CanvasTexture(ink);
  for (const t of [tP, tI]) { t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = maxAniso; }
  sheetMat.map = tP; sheetMat.userData.ink = tI; sheetMat.needsUpdate = true;
  sheet.visible = true;
  scanU.uScan.value = 1e4;
  applyPose(poseExplode(1, 0));
  setCamera({ pos: new THREE.Vector3(60, 170, 230), tgt: new THREE.Vector3(-36, 4, 0), fov: 33 }, 0);
  scene.updateMatrixWorld();
  try { await renderer.compileAsync(scene, camera); } catch (e) { /* navegadores antigos compilam no primeiro quadro */ }
  key.shadow.needsUpdate = true;
  renderer.render(scene, camera);
}

prepare().then(() => {
  if (FILM) { document.body.classList.add('ready'); return; } // no modo filme cada quadro é pedido de fora
  readScroll(); current = target;
  requestAnimationFrame(t => {
    last = t; introStart = t; needsDraw = true; frame(t);
    document.body.classList.add('ready');
  });
  if (qs.has('p')) { window.scrollTo(0, +qs.get('p') * maxScroll()); readScroll(); current = target; needsDraw = true; }
}).catch(e => {
  console.error(e);
  const l = document.querySelector('#loader small'); if (l) l.textContent = 'não foi possível abrir o modelo 3D';
});

// ------------------------------------------------------------------ modo filme (?film): quadros exatos para gravar vídeos
// __film.scroll(p): quadro do scroll com a interface; __film.video(t): roteiro do vídeo (desmonta e remonta)
const VIDEO = {
  T: 30,
  cam: [
    { t: 0.0, pos: [105, 60, 190], tgt: [-34, 4, 0], fov: 30 },
    { t: 3.0, pos: [60, 74, 205], tgt: [-34, 6, 0], fov: 30 },
    { t: 4.2, pos: [80, 135, 205], tgt: [-26, 32, 0], fov: 32 },
    { t: 10.4, pos: [100, 125, 205], tgt: [-28, 40, 0], fov: 32 },
    { t: 13.0, pos: [118, 128, 225], tgt: [-30, 44, 0], fov: 32 },
    { t: 15.8, pos: [-70, 128, 230], tgt: [-30, 44, 0], fov: 32 },
    { t: 17.0, pos: [-40, 128, 225], tgt: [-30, 40, 0], fov: 32 },
    { t: 23.4, pos: [80, 120, 215], tgt: [-30, 26, 0], fov: 32 },
    { t: 26.0, pos: [100, 70, 195], tgt: [-30, 6, 0], fov: 30 },
    { t: 30.0, pos: [52, 80, 215], tgt: [-30, 4, 0], fov: 30 },
  ],
  pose(t) {
    const E = EXPLODE;
    return {
      z: {
        tampa_j4: track(t, [[3.6, 5.6, E.tampa_j4], [21.2, 23.2, 0]]),
        bateria_j4: track(t, [[5.8, 7.8, E.bateria_j4], [18.9, 20.9, 0]]),
        placa_j4: track(t, [[8.0, 10.0, E.placa_j4], [16.6, 18.6, 0]]),
      },
    };
  },
  caps: [
    { a: 0.0, b: 3.3, k: 'RealTracker', h: 'J4', s: 'Composição 3D · 5 conjuntos separados' },
    { a: 3.4, b: 5.7, k: 'Desmontagem · 1/3', h: 'Tampa', s: 'Comprimento e largura integrais da carcaça' },
    { a: 5.7, b: 7.9, k: 'Desmontagem · 2/3', h: 'Bateria', s: 'Sai de cima das blindagens' },
    { a: 7.9, b: 10.2, k: 'Desmontagem · 3/3', h: 'Placa com o chicote', s: 'O passa-fios sobe pelo rasgo da parede' },
    { a: 10.4, b: 16.2, k: 'Posição EXPLODIDO', h: 'Cinco conjuntos', s: 'Uma única placa principal · escala normalizada' },
    { a: 16.4, b: 18.8, k: 'Montagem · 1/3', h: 'Placa com o chicote', s: 'Antena voltada para a face THIS SIDE UP' },
    { a: 18.8, b: 21.1, k: 'Montagem · 2/3', h: 'Bateria', s: 'Sobre as blindagens; o porta-SIM fica livre' },
    { a: 21.1, b: 23.5, k: 'Montagem · 3/3', h: 'Tampa', s: 'Lingueta no degrau, pinos nos furos dos cantos' },
    { a: 23.7, b: 30.5, k: 'Posição MONTADO', h: 'J4', s: 'Modelo 3D com peças separadas para montar e desmontar' },
  ],
  tags: { from: 10.8, to: 16.0 },
};
const filmUI = document.getElementById('film-ui');
const filmK = filmUI.querySelector('.fk'), filmH = filmUI.querySelector('.fh'), filmS = filmUI.querySelector('.fs');
const filmTags = SETS.map(s => {
  const el = document.createElement('div'); el.className = 'ftag';
  el.innerHTML = `<em>${s.n}</em>${s.nome}`;
  filmUI.querySelector('.ftags').appendChild(el);
  return el;
});
const TAG_PTS = {
  carcaca_j4: [-0.28, -0.32, 0.11], placa_j4: [-0.235, -0.32, 0.118], bateria_j4: [-0.1865, -0.1, 0.183],
  tampa_j4: [-0.28, -0.3, 0.245], chicote_j4: [-0.06, 1.2, 0.1],
};
function videoFrame(t) {
  const aspect = window.innerWidth / window.innerHeight;
  setCamera(camFromKeys(VIDEO.cam, t, aspect, 't'), 'video');
  scanU.uScan.value = 1e4; scanU.uGlow.value = 0; sheetU.uReveal.value = 1.12;
  applyPose(VIDEO.pose(t));
  scene.updateMatrixWorld();
  shadowDirty = true;
  render();
  const cap = VIDEO.caps.find(c => t >= c.a && t < c.b);
  if (cap) {
    const o = clamp((t - cap.a) / 0.35) * clamp((cap.b - t) / 0.35);
    filmUI.querySelector('.fcap').style.opacity = o;
    filmK.textContent = cap.k; filmH.textContent = cap.h; filmS.textContent = cap.s;
  } else filmUI.querySelector('.fcap').style.opacity = 0;
  filmUI.querySelector('.fend').style.opacity = clamp((t - 26.2) / 0.6);
  const to = clamp((t - VIDEO.tags.from) / 0.4) * clamp((VIDEO.tags.to - t) / 0.4);
  SETS.forEach((s, i) => {
    const el = filmTags[i];
    el.style.opacity = to;
    if (to <= 0) return;
    _a.set(...eq(TAG_PTS[s.id])).sub(rest[s.id].pos).applyMatrix4(sets[s.id].matrixWorld).project(camera);
    el.style.transform = `translate(${((_a.x + 1) / 2 * window.innerWidth).toFixed(1)}px, ${((1 - _a.y) / 2 * window.innerHeight).toFixed(1)}px) translate(-100%, -50%)`;
  });
}
if (FILM) {
  document.body.classList.add('film');
  window.__film = {
    ready: () => document.body.classList.contains('ready'),
    scroll(p) { document.body.classList.remove('film-video'); current = target = lastDrawn = p; draw(p); return true; },
    video(t) { document.body.classList.add('film-video'); videoFrame(t); return true; },
    T: VIDEO.T,
  };
}
if (qs.has('debug')) window.__app = { renderer, scene, sets, rest, camera, applyPose, poseExplode, enterFree, exitFree, free };
