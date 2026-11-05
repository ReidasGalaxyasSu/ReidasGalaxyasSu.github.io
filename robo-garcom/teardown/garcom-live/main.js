// Robô Garçom R1 · operação de salão — página interativa montada com o kit teardown.
// Escolha a mesa, entregue o pedido ou recolha a louça da borda; inspecione cada peça (clique, isolar, raio-X,
// vista explodida). Parado, a página faz um tour sozinha; qualquer toque devolve o controle.
import * as THREE from 'three';
import {warmComposer} from 'teardown-kit/warm.js';
import {buildRobot, DIM, ik, PART_ORDER, PARTS} from './robot.js';
import {compile, evalPlan, itemStates, REST} from './plan.js';
import {createStage} from './stage.js';
import {buildWorld, CENTER_SPOT, DELIVER_ORDER, DOCK_X, EDGE_SPOT, HEADING, isOnEdge, makeItem, parkToWorld, TABLE_TOP, TRAY_SLOT, TYPES} from './world.js';

const PI = Math.PI;
const V3 = THREE.Vector3;
const D2R = PI / 180;
const clamp = (x, a, b) => Math.min(b, Math.max(a, x));
const wrapA = (a) => a - 2 * PI * Math.round(a / (2 * PI));
const ss = (a, b, t) => {
  const u = clamp((t - a) / (b - a), 0, 1);
  return u * u * (3 - 2 * u);
};

document.documentElement.lang = 'pt-BR';
document.title = 'Robô Garçom R1 · Operação de salão';

// ================================================================== palco, salão, robô
const app = document.getElementById('app');
const canvas = document.createElement('canvas');
canvas.id = 'gl';
app.appendChild(canvas);
const st = createStage(canvas);
const W = buildWorld(st.scene);
const R = buildRobot();
st.scene.add(R.root);

// rosto (tela da cabeça)
const faceCv = document.createElement('canvas');
faceCv.width = 512;
faceCv.height = 224;
const fctx = faceCv.getContext('2d');
const faceTex = new THREE.CanvasTexture(faceCv);
faceTex.colorSpace = THREE.SRGBColorSpace;
{
  const m = new THREE.Mesh(new THREE.PlaneGeometry(0.35, 0.15), new THREE.MeshBasicMaterial({map: faceTex, toneMapped: false, transparent: true}));
  m.position.set(0, DIM.headY + 0.14, 0.0695);
  m.userData.part = 'cabeca';
  m.material.userData.base = {opacity: 1, emissive: null, ei: 0};
  m.material.userData.alwaysT = true;
  PARTS.cabeca.groups[0].add(m);
  PARTS.cabeca.mats.push(m.material);
  PARTS.cabeca.meshes.push(m);
}
let faceKey = '';
function drawFace(mode, blink) {
  const key = mode + blink;
  if (key === faceKey) return;
  faceKey = key;
  const w = 512;
  fctx.fillStyle = '#050607';
  fctx.fillRect(0, 0, 512, 224);
  fctx.fillStyle = fctx.strokeStyle = fctx.shadowColor = '#18d6cf';
  fctx.shadowBlur = 16;
  const ew = 92, eh = 62, ey = 66, x1 = 96, x2 = w - 96 - ew;
  if (mode === 'feliz') {
    fctx.lineWidth = 20;
    fctx.lineCap = 'round';
    for (const x of [x1, x2]) {
      fctx.beginPath();
      fctx.arc(x + ew / 2, ey + 62, 40, PI * 1.12, PI * 1.88);
      fctx.stroke();
    }
    fctx.lineWidth = 14;
    fctx.beginPath();
    fctx.arc(w / 2, 118, 56, PI * 0.2, PI * 0.8);
    fctx.stroke();
  } else {
    const h = Math.max(6, eh * (1 - blink) * (mode === 'foco' ? 0.6 : 1));
    const yy = ey + (eh - h) / 2 + (mode === 'foco' ? 8 : 0);
    fctx.fillRect(x1, yy, ew, h);
    fctx.fillRect(x2, yy, ew, h);
    fctx.fillRect(w / 2 - 56, 170, 112, 12);
  }
  faceTex.needsUpdate = true;
}

// ================================================================== estado do mundo
const INITIAL = () => ({
  serial: 1,
  items: [
    // mesa 2: cliente terminou, louça na borda
    {id: 'a1', type: 'prato', loc: 'table', table: 1, x: EDGE_SPOT.prato[0], z: EDGE_SPOT.prato[1], used: true},
    {id: 'a2', type: 'copo', loc: 'table', table: 1, x: EDGE_SPOT.copo[0], z: EDGE_SPOT.copo[1], used: true},
    {id: 'a3', type: 'garrafa', loc: 'table', table: 1, x: EDGE_SPOT.garrafa[0], z: EDGE_SPOT.garrafa[1], used: true},
    // mesa 3: café na borda, sobremesa no centro (fora de alcance até o cliente aproximar)
    {id: 'b1', type: 'cafe', loc: 'table', table: 2, x: EDGE_SPOT.cafe[0], z: EDGE_SPOT.cafe[1], used: true},
    {id: 'b2', type: 'sobremesa', loc: 'table', table: 2, x: CENTER_SPOT.sobremesa[0], z: CENTER_SPOT.sobremesa[1], used: true},
  ],
});
let world = INITIAL();
const meshes = new Map(); // id → objeto 3D
const meshOf = (it) => {
  if (!meshes.has(it.id)) {
    const m = makeItem(it.type, it.used);
    m.userData.item = it.id;
    m.traverse((o) => (o.userData.item = it.id));
    st.scene.add(m);
    meshes.set(it.id, m);
  }
  return meshes.get(it.id);
};
const resetWorld = () => {
  for (const m of meshes.values()) st.scene.remove(m);
  meshes.clear();
  world = INITIAL();
  slides.clear();
};
const slides = new Map(); // id → {fx, fz, t0} deslize feito pelo cliente

const S = {
  T: 0, // relógio da página
  plan: null,
  tau: 0,
  playing: true,
  speed: 1,
  table: 0,
  kind: 'entregar',
  types: new Set(['garrafa', 'copo', 'prato']),
  odo: 0,
  batt: 86,
  view: 'auto',
  disp: {labels: {on: 0, t: -9}, xray: {on: 0, t: -9}, explode: {on: 0, t: -9}, alcance: {on: 1, t: -9}, trajeto: {on: 0, t: -9}},
  sel: null,
  isolate: false,
  msg: '',
  msgErr: false,
};
const eased = (k, dur = 0.7) => {
  const d = S.disp[k];
  const x = ss(d.t, d.t + dur, S.T);
  return d.on ? x : 1 - x;
};

