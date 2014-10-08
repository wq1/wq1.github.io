(function () {
  "use strict";
  $("title").append(" - :wq! （仮称）");
  $.get("//wq1.github.io/header.html", function (data) {
    $("main").before(data);
  });
  $.get("//wq1.github.io/footer.html", function (data) {
    $("main").after(data);
  });
}());

(function () {
  "use strict";
  var pubdate, moddate;
  pubdate = $("#pubdate > *:nth-child(2)").html();
  moddate = $("#moddate > *:nth-child(2)").html();
  if (pubdate !== undefined && moddate !== undefined) {
    if (pubdate === moddate) {
      $("#moddate").css("display", "none");
    }
  }
}());
