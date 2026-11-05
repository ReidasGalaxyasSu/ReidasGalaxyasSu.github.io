// O planejador de missões. Uma missão (entregar ou recolher numa mesa) vira trilhas de quadros-chave: base do
// robô (x, z, rumo), punho em coordenadas polares em torno do ombro (ângulo, raio, altura), abertura da pinça,
// abas de apoio, e eventos de cada utensílio. Tudo que aparece na tela — pose, telemetria, etapa — é lido destas
// trilhas no tempo τ da missão, então pausar, acelerar ou voltar não desalinha nada.
import {DIM} from './robot.js';
import {BUS_ORDER, DELIVER_ORDER, DOCK_X, EDGE_SPOT, HEADING, isOnEdge, TABLE_X, TRAY_SLOT, TYPES} from './world.js';

const PI = Math.PI;
const S = DIM.shoulder;
export const H_T = 1.47;             // altura de trânsito do punho (o item pendurado passa acima da bandeja)
export const REST = {x: 0.2, y: 1.45, z: 0.24};   // pinça estacionada sobre o canto livre da bandeja
const V_DRIVE = 0.7;                 // m/s de pico
const W_TURN = 1.6;                  // rad/s de pico
const V_ARM = 0.5;                   // m/s de pico do punho

const ease = (k) => (k < 0.5 ? 4 * k * k * k : 1 - Math.pow(-2 * k + 2, 3) / 2);
const clamp01 = (x) => Math.min(1, Math.max(0, x));
// cubic ease: pico de velocidade = 1,5 × média → duração = 1,5·d/vmax
const dur = (d, v, min) => Math.max(min, (1.5 * d) / v);

export const toPolar = ({x, y, z}) => ({phi: Math.atan2(x - S.x, z - S.z), rho: Math.hypot(x - S.x, z - S.z), y});
export const fromPolar = ({phi, rho, y}) => ({x: S.x + rho * Math.sin(phi), y, z: S.z + rho * Math.cos(phi)});
const wrap = (a) => a - 2 * PI * Math.round(a / (2 * PI));

/** trilha de quadros-chave: valores numéricos ou vetores, suavizados entre chaves, mantidos fora delas */
class Track {
  constructor(v0) {
    this.k = [[0, v0]];
  }
  get last() {
    return this.k[this.k.length - 1][1];
  }
  hold(t) {
    this.k.push([t, this.last]);
  }
  to(t0, t1, v) {
    if (t0 > this.k[this.k.length - 1][0] + 1e-9) this.hold(t0);
    this.k.push([t1, v]);
  }
  at(t) {
    const k = this.k;
    if (t <= k[0][0]) return k[0][1];
    for (let i = 1; i < k.length; i++) {
      if (t <= k[i][0]) {
        const [t0, a] = k[i - 1];
        const [t1, b] = k[i];
        const u = t1 > t0 ? ease((t - t0) / (t1 - t0)) : 1;
        return Array.isArray(a) ? a.map((v, j) => v + (b[j] - v) * u) : a + (b - a) * u;
      }
    }
    return k[k.length - 1][1];
  }
}

/**
 * world: {items: [{id, type, loc: 'table', table, x, z, used}], robotX}
 * mission: {kind: 'entregar'|'recolher', table, types: [...] }
 * → {ok, msg} ou o plano
 */