// ================================================================== interface
const ui = document.createElement('div');
ui.className = 'ui';
app.appendChild(ui);
const el = (h, parent = ui) => {
  const d = document.createElement('div');
  d.innerHTML = h.trim();
  const n = d.firstElementChild;
  parent.appendChild(n);
  return n;
};
el(`<div id="hdr" class="card"><div class="badge">R1</div><div><h1>Robô Garçom <span>/</span> operação de salão</h1><p class="sm">3 mesas · entrega e recolha · pinça universal · inspeção peça a peça</p></div></div>`);
const tourChip = el(`<div id="tour" class="card"></div>`);
const labelsBox = el(`<div id="labels"><svg width="100%" height="100%"></svg></div>`);
const sayEl = el(`<div id="say"></div>`);
const hint = el(`<div id="hint">arraste para girar · roda ou pinça para zoom · clique numa peça para inspecionar</div>`);

const pM = el(`<div id="pMissao" class="card">
  <div class="ph"><i></i>Missão<span class="n">01</span></div>
  <div class="mesas" id="mesas"></div>
  <div class="row" style="margin-top:10px"><button class="bt" data-k="entregar">Entregar pedido</button><button class="bt" data-k="recolher">Recolher louça</button></div>
  <div id="pedidoBox"><hr><div class="sm" style="margin-bottom:7px">Pedido</div><div class="itens" id="itens"></div></div>
  <div id="msg"></div>
  <button class="bt go" id="btnGo">▶ Iniciar missão</button>
</div>`);
const mesasEl = pM.querySelector('#mesas');
const mesaBtns = [0, 1, 2].map((k) => {
  const b = el(`<button class="bt mesa"><b>Mesa ${k + 1}</b><span></span></button>`, mesasEl);
  b.addEventListener('click', () => {
    takeOver();
    S.table = k;
    refreshMission();
  });
  return b;
});
const kindBtns = [...pM.querySelectorAll('[data-k]')];
kindBtns.forEach((b) => b.addEventListener('click', () => {
  takeOver();
  S.kind = b.dataset.k;
  refreshMission();
}));
const itensEl = pM.querySelector('#itens');
const itemBtns = DELIVER_ORDER.map((t) => {
  const b = el(`<button class="bt item"><span class="ic">${TYPES[t].icon}</span>${TYPES[t].curto}<span class="ck"></span></button>`, itensEl);
  b.addEventListener('click', () => {
    takeOver();
    if (S.types.has(t)) S.types.delete(t);
    else S.types.add(t);
    refreshMission();
  });
  return [t, b];
});
const msgEl = pM.querySelector('#msg');
const btnGo = pM.querySelector('#btnGo');
btnGo.addEventListener('click', () => {
  takeOver();
  startMission({kind: S.kind, table: S.table, types: [...S.types]});
});

const pT = el(`<div id="pTele" class="card">
  <div class="ph"><i></i>Telemetria<span class="n">02</span></div>
  <div id="estado"></div>
  <div class="kv">
    <div><span class="sm">Velocidade</span><b id="tv"></b></div>
    <div><span class="sm">Bateria</span><b id="tb"></b></div>
    <div><span class="sm">Odômetro</span><b id="to"></b></div>
    <div><span class="sm">Bandeja</span><b id="tk"></b></div>
  </div>
  <hr><div class="sm">Juntas do braço</div>
  <div class="jt" id="joints"></div>
  <div class="kv" style="margin-top:9px">
    <div><span class="sm">Torque J2</span><b id="tq"></b></div>
    <div><span class="sm">Alcance</span><b id="tr"></b></div>
  </div>
  <hr><div class="sm">Pinça universal · vista frontal</div>
  <svg id="gsch" width="230" height="96"></svg>
  <div class="kv">
    <div><span class="sm">Abertura</span><b id="ga"></b></div>
    <div><span class="sm">Força</span><b id="gf"></b></div>
    <div style="grid-column:1/-1"><span class="sm">Modo de preensão</span><b id="gm" style="font-size:12px"></b></div>
  </div>
</div>`);
const $ = (id) => document.getElementById(id);
const JN = ['J1', 'J2', 'J3', 'J4', 'J5'];
const jointEls = JN.map((n) => {
  const box = $('joints');
  el(`<span class="sm" style="letter-spacing:.5px">${n}</span>`, box);
  const bar = el(`<div class="bar"><i></i></div>`, box);
  const v = el(`<b></b>`, box);
  return {bar: bar.firstChild, v};
});

const VIEWS = [['auto', 'Auto'], ['salao', 'Salão'], ['robo', 'Robô'], ['pinca', 'Pinça'], ['inspecao', 'Inspeção']];
const DISP = [['labels', 'Rótulos'], ['xray', 'Raio-X'], ['explode', 'Explodida'], ['alcance', 'Alcance'], ['trajeto', 'Trajeto']];
const pV = el(`<div id="pVista" class="card"><div class="ph"><i></i>Câmera e exibição<span class="n">03</span></div><div class="row" id="views"></div><div class="row" id="disps"></div></div>`);
const viewBtns = VIEWS.map(([k, n]) => {
  const b = el(`<button class="bt">${n}</button>`, pV.querySelector('#views'));
  b.addEventListener('click', () => {
    takeOver();
    setView(k);
  });
  return [k, b];
});
const dispBtns = DISP.map(([k, n]) => {
  const b = el(`<button class="bt">${n}</button>`, pV.querySelector('#disps'));
  b.addEventListener('click', () => {
    takeOver();
    toggleDisp(k);
  });
  return [k, b];
});

const pTime = el(`<div id="pTime" class="card">
  <button class="bt go" id="btnPlay">❚❚</button>
  <div id="tl"><div id="tlTop"><div id="tlLabel"></div><div class="sm" id="tlTime"></div></div><div id="chips"></div></div>
  <div id="spd"><div class="sm" style="display:flex;justify-content:space-between"><span>Vel.</span><span id="spdv">1.0×</span></div><input type="range" min="0.25" max="4" step="0.25" value="1" aria-label="Velocidade da simulação"></div>
</div>`);
const btnPlay = $('btnPlay');
btnPlay.addEventListener('click', () => {
  takeOver();
  if (!S.plan) return;
  S.playing = !S.playing;
});
pTime.querySelector('input').addEventListener('input', (e) => {
  takeOver();
  S.speed = +e.target.value;
  $('spdv').textContent = S.speed.toFixed(2).replace(/0$/, '') + '×';
});
const chipsEl = $('chips');
chipsEl.addEventListener('pointerdown', (e) => {
  takeOver();
  if (!S.plan) return;
  const r = chipsEl.getBoundingClientRect();
  S.tau = clamp((e.clientX - r.left) / r.width, 0, 0.999) * S.plan.dur;
});

