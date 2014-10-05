(function() {
  $("#update-table").load("update/ #update-table > *");
}());

(function() {
  $.ajax({dataType: "text", url: "js/script.js"});
  $.ajax({dataType: "text", url: "header.html"});
  $.ajax({dataType: "text", url: "footer.html"});
}());
