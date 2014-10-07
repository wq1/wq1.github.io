(function () {
  "use strict";
  $("#update-table").load("//wq1.github.io/update/ #update-table > *");
}());

(function () {
  "use strict";
  function prefetch(url) {
    $.ajax({
      type: "GET",
      url: url,
      dataType: "text"
    });
  }
  prefetch("//wq1.github.io/js/script.js");
  prefetch("//wq1.github.io/header.html");
  prefetch("//wq1.github.io/footer.html");
}());
