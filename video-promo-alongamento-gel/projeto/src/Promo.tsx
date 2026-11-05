import React from "react";
import { AbsoluteFill, Easing, Img, interpolate, spring, staticFile, useCurrentFrame, useVideoConfig } from "remotion";

const FPS = 30;
export const DURATION = 450; // 15 s
const f = (s: number) => Math.round(s * FPS);

// ---- offer: everything derived from these two numbers ----
const WAS = 100.0;
const NOW = 79.99;
const PCT = Math.round((1 - NOW / WAS) * 100); // 20
const brl = (v: number) => "R$" + v.toFixed(2).replace(".", ",");
const WHATS = "11 96159-1208";
const INSTA = "@tami_cardosonails";

const BROWN = "#9c6338";
const DEEP = "#6b4126";
const CREAM = "#f8eee4";
const BEIGE = "#e6d0b9";
const GOLD = "#c9974f";

const fontCss = `
@font-face{font-family:'PF';font-weight:600;src:url(${staticFile("playfair-display-latin-600-normal.woff2")}) format('woff2');}
@font-face{font-family:'PF';font-weight:800;src:url(${staticFile("playfair-display-latin-800-normal.woff2")}) format('woff2');}
@font-face{font-family:'GV';font-weight:400;src:url(${staticFile("great-vibes-latin-400-normal.woff2")}) format('woff2');}
@font-face{font-family:'MT';font-weight:600;src:url(${staticFile("montserrat-latin-600-normal.woff2")}) format('woff2');}
@font-face{font-family:'MT';font-weight:800;src:url(${staticFile("montserrat-latin-800-normal.woff2")}) format('woff2');}
`;

const clamp = { extrapolateLeft: "clamp", extrapolateRight: "clamp" } as const;
const out3 = Easing.out(Easing.cubic);

/** visible between [a,b] seconds with soft in/out; returns 0..1 */
const vis = (frame: number, a: number, b: number, fade = 7) =>
  interpolate(frame, [f(a), f(a) + fade, f(b) - fade, f(b)], [0, 1, 1, 0], clamp);

const useIn = (at: number, cfg = { damping: 13, stiffness: 170 }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  return spring({ frame: frame - f(at), fps, config: cfg });
};

/* ---------------- sparkles ---------------- */
const Star: React.FC<{ x: number; y: number; s: number; ph: number; color?: string }> = ({ x, y, s, ph, color = "#fff" }) => {
  const frame = useCurrentFrame();
  const k = 0.5 + 0.5 * Math.sin(frame / 7 + ph);
  const sc = 0.25 + 0.75 * k;
  return (
    <svg style={{ position: "absolute", left: x - s / 2, top: y - s / 2, width: s, height: s, opacity: 0.25 + 0.75 * k, transform: `scale(${sc}) rotate(${frame * 0.8}deg)` }} viewBox="-10 -10 20 20">
      <path d="M0-10 C1-3 3-1 10 0 C3 1 1 3 0 10 C-1 3 -3 1 -10 0 C-3-1 -1-3 0-10Z" fill={color} />
    </svg>
  );
};
const STARS = [
  [90, 140, 44, 0], [960, 230, 34, 2], [820, 90, 26, 4], [180, 520, 30, 1], [980, 640, 40, 3], [60, 760, 24, 5],
  [880, 820, 30, 2.4], [300, 90, 22, 6],
];

/* ---------------- photo stage ---------------- */
const Photo: React.FC<{ src: string; a: number; b: number; from: number; to: number; ox?: string }> = ({ src, a, b, from, to, ox = "50% 50%" }) => {
  const frame = useCurrentFrame();
  const o = interpolate(frame, [f(a) - 8, f(a), f(b), f(b) + 8], [0, 1, 1, 0], clamp);
  if (o <= 0) return null;
  const sc = interpolate(frame, [f(a) - 8, f(b) + 8], [from, to], clamp);
  return (
    <div style={{ position: "absolute", inset: 0, opacity: o, overflow: "hidden" }}>
      <Img src={staticFile(src)} style={{ width: "100%", height: "100%", objectFit: "cover", transform: `scale(${sc})`, transformOrigin: ox }} />
    </div>
  );
};
const Shine: React.FC<{ at: number }> = ({ at }) => {
  const frame = useCurrentFrame();
  const x = interpolate(frame, [f(at), f(at) + 14], [-500, 1500], clamp);
  if (frame < f(at) || frame > f(at) + 15) return null;
  return <div style={{ position: "absolute", top: -50, left: x, width: 260, height: 1100, background: "linear-gradient(90deg, rgba(255,255,255,0), rgba(255,255,255,0.55), rgba(255,255,255,0))", transform: "rotate(18deg)" }} />;
};

