(function () {
  'use strict';

  function rmempty(a, b) {
    var x, base, rm;
    x = 0;
    base = a + ', ' + b;
    rm = [];

    $(a).each(function () {
      var i;
      i = $(this).index(base);
      if (i - x === 1) { rm.push($(base).eq(x)); }
      x = i;
    });
    if (x === $(base).length - 1) { rm.push($(base).eq(x)); }

    $.each(rm, function () {
      this.remove();
    });
  }

  rmempty('tr.m', 'tr.d');
  rmempty('tr.y', 'tr.m');
}());


$('#revsw').on('click', function () {
  'use strict';
  var base, buf, y, m, d, y0, m0;
  base = 'tr.y, tr.m, tr.d';
  buf = [];

  y = [];
  m = [];
  d = [];
  $('tr.y').each(function () { y.push($(this).index(base)); });
  $('tr.m').each(function () { m.push($(this).index(base)); });
  $('tr.d').each(function () { d.push($(this).index(base)); });
  y.reverse();
  m.reverse();
  d.reverse();

  while (y.length) {
    buf.push($(base).eq(y[0])[0].outerHTML);
    y0 = y.shift();
    while (y0 < m[0]) {
      buf.push($(base).eq(m[0])[0].outerHTML);
      m0 = m.shift();
      while (m0 < d[0]) {
        buf.push($(base).eq(d[0])[0].outerHTML);
        d.shift();
      }
    }
  }

  buf.join('');
  $('.main tbody').html(buf);

  if ($(this).html() === '▲') {
    $(this).html('▼');
  } else {
    $(this).html('▲');
  }
});
