(function () {
  'use strict';

  $.get('/', function (data) {
    var main, wrapper;
    data = $(data);

    $('title').append(' - ' + data.filter('title').text());

    main = $('main');
    wrapper = data.filter('#wrapper');
    main.before(wrapper.children('header'));
    main.after(wrapper.children('footer'));
  });
}());


(function () {
  'use strict';
  var pubdate, moddate;
  pubdate = $('#pubdate > *:nth-child(2)').html();
  moddate = $('#moddate > *:nth-child(2)').html();
  if (pubdate !== undefined && moddate !== undefined) {
    if (pubdate === moddate) {
      $('#moddate').css('display', 'none');
    }
  }
}());