export function compile(world, mission) {
  const k = mission.table;
  const onTable = world.items.filter((it) => it.loc === 'table' && it.table === k);
  let pick = [];
  let warn = '';
  if (mission.kind === 'entregar') {
    const types = DELIVER_ORDER.filter((t) => mission.types.includes(t));
    if (!types.length) return {ok: false, msg: 'Escolha ao menos um item do pedido.'};
    const busy = types.filter((t) => onTable.some((it) => it.type === t && isOnEdge(it.x) && Math.abs(it.z - EDGE_SPOT[t][1]) < 0.06));
    if (busy.length) return {ok: false, msg: `Mesa ${k + 1}: a posição de ${busy.map((t) => TYPES[t].curto.toLowerCase()).join(', ')} na borda está ocupada. Recolha a louça primeiro.`};
    pick = types.map((type, i) => ({id: `n${world.serial + i}`, type, used: false}));
  } else {
    const reach = onTable.filter((it) => isOnEdge(it.x));
    const far = onTable.filter((it) => !isOnEdge(it.x));
    if (far.length) warn = `${far.length} ${far.length > 1 ? 'itens estão' : 'item está'} no centro da mesa, fora do alcance — o cliente pode aproximá-lo da borda.`;
    if (!reach.length) return {ok: false, msg: far.length ? `Mesa ${k + 1}: nada na borda. ${warn}` : `Mesa ${k + 1} já está livre.`};
    pick = BUS_ORDER.flatMap((t) => reach.filter((it) => it.type === t));
    // posições da bandeja: um de cada tipo por viagem; repetidos ficam para a próxima
    const seen = new Set();
    pick = pick.filter((it) => (seen.has(it.type) ? false : seen.add(it.type)));
  }

  // ------------------------------------------------ trilhas
  const base = new Track([DOCK_X, 0, HEADING]);
  const arm = new Track(polarArr(REST));
  const gap = new Track(0.06);
  const lip = new Track(0);
  const events = [];      // {t, id, loc: 'tray'|'held'|'table'|'gone'|'spawn', ...}
  const steps = [];       // {t0, t1, label, kind}
  const face = [];        // {t, mood, say}
  let t = 0;
  const step = (t0, t1, label, kind) => steps.push({t0, t1, label, kind});

  if (mission.kind === 'entregar') {
    face.push({t: 0, mood: 'neutro', say: 'Pedido na bandeja!'});
    const t0 = t;
    pick.forEach((it, i) => events.push({t: 0.25 + i * 0.28, id: it.id, type: it.type, used: false, loc: 'tray'}));
    t += 0.4 + pick.length * 0.28;
    step(t0, t, 'Cozinha carrega o pedido', 'load');
  } else face.push({t: 0, mood: 'neutro', say: `A caminho da mesa ${k + 1}`});

  // ida pelo corredor
  {
    const d = Math.abs(TABLE_X[k] - DOCK_X);
    const T = dur(d, V_DRIVE, 1.5);
    base.to(t, t + T, [TABLE_X[k], 0, HEADING]);
    step(t, t + T, `Ir até a mesa ${k + 1} · ${d.toFixed(1)} m`, 'drive');
    t += T + 0.3;
  }
  face.push({t, mood: 'foco', say: ''});

  // braço: para cada item, pegar e soltar
  let cur = polarArr(REST);
  const moveTo = (p, label, minT = 0.5) => {
    const target = polarArr(p, cur[0]);
    const a = fromPolar({phi: cur[0], rho: cur[1], y: cur[2]});
    const b = fromPolar({phi: target[0], rho: target[1], y: target[2]});
    const arc = Math.abs(target[0] - cur[0]) * (cur[1] + target[1]) / 2;
    const d = Math.max(Math.hypot(b.x - a.x, b.y - a.y, b.z - a.z), arc);
    const T = dur(d, V_ARM, minT);
    arm.to(t, t + T, target);
    cur = target;
    const s = t;
    t += T;
    return s;
  };
  for (const it of pick) {
    const ty = TYPES[it.type];
    const src = mission.kind === 'entregar'
      ? {x: TRAY_SLOT[it.type][0], y: DIM.topTray, z: TRAY_SLOT[it.type][1]}
      : {x: it.x, y: 0.75, z: it.z};
    const dst = mission.kind === 'entregar'
      ? {x: EDGE_SPOT[it.type][0], y: 0.75, z: EDGE_SPOT[it.type][1]}
      : {x: TRAY_SLOT[it.type][0], y: DIM.topTray, z: TRAY_SLOT[it.type][1]};
    const wy = (p) => p.y + ty.gripH + DIM.reach;
    const open = Math.min(DIM.gapMax, 2 * ty.r + (ty.mode === 'apoio' ? 0.03 : 0.05));
    const closed = 2 * ty.r - 0.002;
    const flat = ty.mode === 'apoio';
    const t0 = t;
    // 1. acima da origem, abrindo
    const sMove = moveTo({x: src.x, y: H_T, z: src.z}, '', 0.6);
    gap.to(sMove + (t - sMove) * 0.4, t, open);
    // 2. desce
    moveTo({x: src.x, y: wy(src), z: src.z}, '', 0.55);
    // 3. pega: abas entram sob a borda, depois as almofadas centralizam
    if (flat) {
      lip.to(t, t + 0.4, 1);
      t += 0.4;
    }
    gap.to(t, t + 0.45, closed);
    t += 0.5;
    events.push({t, id: it.id, loc: 'held'});
    // 4. sobe
    moveTo({x: src.x, y: H_T, z: src.z}, '', 0.55);
    // 5. leva até o destino
    moveTo({x: dst.x, y: H_T, z: dst.z}, '', 0.7);
    // 6. desce e solta
    moveTo({x: dst.x, y: wy(dst), z: dst.z}, '', 0.55);
    events.push({t, id: it.id, loc: mission.kind === 'entregar' ? 'table' : 'tray', table: k, x: dst.x, z: dst.z});
    gap.to(t, t + 0.35, open);
    t += 0.35;
    if (flat) {
      lip.to(t, t + 0.35, 0);
      t += 0.35;
    }
    // 7. sobe
    moveTo({x: dst.x, y: H_T, z: dst.z}, '', 0.45);
    const verb = mission.kind === 'entregar' ? 'na mesa' : 'na bandeja';
    step(t0, t, `${ty.curto} ${verb} · ${flat ? 'apoio sob a borda' : 'pega lateral'}`, 'arm:' + it.type);
  }
  {
    const t0 = t;
    moveTo(REST, '', 0.9);
    gap.to(t0, t, 0.06);
    step(t0, t, 'Braço recolhe', 'arm');
  }
  face.push({t, mood: 'feliz', say: mission.kind === 'entregar' ? 'Bom apetite!' : 'Mesa liberada. Obrigado!'});
  t += 0.6;

  // volta: gira no lugar, corredor, gira na doca
  {
    const t0 = t;
    const turn = dur(PI, W_TURN, 1.2);
    base.to(t, t + turn, [TABLE_X[k], 0, -HEADING]);
    t += turn;
    const d = Math.abs(TABLE_X[k] - DOCK_X);
    const T = dur(d, V_DRIVE, 1.5);
    base.to(t, t + T, [DOCK_X, 0, -HEADING]);
    t += T;
    base.to(t, t + turn, [DOCK_X, 0, HEADING - 2 * PI]);
    t += turn;
    step(t0, t, 'Volta à cozinha', 'drive');
  }
  if (mission.kind === 'recolher') {
    const t0 = t;
    pick.forEach((it, i) => events.push({t: t + 0.25 + i * 0.28, id: it.id, loc: 'gone'}));
    t += 0.4 + pick.length * 0.28;
    step(t0, t, 'Cozinha descarrega a louça', 'unload');
  }
  face.push({t, mood: 'neutro', say: ''});
  t += 0.2;
  events.sort((a, b) => a.t - b.t);
  return {ok: true, warn, kind: mission.kind, table: k, pick, dur: t, base, arm, gap, lip, events, steps, face};
}

