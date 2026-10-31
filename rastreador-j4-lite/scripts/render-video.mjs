// Grava o vídeo de desmontagem e montagem quadro a quadro (modo ?film da página) e codifica em MP4.
//   node scripts/render-video.mjs [--fps 30] [--w 1920] [--h 1080] [--workers 2] [--offline-fonts]
//                                 [--out video/j4-lite-desmontagem-montagem.mp4]
// Requer: playwright (Chromium) e ffmpeg. Rode "npm run build" antes.
import { createRequire } from 'node:module';
import { mkdirSync, rmSync, existsSync } from 'node:fs';
import { spawnSync } from 'node:child_process';
import { dirname, join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { tmpdir } from 'node:os';

const require = createRequire(import.meta.url);
const { chromium } = require('playwright');
const here = dirname(fileURLToPath(import.meta.url)), root = join(here, '..');
const arg = (k, d) => { const i = process.argv.indexOf('--' + k); return i > -1 ? process.argv[i + 1] : d; };
const fps = +arg('fps', 30), W = +arg('w', 1920), H = +arg('h', 1080), workers = +arg('workers', 2);
const out = join(root, arg('out', 'video/j4-lite-desmontagem-montagem.mp4'));
const offline = process.argv.includes('--offline-fonts');
const frames = join(tmpdir(), 'j4-video-frames');
if (existsSync(frames)) rmSync(frames, { recursive: true });
mkdirSync(frames, { recursive: true });
mkdirSync(dirname(out), { recursive: true });

const url = pathToFileURL(join(root, 'index.html')).href + '?film';
async function worker(id, list) {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: W, height: H }, deviceScaleFactor: 1 });
  if (offline) await page.route(/fonts\.(googleapis|gstatic)\.com/, r => r.abort());
  page.on('pageerror', e => console.error(`[${id}] erro:`, e.message));
  await page.goto(url);
  await page.waitForFunction(() => window.__film && window.__film.ready(), null, { timeout: 180000 });
  const t0 = Date.now();
  for (let k = 0; k < list.length; k++) {
    const f = list[k];
    await page.evaluate(t => window.__film.video(t), f / fps);
    await page.screenshot({ path: join(frames, `f${String(f).padStart(5, '0')}.jpg`), type: 'jpeg', quality: 94 });
    if (k % 30 === 0) console.log(`[${id}] quadro ${f} (${k + 1}/${list.length}) · ${((Date.now() - t0) / (k + 1) / 1000).toFixed(2)} s/quadro`);
  }
  await browser.close();
}

const total = Math.round(36 * fps);
const all = Array.from({ length: total + 1 }, (_, i) => i);
await Promise.all(Array.from({ length: workers }, (_, w) => worker(w, all.filter(i => i % workers === w))));

const ff = spawnSync('ffmpeg', ['-y', '-loglevel', 'error', '-framerate', String(fps), '-i', join(frames, 'f%05d.jpg'),
  '-c:v', 'libx264', '-preset', 'slow', '-crf', '19', '-pix_fmt', 'yuv420p', '-movflags', '+faststart', out], { stdio: 'inherit' });
if (ff.status !== 0) process.exit(1);
console.log('vídeo:', out);
