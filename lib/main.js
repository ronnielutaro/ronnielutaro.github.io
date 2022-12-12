/* -------------------------------------------

Name: 		Sonix
Author:		Nazar Miller (millerDigitalDesign)
Portfolio:  https://themeforest.net/user/millerdigitaldesign/portfolio?ref=MillerDigitalDesign

p.s. I am available for Freelance hire (UI design, web development). mail: miller.themes@gmail.com

------------------------------------------- */

$(function () {

    "use strict";

    $(document).ready(function () {
        // Preloader
        anime({
            targets: '.preloader svg',
            opacity: [1, 0],
            translateY: [0, 250],
            delay: 600,
            easing: 'easeOutExpo',
        });
        anime({
            targets: '.page-wrapper',
            opacity: [0, 1],
            translateY: [250, 0],
            duration: 800,
            easing: 'easeOutExpo',
            delay: 800,
        });
        anime({
            targets: '.a-f',
            opacity: 1,
            translateY: ['60px', 0],
            delay: 900,
            duration: 1300,
            easing: 'easeOutExpo',
        });
        anime({
            targets: '.cursor',
            opacity: [0, 1],
            delay: 800,
        });
    });

    // Page Transition delay
    $('a').on('click', function (e) {
        e.preventDefault();
        setTimeout(function (url) {
            window.location = url
        }, 500, this.href);
    });

    // Page transition animation down
    $(".new-page").on('click', function () {
        anime({
            targets: '.page-wrapper',
            opacity: [0],
            translateY: ['150px'],
            duration: 400,
            easing: 'easeOutExpo',
        });
        anime({
            targets: '.cursor',
            opacity: [1, 0],
        });
    });

    // Page transition animation in
    $(".new-page-in").on('click', function () {
        anime({
            targets: '.page-wrapper',
            opacity: 0,
            duration: 400,
            easing: 'linear',
        });
        anime({
            targets: '.cursor',
            opacity: [1, 0],
        });
    });

    // Page transition animation right
    $(".new-page-right").on('click', function () {
        anime({
            targets: '.page-wrapper',
            opacity: 0,
            translateX: '10%',
            duration: 400,
            easing: 'linear',
        });
        anime({
            targets: '.cursor',
            opacity: [1, 0],
        });
    });

    // Page transition animation left
    $(".new-page-left").on('click', function () {
        anime({
            targets: '.page-wrapper',
            opacity: 0,
            translateX: '-10%',
            duration: 400,
            easing: 'linear',
        });
        anime({
            targets: '.cursor',
            opacity: [1, 0],
        });
    });

    // Sidebar page transition animation out
    $(".new-page-sidebar").on('click', function () {
        var cssSelector = anime({
            targets: '.page-wrapper',
            opacity: [.2, 0],
            translateX: ['-30%'],
            duration: 800,
            easing: 'easeOutExpo',
        });
        var cssSelector = anime({
            targets: '.sidebar',
            translateX: [0, '100%'],
            duration: 800,
            easing: 'easeOutExpo',
        });
        var cssSelector = anime({
            targets: '.menu-open',
            translateX: ['70px', 0],
            easing: 'easeOutExpo',
        });
        anime({
            targets: '.cursor',
            opacity: [1, 0],
        });
    });

    // Cursor pet
    $(window).mousemove(function (e) {
        $('.cursor')
            .eq(0)
            .css({
                left: e.pageX,
                top: e.pageY
            });
        setTimeout(function () {
            $('.cursor')
                .eq(1)
                .css({
                    left: e.pageX,
                    top: e.pageY
                });
        }, 150);
    })

    $('.count-1').waypoint(
        function () {
            anime({
                targets: '.count-1',
                innerHTML: [0, 3450],
                duration: 2000,
                easing: 'linear',
                round: 1
            });

            anime({
                targets: '.count-2',
                innerHTML: [0, 4550],
                duration: 2000,
                easing: 'linear',
                round: 1
            });

            anime({
                targets: '.count-3',
                innerHTML: [0, 2950],
                duration: 2000,
                easing: 'linear',
                round: 1
            });

            anime({
                targets: '.count-4',
                innerHTML: [0, 4507],
                duration: 2000,
                easing: 'linear',
                round: 1
            });
        }, {
            triggerOnce: true,
            offset: '100%'
        });

    // Cursor pet scale
    $("a, input, .hover").mouseover(function () {
        var cssSelector = anime({
            targets: '.pet',
            scale: 1.7,
            easing: 'easeOutExpo',
        });

    });

    $("a, input, .hover").mouseout(function () {
        var cssSelector = anime({
            targets: '.pet',
            scale: 1,
            easing: 'easeOutExpo',
        });
    });

    // Portfolio with filter
    var $container = $('.filtrable, .classic-grid');
    $container.isotope({
        filter: '*',
        itemSelector: '.grid-item, .classic-project',
        animationOptions: {
            duration: 750,
            easing: 'linear',
            queue: false
        }
    });

    // Filter current link
    $('.filter a').on('click', function () {
        $('.filter .current').removeClass('current');
        $(this).addClass('current');

        var selector = $(this).attr('data-filter');
        $container.isotope({
            filter: selector,
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
        });
        return false;
    });

    // Portfolio without filter
    $('.grid').isotope({
        // options
        itemSelector: '.grid-item',
    });

    // Sidebar open
    $(".menu-open").on('click', function () {
        var cssSelector = anime({
            targets: '.sidebar',
            translateX: ['100%', 0],
            duration: 700,
            easing: 'easeOutExpo',
        });
        var cssSelector = anime({
            targets: '.menu-open',
            translateX: [0, '70px'],
            easing: 'easeOutExpo',
        });
        var cssSelector = anime({
            targets: '.menu-close',
            opacity: ['0', 1],
            easing: 'easeOutExpo',
        });
        var cssSelector = anime({
            targets: '.page-wrapper',
            opacity: [1, .2],
            translateX: [0, '-20%'],
            duration: 1300,
            easing: 'easeOutExpo',
        });
    });

    // Sidebar close
    $(".menu-close").on('click', function () {
        var cssSelector = anime({
            targets: '.sidebar',
            translateX: [0, '100%'],
            duration: 700,
            easing: 'easeOutExpo',
        });
        var cssSelector = anime({
            targets: '.menu-open',
            translateX: ['70px', 0],
            easing: 'easeOutExpo',
            delay: 100,
        });
        var cssSelector = anime({
            targets: '.menu-close',
            opacity: ['1', 0],
            easing: 'easeOutExpo',
            duration: 1,
        });
        var cssSelector = anime({
            targets: '.page-wrapper',
            opacity: [.2, 1],
            translateX: 0,
            duration: 1300,
            easing: 'easeOutExpo',
        });
    });

    // Sidebar current links color
    $('.menu-link').on('click', function () {
        $('.menu-link').removeClass("color");
        $(this).addClass("color");
    });

    // Sidebar dropdown fix
    $('.menu').on('show.bs.collapse', '.collapse', function () {
        $('.menu').find('.collapse.show').collapse('hide');
    });

    // Scroll hint animation
    anime({
        targets: '.finger',
        translateY: [0, '10px', 0],
        loop: true,
        easing: 'easeInOutSine'
    });

    // Sound fx after click in
    $('.menu-open, .menu-link, .more, .button, .smooth-scroll, .circle-button, .swiper-prev, .swiper-next, .swiper-pagination-bullet').addClass('mellotron-in');

    $(".mellotron-in").on('click', function () {
        var sound = new Howl({
            src: ['sound-fx/mellotron-in.mp3'],
            autoplay: true,
            volume: .5,
            onend: function () {
                console.log('Finished!');
            }
        });
    });

    // Sound fx after click out
    $('.menu-close, .menu-item ul li, .filter .default-link').addClass('mellotron-out');

    $(".mellotron-out").on('click', function () {
        var sound = new Howl({
            src: ['sound-fx/mellotron-out.mp3'],
            autoplay: true,
            volume: .5,
            onend: function () {
                console.log('Finished!');
            }
        });
    });

    //smooth scroll
    $('.smooth-scroll').on("click", function () {
        $('html, body').stop().animate({
            scrollTop: $($(this).attr('href')).offset().top - 90
        }, 1000);
        return false;
    });

    // Perspective
    $('.tilt').tilt({
        maxTilt: 5,
        glare: true,
        maxGlare: .1,
        scale: 1.03,
        speed: 1000,
        perspective: 1000,
    });

    // Soft perspective
    $('.tilt-soft').tilt({
        maxTilt: 3,
        speed: 1000,
        scale: 1.02,
        perspective: 1000,
    });

    $('.js-input').keyup(function () {
        if ($(this).val()) {
            $(this).addClass('not-empty');
        } else {
            $(this).removeClass('not-empty');
        }
    });

    // Swiper header slideshow
    var swiperSlideshow = new Swiper('.swiper-header-slideshow', {
        centeredSlides: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        effect: 'fade',
        speed: 1000,
    });

    // Swiper fullscreen slider
    var swiperFullscreenSlider = new Swiper('.swiper-fullscreen-slider', {
        parallax: true,
        centeredSlides: true,
        speed: 1000,
        mousewheel: {
            enable: true
        },
        navigation: {
            nextEl: '.swiper-next',
            prevEl: '.swiper-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        keyboard: {
            enabled: true
        },
    });

    // Swiper carousel slider
    var swiperCarouselSlider = new Swiper('.swiper-carousel-slider', {
        parallax: true,
        loop: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        speed: 1000,
        mousewheel: {
            enable: true
        },
        navigation: {
            nextEl: '.swiper-next',
            prevEl: '.swiper-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        keyboard: {
            enabled: true
        },
    });

    // Swiper single project slider
    var swiperProject = new Swiper('.swiper-project', {
        slidesPerView: '2',
        spaceBetween: 30,
        speed: 1000,
        navigation: {
            nextEl: '.swiper-next',
            prevEl: '.swiper-prev',
        },
        breakpoints: {
            767: {
                slidesPerView: '1',
            }
        },
    });

    // Swiper reviews slider
    var swiperReviews = new Swiper('.swiper-reviews', {
        allowTouchMove: true,
        slidesPerView: '1',
        grabCursor: true,
        parallax: true,
        preventClicks: true,
        spaceBetween: 30,
        keyboardControl: true,
        speed: 1000,
        pagination: {
            el: '.reviews-pag',
            clickable: true,
        },
    });

    // Contact form
    $("#form").submit(function () {
        $.ajax({
            type: "POST",
            url: "mail.php",
            data: $(this).serialize()
        }).done(function () {

            var tl = anime.timeline({
                easing: 'easeOutExpo',
            });

            tl
                .add({
                    targets: '.submit-frame',
                    opacity: 0,
                    translateY: '60px',
                })
                .add({
                    targets: '.success',
                    opacity: 1,
                    translateY: ['-60px', 0],
                })
                .add({
                    targets: '.submit-frame',
                    opacity: 0,
                    translateY: '1000px',
                });

        });
        return false;
    });

});
