// Embute a planta como data URI para o site funcionar também abrindo o arquivo direto (file://).
import { readFileSync, writeFileSync } from 'node:fs';
const b64 = readFileSync(new URL('../assets/planta.jpg', import.meta.url)).toString('base64');
writeFileSync(new URL('../src/planImage.js', import.meta.url),
  `// Gerado por scripts/embed-plan.mjs — não editar.\nexport default 'data:image/jpeg;base64,${b64}';\n`);
