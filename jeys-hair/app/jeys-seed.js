(function () {
  var J = function (k) { try { return JSON.parse(localStorage.getItem(k)); } catch (e) { return null; } };
  var W = function (k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} };
  var iso = function (d) { return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0'); };
  var base = new Date(); base.setHours(0, 0, 0, 0);
  var day = function (n) { var d = new Date(base); d.setDate(d.getDate() + n); if (d.getDay() === 0) d.setDate(d.getDate() + 1); return iso(d); };
  var S = { box: ['Box Braids longo', 420, 350], nago: ['Nagô desenhada', 180, 180], ful: ['Fulani Braids', 360, 400], cro: ['Crochet Braids', 300, 380], ret: ['Retoque / manutenção', 180, 150], rem: ['Remoção de tranças', 120, 100], god: ['Goddess / Boho Braids', 480, 450], nr: ['Nagô com rabo de cavalo', 300, 250] };
  var mk = function (code, dd, start, name, phone, email, sv, status, note, demo) {
    var services = sv.map(function (k) { return { name: S[k][0], min: S[k][1], price: S[k][2] }; });
    return { id: code, code: code, demo: demo, createdAt: Date.now(), name: name, phone: phone, email: email, note: note || '', services: services, date: day(dd), start: start, dur: services.reduce(function (a, x) { return a + x.min; }, 0), total: services.reduce(function (a, x) { return a + x.price; }, 0), partial: false, status: status };
  };
  var list = J('jeys_bookings') || [], changed = false;
  if (!J('jeys_seeded')) {
    list = list.concat([
      mk('JH-D100', 0, 480, 'Camila Souza', '(11) 98765-4321', null, ['box'], 'confirmado', '', true),
      mk('JH-D101', 0, 960, 'Bianca Lima', '(11) 97412-5580', null, ['nago'], 'pendente', '', true),
      mk('JH-D102', 1, 540, 'Larissa Santos', '(11) 96633-1209', null, ['rem', 'ret'], 'confirmado', '', true),
      mk('JH-D103', 1, 900, 'Juliana Alves', '(11) 95521-8874', null, ['nr'], 'pendente', '', true),
      mk('JH-D104', 2, 480, 'Fernanda Rocha', '(11) 94410-3367', null, ['god'], 'pendente', '', true),
      mk('JH-D105', 3, 600, 'Aline Costa', '(11) 99118-2045', null, ['cro'], 'confirmado', '', true),
      mk('JH-D106', 4, 480, 'Priscila Nunes', '(11) 98002-7731', null, ['ful'], 'pendente', '', true),
      mk('JH-D107', 5, 780, 'Tainá Oliveira', '(11) 97350-6612', null, ['nago'], 'cancelado', '', true),
      mk('JH-D108', -1, 540, 'Renata Dias', '(11) 96284-0093', null, ['box'], 'concluido', '', true)
    ]);
    W('jeys_seeded', true); changed = true;
  }
  if (!J('jeys_seeded_client')) {
    var em = 'ana.paula@teste.com', ph = '(11) 98123-4567', nm = 'Ana Paula Ferreira';
    var users = J('jeys_users') || [];
    if (!users.some(function (u) { return u.email === em; })) users.push({ email: em, pwd: 'jeys123', name: nm, phone: ph });
    W('jeys_users', users);
    list = list.concat([
      mk('JH-T201', 6, 540, nm, ph, em, ['box'], 'confirmado', 'Cor 1B, comprimento até a cintura.', true),
      mk('JH-T202', 12, 840, nm, ph, em, ['nago'], 'pendente', 'Desenho em zigue-zague, referência do Instagram.', true),
      mk('JH-T203', -21, 600, nm, ph, em, ['cro'], 'concluido', '', true),
      mk('JH-T204', -48, 540, nm, ph, em, ['ret'], 'concluido', '', true),
      mk('JH-T205', -9, 480, nm, ph, em, ['ful'], 'cancelado', '', true)
    ]);
    W('jeys_seeded_client', true); changed = true;
  }
  if (changed) W('jeys_bookings', list);
  window.dispatchEvent(new Event('jeys-seeded'));
})();
