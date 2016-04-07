/*!
 * jquery-alert v1.0
 *
 * Copyright 2015-2016 jquery-confirm
 * Licensed under GPL
 */

if (typeof jQuery === 'undefined') {
    throw new Error('jquery-confirm requires jQuery');
}

(function ($) {
    "use strict";

    $.fn.confirm = function (text) {

        return $(window.confirm.call(window,[text]));
    };

    $.fn.alert = function (text) {

        window.alert.call(window,[text]);

        return $(this);
    };

    $.fn.prompt = function (text, defaultText) {

        return $(window.prompt.call(window,[text,defaultText]));
    };

})(jQuery);
