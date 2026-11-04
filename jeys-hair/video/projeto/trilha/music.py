import numpy as np, json, sys, wave
S=sys.argv[1]; TL=json.load(open(f'{S}/rm/src/timeline.json'))
sr=44100; DUR=58.0; N=int(sr*(DUR+0.01)); rng=np.random.default_rng(7)
beat=0.5; bar=2.0
L=np.zeros(N); R=np.zeros(N)
def mtof(m): return 440*2**((m-69)/12)
def idx(t): return int(round(t*sr))
def add(sig,t,pan=0.0,gain=1.0,buf=None):
    i=idx(t); 
    if i>=N: return
    s=sig[:N-i]*gain; l=np.cos((pan+1)*np.pi/4); r=np.sin((pan+1)*np.pi/4)
    (buf or (L,R))[0][i:i+len(s)]+=s*l*1.414; (buf or (L,R))[1][i:i+len(s)]+=s*r*1.414
def onepole_lp(x,fc):
    a=np.exp(-2*np.pi*fc/sr); y=np.empty_like(x); z=0.0
    for i in range(len(x)): z=(1-a)*x[i]+a*z; y[i]=z
    return y
def fft_filter(x,lo=None,hi=None):
    X=np.fft.rfft(x); f=np.fft.rfftfreq(len(x),1/sr); H=np.ones_like(f)
    if hi: H*=1/np.sqrt(1+(f/hi)**4)
    if lo: H*=1/np.sqrt(1+(lo/np.maximum(f,1e-3))**4)
    return np.fft.irfft(X*H,len(x))
def env_adsr(n,a,d,s,r,total):
    t=np.arange(n)/sr; e=np.where(t<a,t/a,np.where(t<a+d,1-(1-s)*(t-a)/d,s))
    rel=np.clip((t-(total-r))/r,0,1); return e*(1-rel)
