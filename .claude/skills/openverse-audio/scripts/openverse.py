#!/usr/bin/env python3
"""Openverse audio helper (stdlib only). Searches openly licensed audio (music, sound effects,
podcasts…) indexed by Openverse (Jamendo, Freesound, Wikimedia Commons, ccMixter and more),
downloads it and keeps the attribution.

  python3 openverse.py search "cinematic whoosh" --category sound_effect --license-type commercial --length short
  python3 openverse.py search "corporate upbeat" --category music --license-type commercial,modification -n 10
  python3 openverse.py info <uuid>
  python3 openverse.py get <uuid> [<uuid>...] --out ./audio      # saves file + appends credits.json
  python3 openverse.py credits --out ./audio                      # prints the credit lines

Optional auth (higher rate limits): set OPENVERSE_CLIENT_ID and OPENVERSE_CLIENT_SECRET
(register once at https://api.openverse.org/v1/#tag/auth). Base URL: OPENVERSE_API.
"""
import argparse, json, os, re, shutil, sys, urllib.parse, urllib.request
from pathlib import Path

API = os.environ.get('OPENVERSE_API', 'https://api.openverse.org/v1').rstrip('/')
UA = 'openverse-audio-skill/1.0 (+https://github.com/WordPress/openverse)'
_token = None

def token():
    global _token
    cid, sec = os.environ.get('OPENVERSE_CLIENT_ID'), os.environ.get('OPENVERSE_CLIENT_SECRET')
    if not (cid and sec) or _token:
        return _token
    body = urllib.parse.urlencode({'grant_type': 'client_credentials', 'client_id': cid, 'client_secret': sec}).encode()
    req = urllib.request.Request(f'{API}/auth_tokens/token/', data=body, headers={'User-Agent': UA})
    with urllib.request.urlopen(req, timeout=30) as r:
        _token = json.load(r)['access_token']
    return _token

def call(path, params=None):
    url = f'{API}{path}' + ('?' + urllib.parse.urlencode({k: v for k, v in (params or {}).items() if v not in (None, '')}) if params else '')
    headers = {'User-Agent': UA, 'Accept': 'application/json'}
    if token():
        headers['Authorization'] = f'Bearer {token()}'
    try:
        with urllib.request.urlopen(urllib.request.Request(url, headers=headers), timeout=30) as r:
            return json.load(r)
    except urllib.error.HTTPError as e:
        sys.exit(f'Openverse API error {e.code}: {e.read()[:300].decode(errors="replace")}')
    except urllib.error.URLError as e:
        sys.exit(f'Cannot reach {API}: {e.reason}. Check network access to api.openverse.org.')

def lic(r):
    v = r.get('license_version') or ''
    name = (r.get('license') or '').upper()
    return f"CC {name} {v}".strip() if name not in ('CC0', 'PDM') else ('CC0 1.0' if name == 'CC0' else 'Public Domain Mark')

def credit(r):
    return r.get('attribution') or (f'"{r.get("title")}" by {r.get("creator") or "unknown"}, {lic(r)} '
                                    f'({r.get("license_url")}), via Openverse: {r.get("foreign_landing_url")}')

def line(r):
    dur = r.get('duration')
    dur = f'{dur / 1000:.1f}s' if isinstance(dur, (int, float)) else '?s'
    return (f"{r['id']}  {dur:>7}  {lic(r):<16} {r.get('source','')}/{r.get('filetype') or '?'}\n"
            f"    {r.get('title')} — {r.get('creator') or 'unknown'}\n    {r.get('foreign_landing_url')}")

def main():
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    sub = ap.add_subparsers(dest='cmd', required=True)
    s = sub.add_parser('search')
    s.add_argument('q')
    s.add_argument('--category', help='music, sound_effect, podcast, audiobook, news, pronunciation (comma list)')
    s.add_argument('--license-type', default='commercial', help='commercial, modification (comma list); "all" for any')
    s.add_argument('--license', help='cc0, by, by-sa, pdm… (comma list)')
    s.add_argument('--length', help='shortest, short, medium, long')
    s.add_argument('--source', help='e.g. freesound, jamendo, wikimedia_audio, ccmixter')
    s.add_argument('--extension', help='mp3, wav, ogg, flac… (comma list)')
    s.add_argument('-n', '--page-size', type=int, default=10)
    s.add_argument('--page', type=int, default=1)
    s.add_argument('--json', action='store_true')
    i = sub.add_parser('info'); i.add_argument('id')
    g = sub.add_parser('get'); g.add_argument('ids', nargs='+'); g.add_argument('--out', default='audio')
    c = sub.add_parser('credits'); c.add_argument('--out', default='audio')
    a = ap.parse_args()

    if a.cmd == 'search':
        params = {'q': a.q, 'category': a.category, 'license': a.license, 'length': a.length,
                  'source': a.source, 'extension': a.extension, 'page_size': a.page_size, 'page': a.page,
                  'license_type': None if a.license_type == 'all' else a.license_type}
        d = call('/audio/', params)
        if a.json:
            print(json.dumps(d, indent=2, ensure_ascii=False)); return
        print(f"{d.get('result_count', 0)} results (page {a.page} of {d.get('page_count', '?')})")
        for r in d.get('results', []):
            print(line(r))
    elif a.cmd == 'info':
        print(json.dumps(call(f'/audio/{a.id}/'), indent=2, ensure_ascii=False))
    elif a.cmd == 'get':
        out = Path(a.out); out.mkdir(parents=True, exist_ok=True)
        cfile = out / 'credits.json'
        credits = json.loads(cfile.read_text()) if cfile.exists() else []
        for uid in a.ids:
            r = call(f'/audio/{uid}/')
            url = r.get('url')
            if not url:
                print(f'{uid}: no direct file url; open {r.get("foreign_landing_url")}'); continue
            ext = (r.get('filetype') or Path(urllib.parse.urlparse(url).path).suffix.lstrip('.') or 'mp3').lower()
            slug = re.sub(r'[^a-z0-9]+', '-', (r.get('title') or uid).lower()).strip('-')[:50] or uid
            dest = out / f'{slug}-{uid[:8]}.{ext}'
            req = urllib.request.Request(url, headers={'User-Agent': UA})
            try:
                with urllib.request.urlopen(req, timeout=120) as resp, open(dest, 'wb') as f:
                    shutil.copyfileobj(resp, f)
            except Exception as e:
                print(f'{uid}: download failed ({e}); source page: {r.get("foreign_landing_url")}'); continue
            entry = {'id': uid, 'file': dest.name, 'title': r.get('title'), 'creator': r.get('creator'),
                     'license': lic(r), 'license_url': r.get('license_url'), 'source': r.get('source'),
                     'landing_url': r.get('foreign_landing_url'), 'credit': credit(r)}
            credits = [c for c in credits if c['id'] != uid] + [entry]
            print(f'{dest}  [{entry["license"]}]')
        cfile.write_text(json.dumps(credits, indent=2, ensure_ascii=False))
        print(f'credits saved to {cfile}')
    elif a.cmd == 'credits':
        cfile = Path(a.out) / 'credits.json'
        if not cfile.exists():
            sys.exit('no credits.json yet')
        for c in json.loads(cfile.read_text()):
            print(c['credit'])

if __name__ == '__main__':
    main()
