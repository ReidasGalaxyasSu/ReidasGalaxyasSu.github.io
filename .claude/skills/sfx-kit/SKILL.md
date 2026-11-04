---
name: sfx-kit
description: SFX Kit by Wyzowl - 320 original CC0 sound effects (WAV 48 kHz/24-bit) for videos, motion graphics, animations and interfaces, with data to choose, sync and mix each one - whooshes, swishes, swipes, risers, impacts, cinematic hits, booms, pops, UI clicks, keyboard, writing, notifications, shimmers, logo stings, celebration, money, digital, data count-ups. Use whenever composing or editing a video, reel, ad, explainer, product demo, logo reveal, motion graphic, Remotion/After Effects/CapCut timeline or an animated website that needs sound effects, or when the user asks for sfx, sound effects, efeitos sonoros, whoosh, transition sound, swoosh, pop, click sound, logo sting or audio for an animation.
license: CC0-1.0 (sounds and data). No credit required.
metadata:
  source: https://github.com/wyzowl/sfx-kit
  version: 1.0.0
  commit: 92780e7
---

# SFX Kit

320 sound effects synthesised by code (no recordings or samples), all **CC0**: use in anything,
commercial or not, no credit needed (optional credit: "SFX Kit by Wyzowl"). Every sound has its use,
what to avoid, length, **sync point** and level, so it can be placed in a timeline precisely.

This skill ships the data (`sounds.json`, `catalogue.md`, `GUIDE.md`, `sounds.schema.json`); the WAV
files (67 MB) are downloaded on demand by `scripts/sfx.py get` from the official repository, or read
from a local clone if `SFX_KIT_DIR` points to one (or a `sounds/` folder exists next to `sounds.json`).

## Workflow

1. **Find** by what happens on screen. Start with the table in `GUIDE.md` §1 (moment → sound), then
   browse `catalogue.md` (one line per sound) or search:
   `python3 scripts/sfx.py search whoosh slide --limit 5`. Check `use_for`, `avoid_for` and
   `fits_seconds` (the length of move the sound suits). Siblings differ in intensity (soft/hard),
   weight and length: pick soft/subtle variants for calm, corporate or voice-over-led videos.
2. **Place** with one rule: `start = moment − sync.at`. `python3 scripts/sfx.py place <id> <moment> [--rate r]`
   prints the start time, any head trim (when the start would be before 0), and the voice-over duck.
   `sync.meets` tells what kind of moment it meets: `instant` (a hit/pop/press frame), `action-start`
   (typing, writing, swipes, count-ups start with the action), `move-peak` (whooshes: middle of an
   ease-in-out move, ~¼ into an ease-out, ~¾ into an ease-in), `arrival` (risers, reverse whooshes end
   on the reveal), `release` (fallers, zip-outs follow the release).
3. **Fit**: change rate only within `adapt.rate` (pitch moves with it; divide all times by the rate);
   otherwise use the next length/speed. Trim with 10–30 ms fade-in / 20–50 ms fade-out (300 ms+ on long
   tails). Loops (clocks, typing, applause, static) loop from the middle with a short crossfade.
4. **Mix**: files are loudness-matched as they are (0 dB). Under speech, lower each sound by its
   `under_voiceover_db` where its body overlaps the voice. Sounds whose `avoid_for` starts with "On
   top of speech" (bass, stings, rings, alarms, busy celebrations, noisy glitches) should be timed into
   pauses. Tuned sounds are in C major (mostly pentatonic) so they agree with each other and with music
   in C/G/F major or A/E/D minor.
5. **Get the files**: `python3 scripts/sfx.py get <id> [<id>...] --out ./sfx`.

Restraint: one sound per meaningful moment, not one per element. A whoosh on the move and an impact on
the landing; a sting only at the logo/end card; rising `tone-step-1…5` for items appearing one by one.

## Quick picks

| Moment | Sound |
| --- | --- |
| Text/icon/card appears · disappears | `pop-small-in`, `pop-medium-in` · `pop-small-out`, `appear-poof` |
| Slide / move across | `whoosh-fast-soft` (0.12–0.44 s), `whoosh-medium-soft` (0.28–0.81 s), `whoosh-slow-soft` (0.52–1.5 s) |
| Scene change | `whoosh-slow-medium`, or `reverse-whoosh-medium-soft` into the cut |
| Build to a reveal | `riser-2s-soft` ending on `shimmer-medium-bright` or `boom-hit-medium` |
| Title/logo slam · opening logo · end logo | `cinematic-drum-big`, `impact-deep-hard` · `sting-bright-long`, `sting-airy-long` · `sting-warm-short` |
| UI: tap, click, hover, toggle | `click-tap-medium`, `click-button-medium`, `click-hover-soft`, `click-toggle-on-medium` |
| Typing | `keyboard-typing-steady-medium`, `keyboard-return-firm` |
| Success · error · message | `notification-success-soft` · `notification-error-soft` · `notification-message-in-soft` |
| Numbers counting, charts | `data-countup-medium` then `data-number-land`, `data-chart-reveal`, `data-bar-grow` |
| Tech / AI at work | `digital-scan-clear`, `digital-process-clear`, `digital-power-up` |

Full data model: end of `GUIDE.md` and `sounds.schema.json`. `python3 scripts/sfx.py info <id>` prints
one record (including `pairs_with`, `parts`, `tuning`, `span_seconds`).

## Use in code

- **Remotion**: `<Sequence from={Math.round(start_s * fps)}><Audio src={staticFile('sfx/pop-small-in.wav')} volume={db => …} /></Sequence>`.
- **ffmpeg** (mix at a time): `-i video.mp4 -i sfx.wav -filter_complex "[1:a]adelay=2400|2400,volume=-3dB[s];[0:a][s]amix=inputs=2:normalize=0" …`
  (`adelay` in ms = `start_s × 1000`).
- **Web**: preload short UI sounds with the Web Audio API, play on the interaction, keep them quiet and
  optional (respect a mute setting; never autoplay sound).
