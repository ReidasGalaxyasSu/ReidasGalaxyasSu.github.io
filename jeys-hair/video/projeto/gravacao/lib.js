const {chromium}=require('playwright');const fs=require('fs');const path=require('path');
const BASE='http://localhost:8765/';
async function setup(){const b=await chromium.launch({proxy:{server:process.env.HTTPS_PROXY,bypass:'localhost'}});
 const ctx=await b.newContext({viewport:{width:390,height:844},deviceScaleFactor:2,hasTouch:false,locale:'pt-BR',timezoneId:'America/Sao_Paulo'});
 const page=await ctx.newPage();page.on('pageerror',e=>console.log('PERR',e.message));return {b,ctx,page};}
class Rec{constructor(page,name,outRoot){this.page=page;this.name=name;this.dir=path.join(outRoot,name);fs.rmSync(this.dir,{recursive:true,force:true});fs.mkdirSync(this.dir,{recursive:true});this.frames=[];this.events=[];}
 async start(){this.cdp=await this.page.context().newCDPSession(this.page);this.cdp.on('Page.screencastFrame',async f=>{const i=this.frames.length;const fn=path.join(this.dir,`f${String(i).padStart(5,'0')}.jpg`);fs.writeFileSync(fn,Buffer.from(f.data,'base64'));this.frames.push({fn,t:f.metadata.timestamp});try{await this.cdp.send('Page.screencastFrameAck',{sessionId:f.sessionId})}catch(e){}});
  await this.cdp.send('Page.startScreencast',{format:'jpeg',quality:92,maxWidth:780,maxHeight:1688,everyNthFrame:1});this.t0=Date.now()/1000;}
 now(){return Date.now()/1000-this.t0}
 mark(type,data={}){this.events.push({type,t:this.now(),...data})}
 async stop(){await this.page.waitForTimeout(300);await this.cdp.send('Page.stopScreencast');
  // force a final frame time
  const fr=this.frames;const t0=fr[0].t;const list=[];for(let i=0;i<fr.length;i++){const d=i<fr.length-1?fr[i+1].t-fr[i].t:1/30;list.push(`file '${fr[i].fn}'\nduration ${Math.max(d,0.001).toFixed(4)}`)}
  list.push(`file '${fr[fr.length-1].fn}'`);fs.writeFileSync(path.join(this.dir,'list.txt'),list.join('\n'));
  const offset=t0-this.t0; // screencast t is epoch seconds
  fs.writeFileSync(path.join(this.dir,'events.json'),JSON.stringify({offset,events:this.events.map(e=>({...e,t:e.t-offset})),dur:fr[fr.length-1].t-t0},null,1));
  console.log(this.name,'frames',fr.length,'dur',(fr[fr.length-1].t-t0).toFixed(2));}
}
// helpers
async function smoothScrollTo(page,y,ms=1200){await page.evaluate(([y,ms])=>new Promise(r=>{const s=window.scrollY,d=y-s,t0=performance.now();const e=t=>t<.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2;function f(n){const p=Math.min(1,(n-t0)/ms);window.scrollTo(0,s+d*e(p));p<1?requestAnimationFrame(f):r()}requestAnimationFrame(f)}),[y,ms]);}
async function scrollToEl(page,sel,offset=0,ms=1200){const y=await page.evaluate(([sel,o])=>{const el=typeof sel==='string'?document.querySelector(sel):null;return el.getBoundingClientRect().top+window.scrollY-o},[sel,offset]);await smoothScrollTo(page,y,ms);}
async function tap(page,rec,locator,pause=350){let bb=await locator.boundingBox();const H=844;if(bb.y<70||bb.y+bb.height>H-90){await smoothScrollTo(page,await page.evaluate(()=>scrollY)+bb.y-H*0.55,900);await page.waitForTimeout(250);bb=await locator.boundingBox();}const x=bb.x+bb.width/2,y=bb.y+bb.height/2;rec.mark('tap',{x,y});await page.mouse.move(x,y);await page.waitForTimeout(pause);await page.mouse.down();await page.waitForTimeout(90);await page.mouse.up();}
async function typeSlow(page,rec,locator,text){await tap(page,rec,locator,250);await page.keyboard.type(text,{delay:55});}
module.exports={setup,Rec,BASE,smoothScrollTo,scrollToEl,tap,typeSlow};
