(function () {
  "use strict";
  $.get("//wq1.github.io/", function (data) {
    $("title").append(" - " + $(data).filter("title").text());
    $("main").before($(data).filter("#wrapper").children("header"));
    $("main").after($(data).filter("#wrapper").children("footer"));
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
