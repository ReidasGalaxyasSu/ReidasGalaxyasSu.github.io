import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import { buildHouse, PLAN_BOUNDS, H } from './house.js';
import { glow } from './textures.js';
import planImageURL from './planImage.js';

// ------------------------------------------------------------------ utilidades
const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));
const lerp = (a, b, t) => a + (b - a) * t;
const ease = t => t * t * (3 - 2 * t);
const easeOut = t => 1 - Math.pow(1 - t, 3);
const seg = (p, a, b) => clamp((p - a) / (b - a));

const isMobile = () => window.innerWidth < 820 || window.innerWidth / window.innerHeight < 0.9;
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// ------------------------------------------------------------------ renderer e cena
const canvas = document.getElementById('scene');
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: 'high-performance' });
renderer.setPixelRatio(Math.min(window.devicePixelRatio, isMobile() ? 1.5 : 1.75));
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.0;
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight, 0.05, 600);

const pmrem = new THREE.PMREMGenerator(renderer);
scene.environment = pmrem.fromScene(new RoomEnvironment(renderer), 0.04).texture;

// Céu: gradiente que vai do estúdio escuro (dia) para a noite da cidade
const skyUniforms = {
  uNight: { value: 0 },
};
const sky = new THREE.Mesh(
  new THREE.SphereGeometry(400, 32, 16),
  new THREE.ShaderMaterial({
    side: THREE.BackSide, depthWrite: false, uniforms: skyUniforms,
    vertexShader: 'varying vec3 vDir; void main(){ vDir = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }',
    fragmentShader: `
      uniform float uNight; varying vec3 vDir;
      void main(){
        float y = vDir.y;
        vec3 dayTop = vec3(0.105,0.100,0.095), dayHor = vec3(0.16,0.15,0.14), dayLow = vec3(0.07,0.066,0.062);
        vec3 nTop = vec3(0.010,0.013,0.026), nHor = vec3(0.075,0.05,0.042), nLow = vec3(0.012,0.011,0.014);
        vec3 top = mix(dayTop, nTop, uNight), hor = mix(dayHor, nHor, uNight), low = mix(dayLow, nLow, uNight);
        vec3 c = y > 0.0 ? mix(hor, top, pow(clamp(y,0.0,1.0), 0.5)) : mix(hor, low, pow(clamp(-y*3.0,0.0,1.0), 0.6));
        gl_FragColor = vec4(c, 1.0);
      }`,
  }),
);
sky.renderOrder = -1;
scene.add(sky);

// ------------------------------------------------------------------ luzes de dia
const hemi = new THREE.HemisphereLight('#fff3e2', '#3a342e', 1.2);
scene.add(hemi);
const sun = new THREE.DirectionalLight('#ffe7c9', 2.8);
sun.position.set(-3, 13, 10);
sun.target.position.set(4.3, 0, 3);
sun.castShadow = true;
sun.shadow.mapSize.set(isMobile() ? 1024 : 2048, isMobile() ? 1024 : 2048);
Object.assign(sun.shadow.camera, { left: -8, right: 8, top: 8, bottom: -8, near: 1, far: 40 });
sun.shadow.bias = -0.0004;
sun.shadow.normalBias = 0.03;
scene.add(sun, sun.target);

// ------------------------------------------------------------------ casa
const house = buildHouse();
scene.add(house.root);

