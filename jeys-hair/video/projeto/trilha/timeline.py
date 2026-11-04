import json,sys
S=sys.argv[1]
# name, kind, start, end, clip, trim
scenes=[('opener','card',0,4,'opener',0),('intro','phone',4,9.5,'a_intro',0),('catalog','phone',9.5,18.5,'b_catalog',0.2),
('booking','phone',18.5,30,'c_booking',0.3),('sinal','card',30,34,'sinal',0),('conta','phone',34,41,'f_conta',1.0),
('admin','phone',41,49,'g_admin',0.6),('benef','card',49,52,'beneficios',0),('final','card',52,58,'final',0)]
out=[];taps=[]
for n,k,a,b,c,trim in scenes:
    d={'name':n,'kind':k,'start':a,'end':b,'src':c,'trim':trim}
    if k=='phone':
        j=json.load(open(f'{S}/rm/public/clips/{c}.json'))
        avail=j['dur']-trim-0.05
        rate=max(1.0,avail/(b-a)) if n!='intro' else 1.0
        d['rate']=round(rate,4)
        for e in j['events']:
            ft=a+(e['t']-trim)/rate
            if a<=ft<b: taps.append({'scene':n,'t':round(ft,3),'press':round(a+(e['t']+0.42-trim)/rate,3),'x':e['x'],'y':e['y']})
    out.append(d)
json.dump({'fps':30,'dur':58,'bpm':120,'scenes':out,'taps':taps},open(f'{S}/rm/src/timeline.json','w'),indent=1)
print(json.dumps(out,indent=0));print(taps)
