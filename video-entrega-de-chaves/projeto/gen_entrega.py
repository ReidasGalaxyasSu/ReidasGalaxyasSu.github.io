"""Generate the HyperFrames composition for the key-delivery reel.
usage: python3 -I gen_entrega.py <timeline.json> <out index.html>"""
import json, sys, math, re

tl = json.load(open(sys.argv[1]))
VID = 29.0          # edited footage length
OUT_LEN = 3.4       # end card
TOTAL = round(VID + OUT_LEN, 2)

# ---------- caption text fixes (whisper -> what is said) ----------
FIX = {"vem": "vai", "Rosanna.": "Rosana!", "certo,": "sucesso,", "me": "não", "tem": "têm"}
words = []
for w in tl["words"]:
    t = FIX.get(w["t"], w["t"])
    words.append({**w, "t": t})
for i, w in enumerate(words):  # "a chaves" -> "as chaves"
    if w["t"] == "a" and i + 1 < len(words) and words[i + 1]["t"].startswith("chaves"):
        w["t"] = "as"
    if w["t"] == "Muito" and i + 1 < len(words) and words[i + 1]["t"] == "sucesso,":
        # whisper gave both words zero length at 15.37; spread them over the gap
        w["s"], w["e"] = 15.27, 15.47
        words[i + 1]["s"], words[i + 1]["e"] = 15.47, 15.67
GOLDW = {"cliente", "sonho", "realizado", "antonella", "mimo", "presente", "chaves", "chocolatinho", "parabéns",
         "rosana", "felicidade", "sucesso", "parceria", "paciência", "paciente", "imóveis", "comprar"}

chunks, cur = [], []
for i, w in enumerate(words):
    cur.append(w)
    nxt = words[i + 1] if i + 1 < len(words) else None
    ln = sum(len(x["t"]) + 1 for x in cur)
    brk = (w["t"][-1] in ",.?!" and ln > 6) or ln >= 17 or len(cur) >= 4 or (nxt and nxt["s"] - w["e"] > 0.35)
    if nxt and not brk and ln + len(nxt["t"]) > 20:
        brk = True
    if brk or not nxt:
        chunks.append(cur); cur = []
caps = []
for i, c in enumerate(chunks):
    s = c[0]["s"] - 0.04
    e = c[-1]["e"] + 0.25
    if i + 1 < len(chunks):
        e = min(e, chunks[i + 1][0]["s"] - 0.04)
    e = min(e, VID - 0.05)
    caps.append((round(s, 3), round(max(e, s + 0.3), 3), c))

# ---------- icons ----------
def ico(name, color="#d6b46a", size=46, sw=2.2):
    paths = {
        "house": '<path d="M3 11l9-7 9 7"/><path d="M5 10v10h14V10"/><path d="M10 20v-5h4v5"/>',
        "key": '<circle cx="8" cy="15" r="4"/><path d="M11 12l9-9M16 7l3 3M14 9l2 2"/>',
        "gift": '<rect x="3" y="9" width="18" height="12" rx="1.5"/><path d="M3 13h18M12 9v12"/><path d="M12 9C9 9 7 7.5 8 6s4 .5 4 3c0-2.5 3-4.5 4-3s-1 3-4 3z"/>',
        "choco": '<rect x="5" y="3" width="14" height="18" rx="2"/><path d="M5 9h14M5 15h14M12 3v18"/>',
        "check": '<path d="M4 12.5l5 5L20 6.5"/>',
        "heart": '<path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z"/>',
        "hands": '<path d="M2 12l4-4 4 3 3-3 4 1 5 3"/><path d="M6 14l3 3c.8.8 2 .8 2.8 0l4.2-4.2"/><path d="M9 11l3 3"/>',
        "clock": '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
        "send": '<path d="M22 2L11 13"/><path d="M22 2l-7 20-4-9-9-4 20-7z"/>',
    }
    return (f'<svg width="{size}" height="{size}" viewBox="0 0 24 24" fill="none" stroke="{color}" stroke-width="{sw}" '
            f'stroke-linecap="round" stroke-linejoin="round">{paths[name]}</svg>')