const pP = el(`<div id="pPecas" class="card"><div class="ph"><i></i>Peças<span class="n">04</span></div><div id="plist"></div></div>`);
{
  const cats = [...new Set(PART_ORDER.map((id) => PARTS[id].cat))];
  const list = pP.querySelector('#plist');
  for (const c of cats) {
    el(`<div class="sm cat">${c}</div>`, list);
    for (const id of PART_ORDER.filter((i) => PARTS[i].cat === c)) {
      const b = el(`<button>${PARTS[id].name}</button>`, list);
      b.dataset.id = id;
      b.addEventListener('click', () => {
        takeOver();
        select(id, true);
      });
    }
  }
}
const pC = el(`<div id="pCard" class="card"></div>`);
const tabs = el(`<div id="tabs" class="card"></div>`);
const TABS = [['pMissao', 'Missão'], ['pTele', 'Dados'], ['pVista', 'Câmera'], ['pPecas', 'Peças']];
let tabOpen = '';
const tabBtns = TABS.map(([id, n]) => {
  const b = el(`<button class="bt">${n}</button>`, tabs);
  b.addEventListener('click', () => {
    takeOver();
    tabOpen = tabOpen === id ? '' : id;
    for (const [i] of TABS) $(i).classList.toggle('mob', i === tabOpen);
    tabBtns.forEach((x, j) => x.classList.toggle('on', TABS[j][0] === tabOpen));
  });
  return b;
});

function refreshMission() {
  mesaBtns.forEach((b, k) => {
    b.classList.toggle('on', k === S.table);
    const on = world.items.filter((it) => it.loc === 'table' && it.table === k);
    const edge = on.filter((it) => isOnEdge(it.x)).length;
    const far = on.length - edge;
    const col = !on.length ? 'var(--ok)' : edge ? 'var(--or)' : 'var(--warn)';
    b.querySelector('span').innerHTML = `<i class="dot" style="background:${col}"></i>${on.length ? `${edge} na borda${far ? `<br>${far} no centro` : ''}` : 'livre'}`;
  });
  kindBtns.forEach((b) => b.classList.toggle('on', b.dataset.k === S.kind));
  $('pedidoBox').style.display = S.kind === 'entregar' ? '' : 'none';
  for (const [t, b] of itemBtns) b.classList.toggle('on', S.types.has(t));
  btnGo.disabled = !!S.plan;
  btnGo.textContent = S.plan ? 'Missão em andamento…' : S.kind === 'entregar' ? `▶ Entregar na mesa ${S.table + 1}` : `▶ Recolher da mesa ${S.table + 1}`;
  msgEl.textContent = S.msg;
  msgEl.classList.toggle('err', S.msgErr);
}
function setView(k) {
  S.view = k;
  Object.assign(off, {az: 0, el: 0, k: 1, px: 0, py: 0});
  if (k !== 'inspecao') focusPart = null;
  viewBtns.forEach(([v, b]) => b.classList.toggle('on', v === k));
}
function toggleDisp(k) {
  const d = S.disp[k];
  d.on = d.on ? 0 : 1;
  d.t = S.T;
  if (k === 'explode' && d.on) {
    S.playing = false;
    if (S.view !== 'inspecao') setView('inspecao');
  }
  dispBtns.forEach(([v, b]) => b.classList.toggle('on', !!S.disp[v].on));
}
dispBtns.forEach(([v, b]) => b.classList.toggle('on', !!S.disp[v].on));

// ================================================================== missões
function startMission(m) {
  if (S.plan) return;
  const plan = compile(world, m);
  if (!plan.ok) {
    S.msg = plan.msg;
    S.msgErr = true;
    refreshMission();
    return false;
  }
  // utensílios novos (entrega) já existem no mundo como 'kitchen' até o evento de carga
  if (m.kind === 'entregar') {
    for (const it of plan.pick) world.items.push({...it, loc: 'kitchen'});
    world.serial += plan.pick.length;
  }
  // odômetro: distância acumulada em passos de 0,05 s
  const n = Math.ceil(plan.dur / 0.05) + 1;
  plan.odo = new Float32Array(n);
  let p0 = plan.base.at(0);
  for (let i = 1; i < n; i++) {
    const p = plan.base.at(i * 0.05);
    plan.odo[i] = plan.odo[i - 1] + Math.hypot(p[0] - p0[0], p[1] - p0[1]);
    p0 = p;
  }
  plan.mission = m;
  S.plan = plan;
  S.tau = 0;
  S.playing = true;
  S.msg = plan.warn || (m.kind === 'entregar' ? `Levando ${plan.pick.length} ${plan.pick.length > 1 ? 'itens' : 'item'} à mesa ${m.table + 1}.` : `Recolhendo ${plan.pick.length} ${plan.pick.length > 1 ? 'itens' : 'item'} da borda da mesa ${m.table + 1}.`);
  S.msgErr = !!plan.warn;
  buildChips();
  refreshMission();
  return true;
}
function finishMission() {
  const plan = S.plan;
  const fin = itemStates(plan, plan.dur + 1);
  for (const [id, e] of fin) {
    const it = world.items.find((x) => x.id === id);
    if (!it) continue;
    if (e.loc === 'gone') {
      world.items = world.items.filter((x) => x !== it);
      const m = meshes.get(id);
      if (m) st.scene.remove(m);
      meshes.delete(id);
    } else if (e.loc === 'table') Object.assign(it, {loc: 'table', table: e.table, x: e.x, z: e.z});
  }
  S.odo += plan.odo[plan.odo.length - 1];
  S.batt = Math.max(5, S.batt - plan.odo[plan.odo.length - 1] * 0.25 - plan.dur * 0.006);
  S.msg = plan.kind === 'entregar' ? `Mesa ${plan.table + 1} servida. De volta à doca.` : `Louça da mesa ${plan.table + 1} entregue na cozinha.`;
  S.msgErr = false;
  S.plan = null;
  buildChips();
  refreshMission();
}
function buildChips() {
  chipsEl.innerHTML = '';
  if (!S.plan) return;
  for (const s of S.plan.steps) {
    const d = el(`<div><i></i></div>`, chipsEl);
    d.style.flex = `${s.t1 - s.t0} 1 0`;
    d.title = s.label;
  }
}
// o cliente aproxima um utensílio da borda
function moveToEdge(id) {
  const it = world.items.find((x) => x.id === id);
  if (!it || it.loc !== 'table' || isOnEdge(it.x)) return;
  if (S.plan && S.plan.table === it.table) {
    S.msg = 'Espere o robô terminar nesta mesa.';
    S.msgErr = true;
    refreshMission();
    return;
  }
  const [x, z] = EDGE_SPOT[it.type];
  if (world.items.some((o) => o !== it && o.loc === 'table' && o.table === it.table && Math.hypot(o.x - x, o.z - z) < 0.05)) {
    S.msg = 'A posição na borda está ocupada.';
    S.msgErr = true;
    refreshMission();
    return;
  }
  slides.set(id, {fx: it.x, fz: it.z, t0: S.T});
  Object.assign(it, {x, z});
  S.msg = `Cliente aproximou ${TYPES[it.type].curto.toLowerCase()} da borda da mesa ${it.table + 1}: agora está ao alcance.`;
  S.msgErr = false;
  refreshMission();
}

