(function () {
  'use strict';
  $.get('/update/', function (data) {
    var max = 10;
    $('#update-table > tbody').html($('#update-table tr.d', data).slice(0, max));
    $('#update-num').html(max);
  });
  $.get('/blog/', function (data) {
    var max = 5;
    $('#blog-table > tbody').html($('#blog-table tr.d', data).slice(0, max));
    $('#blog-num').html(max);
  });
}());
