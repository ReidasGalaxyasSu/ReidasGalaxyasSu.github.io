// Medidas do J4 Lite em escala relativa (1 unidade ≈ 1 mm estimado a partir das fotos).
// Não há medidas reais: as proporções saem das fotografias do equipamento inteiro.
// Eixos do equipamento: X = largura, Y = comprimento (+Y = ponta do chicote), Z = espessura (+Z = tampa externa).

export const D = {
  // carcaça
  HW: 13.5, HL: 43, CR: 4.2, DEPTH: 13, FLOOR: 1.5,
  IHW: 12, IHL: 41.5, ICR: 2.8,
  // tampa externa (fecha sobre o aro da carcaça)
  T0: 13, T1: 16,
  // proteção interna
  P0: 9.9, P1: 11.1, PHW: 11.8, PHL: 41.3, PCR: 2.6,
  // placa (PCB)
  B_X0: -11, B_X1: 11, B_Y0: -39, B_Y1: 35, B_Z0: 5.9, B_Z1: 6.9, B_TAIL: -31.5, B_TAILW: 10.4, B_CHAMF: 1.6,
  // bateria (verso da placa)
  BAT_X: 10, BAT_Y0: -34, BAT_Y1: 1.5, BAT_TAPE: -5, BAT_Z0: 1.7, BAT_Z1: 5.7,
  // eixo do chicote / passa-fios (atravessa a parede da ponta)
  CZ: 6.6,
};

// Furos e pads (iguais nas duas faces: atravessam a placa)
export const HOLES = [
  { x: -9.4, y: 33.2, r: 0.95, ring: 1.55 }, { x: 9.4, y: 33.2, r: 0.95, ring: 1.55 },
  { x: -9.2, y: -29.6, r: 1.1, ring: 1.7 }, { x: 9.2, y: -29.6, r: 1.1, ring: 1.7 },
  { x: 0, y: -28.6, r: 0.5, ring: 0 },
];
export const WIRE_PADS = [-6.2, -3.4, -0.6, 2.2, 5.0].map(x => ({ x, y: 33.2, r: 0.45, ring: 0.95 }));
export const WIRE_COLORS = ['#c8161d', '#141414', '#ec6f16', '#f2c21b']; // vermelho, preto, laranja, amarelo

// ---------------- face da frente: antena / SIM
export const FRONT = {
  sw: { x: 0, y: 23.5, w: 7.0, h: 3.2 },          // chave liga/desliga
  ant: { x: 0, y: 11.6, s: 18, t: 2.4 },          // antena GPS cerâmica
  usb: { x: 0, y: -0.6, w: 7.6, h: 3.0, t: 2.4 }, // micro-USB
  sim: { x: 0, y: -15, w: 16.2, h: 17.4 },        // porta-SIM
  leds: [{ x: -2.4, y: -26.2 }, { x: 2.4, y: -26.2 }],
  diodes: [{ x: 3.6, y: 28.2 }, { x: 6.6, y: 28.2 }, { x: 9.6, y: 28.2 }], // SMA na vertical
  sot: [{ x: -7.2, y: 29.2 }, { x: -4.0, y: 28.0, r: 1 }, { x: -1.2, y: 29.6 }, { x: 6.4, y: -0.8, r: 1 }],
  r0603: [
    { x: -8.8, y: 26.0, v: 1 }, { x: -6.0, y: 25.8 }, { x: -2.6, y: 26.4 }, { x: 0.9, y: 27.0, v: 1 },
    { x: -9.0, y: 22.4, v: 1 }, { x: 8.6, y: 23.0 }, { x: 4.8, y: 22.4 },
    { x: -6.0, y: -26.4 }, { x: 6.0, y: -26.4 },
  ],
  r0402: [{ x: -5.4, y: -0.4 }, { x: 4.6, y: 1.5 }, { x: -6.8, y: 23.2 }, { x: 6.2, y: 25.6, v: 1 }, { x: -4.6, y: 1.6, v: 1 }],
};

// ---------------- verso: componentes (a região da bateria fica lisa)
export const BACK = {
  cap: { x: 6.4, y: 28.2, r: 3.15, h: 4.2 },        // capacitor eletrolítico 10 µF 100 V
  soic: { x: -1.6, y: 28.6, w: 4.9, h: 3.9 },        // CI SOIC-8
  shield: { x0: -0.6, x1: 10.6, y0: 5.6, y1: 21.0, nx: 3.8, ny: 3.0, h: 2.2 }, // blindagem (canto recortado)
  ind: { x: -5.7, y: 18.7, s: 5.4, h: 2.8 },         // indutor "470"
  tant: { x: -5.2, y: 8.4, w: 2.8, h: 3.6 },         // capacitor de tântalo
  diodes: [{ x: -9.2, y: 28.2 }, { x: -9.4, y: 13.2 }],
  sot: [{ x: -4.4, y: 31.6 }, { x: -9.0, y: 4.4, r: 1 }],
  r0603: [
    { x: 2.6, y: 31.2 }, { x: -6.6, y: 25.8 }, { x: -3.0, y: 24.2, v: 1 }, { x: -1.6, y: 22.2 },
    { x: -2.2, y: 15.4, v: 1 }, { x: -2.4, y: 11.4, v: 1 }, { x: -9.4, y: 18.8, v: 1 },
    { x: 1.8, y: 3.6 }, { x: 4.6, y: 3.6 }, { x: 7.4, y: 3.6 },
  ],
  r0402: [{ x: -1.4, y: 25.0 }, { x: -9.2, y: 22.8, v: 1 }, { x: -2.0, y: 7.2, v: 1 }, { x: 9.7, y: 3.6, v: 1 }],
  batPads: [{ x: -8.6, y: 2.9 }, { x: -6.2, y: 2.9 }],
};

// As seis peças, na ordem de montagem (a desmontagem segue a ordem inversa)
export const SETS = [
  { id: 'carcaca_j4_lite', n: '01', nome: 'Carcaça', desc: 'Corpo preto oco, comprido e estreito' },
  { id: 'placa_j4_lite', n: '02', nome: 'Placa principal', desc: 'Uma única placa, face antena/SIM e verso' },
  { id: 'bateria_j4_lite', n: '03', nome: 'Bateria', desc: 'Bolsa prateada, fita amarela e fios curtos' },
  { id: 'protecao_interna_j4_lite', n: '04', nome: 'Proteção interna', desc: 'Painel com três aberturas passantes' },
  { id: 'tampa_externa_j4_lite', n: '05', nome: 'Tampa externa', desc: 'Tampa sólida que cobre todo o corpo' },
  { id: 'chicote_j4_lite', n: '06', nome: 'Chicote', desc: 'Cabo, termorretrátil, passa-fios e conector 4 vias' },
];

// Deslocamentos (eixo Z do equipamento) na posição EXPLODIDO
export const EXPLODE = {
  carcaca_j4_lite: 0,
  bateria_j4_lite: 22,
  placa_j4_lite: 36,
  chicote_j4_lite: 36,
  protecao_interna_j4_lite: 47,
  tampa_externa_j4_lite: 58,
};
