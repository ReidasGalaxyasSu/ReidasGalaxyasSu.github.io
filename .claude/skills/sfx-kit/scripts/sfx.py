#!/usr/bin/env python3
"""SFX Kit helper (stdlib only).

  python3 sfx.py search whoosh slide [--category whooshes] [--limit 10]
  python3 sfx.py info pop-small-in
  python3 sfx.py place pop-small-in 2.40 [--rate 1.1]   # start time so the sync point meets 2.40 s
  python3 sfx.py get pop-small-in whoosh-fast-soft --out ./sfx
  python3 sfx.py categories

The WAV files are fetched on demand from the official repository (CC0) unless a local
sounds/ folder exists next to sounds.json or SFX_KIT_DIR points to a full clone.
"""
import argparse, json, os, shutil, sys, urllib.request
from pathlib import Path

HERE = Path(__file__).resolve().parent.parent
RAW = os.environ.get('SFX_KIT_RAW', 'https://raw.githubusercontent.com/wyzowl/sfx-kit/main/')

def load():
    return json.loads((HERE / 'sounds.json').read_text(encoding='utf-8'))

def by_id(data, sid):
    for s in data['sounds']:
        if s['id'] == sid:
            return s
    sys.exit(f'unknown sound id: {sid} (try: sfx.py search {sid.split("-")[0]})')

def score(s, words):
    hay = {
        'id': s['id'], 'name': s['name'].lower(), 'desc': s['description'].lower(),
        'use': ' '.join(s.get('use_for', [])).lower(), 'tags': ' '.join(s.get('tags', [])).lower(),
        'avoid': ' '.join(s.get('avoid_for', [])).lower(), 'cat': s['category'],
    }
    total = 0
    for w in words:
        w = w.lower()
        hit = 0
        hit += 4 if w in hay['id'] else 0
        hit += 3 if w in hay['tags'].split() else 0
        hit += 2 if w in hay['use'] else 0
        hit += 1 if (w in hay['name'] or w in hay['desc'] or w in hay['cat']) else 0
        if hit == 0:
            return 0
        total += hit
    return total

def fmt(s):
    fit = s.get('fits_seconds')
    fit = f' fits {fit[0]}-{fit[1]}s' if fit else ''
    return (f"{s['id']:<34} {s['duration']:.2f}s sync@{s['sync']['at']:.3f} ({s['sync']['meets']}){fit}\n"
            f"    {s['description']}\n    use: {'; '.join(s.get('use_for', [])[:3])}\n    avoid: {'; '.join(s.get('avoid_for', [])[:2])}")

def local_wav(s):
    roots = [Path(os.environ['SFX_KIT_DIR'])] if os.environ.get('SFX_KIT_DIR') else []
    roots.append(HERE)
    for r in roots:
        p = r / s['file']
        if p.exists():
            return p
    return None

def main():
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    sub = ap.add_subparsers(dest='cmd', required=True)
    a = sub.add_parser('search'); a.add_argument('words', nargs='+'); a.add_argument('--category'); a.add_argument('--limit', type=int, default=10)
    a = sub.add_parser('info'); a.add_argument('id')
    a = sub.add_parser('place'); a.add_argument('id'); a.add_argument('moment', type=float); a.add_argument('--rate', type=float, default=1.0)
    a = sub.add_parser('get'); a.add_argument('ids', nargs='+'); a.add_argument('--out', default='sfx')
    sub.add_parser('categories')
    args = ap.parse_args()
    data = load()

    if args.cmd == 'categories':
        for c in data['categories']:
            cid = c['id'] if isinstance(c, dict) else c
            n = sum(1 for s in data['sounds'] if s['category'] == cid)
            desc = c.get('description', '') if isinstance(c, dict) else ''
            print(f'{cid:<22} {n:>3}  {desc}')
    elif args.cmd == 'search':
        pool = [s for s in data['sounds'] if not args.category or s['category'] == args.category]
        ranked = sorted(((score(s, args.words), s) for s in pool), key=lambda t: -t[0])
        ranked = [s for sc, s in ranked if sc > 0][:args.limit]
        if not ranked:
            print('no match; try fewer or broader words, or read catalogue.md'); return
        for s in ranked:
            print(fmt(s))
    elif args.cmd == 'info':
        print(json.dumps(by_id(data, args.id), indent=2, ensure_ascii=False))
    elif args.cmd == 'place':
        s = by_id(data, args.id)
        lo, hi = s.get('adapt', {}).get('rate', [1, 1])
        if not (lo <= args.rate <= hi):
            print(f'warning: rate {args.rate} outside the safe range {lo}-{hi}', file=sys.stderr)
        sync = s['sync']['at'] / args.rate
        start = args.moment - sync
        trim = max(0.0, -start)
        print(json.dumps({'id': s['id'], 'start_s': round(max(0.0, start), 4), 'trim_head_s': round(trim * args.rate, 4),
                          'rate': args.rate, 'length_on_timeline_s': round(s['duration'] / args.rate - trim, 4),
                          'under_voiceover_db': s.get('under_voiceover_db'), 'meets': s['sync']['meets'],
                          'how': s['sync']['how']}, indent=2, ensure_ascii=False))
    elif args.cmd == 'get':
        out = Path(args.out); out.mkdir(parents=True, exist_ok=True)
        for sid in args.ids:
            s = by_id(data, sid)
            dest = out / Path(s['file']).name
            src = local_wav(s)
            if src:
                shutil.copyfile(src, dest)
            else:
                req = urllib.request.Request(RAW + s['file'], headers={'User-Agent': 'sfx-kit-skill/1.0'})
                with urllib.request.urlopen(req, timeout=60) as r, open(dest, 'wb') as f:
                    shutil.copyfileobj(r, f)
            print(f'{dest}  ({dest.stat().st_size // 1024} KB)')
        print('Licence: CC0 1.0, no credit required (optional: "SFX Kit by Wyzowl").')

if __name__ == '__main__':
    main()
