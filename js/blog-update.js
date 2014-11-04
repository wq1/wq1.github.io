(function () {
  'use strict';

  function rmempty(a, b) {
    var x, base, rm;
    x = 0;
    base = $(a + ', ' + b);
    rm = [];

    $(a).each(function () {
      var i;
      i = base.index(this);
      if (i - x === 1) { rm.push(base.eq(x)); }
      x = i;
    });
    if (x === base.length - 1) { rm.push(base.eq(x)); }

    $.each(rm, function () { this.remove(); });
  }

  rmempty('tr.m', 'tr.d');
  rmempty('tr.y', 'tr.m');
}());


$('#revsw').on('click', function () {
  'use strict';
  var base, y, m, d, y0, m0, buf, sw;
  base = $('tr.y, tr.m, tr.d');

  y = [];
  m = [];
  d = [];
  $('tr.y').each(function () { y.push(base.index(this)); });
  $('tr.m').each(function () { m.push(base.index(this)); });
  $('tr.d').each(function () { d.push(base.index(this)); });
  y.reverse();
  m.reverse();
  d.reverse();

  buf = [];
  while (y.length) {
    buf.push(base.eq(y[0]));
    y0 = y.shift();
    while (y0 < m[0]) {
      buf.push(base.eq(m[0]));
      m0 = m.shift();
      while (m0 < d[0]) {
        buf.push(base.eq(d[0]));
        d.shift();
      }
    }
  }

  $('.main tbody').html(buf);

  sw = $(this);
  if (sw.html() === '▲') {
    sw.html('▼');
  } else {
    sw.html('▲');
  }
});
