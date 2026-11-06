import json, subprocess
XF=0.20
# (file, start, end, crop_x for 576x576 square)
SEGS=[("a",1.20,9.55,275),
      ("b",5.20,8.10,170),("b",8.50,10.72,170),("b",10.82,12.70,190),
      ("b",13.30,15.30,224),("b",18.08,29.85,224),("b",30.40,31.45,224)]
fc=[];vin=[];ain=[];T=[];t=0.0
for i,(f,s,e,x) in enumerate(SEGS):
    d=e-s
    src=0 if f=="a" else 1
    fc.append(f"[{src}:v]trim={s}:{e},setpts=PTS-STARTPTS,fps=30,split[v{i}a][v{i}b]")
    fc.append(f"[v{i}a]crop=576:576:{x}:0,scale=1080:1080:flags=lanczos,setsar=1[c{i}]")
    fc.append(f"[v{i}b]scale=-2:1920,crop=1080:1920:(iw-1080)/2:0,gblur=sigma=42,eq=brightness=-0.16:saturation=0.85,setsar=1[g{i}]")
    fc.append(f"[{src}:a]atrim={s}:{e},asetpts=PTS-STARTPTS,aresample=48000[a{i}]")
    T.append((t,s,e,f)); t+=d-XF
def chain(prefix,out):
    cur=f"{prefix}0"; off=0.0
    for i in range(1,len(SEGS)):
        off+= (SEGS[i-1][2]-SEGS[i-1][1]) - XF
        nxt=f"{prefix}x{i}"
        fc.append(f"[{cur}][{prefix}{i}]xfade=transition=fade:duration={XF}:offset={off:.3f}[{nxt}]")
        cur=nxt
    fc.append(f"[{cur}]null[{out}]")
chain("c","card"); chain("g","bg")
cur="a0"
for i in range(1,len(SEGS)):
    nxt=f"ax{i}"; fc.append(f"[{cur}][a{i}]acrossfade=d={XF}:c1=tri:c2=tri[{nxt}]"); cur=nxt
fc.append(f"[{cur}]anull[aud]")
open("fc.txt","w").write(";\n".join(fc))
subprocess.run(["ffmpeg","-v","error","-y","-i","a.mp4","-i","b.mp4","-filter_complex_script","fc.txt",
  "-map","[card]","-c:v","libx264","-crf","14","-preset","medium","-pix_fmt","yuv420p","-an","card.mp4",
  "-map","[bg]","-c:v","libx264","-crf","24","-preset","medium","-pix_fmt","yuv420p","-an","bg.mp4",
  "-map","[aud]","-ac","1","voice_raw.wav"],check=True)
total=t+XF
# map words to output timeline
W={x:[w for s_ in json.load(open(f"words_{x}.json")) for w in s_["words"]] for x in "ab"}
out=[]
for (T0,s,e,f) in T:
    for w in W[f]:
        mid=(w["s"]+w["e"])/2
        if s<=mid<=e:
            out.append({"t":w["w"].strip(),"s":round(T0+max(w["s"],s)-s,3),"e":round(T0+min(w["e"],e)-s,3)})
json.dump({"total":total,"segs":T,"words":out},open("timeline.json","w"),ensure_ascii=False,indent=0)
print("total",round(total,2))
for (T0,s,e,f) in T: print(f"{f} {s}-{e} -> out {T0:.2f}")
print(" ".join(f"{w['t']}@{w['s']}" for w in out))
