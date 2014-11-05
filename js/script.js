(function () {
  'use strict';

  $.get('/', function (data) {
    var title, titleNew, main, wrapper;
    data = $(data);

    title = $('title');
    titleNew = title.text() + ' - ' + data.filter('title').text();
    title.empty().append(titleNew);

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
  pubhtml = $(pubdate.children().eq(1)).text();
  modhtml = $(moddate.children().eq(1)).text();

  if (pubhtml === modhtml) { moddate.css('display', 'none'); }
}());
