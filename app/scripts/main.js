/* eslint-disable */
(function() {
  'use strict';

  // Your custom JavaScript goes here
  // Masonry
  var elem = document.querySelector('.grid-masonry');
  var msnry = new Masonry(elem, {
    // options
    itemSelector: '.item',
    columnWidth: '.sizer',
    percentPosition: true
  });

  // window resize
  var resizeTimer;

  window.addEventListener('resize', function() {
    var windowWidth = window.innerWidth;
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function () {
      var msnryData = Masonry.data('.grid');
      if (windowWidth < 720) {

        if(msnryData) {
          msnry.destroy();
        }
      } else if (windowWidth >= 720 && !msnryData ) {
        msnry = new Masonry(elem, {
          // options
          itemSelector: '.item',
          columnWidth: '.sizer',
          percentPosition: true
        });
      }
    }, 250);
  });

  // imagesLoaded
  window.onload = function () {
    var container = document.querySelectorAll('.grid img');
    [].forEach.call(container, function (temp) {
      var img = new Image();
      img.src = temp.currentSrc;

      img.onload = function () {
        temp.parentNode.closest('.item').classList.add('loaded');
        msnry.layout();
      };
    });
  }
})();