SPARK = '<svg viewBox="-10 -10 20 20" width="100%" height="100%"><path d="M0-10C1-3 3-1 10 0 3 1 1 3 0 10-1 3-3 1-10 0-3-1-1-3 0-10Z" fill="#f3d58f"/></svg>'

html_el, js = [], []
def clip(id_, start, dur, inner, style="", track=2, kind="graphics", extra=""):
    html_el.append(f'<div id="{id_}" class="clip" data-start="{start:.3f}" data-duration="{dur:.3f}" '
                   f'data-track-index="{track}" data-track-kind="{kind}" style="{style}" {extra}>{inner}</div>')

def pop_in(sel, at, y=30, scale=0.85, dur=0.45):
    js.append(f'tl.fromTo("{sel}",{{opacity:0,y:{y},scale:{scale}}},{{opacity:1,y:0,scale:1,duration:{dur},ease:"back.out(1.6)"}},{at:.3f});')
def fade_out(sel, at, dur=0.3, y=-16):
    js.append(f'tl.to("{sel}",{{opacity:0,y:{y},duration:{dur},ease:"power2.in"}},{at:.3f});')

CARD_X, CARD_Y, CARD_W = 40, 330, 1000

# ---------- header (frame 0 = thumbnail) ----------
clip("hdr", 0, VID, f'''
<div class="hdr-in">
  <div class="chip">{ico("key", "#0c1626", 34, 2.6)}<span>ENTREGA DE CHAVES</span></div>
  <div class="hdr-sub">Corretora <b>Antonella</b></div>
</div>''', "position:absolute;left:0;top:170px;width:1080px;", track=1)
js.append('tl.fromTo(".hdr-in .chip",{scale:1.08},{scale:1,duration:0.6,ease:"power3.out"},0);')

# ---------- stickers ----------
def badge(id_, a, b, inner, pos, tone="gold"):
    cls = "badge gold" if tone == "gold" else "badge navy"
    clip(id_, a, b - a, f'<div class="{cls}">{inner}</div>', f"position:absolute;{pos}")
    pop_in(f"#{id_} .badge", a + 0.02)
    fade_out(f"#{id_} .badge", b - 0.32)

# 1 sonho realizado (sonho @4.5)
badge("b_sonho", 4.40, 8.05, f'{ico("house", "#0c1626", 44, 2.4)}<span>SONHO<br>REALIZADO</span>{ico("check", "#0c1626", 40, 3)}',
      f"left:{CARD_X+600}px;top:{CARD_Y+40}px;")
# 2 lower third (Corretora Antonella @5.64)
clip("lt", 5.55, 2.55, '''<div class="lt"><div class="lt-bar"></div><div class="lt-txt"><div class="lt-name">Antonella</div>
<div class="lt-role">CORRETORA DE IMÓVEIS</div></div></div>''', f"position:absolute;left:{CARD_X+36}px;top:{CARD_Y+760}px;")
js.append('tl.fromTo("#lt .lt-bar",{scaleY:0},{scaleY:1,duration:0.35,ease:"power3.out"},5.57);')
js.append('tl.fromTo("#lt .lt-txt",{opacity:0,x:-40},{opacity:1,x:0,duration:0.5,ease:"power3.out"},5.7);')
js.append('tl.to("#lt .lt",{opacity:0,x:-30,duration:0.3,ease:"power2.in"},7.75);')
# 3 mimo (@7.2)
badge("b_mimo", 7.10, 8.15, f'{ico("gift", "#d6b46a", 44)}<span>UM MIMO</span>', f"left:{CARD_X+40}px;top:{CARD_Y+40}px;", tone="navy")
# 4 list: presente @8.45 / chaves @9.65 / chocolatinho @11.03
clip("lst", 8.30, 4.45, f'''<div class="lst">
  <div class="li" id="li1">{ico("gift", "#d6b46a", 40)}<span>O PRESENTE</span></div>
  <div class="li" id="li2">{ico("key", "#d6b46a", 40)}<span>AS CHAVES</span></div>
  <div class="li" id="li3">{ico("choco", "#d6b46a", 40)}<span>O CHOCOLATINHO</span></div></div>''',
     f"position:absolute;left:{CARD_X+36}px;top:{CARD_Y+36}px;")
