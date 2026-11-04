import React from "react";
import {
  AbsoluteFill,
  Freeze,
  Img,
  OffthreadVideo,
  Sequence,
  interpolate,
  spring,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
  Easing,
} from "remotion";
import captions from "./captions.json";

const FPS = 30;
export const VIDEO_FRAMES = 1731; // 57.70 s of footage after the intro trim
export const OUTRO_AT = 57.45;
export const OUTRO_LEN = 3.6;
export const TOTAL_FRAMES = Math.round((OUTRO_AT + OUTRO_LEN) * FPS);

const NAVY = "#0b1a33";
const GOLD = "#f6c343";
const RED = "#ff4545";
const GREEN = "#2fd27a";
const f = (s: number) => Math.round(s * FPS);

const fontCss = `
@font-face{font-family:'MontserratL';font-weight:600;src:url(${staticFile("montserrat-latin-600-normal.woff2")}) format('woff2');}
@font-face{font-family:'MontserratL';font-weight:800;src:url(${staticFile("montserrat-latin-800-normal.woff2")}) format('woff2');}
@font-face{font-family:'MontserratL';font-weight:900;src:url(${staticFile("montserrat-latin-900-normal.woff2")}) format('woff2');}
`;
const FONT = "'MontserratL', sans-serif";

/* ---------------- punch-in zooms on emphasis ---------------- */
const ZOOMS: [number, number][] = [
  [0, 1.0], [1.39, 1.08], [3.67, 1.0], [6.31, 1.08], [8.21, 1.0], [9.43, 1.1],
  [9.79, 1.0], [10.67, 1.08], [10.99, 1.16], [11.27, 1.24], [11.81, 1.0],
  [12.95, 1.1], [13.87, 1.0], [17.37, 1.08], [18.69, 1.0], [20.19, 1.08], [21.43, 1.0],
  [22.95, 1.1], [24.15, 1.0], [26.03, 1.0], [27.75, 1.1], [28.83, 1.0], [33.25, 1.08],
  [33.79, 1.0], [35.0, 1.1], [36.15, 1.0], [37.53, 1.12], [38.47, 1.0], [40.97, 1.08],
  [42.65, 1.15], [43.49, 1.0], [45.89, 1.1], [46.69, 1.0], [50.01, 1.07], [50.81, 1.0],
  [53.87, 1.12], [55.09, 1.0], [55.73, 1.06], [57.31, 1.14],
];

const useZoom = (frame: number) => {
  const t = frame / FPS;
  // opening: fast zoom-out from 1.18 to land the face in the first half second
  const open = interpolate(frame, [0, 12], [0.18, 0], { extrapolateRight: "clamp", easing: Easing.out(Easing.cubic) });
  let idx = 0;
  for (let i = 0; i < ZOOMS.length; i++) if (ZOOMS[i][0] <= t) idx = i;
  const [t0, target] = ZOOMS[idx];
  const prev = idx > 0 ? ZOOMS[idx - 1][1] : 1;
  const k = interpolate(t - t0, [0, 0.12], [0, 1], { extrapolateRight: "clamp", easing: Easing.out(Easing.cubic) });
  const punch = prev + (target - prev) * k;
  // slow drift so the frame is never fully static
  const drift = 1 + 0.025 * ((t - t0) / 6);
  // decolar: a quick rocket shake
  const shakeAmt = t > 24.4 && t < 25.0 ? Math.sin(frame * 2.3) * 6 * (1 - (t - 24.4) / 0.6) : 0;
  return { scale: Math.max(punch, open > 0 ? 1 + open : 0) * Math.min(drift, 1.03), shake: shakeAmt };
};

