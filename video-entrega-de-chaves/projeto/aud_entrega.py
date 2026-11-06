import numpy as np, wave, runpy, sys
src=open(sys.argv[1]).read().split("cues=[")[0]  # reuse synth helpers from promo script
g={}; exec(src.replace("TOTAL=15.0","TOTAL=32.4"),g)
SR=g["SR"]; TOTAL=32.4
whoosh,pop,bell,chime,thump,write,t_,env,lp,rng=[g[k] for k in "whoosh pop bell chime thump write t_ env lp rng".split()]
def jingle(gn=0.22):
    out=np.zeros(int(0.9*SR))
    for i,f in enumerate([3520,4186,3951,4699,3729,4435]):
        b=bell(f,0.35,gn*(0.85**i)); o=int(i*0.045*SR+ (i%2)*0.012*SR); out[o:o+len(b)]+=b[:len(out)-o]
    return out
def riser(d=1.4):
    t=t_(d); f=300*(2**(t*2/d)); return np.sin(2*np.pi*np.cumsum(f)/SR)*(t/d)**2*0.12
cues=[(0.0,whoosh(0.6,False,0.35)),(0.05,chime(0.18)),
 (4.4,chime(0.22)),(4.5,whoosh(0.4,True,0.25)),(5.57,whoosh(0.35,True,0.3)),(7.1,pop(0.3)),
 (8.4,pop(0.3)),(9.6,pop(0.3)),(9.62,jingle()),(10.98,pop(0.3)),
 (12.92,thump(0.45)),(12.92,chime(0.3)),(12.95,whoosh(0.5,True,0.3)),(14.62,chime(0.16)),(14.62,pop(0.25)),
 (18.5,pop(0.3)),(19.65,pop(0.3)),(21.32,pop(0.3)),(21.55,riser()),(22.95,bell(2093,0.9,0.2)),
 (26.3,pop(0.3)),(26.45,chime(0.2)),(28.02,chime(0.2)),
 (28.95,whoosh(0.7,True,0.4)),(29.2,jingle(0.25)),(30.25,pop(0.35)),(30.3,bell(1568,1.2,0.18)),(31.2,chime(0.14))]
n=int(TOTAL*SR); sfx=np.zeros(n+SR)
for at,x in cues:
    i=int(at*SR); sfx[i:i+len(x)]+=x[:len(sfx)-i]
sfx=sfx[:n]; sfx/=max(1.0,np.abs(sfx).max()/0.9); write("sfx.wav",sfx)
# --- music: slow, warm, emotional (72 bpm) Fmaj7 - Am7 - Dm7 - Bbmaj7 ---
BPM=72; beat=60/BPM; bar=beat*4
mus=np.zeros((n,2))
def mt(m): return 440*2**((m-69)/12)
def pad(f,d):
    t=t_(d); x=sum(np.sin(2*np.pi*f*(1+dt)*t+ph) for dt,ph in [(-.003,0),(0,1.1),(.003,2.4)])/3
    return (x+0.2*np.sin(2*np.pi*2*f*t))*env(len(t),0.9,1.2)
def piano(f,d=2.2):
    t=t_(d); x=sum(a*np.sin(2*np.pi*f*h*t)*np.exp(-t*(1.6+h*0.9)) for h,a in [(1,1),(2,0.45),(3,0.18),(4,0.08)])
    return x*env(len(t),0.006,0.3)
def bass(f,d):
    t=t_(d); return np.sin(2*np.pi*f*t)*env(len(t),0.05,0.4)*np.exp(-t*0.6)
def put(x,at,gn,pan=0.0):
    i=int(at*SR)
    if i>=n: return
    x=x[:n-i]; mus[i:i+len(x),0]+=x*gn*(1-pan); mus[i:i+len(x),1]+=x*gn*(1+pan)
prog=[(41,[57,60,64,65]),(45,[55,60,64,69]),(38,[57,60,62,65]),(46,[57,62,65,70])]
tb=0.0;k=0
while tb<TOTAL:
    root,ch=prog[k%4]
    for m in ch[:3]: put(pad(mt(m),bar+1.0),tb,0.09)
    put(bass(mt(root),bar),tb,0.22)
    pat=[0,2,3,2,1,2,3,2]
    for j in range(8):
        put(piano(mt(ch[pat[j]]+12)),tb+j*beat/2,0.075 if j%2 else 0.1,pan=0.25 if j%2 else -0.25)
    tb+=bar;k+=1
fade=np.ones(n); fi=int(1.2*SR); fade[:fi]=np.linspace(0.2,1,fi); fo=int(2.0*SR); fade[-fo:]=np.linspace(1,0,fo)**1.3
mus*=fade[:,None]; mus/=np.abs(mus).max()/0.8; write("music.wav",mus); print("ok")