// ================================================================== câmera (órbita própria, como no kit)
const off = {az: 0, el: 0, k: 1, px: 0, py: 0};
const cam = {tx: -0.6, ty: 0.6, tz: -0.4, az: 0.1, el: 0.45, d: 7.5};
let focusPart = null;
const tmpV = new V3();
const gripTip = () => R.grip.localToWorld(tmpV.set(0, -DIM.reach + 0.06, 0)).clone();
function viewTarget(mode, active) {
  const rp = R.root.position;
  const portrait = innerWidth / innerHeight < 0.9;
  const kd = portrait ? 1.55 : 1;
  if (mode === 'auto') {
    if (!S.plan) return viewTarget(S.T % 40 < 20 ? 'salao' : 'robo');
    return viewTarget(active === 'arm' ? 'pinca2' : 'robo');
  }
  if (mode === 'salao') return {tx: -0.9, ty: 0.55, tz: -0.5, az: 0.12, el: 0.48, d: 8.0 * kd};
  if (mode === 'robo') return {tx: rp.x + (portrait ? 0.05 : 0.3), ty: 0.9, tz: rp.z - 0.35, az: 0.55, el: 0.3, d: 3.4 * kd};
  if (mode === 'pinca') {
    const g = gripTip();
    return {tx: g.x, ty: g.y, tz: g.z, az: 0.75, el: 0.42, d: 1.05 * kd};
  }
  if (mode === 'pinca2') {
    const g = gripTip();
    return {tx: (g.x + rp.x) / 2 + 0.1, ty: Math.max(0.9, g.y), tz: (g.z + rp.z) / 2 - 0.25, az: 0.62, el: 0.36, d: 2.1 * kd};
  }
  // inspeção: em volta do robô, ou da peça escolhida
  if (focusPart) {
    const c = partCenter(focusPart);
    return {tx: c.x, ty: c.y, tz: c.z, az: 0.55 + 0.5 * Math.sin(S.T * 0.12), el: 0.3, d: (focusPart.startsWith('j') || ['apoios', 'finray', 'sensor', 'emergencia', 'camera', 'celulas', 'lidar'].includes(focusPart) ? 0.85 : 1.4) * kd};
  }
  return {tx: rp.x + 0.15, ty: 0.95 + 0.2 * eased('explode', 0.9), tz: rp.z, az: 0.6 + 0.6 * Math.sin(S.T * 0.15), el: 0.24, d: (2.9 + 0.8 * eased('explode', 0.9)) * kd};
}
const partBox = new THREE.Box3();
function partCenter(id) {
  partBox.makeEmpty();
  for (const g of PARTS[id].groups) partBox.expandByObject(g);
  return partBox.getCenter(new V3());
}

// arrastar = girar; botão direito/2 dedos = mover; roda/pinça = zoom; toque curto = selecionar
const ptrs = new Map();
let dragDist = 0;
let pinch = 0;
canvas.addEventListener('contextmenu', (e) => e.preventDefault());
canvas.addEventListener('pointerdown', (e) => {
  canvas.setPointerCapture(e.pointerId);
  ptrs.set(e.pointerId, {x: e.clientX, y: e.clientY, b: e.button});
  dragDist = 0;
  if (ptrs.size === 2) {
    const [a, b] = [...ptrs.values()];
    pinch = Math.hypot(a.x - b.x, a.y - b.y);
  }
  canvas.classList.add('drag');
});
canvas.addEventListener('pointermove', (e) => {
  const p = ptrs.get(e.pointerId);
  if (!p) return;
  const dx = e.clientX - p.x, dy = e.clientY - p.y;
  dragDist += Math.abs(dx) + Math.abs(dy);
  p.x = e.clientX;
  p.y = e.clientY;
  if (ptrs.size === 1) {
    if (p.b === 2 || e.shiftKey) {
      off.px -= dx * 0.0016 * cam.d;
      off.py += dy * 0.0016 * cam.d;
    } else {
      off.az -= dx * 0.006;
      off.el = clamp(off.el + dy * 0.004, -0.35, 0.9);
    }
  } else if (ptrs.size === 2) {
    const [a, b] = [...ptrs.values()];
    const dd = Math.hypot(a.x - b.x, a.y - b.y);
    if (pinch) off.k = clamp(off.k * (pinch / dd), 0.25, 3);
    pinch = dd;
    off.px -= dx * 0.0008 * cam.d;
    off.py += dy * 0.0008 * cam.d;
  }
  if (dragDist > 6) takeOver();
});
const endPtr = (e) => {
  const p = ptrs.get(e.pointerId);
  ptrs.delete(e.pointerId);
  if (ptrs.size < 2) pinch = 0;
  if (!ptrs.size) canvas.classList.remove('drag');
  if (p && dragDist < 6 && e.type === 'pointerup') {
    takeOver();
    pick(e.clientX, e.clientY);
  }
};
canvas.addEventListener('pointerup', endPtr);
canvas.addEventListener('pointercancel', endPtr);
canvas.addEventListener('wheel', (e) => {
  e.preventDefault();
  takeOver();
  off.k = clamp(off.k * Math.exp(e.deltaY * 0.0012), 0.25, 3);
}, {passive: false});