/* ---------------- generic top card ---------------- */
const Card: React.FC<{ from: number; to: number; children: React.ReactNode; tone?: "navy" | "red" | "green" | "gold" }> = ({ from, to, children, tone = "navy" }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const inS = spring({ frame: frame - f(from), fps, config: { damping: 13, stiffness: 180 } });
  const out = interpolate(frame, [f(to) - 6, f(to)], [1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  if (frame < f(from) || frame > f(to)) return null;
  const bg = { navy: "rgba(11,26,51,0.94)", red: "rgba(200,30,40,0.95)", green: "rgba(18,120,72,0.95)", gold: GOLD }[tone];
  return (
    <div style={{ position: "absolute", top: 200, left: 0, width: 1080, display: "flex", justifyContent: "center" }}>
      <div
        style={{
          transform: `translateY(${(1 - inS) * -80 + (1 - out) * -40}px) scale(${0.7 + 0.3 * inS})`,
          opacity: Math.min(inS * 1.4, 1) * out,
          background: bg,
          border: tone === "navy" ? `3px solid ${GOLD}` : "3px solid rgba(255,255,255,0.85)",
          borderRadius: 30,
          padding: "26px 40px",
          boxShadow: "0 18px 50px rgba(0,0,0,0.45)",
          color: tone === "gold" ? NAVY : "#fff",
          fontFamily: FONT,
          fontWeight: 900,
          textTransform: "uppercase",
          textAlign: "center",
          maxWidth: 940,
        }}
      >
        {children}
      </div>
    </div>
  );
};

const Pop: React.FC<{ at: number; children: React.ReactNode; style?: React.CSSProperties }> = ({ at, children, style }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const s = spring({ frame: frame - f(at), fps, config: { damping: 10, stiffness: 220 } });
  return <div style={{ transform: `scale(${s})`, opacity: s > 0.01 ? 1 : 0, ...style }}>{children}</div>;
};

const Check: React.FC<{ color?: string; size?: number }> = ({ color = GREEN, size = 48 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={3.4} strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 12.5l5 5L20 6.5" />
  </svg>
);
const Arrow: React.FC<{ up?: boolean; color: string; size?: number }> = ({ up = true, color, size = 64 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={3.2} strokeLinecap="round" strokeLinejoin="round" style={{ transform: up ? undefined : "scaleY(-1)" }}>
    <path d="M3 17l6-6 4 4 8-8" />
    <path d="M14 7h7v7" />
  </svg>
);

const Row: React.FC<{ at: number; text: string; icon?: React.ReactNode; strikeAt?: number; size?: number }> = ({ at, text, icon, strikeAt, size = 54 }) => {
  const frame = useCurrentFrame();
  const strike = strikeAt === undefined ? 0 : interpolate(frame, [f(strikeAt), f(strikeAt) + 7], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  return (
    <Pop at={at} style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 16, marginTop: 10 }}>
      {icon}
      <span style={{ position: "relative", fontSize: size, opacity: 1 - strike * 0.35 }}>
        {text}
        <span style={{ position: "absolute", left: -8, right: -8, top: "50%", height: 9, borderRadius: 6, background: RED, transform: `scaleX(${strike}) rotate(-4deg)`, transformOrigin: "0 50%" }} />
      </span>
    </Pop>
  );
};

/* ---------------- price chart (preços vão decolar) ---------------- */
const PriceChart: React.FC = () => {
  const frame = useCurrentFrame();
  const t = frame / FPS;
  const draw = interpolate(t, [22.9, 24.2, 25.0], [0, 0.45, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.inOut(Easing.cubic) });
  const pts = "20,250 140,232 260,238 380,210 500,196 600,150 700,40";
  const len = 900;
  return (
    <div>
      <div style={{ fontSize: 48, display: "flex", alignItems: "center", justifyContent: "center", gap: 14 }}>
        PREÇOS DOS IMÓVEIS <Arrow color={GREEN} size={56} />
      </div>
      <svg width={720} height={280} viewBox="0 0 720 280" style={{ marginTop: 10 }}>
        <line x1="10" y1="268" x2="710" y2="268" stroke="rgba(255,255,255,0.35)" strokeWidth={3} />
        <polyline points={pts} fill="none" stroke={GOLD} strokeWidth={12} strokeLinecap="round" strokeLinejoin="round" strokeDasharray={len} strokeDashoffset={len * (1 - draw)} />
      </svg>
      <Pop at={24.15} style={{ fontSize: 66, color: GREEN, marginTop: 4 }}>VÃO DECOLAR!</Pop>
    </div>
  );
};

/* ---------------- captions ---------------- */
type W = { t: string; s: number; e: number; c: string | null };
type C = { s: number; e: number; w: W[] };

const Captions: React.FC = () => {
  const frame = useCurrentFrame();
  const t = frame / FPS;
  const chunk = (captions as C[]).find((c) => t >= c.s && t < c.e);
  if (!chunk) return null;
  const local = frame - f(chunk.s);
  const pop = interpolate(local, [0, 4], [0.82, 1], { extrapolateRight: "clamp", easing: Easing.out(Easing.back(2)) });
  return (
    <div style={{ position: "absolute", top: 1180, left: 60, width: 960, display: "flex", justifyContent: "center" }}>
      <div style={{ transform: `scale(${pop})`, display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "6px 18px", fontFamily: FONT, fontWeight: 900, fontSize: 82, lineHeight: 1.15, textTransform: "uppercase" }}>
        {chunk.w.map((w, i) => {
          const active = t >= w.s - 0.03 && (i === chunk.w.length - 1 || t < chunk.w[i + 1].s - 0.03);
          const said = t >= w.s - 0.03;
          const col = w.c === "red" ? RED : w.c === "green" ? GREEN : w.c === "gold" ? GOLD : null;
          const box = active && col;
          return (
            <span
              key={i}
              style={{
                display: "inline-block",
                padding: "0 14px",
                borderRadius: 16,
                background: box ? col : "transparent",
                color: box ? (w.c === "gold" ? NAVY : "#fff") : col && said ? col : active ? GOLD : "#fff",
                transform: `scale(${active ? 1.08 : 1}) rotate(${box ? (i % 2 ? 2 : -2) : 0}deg)`,
                WebkitTextStroke: box ? "0px" : "12px #000",
                paintOrder: "stroke fill",
                textShadow: box ? "none" : "0 6px 18px rgba(0,0,0,0.6)",
                boxShadow: box ? "0 10px 26px rgba(0,0,0,0.45)" : "none",
                opacity: said ? 1 : 0.92,
              }}
            >
              {w.t.replace(/[,.]$/, "")}
            </span>
          );
        })}
      </div>
    </div>
  );
};

/* ---------------- progress bar ---------------- */
const Progress: React.FC = () => {
  const frame = useCurrentFrame();
  const p = Math.min(frame / f(OUTRO_AT), 1);
  return (
    <div style={{ position: "absolute", top: 0, left: 0, width: 1080, height: 10, background: "rgba(255,255,255,0.18)" }}>
      <div style={{ width: `${p * 100}%`, height: "100%", background: GOLD, boxShadow: `0 0 16px ${GOLD}` }} />
    </div>
  );
};

/* ---------------- PNG sequences from HyperFrames ---------------- */
const PngSeq: React.FC<{ dir: string; count: number }> = ({ dir, count }) => {
  const frame = useCurrentFrame();
  const n = Math.min(frame + 1, count);
  return <Img src={staticFile(`${dir}/frame_${String(n).padStart(6, "0")}.png`)} style={{ position: "absolute", inset: 0, width: 1080, height: 1920 }} />;
};

export const Reel: React.FC = () => {
  const frame = useCurrentFrame();
  const { scale, shake } = useZoom(frame);
  const video = <OffthreadVideo src={staticFile("base.mp4")} muted style={{ width: 1080, height: 1920 }} />;
  return (
    <AbsoluteFill style={{ backgroundColor: NAVY, fontFamily: FONT }}>
      <style>{fontCss}</style>
      <AbsoluteFill style={{ transform: `translate(${shake}px, ${shake * 0.6}px) scale(${scale})`, transformOrigin: "50% 36%" }}>
        {frame < VIDEO_FRAMES - 1 ? video : <Freeze frame={VIDEO_FRAMES - 2}>{video}</Freeze>}
      </AbsoluteFill>

      {/* hide the old burned-in quote and seat the captions */}
      <AbsoluteFill style={{ background: "linear-gradient(180deg, rgba(7,16,34,0) 1330px, rgba(7,16,34,0.9) 1470px, rgba(7,16,34,0.97) 1920px)" }} />

      {/* contextual cards — timed to the speech */}
      <Card from={5.9} to={11.75}>
        <div style={{ fontSize: 40, color: GOLD, whiteSpace: "nowrap" }}>PRA QUEM COMPRA:</div>
        <Row at={6.2} text="Imóvel na planta" icon={<Check />} />
        <Row at={7.6} text="Financiamento Caixa" icon={<Check />} />
        <Pop at={9.35} style={{ marginTop: 16 }}>
          <span style={{ display: "inline-block", border: `6px solid ${GREEN}`, color: GREEN, borderRadius: 14, padding: "4px 26px", fontSize: 64, transform: "rotate(-3deg)" }}>NADA MUDOU</span>
        </Pop>
      </Card>

      <Card from={12.85} to={13.85} tone="red">
        <div style={{ fontSize: 70 }}>CHEGA DE DESCULPA</div>
      </Card>

      <Card from={15.05} to={18.5}>
        <div style={{ display: "flex", alignItems: "center", gap: 20, justifyContent: "center" }}>
          <svg width={70} height={70} viewBox="0 0 24 24" fill="none" stroke={GOLD} strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="5" width="18" height="16" rx="2" /><path d="M3 10h18M8 3v4M16 3v4" />
          </svg>
          <div style={{ fontSize: 46, textAlign: "left", lineHeight: 1.1 }}>COMPRE SEU<br />APÊ OU CASA</div>
        </div>
        <Pop at={17.37} style={{ marginTop: 14 }}>
          <span style={{ background: GOLD, color: NAVY, borderRadius: 14, padding: "6px 26px", fontSize: 60, display: "inline-block" }}>AINDA ESTE ANO</span>
        </Pop>
      </Card>

      <Card from={19.2} to={21.4} tone="green">
        <div style={{ display: "flex", alignItems: "center", gap: 18, fontSize: 64 }}>
          JUROS <Arrow up={false} color="#fff" size={72} /> ANO QUE VEM
        </div>
      </Card>

      <Card from={22.3} to={25.95}>
        <PriceChart />
      </Card>

      <Card from={26.3} to={35.85}>
        <div style={{ fontSize: 40, color: GOLD }}>AS DESCULPAS DE SEMPRE</div>
        <Row at={29.4} text="“É a eleição”" strikeAt={33.9} />
        <Row at={31.3} text="“Incerteza”" strikeAt={34.05} />
        <Row at={32.9} text="“Imóvel tá caro”" strikeAt={34.2} />
      </Card>

      <Card from={36.15} to={38.3} tone="gold">
        <div style={{ display: "flex", alignItems: "center", gap: 14, fontSize: 60 }}>
          VÃO FICAR MAIS CAROS <Arrow color={RED} size={70} />
        </div>
        <Pop at={37.55} style={{ fontSize: 44, marginTop: 6 }}>SABE POR QUÊ?</Pop>
      </Card>

      <Card from={38.75} to={43.3}>
        <div style={{ display: "flex", gap: 26, justifyContent: "center" }}>
          <Pop at={38.95} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 58 }}>JUROS<Arrow up={false} color={GREEN} size={64} /></Pop>
          <Pop at={40.9} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 58 }}>PROCURA<Arrow color={GOLD} size={64} /></Pop>
        </div>
        <Pop at={42.6} style={{ fontSize: 40, color: GOLD, marginTop: 10 }}>= PREÇO SOBE</Pop>
      </Card>

      <Card from={45.0} to={46.65} tone="red">
        <div style={{ display: "flex", alignItems: "center", gap: 18, fontSize: 62 }}>
          <svg width={72} height={72} viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 11l9-7 9 7" /><path d="M5 10v10h14V10" /><path d="M4 21L20 3" />
          </svg>
          CANSOU DE PAGAR ALUGUEL?
        </div>
      </Card>

      <Card from={47.6} to={53.3}>
        <div style={{ fontSize: 40, color: GOLD }}>QUEM COMPRA IMÓVEL GANHA</div>
        <Row at={48.0} text="Patrimônio próprio" icon={<Check />} size={50} />
        <Row at={49.6} text="Futuro garantido" icon={<Check />} size={50} />
        <Row at={51.5} text="Renda no futuro" icon={<Check />} size={50} />
      </Card>

      <Card from={53.6} to={55.4} tone="gold">
        <div style={{ fontSize: 46 }}>IMÓVEL É A</div>
        <Pop at={54.0} style={{ fontSize: 62, whiteSpace: "nowrap" }}>MOEDA MAIS FORTE</Pop>
      </Card>

      <Captions />
      <Progress />

      <Sequence from={0} durationInFrames={126}>
        <PngSeq dir="hook" count={126} />
      </Sequence>
      <Sequence from={f(OUTRO_AT)} durationInFrames={TOTAL_FRAMES - f(OUTRO_AT)}>
        <PngSeq dir="outro" count={108} />
      </Sequence>
    </AbsoluteFill>
  );
};