for i, at in [(1, 8.40), (2, 9.60), (3, 10.98)]:
    js.append(f'tl.fromTo("#li{i}",{{opacity:0,x:-50}},{{opacity:1,x:0,duration:0.45,ease:"power3.out"}},{at});')
js.append('tl.fromTo("#li2 svg",{rotation:-35},{rotation:0,duration:0.9,ease:"elastic.out(1,0.4)"},9.62);')
js.append('tl.to("#lst .lst",{opacity:0,x:-40,duration:0.3,ease:"power2.in"},12.42);')
# 5 parabéns (@12.95) + confetti
conf = []
for k in range(36):
    ang = (k * 137.5) % 360
    r = 260 + (k * 53) % 240
    dx = math.cos(math.radians(ang)) * r
    dy = math.sin(math.radians(ang)) * r * 0.75 - 120
    col = ["#d6b46a", "#f3d58f", "#ffffff", "#e8a7a0"][k % 4]
    w = 10 + (k * 7) % 12
    conf.append((dx, dy, col, w, (k * 47) % 360))
cf = "".join(f'<i class="cf" id="cf{k}" style="background:{c};width:{w}px;height:{w*0.45:.0f}px"></i>' for k, (_, _, c, w, _) in enumerate(conf))
clip("parab", 12.88, 1.75, f'<div class="cfbox">{cf}</div><div class="parab">Parabéns, Rosana!</div>',
     f"position:absolute;left:0;top:{CARD_Y+70}px;width:1080px;height:600px;", extra="data-layout-allow-overlap")
js.append('tl.fromTo("#parab .parab",{opacity:0,scale:0.6,y:30},{opacity:1,scale:1,y:0,duration:0.55,ease:"back.out(1.8)"},12.92);')
js.append('tl.to("#parab .parab",{opacity:0,y:-20,duration:0.3},14.3);')
for k, (dx, dy, c, w, rot) in enumerate(conf):
    js.append(f'tl.fromTo("#cf{k}",{{x:0,y:0,opacity:1,rotation:0}},{{x:{dx:.0f},y:{dy:.0f},rotation:{rot+360},duration:0.9,ease:"power3.out"}},12.95);')
    js.append(f'tl.to("#cf{k}",{{y:{dy+160:.0f},opacity:0,duration:0.7,ease:"power1.in"}},13.85);')
# 6 hearts rising (felicidade @14.69..16.3)
hs = []
for k in range(9):
    x = 120 + (k * 97) % 760
    hs.append((x, 14.6 + k * 0.17, ["#f2a9b4", "#e8c56f", "#ffffff"][k % 3], 64 + (k * 17) % 40))
hh = "".join(f'<div class="hrt" id="h{k}" style="left:{x}px">' + ico("heart", c, s, 0).replace('fill="none"', f'fill="{c}"') + '</div>' for k, (x, _, c, s) in enumerate(hs))
clip("hearts", 14.55, 2.2, hh, f"position:absolute;left:{CARD_X}px;top:{CARD_Y}px;width:{CARD_W}px;height:{CARD_W}px;overflow:hidden;", extra="data-layout-allow-overlap")
for k, (x, at, c, s) in enumerate(hs):
    js.append(f'tl.fromTo("#h{k}",{{y:1000,opacity:0}},{{y:200,opacity:1,duration:1.2,ease:"power1.out"}},{at:.2f});')
    js.append(f'tl.to("#h{k}",{{y:40,opacity:0,duration:0.45}},{at+1.2:.2f});')