# ---------- harmony
P=[[53,57,60,64,67],[50,53,57,60,64],[46,50,53,57,60],[48,50,55,57,64]]
ROOT=[41,38,34,36]
def chord_at(t): return int(t//4)%4
# sections
def drums_on(t): return (4<=t<30) or (34<=t<52)
def full_on(t): return (9.5<=t<30) or (34<=t<52)
# ---------- sidechain env
side=np.ones(N)
for k in np.arange(4,58,beat):
    if drums_on(k):
        i=idx(k); n=idx(0.42); t=np.arange(n)/sr; side[i:i+n]=np.minimum(side[i:i+n],1-0.55*np.exp(-t/0.11))
# ---------- pad (detuned saws, lowpass)
padL=np.zeros(N); padR=np.zeros(N)
for c in range(0,int(DUR//4)+1):
    t0=c*4.0
    if t0>=DUR: break
    notes=P[c%4]; length=4.6 if t0<52 else 6.5
    if t0>=52: notes=P[0]+[72]
    n=idx(length); t=np.arange(n)/sr
    sigL=np.zeros(n); sigR=np.zeros(n)
    for m in notes:
        f=mtof(m)
        for dt,pn in [(-0.09,-1),(0.0,0),(0.08,1)]:
            ph=rng.random()
            saw=2*((f*(1+dt/100)*t+ph)%1)-1
            sigL+=saw*(0.6 if pn<=0 else 0.4); sigR+=saw*(0.6 if pn>=0 else 0.4)
    e=env_adsr(n,1.2 if c==0 else 0.5,0.5,0.85,1.0 if t0<52 else 3.5,length)
    i=idx(t0); m=min(n,N-i); padL[i:i+m]+=(sigL*e)[:m]; padR[i:i+m]+=(sigR*e)[:m]
padL=fft_filter(padL,lo=120,hi=1400); padR=fft_filter(padR,lo=120,hi=1400)
pg=0.022
L+=padL*side*pg; R+=padR*side*pg
# ---------- bass
bpat=[(0,0,0.42),(0.75,0,0.2),(1.0,12,0.18),(1.5,0,0.35)]
for b0 in np.arange(4,52,bar):
    if not drums_on(b0): continue
    for off,o,ln in bpat:
        t0=b0+off; r=ROOT[chord_at(t0)]+o; f=mtof(r+12)
        n=idx(ln); t=np.arange(n)/sr
        s=np.sin(2*np.pi*f*t)+0.25*np.sin(4*np.pi*f*t)+0.08*np.sin(6*np.pi*f*t)
        s=np.tanh(1.6*s)*np.minimum(1,t/0.006)*np.exp(-t/(ln*0.9))
        add(s,t0,0,0.33)
# sub hits in breakdown
for t0 in [30.0,32.0]:
    n=idx(1.8); t=np.arange(n)/sr; add(np.sin(2*np.pi*mtof(ROOT[chord_at(t0)]+12)*t)*np.exp(-t/0.7),t0,0,0.3)
# ---------- arp (FM bell / marimba)
arpL=np.zeros(N); arpR=np.zeros(N); ab=(arpL,arpR)
pat=[0,2,4,3,1,3,2,4]
def pluck(f,ln=0.5,idxm=2.2,dec=0.28):
    n=idx(ln); t=np.arange(n)/sr
    mod=idxm*np.exp(-t/0.06)*np.sin(2*np.pi*f*3.5*t)
    return np.sin(2*np.pi*f*t+mod)*np.exp(-t/dec)*np.minimum(1,t/0.002)
step=0.25
for k,t0 in enumerate(np.arange(0,DUR,step)):
    if t0>=52 or (t0<2.0): continue
    if 30<=t0<34 and k%2: continue
    notes=P[chord_at(t0)]; m=notes[pat[k%8]]+12
    g=0.12 if (t0>=4) else 0.12*(t0-2)/2
    if 30<=t0<34: g=0.09
    add(pluck(mtof(m)),t0,(-0.45 if k%2 else 0.45),g,ab)
# hook melody (top line) in full sections
mel=[(0,76,0.75),(0.75,74,0.25),(1.0,72,0.5),(1.5,69,0.5),(2.5,72,0.5),(3.0,74,1.0)]
for c0 in np.arange(9.5-1.5,52,8.0):
    for off,m,ln in mel:
        t0=c0+1.5+off
        if full_on(t0) and t0<51.5: add(pluck(mtof(m),ln+0.5,1.2,0.45),t0,0.1,0.10,ab)
# ping-pong delay on arp
d=idx(0.375); dl=np.zeros(N); dr=np.zeros(N)
fb=0.35
for rep in range(1,5):
    sh=d*rep; g=fb**rep
    if rep%2: dl[sh:]+=arpR[:-sh]*g; dr[sh:]+=arpL[:-sh]*g
    else: dl[sh:]+=arpL[:-sh]*g; dr[sh:]+=arpR[:-sh]*g
arpL+=fft_filter(dl,lo=300,hi=5000); arpR+=fft_filter(dr,lo=300,hi=5000)
L+=arpL; R+=arpR
# ---------- drums
def kick():
    n=idx(0.45); t=np.arange(n)/sr; f=46+95*np.exp(-t/0.035)
    ph=2*np.pi*np.cumsum(f)/sr; s=np.sin(ph)*np.exp(-t/0.26)
    s+=0.08*fft_filter(np.exp(-t/0.003)*rng.standard_normal(n),hi=3500); return np.tanh(1.4*s)
def noise_hp(n,lo): return fft_filter(rng.standard_normal(n),lo=lo)
def hat(dec=0.035): n=idx(0.25); t=np.arange(n)/sr; return noise_hp(n,7000)*np.exp(-t/dec)
def clap():
    n=idx(0.35); t=np.arange(n)/sr; nz=fft_filter(rng.standard_normal(n),lo=900,hi=4500)
    e=np.zeros(n)
    for o in [0,0.011,0.022]: e+=np.where(t>=o,np.exp(-(t-o)/0.008),0)
    e+=np.where(t>=0.03,np.exp(-(t-0.03)/0.12),0)*0.8; return nz*e
K=kick(); 
for t0 in np.arange(4,52,beat):
    if drums_on(t0): add(K,t0,0,0.62)
for t0 in np.arange(4.25,52,beat):
    if drums_on(t0): add(hat(0.06),t0,0.25,0.10)
for t0 in np.arange(9.5,52,0.125):
    if full_on(t0):
        sw=0.018 if (round(t0/0.125)%2) else 0
        add(hat(0.018),t0+sw,-0.3,0.045 if round(t0/0.125)%2 else 0.03)
C=clap()
for t0 in np.arange(10.5,52,1.0):
    if full_on(t0): add(C,t0,0.05,0.16,None); 
# snare roll into 34
for i,t0 in enumerate(np.arange(32.0,34.0,0.125)):
    add(C,t0,0,0.03+0.10*(i/16))
# ---------- risers / impacts / whooshes
def riser(ln):
    n=idx(ln); t=np.arange(n)/sr; nz=rng.standard_normal(n)
    # sweep via chunked lowpass
    out=np.zeros(n); ch=idx(0.05)
    for j in range(0,n,ch):
        p=j/n; fc=400+9000*p**2; seg=nz[j:j+ch]
        out[j:j+ch]=fft_filter(np.pad(seg,(0,0)),lo=fc*0.4,hi=fc)
    f=200+1200*(t/ln)**2; tone=0.3*np.sin(2*np.pi*np.cumsum(f)/sr)
    return (out+tone)*(t/ln)**2.2
def impact():
    n=idx(2.5); t=np.arange(n)/sr; f=38+40*np.exp(-t/0.08)
    s=np.sin(2*np.pi*np.cumsum(f)/sr)*np.exp(-t/0.9)
    s+=fft_filter(rng.standard_normal(n),lo=200,hi=3000)*np.exp(-t/0.25)*0.5
    return np.tanh(1.3*s)
for a,b in [(2.0,4.0),(32.0,34.0),(50.4,52.0)]: add(riser(b-a),a,0,0.16)
for t0 in [4.0,52.0]: add(impact(),t0,0,0.55)
def whoosh(ln=0.7,peak=0.5):
    n=idx(ln); t=np.arange(n)/sr; nz=rng.standard_normal(n); out=np.zeros(n); ch=idx(0.02)
    for j in range(0,n,ch):
        p=j/n; c=300+5000*np.exp(-((p-peak/ln)*4)**2); out[j:j+ch]=fft_filter(nz[j:j+ch],lo=c*0.5,hi=c*1.6)
    e=np.where(t<peak,(t/peak)**2.5,np.exp(-(t-peak)/0.09)); return out*e
for sc in TL['scenes'][1:]:
    tc=sc['start']
    if tc in (4.0,52.0): continue
    W=whoosh(); i=idx(tc-0.5); n=len(W); pan=np.linspace(-0.8,0.8,n)
    if i+n<N: L[i:i+n]+=W*np.cos((pan+1)*np.pi/4)*0.22*1.4; R[i:i+n]+=W*np.sin((pan+1)*np.pi/4)*0.22*1.4
# taps
def tick():
    n=idx(0.08); t=np.arange(n)/sr
    return np.sin(2*np.pi*2200*t)*np.exp(-t/0.008)*0.6+np.sin(2*np.pi*190*t)*np.exp(-t/0.03)
for tp in TL['taps']: add(tick(),tp['press'],(tp['x']/390-0.5)*0.6,0.16)
# success chimes
def chime(t0):
    for k,m in enumerate([84,88,91,96]): add(pluck(mtof(m),1.6,0.6,0.6),t0+k*0.07,(-0.3+0.2*k),0.11,(arpL,arpR))
conf=[t for t in TL['taps'] if t['scene']=='booking'][-1]['press']+0.45
paid=[t for t in TL['taps'] if t['scene']=='admin'][-1]['press']+0.3
# chimes go straight to mix (+ reverb send below)
chL=np.zeros(N); chR=np.zeros(N)
for t0 in [conf,paid]:
    for k,m in enumerate([84,88,91,96]): add(pluck(mtof(m),1.6,0.6,0.6),t0+k*0.07,(-0.3+0.2*k),0.11,(chL,chR))
L+=chL; R+=chR
# outro bells
for k,m in enumerate([77,81,84,88,91]): add(pluck(mtof(m),2.5,0.8,0.9),52.6+k*0.18,(-0.4+0.2*k),0.10,(chL,chR))
L+=0; 
# ---------- reverb (send: pad+arp+chimes)
irn=idx(2.8); t=np.arange(irn)/sr
def ir(): x=rng.standard_normal(irn)*np.exp(-t/0.75); return fft_filter(x,lo=200,hi=6000)
sendL=padL*pg*0.8+arpL*0.6+chL; sendR=padR*pg*0.8+arpR*0.6+chR
def conv(x,h):
    n=len(x)+len(h); M=1<<(n-1).bit_length(); return np.fft.irfft(np.fft.rfft(x,M)*np.fft.rfft(h,M),M)[:len(x)]
L+=conv(sendL,ir())*0.05; R+=conv(sendR,ir())*0.05
# ---------- master: fade, soft clip, normalize
fade=np.ones(N); fo=idx(1.6); fade[-fo:]=np.linspace(1,0,fo)**1.5
L*=fade; R*=fade
mx=max(np.abs(L).max(),np.abs(R).max()); L/=mx; R/=mx
L=np.tanh(1.5*L)/np.tanh(1.5); R=np.tanh(1.5*R)/np.tanh(1.5)
L*=0.89; R*=0.89
st=np.stack([L,R],1); pcm=(st*32767).astype('<i2')
with wave.open(f'{S}/audio/trilha_raw.wav','wb') as w: w.setnchannels(2); w.setsampwidth(2); w.setframerate(sr); w.writeframes(pcm.tobytes())
print('ok',N/sr)
