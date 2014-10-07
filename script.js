(function () {
  "use strict";
  $("#update-table").load("./update/ #update-table > *");
}());

(function () {
  "use strict";
  $.ajax({ dataType: "text", url: "./js/script.js" });
  $.ajax({ dataType: "text", url: "./header.html" });
  $.ajax({ dataType: "text", url: "./footer.html" });
}());
