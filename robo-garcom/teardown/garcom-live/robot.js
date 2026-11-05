// O robô garçom R1: corpo, bandejas, braço de 5 eixos e a pinça universal, montados em código a partir de
// dimensões reais (metros). Cada peça inspecionável é registrada em PARTS com nome, função e especificações; o mesmo
// registro alimenta os rótulos, a lista de peças, o raio-X e a vista explodida.
// Referencial do robô: frente = +Z, direita = +X, cima = +Y, origem no chão sob o centro da base.
import * as THREE from 'three';

const V3 = THREE.Vector3;
const PI = Math.PI;

// ------------------------------------------------------------------ dimensões (uma fonte para tudo)
export const DIM = {
  lowerTrays: [0.42, 0.62, 0.82],     // superfície das bandejas de reserva
  topTray: 1.04,                      // superfície da bandeja de trabalho (com tapete)
  topTrayW: 0.60, topTrayD: 0.52, topTrayZ: 0.07,
  headY: 1.56,                        // base da cabeça
  shoulder: new V3(0.30, 1.22, 0.34), // eixo do ombro (J2) — base do braço no canto dianteiro direito da bandeja
  L1: 0.40,                           // braço (J2 → J3)
  L2: 0.50,                           // antebraço (J3 → J4)
  // pinça (a partir do centro do punho, para baixo)
  palm: 0.10,                         // punho → face da palma
  finger: 0.15,                       // comprimento dos dedos
  reach: 0.25,                        // punho → ponta dos dedos (palm + finger)
  gapMin: 0.04, gapMax: 0.30,         // abertura útil entre as almofadas
  lipLen: 0.032,                      // dedo de apoio (entra sob a borda)
};
export const ARM_BASE = new V3(DIM.shoulder.x, DIM.topTray, DIM.shoulder.z);

// ------------------------------------------------------------------ materiais
const std = (o) => new THREE.MeshStandardMaterial(o);
export const MAT = {
  shell: std({color: '#eceef0', roughness: 0.42, metalness: 0}),
  black: std({color: '#1d1f23', roughness: 0.55, metalness: 0.1}),
  tray: std({color: '#2b2e33', roughness: 0.62}),
  mat: std({color: '#34383e', roughness: 0.9}),
  alu: std({color: '#c4c9cf', roughness: 0.34, metalness: 0.85}),
  aluDark: std({color: '#868c94', roughness: 0.38, metalness: 0.8}),
  joint: std({color: '#212428', roughness: 0.42, metalness: 0.35}),
  steel: std({color: '#a3a9b0', roughness: 0.3, metalness: 0.9}),
  rubber: std({color: '#3a3e44', roughness: 0.85}),
  led: std({color: '#19d3cc', emissive: '#12c9c2', emissiveIntensity: 0.9, roughness: 0.3}),
  orange: std({color: '#e2792b', roughness: 0.55}),
  red: std({color: '#d42323', roughness: 0.38}),
  yellow: std({color: '#f2c218', roughness: 0.45}),
  gray: std({color: '#c9ccd0', roughness: 0.45, metalness: 0.2}),
  pcb: std({color: '#2e7d4f', roughness: 0.6}),
  battery: std({color: '#3a4a5c', roughness: 0.5, metalness: 0.3}),
  copper: std({color: '#b87333', roughness: 0.35, metalness: 0.9}),
  glassDark: std({color: '#0c0d10', roughness: 0.08, metalness: 0.4}),
};

// ------------------------------------------------------------------ geometria auxiliar
function roundRectShape(w, d, r) {
  const s = new THREE.Shape(), x = -w / 2, y = -d / 2;
  r = Math.min(r, w / 2, d / 2);
  s.moveTo(x + r, y);
  s.lineTo(x + w - r, y); s.quadraticCurveTo(x + w, y, x + w, y + r);
  s.lineTo(x + w, y + d - r); s.quadraticCurveTo(x + w, y + d, x + w - r, y + d);
  s.lineTo(x + r, y + d); s.quadraticCurveTo(x, y + d, x, y + d - r);
  s.lineTo(x, y + r); s.quadraticCurveTo(x, y, x + r, y);
  return s;
}
/** caixa com cantos arredondados em planta e arestas boleadas; ocupa y ∈ [0, h] */
export function rbox(w, h, d, r, bev) {
  bev = Math.min(bev, h / 2 - 0.0005);
  const g = new THREE.ExtrudeGeometry(roundRectShape(w - 2 * bev, d - 2 * bev, Math.max(0.001, r - bev)), {
    depth: Math.max(0.0005, h - 2 * bev), bevelEnabled: true, bevelThickness: bev, bevelSize: bev, bevelSegments: 4, curveSegments: 10,
  });
  g.rotateX(-PI / 2);
  g.translate(0, bev, 0);
  g.computeVertexNormals();
  return g;
}
const cyl = (r, h, seg = 32, r2 = r) => new THREE.CylinderGeometry(r, r2, h, seg);
const cylX = (r, h, seg = 32) => cyl(r, h, seg).rotateZ(PI / 2);
const cylZ = (r, h, seg = 28) => cyl(r, h, seg).rotateX(PI / 2);
const box = (w, h, d) => new THREE.BoxGeometry(w, h, d);

