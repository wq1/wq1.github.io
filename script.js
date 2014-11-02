(function () {
  "use strict";
  $.get("//wq1.github.io/update/", function (data) {
    var num = 10;
    $("#update-table > tbody").html($("#update-table tr.d", data).slice(0, num));
    $("#update-num").html(num);
  });
  $.get("//wq1.github.io/blog/", function (data) {
    var num = 5;
    $("#blog-table > tbody").html($("#blog-table tr.d", data).slice(0, num));
    $("#blog-num").html(num);
  });
}());
