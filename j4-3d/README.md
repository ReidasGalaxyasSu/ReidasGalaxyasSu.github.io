# Realtracker J4 — modelo 3D para montagem e desmontagem

Modelo 3D do rastreador J4 reconstruído a partir das fotografias de referência, organizado em 5 conjuntos independentes e pronto para animação.

| Arquivo | O que é |
|---|---|
| `j4_rastreador.glb` | Exportação glTF binária com hierarquia, materiais PBR, texturas e o clipe `montagem_desmontagem` |
| `j4_rastreador.blend` | Arquivo editável (Blender 4.2+ / 5.x), com texturas embutidas, keyframes e marcadores de linha do tempo |
| `src/build_j4.py` | Script que gera tudo do zero (`pip install bpy pillow numpy`, depois `python3 src/build_j4.py referencias . [--render]`) |
| `index.html` | Visualizador web (three.js): Montado / Explodido / Animar / linha do tempo / mostrar ou ocultar conjuntos |
| `textures/` | Recortes das fotos usados como textura e o mapa normal do plástico |
| `previews/` | Renderizações de conferência (Cycles) |
| `referencias/` | Fotos usadas como fonte das texturas |

## Hierarquia

```
J4_rastreador
├─ carcaca_j4   carcaca_corpo · etiqueta_codigo_barras · inscricao_j4_this_side_up · inscricao_4g_gps
├─ tampa_j4     tampa_corpo (lingueta perimetral, 4 pinos, 5 travas e 1 alça de trava)
├─ placa_j4     placa_pcb · blindagem_superior · blindagem_inferior · porta_sim_base · porta_sim_tampa_metal
│               capacitor_tantalo_1/2 · indutor_smd · conector_contatos_3vias · conector_ufl · ponta_solda_1..7
│               (face da antena) antena_patch_gnss · blindagem_gnss · modulo_celular_etiqueta · pino_pogo_ouro/base
├─ bateria_j4   bateria_corpo · bateria_fita_amarela · bateria_fio_vermelho · bateria_fio_preto
└─ chicote_j4   passa_fios (peça única) · fio_1_vermelho … fio_7_roxo · conector_4vias · conector_3vias
```

Cada conjunto é um *empty* com pivô próprio (carcaça: centro da face "THIS SIDE UP"; tampa: centro do plano de apoio; placa: centro da placa; bateria: centro da face inferior; chicote: centro do passa-fios). Cada subobjeto tem o pivô no centro do próprio volume.

## Poses e animação

As mesmas peças são animadas; nada é duplicado nem deformado.

| Quadro (24 fps) | Marcador | Estado |
|---|---|---|
| 1 | `MONTADO` | montado |
| 1–30 | | tampa sobe |
| 30–60 | | bateria sobe |
| 60–90 | | placa e chicote sobem juntos |
| 90–110 | `EXPLODIDO` / `EXPLODIDO_FIM` | explodido |
| 110–200 | `MONTADO_FIM` | montagem na ordem inversa |

Cada conjunto também guarda `pos_montado_blender_zup` e `pos_explodido_blender_zup` como propriedades personalizadas (exportadas como `extras` no glTF).

O script testa interseções de triângulos entre os conjuntos e entre os fios, nas poses MONTADO e EXPLODIDO: **0 interseções** nas duas.

## Decisões tiradas das referências

- **Orientação:** a face "THIS SIDE UP" é o fundo externo da carcaça. A face da antena da placa fica voltada para ela; a bateria fica sobre as blindagens e deixa o porta-SIM livre; a tampa fecha o lado aberto.
- **Tampa:** tem o mesmo comprimento e a mesma largura de encaixe da carcaça. O encurtamento das fotos em perspectiva não foi tomado como medida.
- **Placa:** a frente e o verso fotografados são a mesma placa. Os cantos recortados da placa contornam os ressaltos dos cantos internos da carcaça.
- **Chicote:** o passa-fios encaixa no rasgo em U da parede, que é aberto para o lado da tampa, por isso sai na vertical junto com a placa. Vermelho, preto, laranja e amarelo vão para o conector de 4 vias; verde, branco e roxo vão para o de 3 vias. Por dentro, cada fio chega a um dos 7 furos da barra de pads (o 8º furo fica livre, como na foto).
- **Inscrições:** etiqueta de código de barras, "J-4 / THIS SIDE UP" e "4G ● ● GPS" vêm recortados das fotos. Nenhum texto foi redesenhado. A placa usa as fotos da frente e do verso como textura projetada; as faces superiores das blindagens, do porta-SIM e dos tântalos, e a face inferior da antena e do módulo, reaproveitam a mesma foto.

## Limitações (conferir)

- **Escala normalizada:** 1,0 unidade corresponde ao comprimento externo da carcaça. Nenhuma medida em milímetros foi fornecida nem verificada.
- Espessuras, profundidade da carcaça, altura dos componentes, comprimento do chicote e posição exata das travas foram estimados pelas fotos.
- As fotos de frente e verso da placa têm pequenas divergências entre si: posição dos pads e proporção. A geometria segue a foto da face das blindagens.
- Detalhes ocultos (encaixe interno das travas na carcaça, terminais dentro dos conectores, ligação elétrica dos fios) não foram inventados. As travas da tampa encostam por dentro das paredes.
- A ponta dos fios da bateria fica sobre os pads 1V8/GND, sem solda modelada, para a bateria poder sair sozinha na animação.
