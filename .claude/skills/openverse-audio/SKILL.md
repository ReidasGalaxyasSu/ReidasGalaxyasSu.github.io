---
name: openverse-audio
description: Search and download openly licensed audio through the Openverse API (WordPress/openverse) - music tracks, sound effects, ambiences, podcasts and pronunciations from Jamendo, Freesound, Wikimedia Commons, ccMixter and other sources - filtered for commercial use, with the licence and attribution saved for every file. Use when composing or editing a video, reel, ad, explainer, presentation, game or website that needs background music, a soundtrack, ambience or a sound effect not in SFX Kit, or when the user asks for royalty-free, Creative Commons or free music, trilha sonora, música de fundo, áudio livre, efeitos sonoros or Openverse.
license: Skill text and script MIT (same as the Openverse code). Each audio file keeps its own licence (CC0, PDM, CC BY, CC BY-SA, etc.).
metadata:
  source: https://github.com/WordPress/openverse
  commit: be9d693
  api: https://api.openverse.org/v1/
---

# Openverse audio

Openverse (by WordPress) indexes hundreds of thousands of openly licensed audio files. The GitHub
repository is the platform itself (API, catalogue, frontend); what a video project needs from it is
the **public API**, which this skill wraps in `scripts/openverse.py` (Python stdlib, no install).

## Workflow

1. **Search** with the use already decided, so the licence fits:
   ```bash
   python3 scripts/openverse.py search "corporate inspiring piano" --category music --license-type commercial -n 10
   python3 scripts/openverse.py search "whoosh" --category sound_effect --length shortest
   ```
   - `--license-type commercial` (default) excludes NC licences; add `,modification` when you will cut,
     loop, speed up or mix the audio (excludes ND). `--license cc0,pdm` for no-attribution material.
   - `--category`: `music`, `sound_effect`, `podcast`, `audiobook`, `news`, `pronunciation`.
   - `--length`: `shortest`, `short`, `medium`, `long`. `--source`: `jamendo`, `freesound`,
     `wikimedia_audio`, `ccmixter`… `--extension mp3,wav,flac,ogg`.
   - Search words in English work best. Query ≤ 200 characters. `--json` prints the raw response.
2. **Listen before choosing.** Open the `foreign_landing_url` (or play the downloaded file); check
   quality, loudness and that the track has no voice/lyrics under narration.
3. **Download with credits**: `python3 scripts/openverse.py get <id> [<id>...] --out ./audio`. Each file
   is saved with an entry in `./audio/credits.json` (title, creator, licence, links, ready credit line).
4. **Credit**: `python3 scripts/openverse.py credits --out ./audio` prints the lines for the video
   description, end card or site footer. CC BY / BY-SA require it; CC0 and PDM do not (still good form).

## Licence rules (always)

| Licence | Commercial video | Edit/cut/loop | Credit | Notes |
| --- | --- | --- | --- | --- |
| CC0, PDM | yes | yes | not required | best for ads |
| CC BY | yes | yes | **required** | |
| CC BY-SA | yes | yes | **required** | derivative audio must be shared alike; avoid for client ads |
| CC BY-ND | yes | **no** (no edits, no loops, no remix) | required | only use as-is |
| CC BY-NC (any NC) | **no** | — | — | never for client or monetised work |

Openverse does not verify licences; the source page is the authority. Keep `credits.json` with the
project. Jamendo also sells separate commercial licences; what applies to a free download is the CC licence
shown, so confirm it on the track page before using it in an ad. Never present found audio as original or as the client's own.

## Combining with SFX Kit

Use the **`sfx-kit`** skill for interface and motion sound effects (whooshes, pops, clicks, stings,
risers; CC0, already sync-tagged and loudness-matched). Use Openverse for **music beds, ambiences and
specific real-world sounds** SFX Kit doesn't have. Mix the music bed about 18–24 dB under a voice-over
(duck under speech), and keep effects on top following SFX Kit's levels.

## Notes

- Anonymous API use is rate limited. For heavy use, register an application
  (`POST https://api.openverse.org/v1/auth_tokens/register/`, then verify the email) and set
  `OPENVERSE_CLIENT_ID` and `OPENVERSE_CLIENT_SECRET`; the script fetches the token itself.
- The environment needs network access to `api.openverse.org` and to the file hosts
  (Freesound, Jamendo, Wikimedia…). If blocked, give the user the search URL
  `https://openverse.org/search/audio?q=<words>&license_type=commercial` to pick by hand.
- `info <id>` prints the full record (alt files, waveform, tags, sample rate, genres).
