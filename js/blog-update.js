(function () {
  "use strict";

  function rmempty(a, b) {
    var x, base, rm;
    x = 0;
    base = a + ", " + b;
    rm = [];

    function cmd(i) {
      // $(base).eq(i).css("display", "none");
      rm.push($(base).eq(i));
    }

    $(a).each(function () {
      var i;
      i = $(this).index(base);
      if (i - x === 1) { cmd(x); }
      x = i;
    });
    if (x === $(base).length - 1) { cmd(x); }

    $.each(rm, function () {
      this.remove();
    });
  }

  rmempty("tr.m", "tr.d");
  rmempty("tr.y", "tr.m");
}());


$("#revsw").on("click", function () {
  "use strict";

  var base = "tr.y, tr.m, tr.d";
  var y, m, d;
  $.each(["y", "m", "d"], function () {
    var ymd = this;
    eval(ymd + " = []");
    $("tr." + ymd).each(function () {
      eval(ymd + ".push($(this).index(base))");
    });
  });

  y.reverse();
  m.reverse();
  d.reverse();

  var buf = [];
  function pusheq(ymd) {
    eval("buf.push($(base).eq(" + ymd + "[0])[0].outerHTML)");
  }
  var y0, m0;
  while (y.length) {
    pusheq("y");
    y0 = y.shift();
    while (y0 < m[0]) {
      pusheq("m");
      m0 = m.shift();
      while (m0 < d[0]) {
        pusheq("d");
        d.shift();
      }
    }
  }

  buf.join("");
  $(".main tbody").html(buf);

  if ($(this).html() === "▲") {
    $(this).html("▼");
  } else {
    $(this).html("▲");
  }
});
