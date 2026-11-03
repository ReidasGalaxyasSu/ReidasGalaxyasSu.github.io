const { chromium } = require('playwright'); const fs=require('fs');
const W=1920,H=1080,FPS=30,N=450,WORKERS=+process.argv[2]||4,BAR=1.875;
const SEG=[[0,1*BAR,0,3.3],[1*BAR,3*BAR,3.4,10.2],[3*BAR,5*BAR,10.4,16.2],[5*BAR,7*BAR,16.4,23.5],[7*BAR,8*BAR,23.7,26.5]];
const TXT=[['REALTRACKER','J4'],['DESMONTAGEM','Peça por peça'],['EXPLODIDO','5 conjuntos · 0 sobras'],['MONTAGEM','Encaixe em 4 passos'],['REALTRACKER J4','Do desenho ao 3D']];
const CSS=`
.fcap,.fend{display:none!important}
#fx{position:fixed;inset:0;pointer-events:none;z-index:99999;font-family:Inter,Arial,sans-serif}
#fx .vig{position:absolute;inset:0;background:radial-gradient(ellipse at 50% 50%,transparent 55%,rgba(40,20,80,.35) 100%)}
#fx .flash{position:absolute;inset:0;background:#fff}
#fx .bar{position:absolute;left:0;top:0;height:8px;background:linear-gradient(90deg,#6b4fa8,#c9a8ff)}
#fx .t{position:absolute;left:64px;bottom:84px;color:#14101f;overflow:hidden}
#fx .k{font:700 26px 'JetBrains Mono',monospace;letter-spacing:.28em;color:#6b4fa8;display:block}
#fx .h{font-weight:800;font-size:96px;letter-spacing:-.03em;line-height:1.02;display:block;text-shadow:0 2px 30px rgba(255,255,255,.8)}
#fx .strip{position:absolute;left:0;right:0;height:130px;background:#14101f}
#fx .end{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;background:rgba(20,16,31,.0);color:#14101f}
#fx .end .big{font-weight:800;font-size:150px;letter-spacing:-.04em}
#fx .end .big em{color:#6b4fa8;font-style:normal}
#fx .end .sub{font:600 30px 'JetBrains Mono',monospace;letter-spacing:.3em;margin-top:10px;color:#4a3a78}
#fx .end .url{margin-top:36px;padding:16px 34px;border-radius:99px;background:#6b4fa8;color:#fff;font:700 28px 'JetBrains Mono',monospace;letter-spacing:.12em}
`;
const ease=x=>1-Math.pow(1-Math.min(1,Math.max(0,x)),4);
function map(t){for(const [a,b,s0,s1] of SEG) if(t<b+1e-9) return {src:s0+(t-a)/(b-a)*(s1-s0),seg:SEG.findIndex(s=>s[0]===a),a};return {src:26.5,seg:4,a:SEG[4][0]}}
async function worker(id,list){
  const b=await chromium.launch({args:['--use-gl=angle','--use-angle=swiftshader','--enable-unsafe-swiftshader','--ignore-gpu-blocklist']});
  const p=await b.newPage({viewport:{width:W,height:H}});
  p.on('pageerror',e=>console.log('err',e.message));
  await p.route(/fonts\.(googleapis|gstatic)\.com/,r=>r.abort());
  await p.goto('file:///home/user/ReidasGalaxyasSu.github.io/rastreador-j4/index.html?film');
  await p.waitForFunction(()=>window.__film&&window.__film.ready(),null,{timeout:180000});
  await p.addStyleTag({content:CSS});
  await p.evaluate(()=>{const d=document.createElement('div');d.id='fx';d.innerHTML='<div class="vig"></div><div class="t"><span class="k"></span><span class="h"></span></div><div class="end"></div><div class="strip" style="top:-130px"></div><div class="strip" style="bottom:-130px"></div><div class="flash"></div><div class="bar"></div>';document.body.appendChild(d)});
  for(const f of list){
    const t=f/FPS,m=map(t),lt=t-m.a; // tempo local no segmento
    const sinceCut=lt, flash=Math.max(0,1-sinceCut/0.18)*(m.seg>0?0.85:0.0)+(t<0.25?1-t/0.25:0);
    const punch=1+0.045*Math.max(0,1-sinceCut/0.35)**2; // zoom punch no corte
    const kick=(t%0.46875)/0.46875; const pulse=1+0.006*Math.max(0,1-kick*3); // pulso no beat
    const tx=TXT[m.seg], inT=ease(lt/0.5), outT=m.seg==4?1:1-ease((lt-(SEG[m.seg][1]-SEG[m.seg][0]-0.35))/0.3);
    await p.evaluate(({src,flash,punch,pulse,tx,inT,outT,seg,t,lt,N})=>{
      window.__film.video(src);
      const sc=document.getElementById('scene'); for(const el of [sc,document.getElementById('film-ui')]){el.style.transformOrigin='50% 50%';el.style.transform=`scale(${(punch*pulse).toFixed(4)})`;}
      const fx=document.getElementById('fx');
      fx.querySelector('.flash').style.opacity=flash.toFixed(3);
      fx.querySelector('.bar').style.width=(t/15*100)+'%';
      const T=fx.querySelector('.t'); T.style.display=seg==4?'none':'block';
      T.querySelector('.k').textContent=tx[0]; const h=T.querySelector('.h'); h.textContent=tx[1];
      T.style.opacity=Math.max(0,Math.min(1,outT)); h.style.transform=`translateY(${(1-inT)*60}px)`; T.querySelector('.k').style.transform=`translateX(${(1-inT)*-40}px)`;
      const e=fx.querySelector('.end');
      if(seg==4){const a=Math.min(1,lt/0.5);e.style.background=`rgba(233,232,239,${(0.82*a).toFixed(3)})`;
        e.innerHTML=`<div class="big" style="opacity:${a};transform:scale(${0.9+0.1*a})">Real<em>Tracker</em> J4</div><div class="sub" style="opacity:${Math.min(1,Math.max(0,(lt-.3)/.4))}">DO DESENHO AO 3D</div><div class="url" style="opacity:${Math.min(1,Math.max(0,(lt-.7)/.4))}">reidasgalaxyassu.github.io/rastreador-j4</div>`}
      else e.innerHTML='';
      // letterbox abre nos 0.4s iniciais
      const s=fx.querySelectorAll('.strip'); const lb=t<0.5?130*(1-t/0.5):0; s[0].style.top=(-130+lb)+'px'; s[1].style.bottom=(-130+lb)+'px';
    },{src:m.src,flash,punch,pulse,tx,inT,outT,seg:m.seg,t,lt,N});
    if(process.env.DBG){console.log(await p.evaluate(()=>{const e=document.querySelector("#fx .big")||document.querySelector("#fx .h");const r=e.getBoundingClientRect();const c=getComputedStyle(e);return JSON.stringify([e.textContent,r.x,r.y,r.width,r.height,c.opacity,c.color,c.display,document.getElementById("fx").parentNode.tagName])}))}
    await p.screenshot({path:`frames/f${String(f).padStart(4,'0')}.jpg`,type:'jpeg',quality:93});
    if(f%30<WORKERS)console.log(`[${id}] ${f}/${N}`);
  }
  await b.close();
}
(async()=>{
  fs.mkdirSync('frames',{recursive:true});
  const only=process.argv[3]?process.argv[3].split(',').map(Number):null;
  const all=only||Array.from({length:N},(_,i)=>i);
  await Promise.all(Array.from({length:WORKERS},(_,w)=>worker(w,all.filter((_,i)=>i%WORKERS===w))));
})();
