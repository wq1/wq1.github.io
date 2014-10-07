(function () {
  "use strict";
  $("#update-table").load("./update/ #update-table > *");
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
  prefetch("./js/script.js");
  prefetch("./header.html");
  prefetch("./footer.html");
}());
