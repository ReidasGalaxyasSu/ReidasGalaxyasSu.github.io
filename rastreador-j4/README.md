# J4 em 3D · RealTracker

Página em que o desenho técnico do rastreador **RealTracker J4** vira o equipamento em 3D conforme a pessoa rola a tela. Em seguida, o equipamento desmonta peça por peça e monta de novo. É o mesmo esquema da página `rastreador-j4-lite`.

O modelo 3D é o de `j4-3d/` (gerado em Blender a partir das fotos). A página não altera as peças: carrega o próprio `modelo/j4_rastreador.glb`, embutido no `app.js`, e só move os conjuntos.

| Arquivo | O que é |
|---|---|
| `index.html` | Página com o scroll (abre direto do arquivo, sem servidor) |
| `video/j4-desmontagem-montagem.mp4` | Vídeo de 30 s em 1920×1080: desmonta e remonta |
| `modelo/j4_rastreador.glb` | Modelo 3D com os 5 conjuntos separados e a animação `montagem_desmontagem` |
| `modelo/j4_rastreador.blend` | Arquivo editável do Blender, com keyframes e marcadores MONTADO / EXPLODIDO |

## Roteiro do scroll

| Faixa | O que acontece |
|---|---|
| 0–9,5% | A folha de desenho se desenha: vista frontal, vista lateral, vista explodida, lista de conjuntos e sequência de montagem |
| 9,5–19% | Uma varredura roxa transforma a vista frontal no objeto 3D |
| 19–31% | J4 montado: sobe, gira para mostrar a face THIS SIDE UP com a etiqueta e pousa mostrando a lateral 4G ● ● GPS |
| 31–37% | Desmontagem 1: sai a tampa (rótulos: alça de trava, pinos, lingueta) |
| 37–43% | Desmontagem 2: sai a bateria (fita amarela, fios até os pads 1V8/GND) |
| 43–50% | Desmontagem 3: placa e chicote saem juntos (rasgo do passa-fios, ressaltos, degrau, fundo) |
| 50–58,5% | Placa, face das blindagens (blindagens, porta-SIM, tântalos, pads) |
| 58,5–66,8% | A placa vira e mostra a face da antena (antena patch GNSS, módulo 4G, pino de contato) |
| 66,8–71,2% | Chicote: passa-fios, conector de 4 vias, conector de 3 vias, 7 fios |
| 71,2–78,2% | Vista explodida com as 5 peças identificadas |
| 78,2–95,5% | Montagem: 1 carcaça → 2 placa com o chicote → 3 bateria → 4 tampa |
| 95,5–100% | Final, com os botões *Explorar em 3D*, *Baixar modelo* e *Assistir ao vídeo* |

**Explorar em 3D** abre o modo livre. Nele dá para girar o modelo, alternar entre *Montado* e *Explodido* (a animação respeita a ordem de montagem), virar a placa e esconder ou mostrar cada conjunto. **Esc** volta ao roteiro.

Para testar uma posição do scroll, abra `index.html?p=0.55`.

## Conjuntos

| Nº | Objeto no GLB | Nome na página | EXPLODIDO (+Z) |
|---|---|---|---|
| 01 | `carcaca_j4` | Carcaça | 0 |
| 02 | `placa_j4` | Placa principal | +0,35 |
| 03 | `chicote_j4` | Chicote (acompanha a placa) | +0,35 |
| 04 | `bateria_j4` | Bateria | +0,65 |
| 05 | `tampa_j4` | Tampa | +0,95 |

A escala é normalizada (1,0 = comprimento externo da carcaça). Na cena, o modelo é ampliado 70 vezes só para a câmera e as luzes, sem alterar o arquivo.

## Estrutura do código

- `src/layout.js`: medidas do modelo, conjuntos, deslocamentos do EXPLODIDO.
- `src/sheet.js`: folha de desenho técnico (o equivalente à planta baixa).
- `src/main.js`: cena, carregamento do GLB, roteiro do scroll, rótulos, modo livre e modo filme (`?film`).
- `app.js`: código final empacotado (Three.js e o GLB inclusos). **Gerado — não editar.**

## Gerar de novo

```bash
cd rastreador-j4
npm install
npm run build                                       # app.js (inclui modelo/j4_rastreador.glb)
node scripts/render-video.mjs --workers 3           # vídeo (Chromium + ffmpeg)
```

Se o modelo mudar em `j4-3d/`, copie o novo `j4_rastreador.glb` para `modelo/` e rode `npm run build`.
