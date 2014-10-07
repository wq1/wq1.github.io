(function () {
  "use strict";
  var x, y, base;
  base = "tr.m, tr.d";
  function cmd(i) { $(base).eq(i).css("display", "none"); }
  x = 0;
  $("tr.m").each(function () {
    var i, j;
    i = $(this).index(base);
    j = i - x;
    if (j === 1) { cmd(x); }
    x = i;
  });
  y = $(base).length - 1;
  if (x === y) { cmd(x); }
}());
