import json,re
T0=2.33
W=[w for s in json.load(open('v/words.json')) for w in s['words']]
W=[w for w in W if w['s']>=T0-0.05]
fix={'caixa,':'Caixa,','subi,':'sobem,','primeira':'primeiro','segunda':'segundo','uns':'os'}
words=[]
for w in W:
    t=w['w'].strip(); t=fix.get(t,t)
    words.append({'t':t,'s':round(w['s']-T0,3),'e':round(w['e']-T0,3)})
# merge "não viu" punctuation tweak
for x in words:
    if x['t']=='caros,' and abs(x['s']-(37.14-T0))<0.05: x['t']='caros'
    if x['t']=='não' and abs(x['s']-(37.50-T0))<0.05: x['t']='não,'
KEY={'juros':'gold','aumentaram':'red','privados':'gold','planta':'gold','caixa':'gold','nada':'red','desculpa':'red','apartamento':'gold','casa':'gold','ano':'gold','baixar':'green','sobem':'green','decolar':'green','preços':'gold','eleição':'red','incerteza':'red','caros':'red','procura':'green','aumentar':'green','aluguel':'red','imóvel':'gold','imóveis':'gold','futuro':'gold','renda':'gold','fixa':'gold','moeda':'gold','forte':'gold','compra':'gold','abaixar':'green','mudou':'red','comprar':'gold'}
for x in words:
    k=re.sub(r'[^\wçãõáéíóúâêô]','',x['t'].lower())
    x['c']=KEY.get(k)
# chunking
chunks=[];cur=[]
for i,x in enumerate(words):
    cur.append(x)
    ln=sum(len(y['t'])+1 for y in cur)
    nxt=words[i+1] if i+1<len(words) else None
    brk = x['t'][-1] in ',.?' or ln>=15 or len(cur)>=3 or (nxt and nxt['s']-x['e']>0.3)
    if nxt and not brk and ln+len(nxt['t'])>18: brk=True
    if brk or not nxt:
        chunks.append(cur);cur=[]
out=[]
for i,c in enumerate(chunks):
    st=c[0]['s']; en=c[-1]['e']
    if i+1<len(chunks): en=min(max(en,st+0.4),chunks[i+1][0]['s'])
    out.append({'s':st,'e':en,'w':c})
json.dump(out,open('rm/src/captions.json','w'),ensure_ascii=False)
for c in out: print(f"{c['s']:6.2f}-{c['e']:6.2f}", ' '.join(w['t'] for w in c['w']))
