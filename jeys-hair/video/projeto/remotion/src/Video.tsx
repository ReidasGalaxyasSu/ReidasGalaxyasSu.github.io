import React, {useEffect, useState} from 'react';
import {AbsoluteFill, Audio, Img, OffthreadVideo, Sequence, continueRender, delayRender, interpolate, Easing, spring, staticFile, useCurrentFrame, useVideoConfig} from 'remotion';
import TL from './timeline.json';

const FPS = TL.fps;
const C = {ink: '#13241A', paper: '#F5F3EE', forest: '#15301D', forest2: '#1C3A25', green: '#3F7A47', mint: '#A9D9AE', muted: '#DCE4DA'};
const SERIF = 'IS, Georgia, serif';
const SANS = 'IN, -apple-system, system-ui, sans-serif';
const ex = Easing.bezier(0.16, 1, 0.3, 1); // expo.out-ish
const exIn = Easing.bezier(0.7, 0, 0.84, 0);
const exInOut = Easing.bezier(0.87, 0, 0.13, 1);
const cl = {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'} as const;
const sec = (f: number) => f / FPS;

// phone geometry
const SW = 640; const SH = Math.round((SW * 844) / 390); const BZ = 18; const PW = SW + BZ * 2; const PH = SH + BZ * 2;
const PHONE_TOP = 430;
const K = SW / 390;

type Scene = (typeof TL.scenes)[number];
const scenes = TL.scenes as any[];
const phoneScenes = scenes.filter((s) => s.kind === 'phone');

// captions per phone scene: [relative seconds, kicker, title]
const CAPS: Record<string, [number, string, string][]> = {
  intro: [[0, '01 · Primeira impressão', 'Um site à altura do seu trabalho']],
  catalog: [[0, '02 · Catálogo de estilos', 'Seus trabalhos reais viram vitrine'], [3.9, '02 · Catálogo de estilos', 'A cliente escolhe o estilo e já leva para o horário']],
  booking: [[0, '03 · Agendamento online 24h', 'Ela marca sozinha, a qualquer hora'], [3.3, '03 · Horários inteligentes', 'Só aparecem horários em que o serviço cabe'], [8.6, '03 · Pedido recebido', 'Com código de reserva e valor na hora']],
  conta: [[0, '04 · Área da cliente', 'Cada cliente acompanha os próprios horários'], [4.6, '04 · Histórico', 'Remarca e cancela sem precisar te chamar']],
  admin: [[0, '05 · Painel da Jey', 'Sua agenda e seu caixa em um olhar'], [4.4, '05 · Controle do sinal', 'Sinal pago? Confirma com um toque']],
};

const useFonts = () => {
  const [h] = useState(() => delayRender('fonts'));
  useEffect(() => {
    const faces = [
      new FontFace('IS', `url(${staticFile('fonts/instrument-serif-latin-400-normal.woff2')})`),
      new FontFace('IS', `url(${staticFile('fonts/instrument-serif-latin-400-italic.woff2')})`, {style: 'italic'}),
      new FontFace('IN', `url(${staticFile('fonts/inter-latin-400-normal.woff2')})`, {weight: '400'}),
      new FontFace('IN', `url(${staticFile('fonts/inter-latin-500-normal.woff2')})`, {weight: '500'}),
      new FontFace('IN', `url(${staticFile('fonts/inter-latin-600-normal.woff2')})`, {weight: '600'}),
      new FontFace('IN', `url(${staticFile('fonts/inter-latin-700-normal.woff2')})`, {weight: '700'}),
    ];
    Promise.all(faces.map((f) => f.load().then((ff) => (document as any).fonts.add(ff)))).then(() => continueRender(h));
  }, [h]);
};

// ---------- background
const Background: React.FC = () => {
  const f = useFrame();
  const t = sec(f);
  const a = Math.sin(t * 0.35) * 120, b = Math.cos(t * 0.27) * 160;
  const ringRot = t * 6;
  return (
    <AbsoluteFill style={{background: C.forest}}>
      <AbsoluteFill style={{background: `radial-gradient(900px 900px at ${300 + a}px ${520 + b}px, rgba(63,122,71,0.55), transparent 70%)`}} />
      <AbsoluteFill style={{background: `radial-gradient(800px 800px at ${820 - a}px ${1480 - b * 0.6}px, rgba(169,217,174,0.22), transparent 70%)`}} />
      <AbsoluteFill style={{background: `radial-gradient(1200px 700px at 540px 2000px, rgba(8,18,12,0.7), transparent 70%)`}} />
      <svg width={1080} height={1920} style={{position: 'absolute', inset: 0, opacity: 0.18}}>
        <g transform={`rotate(${ringRot} 540 1140)`}>
          <circle cx={540} cy={1140} r={720} fill="none" stroke={C.mint} strokeWidth={1.5} strokeDasharray="2 14" />
        </g>
        <circle cx={540} cy={1140} r={600} fill="none" stroke={C.mint} strokeWidth={1} opacity={0.6} />
      </svg>
    </AbsoluteFill>
  );
};
const useFrame = () => useCurrentFrame();

const Grain: React.FC = () => {
  const f = useCurrentFrame();
  const i = Math.floor(f / 2) % 6;
  return (
    <AbsoluteFill style={{pointerEvents: 'none'}}>
      <AbsoluteFill style={{backgroundImage: `url(${staticFile(`grain${i}.png`)})`, backgroundSize: '540px 540px', mixBlendMode: 'overlay', opacity: 0.16}} />
      <AbsoluteFill style={{background: 'radial-gradient(ellipse at 50% 45%, transparent 55%, rgba(0,0,0,0.45) 100%)'}} />
    </AbsoluteFill>
  );
};

// light leak sweeping at cuts
const LightLeak: React.FC<{at: number}> = ({at}) => {
  const f = useCurrentFrame();
  const t = sec(f) - at;
  if (t < -0.5 || t > 0.8) return null;
  const p = interpolate(t, [-0.5, 0.8], [0, 1], cl);
  const op = interpolate(t, [-0.5, -0.05, 0.05, 0.8], [0, 0.85, 0.85, 0], cl);
  const x = interpolate(p, [0, 1], [-300, 1400]);
  return (
    <AbsoluteFill style={{mixBlendMode: 'screen', opacity: op, pointerEvents: 'none'}}>
      <AbsoluteFill style={{background: `radial-gradient(520px 1300px at ${x}px 700px, rgba(255,214,150,0.55), rgba(169,217,174,0.25) 45%, transparent 75%)`, transform: 'rotate(-14deg) scale(1.3)'}} />
    </AbsoluteFill>
  );
};

const Flash: React.FC<{at: number; peak?: number}> = ({at, peak = 0.5}) => {
  const f = useCurrentFrame();
  const t = sec(f) - at;
  const op = interpolate(t, [-0.06, 0, 0.3], [0, peak, 0], cl);
  if (op <= 0) return null;
  return <AbsoluteFill style={{background: '#F5F3EE', opacity: op, mixBlendMode: 'soft-light', pointerEvents: 'none'}} />;
};

// ---------- logo with ring (intro-style)
const LogoReveal: React.FC<{start: number; cy: number; size: number; outAt?: number}> = ({start, cy, size, outAt}) => {
  const f = useCurrentFrame();
  const t = sec(f) - start;
  if (t < 0) return null;
  const ring = interpolate(t, [0.1, 1.7], [1, 0], {...cl, easing: Easing.bezier(0.45, 0, 0.55, 1)});
  const clip = interpolate(t, [0.5, 1.9], [0, 52], {...cl, easing: ex});
  const sc = interpolate(t, [0.5, 2.5], [1.25, 1], {...cl, easing: ex});
  const rot = interpolate(t, [0.5, 2.5], [-16, 0], {...cl, easing: ex});
  let out = 1, oscale = 1, oblur = 0;
  if (outAt !== undefined) {
    const o = sec(f) - outAt;
    out = interpolate(o, [0, 0.45], [1, 0], {...cl, easing: exIn});
    oscale = interpolate(o, [0, 0.45], [1, 0.6], {...cl, easing: exIn});
    oblur = interpolate(o, [0, 0.45], [0, 14], cl);
  }
  const glow = 0.35 + 0.15 * Math.sin(t * 2.2);
  const R = size / 2 + 34;
  return (
    <div style={{position: 'absolute', left: 540 - R - 10, top: cy - R - 10, width: R * 2 + 20, height: R * 2 + 20, opacity: out, transform: `scale(${oscale})`, filter: `blur(${oblur}px)`}}>
      <div style={{position: 'absolute', inset: -120, borderRadius: 999, background: `radial-gradient(circle, rgba(169,217,174,${glow}) 0%, transparent 60%)`}} />
      <svg width={R * 2 + 20} height={R * 2 + 20} style={{position: 'absolute', inset: 0}}>
        <circle cx={R + 10} cy={R + 10} r={R} fill="none" stroke={C.mint} strokeOpacity={0.7} strokeWidth={2} pathLength={1} strokeDasharray={1} strokeDashoffset={ring} transform={`rotate(-90 ${R + 10} ${R + 10})`} />
      </svg>
      <Img src={staticFile('logo.png')} style={{position: 'absolute', left: R + 10 - size / 2, top: R + 10 - size / 2, width: size, height: size, borderRadius: 999, clipPath: `circle(${clip}% at 50% 50%)`, transform: `scale(${sc}) rotate(${rot}deg)`, boxShadow: '0 30px 80px rgba(0,0,0,0.45)'}} />
    </div>
  );
};

// ---------- caption
const Caption: React.FC<{scene: any}> = ({scene}) => {
  const f = useCurrentFrame();
  const t = sec(f) - scene.start;
  const items = CAPS[scene.name] || [];
  const dur = scene.end - scene.start;
  let idx = 0;
  items.forEach((it, i) => { if (t >= it[0]) idx = i; });
  const [t0, k, title] = items[idx];
  const lt = t - t0;
  const nextAt = idx + 1 < items.length ? items[idx + 1][0] : dur;
  const outT = t - (nextAt - 0.32);
  const inY = interpolate(lt, [0.05, 0.85], [110, 0], {...cl, easing: ex});
  const outY = interpolate(outT, [0, 0.32], [0, -110], {...cl, easing: exIn});
  const kOp = interpolate(lt, [0, 0.5], [0, 1], cl) * interpolate(outT, [0, 0.25], [1, 0], cl);
  const words = title.split(' ');
  // split into ~2 balanced lines
  const half = Math.ceil(title.length / 2); let acc = 0; let cut = words.length;
  for (let i = 0; i < words.length; i++) { acc += words[i].length + 1; if (acc >= half) { cut = i + 1; break; } }
  const lines = title.length > 22 ? [words.slice(0, cut).join(' '), words.slice(cut).join(' ')] : [title];
  return (
    <div style={{position: 'absolute', left: 60, right: 60, top: 110, textAlign: 'center'}}>
      <div style={{font: `600 26px/1 ${SANS}`, letterSpacing: '0.3em', textTransform: 'uppercase', color: C.mint, opacity: kOp, transform: `translateY(${(1 - kOp) * 14}px)`}}>{k}</div>
      <div style={{marginTop: 26, fontFamily: SERIF, fontSize: 76, lineHeight: 1.0, letterSpacing: '-0.02em', color: C.paper}}>
        {lines.map((l, i) => {
          const y = interpolate(lt, [0.05 + i * 0.08, 0.85 + i * 0.08], [110, 0], {...cl, easing: ex});
          return (
            <span key={i} style={{display: 'block', overflow: 'hidden', paddingBottom: 6}}>
              <span style={{display: 'inline-block', transform: `translateY(${Math.max(y, 0) + outY}%)`}}>{l}</span>
            </span>
          );
        })}
      </div>
    </div>
  );
};

// ---------- taps
const Taps: React.FC<{scene: any}> = ({scene}) => {
  const f = useCurrentFrame();
  const t = sec(f) + scene.start;
  const taps = (TL.taps as any[]).filter((x) => x.scene === scene.name);
  return (
    <>
      {taps.map((tp, i) => {
        const a = t - (tp.press - 0.38), p = t - tp.press;
        if (a < 0 || p > 0.7) return null;
        const appear = interpolate(a, [0, 0.25], [0, 1], {...cl, easing: ex});
        const press = interpolate(p, [-0.05, 0.04, 0.2], [1, 0.78, 1], cl);
        const fade = interpolate(p, [0.25, 0.6], [1, 0], cl);
        const ring = interpolate(p, [0, 0.55], [0, 1], {...cl, easing: ex});
        const x = tp.x * K, y = tp.y * K;
        return (
          <div key={i} style={{position: 'absolute', left: x, top: y, width: 0, height: 0}}>
            {p >= 0 && <div style={{position: 'absolute', left: -90 * ring, top: -90 * ring, width: 180 * ring, height: 180 * ring, borderRadius: 999, border: `3px solid rgba(169,217,174,${1 - ring})`, background: `rgba(169,217,174,${0.18 * (1 - ring)})`}} />}
            <div style={{position: 'absolute', left: -34, top: -34, width: 68, height: 68, borderRadius: 999, background: 'rgba(255,255,255,0.42)', border: '2px solid rgba(255,255,255,0.9)', boxShadow: '0 8px 24px rgba(0,0,0,0.3)', opacity: appear * fade, transform: `scale(${(0.6 + 0.4 * appear) * press})`, backdropFilter: 'blur(2px)'}} />
          </div>
        );
      })}
    </>
  );
};

// ---------- phone
const Screen: React.FC<{scene: any}> = ({scene}) => {
  const f = useCurrentFrame();
  const t = sec(f);
  const sIn = interpolate(t, [0, 0.45], [1.08, 1], {...cl, easing: ex});
  const bIn = interpolate(t, [0, 0.35], [10, 0], cl);
  return (
    <AbsoluteFill style={{transform: `scale(${sIn})`, filter: bIn > 0.1 ? `blur(${bIn}px)` : undefined}}>
      <OffthreadVideo src={staticFile(`clips/${scene.src}.mp4`)} startFrom={Math.round(scene.trim * FPS)} playbackRate={scene.rate} muted style={{width: SW, height: SH}} />
    </AbsoluteFill>
  );
};

// camera for phone group: returns transform for time t (film seconds)
const phoneState = (t: number) => {
  // visible windows: 4-30 and 34-49
  const segs = [[4, 30], [34, 49]];
  let y = 1700, blur = 0, rx = 0, ry = 0, sc = 1, rz = 0, vis = false;
  for (const [a, b] of segs) {
    if (t >= a - 0.1 && t <= b + 0.1) {
      vis = true;
      const enter = interpolate(t, [a, a + 1.0], [1, 0], {...cl, easing: ex});
      const exit = interpolate(t, [b - 0.42, b], [0, 1], {...cl, easing: exIn});
      y = enter * 1500 + exit * 1700;
      rz = enter * 8 - exit * 6;
      rx = 8 * enter + 6;
      blur = Math.min(26, enter * 30 + exit * 30);
      const lt = t - a;
      ry = Math.sin(lt * 0.55) * 7 - 3;
      rx += Math.sin(lt * 0.4) * 2;
      sc = 1 + 0.02 * Math.sin(lt * 0.3);
    }
  }
  // phone->phone cuts: swing
  for (const c of [9.5, 18.5, 41]) {
    const d = t - c;
    if (d > -0.3 && d < 0.9) {
      const sw = d < 0 ? interpolate(d, [-0.3, 0], [0, 1], {...cl, easing: exIn}) : interpolate(d, [0, 0.9], [1, 0], {...cl, easing: ex});
      ry += sw * 22; sc *= 1 - 0.06 * sw; y += -30 * sw; blur = Math.max(blur, sw * 6);
    }
  }
  return {y, blur, rx, ry, sc, rz, vis};
};

const Phone: React.FC = () => {
  const f = useCurrentFrame();
  const t = sec(f);
  const st = phoneState(t);
  if (!st.vis) return null;
  // zoom punch-ins (screen-space)
  const zooms: [number, number, number, number][] = [[27.6, 29.6, 1.1, -40], [42.6, 44.4, 1.08, 60]];
  let zs = 1, zy = 0;
  for (const [a, b, s, yy] of zooms) {
    const z = interpolate(t, [a, a + 0.6, b - 0.35, b], [0, 1, 1, 0], {...cl, easing: Easing.inOut(Easing.cubic)});
    zs *= 1 + (s - 1) * z; zy += yy * z;
  }
  return (
    <div style={{position: 'absolute', left: (1080 - PW) / 2, top: PHONE_TOP, width: PW, height: PH, perspective: 2200, transform: `translateY(${st.y + zy}px) scale(${st.sc * zs})`, transformOrigin: '50% 40%'}}>
      <div style={{position: 'absolute', inset: 0, transformStyle: 'preserve-3d', transform: `rotateX(${st.rx}deg) rotateY(${st.ry}deg) rotateZ(${st.rz}deg)`, filter: st.blur > 0.3 ? `blur(${st.blur}px)` : undefined}}>
        {/* shadow */}
        <div style={{position: 'absolute', left: 40, right: 40, bottom: -60, height: 120, borderRadius: 999, background: 'rgba(0,0,0,0.55)', filter: 'blur(40px)', transform: 'translateZ(-40px)'}} />
        {/* body */}
        <div style={{position: 'absolute', inset: 0, borderRadius: 92, background: 'linear-gradient(145deg,#2b3d31,#0d1a12 40%,#22342a)', boxShadow: '0 60px 120px rgba(0,0,0,0.55), inset 0 0 0 2px rgba(255,255,255,0.14), inset 0 0 0 7px #0b130e'}} />
        <div style={{position: 'absolute', left: BZ, top: BZ, width: SW, height: SH, borderRadius: 76, overflow: 'hidden', background: C.paper}}>
          {phoneScenes.map((s) => (
            <Sequence key={s.name} from={Math.round(s.start * FPS)} durationInFrames={Math.round((s.end - s.start) * FPS)} layout="none">
              <AbsoluteFill>
                <Screen scene={s} />
                <Taps scene={s} />
              </AbsoluteFill>
            </Sequence>
          ))}
          {/* glass reflection */}
          <AbsoluteFill style={{background: `linear-gradient(${115 + st.ry * 2}deg, rgba(255,255,255,0) 30%, rgba(255,255,255,0.10) 45%, rgba(255,255,255,0) 60%)`, pointerEvents: 'none'}} />
          {/* dynamic island */}
          <div style={{position: 'absolute', left: SW / 2 - 70, top: 14, width: 140, height: 38, borderRadius: 999, background: '#000'}} />
        </div>
      </div>
    </div>
  );
};

// ---------- status pill morph for "sinal" card
const SinalPill: React.FC<{start: number}> = ({start}) => {
  const f = useCurrentFrame();
  const t = sec(f) - start;
  if (t < 0 || t > 4) return null;
  const inn = interpolate(t, [0.6, 1.3], [0, 1], {...cl, easing: ex});
  const flip = interpolate(t, [1.85, 2.15], [0, 1], cl);
  const pop = spring({frame: Math.max(0, (t - 1.85) * FPS), fps: FPS, config: {damping: 9, stiffness: 160}});
  const out = interpolate(t, [3.45, 3.8], [1, 0], cl);
  const ok = flip > 0.5;
  return (
    <div style={{position: 'absolute', left: 0, right: 0, top: 1360, display: 'flex', justifyContent: 'center', opacity: inn * out, transform: `translateY(${(1 - inn) * 60}px) scale(${ok ? 0.9 + 0.1 * pop : 1})`}}>
      <div style={{display: 'flex', alignItems: 'center', gap: 22, height: 120, padding: '0 54px', borderRadius: 999, background: ok ? '#D5EBD7' : '#F3E3C3', color: ok ? '#1F5228' : '#6B4A10', font: `600 44px/1 ${SANS}`, boxShadow: '0 30px 70px rgba(0,0,0,0.35)'}}>
        <div style={{width: 62, height: 62, borderRadius: 999, background: ok ? '#3F7A47' : '#C99A3B', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 36}}>{ok ? '✓' : '⏳'}</div>
        {ok ? 'Confirmado' : 'Aguardando sinal'}
      </div>
    </div>
  );
};

const Card: React.FC<{scene: any}> = ({scene}) => (
  <Sequence from={Math.round(scene.start * FPS)} durationInFrames={Math.round((scene.end - scene.start) * FPS)}>
    <AbsoluteFill>
      <OffthreadVideo src={staticFile(`cards/${scene.src}.webm`)} transparent muted style={{width: 1080, height: 1920}} />
    </AbsoluteFill>
  </Sequence>
);

const FadeOut: React.FC = () => {
  const f = useCurrentFrame();
  const op = interpolate(sec(f), [TL.dur - 0.7, TL.dur], [0, 1], cl);
  const inn = interpolate(sec(f), [0, 0.5], [1, 0], cl);
  return <AbsoluteFill style={{background: '#000', opacity: Math.max(op, inn), pointerEvents: 'none'}} />;
};

export const Video: React.FC = () => {
  useFonts();
  const cuts = scenes.slice(1).map((s) => s.start);
  return (
    <AbsoluteFill style={{background: C.forest, fontFamily: SANS}}>
      <Background />
      <LogoReveal start={0.15} cy={760} size={300} outAt={3.55} />
      <LogoReveal start={52.0} cy={700} size={320} />
      <SinalPill start={30} />
      {scenes.filter((s) => s.kind === 'card').map((s) => <Card key={s.name} scene={s} />)}
      <Phone />
      <Captions />
      {cuts.map((c) => <LightLeak key={'l' + c} at={c} />)}
      {cuts.map((c) => <Flash key={'f' + c} at={c} peak={c === 4 || c === 52 ? 0.8 : 0.4} />)}
      <Grain />
      <FadeOut />
      <Audio src={staticFile('trilha.wav')} />
    </AbsoluteFill>
  );
};

const Captions: React.FC = () => {
  const f = useCurrentFrame();
  const t = sec(f);
  const s = phoneScenes.find((x) => t >= x.start && t < x.end);
  if (!s) return null;
  // fade caption around scene boundaries that go to/from cards
  return <Caption scene={s} />;
};