// ================================================================== seleção e inspeção
const ray = new THREE.Raycaster();
const ndc = new THREE.Vector2();
function pick(cx, cy) {
  const r = canvas.getBoundingClientRect();
  ndc.set(((cx - r.left) / r.width) * 2 - 1, -((cy - r.top) / r.height) * 2 + 1);
  ray.setFromCamera(ndc, st.camera);
  const objs = [R.root, ...meshes.values()];
  const hits = ray.intersectObjects(objs, true).filter((h) => h.object.visible && (h.object.material.opacity ?? 1) > 0.3);
  const h = hits[0];
  if (!h) {
    select(null);
    return;
  }
  if (h.object.userData.item) return showItem(h.object.userData.item);
  let o = h.object;
  while (o && !o.userData.part) o = o.parent;
  if (o) select(o.userData.part, false);
}
function select(id, focus) {
  S.sel = id;
  if (!id) S.isolate = false;
  st.outline.selectedObjects = id ? PARTS[id].groups : [];
  for (const b of pP.querySelectorAll('#plist button')) b.classList.toggle('on', b.dataset.id === id);
  if (focus && id) {
    focusPart = id;
    if (S.view !== 'inspecao') {
      S.view = 'inspecao';
      viewBtns.forEach(([v, b]) => b.classList.toggle('on', v === 'inspecao'));
    }
    Object.assign(off, {az: 0, el: 0, k: 1, px: 0, py: 0});
  }
  if (!id) {
    pC.classList.remove('show');
    return;
  }
  const p = PARTS[id];
  pC.innerHTML = `<span class="tag">${p.cat}</span><h2>${p.name}</h2><p>${p.desc}</p><table>${p.specs.map(([k, v]) => `<tr><td>${k}</td><td>${v}</td></tr>`).join('')}</table>
    <div class="row"><button class="bt" data-a="focus">Focar</button><button class="bt ${S.isolate ? 'on' : ''}" data-a="iso">Isolar</button><button class="bt" data-a="x">Fechar</button></div>`;
  pC.classList.add('show');
  pC.querySelector('[data-a=focus]').onclick = () => select(id, true);
  pC.querySelector('[data-a=iso]').onclick = () => {
    S.isolate = !S.isolate;
    select(id, S.isolate);
  };
  pC.querySelector('[data-a=x]').onclick = () => select(null);
}
function showItem(id) {
  const it = world.items.find((x) => x.id === id);
  if (!it) return;
  const ty = TYPES[it.type];
  select(null);
  const far = it.loc === 'table' && !isOnEdge(it.x);
  const where = it.loc === 'table' ? `Mesa ${it.table + 1} · ${far ? 'no centro (fora de alcance)' : 'na borda (ao alcance)'}` : it.loc === 'kitchen' ? 'Cozinha' : 'No robô';
  const F = ty.mode === 'lateral' ? (ty.mass * 9.81 * 2) / (2 * 0.8) : 8;
  pC.innerHTML = `<span class="tag" style="background:var(--cy)">utensílio</span><h2>${ty.icon} ${ty.nome}</h2><p>${ty.nota}</p><table>
    <tr><td>Onde</td><td>${where}</td></tr><tr><td>Diâmetro</td><td>${Math.round(ty.r * 2000)} mm</td></tr><tr><td>Altura</td><td>${Math.round(ty.h * 1000)} mm</td></tr>
    <tr><td>Massa</td><td>${Math.round(ty.mass * 1000)} g</td></tr><tr><td>Preensão</td><td>${ty.mode === 'lateral' ? 'lateral (fin-ray)' : 'apoio sob a borda'} · ${F.toFixed(0)} N</td></tr></table>
    <div class="row">${far ? '<button class="bt go" data-a="edge">Cliente: aproximar da borda</button>' : ''}<button class="bt" data-a="x">Fechar</button></div>`;
  pC.classList.add('show');
  const e = pC.querySelector('[data-a=edge]');
  if (e) e.onclick = () => {
    moveToEdge(id);
    pC.classList.remove('show');
  };
  pC.querySelector('[data-a=x]').onclick = () => pC.classList.remove('show');
}

// opacidade de cada peça: raio-X (carenagens) e isolamento
const opNow = new Map();
function applyLook(xr) {
  for (const id of PART_ORDER) {
    const p = PARTS[id];
    let op = 1;
    if (p.shell) op = Math.min(op, 1 - 0.86 * xr);
    if (S.isolate && S.sel && id !== S.sel) op = Math.min(op, 0.07);
    op = Math.round(op * 50) / 50;
    if (opNow.get(id) === op) continue;
    opNow.set(id, op);
    for (const m of p.mats) {
      const t = op < 0.999;
      if (m.transparent !== t && !m.userData.alwaysT) m.needsUpdate = true;
      m.transparent = t || !!m.userData.alwaysT;
      m.opacity = op;
      m.depthWrite = !t;
    }
    for (const m of p.meshes) m.castShadow = op > 0.5;
  }
}

// ================================================================== rótulos
const LABELS = ['cabeca', 'camera', 'j2', 'elo2', 'pinca', 'apoios', 'finray', 'bandeja', 'celulas', 'lidar', 'rodas', 'emergencia', 'bateria', 'computador'];
const labEls = new Map();
const svg = labelsBox.querySelector('svg');
for (const id of LABELS) {
  const d = el(`<div class="lab"><b><i></i>${PARTS[id].name.split(' · ')[0].split(' (')[0]}</b></div>`, labelsBox);
  d.addEventListener('click', () => {
    takeOver();
    select(id, true);
  });
  labEls.set(id, d);
}
function drawLabels(k) {
  const mob = innerWidth < 760;
  const xr = eased('xray');
  const want = LABELS.filter((id) => !(['bateria', 'computador'].includes(id) && xr < 0.5) && !(['celulas'].includes(id) && xr < 0.5 && eased('explode') < 0.5) && !(mob && ['camera', 'celulas', 'emergencia', 'elo2', 'rodas'].includes(id)));
  const pts = [];
  for (const id of LABELS) {
    const d = labEls.get(id);
    if (k < 0.02 || !want.includes(id)) {
      d.style.display = 'none';
      continue;
    }
    const c = partCenter(id);
    const s = st.project(c);
    if (!s) {
      d.style.display = 'none';
      continue;
    }
    pts.push({id, d, ax: s[0], ay: s[1]});
  }
  // duas colunas (esquerda/direita da peça), empilhadas sem sobreposição
  const W0 = st.size.w;
  for (const side of [-1, 1]) {
    const col = pts.filter((p) => (side < 0 ? p.ax < W0 / 2 : p.ax >= W0 / 2)).sort((a, b) => a.ay - b.ay);
    let y = -1e9;
    for (const p of col) {
      p.ly = Math.max(p.ay - 24, y + 24);
      y = p.ly;
      p.lx = p.ax + side * (mob ? 30 : 46);
      p.side = side;
    }
  }
  let h = '';
  for (const p of pts) {
    p.d.style.display = 'block';
    p.d.style.opacity = String(k);
    const w = p.d.offsetWidth;
    const x = p.side < 0 ? p.lx - w : p.lx;
    p.d.style.left = `${x}px`;
    p.d.style.top = `${p.ly - 10}px`;
    const ex = p.side < 0 ? p.lx : p.lx;
    h += `<path d="M${p.ax} ${p.ay}L${ex} ${p.ly}" stroke="#e2792b" stroke-width="1" fill="none" opacity="${k * 0.9}"/><circle cx="${p.ax}" cy="${p.ay}" r="2.6" fill="#e2792b" opacity="${k}"/>`;
  }
  svg.innerHTML = h;
}

