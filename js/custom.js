(function ($) {
    "use strict";

    $('.main-navigation').onePageNav({
        scrollThreshold: 0.2, // Adjust if Navigation highlights too early or too late
        scrollOffset: 75, //Height of Navigation Bar
        filter: ':not(.external)',
        changeHash: true
    });

    $(window).load(function () {
        "use strict";

        $(".status").fadeOut();
        $(".preloader").delay(1000).fadeOut("slow");
    });

    mainNav();
    $(window).scroll(function () {
        mainNav();
    });

    function mainNav() {
        var top = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
        if (top > 40) $('.sticky-navigation').stop().animate({
            "opacity": '1',
            "top": '0'
        });
        else $('.sticky-navigation').stop().animate({
            "opacity": '1',
            "top": '0'
        });
    }

    var scrollAnimationTime = 1200,
        scrollAnimation = 'easeInOutExpo';
    $('a.scrollto').bind('click.smoothscroll', function (event) {
        event.preventDefault();
        var target = this.hash;
        $('html, body').stop().animate({
            'scrollTop': $(target).offset().top
        }, scrollAnimationTime, scrollAnimation, function () {
            window.location.hash = target;
        });
    });


    /* =================================
     ===  Bootstrap Internet Explorer 10 in Windows 8 and Windows Phone 8 FIX
     =================================== */
    if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
        var msViewportStyle = document.createElement('style')
        msViewportStyle.appendChild(
            document.createTextNode('@-ms-viewport{width:auto!important}'))
        document.querySelector('head').appendChild(msViewportStyle)
    }

    function countdown() {
        $('.counter').countdown('2017/09/16 09:00:00', {elapse: true}).on('update.countdown', function(event) {
            if (event.elapsed) {
                if (event.offset.totalHours > 10) {
                    $(this).html('<div> <span class="completed">See you next year!</span> </div>');
                } else {
                    $(this).html('<div> <span class="completed">The event is ongoing right now!</span> </div>');
                }
            } else {
                $(this).html(event.strftime(''
                    + '<div> <span class="number">%-D</span> <span class="period">day%!D</span> </div>'
                    + '<div> <span class="number">%H</span> <span class="period">hour%!H</span> </div>'
                    + '<div> <span class="number">%M</span> <span class="period">minute%!M</span> </div>'
                    + '<div> <span class="number">%S</span> <span class="period">second%!S</span> </div>'));
            }
        });
    }
    countdown();
})(jQuery);


$(window).resize(function () {
    "use strict";
    var ww = $(window).width();

    if (ww < 480) {
        $('.main-navigation a').on('click', function () {
            $(".navbar-toggle").click();
        });
    }
});