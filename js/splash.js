/* jshint browser:true */
/* global Zepto */

;(function (window, $, undefined) {
    var IMAGE_PATH_PREFIX = '/images/background';
    var backgroundImages = [
        'newyork.jpg',
        'newyork2.jpeg',
        'newyork3.jpg',
        'newyork4.jpg',
        'sf.jpg',
        'sf3.jpg'
    ];

    // Returns a random integer between min (included) and max (excluded)
    // Using Math.round() will give you a non-uniform distribution!
    // see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
    function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    }

    function getBackgroundURL() {
        return IMAGE_PATH_PREFIX + '/' + backgroundImages[getRandomInt(0, backgroundImages.length)];
    }

    var imgUrl = getBackgroundURL();

    $('.splash-container').css({
        'background-image': 'url(' + imgUrl + ')'
    });

    $(document).ready(function () {
        var navBar = $('#page_header');
        var splashContainer = $('#splash_container');
        var navBarHeight = navBar.height();
        navBar.show();
        var isHidden = false;
        var checkNavPosition = function () {
            var top = splashContainer.position().top;
            var height = splashContainer.height();
            if ((height - navBarHeight - 30) < top && isHidden) {
                isHidden = false;
                navBar.show();
            } else if ((height - navBarHeight - 30) >= top && !isHidden) {
                navBar.hide();
                isHidden = true;
            }
        };

        checkNavPosition();
        $(document).scroll(checkNavPosition);
    });

})(window, Zepto);

