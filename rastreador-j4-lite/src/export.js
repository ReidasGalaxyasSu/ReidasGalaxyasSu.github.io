// Exportação do modelo (GLB/glTF) com os seis conjuntos separados e as animações de montagem.
// Rodado no navegador pelo script scripts/export-model.mjs (as texturas são desenhadas em canvas).
import * as THREE from 'three';
import { GLTFExporter } from 'three/addons/exporters/GLTFExporter.js';
import { mergeVertices } from 'three/addons/utils/BufferGeometryUtils.js';
import { buildJ4 } from './model.js';
import { EXPLODE } from './layout.js';

const ORDER_DESMONTAGEM = [
  ['tampa_externa_j4_lite'],
  ['protecao_interna_j4_lite'],
  ['placa_j4_lite', 'chicote_j4_lite', 'bateria_j4_lite'],
  ['bateria_j4_lite'],
];
const ease = t => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);

// posição Z de cada conjunto ao fim de cada passo da desmontagem
function zAfterStep(id, step) {
  const E = EXPLODE;
  const table = {
    tampa_externa_j4_lite: [E.tampa_externa_j4_lite, E.tampa_externa_j4_lite, E.tampa_externa_j4_lite, E.tampa_externa_j4_lite],
    protecao_interna_j4_lite: [0, E.protecao_interna_j4_lite, E.protecao_interna_j4_lite, E.protecao_interna_j4_lite],
    placa_j4_lite: [0, 0, E.placa_j4_lite, E.placa_j4_lite],
    chicote_j4_lite: [0, 0, E.chicote_j4_lite, E.chicote_j4_lite],
    bateria_j4_lite: [0, 0, E.placa_j4_lite, E.bateria_j4_lite],
    carcaca_j4_lite: [0, 0, 0, 0],
  };
  return step < 0 ? 0 : table[id][step];
}

function buildClips(sets) {
  const STEP = 1.0, SAMPLES = 8;
  const mk = (name, reverse) => {
    const tracks = [];
    for (const [id, o] of Object.entries(sets)) {
      const base = o.position.clone(), times = [], values = [];
      for (let s = 0; s < 4; s++) {
        for (let k = s === 0 ? 0 : 1; k <= SAMPLES; k++) {
          const t = k / SAMPLES;
          let z;
          if (!reverse) z = THREE.MathUtils.lerp(zAfterStep(id, s - 1), zAfterStep(id, s), ease(t));
          else { const r = 3 - s; z = THREE.MathUtils.lerp(zAfterStep(id, r), zAfterStep(id, r - 1), ease(t)); }
          times.push(+(s * STEP + t * STEP).toFixed(4));
          values.push(base.x, base.y, base.z + z);
        }
      }
      tracks.push(new THREE.VectorKeyframeTrack(`${o.name}.position`, times, values));
    }
    return new THREE.AnimationClip(name, -1, tracks);
  };
  const pose = (name, explodido) => new THREE.AnimationClip(name, -1, Object.values(sets).map(o => {
    const z = o.position.z + (explodido ? EXPLODE[o.name] : 0);
    return new THREE.VectorKeyframeTrack(`${o.name}.position`, [0, 0.04], [o.position.x, o.position.y, z, o.position.x, o.position.y, z]);
  }));
  return [mk('desmontagem', false), mk('montagem', true), pose('pose_MONTADO', false), pose('pose_EXPLODIDO', true)];
}

window.__exportJ4 = async () => {
  const { root, sets } = buildJ4();
  // glTF usa metros: 1 unidade do modelo ≈ 1 mm (escala relativa) → raiz em 0,001
  root.scale.setScalar(0.001);
  root.userData = {
    modelo: 'RealTracker J4 Lite',
    escala: 'relativa — proporções tiradas das fotos; 1 unidade ≈ 1 mm estimado; conferir medidas no equipamento',
    eixos: 'Y = comprimento (+Y ponta do chicote), X = largura, Z = espessura (+Z tampa externa)',
    posicoes: 'Transformações padrão = MONTADO. Cada conjunto traz posicao_montado/posicao_explodido (unidades do modelo).',
    montagem: '1 bateria no verso da placa → 2 conjunto na carcaça → 3 proteção interna → 4 tampa externa; desmontagem na ordem inversa; o chicote acompanha a placa',
    aproximacoes: 'Detalhes ocultos (sob a blindagem, sob a fita da bateria, interior do conector) são aproximações.',
  };
  // vértices compartilhados (arquivo menor); arestas vivas continuam separadas porque as normais diferem
  root.traverse(o => { if (o.isMesh) o.geometry = mergeVertices(o.geometry, 1e-4); });
  const scene = new THREE.Scene();
  scene.add(root);
  scene.updateMatrixWorld(true);
  const animations = buildClips(sets);
  const ex = new GLTFExporter();
  const opts = { animations, onlyVisible: false, maxTextureSize: 4096 };
  const glb = await ex.parseAsync(scene, { ...opts, binary: true });
  const gltf = await ex.parseAsync(scene, { ...opts, binary: false });
  let b = '', u8 = new Uint8Array(glb);
  for (let i = 0; i < u8.length; i += 0x8000) b += String.fromCharCode.apply(null, u8.subarray(i, i + 0x8000));
  let meshes = 0, tris = 0;
  root.traverse(o => { if (o.isMesh) { meshes++; tris += (o.geometry.index ? o.geometry.index.count : o.geometry.attributes.position.count) / 3; } });
  return { glb: btoa(b), gltf: JSON.stringify(gltf), meshes, tris: Math.round(tris), sets: Object.keys(sets) };
};