# felicidade chip
badge("b_feliz", 14.62, 16.3, f'{ico("heart", "#0c1626", 40, 2.4)}<span>MUITA FELICIDADE</span>', f"left:{CARD_X+40}px;top:{CARD_Y+40}px;")
# 7 parceria (@18.55) / paciência (@19.69)
clip("pp", 18.45, 2.85, f'''<div class="pp"><div class="li" id="pp1">{ico("hands", "#d6b46a", 42)}<span>PARCERIA</span></div>
<div class="li" id="pp2">{ico("clock", "#d6b46a", 42)}<span>PACIÊNCIA</span></div></div>''', f"position:absolute;left:{CARD_X+36}px;top:{CARD_Y+36}px;")
js.append('tl.fromTo("#pp1",{opacity:0,x:-50},{opacity:1,x:0,duration:0.45,ease:"power3.out"},18.5);')
js.append('tl.fromTo("#pp2",{opacity:0,x:-50},{opacity:1,x:0,duration:0.45,ease:"power3.out"},19.65);')
js.append('tl.to("#pp .pp",{opacity:0,x:-40,duration:0.3,ease:"power2.in"},21.0);')
# 8 patience meter (tão paciente @21.37 .. 23.9)
clip("meter", 21.30, 2.75, '''<div class="meter"><div class="m-lbl">NÍVEL DE PACIÊNCIA</div>
<div class="m-track"><div class="m-fill"></div></div><div class="m-pct"><span id="mpct">0</span>%</div></div>''',
     f"position:absolute;left:{CARD_X+40}px;top:{CARD_Y+40}px;")
pop_in("#meter .meter", 21.32)
js.append('tl.fromTo("#meter .m-fill",{scaleX:0},{scaleX:1,duration:1.4,ease:"power2.inOut"},21.55);')
js.append('const pc={v:0};tl.to(pc,{v:100,duration:1.4,ease:"power2.inOut",onUpdate:()=>{document.getElementById("mpct").textContent=Math.round(pc.v)}},21.55);')
js.append('tl.fromTo("#meter .m-pct",{scale:1},{scale:1.25,duration:0.15,yoyo:true,repeat:1},22.95);')
fade_out("#meter .meter", 23.75)
# 9 imóvel conquistado (comprar @26.41 / imóveis @26.81)
badge("b_imovel", 26.30, 28.95, f'{ico("house", "#0c1626", 46, 2.4)}<span>IMÓVEL<br>CONQUISTADO</span>{ico("key", "#0c1626", 40, 2.4)}',
      f"left:{CARD_X+560}px;top:{CARD_Y+40}px;")
# sparkle bursts
def burst(id_, at, cx, cy):
    sp = "".join(f'<div class="sp" id="{id_}s{k}">{SPARK}</div>' for k in range(8))
    clip(id_, at, 1.1, sp, f"position:absolute;left:{cx}px;top:{cy}px;width:1px;height:1px;", extra="data-layout-allow-overlap")
    for k in range(8):
        a = math.radians(k * 45 + 20); r = 90 + (k % 3) * 40
        js.append(f'tl.fromTo("#{id_}s{k}",{{x:0,y:0,scale:0,opacity:1}},{{x:{math.cos(a)*r:.0f},y:{math.sin(a)*r:.0f},scale:1,duration:0.5,ease:"power3.out"}},{at:.2f});')
        js.append(f'tl.to("#{id_}s{k}",{{scale:0,opacity:0,duration:0.4}},{at+0.55:.2f});')
burst("bs1", 4.50, CARD_X + 820, CARD_Y + 110)
burst("bs2", 26.45, CARD_X + 780, CARD_Y + 110)
burst("bs3", 28.02, 540, CARD_Y + 500)