// ------------------------------------------------------------------ registro de peças
// Cada peça: um ou mais grupos (podem estar em elos diferentes da cadeia cinemática), materiais próprios
// (clonados, para destacar/fantasma sem afetar as outras), deslocamento da vista explodida por grupo.
export const PARTS = {};
export const PART_ORDER = [];
const matCache = new Map();
function partMat(id, base) {
  const k = id + '|' + base.uuid;
  if (!matCache.has(k)) {
    const m = base.clone();
    m.userData.base = {opacity: 1, emissive: m.emissive ? m.emissive.clone() : null, ei: m.emissiveIntensity ?? 0};
    matCache.set(k, m);
    PARTS[id].mats.push(m);
  }
  return matCache.get(k);
}
function defPart(id, info) {
  PARTS[id] = {id, groups: [], mats: [], meshes: [], ...info};
  PART_ORDER.push(id);
}
/** novo grupo da peça `id` dentro de `parent`; ex = deslocamento explodido no referencial do pai */
function grp(id, parent, ex = [0, 0, 0], pos = [0, 0, 0]) {
  const g = new THREE.Group();
  g.position.set(...pos);
  g.userData.part = id;
  g.userData.base = new V3(...pos);
  g.userData.ex = new V3(...ex);
  parent.add(g);
  PARTS[id].groups.push(g);
  return g;
}
function mesh(id, g, geo, mat, x = 0, y = 0, z = 0, shadow = true) {
  const m = new THREE.Mesh(geo, partMat(id, mat));
  m.position.set(x, y, z);
  m.castShadow = shadow;
  m.receiveShadow = true;
  m.userData.part = id;
  g.add(m);
  PARTS[id].meshes.push(m);
  return m;
}

