const L=require('./lib');const OUT=process.argv[2];const SHOT=process.argv[3]||'';
(async()=>{const {b,page}=await L.setup();const W=ms=>page.waitForTimeout(ms);
const shot=async n=>{if(SHOT)await page.screenshot({path:SHOT+'/dbg_'+n+'.png'})};
await page.goto(L.BASE+'site.html');
// A intro + hero
let r=new L.Rec(page,'a_intro',OUT);await r.start();await W(6200);await r.stop();await shot('a');
// B catalog
r=new L.Rec(page,'b_catalog',OUT);await r.start();await W(300);
await L.scrollToEl(page,'#catalogo',0,1700);await W(700);await shot('b1');
await L.tap(page,r,page.getByRole('tab',{name:'Nagô & Fulani'}));await W(1300);await shot('b2');
await L.smoothScrollTo(page,await page.evaluate(()=>window.scrollY+260),900);await W(400);
await L.tap(page,r,page.locator('[data-card][aria-label="Ver Fulani com cachos"]'));await W(1700);await shot('b3');
await L.tap(page,r,page.getByRole('button',{name:'Quero este estilo'}));await W(2200);await shot('b4');await r.stop();
// C booking
r=new L.Rec(page,'c_booking',OUT);await r.start();await W(300);
const cal=page.getByRole('button',{name:'Qui, 12 de Novembro',exact:true});
await L.smoothScrollTo(page,await page.evaluate(()=>{const e=[...document.querySelectorAll('button')].find(b=>/Próximo mês/.test(b.getAttribute('aria-label')||''));return e.getBoundingClientRect().top+scrollY-120}),1300);await W(500);await shot('c1');
await L.tap(page,r,cal);await W(900);
await L.smoothScrollTo(page,await page.evaluate(()=>{const e=document.querySelector('[data-slot]');return e.getBoundingClientRect().top+scrollY-200}),1000);await W(500);await shot('c2');
await L.tap(page,r,page.locator('[data-slot][aria-label="09:00"]'));await W(700);
await L.smoothScrollTo(page,await page.evaluate(()=>{const e=document.querySelector('input[placeholder="Seu nome"]');return e.getBoundingClientRect().top+scrollY-220}),1000);await W(300);
await L.typeSlow(page,r,page.locator('input[placeholder="Seu nome"]'),'Ana Paula');await W(200);
await L.typeSlow(page,r,page.locator('input[type=tel]'),'11981234567');await W(300);await shot('c3');
await page.locator('input[type=tel]').blur();
await L.smoothScrollTo(page,await page.evaluate(()=>{const e=[...document.querySelectorAll('button')].find(b=>b.textContent.trim()==='Confirmar agendamento');return e.getBoundingClientRect().top+scrollY-560}),1300);await W(700);await shot('c4');
await L.tap(page,r,page.getByRole('button',{name:'Confirmar agendamento'}));await W(600);
await L.smoothScrollTo(page,await page.evaluate(()=>{const e=[...document.querySelectorAll('h3')].find(b=>/Pedido recebido/.test(b.textContent));return e?e.getBoundingClientRect().top+scrollY-200:scrollY}),900);await W(2200);await shot('c5');await r.stop();
// D como funciona
r=new L.Rec(page,'d_como',OUT);await r.start();await L.scrollToEl(page,'#como',0,1400);await W(600);await shot('d1');
await L.smoothScrollTo(page,await page.evaluate(()=>scrollY+300),900);await W(300);
await page.evaluate(()=>new Promise(res=>{const tr=[...document.querySelectorAll('#como *')].find(e=>e.scrollWidth>e.clientWidth+50&&getComputedStyle(e).overflowX!='visible');if(!tr)return res();tr.style.scrollSnapType='none';const s=tr.scrollLeft,d=tr.scrollWidth-tr.clientWidth,t0=performance.now();function f(n){const p=Math.min(1,(n-t0)/3200);const e=p<.5?4*p*p*p:1-Math.pow(-2*p+2,3)/2;tr.scrollLeft=s+d*e;p<1?requestAnimationFrame(f):res()}requestAnimationFrame(f)}));await W(400);await shot('d2');await r.stop();
// E salao
r=new L.Rec(page,'e_salao',OUT);await r.start();await L.scrollToEl(page,'#salao',0,1500);await W(400);await L.smoothScrollTo(page,await page.evaluate(()=>scrollY+700),1800);await W(400);await shot('e1');
await L.smoothScrollTo(page,await page.evaluate(()=>document.body.scrollHeight),1800);await W(900);await shot('e2');await r.stop();
// F conta
await page.goto(L.BASE+'conta.html');await W(100);
r=new L.Rec(page,'f_conta',OUT);await r.start();await W(2300);await shot('f1');
await L.tap(page,r,page.getByRole('button',{name:'Entrar',exact:true}).last());await W(2300);await shot('f2');
await L.smoothScrollTo(page,await page.evaluate(()=>scrollY+420),1200);await W(1200);await shot('f3');
await L.tap(page,r,page.getByRole('tab',{name:'Histórico'}));await W(1800);await shot('f4');await r.stop();
// G admin
await page.goto(L.BASE+'admin.html');await W(100);
r=new L.Rec(page,'g_admin',OUT);await r.start();await W(1500);await shot('g1');
await L.tap(page,r,page.getByRole('button',{name:'Entrar no painel'}));await W(2200);await shot('g2');
await L.smoothScrollTo(page,await page.evaluate(()=>scrollY+520),1300);await W(900);await shot('g3');
const blk=page.locator('[data-block]').filter({hasText:'Bianca'}).first();
if(await blk.count()){await L.tap(page,r,blk);await W(1500);await shot('g4');
 await L.tap(page,r,page.getByRole('button',{name:'Marcar sinal como pago'}));await W(1800);await shot('g5');}
await r.stop();
await b.close();})();
