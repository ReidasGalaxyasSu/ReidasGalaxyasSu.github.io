import os,shutil,json,sys
H=sys.argv[1]
HEAD='''<!doctype html><html lang="pt-BR" data-resolution="portrait"><head><meta charset="UTF-8"/><meta name="viewport" content="width=1080, height=1920"/>
<script src="./gsap.min.js"></script><style>
@font-face{font-family:IS;src:url(./instrument-serif-latin-400-normal.woff2) format('woff2')}
@font-face{font-family:IS;font-style:italic;src:url(./instrument-serif-latin-400-italic.woff2) format('woff2')}
@font-face{font-family:IN;font-weight:400;src:url(./inter-latin-400-normal.woff2) format('woff2')}
@font-face{font-family:IN;font-weight:500;src:url(./inter-latin-500-normal.woff2) format('woff2')}
@font-face{font-family:IN;font-weight:600;src:url(./inter-latin-600-normal.woff2) format('woff2')}
@font-face{font-family:IN;font-weight:700;src:url(./inter-latin-700-normal.woff2) format('woff2')}
*{margin:0;padding:0;box-sizing:border-box}
html,body{width:1080px;height:1920px;overflow:hidden;background:transparent}
#root{position:relative;width:1080px;height:1920px;color:#F5F3EE;font-family:IN,sans-serif}
.k{font:600 30px/1 IN;letter-spacing:.32em;text-transform:uppercase;color:#A9D9AE}
.s{font-family:IS;font-weight:400;letter-spacing:-.025em;line-height:.95}
.m{overflow:hidden;display:block;padding-bottom:.06em}
.m>span{display:inline-block}
.it{font-style:italic;color:#A9D9AE}
.abs{position:absolute;left:0;right:0;text-align:center}
</style></head><body>
<div id="root" data-composition-id="main" data-start="0" data-duration="DUR" data-width="1080" data-height="1920">
'''
TAIL='''</div><script>
const tl=gsap.timeline({paused:true});
SCRIPT
window.__timelines=window.__timelines||{};window.__timelines["main"]=tl;tl.seek(0);
</script></body></html>'''
cards={
'opener':(4.0,'''
<div class="abs clip" data-start="0" data-duration="4" style="top:1180px">
 <div class="k" id="k">Apresentando</div>
 <div class="s" style="font-size:150px;margin-top:40px"><span class="m"><span id="l1">O novo site da</span></span><span class="m"><span id="l2" class="it">Jey's Hair</span></span></div>
 <div id="sub" style="margin-top:44px;font:500 34px/1.4 IN;color:#DCE4DA">Catálogo · Agendamento · Painel</div>
</div>''','''
tl.fromTo('#k',{opacity:0,letterSpacing:'0.8em'},{opacity:1,letterSpacing:'0.32em',duration:1.2,ease:'expo.out'},0.5);
tl.fromTo('#l1',{yPercent:115},{yPercent:0,duration:1.2,ease:'expo.out'},0.8);
tl.fromTo('#l2',{yPercent:115},{yPercent:0,duration:1.2,ease:'expo.out'},0.95);
tl.fromTo('#sub',{opacity:0,y:30},{opacity:1,y:0,duration:1,ease:'expo.out'},1.4);
tl.to(['#k','#sub'],{opacity:0,duration:.35,ease:'power2.in'},3.55);
tl.to(['#l1','#l2'],{yPercent:-115,duration:.5,ease:'expo.in',stagger:.05},3.45);
'''),
'sinal':(4.0,'''
<div class="abs clip" data-start="0" data-duration="4" style="top:620px">
 <div class="k" id="k">Sinal garantido</div>
 <div class="s" style="font-size:138px;margin-top:50px"><span class="m"><span id="l1">Menos faltas.</span></span><span class="m"><span id="l2" class="it">Mais faturamento.</span></span></div>
 <div id="sub" style="margin:56px auto 0;max-width:820px;font:500 38px/1.45 IN;color:#DCE4DA">O horário só fica reservado depois do sinal — e você confirma com um toque.</div>
</div>''','''
tl.fromTo('#k',{opacity:0,y:20},{opacity:1,y:0,duration:.8,ease:'expo.out'},0.05);
tl.fromTo('#l1',{yPercent:115,rotation:4},{yPercent:0,rotation:0,duration:1.1,ease:'expo.out'},0.15);
tl.fromTo('#l2',{yPercent:115,rotation:4},{yPercent:0,rotation:0,duration:1.1,ease:'expo.out'},0.32);
tl.fromTo('#sub',{opacity:0,y:30},{opacity:1,y:0,duration:.9,ease:'expo.out'},0.7);
tl.to(['#k','#sub'],{opacity:0,duration:.3},3.65);
tl.to(['#l1','#l2'],{yPercent:-115,duration:.45,ease:'expo.in',stagger:.05},3.5);
'''),
'beneficios':(3.0,'''
<div class="abs clip" data-start="0" data-duration="3" style="top:470px">
 <div class="k" id="k">O que muda para você</div>
 <div style="margin:70px auto 0;width:900px;text-align:left;display:flex;flex-direction:column;gap:34px">
 ROWS
 </div>
</div>''','''
tl.fromTo('#k',{opacity:0,y:20},{opacity:1,y:0,duration:.8,ease:'expo.out'},0.05);
tl.fromTo('.row',{opacity:0,x:-80},{opacity:1,x:0,duration:.9,stagger:.25,ease:'expo.out'},0.2);
tl.fromTo('.chk',{scale:0},{scale:1,duration:.6,stagger:.25,ease:'back.out(2.2)'},0.35);
tl.to(['#k','.row'],{opacity:0,y:-30,duration:.35,stagger:.04,ease:'power2.in'},2.6);
'''),
'final':(6.0,'''
<div class="abs clip" data-start="0" data-duration="6" style="top:1060px">
 <div class="s" style="font-size:118px"><span class="m"><span id="l1">Você pode ter</span></span><span class="m"><span id="l2">o cabelo que <i class="it">quiser.</i></span></span></div>
 <div id="cta" style="margin:70px auto 0;display:inline-flex;align-items:center;gap:18px;height:104px;padding:0 48px;border-radius:999px;background:#3F7A47;border:1px solid rgba(255,255,255,.3);box-shadow:0 20px 50px rgba(0,0,0,.35),inset 0 1px 0 rgba(255,255,255,.35);font:600 38px/1 IN">Seu site está pronto <span style="font-size:44px">→</span></div>
 <div id="url" style="margin-top:40px;font:500 30px/1 IN;color:#A9D9AE;letter-spacing:.04em">reidasgalaxyassu.github.io/jeys-hair</div>
</div>''','''
tl.fromTo('#l1',{yPercent:115},{yPercent:0,duration:1.3,ease:'expo.out'},0.55);
tl.fromTo('#l2',{yPercent:115},{yPercent:0,duration:1.3,ease:'expo.out'},0.7);
tl.fromTo('#cta',{opacity:0,y:40,scale:.9},{opacity:1,y:0,scale:1,duration:1,ease:'expo.out'},1.35);
tl.fromTo('#url',{opacity:0},{opacity:1,duration:.8},1.8);
'''),
}
rows=[('Vende 24h','mesmo enquanto você está trançando'),('Agenda organizada','sem conflito de horário'),('Menos WhatsApp','as clientes se resolvem sozinhas')]
R=''.join(f'<div class="row" style="display:flex;align-items:center;gap:34px;padding:34px 40px;border-radius:44px;background:rgba(28,58,37,.72);border:1px solid rgba(245,243,238,.16)"><div class="chk" style="flex:none;width:84px;height:84px;border-radius:999px;background:#A9D9AE;color:#15301D;display:flex;align-items:center;justify-content:center;font:700 44px/1 IN">✓</div><div><div class="s" style="font-size:76px">{a}</div><div style="margin-top:10px;font:500 32px/1.3 IN;color:#DCE4DA">{b}</div></div></div>' for a,b in rows)
for name,(dur,body,script) in cards.items():
    d=os.path.join(H,'c_'+name);os.makedirs(d,exist_ok=True)
    for f in os.listdir(os.path.join(H,'shared')):shutil.copy(os.path.join(H,'shared',f),d)
    shutil.copy(os.path.join(H,'cards','hyperframes.json'),d)
    open(os.path.join(d,'index.html'),'w').write(HEAD.replace('DUR',str(dur))+body.replace('ROWS',R)+TAIL.replace('SCRIPT',script))
