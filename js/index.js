$(document).ready(function($) {
    var screenWidth = document.documentElement.clientWidth || document.body.clientWidth;
    $(".memberHover").css('display', 'none');
    $(".returnTop").css('display', 'none');
    if (screenWidth > 1348) {
        $(".photo-content").mouseenter(function(event) {
            $(this).children('.memberPhoto').hide();
            $(this).children('.memberHover').show();
        });
        $(".photo-content").mouseleave(function(event) {
            $(this).children('.memberPhoto').show();
            $(this).children('.memberHover').hide();

        });
        $(".returnTop").click(function(event) {
            $('html,body').animate({
                scrollTop: $('header+div').offset().top - 200
            }, 800);
        });
        $(window).scroll(function(event) {
            height = $(window).scrollTop();
            if (height > 800) {
                $(".returnTop").fadeIn();
            } else {
                $(".returnTop").fadeOut();
            };
        });
    };

    //notebook
    $(".noteHide").css('display', 'none');
    // $(".note li").mouseenter(function(event) {
    //     $(this).css('background', '#e2e1e1');
    // });
    // $(".note li").mouseleave(function(event) {
    //     $(this).css('background-color', '#f2f2f2');
    // });
    $(".note li").click(function(event) {
        $(this).next('div.noteHide').slideToggle();
        $(this).toggleClass('toggleNote');
    });
});
