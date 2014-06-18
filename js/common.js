$(function() {
  $.get("/hoge/header.html", function(data) {
    $("body").prepend(data);
  });
  $.get("/hoge/footer.html", function(data) {
    $("body").append(data);
  });
});