// ================================================================== tour automático
const TOUR = [
  {do: 'mission', m: {kind: 'entregar', table: 0, types: ['garrafa', 'copo', 'cafe', 'prato']}, labels: true},
  {do: 'mission', m: {kind: 'recolher', table: 1}},
  {do: 'edge', id: 'b2', say: 'Cliente aproxima a sobremesa da borda'},
  {do: 'mission', m: {kind: 'recolher', table: 2}, xray: true},
  {do: 'inspect', dur: 9},
  {do: 'reset'},
];
const TOUR_IDLE = 40;
const AP = {on: true, i: 0, t0: 0};
let lastInput = -99;
function takeOver() {
  lastInput = S.T;
  if (!AP.on) return;
  AP.on = false;
}
tourChip.addEventListener('pointerdown', (e) => {
  e.stopPropagation();
  lastInput = S.T;
  if (AP.on) takeOver();
  else startTour();
});
addEventListener('keydown', (e) => {
  if (e.altKey || e.ctrlKey || e.metaKey || e.target.tagName === 'INPUT') return;
  const k = e.key.toLowerCase();
  if (k === ' ') btnPlay.click();
  else if (k === 'x') toggleDisp('xray');
  else if (k === 'e') toggleDisp('explode');
  else if (k === 'l') toggleDisp('labels');
  else if (k === 'escape') select(null);
  else if (/^[1-3]$/.test(k)) mesaBtns[+k - 1].click();
  else return;
  takeOver();
  e.preventDefault();
});
function startTour() {
  AP.on = true;
  AP.i = -1;
  AP.t0 = S.T;
  S.speed = 1.25;
  setView('auto');
  select(null);
  if (S.disp.explode.on) toggleDisp('explode');
  nextTour();
}
function nextTour() {
  AP.i = (AP.i + 1) % TOUR.length;
  AP.t0 = S.T;
  const s = TOUR[AP.i];
  for (const k of ['labels', 'xray']) if (!!S.disp[k].on !== !!(s[k] && !(k === 'labels' && innerWidth < 760))) toggleDisp(k);
  if (s.do === 'mission') {
    S.table = s.m.table;
    S.kind = s.m.kind;
    if (s.m.types) S.types = new Set(s.m.types);
    if (!startMission(s.m)) return nextTour();
  } else if (s.do === 'edge') {
    moveToEdge(s.id);
  } else if (s.do === 'inspect') {
    setView('inspecao');
    toggleDisp('explode');
    select('pinca');
  } else if (s.do === 'reset') {
    if (S.disp.explode.on) toggleDisp('explode');
    select(null);
    setView('auto');
    resetWorld();
    refreshMission();
  }
}
function tourTick() {
  if (!AP.on) {
    if (!S.plan && S.T - lastInput > TOUR_IDLE) startTour();
    return;
  }
  const s = TOUR[AP.i];
  const el2 = S.T - AP.t0;
  if (s.do === 'mission' && !S.plan && el2 > 1.5) nextTour();
  else if (s.do === 'edge' && el2 > 2.5) nextTour();
  else if (s.do === 'inspect' && el2 > s.dur) nextTour();
  else if (s.do === 'reset' && el2 > 0.5) nextTour();
}

// ================================================================== qualidade adaptativa (como os exemplos do kit)
const TIERS = [
  {samples: 4, ao: true, shadow: 4096, pr: 2},
  {samples: 4, ao: false, shadow: 2048, pr: 1.5},
  {samples: 2, ao: false, shadow: 1024, pr: 1},
];
const light = matchMedia('(pointer: coarse)').matches || Math.min(innerWidth, innerHeight) < 700;
const qParam = new URLSearchParams(location.search).get('q');
let tier = qParam !== null ? clamp(+qParam, 0, 2) : light ? 2 : 0;
const fit = () => {
  st.resize(innerWidth, innerHeight, clamp(devicePixelRatio || 1, 0.75, TIERS[tier].pr));
  st.camera.fov = innerWidth / innerHeight < 0.9 ? 46 : 34;
  st.camera.updateProjectionMatrix();
};
const applyTier = () => {
  const {pr, ...q} = TIERS[tier];
  st.setQuality(q);
  fit();
};
applyTier();
addEventListener('resize', fit);
const perf = {n: 0, sum: 0, slow: 0, age: 0};

// ================================================================== laço
const restJ = ik(new V3(REST.x, REST.y, REST.z), 0);
let blinkT = -1, blinkNext = 2.5;
let last = performance.now();
const qTmp = new THREE.Quaternion();
const vTmp = new V3();
let prevBase = null;
let snapNext = false;
let jLast = restJ;