# ---------- captions ----------
cap_html = []
for i, (s, e, c) in enumerate(caps):
    spans = "".join(f'<span class="w" id="c{i}w{j}">{w["t"].rstrip(",.")}</span> ' for j, w in enumerate(c))
    clip(f"cap{i}", s, e - s, f'<div class="cap">{spans}</div>', "position:absolute;left:60px;top:1372px;width:960px;", track=5, kind="captions")
    js.append(f'tl.fromTo("#cap{i} .cap",{{opacity:0,y:14}},{{opacity:1,y:0,duration:0.22,ease:"power2.out"}},{s:.3f});')
    for j, w in enumerate(c):
        key = re.sub(r"[^\wçãõáéíóúâêô]", "", w["t"].lower())
        col = "#d6b46a" if key in GOLDW else "#ffe9b8"
        js.append(f'tl.fromTo("#c{i}w{j}",{{color:"rgba(255,255,255,0.55)"}},{{color:"{col}",duration:0.08}},{w["s"]:.3f});')
        js.append(f'tl.to("#c{i}w{j}",{{color:"#ffffff",duration:0.15}},{max(w["e"], w["s"]+0.12):.3f});')

# ---------- outro ----------
clip("outro", VID, OUT_LEN, f'''
<img class="o-bg" src="assets/bg_last.jpg"/>
<div class="o-veil"></div>
<div class="o-in">
  <div class="o-key">{ico("key", "#d6b46a", 84, 1.8)}</div>
  <div class="o-t1">Seu sonho pode ser</div>
  <div class="o-t2">o próximo.</div>
  <div class="o-rule"></div>
  <div class="o-brand">Corretora <b>Antonella</b></div>
  <div class="o-cta">{ico("send", "#0c1626", 44, 2.6)}<span>FALE COMIGO NO DIRECT</span></div>
</div>''', "position:absolute;left:0;top:0;width:1080px;height:1920px;", track=6, extra="data-layout-allow-overlap")
O = VID
js += [f'tl.fromTo("#outro .o-veil",{{opacity:0}},{{opacity:1,duration:0.5}},{O:.2f});',
       f'tl.fromTo("#outro .o-bg",{{opacity:0,scale:1.1}},{{opacity:1,scale:1,duration:0.6,ease:"power2.out"}},{O:.2f});',
       f'tl.fromTo("#outro .o-key",{{opacity:0,rotation:-40,scale:0.6}},{{opacity:1,rotation:0,scale:1,duration:0.8,ease:"elastic.out(1,0.5)"}},{O+0.2:.2f});',
       f'tl.fromTo("#outro .o-t1",{{opacity:0,y:30}},{{opacity:1,y:0,duration:0.5,ease:"power3.out"}},{O+0.35:.2f});',
       f'tl.fromTo("#outro .o-t2",{{opacity:0,y:30}},{{opacity:1,y:0,duration:0.5,ease:"power3.out"}},{O+0.55:.2f});',
       f'tl.fromTo("#outro .o-rule",{{scaleX:0}},{{scaleX:1,duration:0.5,ease:"power2.out"}},{O+0.85:.2f});',
       f'tl.fromTo("#outro .o-brand",{{opacity:0}},{{opacity:1,duration:0.4}},{O+1.0:.2f});',
       f'tl.fromTo("#outro .o-cta",{{opacity:0,y:30,scale:0.85}},{{opacity:1,y:0,scale:1,duration:0.5,ease:"back.out(1.8)"}},{O+1.25:.2f});',
       f'tl.to("#outro .o-cta",{{scale:1.05,duration:0.25,yoyo:true,repeat:3,ease:"sine.inOut"}},{O+2.0:.2f});']

# card gentle camera: slow push-ins, soft punch on Parabéns
js += ['tl.fromTo("#cardcam",{scale:1.0},{scale:1.07,duration:8.15,ease:"none"},0);',
       'tl.to("#cardcam",{scale:1.0,duration:4.7,ease:"sine.inOut"},8.15);',
       'tl.to("#cardcam",{scale:1.06,duration:0.6,ease:"power2.out"},12.9);',
       'tl.to("#cardcam",{scale:1.0,duration:3.0,ease:"sine.inOut"},13.6);',
       'tl.to("#cardcam",{scale:1.08,duration:12.4,ease:"none"},16.6);',
       'tl.fromTo("#cardframe",{scale:1.03},{scale:1,duration:0.6,ease:"power3.out"},0);']

