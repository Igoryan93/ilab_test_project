$(document).ready(function() {

    $('.slider').slick({
        dots: true,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 3500,
        speed: 800
    });

    $('.news-slider').slick({
        dots: true,
        arrows: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        responsive: [
            {
                breakpoint: 641,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }
        ]
    });

    $('.sidebar-btn').on('click', function(){
        $(this).toggleClass('open').next('ul').slideToggle(200);
        return false;
    });

    $('.item-options a').on('click', function() {
        $(this).toggleClass('active');
        return false;
    });

    $('.minus').on('click', function () {
        var $input = $(this).siblings('input');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
    });
    $('.plus').on('click', function () {
        var $input = $(this).siblings('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });
    $(".qt input").keypress(function(e) {
		if (e.which != 8 && e.which != 0 && e.which != 46 && (e.which < 48 || e.which > 57)) {
			return false;
		}
    });
    
    /* header nav */
    $('.nav-btn').on('click', function() {
        $('.nav').addClass('open');
        $('.nav .close').on('click', function() {
            $(this).parent().removeClass('open');
        });
    });

    $('.phones-btn').on('click', function(){
        $(this).toggleClass('open').parent().toggleClass('open');
        return false;
    })
});

if($(window).width() <= 641) {
    $('header .header-up .items:last ').before($('header .phones'));
} else {
    $('header .logo:first ').after($('header .phones'));
}

$(window).resize(function(){
    if($(window).width() <= 641) {
        $('header .header-up .items:last ').before($('header .phones'));
    } else {
        $('header .logo:first ').after($('header .phones'));
    }
});