function frame(now) {
  const dt = Math.min(0.1, Math.max(0, (now - last) / 1000));
  last = now;
  S.T += dt;
  if (tier < TIERS.length - 1) {
    perf.age += dt;
    if (perf.age > 0.8) {
      perf.sum += dt;
      perf.n++;
      if (perf.sum >= 0.5 && perf.n >= 6) {
        perf.slow = perf.sum / perf.n > 0.024 ? perf.slow + 1 : 0;
        perf.sum = 0;
        perf.n = 0;
        if (perf.slow >= 2) {
          tier++;
          applyTier();
          Object.assign(perf, {age: 0, slow: 0});
        }
      }
    }
  }
  tourTick();

  // ---------------- pose do robô
  let ev = null;
  if (S.plan) {
    if (S.playing) S.tau += dt * S.speed;
    if (S.tau >= S.plan.dur) {
      finishMission();
    } else ev = evalPlan(S.plan, S.tau);
  }
  const explodeK = eased('explode', 0.9);
  R.setExplode(explodeK);
  let j;
  let base;
  if (ev) {
    base = ev.base;
    j = ik(new V3(ev.wrist.x, ev.wrist.y, ev.wrist.z), 0);
    R.apply(j, ev.gap, ev.lip, explodeK);
  } else {
    base = {x: DOCK_X, z: 0, h: HEADING};
    j = restJ;
    R.apply(j, 0.06, 0, explodeK);
    S.batt = Math.min(100, S.batt + dt * 0.05);
  }
  R.root.position.set(base.x, 0, base.z);
  R.root.rotation.y = base.h;
  R.root.updateMatrixWorld(true);
  const vel = prevBase && dt > 0 ? Math.hypot(base.x - prevBase.x, base.z - prevBase.z) / (dt * (S.playing ? 1 : 1)) : 0;
  prevBase = {...base};

  // ---------------- utensílios
  const evs = S.plan ? itemStates(S.plan, S.tau) : new Map();
  let held = null;
  let trayKg = 0;
  for (const it of world.items) {
    const e = evs.get(it.id);
    const loc = e ? e.loc : it.loc;
    const m = meshOf(it);
    m.visible = loc !== 'kitchen' && loc !== 'gone';
    if (!m.visible) continue;
    const ty = TYPES[it.type];
    if (loc === 'tray') {
      const [sx, sz] = TRAY_SLOT[it.type];
      R.trayG.localToWorld(m.position.set(sx, DIM.topTray, sz));
      m.quaternion.setFromAxisAngle(vTmp.set(0, 1, 0), base.h);
      trayKg += ty.mass;
    } else if (loc === 'held') {
      R.grip.localToWorld(m.position.set(0, -DIM.reach - ty.gripH, 0));
      R.grip.getWorldQuaternion(qTmp);
      m.quaternion.copy(qTmp);
      held = it;
    } else {
      // na mesa: posição do evento final, ou a do mundo (com deslize do cliente)
      let x = e && e.x !== undefined ? e.x : it.x;
      let z = e && e.z !== undefined ? e.z : it.z;
      const sl = slides.get(it.id);
      if (sl && !e) {
        const u = ss(sl.t0, sl.t0 + 0.9, S.T);
        x = sl.fx + (x - sl.fx) * u;
        z = sl.fz + (z - sl.fz) * u;
        if (u >= 1) slides.delete(it.id);
      }
      m.position.copy(parkToWorld(e && e.table !== undefined ? e.table : it.table, x, TABLE_TOP, z));
      m.quaternion.setFromAxisAngle(vTmp.set(0, 1, 0), HEADING);
    }
  }

  // ---------------- exibição
  const xr = eased('xray');
  applyLook(xr);
  const al = eased('alcance');
  W.bands.forEach((b, k) => {
    const busy = S.plan && S.plan.table === k ? 0.12 : 0;
    b.material.opacity = (0.1 + busy + 0.04 * Math.sin(S.T * 3)) * al;
  });
  const tr = eased('trajeto');
  W.pathLine.material.opacity = 0.75 * tr;
  W.marks.forEach((m, k) => (m.material.opacity = (S.plan && S.plan.table === k ? 0.9 : 0.4) * tr));

  // rosto
  if (S.T > blinkNext) {
    blinkT = S.T;
    blinkNext = S.T + 2.5 + ((S.T * 7.3) % 2.5);
  }
  const blink = blinkT > 0 ? Math.round(Math.sin(clamp((S.T - blinkT) / 0.16, 0, 1) * PI) * 4) / 4 : 0;
  const mood = ev ? ev.mood : 'neutro';
  drawFace(mood, mood === 'feliz' ? 0 : blink);

  // ---------------- câmera
  const stepKind = ev ? S.plan.steps[ev.step].kind : '';
  const active = stepKind.startsWith('arm') ? 'arm' : 'drive';
  const tg = viewTarget(S.view, active);
  tg.az += off.az;
  tg.el = clamp(tg.el + off.el, -0.1, 1.45);
  tg.d *= off.k;
  // deslocamento (pan) no plano da câmera
  const right = new V3(Math.cos(tg.az), 0, -Math.sin(tg.az));
  tg.tx += right.x * off.px;
  tg.tz += right.z * off.px;
  tg.ty += off.py;
  const kk = snapNext ? 1 : 1 - Math.exp(-dt / (AP.on ? 0.55 : 0.28));
  snapNext = false;
  cam.az += wrapA(tg.az - cam.az) * kk;
  for (const key of ['tx', 'ty', 'tz', 'el', 'd']) cam[key] += (tg[key] - cam[key]) * kk;
  st.frame(cam);

  // ---------------- painéis
  drawLabels(eased('labels', 0.5));
  updateTele(ev, j, vel, held, trayKg);
  updateTimeline(ev);
  if (ev && ev.say) {
    const s = st.project(R.root.localToWorld(vTmp.set(0, DIM.headY + 0.36, -0.1)));
    if (s) {
      sayEl.textContent = ev.say;
      sayEl.style.left = `${s[0]}px`;
      sayEl.style.top = `${s[1]}px`;
      sayEl.style.opacity = '1';
    }
  } else sayEl.style.opacity = '0';
  if (tourChip.dataset.on !== String(AP.on)) {
    tourChip.dataset.on = String(AP.on);
    tourChip.classList.toggle('on', AP.on);
    tourChip.innerHTML = AP.on ? '<i></i>TOUR AUTOMÁTICO · TOQUE PARA ASSUMIR' : '▶ RETOMAR TOUR';
  }
  if (!window.SIM_SHOWN) {
    window.SIM_SHOWN = true;
    dispatchEvent(new Event('simframe'));
  }
  requestAnimationFrame(frame);
}

