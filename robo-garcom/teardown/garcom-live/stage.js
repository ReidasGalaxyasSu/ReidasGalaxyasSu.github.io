// Estúdio claro: ambiente PMREM de caixas de luz, sol com sombras VSM suaves, GTAO (oclusão de ambiente) e um
// contorno (OutlinePass) na peça selecionada. Mesmo esquema do kit teardown (cessna/v8), ajustado ao salão.
import * as THREE from 'three';
import {EffectComposer} from 'three/addons/postprocessing/EffectComposer.js';
import {GTAOPass} from 'three/addons/postprocessing/GTAOPass.js';
import {OutlinePass} from 'three/addons/postprocessing/OutlinePass.js';
import {OutputPass} from 'three/addons/postprocessing/OutputPass.js';
import {RenderPass} from 'three/addons/postprocessing/RenderPass.js';

const V3 = THREE.Vector3;
export const BG = '#ece6dc';

export function createStage(canvas) {
  const renderer = new THREE.WebGLRenderer({canvas, antialias: false, preserveDrawingBuffer: true, powerPreference: 'high-performance'});
  renderer.toneMapping = THREE.NeutralToneMapping;
  renderer.toneMappingExposure = 1.0;
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.VSMShadowMap;

  const scene = new THREE.Scene();
  scene.background = new THREE.Color(BG);
  scene.fog = new THREE.Fog(BG, 9, 20);
  const camera = new THREE.PerspectiveCamera(34, 16 / 9, 0.03, 60);

  const composer = new EffectComposer(renderer, new THREE.WebGLRenderTarget(4, 4, {type: THREE.HalfFloatType, samples: 4}));
  composer.addPass(new RenderPass(scene, camera));
  const gtao = new GTAOPass(scene, camera, 4, 4);
  gtao.output = GTAOPass.OUTPUT.Default;
  gtao.blendIntensity = 0.75;
  gtao.updateGtaoMaterial({radius: 0.12, distanceExponent: 1.4, thickness: 0.6, scale: 1.0, samples: 16, distanceFallOff: 1.0, screenSpaceRadius: false});
  gtao.updatePdMaterial({lumaPhi: 10, depthPhi: 2, normalPhi: 3, radius: 6, rings: 2, samples: 16});
  composer.addPass(gtao);
  const outline = new OutlinePass(new THREE.Vector2(4, 4), scene, camera);
  outline.edgeStrength = 4;
  outline.edgeGlow = 0.2;
  outline.edgeThickness = 1.4;
  outline.visibleEdgeColor.set('#e2792b');
  outline.hiddenEdgeColor.set('#e2792b');
  outline.pulsePeriod = 0;
  composer.addPass(outline);
  composer.addPass(new OutputPass());

  // ambiente: caixas de luz quentes em volta de uma sala clara
  {
    const env = new THREE.Scene();
    env.background = new THREE.Color('#e9e1d4');
    const panel = (w, h, pos, k) => {
      const m = new THREE.Mesh(new THREE.PlaneGeometry(w, h), new THREE.MeshBasicMaterial({color: new THREE.Color(1, 0.97, 0.93).multiplyScalar(k), side: THREE.DoubleSide}));
      m.position.copy(pos);
      m.lookAt(0, 0, 0);
      env.add(m);
    };
    panel(12, 12, new V3(0, 14, 2), 2.2);
    panel(3, 14, new V3(-12, 4, 6), 2.6);
    panel(3, 14, new V3(12, 4, -4), 1.8);
    panel(18, 2, new V3(0, 2, 14), 1.4);
    const g = new THREE.Mesh(new THREE.CircleGeometry(40, 32), new THREE.MeshBasicMaterial({color: '#cdbb9e', side: THREE.DoubleSide}));
    g.rotation.x = -Math.PI / 2;
    g.position.y = -2;
    env.add(g);
    const pm = new THREE.PMREMGenerator(renderer);
    scene.environment = pm.fromScene(env, 0.02).texture;
    scene.environmentIntensity = 0.9;
    pm.dispose();
  }
  const SUN = new V3(0.35, 0.85, 0.42).normalize();
  const sun = new THREE.DirectionalLight('#fff4e6', 2.2);
  sun.castShadow = true;
  Object.assign(sun.shadow.camera, {left: -5, right: 5, top: 4, bottom: -4, near: 0.5, far: 24});
  sun.shadow.mapSize.set(4096, 4096);
  sun.shadow.radius = 8;
  sun.shadow.blurSamples = 16;
  sun.shadow.bias = -0.0004;
  sun.shadow.normalBias = 0.01;
  sun.position.copy(SUN).multiplyScalar(10).add(new V3(-0.6, 0, -0.6));
  sun.target.position.set(-0.6, 0, -0.6);
  scene.add(sun, sun.target);
  scene.add(new THREE.HemisphereLight('#fffaf2', '#d6c3a5', 0.6));

  const size = {w: 1, h: 1};
  const resize = (w, h, pr) => {
    size.w = w;
    size.h = h;
    renderer.setPixelRatio(pr);
    renderer.setSize(w, h, false);
    composer.setPixelRatio(pr);
    composer.setSize(w, h);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
  };
  // cam: {tx,ty,tz, az, el, d} em radianos e metros
  const frame = (cam) => {
    camera.position.set(cam.tx + cam.d * Math.cos(cam.el) * Math.sin(cam.az), cam.ty + cam.d * Math.sin(cam.el), cam.tz + cam.d * Math.cos(cam.el) * Math.cos(cam.az));
    camera.lookAt(cam.tx, cam.ty, cam.tz);
    camera.updateMatrixWorld();
    composer.render();
  };
  const pv = new V3();
  const project = (p) => {
    pv.copy(p).project(camera);
    if (pv.z > 1) return null;
    return [(pv.x * 0.5 + 0.5) * size.w, (-pv.y * 0.5 + 0.5) * size.h];
  };
  const setQuality = ({samples, ao, shadow}) => {
    for (const t of [composer.renderTarget1, composer.renderTarget2]) {
      t.samples = samples;
      t.dispose();
    }
    gtao.enabled = ao;
    sun.shadow.mapSize.set(shadow, shadow);
    sun.shadow.map?.dispose();
    sun.shadow.map = null;
  };
  return {renderer, scene, camera, composer, gtao, outline, sun, resize, frame, project, size, setQuality};
}
