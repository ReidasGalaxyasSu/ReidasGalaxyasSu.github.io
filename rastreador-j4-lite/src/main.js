import * as THREE from 'three';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { buildJ4 } from './model.js';
import { D, SETS, EXPLODE } from './layout.js';
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
scene.fog = new THREE.Fog(BG, 520, 1250);
const camera = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight, 1, 4000);
const pmrem = new THREE.PMREMGenerator(renderer);
scene.environment = pmrem.fromScene(new RoomEnvironment(renderer), 0.04).texture;

scene.add(new THREE.HemisphereLight('#ffffff', '#c9c6d4', 0.85));
const key = new THREE.DirectionalLight('#fffaf3', 2.1);
key.position.set(-110, 210, 150); key.target.position.set(-15, 0, 0);
key.castShadow = true;
key.shadow.mapSize.set(2048, 2048);
Object.assign(key.shadow.camera, { left: -170, right: 170, top: 150, bottom: -150, near: 40, far: 520 });
key.shadow.bias = -0.0004; key.shadow.normalBias = 0.25; key.shadow.radius = 4;
key.shadow.autoUpdate = false;
scene.add(key, key.target);
const rim = new THREE.DirectionalLight('#e6e0ff', 1.15);
rim.position.set(140, 120, -220);
scene.add(rim);

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

// ------------------------------------------------------------------ o equipamento
const _tb = performance.now();
const { root, sets, M } = buildJ4();
const buildMs = performance.now() - _tb;
// deitado sobre a folha: tampa para cima (+Y), chicote para a esquerda (-X), lateral -X do equipamento voltada para a câmera
const dev = new THREE.Group();
dev.quaternion.setFromRotationMatrix(new THREE.Matrix4().makeBasis(new THREE.Vector3(0, 0, -1), new THREE.Vector3(-1, 0, 0), new THREE.Vector3(0, 1, 0)));
dev.position.y = 0.06;
dev.add(root);
scene.add(dev);

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
const allMats = new Set();
root.traverse(o => {
  if (!o.isMesh) return;
  o.castShadow = true; o.receiveShadow = true;
  o.customDepthMaterial = depthMat;
  (Array.isArray(o.material) ? o.material : [o.material]).forEach(m => allMats.add(m));
});
const maxAniso = renderer.capabilities.getMaxAnisotropy();
for (const m of allMats) {
  patchScan(m);
  m.envMapIntensity = m.metalness > 0.5 ? 1.0 : 0.85;
  if (m.map) m.map.anisotropy = maxAniso;
}
M.texto_on_off.polygonOffset = true; M.texto_on_off.polygonOffsetFactor = -2;
for (const k of ['painel_tampa', 'painel_fundo', 'etiqueta_imei']) { M[k].polygonOffset = true; M[k].polygonOffsetFactor = -1; }

// posições de repouso (MONTADO) e vínculo do chicote com a placa
const ids = SETS.map(s => s.id);
const rest = {};
for (const id of ids) rest[id] = { pos: sets[id].position.clone(), mat: sets[id].matrix.clone() };
const placaRestInv = new THREE.Matrix4().makeTranslation(rest.placa_j4_lite.pos).invert();
const chicoteRel = placaRestInv.clone().multiply(new THREE.Matrix4().makeTranslation(rest.chicote_j4_lite.pos));
const _m = new THREE.Matrix4(), _q = new THREE.Quaternion(), _s = new THREE.Vector3(), _p = new THREE.Vector3();

function applyPose(pose) {
  for (const id of ['carcaca_j4_lite', 'bateria_j4_lite', 'protecao_interna_j4_lite', 'tampa_externa_j4_lite']) {
    sets[id].position.copy(rest[id].pos); sets[id].position.z += pose.z[id] || 0;
  }
  const pl = sets.placa_j4_lite;
  pl.position.copy(rest.placa_j4_lite.pos); pl.position.z += pose.z.placa_j4_lite || 0;
  pl.rotation.set(0, pose.flip || 0, 0);
  pl.updateMatrix();
  _m.multiplyMatrices(pl.matrix, chicoteRel).decompose(_p, _q, _s);
  sets.chicote_j4_lite.position.copy(_p); sets.chicote_j4_lite.quaternion.copy(_q);
  for (const id of ids) sets[id].visible = pose.hide ? !pose.hide[id] : true;
  const [g1, g2] = pose.led || [0, 0];
  M.led_status_1.emissive.setRGB(0.15 * g1, 1.0 * g1, 0.45 * g1);
  M.led_status_2.emissive.setRGB(0.2 * g2, 0.5 * g2, 1.0 * g2);
}

