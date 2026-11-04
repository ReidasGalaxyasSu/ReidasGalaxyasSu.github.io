import {bundle} from '@remotion/bundler';
import {renderMedia, selectComposition, renderStill} from '@remotion/renderer';
import path from 'path';
const R=process.cwd();
const browserExecutable='/opt/pw-browsers/chromium_headless_shell-1243/chrome-headless-shell-linux64/chrome-headless-shell';
const serveUrl=await bundle({entryPoint:path.join(R,'src/index.ts'),publicDir:path.join(R,'public')});
const comp=await selectComposition({serveUrl,id:'JeysHair',browserExecutable});
const mode=process.argv[2];
if(mode==='stills'){
  const ts=process.argv.slice(3).map(Number);
  for(const s of ts){await renderStill({composition:comp,serveUrl,output:path.join(R,'out',`still_${s}.png`),frame:Math.round(s*30),browserExecutable,scale:0.5});}
}else{
  await renderMedia({composition:comp,serveUrl,codec:'h264',outputLocation:path.join(R,'out','jeys-hair-9x16.mp4'),browserExecutable,crf:16,audioCodec:'aac',audioBitrate:'256k',concurrency:Number(process.env.CONC||4),onProgress:({progress})=>{if(Math.round(progress*100)%10===0)process.stdout.write(Math.round(progress*100)+'% ')}});
}
console.log('done');
