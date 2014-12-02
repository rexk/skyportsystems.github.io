/* jshint browser:true */
/* global Zepto */

;(function (window, $, undefined) {
    function getEmailLink() {
        var coded = 'mEb1om1@gHtXEk1gtg1RGg.mEG';
        var key = 'KuoD4QHCVymRgAhqrdp8j6WO3P09EzfLnJFtGMavwNkYXIcesU2lZ7TSBxb5i1';
        var shift = coded.length;
        var link = '';
        var ltr = '';

        for (var i = 0; i < coded.length; i++) {
            if (key.indexOf(coded.charAt(i)) === -1) {
                ltr = coded.charAt(i);
                link += (ltr);
            } else {
                ltr = (key.indexOf(coded.charAt(i)) - shift + key.length) % key.length;
                link += (key.charAt(ltr));
            }
        }

        return 'mailto:' + link + '?subject=Request for Information About Skyport Systems';
    }

    $('.contact-section a i.icon-mail').parent('a').attr({
        href: getEmailLink()
    });
})(window, Zepto);