// LEDs de status: piscam em ritmos diferentes (t em ms)
const ledBlink = (on, t) => (on > 0 ? [on * (0.25 + 0.75 * (Math.sin(t / 260) > 0 ? 1 : 0.15)), on * (0.25 + 0.75 * (Math.sin(t / 140 + 1) > 0.3 ? 1 : 0.1))] : [0, 0]);

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
// remontagem: 1 bateria → 2 conjunto → 3 proteção → 4 tampa
const R = [[0.852, 0.878], [0.884, 0.912], [0.918, 0.942], [0.948, 0.972]];
function poseScroll(p, time = null) {
  const E = EXPLODE;
  return {
    z: {
      tampa_externa_j4_lite: track(p, [[0.305, 0.365, E.tampa_externa_j4_lite], [0.632, 0.668, E.tampa_externa_j4_lite + 75], [0.80, 0.836, E.tampa_externa_j4_lite], [...R[3], 0]]),
      protecao_interna_j4_lite: track(p, [[0.39, 0.45, E.protecao_interna_j4_lite], [0.632, 0.668, E.protecao_interna_j4_lite + 75], [0.80, 0.836, E.protecao_interna_j4_lite], [...R[2], 0]]),
      placa_j4_lite: track(p, [[0.48, 0.54, E.placa_j4_lite], [...R[1], 0]]),
      bateria_j4_lite: track(p, [[0.48, 0.54, E.placa_j4_lite], [0.565, 0.615, E.bateria_j4_lite], [...R[0], E.placa_j4_lite], [...R[1], 0]]),
    },
    flip: track(p, [[0.712, 0.748, Math.PI], [0.776, 0.806, 0]]),
    led: ledBlink(seg(p, 0.645, 0.66) * (1 - seg(p, 0.7, 0.715)), time ?? p * 2400),
  };
}

