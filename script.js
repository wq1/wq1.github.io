(function () {
  'use strict';

  $.get('/update/', function (data) {
    var max = 10;
    $('#update-table').children('tbody').empty().append($(data).filter('#wrapper').find('#update-table tr.d').slice(0, max));
    $('#update-num').empty().append(max);
  });

  $.get('/blog/', function (data) {
    var max = 5;
    $('#blog-table').children('tbody').empty().append($(data).filter('#wrapper').find('#blog-table tr.d').slice(0, max));
    $('#blog-num').empty().append(max);
  });
}());