// ------------------------------------------------------------------ catálogo (o que a inspeção mostra)
const CATALOG = [
  ['chassi', 'Chassi e carenagem inferior', 'base', true,
    'Estrutura de alumínio que carrega bateria, tração e sensores. A saia preta é ABS com para-choque de borracha.',
    [['Dimensões', '560 × 560 × 360 mm'], ['Massa', '18,5 kg'], ['Material', 'Alumínio 6061 + ABS'], ['Altura livre', '30 mm']]],
  ['tampa', 'Tampa superior da base', 'base', true,
    'Carenagem branca removível; protege o computador e os drivers. Abre por 4 travas rápidas.',
    [['Material', 'ABS/PC branco'], ['Massa', '1,4 kg'], ['Fixação', '4 travas ¼ de volta']]],
  ['rodas', 'Rodas motrizes (hub motor)', 'base', false,
    'Dois motores BLDC dentro das rodas, tração diferencial: o robô gira no próprio eixo para voltar pelo corredor.',
    [['Diâmetro', '150 mm'], ['Potência', '2 × 150 W'], ['Velocidade máx.', '1,2 m/s (operação 0,7 m/s)'], ['Torque', '8 N·m cada']]],
  ['rodizios', 'Rodízios de apoio', 'base', false,
    'Quatro rodízios livres com suspensão, mantêm a bandeja nivelada sobre juntas do piso.',
    [['Diâmetro', '60 mm'], ['Curso da mola', '8 mm']]],
  ['bateria', 'Bateria LiFePO₄', 'interno', false,
    'Pacote de 24 V no centro de gravidade mais baixo possível. Recarrega na doca da cozinha a cada retorno.',
    [['Tensão', '25,6 V'], ['Capacidade', '30 Ah (768 Wh)'], ['Autonomia', '≈ 12 h de serviço'], ['Massa', '7,2 kg']]],
  ['computador', 'Computador de bordo', 'interno', false,
    'Planeja as rotas, resolve a cinemática inversa do braço e escolhe o modo de preensão de cada utensílio.',
    [['CPU', '8 núcleos ARM + NPU 40 TOPS'], ['Memória', '16 GB'], ['Sistema', 'ROS 2'], ['Consumo', '25 W']]],
  ['drivers', 'Drivers de motor', 'interno', false,
    'Controladores FOC das rodas e das 5 juntas do braço, em barramento CAN.',
    [['Canais', '2 rodas + 5 juntas + pinça'], ['Barramento', 'CAN-FD 5 Mbit/s']]],
  ['lidar', 'LIDAR 360°', 'sensor', false,
    'Varre o salão 10 vezes por segundo pela janela escura da frente: mapa, localização e desvio de pessoas.',
    [['Alcance', '0,1 – 25 m'], ['Frequência', '10 Hz'], ['Resolução', '0,25°']]],
  ['emergencia', 'Botão de emergência', 'segurança', false,
    'Corta a potência das rodas e do braço na hora; o braço trava no lugar (freios nas juntas).',
    [['Tipo', 'Cogumelo NF, retenção'], ['Categoria', 'PL d / SIL 2']]],
  ['coluna', 'Coluna estrutural', 'estrutura', true,
    'Perfil de alumínio coberto por carenagem; leva cabos e sustenta as quatro bandejas e a cabeça.',
    [['Altura', '1,50 m'], ['Massa', '6,8 kg']]],
  ['reservas', 'Bandejas de reserva (3)', 'bandejas', false,
    'Prateleiras para guardanapos, talheres e louça limpa. Borda com LED que indica o nível em uso.',
    [['Área útil', '480 × 440 mm cada'], ['Carga', '10 kg por bandeja']]],
  ['bandeja', 'Bandeja de trabalho', 'bandejas', false,
    'A bandeja do pedido. Tapete antiderrapante com posições marcadas para cada utensílio; o braço sabe onde cada um está.',
    [['Área', '600 × 520 mm'], ['Carga máx.', '8 kg'], ['Posições', '5 (prato, sobremesa, café, copo, garrafa)']]],
  ['celulas', 'Células de carga', 'sensor', false,
    'Quatro extensômetros sob a bandeja de trabalho pesam o pedido: confirmam que cada item saiu ou chegou.',
    [['Faixa', '0 – 10 kg'], ['Resolução', '5 g']]],
  ['cabeca', 'Cabeça e tela do rosto', 'interface', true,
    'Tela de 10" com o rosto animado; pisca, se concentra durante a pega e sorri ao entregar.',
    [['Tela', '10,1" IPS 1280×800'], ['Áudio', '2 alto-falantes 5 W']]],
  ['camera', 'Câmera 3D frontal', 'sensor', false,
    'Câmera de profundidade sob a cabeça: encontra a borda da mesa e confere se o utensílio está ao alcance.',
    [['Tipo', 'Estéreo ativo'], ['Alcance', '0,2 – 4 m'], ['Campo', '87° × 58°']]],
  ['j1', 'J1 · base giratória do braço', 'braço', false,
    'Gira o braço inteiro em torno do eixo vertical; está parafusada no canto dianteiro direito da bandeja.',
    [['Curso', '±170°'], ['Torque', '28 N·m'], ['Redução', 'harmônica 100:1']]],
  ['j2', 'J2 · ombro', 'braço', false,
    'Junta mais exigida: segura braço, antebraço, pinça e o utensílio. O painel mostra o torque ao vivo.',
    [['Curso', '−30° … +160°'], ['Torque nominal', '40 N·m'], ['Freio', 'eletromagnético']]],
  ['elo1', 'Braço (elo 1)', 'braço', false,
    'Tubo de alumínio com os cabos por dentro.',
    [['Comprimento', '400 mm'], ['Massa', '1,4 kg']]],
  ['j3', 'J3 · cotovelo', 'braço', false,
    'Dobra o antebraço; sempre "para cima" para não varrer a bandeja.',
    [['Curso', '−165° … 0°'], ['Torque', '20 N·m']]],
  ['elo2', 'Antebraço (elo 2)', 'braço', false,
    'Tubo mais longo da cadeia: garante o alcance até a borda da mesa a 0,6 m do robô.',
    [['Comprimento', '500 mm'], ['Massa', '1,1 kg']]],
  ['j4', 'J4 · punho (nivelamento)', 'braço', false,
    'Compensa ombro + cotovelo a cada instante: a pinça, e portanto o prato, fica sempre na horizontal.',
    [['Regra', 'J4 = −(J2 + J3)'], ['Torque', '8 N·m']]],
  ['j5', 'J5 · rotor da pinça', 'braço', false,
    'Gira a pinça em torno do eixo vertical para alinhar as mandíbulas com o utensílio.',
    [['Curso', 'contínuo'], ['Torque', '4 N·m']]],
  ['pinca', 'Pinça universal · corpo e fuso', 'pinça', false,
    'Um fuso de rosca dupla move as duas mandíbulas em sentidos opostos: abre de 40 a 300 mm, do copo ao prato raso.',
    [['Abertura', '40 – 300 mm'], ['Força', 'até 60 N'], ['Velocidade', '120 mm/s'], ['Massa', '0,9 kg']]],
  ['mandibulas', 'Mandíbulas paralelas', 'pinça', false,
    'Dedos de 150 mm, compridos o bastante para abraçar uma garrafa pelo corpo sem a palma tocar na tampa.',
    [['Comprimento', '150 mm'], ['Material', 'alumínio anodizado']]],
  ['finray', 'Almofadas fin-ray', 'pinça', false,
    'Estrutura em treliça de TPU que se curva em volta do objeto (efeito "fin ray"): copo, garrafa, xícara — sem escorregar e sem quebrar.',
    [['Material', 'TPU 85A'], ['Atrito', 'μ ≈ 0,8 (vidro molhado 0,5)']]],
  ['apoios', 'Dedos de apoio sob a borda', 'pinça', false,
    'Abas de 32 mm na ponta de cada dedo. Para pratos e pires: giram 90° e entram sob a borda; o peso fica nelas e as almofadas só centralizam.',
    [['Curso', '90° em 0,4 s'], ['Atuador', 'micro-servo por dedo'], ['Folga mínima', '6 mm sob a borda']]],
  ['sensor', 'Sensor 3D da palma + anel LED', 'pinça', false,
    'Câmera ToF voltada para baixo: mede altura, diâmetro e centro do utensílio antes de descer.',
    [['Tipo', 'ToF 240 × 180'], ['Precisão', '±2 mm a 30 cm']]],
];
for (const [id, name, cat, shell, desc, specs] of CATALOG) defPart(id, {name, cat, shell, desc, specs});

