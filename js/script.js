(function() {
  $("title").append(" - :wq! （仮称）");
  $.get("/header.html", function(data) {
    $("body").prepend(data);
  });
  $.get("/footer.html", function(data) {
    $("body").append(data);
  });
}());

(function() {
  var pubdate = $("#pubdate > *:nth-child(2)").html();
  var moddate = $("#moddate > *:nth-child(2)").html();
  if( pubdate !== void 0 && moddate !== void 0 ){
    if( pubdate == moddate ){
      $("#moddate").css("display","none");
    }
  }
}());