const deg = (r) => r / D2R;
function updateTele(ev, j, vel, held, trayKg) {
  const plan = S.plan;
  $('estado').textContent = plan ? plan.steps[ev.step].label : S.batt < 99.5 ? `Na doca · recarregando ${S.batt.toFixed(0)}%` : 'Na doca · pronto para servir';
  $('tv').innerHTML = `${(S.playing && plan ? vel / Math.max(S.speed, 1e-3) : 0).toFixed(2)}<small>m/s</small>`;
  const odo = S.odo + (plan ? plan.odo[Math.min(plan.odo.length - 1, Math.floor(S.tau / 0.05))] : 0);
  $('to').innerHTML = `${odo.toFixed(1)}<small>m</small>`;
  $('tb').innerHTML = `${(S.batt - (plan ? (plan.odo[Math.min(plan.odo.length - 1, Math.floor(S.tau / 0.05))] * 0.25 + S.tau * 0.006) : 0)).toFixed(1)}<small>%</small>`;
  $('tk').innerHTML = `${trayKg.toFixed(2)}<small>kg</small>`;
  const J = [deg(j.th0), deg(j.a1), deg(j.a2), -deg(j.a1 + j.a2), deg(wrapA(j.psi - j.th0))];
  const RANGE = [[-170, 170], [-30, 160], [-165, 0], [-180, 180], [-180, 180]];
  J.forEach((v, i) => {
    const [a, b] = RANGE[i];
    const u = (clamp(v, a, b) - a) / (b - a);
    const z = (0 - a) / (b - a);
    jointEls[i].bar.style.left = `${Math.min(u, z) * 100}%`;
    jointEls[i].bar.style.width = `${Math.abs(u - z) * 100}%`;
    jointEls[i].v.textContent = `${v.toFixed(0)}°`;
  });
  // torque no ombro: g·Σ m·(distância horizontal ao eixo)
  const re = DIM.L1 * Math.cos(j.a1);
  const rw = re + DIM.L2 * Math.cos(j.a1 + j.a2);
  const mp = held ? TYPES[held.type].mass : 0;
  const tq = 9.81 * (1.4 * re / 2 + 1.1 * (re + rw) / 2 + (0.9 + mp) * rw);
  $('tq').innerHTML = `${Math.abs(tq).toFixed(1)}<small>N·m</small>`;
  $('tr').innerHTML = `${(j.reach).toFixed(2)}<small>/ ${(DIM.L1 + DIM.L2).toFixed(2)} m</small>`;
  const gap = R.pose.gap;
  $('ga').innerHTML = `${(gap * 1000).toFixed(0)}<small>mm</small>`;
  const ty = held ? TYPES[held.type] : null;
  const F = ty ? (ty.mode === 'lateral' ? (ty.mass * 9.81 * 2) / (2 * 0.8) : 8) : 0;
  $('gf').innerHTML = `${F.toFixed(1)}<small>N</small>`;
  $('gm').textContent = ty ? `${ty.icon} ${ty.curto} · ${ty.mode === 'lateral' ? 'lateral (fin-ray)' : 'abas sob a borda'} · ${Math.round(ty.mass * 1000)} g` : R.pose.lip > 0.05 ? 'abas se movendo' : 'livre';
  // esquema frontal da pinça (escala 300 px/m)
  const k = 300, cx = 115;
  const gx = (gap / 2) * k;
  const lipA = (1 - R.pose.lip) * 90;
  let h = `<rect x="${cx - 0.185 * k}" y="6" width="${0.37 * k}" height="12" rx="3" fill="#868c94"/><rect x="${cx - 10}" y="0" width="20" height="7" fill="#212428"/>`;
  for (const s of [-1, 1]) {
    const x = cx + s * gx;
    h += `<rect x="${s < 0 ? x - 5 : x}" y="18" width="5" height="${0.15 * k * 0.5}" fill="#e2792b"/><rect x="${s < 0 ? x - 9 : x + 5}" y="18" width="4" height="${0.15 * k * 0.5}" fill="#4b5058"/>`;
    const ty0 = 18 + 0.15 * k * 0.5;
    const L = DIM.lipLen * k * 0.8;
    const ang = (lipA * PI) / 180;
    h += `<line x1="${x}" y1="${ty0}" x2="${x - s * L * Math.cos(ang)}" y2="${ty0 - L * Math.sin(ang)}" stroke="#23262b" stroke-width="3" stroke-linecap="round"/>`;
  }
  if (ty) {
    const w = ty.r * 2 * k;
    const y1 = 18 + 0.15 * k * 0.5;
    if (ty.mode === 'apoio') h += `<path d="M${cx - w / 2} ${y1 - 7}Q${cx} ${y1 + 3} ${cx + w / 2} ${y1 - 7}" stroke="#23262b" stroke-width="2" fill="#fbfaf6"/>`;
    else {
      const hh = Math.min(ty.h * k * 0.5, 64);
      h += `<rect x="${cx - w / 2}" y="${y1 + ty.gripH * k * 0.5 - hh}" width="${w}" height="${hh}" rx="3" fill="${held.type === 'garrafa' ? '#2f5d3a' : '#cfe8ee'}" stroke="#23262b" stroke-width="1"/>`;
    }
  }
  h += `<line x1="0" y1="92" x2="230" y2="92" stroke="#e7dfd1"/><text x="2" y="90" font-size="8" fill="#8b8478" font-family="JetBrains Mono">0</text><text x="198" y="90" font-size="8" fill="#8b8478" font-family="JetBrains Mono">300mm</text>`;
  $('gsch').innerHTML = h;
}
function updateTimeline(ev) {
  const plan = S.plan;
  btnPlay.textContent = plan && S.playing ? '❚❚' : '▶';
  btnPlay.disabled = !plan;
  if (!plan) {
    $('tlLabel').textContent = 'Robô na doca · escolha a mesa e a ação';
    $('tlTime').textContent = '';
    return;
  }
  $('tlLabel').textContent = `${ev.step + 1}/${plan.steps.length} · ${plan.steps[ev.step].label}`;
  $('tlTime').textContent = `${S.tau.toFixed(1)} / ${plan.dur.toFixed(1)} s`;
  [...chipsEl.children].forEach((c, i) => {
    const s = plan.steps[i];
    c.firstChild.style.width = `${clamp((S.tau - s.t0) / (s.t1 - s.t0), 0, 1) * 100}%`;
    c.classList.toggle('cur', i === ev.step);
  });
}

// ================================================================== partida
refreshMission();
setView('auto');
for (const it of world.items) meshOf(it);
// todos os shaders compilam de uma vez antes do primeiro quadro (kit/warm.js)
R.apply(restJ, 0.06, 0, 0);
warmComposer(st.renderer, st.composer, st.scene, st.camera).then(() => {
  startTour();
  requestAnimationFrame(frame);
});
window.LIVE = {snap: () => (snapNext = true), S, R, st, startTour, takeOver, startMission, world: () => world, select, toggleDisp, setView};