/* ---------------- text bits ---------------- */
const Word: React.FC<{ at: number; children: React.ReactNode; style?: React.CSSProperties }> = ({ at, children, style }) => {
  const s = useIn(at);
  return <div style={{ opacity: Math.min(s * 1.6, 1), transform: `translateY(${(1 - s) * 50}px) scale(${0.85 + 0.15 * s})`, ...style }}>{children}</div>;
};

const Strike: React.FC<{ at: number }> = ({ at }) => {
  const frame = useCurrentFrame();
  const w = interpolate(frame, [f(at), f(at) + 10], [0, 100], { ...clamp, easing: out3 });
  return <span style={{ position: "absolute", left: -10, top: "52%", height: 7, borderRadius: 5, background: "#d4453a", width: `calc(${w}% + 20px)`, transform: "rotate(-3deg)", transformOrigin: "0 50%" }} />;
};

const Price: React.FC = () => {
  const frame = useCurrentFrame();
  const pillIn = useIn(3.0, { damping: 14, stiffness: 150 });
  // count 100.00 -> 79.99, eased, clamped (never shows a wrong number)
  const c = interpolate(frame, [f(4.0), f(5.0)], [0, 1], { ...clamp, easing: Easing.out(Easing.quad) });
  const shown = Math.max(NOW, WAS + (NOW - WAS) * c);
  const landed = frame >= f(5.0);
  const pop = landed ? interpolate(frame, [f(5.0), f(5.0) + 6, f(5.0) + 14], [1.14, 1.0, 1.0], clamp) : 1;
  const badge = useIn(5.15, { damping: 9, stiffness: 200 });
  return (
    <div style={{ position: "relative", width: 900, margin: "0 auto", opacity: Math.min(pillIn * 1.5, 1), transform: `scale(${0.8 + 0.2 * pillIn})` }}>
      <div style={{ background: "linear-gradient(180deg,#b17a4e,#8c5a37)", borderRadius: 140, padding: "38px 40px 46px", textAlign: "center", boxShadow: "0 28px 60px rgba(80,45,20,0.35), inset 0 2px 0 rgba(255,255,255,0.25)" }}>
        <div style={{ fontFamily: "MT", fontWeight: 600, fontSize: 52, color: "#f3e3d2", letterSpacing: 1 }}>
          de:{" "}
          <span style={{ position: "relative", display: "inline-block", fontWeight: 800 }}>
            {brl(WAS).replace("R$", "")}
            <Strike at={3.6} />
          </span>
        </div>
        <div style={{ display: "flex", alignItems: "baseline", justifyContent: "center", gap: 22, marginTop: 6 }}>
          <span style={{ fontFamily: "MT", fontWeight: 600, fontSize: 64, color: "#f3e3d2" }}>por:</span>
          <span style={{ fontFamily: "MT", fontWeight: 800, fontSize: 150, color: "#fff", fontVariantNumeric: "tabular-nums", transform: `scale(${pop})`, display: "inline-block", textShadow: "0 8px 24px rgba(60,30,10,0.45)" }}>
            {brl(shown)}
          </span>
        </div>
      </div>
      {/* discount badge — computed */}
      <div style={{ position: "absolute", right: -16, top: -92, transform: `scale(${badge}) rotate(8deg)`, opacity: badge > 0.02 ? 1 : 0 }}>
        <div style={{ width: 200, height: 200, borderRadius: 100, background: "radial-gradient(circle at 35% 30%, #f1cf8e, #c9974f)", border: "6px solid #fff", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", boxShadow: "0 16px 36px rgba(80,45,20,0.4)", color: DEEP, fontFamily: "MT", fontWeight: 800, lineHeight: 0.95 }}>
          <span style={{ fontSize: 76 }}>{PCT}%</span>
          <span style={{ fontSize: 40, letterSpacing: 2 }}>OFF</span>
        </div>
      </div>
    </div>
  );
};

const WhatsIcon: React.FC<{ size?: number }> = ({ size = 74 }) => (
  <svg width={size} height={size} viewBox="0 0 32 32">
    <circle cx="16" cy="16" r="15" fill="#25d366" />
    <path d="M16 6.6a9.4 9.4 0 0 0-8 14.3L6.7 25.4l4.6-1.2A9.4 9.4 0 1 0 16 6.6Z" fill="none" stroke="#fff" strokeWidth="1.9" />
    <path d="M12.6 11.6c.3-.6.6-.6.9-.6l.6.01c.2 0 .4.1.5.4l.8 1.9c.1.2 0 .4-.1.6l-.5.7c-.1.2-.1.3 0 .5.5.9 1.4 1.8 2.5 2.3.2.1.4.1.5-.1l.7-.8c.2-.2.4-.2.6-.1l1.9.9c.2.1.3.3.3.5 0 .8-.6 1.6-1.4 1.8-1.4.4-3.8-.4-5.7-2.3-1.7-1.7-2.6-3.8-2.2-5.2.1-.3.2-.7.3-1Z" fill="#fff" />
  </svg>
);
const InstaIcon: React.FC<{ size?: number }> = ({ size = 56 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={BROWN} strokeWidth="2" strokeLinecap="round">
    <rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4.2" /><circle cx="17.3" cy="6.7" r="0.6" fill={BROWN} />
  </svg>
);

/* ================= main ================= */
export const Promo: React.FC = () => {
  const frame = useCurrentFrame();

  // global slow punch for the whole panel (never fully still)
  const drift = 1 + 0.01 * (frame / 450);

  // A — hook  0–3.2
  const aO = interpolate(frame, [f(3.3) - 8, f(3.3)], [1, 0], clamp);
  const titleSettle = interpolate(frame, [0, 10], [1.1, 1], { ...clamp, easing: out3 });
  const especial = interpolate(frame, [f(0.15), f(0.9)], [0, 100], { ...clamp, easing: Easing.inOut(Easing.cubic) });
  // B — price 3.3–7.4
  const bO = vis(frame, 3.0, 7.4, 8);
  // C — garanta 7.4–10.6
  const cO = vis(frame, 7.2, 10.8, 8);
  // D — CTA 10.6–15
  const dO = interpolate(frame, [f(10.6), f(10.6) + 8], [0, 1], clamp);

  const pulse = 1 + 0.035 * Math.sin((frame - f(11.8)) / 4.5) * (frame > f(11.8) ? 1 : 0);

  return (
    <AbsoluteFill style={{ background: `linear-gradient(180deg, ${CREAM} 0%, #f1e0cf 45%, ${BEIGE} 100%)`, fontFamily: "MT" }}>
      <style>{fontCss}</style>

      {/* photo stage */}
      <div style={{ position: "absolute", left: 0, top: 0, width: 1080, height: 1030, overflow: "hidden" }}>
        <Photo src="hands.png" a={0} b={3.1} from={1.0} to={1.14} ox="55% 40%" />
        <Photo src="detail_r.png" a={3.1} b={7.3} from={1.18} to={1.02} ox="60% 60%" />
        <Photo src="detail_l.png" a={7.3} b={10.7} from={1.0} to={1.14} ox="35% 55%" />
        <Photo src="hands.png" a={10.7} b={15.5} from={1.14} to={1.02} ox="50% 45%" />
        <Shine at={3.0} /><Shine at={7.2} /><Shine at={10.6} />
        <div style={{ position: "absolute", left: 0, right: 0, bottom: 0, height: 260, background: `linear-gradient(180deg, rgba(248,238,228,0), ${CREAM})` }} />
        {STARS.map(([x, y, s, ph], i) => <Star key={i} x={x} y={y} s={s} ph={ph} />)}
      </div>

      {/* panel */}
      <div style={{ position: "absolute", inset: 0, transform: `scale(${drift})`, transformOrigin: "50% 60%" }}>
        {/* A */}
        <div style={{ position: "absolute", left: 0, top: 905, width: 1080, opacity: aO, textAlign: "center" }}>
          <div style={{ fontFamily: "PF", fontWeight: 800, fontSize: 190, color: BROWN, letterSpacing: 6, lineHeight: 1, transform: `scale(${titleSettle})`, textShadow: "0 6px 0 rgba(255,255,255,0.7)" }}>PROMO</div>
          <div style={{ position: "relative", width: 760, height: 130, margin: "-6px auto 0" }}>
            <div style={{ position: "absolute", inset: "20px 0 10px 0", background: "linear-gradient(90deg,#e3c9aa,#d9b992)", clipPath: `inset(0 ${100 - especial}% 0 0)`, borderRadius: 14 }} />
            <div style={{ position: "absolute", inset: 0, fontFamily: "GV", fontSize: 128, color: "#fff", textShadow: "0 4px 14px rgba(120,70,30,0.55)", clipPath: `inset(0 ${100 - especial}% 0 0)`, lineHeight: "130px" }}>especial</div>
          </div>
          <Word at={0.75} style={{ fontFamily: "MT", fontWeight: 800, fontSize: 84, color: DEEP, marginTop: 34, lineHeight: 1.0, letterSpacing: -1 }}>
            ALONGAMENTO<br />EM GEL
          </Word>
          <Word at={1.7} style={{ marginTop: 40, display: "flex", justifyContent: "center", alignItems: "center", gap: 14, fontFamily: "GV", fontSize: 70, color: BROWN }}>
            olha o preço
            <svg width="50" height="56" viewBox="0 0 24 28" fill="none" stroke={BROWN} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ transform: `translateY(${Math.sin(frame / 4) * 6}px)` }}><path d="M12 3v20M4 15l8 9 8-9" /></svg>
          </Word>
        </div>

        {/* B */}
        <div style={{ position: "absolute", left: 0, top: 1150, width: 1080, opacity: bO }}>
          <Word at={3.05} style={{ textAlign: "center", fontFamily: "MT", fontWeight: 800, fontSize: 46, color: DEEP, marginBottom: 130, letterSpacing: 1 }}>
            ALONGAMENTO EM GEL
          </Word>
          <Price />
        </div>

        {/* C */}
        <div style={{ position: "absolute", left: 0, top: 1110, width: 1080, opacity: cO, textAlign: "center" }}>
          <Word at={7.35} style={{ fontFamily: "PF", fontWeight: 600, fontSize: 104, color: DEEP, lineHeight: 1.05 }}>Garanta<br />seu horário!</Word>
          <Word at={8.2} style={{ marginTop: 56, display: "inline-flex", alignItems: "baseline", gap: 18, background: "linear-gradient(180deg,#b17a4e,#8c5a37)", padding: "16px 56px 22px", borderRadius: 80, boxShadow: "0 18px 40px rgba(80,45,20,0.3)" }}>
            <span style={{ fontFamily: "MT", fontWeight: 600, fontSize: 40, color: "#f3e3d2" }}>por apenas</span>
            <span style={{ fontFamily: "MT", fontWeight: 800, fontSize: 84, color: "#fff" }}>{brl(NOW)}</span>
          </Word>
        </div>

        {/* D */}
        <div style={{ position: "absolute", left: 0, top: 1040, width: 1080, opacity: dO, textAlign: "center" }}>
          <Word at={10.7} style={{ fontFamily: "PF", fontWeight: 600, fontSize: 84, color: DEEP, lineHeight: 1.05 }}>Agende agora<br />pelo WhatsApp</Word>
          <Word at={11.2} style={{ marginTop: 36, display: "inline-flex", alignItems: "center", gap: 24, background: "#fff", borderRadius: 110, padding: "22px 54px 22px 30px", boxShadow: "0 24px 54px rgba(80,45,20,0.28)", transform: `scale(${pulse})`, border: `4px solid ${GOLD}` }}>
            <WhatsIcon size={92} />
            <span style={{ fontFamily: "MT", fontWeight: 800, fontSize: 70, color: DEEP, letterSpacing: -1, fontVariantNumeric: "tabular-nums" }}>{WHATS}</span>
          </Word>
          <Word at={11.9} style={{ marginTop: 30, display: "flex", justifyContent: "center", alignItems: "center", gap: 16 }}>
            <InstaIcon size={64} />
            <span style={{ fontFamily: "MT", fontWeight: 600, fontSize: 52, color: BROWN }}>{INSTA}</span>
          </Word>
          <Word at={12.6} style={{ marginTop: 26, fontFamily: "MT", fontWeight: 800, fontSize: 42, color: DEEP, letterSpacing: 2 }}>
            ALONGAMENTO EM GEL · {brl(NOW)}
          </Word>
        </div>
      </div>

      {/* progress hairline */}
      <div style={{ position: "absolute", left: 0, top: 0, height: 8, width: `${(frame / DURATION) * 100}%`, background: GOLD }} />
    </AbsoluteFill>
  );
};
