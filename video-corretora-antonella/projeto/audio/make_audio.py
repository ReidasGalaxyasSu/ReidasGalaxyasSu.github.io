"""Synthesise the SFX layer and a soft background track for the reel (48 kHz)."""
import numpy as np, wave, sys

SR = 48000
TOTAL = 61.05
rng = np.random.default_rng(7)


def write(path, x):
    x = np.clip(x, -1, 1)
    st = np.stack([x, x], 1) if x.ndim == 1 else x
    with wave.open(path, "wb") as w:
        w.setnchannels(2); w.setsampwidth(2); w.setframerate(SR)
        w.writeframes((st * 32767).astype(np.int16).tobytes())


def t_(d): return np.arange(int(d * SR)) / SR
def env(n, a, r):
    e = np.ones(n); ai = int(a * SR); ri = int(r * SR)
    if ai: e[:ai] = np.linspace(0, 1, ai)
    if ri: e[-ri:] *= np.linspace(1, 0, ri) ** 2
    return e
def lp(x, a):  # one-pole lowpass, a in (0,1)
    y = np.empty_like(x); acc = 0.0
    for i, v in enumerate(x):
        acc += a * (v - acc); y[i] = acc
    return y
def bandnoise(d, f0, f1):
    """noise swept through a moving band (cheap resonant filter)"""
    n = int(d * SR); x = rng.standard_normal(n)
    f = np.linspace(f0, f1, n)
    y = np.zeros(n); y1 = y2 = 0.0; r = 0.985
    for i in range(n):
        th = 2 * np.pi * f[i] / SR
        v = x[i] + 2 * r * np.cos(th) * y1 - r * r * y2
        y2, y1 = y1, v; y[i] = v
    return y / (np.abs(y).max() + 1e-9)

# ---------------- SFX ----------------
def whoosh(d=0.45, up=True):
    f0, f1 = (300, 3200) if up else (3200, 300)
    x = bandnoise(d, f0, f1)
    n = len(x); e = np.sin(np.linspace(0, np.pi, n)) ** 1.6
    return x * e * 0.55
def pop():
    t = t_(0.09); f = 900 * np.exp(-t * 30) + 380
    return np.sin(2 * np.pi * np.cumsum(f) / SR) * np.exp(-t * 45) * 0.6
def ding(f=1318.5):
    t = t_(0.9)
    x = sum(a * np.sin(2 * np.pi * f * m * t) * np.exp(-t * k) for a, m, k in [(1, 1, 5), (0.5, 2.0, 8), (0.25, 3.01, 12), (0.15, 4.2, 16)])
    return x * 0.32 * env(len(t), 0.002, 0.05)
def check():
    a = ding(1046.5)[: int(0.35 * SR)]; b = ding(1568)[: int(0.5 * SR)]
    out = np.zeros(int(0.6 * SR)); out[: len(a)] += a * 0.8; o = int(0.08 * SR); out[o:o + len(b)] += b
    return out * 0.8
def boom(f0=110, d=0.7, g=0.9):
    t = t_(d); f = f0 * np.exp(-t * 6) + 38
    x = np.sin(2 * np.pi * np.cumsum(f) / SR) * np.exp(-t * 5.5)
    click = rng.standard_normal(len(t)) * np.exp(-t * 120) * 0.25
    return (x + lp(click, 0.2)) * g
def stamp():
    t = t_(0.35)
    thud = boom(90, 0.35, 0.8)
    crack = lp(rng.standard_normal(len(t)), 0.5) * np.exp(-t * 40) * 0.5
    return thud + crack
def buzzer():
    t = t_(0.42)
    x = np.sign(np.sin(2 * np.pi * 150 * t)) * 0.5 + np.sin(2 * np.pi * 157 * t) * 0.5
    x = lp(x, 0.08)
    e = env(len(t), 0.01, 0.12); e[int(0.18 * SR):int(0.22 * SR)] *= 0.2
    return x * e * 0.55
def riser(d=1.3):
    t = t_(d)
    n = bandnoise(d, 400, 6000) * 0.5
    f = 180 * (2 ** (t * 3 / d)); s = np.sin(2 * np.pi * np.cumsum(f) / SR) * 0.25
    return (n + s) * (t / d) ** 2
def blip(up=True):
    t = t_(0.18); f = np.linspace(500, 1100, len(t)) if up else np.linspace(1100, 450, len(t))
    return np.sin(2 * np.pi * np.cumsum(f) / SR) * env(len(t), 0.005, 0.08) * 0.35
def swipe():
    return whoosh(0.18, True) * 0.9
def chaching():
    out = np.zeros(int(1.2 * SR))
    for i, f in enumerate([2637, 3136, 2637, 3520]):
        d = ding(f)[: int(0.5 * SR)] * 0.5; o = int(i * 0.035 * SR); out[o:o + len(d)] += d
    bell = ding(1760); o = int(0.16 * SR); out[o:o + len(bell)] += bell * 1.2
    return out * 0.75