CSS = f"""
@font-face{{font-family:'Great Vibes';src:url('assets/fonts/great-vibes-latin-400-normal.woff2') format('woff2');}}
:root{{--gold:#d6b46a;--navy:#0c1626;--cream:#f6efe4}}
*{{margin:0;padding:0;box-sizing:border-box}}
html,body{{width:1080px;height:1920px;overflow:hidden;background:#0c1626}}
#root{{position:relative;width:1080px;height:1920px;font-family:'Montserrat',sans-serif;overflow:hidden}}
#bgv{{position:absolute;left:0;top:0;width:1080px;height:1920px;object-fit:cover}}
#veil{{position:absolute;inset:0;background:linear-gradient(180deg,rgba(12,22,38,0.55),rgba(12,22,38,0.25) 40%,rgba(12,22,38,0.7))}}
#cardframe{{position:absolute;left:{CARD_X}px;top:{CARD_Y}px;width:{CARD_W}px;height:{CARD_W}px;border-radius:34px;overflow:hidden;
  box-shadow:0 40px 90px rgba(0,0,0,0.55);}}
#cardcam{{position:absolute;inset:0;transform-origin:50% 40%}}
#cardv{{width:100%;height:100%;object-fit:cover}}
#cardline{{position:absolute;left:{CARD_X}px;top:{CARD_Y}px;width:{CARD_W}px;height:{CARD_W}px;border-radius:34px;border:3px solid rgba(214,180,106,0.85);pointer-events:none}}
.hdr-in{{display:flex;flex-direction:column;align-items:center;gap:12px}}
.chip{{display:flex;align-items:center;gap:14px;background:linear-gradient(180deg,#e6c983,#c9a24f);color:var(--navy);
  font-weight:800;font-size:36px;letter-spacing:4px;padding:14px 34px;border-radius:999px;box-shadow:0 12px 30px rgba(0,0,0,0.35)}}
.hdr-sub{{font-family:'Playfair Display',serif;font-size:40px;color:var(--cream);letter-spacing:1px}}
.hdr-sub b{{color:var(--gold);font-weight:700}}
.badge{{display:flex;align-items:center;gap:14px;padding:16px 26px;border-radius:22px;font-weight:800;font-size:30px;line-height:1.05;letter-spacing:1.5px;
  box-shadow:0 16px 36px rgba(0,0,0,0.4)}}
.badge.gold{{background:linear-gradient(180deg,#ecd18f,#c9a24f);color:var(--navy)}}
.badge.navy{{background:rgba(12,22,38,0.88);color:var(--cream);border:2px solid var(--gold)}}
.lt{{display:flex;align-items:stretch;gap:18px}}
.lt-bar{{width:8px;border-radius:4px;background:var(--gold);transform-origin:50% 100%}}
.lt-txt{{background:rgba(12,22,38,0.82);padding:14px 30px 16px;border-radius:14px}}
.lt-name{{font-family:'Playfair Display',serif;font-weight:700;font-size:56px;color:#fff;line-height:1}}
.lt-role{{font-weight:700;font-size:24px;letter-spacing:5px;color:var(--gold);margin-top:8px}}
.lst,.pp{{display:flex;flex-direction:column;gap:12px}}
.li{{display:flex;align-items:center;gap:14px;background:rgba(12,22,38,0.86);border:2px solid rgba(214,180,106,0.9);color:var(--cream);
  font-weight:800;font-size:32px;letter-spacing:2px;padding:12px 26px 12px 16px;border-radius:999px;width:max-content;box-shadow:0 12px 28px rgba(0,0,0,0.35)}}
.cfbox{{position:absolute;left:540px;top:120px;width:1px;height:1px}}
.cf{{position:absolute;display:block;border-radius:2px}}
.parab{{position:absolute;left:0;top:30px;width:1080px;text-align:center;font-family:'Great Vibes',cursive;font-size:132px;color:#fff;
  text-shadow:0 6px 30px rgba(0,0,0,0.6),0 0 2px rgba(0,0,0,0.5)}}
.hrt{{position:absolute;top:0;filter:drop-shadow(0 6px 12px rgba(0,0,0,0.45))}}
.meter{{background:rgba(12,22,38,0.88);border:2px solid var(--gold);border-radius:22px;padding:18px 26px;width:560px;box-shadow:0 16px 36px rgba(0,0,0,0.4)}}
.m-lbl{{color:var(--cream);font-weight:800;font-size:26px;letter-spacing:3px}}
.m-track{{margin-top:12px;height:22px;border-radius:12px;background:rgba(255,255,255,0.15);overflow:hidden}}
.m-fill{{height:100%;background:linear-gradient(90deg,#c9a24f,#f3d58f);transform-origin:0 50%}}
.m-pct{{margin-top:8px;color:var(--gold);font-weight:800;font-size:44px;transform-origin:0 50%}}
.sp{{position:absolute;left:-22px;top:-22px;width:44px;height:44px}}
.cap{{text-align:center;font-weight:800;font-size:66px;line-height:1.16;color:#fff;letter-spacing:-0.5px;
  text-shadow:0 4px 18px rgba(0,0,0,0.75),0 0 3px rgba(0,0,0,0.6)}}
.o-bg{{position:absolute;inset:0;width:1080px;height:1920px;object-fit:cover}}
.o-veil{{position:absolute;inset:0;background:radial-gradient(110% 70% at 50% 45%,rgba(16,30,52,0.82),rgba(8,14,26,0.96))}}
.o-in{{position:absolute;left:0;top:560px;width:1080px;text-align:center;display:flex;flex-direction:column;align-items:center}}
.o-t1{{font-family:'Playfair Display',serif;font-size:76px;color:var(--cream);margin-top:30px}}
.o-t2{{font-family:'Playfair Display',serif;font-style:italic;font-weight:700;font-size:104px;color:var(--gold);line-height:1.1}}
.o-rule{{width:180px;height:4px;background:var(--gold);margin:44px 0 30px;border-radius:2px}}
.o-brand{{font-family:'Playfair Display',serif;font-size:50px;color:#fff}}
.o-brand b{{color:var(--gold)}}
.o-cta{{margin-top:56px;display:flex;align-items:center;gap:16px;background:linear-gradient(180deg,#ecd18f,#c9a24f);color:var(--navy);
  font-weight:800;font-size:40px;letter-spacing:2px;padding:24px 46px;border-radius:999px;box-shadow:0 18px 44px rgba(0,0,0,0.5)}}
"""

