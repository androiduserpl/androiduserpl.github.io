$(function () {
    'use strict';

    var okno = $(window);
    var menu = $('#nav-menu');


    if (okno.scrollTop() >= 100) {
        menu.addClass('scroll');
    }

    okno.scroll(function () {

        if (okno.scrollTop() >= 100) {
            menu.addClass('scroll');
        } else {
            menu.removeClass('scroll');
        }

    });

    /************* smooth scroll **************/

    $(document).on('click', 'a[href^="#"]', function (event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top - 100
        }, 500);


    });


});
console.log('hej!');
console.log('dobrze Ci idzie!!!');