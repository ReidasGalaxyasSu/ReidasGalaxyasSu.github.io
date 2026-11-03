import numpy as np, wave
SR=44100; BPM=128; B=60/BPM; DUR=15.0; N=int(SR*DUR); rng=np.random.default_rng(7)
mix=np.zeros(N); side=np.ones(N)
def t(n): return np.arange(n)/SR
def add(arr,start,sig,gain=1.0):
    i=int(start*SR); 
    if i>=N: return
    e=min(N,i+len(sig)); arr[i:e]+=sig[:e-i]*gain
def lp(x,fc):  # lowpass por média móvel dupla (vetorizado)
    fc=float(np.mean(fc)); w=max(1,int(SR/(2.2*fc)))
    for _ in range(2):
        c=np.cumsum(np.concatenate([np.zeros(w),x])); x=(c[w:]-c[:-w])/w
    return x
def kick():
    n=int(.35*SR); tt=t(n); f=45+110*np.exp(-tt*30); ph=2*np.pi*np.cumsum(f)/SR
    return np.sin(ph)*np.exp(-tt*9)*1.0+ (rng.standard_normal(n)*np.exp(-tt*200))*.15
def hat(open_=False):
    n=int((.25 if open_ else .06)*SR); tt=t(n); x=rng.standard_normal(n)*np.exp(-tt*(18 if open_ else 80))
    return x-np.concatenate([[0],x[:-1]])  # highpass-ish
def clap():
    n=int(.25*SR); tt=t(n); x=rng.standard_normal(n)
    env=np.exp(-tt*22)+0.6*np.exp(-((tt-.012)**2)*8e4)+0.5*np.exp(-((tt-.024)**2)*8e4)
    return lp(x,6000)*env*0.7
def bass(f,dur):
    n=int(dur*SR); tt=t(n); x=np.sign(np.sin(2*np.pi*f*tt))*.5+np.sin(2*np.pi*f*tt)
    x=lp(x,300+500*np.exp(-tt*10)); return x*np.minimum(1,tt*200)*np.exp(-tt*3)
def pad(freqs,dur,fc):
    n=int(dur*SR); tt=t(n); x=np.zeros(n)
    for f in freqs:
        for d in (-.004,0,.004): x+=np.sign(np.sin(2*np.pi*f*(1+d)*tt))*.5+np.sin(2*np.pi*f*(1+d)*tt)*.5
    x=lp(x,fc)/ (len(freqs)*3); env=np.minimum(1,tt*4)*np.minimum(1,(dur-tt)*6); return x*env
def riser(dur):
    n=int(dur*SR); tt=t(n); x=rng.standard_normal(n); 
    # swept highpassed noise via increasing brightness
    y=x-lp(x,200+6000*(0)) ; env=(tt/dur)**2
    f=300+2500*(tt/dur)**2; ph=2*np.pi*np.cumsum(f)/SR
    return (y*0.5+np.sin(ph)*0.3)*env
def impact(dur=1.4):
    n=int(dur*SR); tt=t(n); x=rng.standard_normal(n)*np.exp(-tt*5); 
    sub=np.sin(2*np.pi*(38+60*np.exp(-tt*12))*tt)*np.exp(-tt*3)
    return lp(x,3000)*.5+sub*1.1
chords=[[220,261.63,329.63],[174.61,220,261.63],[261.63,329.63,392],[196,246.94,293.66]]
roots=[55,43.65,65.41,49]
for bar in range(8):
    c=bar%4; t0=bar*4*B
    # pad (pre-sidechain)
    add(mix,t0,pad([f for f in chords[c]]+[chords[c][0]*2],4*B,900+500*(bar/7)),0.5)
    for beat in range(4):
        tb=t0+beat*B
        if bar>=1 or beat>=2:  # kick entra no fim do compasso 0
            add(mix,tb,kick(),0.95); i=int(tb*SR); side[i:i+int(.28*SR)]*= (0.35+0.65*np.minimum(1,t(int(.28*SR))/.28)**1.5)[:N-i]
        if bar>=1:
            add(mix,tb+B/2,hat(),0.22); 
            if beat%2==1: add(mix,tb,clap(),0.4)
            if beat==3: add(mix,tb+B/2,hat(True),0.2)
        # 16th hats for energy bars>=3
        if bar>=3:
            for s in (.25,.75): add(mix,tb+s*B,hat(),0.12)
        # bass 8ths
        if bar>=1:
            for h in (0,1):
                add(mix,tb+h*B/2,bass(roots[c]*(2 if (beat+h)%4==3 else 1),B/2*.9),0.55)
# arpeggio lead
for bar in range(2,8):
    c=bar%4; notes=chords[c]+[chords[c][0]*2]
    for k in range(16):
        f=notes[[0,1,2,3,2,1,3,2][k%8]]*2
        n=int(B/4*SR*.9); tt=t(n); x=np.sin(2*np.pi*f*tt)+.4*np.sin(4*np.pi*f*tt)
        add(mix,bar*4*B+k*B/4,x*np.exp(-tt*14)*np.minimum(1,tt*500),0.11)
# pad sidechain
mix*=side**0.6
# risers into cuts (bars 1,3,5,7) and impacts at cut
for cb in (1,3,5,7):
    tc=cb*4*B/2*1.0  # placeholder
for cutbar in (2,6,10,14):   # em unidades de beats*... bar duration=4B=1.875s -> cuts at 1,3,5,7 bars
    pass
cuts=[k*4*B for k in (1,3,5,7)]
for tc in cuts:
    r=riser(2*B); add(mix,tc-2*B,r,0.45)
    add(mix,tc,impact(),0.9)
# final: tail fade
fade=np.ones(N); fi=int((DUR-1.2)*SR); fade[fi:]=np.linspace(1,0,N-fi)**1.5; mix*=fade
# intro fade-in
mix[:int(.05*SR)]*=np.linspace(0,1,int(.05*SR))
# master: soft clip + normalize
mix=np.tanh(mix*1.4); mix/=np.max(np.abs(mix))/0.89
# stereo slight widen
L=mix; R=np.concatenate([np.zeros(40),mix[:-40]])*0.5+mix*0.5
st=np.stack([L,R],1)
with wave.open('music.wav','wb') as w:
    w.setnchannels(2); w.setsampwidth(2); w.setframerate(SR); w.writeframes((st*32767).astype('<i2').tobytes())
print('ok')