doc = f"""<!doctype html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=1080, height=1920"/>
<script src="assets/gsap.min.js"></script>
<style>{CSS}</style>
</head>
<body>
<div id="root" data-composition-id="main" data-start="0" data-duration="{TOTAL}" data-width="1080" data-height="1920">
  <video id="bgv" class="clip" data-start="0" data-duration="{VID}" data-track-index="0" muted playsinline src="assets/bg.mp4"></video>
  <div id="veil"></div>
  <div id="cardframe"><div id="cardcam">
    <video id="cardv" class="clip" data-start="0" data-duration="{VID}" data-track-index="0" muted playsinline src="assets/card.mp4"></video>
  </div></div>
  <div id="cardline"></div>
  {"".join(html_el)}
  <audio id="mix" class="clip" data-start="0" data-duration="{TOTAL}" data-track-index="9" src="assets/mix.wav"></audio>
</div>
<script>
const tl = gsap.timeline({{ paused: true }});
{chr(10).join(js)}
window.__timelines["main"] = tl;
tl.seek(0);
</script>
</body>
</html>"""
open(sys.argv[2], "w").write(doc)
print("total", TOTAL, "captions", len(caps))
for s, e, c in caps:
    print(f"{s:6.2f}-{e:6.2f}", " ".join(w["t"] for w in c))