function polarArr(p, near) {
  const q = toPolar(p);
  let phi = q.phi;
  if (near !== undefined) phi = near + wrap(phi - near);
  return [phi, q.rho, q.y];
}

/** estado do plano no tempo τ */
export function evalPlan(plan, tau) {
  const b = plan.base.at(tau);
  const a = plan.arm.at(tau);
  const w = fromPolar({phi: a[0], rho: a[1], y: a[2]});
  const st = plan.steps.findIndex((s) => tau < s.t1);
  let mood = 'neutro';
  let say = '';
  let sayT = 0;
  for (const f of plan.face) if (f.t <= tau) {
    mood = f.mood;
    if (f.say !== undefined) {
      say = f.say;
      sayT = f.t;
    }
  }
  return {
    base: {x: b[0], z: b[1], h: b[2]},
    wrist: w,
    gap: plan.gap.at(tau),
    lip: clamp01(plan.lip.at(tau)),
    step: st < 0 ? plan.steps.length - 1 : st,
    mood,
    say: tau - sayT < 3.2 ? say : '',
  };
}

/** onde está cada utensílio da missão no tempo τ (o último evento até τ) */
export function itemStates(plan, tau) {
  const out = new Map();
  for (const e of plan.events) {
    if (e.t > tau) break;
    out.set(e.id, e);
  }
  return out;
}
