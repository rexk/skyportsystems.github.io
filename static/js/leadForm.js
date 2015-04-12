(function (win, $) {
    // Shows sales lead form
    $(".lead-message span").click(function () {
        $(".lead-form").css({
            display: 'inline-block'
        });
    });

    // Collapse sales lead form
    $(".button-collapse").click(function () {
        $(".lead-form").hide();
    });
})(window, Zepto);