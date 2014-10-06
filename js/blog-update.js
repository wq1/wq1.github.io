(function() {
  var x = 0;
  $("tr.m").each(function(){
    var i = $(this).index("tr.m, tr.d");
    var j = i - x;
    if ( j == 1 ){
      $("tr.m, tr.d").eq(x).css("display", "none");
    }
    x = i;
  });
  var y = $("tr.m, tr.d").length - 1;
  if ( x == y ){
    $("tr.m, tr.d").eq(x).css("display", "none");
  }
}());
