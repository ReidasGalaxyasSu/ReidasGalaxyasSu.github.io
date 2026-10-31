// Gera modelo/j4_lite.glb, modelo/gltf/ (glTF editável com .bin e texturas PNG separadas)
// e, se houver Blender (ou o módulo bpy), modelo/j4_lite.blend.
//   node scripts/export-model.mjs [--blender /caminho/para/python-com-bpy]
import { build } from 'esbuild';
import { createRequire } from 'node:module';
import { mkdirSync, writeFileSync, rmSync, existsSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { tmpdir } from 'node:os';

const require = createRequire(import.meta.url);
const { chromium } = require('playwright');
const here = dirname(fileURLToPath(import.meta.url)), root = join(here, '..');
const out = join(root, 'modelo');
const args = process.argv.slice(2);
const blenderPy = args.includes('--blender') ? args[args.indexOf('--blender') + 1] : process.env.BLENDER_PY;

const bundle = join(tmpdir(), 'j4-export-bundle.js');
await build({ entryPoints: [join(root, 'src/export.js')], bundle: true, format: 'iife', outfile: bundle, logLevel: 'warning' });

const browser = await chromium.launch();
const page = await browser.newPage();
page.on('pageerror', e => console.error('erro na página:', e.message));
await page.setContent('<!doctype html><html><body></body></html>');
await page.addScriptTag({ path: bundle });
const res = await page.evaluate(() => window.__exportJ4());
await browser.close();

mkdirSync(out, { recursive: true });
const glbPath = join(out, 'j4_lite.glb');
writeFileSync(glbPath, Buffer.from(res.glb, 'base64'));
console.log(`GLB: ${glbPath} (${(Buffer.from(res.glb, 'base64').length / 1048576).toFixed(2)} MB) · ${res.meshes} malhas · ${res.tris} triângulos`);

// glTF editável: buffers e imagens em arquivos separados
const gdir = join(out, 'gltf');
if (existsSync(gdir)) rmSync(gdir, { recursive: true });
mkdirSync(join(gdir, 'texturas'), { recursive: true });
const g = JSON.parse(res.gltf);
const fromData = uri => Buffer.from(uri.slice(uri.indexOf(',') + 1), 'base64');
g.buffers.forEach((b, i) => { const name = g.buffers.length > 1 ? `j4_lite_${i}.bin` : 'j4_lite.bin'; writeFileSync(join(gdir, name), fromData(b.uri)); b.uri = name; });
const used = new Set();
(g.images || []).forEach((im, i) => {
  const ext = im.mimeType === 'image/jpeg' ? 'jpg' : 'png';
  // nome a partir do material que usa a imagem
  const texIdx = (g.textures || []).findIndex(t => t.source === i);
  const mat = (g.materials || []).find(m => new RegExp(`"index":${texIdx}[,}]`).test(JSON.stringify(m)));
  let name = (mat ? mat.name : 'textura') + '.' + ext, n = 1;
  while (used.has(name)) name = `${mat ? mat.name : 'textura'}_${++n}.${ext}`;
  used.add(name);
  writeFileSync(join(gdir, 'texturas', name), fromData(im.uri));
  im.uri = 'texturas/' + name; delete im.mimeType;
});
writeFileSync(join(gdir, 'j4_lite.gltf'), JSON.stringify(g, null, 1));
console.log(`glTF editável: ${gdir}`);

if (blenderPy) {
  execFileSync(blenderPy, [join(here, 'make-blend.py'), glbPath, join(out, 'j4_lite.blend')], { stdio: 'inherit' });
} else {
  console.log('Sem Blender: pule o .blend ou rode com --blender <python com bpy>.');
}
