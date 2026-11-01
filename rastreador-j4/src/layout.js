// Dados do modelo j4_rastreador.glb (gerado em j4-3d/src/build_j4.py) usados pela página.
// Coordenadas do EQUIPAMENTO, em unidades normalizadas (1,0 = comprimento externo da carcaça):
//   X = largura, Y = comprimento (+Y = saída do chicote), Z = espessura (+Z = lado da tampa).
// A face "THIS SIDE UP" é o fundo externo da carcaça (Z = 0).

// unidades de cena por unidade normalizada (a carcaça fica com 70 unidades de comprimento)
export const S = 70;

export const D = {
  CW: 0.56, CL: 1.0, CH: 0.22, CR: 0.06,     // carcaça
  LID: 0.05, SEAT: 0.2205,                   // tampa: espessura e plano de apoio
  BOSS: [0.15, 0.535],                       // ressalto da saída do chicote (meia-largura, ponta)
  PCB: { x: 0.235, y0: -0.41, y1: 0.42, z0: 0.111, z1: 0.125 },
  BAT: { x0: -0.1865, x1: 0.2135, y0: -0.125, y1: 0.345, z0: 0.156, z1: 0.211 },
  WIRE_Z: 0.097,
  CONN_Y: [1.40, 1.59],
  CONN_A: { x: 0.10, w: 0.20 }, CONN_B: { x: -0.16, w: 0.15 },
};

// As cinco peças, na ordem de montagem (a desmontagem segue a ordem inversa)
export const SETS = [
  { id: 'carcaca_j4', n: '01', nome: 'Carcaça', desc: 'Corpo oco com a face THIS SIDE UP' },
  { id: 'placa_j4', n: '02', nome: 'Placa principal', desc: 'Módulo 4G e antena GNSS' },
  { id: 'chicote_j4', n: '03', nome: 'Chicote', desc: 'Passa-fios, 7 fios e conectores de 4 e 3 vias' },
  { id: 'bateria_j4', n: '04', nome: 'Bateria', desc: 'Lítio, sobre as blindagens' },
  { id: 'tampa_j4', n: '05', nome: 'Tampa', desc: 'Fecha o corpo com lingueta, pinos e travas' },
];

// Deslocamentos em +Z do equipamento na posição EXPLODIDO (os mesmos do GLB)
export const EXPLODE = { carcaca_j4: 0, placa_j4: 0.35, chicote_j4: 0.35, bateria_j4: 0.65, tampa_j4: 0.95 };

// equipamento (x, y, z) -> coordenadas locais do glTF (Y para cima): (x, z, -y)
export const eq = ([x, y, z]) => [x, z, -y];
