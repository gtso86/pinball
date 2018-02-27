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

  // imagesLoaded
  window.onload = function () {
    var container = document.querySelectorAll('.grid img');
    console.log(container);

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