// ------------------------------------------------------------------ folha da planta (papel) com revelação animada
const SHEET = { x0: -1.7, x1: 10.3, z0: -1.6, z1: 7.7 };
const sheetUniforms = { uReveal: { value: -0.1 } };
function makeSheetTextures(img) {
  const W = 2048, Hh = Math.round(W * (SHEET.z1 - SHEET.z0) / (SHEET.x1 - SHEET.x0));
  const toPx = (x, z) => [(x - SHEET.x0) / (SHEET.x1 - SHEET.x0) * W, (z - SHEET.z0) / (SHEET.z1 - SHEET.z0) * Hh];
  const mk = () => { const c = document.createElement('canvas'); c.width = W; c.height = Hh; return c; };
  const paper = mk(), ctx = paper.getContext('2d');
  ctx.fillStyle = '#ece6da'; ctx.fillRect(0, 0, W, Hh);
  // fibras e manchas do papel
  for (let i = 0; i < 9000; i++) {
    ctx.fillStyle = `rgba(${Math.random() > 0.5 ? '255,255,255' : '120,105,85'},${Math.random() * 0.05})`;
    ctx.fillRect(Math.random() * W, Math.random() * Hh, 1 + Math.random() * 3, 1);
  }
  // grade técnica
  ctx.strokeStyle = 'rgba(90,110,130,0.10)'; ctx.lineWidth = 1;
  const step = W / (SHEET.x1 - SHEET.x0) * 0.5;
  for (let x = 0; x < W; x += step) { ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, Hh); ctx.stroke(); }
  for (let y = 0; y < Hh; y += step) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke(); }
  // margem
  ctx.strokeStyle = 'rgba(40,36,32,0.55)'; ctx.lineWidth = 3;
  ctx.strokeRect(36, 36, W - 72, Hh - 72);

  const ink = mk(), ictx = ink.getContext('2d');
  ictx.drawImage(paper, 0, 0);
  const [px0, pz0] = toPx(PLAN_BOUNDS.x0, PLAN_BOUNDS.z0), [px1, pz1] = toPx(PLAN_BOUNDS.x1, PLAN_BOUNDS.z1);
  ictx.globalCompositeOperation = 'multiply';
  ictx.drawImage(img, px0, pz0, px1 - px0, pz1 - pz0);
  ictx.globalCompositeOperation = 'source-over';
  // carimbo
  ictx.fillStyle = 'rgba(30,28,26,0.85)';
  ictx.font = 'bold 34px monospace';
  ictx.fillText('ARCO — APARTAMENTO TIPO · 1 DORMITÓRIO', 80, Hh - 90);
  ictx.font = '26px monospace';
  ictx.fillText('PLANTA BAIXA  ·  ESC. 1:50  ·  COTAS EM METROS', 80, Hh - 52);
  ictx.textAlign = 'right';
  ictx.fillText('FOLHA 01/01', W - 80, Hh - 52);
  // seta norte
  ictx.textAlign = 'center'; ictx.font = 'bold 28px monospace';
  const [nx, ny] = [W - 130, 150];
  ictx.beginPath(); ictx.moveTo(nx, ny - 60); ictx.lineTo(nx - 22, ny + 10); ictx.lineTo(nx, ny - 5); ictx.lineTo(nx + 22, ny + 10); ictx.closePath(); ictx.fill();
  ictx.fillText('N', nx, ny + 50);

  const tP = new THREE.CanvasTexture(paper), tI = new THREE.CanvasTexture(ink);
  for (const t of [tP, tI]) { t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 8; }
  return [tP, tI];
}

const sheetMat = new THREE.MeshStandardMaterial({ color: '#d6cfc3', roughness: 0.95, transparent: true });
sheetMat.onBeforeCompile = shader => {
  shader.uniforms.uReveal = sheetUniforms.uReveal;
  shader.uniforms.inkMap = { value: sheetMat.userData.ink };
  shader.fragmentShader = shader.fragmentShader
    .replace('#include <common>', '#include <common>\nuniform float uReveal;\nuniform sampler2D inkMap;')
    .replace('#include <map_fragment>', `#include <map_fragment>
      float dRev = vMapUv.x * 0.6 + (1.0 - vMapUv.y) * 0.4;
      float mRev = 1.0 - smoothstep(uReveal - 0.035, uReveal, dRev);
      vec4 inkC = texture2D(inkMap, vMapUv);
      diffuseColor.rgb = mix(diffuseColor.rgb, inkC.rgb, mRev);
      float edge = smoothstep(uReveal - 0.03, uReveal, dRev) * (1.0 - smoothstep(uReveal, uReveal + 0.004, dRev));
      totalEmissiveRadiance += vec3(1.0, 0.55, 0.2) * edge * 1.6 * step(uReveal, 1.05);`);
};
const sheet = new THREE.Mesh(new THREE.PlaneGeometry(SHEET.x1 - SHEET.x0, SHEET.z1 - SHEET.z0), sheetMat);
sheet.rotation.x = -Math.PI / 2;
sheet.position.set((SHEET.x0 + SHEET.x1) / 2, 0.001, (SHEET.z0 + SHEET.z1) / 2);
sheet.receiveShadow = true;
sheet.visible = false;
scene.add(sheet);

const planImg = new Image();
const planReady = new Promise(res => { planImg.onload = res; planImg.onerror = res; });
planImg.src = planImageURL;
planReady.then(() => {
  const [paperT, inkT] = makeSheetTextures(planImg);
  sheetMat.map = paperT;
  sheetMat.userData.ink = inkT;
  sheetMat.needsUpdate = true;
  sheet.visible = true;
});