const keys = [
  { p: 0.000, pos: [16, 350, 0.01], tgt: [16, 0, -4], fov: 35 },
  { p: 0.095, pos: [12, 318, 0.01], tgt: [12, 0, -4], fov: 35 },
  { p: 0.205, pos: [60, 165, 205], tgt: [-22, 4, 0], fov: 33 },
  { p: 0.255, pos: [-76, 80, 212], tgt: [-20, 6, 0], fov: 33 },
  { p: 0.30, pos: [62, 120, 185], tgt: [-14, 12, 0], fov: 33 },
  { p: 0.372, pos: [82, 150, 205], tgt: [-12, 30, 0], fov: 33 },
  { p: 0.462, pos: [24, 190, 128], tgt: [-4, 40, 0], fov: 33 },
  { p: 0.552, pos: [118, 135, 215], tgt: [-14, 30, 0], fov: 33 },
  { p: 0.628, pos: [86, 36, 158], tgt: [6, 30, 0], fov: 33 },
  { p: 0.668, pos: [26, 196, 104], tgt: [4, 42, 2], fov: 31 },
  { p: 0.708, pos: [12, 188, 96], tgt: [4, 43, 2], fov: 31 },
  { p: 0.752, pos: [-10, 192, 100], tgt: [4, 43, 2], fov: 31 },
  { p: 0.778, pos: [-24, 186, 94], tgt: [4, 43, 2], fov: 31 },
  { p: 0.814, pos: [-136, 92, 96], tgt: [-60, 42, 0], fov: 31 },
  { p: 0.842, pos: [-116, 84, 110], tgt: [-58, 42, 0], fov: 31 },
  { p: 0.872, pos: [104, 145, 212], tgt: [-14, 32, 0], fov: 33 },
  { p: 0.972, pos: [26, 128, 222], tgt: [-18, 14, 0], fov: 33 },
  { p: 1.000, pos: [70, 96, 236], tgt: [-20, 6, 0], fov: 33 },
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
// âncoras em coordenadas do equipamento, na posição de repouso de cada conjunto
const CALLOUTS = [
  { from: 0.40, to: 0.47, items: [
    ['protecao_interna_j4_lite', [0, 23.5, 11.6], 'Acesso à chave', [-150, -70]],
    ['protecao_interna_j4_lite', [0, -0.6, 11.1], 'Fenda do micro-USB', [-60, -110]],
    ['protecao_interna_j4_lite', [0, -16.4, 11.1], 'Janela do SIM', [90, -90]],
  ] },
  { from: 0.505, to: 0.556, items: [
    ['carcaca_j4_lite', [0, 43, 9], 'Encaixe do passa-fios', [-150, 40]],
    ['carcaca_j4_lite', [-12.2, -10, 11], 'Travas da proteção', [40, 80]],
    ['carcaca_j4_lite', [11.3, -6, 5.9], 'Apoios da placa', [80, -60]],
  ] },
  { from: 0.585, to: 0.632, items: [
    ['bateria_j4_lite', [0, -1.6, 5.4], 'Fita amarela', [-140, -60]],
    ['bateria_j4_lite', [-3, 2.3, 5.2], 'Fios curtos até a placa', [-170, 30]],
    ['bateria_j4_lite', [-9.8, -22, 3.7], 'Bolsa de alumínio', [100, 70]],
  ] },
  { from: 0.664, to: 0.712, items: [
    ['placa_j4_lite', [0, 11.6, 9.3], 'Antena GPS cerâmica', [-30, -165]],
    ['placa_j4_lite', [0.6, 23.5, 8.9], 'Chave liga/desliga', [-70, 135]],
    ['placa_j4_lite', [0, -0.6, 9.3], 'Micro-USB', [40, -150]],
    ['placa_j4_lite', [0, -15, 8.4], 'Porta-SIM', [110, -125]],
    ['placa_j4_lite', [2.4, -26.2, 7.5], 'LEDs de status', [110, 95]],
    ['chicote_j4_lite', [-2.1, 36.5, 8.0], 'Fios do chicote', [-110, -120]],
  ] },
  { from: 0.748, to: 0.778, items: [
    ['placa_j4_lite', [4.8, 13.3, 3.7], 'Blindagem metálica', [70, -160]],
    ['placa_j4_lite', [6.4, 28.2, 1.7], 'Capacitor eletrolítico', [-10, -175]],
    ['placa_j4_lite', [-5.7, 18.7, 3.1], 'Indutor 470', [40, 150]],
    ['placa_j4_lite', [0, -16, 5.9], 'Área da bateria (lisa)', [110, 110]],
  ] },
  { from: 0.812, to: 0.846, items: [
    ['chicote_j4_lite', [0, 90.4, 6.6], 'Conector de 4 contatos', [10, -170]],
    ['chicote_j4_lite', [-5.9, 86, 6.6], 'Travas laterais', [40, 120]],
    ['chicote_j4_lite', [0, 68, 9.6], 'Termorretrátil', [20, -140]],
    ['chicote_j4_lite', [0, 55, 4.0], 'Cabo revestido', [-10, 150]],
    ['chicote_j4_lite', [0, 45.6, 10.4], 'Passa-fios', [90, -110]],
  ] },
];
const calloutsEl = document.getElementById('callouts');
for (const grp of CALLOUTS) {
  grp.els = grp.items.map(([set, pt, label, off]) => {
    const el = document.createElement('div');
    el.className = 'co';
    el.innerHTML = `<i></i><b></b><span>${label}</span>`;
    calloutsEl.appendChild(el);
    return { el, set, pt: new THREE.Vector3(...pt).sub(rest[set].pos), off, line: el.querySelector('b'), lbl: el.querySelector('span') };
  });
}
const _a = new THREE.Vector3();
function updateCallouts(p) {
  const W = window.innerWidth, Hh = window.innerHeight, k = isMobile() ? 0.55 : 1;
  for (const grp of CALLOUTS) {
    const o = clamp((p - grp.from) / 0.008) * clamp((grp.to - p) / 0.008);
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
      dy = clamp(y + dy, 70, Hh - 24) - y;
      // desvia de rótulos já colocados (telas estreitas)
      const lh = c.lh || (c.lh = c.lbl.offsetHeight + 6);
      const rectAt = d => { const l = dx >= 0 ? x + dx : x + dx - lw; return [l, y + d - lh / 2, l + lw, y + d + lh / 2]; };
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
      c.lbl.style.transform = `translate(${dx.toFixed(1)}px, ${dy.toFixed(1)}px) translate(${dx < 0 ? '-100%' : '0'}, -50%)`;
      c.lbl.classList.toggle('l', dx < 0);
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
  sheetU.uReveal.value = lerp(-0.06, 1.12, Math.max(ease(intro), ease(seg(p, 0.01, 0.09))));
  const sc = seg(p, 0.105, 0.2);
  scanU.uScan.value = sc <= 0 ? -1e4 : sc >= 1 ? 1e4 : lerp(-96, 48, ease(sc));
  scanU.uGlow.value = sc > 0 && sc < 1 ? 1 : 0;
  applyPose(poseScroll(p, FILM ? null : performance.now()));
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
  const ledAnim = current > 0.645 && current < 0.715;
  if (needsDraw || introRunning || ledAnim || current !== lastDrawn) {
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
  const E = EXPLODE, st = i => ease2(seg(e, i * 0.25, (i + 1) * 0.25));
  const conj = E.placa_j4_lite * st(2);
  return {
    z: {
      tampa_externa_j4_lite: E.tampa_externa_j4_lite * st(0),
      protecao_interna_j4_lite: E.protecao_interna_j4_lite * st(1),
      placa_j4_lite: conj,
      bateria_j4_lite: lerp(conj, E.bateria_j4_lite, st(3)),
    },
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
  free.e = free.eTarget = pose.z.placa_j4_lite > 1 ? 1 : 0;
  free.flip = free.flipTarget = 0;
  setFreeButtons();
  const c = free.controls = new OrbitControls(camera, canvas);
  c.enableDamping = true; c.dampingFactor = 0.08;
  c.minDistance = 50; c.maxDistance = 520; c.maxPolarAngle = Math.PI * 0.49;
  camera.clearViewOffset();
  const aspect = window.innerWidth / window.innerHeight;
  const start = keyState({ pos: [70, 120, 210], tgt: [-18, 20, 0], fov: 35 }, aspect);
  camera.position.copy(start.pos); c.target.copy(start.tgt);
  camera.fov = aspect < 1 ? 50 : 35; camera.updateProjectionMatrix();
  c.addEventListener('change', () => { c.target.x = clamp(c.target.x, -100, 60); c.target.y = clamp(c.target.y, 0, 90); c.target.z = clamp(c.target.z, -40, 40); });
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

// ------------------------------------------------------------------ preparação: folha, shaders e sombras na tela de carregamento
async function prepare() {
  try { await Promise.race([document.fonts.ready, new Promise(r => setTimeout(r, 1800))]); } catch (e) { /* sem fontes da web: usa as do sistema */ }
  const ppu = isMobile() ? 8 : 12;
  const { paper, ink } = drawSheet(ppu);
  const tP = new THREE.CanvasTexture(paper), tI = new THREE.CanvasTexture(ink);
  for (const t of [tP, tI]) { t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = maxAniso; }
  sheetMat.map = tP; sheetMat.userData.ink = tI; sheetMat.needsUpdate = true;
  sheet.visible = true;
  scanU.uScan.value = 1e4;
  applyPose(poseExplode(1, 0));
  setCamera({ pos: new THREE.Vector3(60, 165, 205), tgt: new THREE.Vector3(-22, 4, 0), fov: 33 }, 0);
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
});

// ------------------------------------------------------------------ modo filme (?film): quadros exatos para gravar vídeos
// __film.scroll(p): quadro do scroll com a interface; __film.video(t): roteiro do vídeo (desmonta e remonta)
const VIDEO = {
  T: 36,
  cam: [
    { t: 0.0, pos: [97.3, 48.2, 161.3], tgt: [-16, 4, 0], fov: 30 },
    { t: 3.2, pos: [53.1, 61.6, 170.9], tgt: [-16, 5, 0], fov: 30 },
    { t: 4.6, pos: [66, 103.2, 164.8], tgt: [-14, 28, 0], fov: 32 },
    { t: 9.5, pos: [80.8, 99.2, 164.8], tgt: [-12, 32, 0], fov: 32 },
    { t: 14.6, pos: [87.2, 90.4, 163.2], tgt: [-12, 36, 0], fov: 32 },
    { t: 20.4, pos: [-96.8, 101.6, 156.8], tgt: [-12, 36, 0], fov: 32 },
    { t: 22.0, pos: [-70, 108.8, 166.4], tgt: [-14, 32, 0], fov: 32 },
    { t: 31.0, pos: [70.6, 102.4, 161.6], tgt: [-15, 24, 0], fov: 32 },
    { t: 33.2, pos: [82.3, 60.6, 161.3], tgt: [-6, 4, 0], fov: 30 },
    { t: 36.0, pos: [40.2, 68.3, 174.7], tgt: [-4, 3, 0], fov: 30 },
  ],
  pose(t) {
    const E = EXPLODE;
    return {
      z: {
        tampa_externa_j4_lite: track(t, [[4.6, 6.9, E.tampa_externa_j4_lite], [29.0, 31.0, 0]]),
        protecao_interna_j4_lite: track(t, [[7.0, 9.3, E.protecao_interna_j4_lite], [26.9, 28.9, 0]]),
        placa_j4_lite: track(t, [[9.5, 11.8, E.placa_j4_lite], [24.4, 26.7, 0]]),
        bateria_j4_lite: track(t, [[9.5, 11.8, E.placa_j4_lite], [12.0, 14.3, E.bateria_j4_lite], [22.0, 24.2, E.placa_j4_lite], [24.4, 26.7, 0]]),
      },
      led: [0, 0],
    };
  },
  caps: [
    { a: 0.0, b: 3.4, k: 'RealTracker', h: 'J4 Lite', s: 'Composição 3D · 6 conjuntos separados' },
    { a: 3.6, b: 6.9, k: 'Desmontagem · 1/4', h: 'Tampa externa', s: 'Peça sólida e fina que cobre todo o corpo' },
    { a: 6.9, b: 9.4, k: 'Desmontagem · 2/4', h: 'Proteção interna', s: 'Três aberturas: chave, USB e SIM' },
    { a: 9.4, b: 11.9, k: 'Desmontagem · 3/4', h: 'Conjunto eletrônico', s: 'Placa e bateria saem da carcaça; o chicote acompanha a placa' },
    { a: 11.9, b: 14.5, k: 'Desmontagem · 4/4', h: 'Bateria', s: 'Sai do verso da placa' },
    { a: 14.7, b: 20.4, k: 'Posição EXPLODIDO', h: 'Seis conjuntos', s: 'Uma única placa principal · escala relativa' },
    { a: 20.6, b: 24.3, k: 'Montagem · 1/4', h: 'Bateria no verso da placa', s: 'Longe da antena, na face dos componentes' },
    { a: 24.3, b: 26.8, k: 'Montagem · 2/4', h: 'Conjunto na carcaça', s: 'O passa-fios assenta no encaixe da ponta' },
    { a: 26.8, b: 28.9, k: 'Montagem · 3/4', h: 'Proteção interna', s: 'As travas laterais entram nos alojamentos' },
    { a: 28.9, b: 31.3, k: 'Montagem · 4/4', h: 'Tampa externa', s: 'Fecha sobre todo o contorno da carcaça' },
    { a: 31.5, b: 36.5, k: 'Posição MONTADO', h: 'J4 Lite', s: 'Modelo 3D com peças separadas para montar e desmontar' },
  ],
  tags: { from: 15.0, to: 20.2 },
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
  carcaca_j4_lite: [-13.5, -30, 10], placa_j4_lite: [-11, -33, 6.9], bateria_j4_lite: [-10, -28, 4], protecao_interna_j4_lite: [-11.8, -33, 11.1],
  tampa_externa_j4_lite: [-13.5, -33, 15.5], chicote_j4_lite: [0, 72, 9.6],
};
function videoFrame(t) {
  const aspect = window.innerWidth / window.innerHeight;
  setCamera(camFromKeys(VIDEO.cam, t, aspect, 't'), 'video');
  scanU.uScan.value = 1e4; scanU.uGlow.value = 0; sheetU.uReveal.value = 1.12;
  applyPose(VIDEO.pose(t));
  scene.updateMatrixWorld();
  shadowDirty = true;
  render();
  // legendas
  const cap = VIDEO.caps.find(c => t >= c.a && t < c.b);
  if (cap) {
    const o = clamp((t - cap.a) / 0.35) * clamp((cap.b - t) / 0.35);
    filmUI.querySelector('.fcap').style.opacity = o;
    filmK.textContent = cap.k; filmH.textContent = cap.h; filmS.textContent = cap.s;
  } else filmUI.querySelector('.fcap').style.opacity = 0;
  filmUI.querySelector('.fend').style.opacity = clamp((t - 32.2) / 0.6);
  const to = clamp((t - VIDEO.tags.from) / 0.4) * clamp((VIDEO.tags.to - t) / 0.4);
  SETS.forEach((s, i) => {
    const el = filmTags[i];
    el.style.opacity = to;
    if (to <= 0) return;
    _a.set(...TAG_PTS[s.id]).sub(rest[s.id].pos).applyMatrix4(sets[s.id].matrixWorld).project(camera);
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
if (qs.has('debug')) window.__app = { renderer, scene, sets, rest, buildMs, camera, applyPose, poseExplode, enterFree, exitFree, free };
