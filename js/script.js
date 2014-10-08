(function () {
  "use strict";
  $("title").append(" - :wq! （仮称）");
  $.get("//wq1.github.io/header.html", function (data) {
    $("#wrapper").prepend(data);
  });
  $.get("//wq1.github.io/footer.html", function (data) {
    $("#wrapper").append(data);
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
