(function () {
  'use strict';
  var y, m, buf;

  function calendar(y, m) {
    var html, dateObj, days, i, firstDay, u, lengthMonth, lastDate, col;
    html = '<table>';

    y = Number(y);
    m = Number(m);
    dateObj = new Date(y, m - 1, 1);

    html += '<thead>';
    html += '<tr><th colspan=7>' + m + '月' + '</th></tr>';

    days = [
      '日',
      '月',
      '火',
      '水',
      '木',
      '金',
      '土'
    ];

    html += '<tr>';
    for (i = 0; i < 7; i += 1) {
      html += '<th>' + days[i] + '</th>';
    }
    html += '</tr>';

    html += '</thead>';
    html += '<tbody>';

    firstDay = dateObj.getDay();
    u = 0;
    if (firstDay !== 0) {
      html += '<tr>';
      for (1; u < firstDay; u += 1) {
        html += '<td>&nbsp;</td>';
      }
    }
    lengthMonth = [
      31, // 1
      28, // 2
      31, // 3
      30, // 4
      31, // 5
      30, // 6
      31, // 7
      31, // 8
      30, // 9
      31, // 10
      30, // 11
      31  // 12
    ];
    if ((y % 4 === 0 && y % 100 !== 0) || y % 400 === 0) {
      lengthMonth[1] = 29; // leap year
    }
    lastDate = lengthMonth[m - 1];

    col = 0;
    for (i = 1; i <= lastDate; i += 1) {
      if (u === 0) {
        html += '<tr>';
      }
      html += '<td>' + i + '</td>';
      if (u === 6) {
        u = 0;
        html += '</tr>';
        col += 1;
      } else {
        u += 1;
      }
    }
    if (u !== 0) {
      for (1; u < 7; u += 1) {
        html += '<td>&nbsp;</td>';
      }
      html += '</tr>';
      col += 1;
    }

    for (1; col < 6; col += 1) {
      html += '<tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>';
    }

    html += '</tbody>';
    html += '</table>';

    html = $(html);
    return html;
  }

  y = new Date().getFullYear();
  buf = [];
  for (m = 1; m <= 12; m += 1) {
    buf.push($('<div></div>').append(calendar(y, m))[0]);
  }

  buf = $(buf);
  $('#calendar').empty().append(buf);
}());


(function () {
  'use strict';
  var y;

  function addYear(elm, y) {
    var text;
    elm = $(elm);
    text = elm.text() + ' (' + y + '年)';
    elm.empty().append(text);
  }

  y = new Date().getFullYear();
  addYear('title', y);
  addYear('h2', y);
}());
