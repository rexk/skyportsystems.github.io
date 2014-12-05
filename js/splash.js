/* jshint browser:true */
/* global Zepto */

;(function (window, $, undefined) {
    // Returns a random integer between min (included) and max (excluded)
    // Using Math.round() will give you a non-uniform distribution!
    // see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
    function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    }

    var IMAGE_PATH_PREFIX = '/images/background';
    var backgroundImages = [
        {
            name: 'newyork.jpg'
        },
        {
            name: 'newyork2.jpeg'
        },
        {
            name: 'newyork3.jpg'
        },
        {
            name: 'newyork4.jpg'
        },
        {
            name: 'sf.jpg'
        },
        {
            name: 'sf2.jpg',
            position: 'bottom'
        },
        {
            name: 'sf3.jpg'
        }
    ];

    var image = (function getBackgroundImage() {
        var img = backgroundImages[getRandomInt(0, backgroundImages.length)];
        img.url = IMAGE_PATH_PREFIX + '/' + img.name;
        return img;
    })();

    var splashContainer = $('#splash_container');

    splashContainer.css({
        'background-image': 'url(' + image.url + ')',
        'background-position': image.position || 'center'
    });

    // Hide/show navbar impl

    var navBar = $('#page_header');
    var navBarHeight = navBar.height();
    var isHidden = true;
    var NAV_BAR_TOLERANCE = 30;

    function checkNavPosition() {
        var top = splashContainer.position().top;
        var height = splashContainer.height();

        var diff = height - navBarHeight - NAV_BAR_TOLERANCE;

        if ((diff < top) && isHidden) {
            navBar.show();
            isHidden = false;
        } else if ((diff >= top) && !isHidden) {
            navBar.hide();
            isHidden = true;
        }
    }

    checkNavPosition();

    $(window.document).scroll(checkNavPosition);

})(window, Zepto);

