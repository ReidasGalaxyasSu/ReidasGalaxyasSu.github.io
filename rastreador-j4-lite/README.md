# J4 Lite em 3D · RealTracker

Página em que o desenho técnico do rastreador **RealTracker J4 Lite** vira o equipamento em 3D conforme a pessoa rola a tela. Em seguida, o equipamento desmonta peça por peça e monta de novo. É o mesmo esquema da página `apartamento-3d`, em que a planta baixa vira o apartamento.

Entregas desta pasta:

| Arquivo | O que é |
|---|---|
| `index.html` | Página com o scroll (abre direto do arquivo, sem servidor) |
| `video/j4-lite-desmontagem-montagem.mp4` | Vídeo de 36 s em 1920×1080: desmonta e remonta |
| `modelo/j4_lite.glb` | Modelo 3D com os 6 conjuntos separados e as animações |
| `modelo/gltf/` | O mesmo modelo em glTF editável (`.gltf` + `.bin` + texturas PNG soltas) |
| `modelo/j4_lite.blend` | Arquivo editável do Blender (4.2), com coleções, keyframes e marcadores |

## Roteiro do scroll

| Faixa | O que acontece |
|---|---|
| 0–10% | A folha de desenho se desenha: vista frontal, vista lateral, vista explodida e lista de conjuntos |
| 10–22% | Uma varredura roxa transforma a vista frontal no objeto 3D |
| 22–30% | J4 Lite montado: tampa com a marca, etiqueta de IMEI, chicote |
| 30–38% | Desmontagem 1: sai a tampa externa |
| 38–47% | Desmontagem 2: sai a proteção interna (rótulos nas três aberturas) |
| 47–56% | Desmontagem 3: placa, bateria e chicote saem juntos da carcaça |
| 56–63,5% | Desmontagem 4: a bateria sai do verso da placa (posição EXPLODIDO) |
| 63,5–71% | Placa, face antena/SIM, com rótulos e LEDs piscando |
| 71–78% | A placa vira e mostra o verso; a área sob a bateria fica lisa |
| 78–84,5% | Chicote: conector de 4 vias, travas, termorretrátil, passa-fios |
| 84,5–97,5% | Montagem: 1 bateria → 2 conjunto na carcaça → 3 proteção → 4 tampa |
| 97,5–100% | Final, com os botões *Explorar em 3D*, *Baixar GLB* e *Assistir ao vídeo* |

**Explorar em 3D** abre o modo livre. Nele dá para girar o modelo, alternar entre *Montado* e *Explodido* (a animação respeita a ordem de montagem), virar a placa e esconder ou mostrar cada conjunto. **Esc** volta ao roteiro.

Para testar uma posição do scroll, abra `index.html?p=0.68`.

## O modelo

São seis conjuntos independentes, cada um com o pivô no próprio centro. As transformações padrão correspondem à posição **MONTADO**. Na posição **EXPLODIDO**, os conjuntos se afastam pelo eixo +Z do equipamento, e nenhuma peça é deformada, duplicada ou fundida.

| Nº | Conjunto | Subobjetos | EXPLODIDO (Z) |
|---|---|---|---|
| 01 | `carcaca_j4_lite` | corpo_carcaca, painel_fosco_fundo, etiqueta_imei | 0 |
| 02 | `placa_j4_lite` | substrato_pcb, antena_gps_ceramica, chave_liga_desliga, conector_micro_usb, porta_sim, leds_status, diodos_frente, componentes_smd_frente, capacitor_eletrolitico, ci_soic8, blindagem_metalica, indutor_470, capacitor_tantalo, diodos_verso, componentes_smd_verso | +36 |
| 03 | `bateria_j4_lite` | bolsa_aluminio, fita_kapton_amarela, circuito_protecao_bateria, fios_bateria | +22 |
| 04 | `protecao_interna_j4_lite` | painel_protecao (com as 3 aberturas), ressalto_acesso_chave, travas_laterais, lingueta_passa_fios, texto_on_off | +47 |
| 05 | `tampa_externa_j4_lite` | corpo_tampa, aba_encaixe, painel_fosco_marca | +58 |
| 06 | `chicote_j4_lite` | passa_fios, cabo_revestido, termorretratil, bota_conector, conector_4_vias, fios_internos | +36 (acompanha a placa) |

- **Eixos:** Y é o comprimento (+Y na ponta do chicote), X é a largura e Z é a espessura (+Z do lado da tampa externa).
- **Escala:** relativa. Não há medidas reais, então as proporções saem das fotos (largura ≈ 0,31 L, espessura ≈ 0,19 L, chicote ≈ 0,55 L), com 1 unidade ≈ 1 mm estimado. No glTF, a raiz `J4_Lite` tem escala 0,001, o que dá cerca de 86 mm de corpo. **Confira as medidas no equipamento.**
- **Placa:** é uma única placa. A antena, a chave, o micro-USB, o porta-SIM e os LEDs ficam na frente. O capacitor, a blindagem, o indutor e o CI ficam no verso, junto com a bateria. Na região escondida pela bateria não há circuito inventado: só a máscara verde e as poucas vias que aparecem na placa nua.
- **Aproximações:** o interior da blindagem, o circuito de proteção sob a fita amarela e os contatos internos do conector. O IMEI da etiqueta é fictício (`860000000000000`).

### Animações no GLB

- `desmontagem`: tampa → proteção → conjunto (placa + bateria + chicote) → bateria, com 1 s por passo.
- `montagem`: bateria no verso da placa → conjunto na carcaça → proteção → tampa.
- `pose_MONTADO` e `pose_EXPLODIDO`: as duas posições fixas.
- Cada conjunto também traz `posicao_montado` e `posicao_explodido` nos *extras* (propriedades personalizadas no Blender).

### No Blender

Abra `modelo/j4_lite.blend`. Ele traz uma coleção por conjunto (`01_carcaca_j4_lite` … `06_chicote_j4_lite`) e estes marcadores na linha do tempo:

- **MONTADO**: quadro 1.
- **EXPLODIDO**: quadro 97.
- **Montagem passo a passo**: quadros 121 a 217.

O arquivo já vem com câmera e luzes, então dá para renderizar direto.

## Estrutura do código

- `src/layout.js`: medidas relativas, posição de cada componente na placa e deslocamentos do EXPLODIDO.
- `src/model.js`: geometria das seis peças (extrusões, operações booleanas e seções do cabo), materiais e pivôs.
- `src/textures.js`: texturas desenhadas em canvas (as duas faces da PCB, painéis foscos, etiqueta, antena e marcações).
- `src/sheet.js`: folha de desenho técnico (o equivalente à planta baixa).
- `src/main.js`: cena, roteiro do scroll, rótulos, modo livre e modo filme (`?film`).
- `src/export.js`: exportação GLB/glTF com as animações.
- `app.js`: código final empacotado (Three.js incluso). **Gerado — não editar.**

## Gerar de novo

```bash
cd rastreador-j4-lite
npm install
npm run build                                   # app.js
node scripts/export-model.mjs --blender <python com bpy>   # GLB, glTF e .blend
node scripts/render-video.mjs --workers 3       # vídeo (Chromium + ffmpeg)
```

Sem Blender, o `export-model.mjs` gera só o GLB e o glTF. Com o Blender instalado, também funciona assim: `blender -b -P scripts/make-blend.py -- modelo/j4_lite.glb modelo/j4_lite.blend`.