CUES = [
    (0.00, boom(70, 0.9, 0.8)), (0.00, whoosh(0.35, False) * 0.6),
    (1.32, pop()), (2.10, whoosh(0.35)), (3.18, boom(120, 0.4, 0.5)), (3.18, pop()),
    (3.86, whoosh(0.3, False) * 0.7),
    (5.85, whoosh()), (6.2, check()), (7.6, check()), (9.35, stamp()),
    (10.67, boom(140, 0.3, 0.35)), (10.99, boom(160, 0.3, 0.4)), (11.27, boom(180, 0.35, 0.45)),
    (12.85, buzzer()),
    (15.0, whoosh()), (17.37, ding(1568)),
    (19.15, whoosh(0.4, False)), (20.19, blip(False)),
    (22.25, whoosh()), (22.9, riser(1.25)), (24.15, boom(60, 0.9, 0.85)), (24.15, whoosh(0.6) * 0.8),
    (26.25, whoosh()), (29.4, pop()), (31.3, pop()), (32.9, pop()),
    (33.9, swipe()), (34.05, swipe()), (34.2, swipe()),
    (36.1, whoosh()), (37.55, pop()),
    (38.7, whoosh()), (38.95, blip(False)), (40.9, blip(True)), (42.6, pop()),
    (45.0, whoosh(0.4, False)), (45.89, buzzer() * 0.7),
    (47.55, whoosh()), (48.0, check()), (49.6, check()), (51.5, check()),
    (53.55, whoosh()), (54.0, chaching()),
    (57.4, whoosh(0.5)), (57.45, boom(65, 1.0, 0.7)), (58.6, pop()), (58.6, ding(1318.5) * 0.7),
]

sfx = np.zeros(int(TOTAL * SR) + SR)
for at, x in CUES:
    i = int(at * SR); sfx[i:i + len(x)] += x[: len(sfx) - i]
sfx = sfx[: int(TOTAL * SR)]
sfx /= max(1.0, np.abs(sfx).max() / 0.9)
write("sfx.wav", sfx)

# ---------------- background track: warm, hopeful, ~100 bpm ----------------
BPM = 100; beat = 60 / BPM; bar = beat * 4
n = int(TOTAL * SR); mus = np.zeros((n, 2))
def note(f, d, kind="pad"):
    t = t_(d)
    if kind == "pad":
        x = sum(np.sin(2 * np.pi * f * (1 + dt) * t + ph) for dt, ph in [(-0.003, 0), (0.0, 1.3), (0.004, 2.1)]) / 3
        x += 0.3 * np.sin(2 * np.pi * 2 * f * t)
        return x * env(len(t), 0.35, 0.6)
    if kind == "pluck":
        x = np.sin(2 * np.pi * f * t) + 0.35 * np.sin(2 * np.pi * 2 * f * t) + 0.12 * np.sin(2 * np.pi * 3 * f * t)
        return x * np.exp(-t * 6) * env(len(t), 0.004, 0.05)
    if kind == "bass":
        x = np.sin(2 * np.pi * f * t) + 0.2 * np.sin(2 * np.pi * 2 * f * t)
        return x * env(len(t), 0.01, 0.15) * np.exp(-t * 1.2)
def mtof(m): return 440 * 2 ** ((m - 69) / 12)
# I – V – vi – IV in C (C G Am F)
prog = [(48, [60, 64, 67, 71]), (43, [59, 62, 67, 74]), (45, [60, 64, 69, 72]), (41, [60, 65, 69, 72])]
arp_pat = [0, 2, 1, 3, 2, 1, 3, 2]
def put(x, at, gain, pan=0.0):
    i = int(at * SR)
    if i >= n: return
    x = x[: n - i]
    mus[i:i + len(x), 0] += x * gain * (1 - pan)
    mus[i:i + len(x), 1] += x * gain * (1 + pan)
k = 0; tb = 0.0
while tb < TOTAL:
    root, ch = prog[k % 4]
    for m in ch[:3]: put(note(mtof(m), bar + 0.4, "pad"), tb, 0.10)
    put(note(mtof(root - 12 + 12), bar, "bass"), tb, 0.22)
    put(note(mtof(root + 12 - 12), beat * 2, "bass"), tb + beat * 2, 0.16)
    for j in range(8):
        m = ch[arp_pat[j]] + 12
        put(note(mtof(m), beat, "pluck"), tb + j * beat / 2, 0.05, pan=0.3 if j % 2 else -0.3)
    for j in range(4):  # soft kick + shaker
        kt = t_(0.25); kick = np.sin(2 * np.pi * np.cumsum(55 * np.exp(-kt * 18) + 45) / SR) * np.exp(-kt * 14)
        put(kick, tb + j * beat, 0.30)
        sh = lp(rng.standard_normal(int(0.06 * SR)), 0.6); sh = (rng.standard_normal(len(sh)) - sh) * np.exp(-t_(0.06) * 60)
        put(sh, tb + j * beat + beat / 2, 0.05, pan=0.4)
    k += 1; tb += bar
fade = np.ones(n); fi = int(1.0 * SR); fade[:fi] = np.linspace(0.3, 1, fi)
fo = int(1.6 * SR); fade[-fo:] = np.linspace(1, 0, fo) ** 1.5
mus *= fade[:, None]
mus /= np.abs(mus).max() / 0.8
write("music.wav", mus)
print("ok")
