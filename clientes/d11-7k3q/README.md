# Apartamento em 3D (cliente · Torre D, 2 dormitórios, 65,54 m²)

Projeto Planta Viva gerado a partir da planta de contrato do cliente (`assets/planta.jpg`).
As paredes, portas, janelas e louças seguem as cotas dessa planta (escala lida das cotas, conferida por sobreposição).
As imagens geradas no GPT serviram só como referência de estilo e de mobiliário.

- `src/house.js`: paredes, aberturas e móveis (metros; origem na face interna oeste do dormitório 1 e norte da cozinha)
- `src/main.js`: câmera do scroll, tour, modo livre e áreas de caminhada
- `npm run build` gera `app.js` (usa o `node_modules` de `apartamento-3d` por link)
