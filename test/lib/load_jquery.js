(function() {
  var src = '../common/js/jquery.js';
  var mpjs = window.mochaPhantomJS;
  var v;
  if (mpjs && mpjs.env.JQUERY_VERSION) {
    src = 'http://ajax.googleapis.com/ajax/libs/jquery/' + mpjs.env.JQUERY_VERSION + '/jquery.js';
  }

  document.write('<script src="' + src + '"></script>');
  document.write('<script>console.log("Load jQuery: " + $.fn.jquery)</script>');
})();
