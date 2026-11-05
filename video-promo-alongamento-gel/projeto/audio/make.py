import numpy as np, wave
SR=48000; TOTAL=15.0; rng=np.random.default_rng(3)
def write(p,x):
    x=np.clip(x,-1,1); st=np.stack([x,x],1) if x.ndim==1 else x
    with wave.open(p,"wb") as w:
        w.setnchannels(2); w.setsampwidth(2); w.setframerate(SR); w.writeframes((st*32767).astype(np.int16).tobytes())
def t_(d): return np.arange(int(d*SR))/SR
def env(n,a,r):
    e=np.ones(n); ai=int(a*SR); ri=int(r*SR)
    if ai: e[:ai]=np.linspace(0,1,ai)
    if ri: e[-ri:]*=np.linspace(1,0,ri)**2
    return e
def lp(x,a):
    y=np.empty_like(x); acc=0.0
    for i,v in enumerate(x): acc+=a*(v-acc); y[i]=acc
    return y
def band(d,f0,f1):
    n=int(d*SR); x=rng.standard_normal(n); f=np.linspace(f0,f1,n); y=np.zeros(n); y1=y2=0.0; r=0.985
    for i in range(n):
        th=2*np.pi*f[i]/SR; v=x[i]+2*r*np.cos(th)*y1-r*r*y2; y2,y1=y1,v; y[i]=v
    return y/(np.abs(y).max()+1e-9)
def whoosh(d=0.5,up=True,g=0.5):
    x=band(d,*( (300,3000) if up else (3000,300) )); return x*np.sin(np.linspace(0,np.pi,len(x)))**1.6*g
def pop(g=0.5):
    t=t_(0.09); f=900*np.exp(-t*30)+380; return np.sin(2*np.pi*np.cumsum(f)/SR)*np.exp(-t*45)*g
def tick(g=0.35):
    t=t_(0.04); return np.sin(2*np.pi*2400*t)*np.exp(-t*140)*g
def bell(f=1318.5,d=1.1,g=0.3):
    t=t_(d); x=sum(a*np.sin(2*np.pi*f*m*t)*np.exp(-t*k) for a,m,k in [(1,1,4),(.5,2.0,7),(.25,3.01,11),(.12,4.2,15)])
    return x*g*env(len(t),0.002,0.08)
def chime(g=0.28):  # rising sparkle arpeggio
    out=np.zeros(int(1.4*SR))
    for i,f in enumerate([1568,1976,2349,3136]):
        b=bell(f,0.8,g*(0.9**i)); o=int(i*0.07*SR); out[o:o+len(b)]+=b[:len(out)-o]
    return out
def thump(g=0.7):
    t=t_(0.4); f=95*np.exp(-t*7)+42; return np.sin(2*np.pi*np.cumsum(f)/SR)*np.exp(-t*7)*g
def swipe(g=0.5): return whoosh(0.2,True,g)
def ding2(g=0.4):
    out=np.zeros(int(1.0*SR))
    for i,f in enumerate([1174.7,1568]):
        b=bell(f,0.7,g); o=int(i*0.12*SR); out[o:o+len(b)]+=b[:len(out)-o]
    return out
def brush(g=0.25): return whoosh(0.8,True,g)*np.linspace(0.3,1,int(0.8*SR))

cues=[(0.0,whoosh(0.5,False,0.5)),(0.0,chime()),(0.15,brush()),(0.75,pop()),(1.7,pop(0.35)),
(3.0,whoosh(0.45,True,0.5)),(3.05,pop()),(3.6,swipe()),
(5.0,thump()),(5.0,bell(1568,1.2,0.35)),(5.15,chime(0.32)),
(7.2,whoosh(0.45,True,0.5)),(7.35,pop()),(8.2,pop(0.4)),(8.25,bell(1318.5,0.9,0.18)),
(10.6,whoosh(0.45,True,0.5)),(10.7,pop()),(11.2,pop()),(11.2,ding2()),(11.9,pop(0.35)),(12.6,pop(0.35)),(14.3,chime(0.3))]
# counting ticks 4.0 -> 5.0, decelerating
for k in range(16):
    cues.append((4.0+ (1-(1-k/15)**2)*0.95, tick(0.3)))
sfx=np.zeros(int(TOTAL*SR)+SR)
for at,x in cues:
    i=int(at*SR); sfx[i:i+len(x)]+=x[:len(sfx)-i]
sfx=sfx[:int(TOTAL*SR)]; sfx/=max(1.0,np.abs(sfx).max()/0.9); write("sfx.wav",sfx)

# music: soft, warm, elegant, 90 bpm; Cmaj7 - Am7 - Fmaj7 - G6
BPM=90; beat=60/BPM; bar=beat*4
n=int(TOTAL*SR); mus=np.zeros((n,2))
def mt(m): return 440*2**((m-69)/12)
def pad(f,d):
    t=t_(d); x=sum(np.sin(2*np.pi*f*(1+dt)*t+ph) for dt,ph in [(-.004,0),(0,1.3),(.004,2.2)])/3
    x+=0.25*np.sin(2*np.pi*2*f*t); return x*env(len(t),0.5,0.8)
def pluck(f,d=0.9):
    t=t_(d); x=np.sin(2*np.pi*f*t)+0.3*np.sin(2*np.pi*2*f*t)+0.1*np.sin(2*np.pi*3*f*t); return x*np.exp(-t*5)*env(len(t),0.004,0.05)
def bass(f,d):
    t=t_(d); return (np.sin(2*np.pi*f*t)+0.15*np.sin(2*np.pi*2*f*t))*env(len(t),0.02,0.2)
def put(x,at,g,pan=0.0):
    i=int(at*SR)
    if i>=n: return
    x=x[:n-i]; mus[i:i+len(x),0]+=x*g*(1-pan); mus[i:i+len(x),1]+=x*g*(1+pan)
prog=[(48,[60,64,67,71]),(45,[60,64,67,72]),(41,[60,65,69,72]),(43,[59,62,67,69])]
tb=0.0;k=0
while tb<TOTAL:
    root,ch=prog[k%4]
    for m in ch[:3]: put(pad(mt(m),bar+0.6),tb,0.10)
    put(bass(mt(root),bar),tb,0.26)
    for j in range(8):
        m=ch[[0,2,1,3,2,1,3,2][j]]+12
        put(pluck(mt(m)),tb+j*beat/2,0.07,pan=0.35 if j%2 else -0.35)
    for j in range(4):  # soft pulse
        kt=t_(0.22); kick=np.sin(2*np.pi*np.cumsum(52*np.exp(-kt*16)+42)/SR)*np.exp(-kt*13); put(kick,tb+j*beat,0.18)
        sh=rng.standard_normal(int(0.05*SR)); sh=(sh-lp(sh,0.5))*np.exp(-t_(0.05)*70); put(sh,tb+j*beat+beat/2,0.05,pan=0.4)
    tb+=bar;k+=1
fade=np.ones(n); fi=int(0.4*SR); fade[:fi]=np.linspace(0.5,1,fi); fo=int(1.5*SR); fade[-fo:]=np.linspace(1,0,fo)**1.4
mus*=fade[:,None]; mus/=np.abs(mus).max()/0.8; write("music.wav",mus); print("ok")
