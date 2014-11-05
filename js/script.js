(function () {
  'use strict';

  $.get('/', function (data) {
    var main, wrapper;
    data = $(data);

    $('title').append(' - ' + data.filter('title').html());

    main = $('main');
    wrapper = data.filter('#wrapper');
    main.before(wrapper.children('header'));
    main.after(wrapper.children('footer'));
  });
}());


(function () {
  'use strict';

  var pubdate, moddate, pubhtml, modhtml;
  pubdate = $('#pubdate');
  moddate = $('#moddate');
  pubhtml = $(pubdate.children().eq(1)).html();
  modhtml = $(moddate.children().eq(1)).html();

  if (pubhtml !== undefined && modhtml !== undefined) {
    if (pubhtml === modhtml) {
      moddate.css('display', 'none');
    }
  }
}());