// ------------------------------------------------------------------ luzes da cidade (aparecem à noite)
const city = (() => {
  const N = 7000, pos = new Float32Array(N * 3), col = new Float32Array(N * 3);
  const warm = new THREE.Color('#ffb36b'), white = new THREE.Color('#dfe8ff'), amber = new THREE.Color('#ff8a3d');
  let s = 12345; const r = () => ((s = (s * 16807) % 2147483647) / 2147483647);
  for (let i = 0; i < N; i++) {
    let x, z;
    if (i % 3 === 0) { // ruas: linhas retas
      const a = Math.floor(r() * 10) * (Math.PI / 5) + 0.2, d = 20 + r() * 160;
      x = Math.cos(a) * d; z = Math.sin(a) * d;
    } else {
      const a = r() * Math.PI * 2, d = 22 + Math.pow(r(), 0.7) * 170;
      x = Math.cos(a) * d; z = Math.sin(a) * d;
    }
    pos[i * 3] = 4.3 + x; pos[i * 3 + 1] = -36 + r() * 6; pos[i * 3 + 2] = 3 + z;
    const c = r() < 0.6 ? warm : r() < 0.6 ? white : amber;
    col[i * 3] = c.r; col[i * 3 + 1] = c.g; col[i * 3 + 2] = c.b;
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  g.setAttribute('color', new THREE.BufferAttribute(col, 3));
  const m = new THREE.PointsMaterial({ size: 1.5, map: glow('255,255,255'), vertexColors: true, transparent: true, opacity: 0, depthWrite: false, blending: THREE.AdditiveBlending });
  const p = new THREE.Points(g, m);
  p.frustumCulled = false;
  return p;
})();
scene.add(city);

// ------------------------------------------------------------------ pós-processamento (bloom nas fitas de LED)
const composer = new EffectComposer(renderer);
composer.addPass(new RenderPass(scene, camera));
const bloom = new UnrealBloomPass(new THREE.Vector2(window.innerWidth, window.innerHeight), 0.1, 0.55, 0.82);
composer.addPass(bloom);
composer.addPass(new OutputPass());

// ------------------------------------------------------------------ roteiro de câmera
// ext = vista externa (afasta mais em telas verticais); ui = 1 quando o painel de texto ocupa a lateral
const C = [4.27, 0.2, 3.0];
const keys = [
  { p: 0.000, pos: [4.27, 16.5, 3.04], tgt: [4.27, 0, 3.0], fov: 35, ui: 1, ext: 1 },
  { p: 0.095, pos: [4.27, 15.2, 3.04], tgt: [4.27, 0, 3.0], fov: 35, ui: 1, ext: 1 },
  { p: 0.200, pos: [-4.2, 10.8, 14.2], tgt: C, fov: 35, ui: 1, ext: 1 },
  { p: 0.285, pos: [1.2, 12.8, 15.4], tgt: C, fov: 35, ui: 1, ext: 1 },
  { p: 0.335, pos: [-4.6, 7.8, 9.2], tgt: [1.6, 0.4, 2.8], fov: 35, ui: 1, ext: 1 },
  { p: 0.385, pos: [2.3, 10.2, -2.4], tgt: [2.2, 0.2, 2.9], fov: 35, ui: 1, ext: 1 },
  { p: 0.430, pos: [-1.8, 6.8, 11.8], tgt: [2.3, 0.4, 4.6], fov: 35, ui: 1, ext: 1 },
  { p: 0.475, pos: [5.75, 8.6, 2.9], tgt: [5.7, 0.2, 0.75], fov: 35, ui: 1, ext: 1 },
  { p: 0.530, pos: [0.6, 9.2, 3.4], tgt: [6.9, 0.3, 2.8], fov: 35, ui: 1, ext: 1 },
  { p: 0.570, pos: [12.8, 10.6, 13.2], tgt: C, fov: 35, ui: 1, ext: 1 },
  { p: 0.648, pos: [-4.4, 9.6, 13.6], tgt: C, fov: 35, ui: 1, ext: 1 },
  // tour interno: cada par é um "take" com transição por escurecimento (cut)
  { p: 0.668, pos: [3.2, 1.5, 5.75], tgt: [1.0, 1.0, 2.2], fov: 58, ui: 0, cut: 1, shot: 0 },
  { p: 0.702, pos: [2.85, 1.45, 5.25], tgt: [0.8, 1.0, 2.0], fov: 58, ui: 0, shot: 0 },
  { p: 0.716, pos: [0.95, 1.6, 1.6], tgt: [3.7, 1.0, 3.7], fov: 58, ui: 0, cut: 1, shot: 1 },
  { p: 0.752, pos: [0.95, 1.55, 2.25], tgt: [3.7, 1.0, 4.0], fov: 58, ui: 0, shot: 1 },
  { p: 0.766, pos: [1.65, 1.55, 0.7], tgt: [3.2, 1.1, 5.6], fov: 58, ui: 0, cut: 1, shot: 2 },
  { p: 0.802, pos: [2.0, 1.5, 1.2], tgt: [3.0, 1.1, 5.8], fov: 58, ui: 0, shot: 2 },
  { p: 0.816, pos: [4.2, 1.6, 3.05], tgt: [8.5, 1.3, 2.85], fov: 58, ui: 0, cut: 1, shot: 3 },
  { p: 0.852, pos: [4.55, 1.5, 3.1], tgt: [8.5, 1.35, 2.85], fov: 58, ui: 0, shot: 3 },
  { p: 0.866, pos: [6.0, 1.3, 4.1], tgt: [8.4, 1.45, 2.6], fov: 58, ui: 0, cut: 1, shot: 4 },
  { p: 0.898, pos: [5.7, 1.45, 3.9], tgt: [8.4, 1.5, 2.7], fov: 58, ui: 0, shot: 4 },
  { p: 0.912, pos: [6.62, 1.6, 1.14], tgt: [4.9, 1.25, 0.05], fov: 62, ui: 0, cut: 1, shot: 5 },
  { p: 0.938, pos: [6.5, 1.55, 1.04], tgt: [4.8, 1.2, 0.2], fov: 62, ui: 0, shot: 5 },
  { p: 0.955, pos: [12.5, 12.6, 14.0], tgt: C, fov: 35, ui: 1, ext: 1, cut: 1 },
  { p: 1.000, pos: [-2.5, 13.5, 15.5], tgt: C, fov: 35, ui: 1, ext: 1 },
];
const shotNames = [
  ['Sala & cozinha', 'Vista do terraço para a cozinha integrada'],
  ['Estar', 'Sofá de couro voltado para a parede preta da TV'],
  ['Arco de pedra', 'Do home office até o jantar no terraço'],
  ['Dormitório', 'Cama flutuante com escultura iluminada'],
  ['Dormitório', 'Luz quente de cabeceira e armário em vidro fumê'],
  ['Banho', 'Bancada suspensa, espelho retroiluminado e box em vidro'],
];

const _sph = new THREE.Spherical(), _v = new THREE.Vector3();
function keyState(k, aspect) {
  const tgt = new THREE.Vector3(...k.tgt), pos = new THREE.Vector3(...k.pos);
  if (k.ext && aspect < 1.3) { // tela estreita: afasta a câmera para caber a planta
    const f = clamp(1.3 / aspect, 1, 2.3) * (aspect < 0.9 ? 1.04 : 0.92);
    pos.sub(tgt).multiplyScalar(Math.max(1, f)).add(tgt);
  }
  let fov = k.fov;
  if (!k.ext && aspect < 1) fov = Math.min(80, fov * 1.32);
  return { pos, tgt, fov, ui: k.ui };
}
function cameraAt(p, aspect) {
  let i = 0;
  while (i < keys.length - 2 && p >= keys[i + 1].p) i++;
  const a = keys[i], b = keys[i + 1];
  const t = clamp((p - a.p) / (b.p - a.p));
  const A = keyState(a, aspect), B = keyState(b, aspect);
  if (b.cut) { // transição com escurecimento
    const s = t < 0.5 ? A : B;
    return { ...s, fade: clamp((1 - Math.abs(2 * t - 1)) * 1.8), shot: t < 0.5 ? a.shot : b.shot };
  }
  const e = a.shot !== undefined ? t : ease(t); // dentro de um take: movimento contínuo
  const tgt = A.tgt.clone().lerp(B.tgt, e);
  // interpola em coordenadas esféricas ao redor do alvo (movimento de órbita)
  const sa = new THREE.Spherical().setFromVector3(_v.copy(A.pos).sub(A.tgt));
  const sb = new THREE.Spherical().setFromVector3(_v.copy(B.pos).sub(B.tgt));
  let dTheta = sb.theta - sa.theta;
  if (dTheta > Math.PI) dTheta -= Math.PI * 2; if (dTheta < -Math.PI) dTheta += Math.PI * 2;
  _sph.set(lerp(sa.radius, sb.radius, e), lerp(sa.phi, sb.phi, e), sa.theta + dTheta * e);
  const pos = new THREE.Vector3().setFromSpherical(_sph).add(tgt);
  return { pos, tgt, fov: lerp(A.fov, B.fov, e), ui: lerp(A.ui, B.ui, e), fade: 0, shot: a.shot };
}

// ------------------------------------------------------------------ estado da cena em função do scroll
const roomWindows = { cozinha: [0.295, 0.355], sala: [0.345, 0.41], jantar: [0.40, 0.448], banho: [0.448, 0.492], dormitorio: [0.492, 0.556] };
const ledBase = house.leds.map(m => m.color.clone());
const screenBase = house.screens.map(m => m.color.clone());
const dayEnv = 0.85, nightEnv = 0.14;

function applyScene(p) {
  // a planta se desenha sozinha ao abrir a página (e também acompanha o scroll)
  const intro = stillFrames < Infinity ? 1 : seg(performance.now() - introStart, 300, 3300);
  sheetUniforms.uReveal.value = lerp(-0.08, 1.12, Math.max(ease(intro), ease(seg(p, 0.012, 0.1))));

  // paredes sobem do papel, uma após a outra (de oeste para leste)
  const sorted = house.walls;
  sorted.forEach((w, i) => {
    const t = easeOut(seg(p, 0.112 + i * 0.0075, 0.112 + i * 0.0075 + 0.06));
    w.scale.y = Math.max(0.0001, t);
    w.visible = t > 0;
  });
  const wallsT = easeOut(seg(p, 0.15, 0.24));
  house.finishes.scale.y = Math.max(0.0001, wallsT); house.finishes.visible = wallsT > 0;
  const op = easeOut(seg(p, 0.215, 0.255));
  house.openings.visible = op > 0; house.openings.scale.y = Math.max(0.0001, op);

  // o papel dá lugar ao piso
  const fl = ease(seg(p, 0.225, 0.285));
  house.floorMats.forEach(m => { m.opacity = fl; m.transparent = fl < 1; m.depthWrite = fl > 0.5; });
  house.floors.visible = fl > 0;
  sheetMat.opacity = 1 - ease(seg(p, 0.235, 0.3));
  sheet.visible = sheetMat.opacity > 0.001 && !!sheetMat.map;

  // mobiliário cai no lugar, ambiente por ambiente
  for (const [key, [a, b]] of Object.entries(roomWindows)) {
    const items = house.rooms[key].userData.items, n = items.length;
    items.forEach((it, i) => {
      const s = a + (b - a) * 0.7 * (i / n), t = seg(p, s, s + (b - a) * 0.3);
      it.visible = t > 0;
      const k = reduceMotion ? t : easeOut(t);
      it.position.y = it.userData.baseY + (1 - k) * 1.6;
      it.scale.setScalar(0.6 + 0.4 * k);
    });
  }

  // anoitecer
  const n = ease(seg(p, 0.575, 0.645));
  skyUniforms.uNight.value = n;
  house.coves.visible = n > 0.01;
  hemi.intensity = lerp(1.2, 0.05, n);
  sun.intensity = lerp(2.8, 0.0, n);
  sun.castShadow = n < 0.99;
  for (const m of house.allMaterials) m.envMapIntensity = lerp(dayEnv, nightEnv, n);
  sheetMat.envMapIntensity = dayEnv;
  for (const l of house.nightLights) { l.intensity = l.userData.max * n * 0.6; l.visible = n > 0.001; }
  house.leds.forEach((m, i) => m.color.copy(ledBase[i]).multiplyScalar(0.12 + n * (i === 0 ? 2.6 : 1.5)));
  house.screens.forEach((m, i) => m.color.copy(screenBase[i]).multiplyScalar(1 + n * 1.6));
  for (const g of house.glows) g.material.opacity = g.userData.maxOpacity * n;
  city.material.opacity = n;
  bloom.strength = lerp(0.08, 0.42, n);
  renderer.toneMappingExposure = lerp(1.0, 0.95, n);
}

// ------------------------------------------------------------------ interface
const chapters = [...document.querySelectorAll('[data-chapter]')].map(el => ({ el, from: +el.dataset.from, to: +el.dataset.to }));
const navLinks = [...document.querySelectorAll('[data-goto]')];
const progressBar = document.querySelector('.progress i');
const fadeEl = document.getElementById('fade');
const scrim = document.getElementById('scrim');
const tag = document.getElementById('room-tag');
const tagTitle = tag.querySelector('strong'), tagSub = tag.querySelector('span'), tagIdx = tag.querySelector('em');
const hint = document.querySelector('.hint');
let activeChapter = -1, activeShot = -2;

function maxScroll() { return document.documentElement.scrollHeight - window.innerHeight; }
navLinks.forEach(a => a.addEventListener('click', e => {
  e.preventDefault();
  window.scrollTo({ top: +a.dataset.goto * maxScroll() + 2, behavior: reduceMotion ? 'auto' : 'smooth' });
}));

function updateUI(p, cam) {
  progressBar.style.transform = `scaleX(${p})`;
  const idx = chapters.findIndex(c => p >= c.from && p < c.to);
  const ci = idx === -1 ? chapters.length - 1 : idx;
  if (ci !== activeChapter) {
    chapters.forEach((c, i) => c.el.classList.toggle('active', i === ci));
    navLinks.forEach(a => a.classList.toggle('on', p >= +a.dataset.goto && p < +a.dataset.until));
    activeChapter = ci;
  }
  navLinks.forEach(a => a.classList.toggle('on', p >= +a.dataset.goto && p < +a.dataset.until));
  document.body.classList.toggle('tour', cam.ui < 0.5);
  hint.classList.toggle('gone', p > 0.02);
  fadeEl.style.opacity = cam.fade;
  scrim.style.opacity = cam.ui;
  const shot = cam.ui < 0.5 && cam.shot !== undefined ? cam.shot : -1;
  if (shot !== activeShot) {
    activeShot = shot;
    if (shot >= 0) {
      tagTitle.textContent = shotNames[shot][0];
      tagSub.textContent = shotNames[shot][1];
      tagIdx.textContent = `Tour ${shot + 1}/${shotNames.length}`;
    }
    tag.classList.toggle('show', shot >= 0);
  }
}

// ------------------------------------------------------------------ loop
let target = 0, current = 0, last = performance.now(), introStart = Infinity;
function readScroll() { target = clamp(window.scrollY / Math.max(1, maxScroll())); }
window.addEventListener('scroll', readScroll, { passive: true });

function viewOffset(ui) {
  const W = window.innerWidth, Hh = window.innerHeight, aspect = W / Hh;
  if (aspect >= 1.15) camera.setViewOffset(W, Hh, -W * 0.17 * ui, 0, W, Hh);
  else if (aspect < 0.95) camera.setViewOffset(W, Hh, 0, Hh * 0.2 * ui, W, Hh);
  else camera.setViewOffset(W, Hh, -W * 0.08 * ui, Hh * 0.08 * ui, W, Hh);
}

function frame(now) {
  const dt = Math.min(0.1, (now - last) / 1000); last = now;
  current += (target - current) * (reduceMotion ? 1 : 1 - Math.exp(-dt * 5.5));
  if (Math.abs(target - current) < 0.00002) current = target;
  const p = current;
  const aspect = window.innerWidth / window.innerHeight;
  const cam = cameraAt(p, aspect);
  camera.position.copy(cam.pos);
  camera.lookAt(cam.tgt);
  camera.fov = cam.fov;
  viewOffset(cam.ui);
  camera.updateProjectionMatrix();
  house.ceilings.visible = camera.position.y < H;
  applyScene(p);
  updateUI(p, cam);
  composer.render();
  if (stillFrames-- > 0) requestAnimationFrame(frame);
}
// ?still=1 (testes): renderiza poucos quadros e para — útil em navegadores sem GPU
let stillFrames = new URLSearchParams(location.search).has('still') ? 2 : Infinity;

function onResize() {
  const W = window.innerWidth, Hh = window.innerHeight;
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, isMobile() ? 1.5 : 1.75));
  renderer.setSize(W, Hh);
  composer.setSize(W, Hh);
  camera.aspect = W / Hh;
  readScroll();
}
window.addEventListener('resize', onResize);

planReady.then(() => {
  readScroll(); current = target;
  requestAnimationFrame(t => {
    last = t; introStart = t; frame(t);
    document.body.classList.add('ready');
  });
});

// Atalho para testes: ?p=0.5 posiciona o scroll
const qp = new URLSearchParams(location.search).get('p');
if (qp !== null) planReady.then(() => { window.scrollTo(0, +qp * maxScroll()); readScroll(); current = target; });