// ------------------------------------------------------------------ montagem
export function buildRobot() {
  const root = new THREE.Group();           // posição/rumo no salão
  const upper = new THREE.Group();          // tudo acima da base (sobe na vista explodida)
  root.add(upper);
  upper.userData.ex = new V3(0, 0.32, 0);

  // ---------------- base
  {
    const g = grp('chassi', root, [0, -0.02, 0]);
    mesh('chassi', g, rbox(0.56, 0.17, 0.56, 0.11, 0.025), MAT.black, 0, 0.03, 0);
    mesh('chassi', g, rbox(0.575, 0.014, 0.575, 0.115, 0.004), MAT.led, 0, 0.19, 0, false);
    mesh('chassi', g, rbox(0.56, 0.035, 0.56, 0.11, 0.004), MAT.black, 0, 0.2, 0);
    mesh('chassi', g, box(0.42, 0.03, 0.02), MAT.rubber, 0, 0.06, 0.285);           // para-choque
    mesh('chassi', g, box(0.30, 0.035, 0.012), MAT.glassDark, 0, 0.115, 0.283);     // janela do LIDAR
  }
  {
    const g = grp('tampa', root, [0, 0.16, 0]);
    mesh('tampa', g, rbox(0.56, 0.13, 0.56, 0.11, 0.045), MAT.shell, 0, 0.23, 0);
  }
  {
    // rodas motrizes: aro cinza + cubo escuro (dentro: estator de cobre, visível no raio-X)
    for (const s of [-1, 1]) {
      const g = grp('rodas', root, [s * 0.3, 0, 0], [s * 0.27, 0.075, 0.0]);
      mesh('rodas', g, cylX(0.075, 0.045, 40), MAT.rubber);
      mesh('rodas', g, cylX(0.05, 0.05, 32), MAT.gray, s * 0.002, 0, 0);
      mesh('rodas', g, cylX(0.036, 0.052, 24), MAT.copper, 0, 0, 0);
      mesh('rodas', g, cylX(0.018, 0.056, 16), MAT.joint, 0, 0, 0);
    }
    for (const [x, z] of [[-0.19, 0.2], [0.19, 0.2], [-0.19, -0.2], [0.19, -0.2]]) {
      const g = grp('rodizios', root, [x * 0.8, -0.03, z * 0.8], [x, 0.03, z]);
      mesh('rodizios', g, cylX(0.03, 0.022, 20), MAT.black);
      mesh('rodizios', g, box(0.03, 0.04, 0.05), MAT.aluDark, 0, 0.035, -0.012);
    }
  }
  {
    const g = grp('bateria', root, [0, -0.04, -0.48], [0, 0.0, -0.06]);
    mesh('bateria', g, rbox(0.34, 0.11, 0.22, 0.015, 0.006), MAT.battery, 0, 0.055, 0);
    mesh('bateria', g, box(0.2, 0.002, 0.08), MAT.yellow, 0, 0.166, 0.0, false);
    mesh('bateria', g, cyl(0.008, 0.02, 10), MAT.red, -0.12, 0.17, 0.07);
    mesh('bateria', g, cyl(0.008, 0.02, 10), MAT.black, 0.12, 0.17, 0.07);
  }
  {
    const g = grp('computador', root, [-0.45, 0.1, 0], [-0.08, 0.255, 0.07]);
    mesh('computador', g, rbox(0.2, 0.035, 0.15, 0.01, 0.004), MAT.aluDark);
    mesh('computador', g, box(0.17, 0.004, 0.12), MAT.pcb, 0, 0.037, 0);
    for (let i = 0; i < 7; i++) mesh('computador', g, box(0.004, 0.018, 0.12), MAT.alu, -0.06 + i * 0.02, 0.048, 0, false);
  }
  {
    const g = grp('drivers', root, [0.45, 0.1, 0], [0.13, 0.255, 0.04]);
    mesh('drivers', g, box(0.12, 0.03, 0.16), MAT.pcb, 0, 0.015, 0);
    for (let i = 0; i < 4; i++) mesh('drivers', g, cyl(0.008, 0.02, 10), MAT.black, -0.035 + i * 0.023, 0.04, 0.05, false);
  }
  {
    const g = grp('lidar', root, [0, 0, 0.42], [0, 0.098, 0.22]);
    mesh('lidar', g, cyl(0.04, 0.035, 32), MAT.joint, 0, 0.0175, 0);
    mesh('lidar', g, cyl(0.03, 0.01, 24), MAT.led, 0, 0.04, 0, false);
  }
  {
    const g = grp('emergencia', root, [-0.25, 0.25, 0.1], [-0.2, 0.36, 0.2]);
    mesh('emergencia', g, cyl(0.032, 0.018, 28, 0.034), MAT.yellow, 0, 0.009, 0);
    mesh('emergencia', g, cyl(0.018, 0.016, 20), MAT.red, 0, 0.025, 0);
    mesh('emergencia', g, cyl(0.025, 0.014, 24, 0.024), MAT.red, 0, 0.039, 0);
  }

  // ---------------- coluna, bandejas, cabeça (no grupo superior)
  {
    const g = grp('coluna', upper, [0, 0, -0.32]);
    const colTop = DIM.headY + 0.18;
    mesh('coluna', g, rbox(0.34, colTop - 0.34, 0.14, 0.05, 0.02), MAT.shell, 0, 0.34, -0.26);
    const arco = new THREE.CylinderGeometry(0.12, 0.12, 0.34, 32, 1, false, PI / 2, PI / 2).rotateZ(PI / 2);
    mesh('coluna', g, arco, MAT.shell, 0, colTop, -0.21);
  }
  {
    const g = grp('reservas', upper, [0, 0, 0.3]);
    DIM.lowerTrays.forEach((y, i) => {
      mesh('reservas', g, rbox(0.48, 0.03, 0.44, 0.07, 0.01), MAT.tray, 0, y - 0.03, 0.03);
      mesh('reservas', g, box(0.38, 0.007, 0.006), MAT.led, 0, y - 0.017, 0.252, false);
      mesh('reservas', g, box(0.3, 0.04, 0.03), MAT.black, 0, y - 0.04, -0.18);
      // conteúdo de reserva: guardanapos, porta-talheres, louça limpa empilhada
      if (i === 0) for (let k = 0; k < 4; k++) mesh('reservas', g, cyl(0.095, 0.012, 40), MAT.gray, -0.08, y + 0.006 + k * 0.013, 0.05);
      if (i === 1) { mesh('reservas', g, box(0.14, 0.05, 0.14), MAT.shell, 0.1, y + 0.025, 0.04); mesh('reservas', g, box(0.12, 0.004, 0.12), MAT.orange, 0.1, y + 0.052, 0.04, false); }
      if (i === 2) { mesh('reservas', g, rbox(0.16, 0.07, 0.1, 0.012, 0.004), MAT.black, -0.1, y, 0.06); for (let k = 0; k < 3; k++) mesh('reservas', g, box(0.006, 0.09, 0.006), MAT.steel, -0.14 + k * 0.035, y + 0.09, 0.06, false); }
    });
  }
  const trayG = grp('bandeja', upper, [0, 0.18, 0.15]);
  {
    const {topTray: y, topTrayW: w, topTrayD: d, topTrayZ: z} = DIM;
    mesh('bandeja', trayG, rbox(w, 0.03, d, 0.07, 0.01), MAT.tray, 0, y - 0.034, z);
    mesh('bandeja', trayG, rbox(w - 0.04, 0.004, d - 0.04, 0.05, 0.001), MAT.mat, 0, y - 0.004, z);
    mesh('bandeja', trayG, box(w - 0.12, 0.007, 0.006), MAT.led, 0, y - 0.02, z + d / 2 + 0.002, false);
    mesh('bandeja', trayG, box(0.006, 0.007, d - 0.12), MAT.led, -w / 2 - 0.002, y - 0.02, z, false);
    mesh('bandeja', trayG, box(0.32, 0.04, 0.03), MAT.black, 0, y - 0.06, -0.18);
  }
  {
    const g = grp('celulas', upper, [0, 0.08, 0.15]);
    const {topTray: y, topTrayW: w, topTrayD: d, topTrayZ: z} = DIM;
    for (const [sx, sz] of [[-1, -1], [1, -1], [-1, 1], [1, 1]]) {
      mesh('celulas', g, box(0.05, 0.016, 0.03), MAT.steel, sx * (w / 2 - 0.08), y - 0.05, z + sz * (d / 2 - 0.08));
      mesh('celulas', g, box(0.02, 0.004, 0.02), MAT.copper, sx * (w / 2 - 0.08), y - 0.041, z + sz * (d / 2 - 0.08), false);
    }
  }
  {
    const g = grp('cabeca', upper, [0, 0.28, -0.05]);
    mesh('cabeca', g, rbox(0.42, 0.28, 0.32, 0.09, 0.07), MAT.shell, 0, DIM.headY, -0.10);
    mesh('cabeca', g, box(0.37, 0.165, 0.012), MAT.black, 0, DIM.headY + 0.14, 0.062);
    for (const s of [-1, 1]) for (let k = 0; k < 4; k++) mesh('cabeca', g, box(0.004, 0.006, 0.12), MAT.black, s * 0.211, DIM.headY + 0.09 + k * 0.022, -0.1, false);
  }
  {
    const g = grp('camera', upper, [0, 0.12, 0.2]);
    mesh('camera', g, rbox(0.14, 0.03, 0.05, 0.01, 0.004), MAT.black, 0, DIM.headY - 0.03, 0.02);
    for (const x of [-0.04, 0, 0.04]) mesh('camera', g, cylZ(0.008, 0.004, 16), MAT.glassDark, x, DIM.headY - 0.015, 0.046, false);
  }

  // ---------------- braço (cadeia cinemática) — grupos de articulação + grupos de peça dentro deles
  const arm = {};
  arm.base = new THREE.Group();
  arm.base.position.copy(ARM_BASE);
  upper.add(arm.base);
  {
    const g = grp('j1', arm.base, [0.2, 0.1, 0.25]);
    mesh('j1', g, cyl(0.065, 0.09, 36, 0.072), MAT.joint, 0, 0.045, 0);
    mesh('j1', g, cyl(0.07, 0.012, 36), MAT.alu, 0, 0.092, 0);
  }
  arm.yaw = new THREE.Group();
  arm.yaw.position.y = 0.09;
  arm.base.add(arm.yaw);
  {
    const g = grp('j1', arm.yaw, [0.2, 0.18, 0.25]);
    mesh('j1', g, cyl(0.055, 0.09, 32), MAT.alu, 0, 0.045, 0);
  }
  arm.shoulder = new THREE.Group();
  arm.shoulder.position.y = DIM.shoulder.y - ARM_BASE.y - 0.09;
  arm.yaw.add(arm.shoulder);
  {
    const g = grp('j2', arm.shoulder, [0.12, 0.05, 0]);
    mesh('j2', g, cylX(0.054, 0.12), MAT.joint);
    mesh('j2', g, cylX(0.056, 0.02), MAT.alu, 0.065, 0, 0);
    mesh('j2', g, cylX(0.03, 0.02), MAT.led, -0.064, 0, 0, false);
  }
  {
    const g = grp('elo1', arm.shoulder, [0, 0.1, 0.05]);
    mesh('elo1', g, cylZ(0.036, DIM.L1 - 0.08), MAT.alu, 0, 0, DIM.L1 / 2);
    mesh('elo1', g, cylZ(0.038, 0.03), MAT.joint, 0, 0, DIM.L1 * 0.5);
  }
  arm.elbow = new THREE.Group();
  arm.elbow.position.z = DIM.L1;
  arm.shoulder.add(arm.elbow);
  {
    const g = grp('j3', arm.elbow, [0.1, 0.05, 0]);
    mesh('j3', g, cylX(0.048, 0.11), MAT.joint);
    mesh('j3', g, cylX(0.05, 0.02), MAT.alu, 0.06, 0, 0);
  }
  {
    const g = grp('elo2', arm.elbow, [0, 0.1, 0.06]);
    mesh('elo2', g, cylZ(0.031, DIM.L2 - 0.07), MAT.alu, 0, 0, DIM.L2 / 2);
    mesh('elo2', g, cylZ(0.033, 0.03), MAT.joint, 0, 0, DIM.L2 * 0.62);
  }
  arm.wrist = new THREE.Group();
  arm.wrist.position.z = DIM.L2;
  arm.elbow.add(arm.wrist);
  {
    const g = grp('j4', arm.wrist, [0.08, 0.06, 0]);
    mesh('j4', g, cylX(0.04, 0.09), MAT.joint);
    mesh('j4', g, cylX(0.042, 0.016), MAT.alu, 0.05, 0, 0);
  }
  arm.rot = new THREE.Group();
  arm.wrist.add(arm.rot);
  {
    const g = grp('j5', arm.rot, [0, 0.03, 0]);
    mesh('j5', g, cyl(0.033, 0.045, 28), MAT.joint, 0, -0.035, 0);
    mesh('j5', g, cyl(0.036, 0.008, 28), MAT.alu, 0, -0.058, 0);
  }

  // ---------------- pinça universal (origem = centro do punho; dedos apontam para −Y)
  const grip = new THREE.Group();
  arm.rot.add(grip);
  const P0 = -DIM.palm; // face inferior da palma
  {
    const g = grp('pinca', grip, [0, -0.06, 0]);
    mesh('pinca', g, cyl(0.042, 0.012, 32), MAT.alu, 0, -0.068, 0);
    mesh('pinca', g, rbox(0.37, 0.034, 0.078, 0.014, 0.006), MAT.aluDark, 0, P0, 0);
    mesh('pinca', g, rbox(0.33, 0.012, 0.06, 0.01, 0.003), MAT.joint, 0, P0 + 0.034, 0);
    mesh('pinca', g, cylX(0.019, 0.09), MAT.joint, 0.09, P0 + 0.046, -0.012);        // motor do fuso
    mesh('pinca', g, cylX(0.006, 0.34, 16), MAT.steel, 0, P0 + 0.012, 0.026);          // fuso (rosca dupla)
    mesh('pinca', g, box(0.35, 0.008, 0.012), MAT.steel, 0, P0 - 0.002, -0.026);       // trilho linear
    for (const s of [-1, 1]) mesh('pinca', g, rbox(0.014, 0.04, 0.08, 0.004, 0.002), MAT.joint, s * 0.186, P0 - 0.003, 0);
  }
  {
    const g = grp('sensor', grip, [0, -0.16, 0]);
    mesh('sensor', g, rbox(0.05, 0.016, 0.034, 0.006, 0.003), MAT.black, 0, P0 - 0.016, 0);
    mesh('sensor', g, cyl(0.009, 0.004, 20), MAT.glassDark, 0, P0 - 0.018, 0, false);
    const ring = new THREE.TorusGeometry(0.032, 0.0035, 8, 40).rotateX(PI / 2);
    mesh('sensor', g, ring, MAT.led, 0, P0 - 0.004, 0, false);
  }
  // mandíbulas: grupo cinemático em x = ±abertura/2 (face da almofada); por dentro, peças com explosão própria
  const jaws = [];
  for (const s of [-1, 1]) {
    const jaw = new THREE.Group();
    jaw.userData.s = s;
    grip.add(jaw);
    const yMid = P0 - DIM.finger / 2;
    {
      const g = grp('mandibulas', jaw, [s * 0.1, 0, 0]);
      mesh('mandibulas', g, rbox(0.036, 0.026, 0.07, 0.006, 0.003), MAT.joint, s * 0.02, P0 - 0.013, 0); // carro no trilho
      mesh('mandibulas', g, rbox(0.011, DIM.finger, 0.06, 0.004, 0.002), MAT.aluDark, s * 0.0175, P0 - DIM.finger, 0);
      mesh('mandibulas', g, box(0.012, 0.03, 0.024), MAT.joint, s * 0.03, P0 - DIM.finger + 0.022, 0); // micro-servo
    }
    {
      const g = grp('finray', jaw, [s * 0.05, 0, 0]);
      // almofada em treliça: face lisa + nervuras inclinadas
      mesh('finray', g, box(0.004, DIM.finger - 0.012, 0.056), MAT.orange, s * 0.002, yMid + 0.006, 0);
      mesh('finray', g, box(0.004, DIM.finger - 0.02, 0.056), MAT.orange, s * 0.010, yMid + 0.01, 0);
      for (let k = 0; k < 6; k++) {
        const rib = mesh('finray', g, box(0.012, 0.003, 0.056), MAT.orange, s * 0.006, P0 - 0.02 - k * 0.022, 0);
        rib.rotation.z = s * 0.5;
      }
    }
    // dedo de apoio: pivô na ponta, aba aponta para o centro quando aberta (0) e para cima quando recolhida
    const lip = new THREE.Group();
    lip.position.set(0, P0 - DIM.finger, 0);
    jaw.add(lip);
    {
      const g = grp('apoios', lip, [0, -0.05, 0]);
      mesh('apoios', g, box(DIM.lipLen, 0.004, 0.05), MAT.steel, -s * DIM.lipLen / 2, 0.002, 0);
      mesh('apoios', g, box(DIM.lipLen - 0.006, 0.0015, 0.046), MAT.rubber, -s * (DIM.lipLen / 2 + 0.002), 0.0048, 0, false);
      mesh('apoios', g, cylZ(0.004, 0.054, 12), MAT.joint, 0, 0.002, 0);
    }
    jaws.push({jaw, lip, s});
  }

  // ---------------- explodida: aplicada por grupo de peça (e na cadeia do braço)
  const groups = PART_ORDER.flatMap((id) => PARTS[id].groups);
  let exNow = -1;
  const setExplode = (e) => {
    if (Math.abs(e - exNow) < 1e-4) return;
    exNow = e;
    upper.position.copy(upper.userData.ex).multiplyScalar(e);
    for (const g of groups) g.position.copy(g.userData.base).addScaledVector(g.userData.ex, e);
    arm.elbow.position.z = DIM.L1 + 0.1 * e;
    arm.wrist.position.z = DIM.L2 + 0.1 * e;
    arm.rot.position.y = -0.05 * e;
  };
  setExplode(0);

  // ---------------- pose: juntas + pinça
  const pose = {gap: 0.06, lip: 0, e: 0};
  const apply = (j, gap, lip, e = 0) => {
    arm.yaw.rotation.y = j.th0;
    arm.shoulder.rotation.x = -j.a1;
    arm.elbow.rotation.x = -j.a2;
    arm.wrist.rotation.x = j.a1 + j.a2; // J4 = −(J2+J3): pinça nivelada
    arm.rot.rotation.y = j.psi - j.th0; // J5
    for (const {jaw, lip: l, s} of jaws) {
      jaw.position.x = s * (gap / 2 + 0.1 * e);
      // recolhida: aponta para cima (−s·90°); aberta sob a borda: horizontal para o centro
      l.rotation.z = -s * (PI / 2) * (1 - lip);
    }
    pose.gap = gap;
    pose.lip = lip;
  };

  return {root, upper, arm, grip, trayG, jaws, apply, setExplode, pose, parts: PARTS};
}

// ------------------------------------------------------------------ cinemática inversa (no referencial do robô)
/** punho em W (referencial do robô) com a pinça para baixo e as mandíbulas no rumo psi; cotovelo sempre para cima */
export function ik(W, psi = 0) {
  const S = DIM.shoulder, {L1, L2} = DIM;
  const dx = W.x - S.x, dz = W.z - S.z;
  const th0 = Math.atan2(dx, dz);
  const r = Math.hypot(dx, dz), h = W.y - S.y;
  const d = Math.min(Math.max(Math.hypot(r, h), Math.abs(L1 - L2) + 1e-4), L1 + L2 - 1e-4);
  const c2 = Math.min(1, Math.max(-1, (d * d - L1 * L1 - L2 * L2) / (2 * L1 * L2)));
  const a2 = -Math.acos(c2);
  const a1 = Math.atan2(h, r) - Math.atan2(L2 * Math.sin(a2), L1 + L2 * Math.cos(a2));
  return {th0, a1, a2, psi, reach: Math.hypot(r, h), r, h};
}
