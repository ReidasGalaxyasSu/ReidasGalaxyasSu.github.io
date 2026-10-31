# Proposta Inside Rastreadores

Página estática para vendedores preencherem uma proposta visual e enviarem para o cliente pelo WhatsApp.

## Uso

Abra `index.html` no navegador, preencha os campos no painel lateral e gere a proposta pronta.

Para enviar ao cliente, use o botão **Baixar imagem da proposta**:

- **No computador:** baixa um arquivo `.png` apenas da proposta (sem o painel de edição).
- **No celular:** abre o menu de compartilhamento do aparelho, permitindo mandar a imagem direto no WhatsApp ou salvá-la na galeria.

O botão **Imprimir** continua disponível para gerar PDF/impressão.

## Estrutura

- `index.html` — página única (HTML, CSS e JS embutidos).
- `assets/` — banner, logos e imagens da proposta.
- `assets/vendor/html2canvas.min.js` — biblioteca usada para transformar a proposta em imagem (MIT).

## Outras páginas

- `apartamento-3d/` — Planta Viva: a planta baixa vira o apartamento decorado em 3D com o scroll.
- `rastreador-j4-lite/` — RealTracker J4 Lite: o desenho técnico vira o rastreador em 3D, que desmonta e monta de novo com o scroll. Inclui vídeo e modelo GLB/glTF/.blend (veja o README da pasta).
