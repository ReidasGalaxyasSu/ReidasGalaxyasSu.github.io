import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
import { ShaderPass } from 'three/addons/postprocessing/ShaderPass.js';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
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
const film = { reveal: null, cam: null }; // sobreposições do modo filme (?film)

// ------------------------------------------------------------------ renderer e cena
const canvas = document.getElementById('scene');
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: 'high-performance' });
// Resolução: começa limitada e se ajusta sozinha ao desempenho da máquina (ver adaptQuality)
const maxRatio = () => Math.min(window.devicePixelRatio || 1, 2);
let pixelRatio = Math.min(window.devicePixelRatio || 1, isMobile() ? 1.5 : 1.75);
renderer.setPixelRatio(pixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.0;
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
// cada luz decide quando refazer a sombra (shadow.autoUpdate = false): só quando a cena muda

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
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
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
const sunMap = isMobile() ? 2048 : Math.min(4096, renderer.capabilities.maxTextureSize);
sun.shadow.mapSize.set(sunMap, sunMap);
sun.shadow.autoUpdate = false;
Object.assign(sun.shadow.camera, { left: -8, right: 8, top: 8, bottom: -8, near: 1, far: 40 });
sun.shadow.bias = -0.0003;
sun.shadow.normalBias = 0.03;
scene.add(sun, sun.target);

// ------------------------------------------------------------------ casa
const _tb = performance.now();
const house = buildHouse();
const buildMs = performance.now() - _tb;
// filtro anisotrópico máximo: texturas nítidas mesmo em ângulos rasantes (piso, paredes)
const maxAniso = renderer.capabilities.getMaxAnisotropy();
for (const mat of house.allMaterials) for (const k of ['map', 'bumpMap']) if (mat[k]) mat[k].anisotropy = maxAniso;
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
  ictx.fillText('PLANTA VIVA — APARTAMENTO TIPO · 1 DORMITÓRIO', 80, Hh - 90);
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
const composer = new EffectComposer(renderer, new THREE.WebGLRenderTarget(1, 1, { type: THREE.HalfFloatType, samples: isMobile() ? 0 : 4 }));
composer.setPixelRatio(pixelRatio);
composer.setSize(window.innerWidth, window.innerHeight);
composer.addPass(new RenderPass(scene, camera));
// um pixel inválido (NaN/infinito) vindo de algum material espalharia preto pela tela inteira no bloom: zera antes
composer.addPass(new ShaderPass({
  uniforms: { tDiffuse: { value: null } },
  vertexShader: 'varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }',
  fragmentShader: `uniform sampler2D tDiffuse; varying vec2 vUv;
    void main(){
      vec4 c = texture2D(tDiffuse, vUv);
      bool bad = c.r != c.r || c.g != c.g || c.b != c.b || c.a != c.a || any(greaterThan(abs(c.rgb), vec3(60000.0)));
      gl_FragColor = bad ? vec4(0.0, 0.0, 0.0, 1.0) : max(c, vec4(0.0));
    }`,
}));
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
let nightAmount = 0;

function applyScene(p) {
  // a planta se desenha sozinha ao abrir a página (e também acompanha o scroll)
  const intro = stillFrames < Infinity ? 1 : seg(performance.now() - introStart, 300, 3300);
  const rev = film.reveal !== null ? film.reveal : Math.max(ease(intro), ease(seg(p, 0.012, 0.1)));
  sheetUniforms.uReveal.value = lerp(-0.08, 1.12, rev);

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
  house.floorMats.forEach(m => { m.opacity = fl; });
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
  for (const m of house.allMaterials) m.envMapIntensity = lerp(dayEnv, nightEnv, n);
  sheetMat.envMapIntensity = dayEnv;
  for (const l of house.nightLights) l.intensity = l.userData.max * n * 0.6;
  house.leds.forEach((m, i) => m.color.copy(ledBase[i]).multiplyScalar(0.12 + n * (i === 0 ? 2.6 : 1.5)));
  house.screens.forEach((m, i) => m.color.copy(screenBase[i]).multiplyScalar(1 + n * 1.6));
  for (const g of house.glows) g.material.opacity = g.userData.maxOpacity * n;
  city.material.opacity = n;
  bloom.strength = 0.42 * n;
  nightAmount = n;
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
  if (document.body.classList.contains('film')) { // gravação: o texto do capítulo entra e sai em função do scroll, sem relógio
    for (const c of chapters) {
      const o = clamp((p - c.from) / 0.014) * (c.to > 1 ? 1 : clamp((c.to - p) / 0.014));
      c.el.style.opacity = o; c.el.style.visibility = o > 0 ? 'visible' : 'hidden';
    }
  }
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

let lastDrawn = -1, needsDraw = true, introDone = false, drewLast = false, lastShadowP = -1;
const frameTimes = [];
let qualityCooldown = 0;

// Se a máquina não sustenta ~45 fps, reduz a resolução interna; se sobra folga, volta a subir
function adaptQuality(dt) {
  frameTimes.push(dt);
  if (frameTimes.length < 24) return;
  const avg = frameTimes.reduce((a, b) => a + b, 0) / frameTimes.length;
  frameTimes.length = 0;
  if (qualityCooldown-- > 0) return;
  let next = pixelRatio;
  if (avg > 0.022 && pixelRatio > 0.7) next = Math.max(0.7, pixelRatio - 0.2);
  else if (avg < 0.012 && pixelRatio < maxRatio()) next = Math.min(maxRatio(), pixelRatio + 0.1);
  if (next !== pixelRatio) {
    pixelRatio = next;
    renderer.setPixelRatio(pixelRatio);
    composer.setPixelRatio(pixelRatio);
    qualityCooldown = 2;
  }
}

function draw(p) {
  const aspect = window.innerWidth / window.innerHeight;
  const cam = film.cam ? {
    pos: new THREE.Vector3(...film.cam.pos), tgt: new THREE.Vector3(...film.cam.tgt),
    fov: film.cam.fov ?? 35, ui: film.cam.ui ?? 0, fade: 0,
  } : cameraAt(p, aspect);
  camera.position.copy(cam.pos);
  camera.lookAt(cam.tgt);
  camera.fov = cam.fov;
  viewOffset(cam.ui);
  camera.updateProjectionMatrix();
  house.ceilings.visible = camera.position.y < H;
  applyScene(p);
  updateUI(p, cam);
  if (nightAmount < 0.98 && p !== lastShadowP) { sun.shadow.needsUpdate = true; lastShadowP = p; }
  bloom.enabled = nightAmount > 0.01; // de dia o bloom fica desligado
  composer.render();
}

function frame(now) {
  const dt = Math.min(0.1, (now - last) / 1000); last = now;
  if (free.active) { frameFree(now, dt); requestAnimationFrame(frame); return; }
  current += (target - current) * (reduceMotion ? 1 : 1 - Math.exp(-dt * 9));
  if (Math.abs(target - current) < 0.00002) current = target;
  const introRunning = !introDone && now - introStart < 3400;
  if (!introRunning && introStart !== Infinity) introDone = true;
  if (needsDraw || introRunning || current !== lastDrawn) {
    draw(current);
    lastDrawn = current; needsDraw = false;
    if (drewLast && stillFrames === Infinity) adaptQuality(dt); // só mede quadros seguidos
    drewLast = true;
  } else drewLast = false;
  if (stillFrames-- > 0) requestAnimationFrame(frame);
}
// ?still=1 (testes): renderiza poucos quadros e para — útil em navegadores sem GPU
let stillFrames = new URLSearchParams(location.search).has('still') ? 2 : Infinity;

function onResize() {
  const W = window.innerWidth, Hh = window.innerHeight;
  pixelRatio = Math.min(pixelRatio, maxRatio());
  renderer.setPixelRatio(pixelRatio);
  composer.setPixelRatio(pixelRatio);
  renderer.setSize(W, Hh);
  composer.setSize(W, Hh);
  camera.aspect = W / Hh;
  if (!free.active) readScroll();
  needsDraw = true;
}
window.addEventListener('resize', onResize);


// ------------------------------------------------------------------ modo livre: navegar à vontade pela maquete
const free = { active: false, mode: 'orbit', controls: null, tween: null, night: 0, nightTarget: 0, savedScroll: 0, move: 0, strafe: 0, wheel: 0 };
const freeHelp = document.getElementById('free-help');
const labelsEl = document.getElementById('free-labels');
const roomsNav = document.querySelector('.free-rooms');
const dayNightBtn = document.getElementById('btn-daynight');
let touchUI = window.matchMedia('(pointer: coarse)').matches;

const spots = [
  { id: 'geral', name: 'Visão geral', orbit: true, pos: [-3.6, 11.5, 13.6], tgt: [4.27, 0.3, 3.0] },
  { id: 'sala', name: 'Sala', anchor: [2.7, 1.0, 3.4], pos: [3.35, 1.55, 4.4], tgt: [0.8, 1.05, 2.4] },
  { id: 'cozinha', name: 'Cozinha', anchor: [0.4, 1.4, 1.9], pos: [0.95, 1.6, 4.15], tgt: [0.55, 1.15, 1.2] },
  { id: 'terraco', name: 'Terraço', anchor: [2.6, 1.0, 5.6], pos: [1.15, 1.5, 5.8], tgt: [3.6, 1.0, 3.2] },
  { id: 'escritorio', name: 'Home office', anchor: [2.9, 1.2, 0.4], pos: [3.5, 1.55, 1.9], tgt: [2.4, 1.0, 0.2] },
  { id: 'banho', name: 'Banho', anchor: [5.6, 1.0, 0.6], pos: [6.55, 1.55, 1.05], tgt: [4.9, 1.25, 0.05] },
  { id: 'dormitorio', name: 'Dormitório', anchor: [6.9, 1.0, 3.0], pos: [4.5, 1.55, 3.1], tgt: [8.5, 1.3, 2.85] },
];
// áreas onde dá para caminhar (x1, x2, z1, z2) — evita atravessar paredes
const walkable = [
  [0.75, 4.25, 0.25, 2.15], [0.75, 3.6, 2.0, 5.85],
  [4.2, 4.8, 1.5, 2.1], [4.65, 8.25, 1.5, 4.15], [4.4, 4.7, 2.45, 4.15], [7.05, 8.3, 0.75, 1.6],
  [4.2, 4.8, 0.5, 1.0], [4.7, 6.65, 0.55, 1.12],
];
const canWalk = (x, z) => walkable.some(([a, b, c, d]) => x >= a && x <= b && z >= c && z <= d);

// botões de ambiente e rótulos clicáveis na maquete
for (const s of spots) {
  const b = document.createElement('button');
  b.type = 'button'; b.textContent = s.name; b.dataset.spot = s.id;
  b.addEventListener('click', () => goToSpot(s));
  roomsNav.appendChild(b);
  if (s.anchor) {
    const l = document.createElement('button');
    l.type = 'button'; l.className = 'spot-label'; l.innerHTML = `<i></i>${s.name}`;
    l.addEventListener('click', () => goToSpot(s));
    labelsEl.appendChild(l); s.label = l;
  }
}

function setHelp() {
  freeHelp.textContent = free.mode === 'orbit'
    ? (touchUI ? 'Arraste para girar · pinça para aproximar · dois dedos para mover · toque num ambiente para entrar'
      : 'Arraste para girar · role para aproximar · botão direito para mover · clique num ambiente para entrar')
    : (touchUI ? 'Arraste para olhar em volta · use ▲ ▼ para andar'
      : 'Arraste para olhar em volta · role o mouse, use W A S D ou as setas para andar');
}

function setMode(mode, pos, tgt) {
  const c = free.controls;
  free.mode = mode;
  document.body.classList.toggle('walk', mode === 'walk');
  camera.position.copy(pos);
  if (mode === 'walk') {
    // olhar em volta = girar em torno de um ponto logo à frente dos olhos
    const dir = tgt.clone().sub(pos).normalize();
    c.target.copy(pos).addScaledVector(dir, 0.1);
    Object.assign(c, { enableZoom: false, enablePan: false, rotateSpeed: -0.45, minDistance: 0.1, maxDistance: 0.1, minPolarAngle: Math.PI * 0.28, maxPolarAngle: Math.PI * 0.74 });
    camera.fov = window.innerWidth / window.innerHeight < 1 ? 74 : 64;
  } else {
    c.target.copy(tgt);
    Object.assign(c, { enableZoom: true, enablePan: true, rotateSpeed: 0.7, minDistance: 3, maxDistance: 28, minPolarAngle: 0.02, maxPolarAngle: 1.3 });
    camera.fov = window.innerWidth / window.innerHeight < 1 ? 48 : 38;
  }
  camera.updateProjectionMatrix();
  c.update();
  roomsNav.querySelectorAll('button').forEach(b => b.classList.toggle('on', b.dataset.spot === free.spotId));
  setHelp();
}

function goToSpot(s) {
  if (!free.active || free.tween) return;
  free.spotId = s.id;
  const toWalk = !s.orbit;
  const to = { pos: new THREE.Vector3(...s.pos), tgt: new THREE.Vector3(...s.tgt) };
  if (!toWalk && free.mode === 'orbit') { // mantém a distância atual ao voltar para a visão geral
    to.pos.sub(to.tgt).setLength(Math.max(12, camera.position.distanceTo(free.controls.target))).add(to.tgt);
  }
  free.tween = {
    from: { pos: camera.position.clone(), tgt: free.controls.target.clone() }, to,
    t0: performance.now(), dur: (toWalk || free.mode === 'walk') ? 1000 : 1300,
    cut: toWalk || free.mode === 'walk', toWalk, switched: false,
  };
  free.controls.enabled = false;
  roomsNav.querySelectorAll('button').forEach(b => b.classList.toggle('on', b.dataset.spot === s.id));
}

function stepTween(now) {
  const tw = free.tween, t = clamp((now - tw.t0) / tw.dur);
  if (tw.cut) { // atravessa paredes com um escurecimento rápido
    fadeEl.style.opacity = clamp((1 - Math.abs(2 * t - 1)) * 2.2);
    if (t >= 0.5 && !tw.switched) { tw.switched = true; setMode(tw.toWalk ? 'walk' : 'orbit', tw.to.pos, tw.to.tgt); }
  } else {
    const e = ease(t);
    const tgt = tw.from.tgt.clone().lerp(tw.to.tgt, e);
    const sa = new THREE.Spherical().setFromVector3(_v.copy(tw.from.pos).sub(tw.from.tgt));
    const sb = new THREE.Spherical().setFromVector3(_v.copy(tw.to.pos).sub(tw.to.tgt));
    let dT = sb.theta - sa.theta;
    if (dT > Math.PI) dT -= Math.PI * 2; if (dT < -Math.PI) dT += Math.PI * 2;
    _sph.set(lerp(sa.radius, sb.radius, e), lerp(sa.phi, sb.phi, e), sa.theta + dT * e);
    camera.position.setFromSpherical(_sph).add(tgt);
    free.controls.target.copy(tgt);
    camera.lookAt(tgt);
  }
  if (t >= 1) {
    if (!tw.cut) setMode('orbit', tw.to.pos, tw.to.tgt);
    fadeEl.style.opacity = 0;
    free.tween = null;
    free.controls.enabled = true;
  }
}

// caminhar: frente/trás pela direção do olhar, sem atravessar paredes
function walkStep(dt) {
  const speed = 1.5;
  let fwd = free.move + free.wheel, side = free.strafe;
  free.wheel *= Math.exp(-dt * 6);
  if (Math.abs(free.wheel) < 0.01) free.wheel = 0;
  if (!fwd && !side) return false;
  const dir = new THREE.Vector3(); camera.getWorldDirection(dir); dir.y = 0; dir.normalize();
  const right = new THREE.Vector3(-dir.z, 0, dir.x);
  const d = dir.multiplyScalar(fwd * speed * dt).addScaledVector(right, side * speed * dt);
  const p = camera.position;
  let dx = d.x, dz = d.z;
  if (!canWalk(p.x + dx, p.z + dz)) { // desliza junto à parede
    if (canWalk(p.x + dx, p.z)) dz = 0; else if (canWalk(p.x, p.z + dz)) dx = 0; else return false;
  }
  p.x += dx; p.z += dz;
  free.controls.target.x += dx; free.controls.target.z += dz;
  return true;
}

const _lv = new THREE.Vector3();
function updateLabels() {
  const W = window.innerWidth, Hh = window.innerHeight, show = free.mode === 'orbit' && !free.tween;
  for (const s of spots) {
    if (!s.label) continue;
    _lv.set(...s.anchor).project(camera);
    const vis = show && _lv.z < 1 && Math.abs(_lv.x) < 1.05 && Math.abs(_lv.y) < 1.05;
    s.label.classList.toggle('show', vis);
    if (vis) s.label.style.transform = `translate(${((_lv.x + 1) / 2 * W).toFixed(1)}px, ${((1 - _lv.y) / 2 * Hh).toFixed(1)}px) translate(-50%, -50%)`;
  }
}

function drawFree() {
  house.ceilings.visible = camera.position.y < H;
  applyScene(0.56 + 0.1 * free.night);
  updateLabels();
  bloom.enabled = nightAmount > 0.01;
  composer.render();
}

function frameFree(now, dt) {
  let changed = needsDraw;
  if (free.tween) { stepTween(now); changed = true; }
  else {
    if (free.mode === 'walk') changed = walkStep(dt) || changed;
    changed = free.controls.update() || changed;
  }
  if (free.night !== free.nightTarget) {
    const k = Math.sign(free.nightTarget - free.night) * dt / 1.2;
    free.night = clamp(free.night + k);
    if (Math.abs(free.night - free.nightTarget) < 0.01) free.night = free.nightTarget;
    changed = true;
  }
  if (changed) {
    drawFree();
    needsDraw = false;
    if (drewLast) adaptQuality(dt);
    drewLast = true;
  } else drewLast = false;
}

function setNightButton() {
  dayNightBtn.textContent = free.nightTarget ? '☀ Ver de dia' : '☾ Ver à noite';
}

function enterFree() {
  if (free.active || !document.body.classList.contains('ready')) return;
  free.active = true;
  free.savedScroll = window.scrollY;
  document.documentElement.classList.add('free-lock');
  document.body.classList.add('free');
  free.night = free.nightTarget = current >= 0.6 ? 1 : 0;
  setNightButton();
  const c = free.controls = new OrbitControls(camera, canvas);
  c.enableDamping = true; c.dampingFactor = 0.08; c.screenSpacePanning = false;
  c.addEventListener('change', () => { // mantém o alvo dentro do apartamento
    if (free.mode === 'orbit') {
      c.target.x = clamp(c.target.x, -1, 9.5); c.target.y = clamp(c.target.y, 0, 2.2); c.target.z = clamp(c.target.z, -1, 7);
    }
  });
  camera.clearViewOffset();
  // começa de onde a câmera do tour estava: dentro de um ambiente = caminhando; fora = maquete
  const cam = cameraAt(current, window.innerWidth / window.innerHeight);
  if (cam.pos.y < H) { free.spotId = null; setMode('walk', cam.pos, cam.tgt); }
  else { free.spotId = null; setMode('orbit', cam.pos, cam.tgt); goToSpot(spots[0]); }
  fadeEl.style.opacity = 0;
  sun.shadow.needsUpdate = true;
  needsDraw = true;
}

function exitFree() {
  if (!free.active) return;
  free.active = false;
  free.tween = null; free.move = free.strafe = free.wheel = 0;
  free.controls.dispose(); free.controls = null;
  canvas.style.touchAction = '';
  document.documentElement.classList.remove('free-lock');
  document.body.classList.remove('free', 'walk');
  labelsEl.querySelectorAll('.show').forEach(l => l.classList.remove('show'));
  fadeEl.style.opacity = 0;
  window.scrollTo(0, free.savedScroll);
  readScroll(); current = target; lastShadowP = -1;
  needsDraw = true;
}

document.querySelectorAll('[data-explore]').forEach(b => b.addEventListener('click', e => { e.preventDefault(); enterFree(); }));
document.getElementById('btn-exit').addEventListener('click', exitFree);
dayNightBtn.addEventListener('click', () => { free.nightTarget = free.nightTarget ? 0 : 1; setNightButton(); });

canvas.addEventListener('wheel', e => {
  if (!free.active || free.mode !== 'walk') return;
  e.preventDefault();
  free.wheel = clamp(free.wheel - Math.sign(e.deltaY) * 0.9, -2.2, 2.2);
}, { passive: false });

const keyMap = { KeyW: ['move', 1], ArrowUp: ['move', 1], KeyS: ['move', -1], ArrowDown: ['move', -1], KeyA: ['strafe', -1], ArrowLeft: ['strafe', -1], KeyD: ['strafe', 1], ArrowRight: ['strafe', 1] };
window.addEventListener('keydown', e => {
  if (!free.active) return;
  if (e.code === 'Escape') { exitFree(); return; }
  const k = keyMap[e.code];
  if (k && free.mode === 'walk') { free[k[0]] = k[1]; e.preventDefault(); }
});
window.addEventListener('keyup', e => {
  const k = keyMap[e.code];
  if (k && free[k[0]] === k[1]) free[k[0]] = 0;
});
document.querySelectorAll('[data-walk]').forEach(b => {
  const go = v => e => { e.preventDefault(); free.move = v; };
  b.addEventListener('pointerdown', go(+b.dataset.walk));
  for (const ev of ['pointerup', 'pointerleave', 'pointercancel']) b.addEventListener(ev, go(0));
});

async function warmUp() {
  // tudo visível de uma vez para o compilador ver todos os materiais
  house.root.traverse(o => { o.visible = true; });
  sheet.visible = !!sheetMat.map;
  camera.position.set(4.27, 15, 3.04); camera.lookAt(4.27, 0, 3);
  // compila já para o alvo do pós-processamento (é nele que a cena é desenhada)
  renderer.setRenderTarget(composer.renderTarget1);
  try { await renderer.compileAsync(scene, camera); } catch (e) { /* navegadores antigos: compila no primeiro quadro */ }
  renderer.setRenderTarget(null);
  // sombras: a do sol e as das luzes noturnas (estas nunca mais precisam ser refeitas)
  sun.shadow.needsUpdate = true;
  for (const l of house.nightLights) if (l.castShadow) l.shadow.needsUpdate = true;
  bloom.enabled = true;
  composer.render();
}

planReady.then(warmUp).then(() => {
  readScroll(); current = target;
  requestAnimationFrame(t => {
    last = t; introStart = t; needsDraw = true; frame(t);
    document.body.classList.add('ready');
  });
});

// ------------------------------------------------------------------ modo filme (?film): quadros exatos para gravar vídeos
// __film.frame(p, { reveal, cam: { pos, tgt, fov, ui }, ui }) desenha um quadro determinístico (sem suavização nem relógio)
if (new URLSearchParams(location.search).has('film')) {
  document.body.classList.add('film');
  window.__film = {
    frame(p, opts = {}) {
      film.reveal = opts.reveal ?? null;
      film.cam = opts.cam ?? null;
      document.body.classList.toggle('film-clean', !opts.ui);
      current = target = lastDrawn = p;
      draw(p);
      return true;
    },
    // posição na tela (px) de pontos do mundo, com a câmera do último quadro
    project(points) {
      return points.map(([x, y, z]) => {
        const v = new THREE.Vector3(x, y, z).project(camera);
        return [(v.x + 1) / 2 * window.innerWidth, (1 - v.y) / 2 * window.innerHeight];
      });
    },
    // modo livre com câmera explícita: { cam, night, walk, spot } — mostra a interface real do modo livre
    free(opts = {}) {
      document.body.classList.add('free');
      document.body.classList.remove('film-clean');
      document.body.classList.toggle('walk', !!opts.walk);
      if (opts.touch !== undefined) touchUI = opts.touch;
      free.mode = opts.walk ? 'walk' : 'orbit';
      free.night = free.nightTarget = opts.night ?? 0;
      dayNightBtn.textContent = (opts.nightLabel ?? free.night > 0.5) ? '☀ Ver de dia' : '☾ Ver à noite';
      roomsNav.querySelectorAll('button').forEach(b => b.classList.toggle('on', b.dataset.spot === opts.spot));
      setHelp();
      fadeEl.style.opacity = opts.fade ?? 0;
      camera.clearViewOffset();
      camera.position.set(...opts.cam.pos); camera.lookAt(...opts.cam.tgt);
      camera.fov = opts.cam.fov ?? 38; camera.updateProjectionMatrix(); camera.updateMatrixWorld();
      sun.shadow.needsUpdate = true;
      drawFree();
      return true;
    },
    rect(sel) { const r = document.querySelector(sel).getBoundingClientRect(); return [r.left, r.top, r.width, r.height]; },
    labels() { return spots.filter(s => s.label && s.label.classList.contains('show')).map(s => [s.id, ...window.__film.rect(`#free-labels .spot-label:nth-child(${spots.filter(x => x.label).indexOf(s) + 1})`)]); },
    sheet: SHEET, plan: PLAN_BOUNDS,
  };
}

// Testes: ?debug expõe o renderer; ?p=0.5 posiciona o scroll
if (new URLSearchParams(location.search).has('debug')) window.__app = { renderer, scene, house, buildMs, enterFree, exitFree, goToSpot, spots, free };
const qp = new URLSearchParams(location.search).get('p');
if (qp !== null) planReady.then(() => { window.scrollTo(0, +qp * maxScroll()); readScroll(); current = target; });
