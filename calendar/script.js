(function () {
  'use strict';

  var date, y;
  date = new Date();
  y = date.getFullYear();

  (function () {
    function addYear(elm, y) {
      var text;
      elm = $(elm);
      text = elm.text() + ' (' + y + '年)';
      elm.empty().append(text);
    }

    addYear('title', y);
    addYear('h2', y);
  }());

  (function () {
    var m, buf, holidays, t, days, i;

    function ymd(y, m, d) {
      return y + '-' + ('0' + m).slice(-2) + '-' + ('0' + d).slice(-2);
    }

    function calendar(y, m) {
      var html, days, u, firstDay, lengthMonth, row, d;

      y = Number(y);
      m = Number(m);

      html = '<table><thead><tr><th colspan=7>' + m + '月' + '</th></tr>';

      days = [
        '日', // Sunday
        '月', // Monday
        '火', // Tuesday
        '水', // Wednesday
        '木', // Thursday
        '金', // Friday
        '土'  // Saturday
      ];

      html += '<tr>';
      for (u = 0; u <= 6; u += 1) {
        html += '<th>' + days[u] + '</th>';
      }
      html += '</tr></thead><tbody>';

      firstDay = new Date(y, m - 1, 1).getDay();
      u = 0;
      if (firstDay !== 0) {
        html += '<tr>';
        for (1; u < firstDay; u += 1) {
          html += '<td>&nbsp;</td>';
        }
      }
      lengthMonth = [
        31, //  1st
        28, //  2nd
        31, //  3rd
        30, //  4th
        31, //  5th
        30, //  6th
        31, //  7th
        31, //  8th
        30, //  9th
        31, // 10th
        30, // 11th
        31  // 12th
      ];
      if ((y % 4 === 0 && y % 100 !== 0) || y % 400 === 0) {
        lengthMonth[1] = 29; // leap year
      }

      row = 0;
      for (d = 1; d <= lengthMonth[m - 1]; d += 1) {
        if (u === 0) {
          html += '<tr>';
        }
        html += '<td id="' + ymd(y, m, d) + '">' + d + '</td>';
        if (u === 6) {
          u = 0;
          html += '</tr>';
          row += 1;
        } else {
          u += 1;
        }
      }
      if (u !== 0) {
        for (1; u <= 6; u += 1) {
          html += '<td>&nbsp;</td>';
        }
        html += '</tr>';
        row += 1;
      }

      for (1; row < 6; row += 1) {
        html += '<tr>';
        for (u = 1; u <= 7; u += 1) {
          html += '<td>&nbsp;</td>';
        }
        html += '</tr>';
      }

      html += '</tbody></table>';

      html = $(html);
      return html;
    }

    function nthday(y, m, nth, u) {
      var d;
      for (d = 1; d <= 7; d += 1) {
        if (new Date(y, m - 1, d).getDay() === u) { break; }
      }
      d = d + (nth - 1) * 7;
      return d;
    }

    buf = [];
    for (m = 1; m <= 12; m += 1) {
      buf.push($('<div>').append(calendar(y, m))[0]);
    }
    buf = $(buf);

    t = [[], [], [], [], [], [], []];
    buf.find('tr').not('thead > tr:nth-child(1)').children().each(function (i) {
      t[i % 7].push(this);
    });
    days = [
      'sunday',    // 0
      'monday',    // 1
      'tuesday',   // 2
      'wednesday', // 3
      'thursday',  // 4
      'friday',    // 5
      'saturday'   // 6
    ];

    for (i = 0; i <= 6; i += 1) {
      $(t[i]).addClass(days[i]);
    }

    holidays = [
      [1, 1],   // 元日
      [1, nthday(y, 1, 2, 1)],   // 成人の日
      [2, 11],  // 建国記念の日
      [3, Math.floor(20.8431 + 0.242194 * (y - 1980) - Math.floor((y - 1980) / 4))], // 春分の日 (〜2099)
      [4, 29],  // 昭和の日
      [5, 3],   // 憲法記念日
      [5, 4],   // みどりの日
      [5, 5],   // こどもの日
      [7, nthday(y, 7, 3, 1)],   // 海の日
      // [8, 11],  // 山の日 (2016〜)
      [9, nthday(y, 9, 3, 1)],   // 敬老の日
      [9, Math.floor(23.2488 + 0.242194 * (y - 1980) - Math.floor((y - 1980) / 4))], // 秋分の日 (〜2099)
      [10, nthday(y, 10, 2, 1)], // 体育の日
      [11, 3],  // 文化の日
      [11, 23], // 勤労感謝の日
      [12, 23]  // 天皇誕生日
    ];

    t = [];
    $.each(holidays, function () {
      var m, d;
      m = this[0];
      d = this[1];

      if (this.toString() === [t[0], t[1] + 2].toString()) {
        holidays.push([m, d - 1]); // 国民の休日
      }
      t = this;

      if (new Date(y, m - 1, d).getDay() === 0) {
        holidays.push([m, d + 1]); // 振替休日
      }
    });

    if (new Date(y, 5 - 1, 5).getDay() <= 3) {
      holidays.push([5, 6]); // 振替休日 (GW)
    }

    t = [];
    $.each(holidays, function () {
      t.push(buf.find('#' + ymd(y, this[0], this[1]))[0]);
    });
    $(t).addClass('holiday');

    buf.find('#' + ymd(date.getFullYear(), date.getMonth() + 1, date.getDate())).addClass('today');

    $('#calendar').empty().append(buf);
  }());
}());
