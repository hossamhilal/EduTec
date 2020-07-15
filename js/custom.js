/*global $ */
(function($) {
    "use strict";

    $(window).on('load', function(){
        $('body').addClass('stopScroll');
        $('.loader').fadeOut(500, function () {
            $(this).remove();
            $('body').removeClass('stopScroll');
        }); 
    });

    // OPEN SIDE  MENU 
    $('.menuBtn').on('click', function(){
        $('.navMenu').toggleClass('show');
        $('.navOverlay').addClass('show');  
        setTimeout(function(){
            $('body').addClass('stopScroll');
        }, 200); 
    });

    // CLOSE SIDE MENU 
    $('.navOverlay').on('click', function(){
        $(this).removeClass('show');
        $('.navMenu').removeClass('show');  
        $('body').removeClass('stopScroll');  
        $('#showSecList').parent('li').removeClass('active');
        $('.secList').removeClass('show'); 
        $('#closeSecList').addClass('d-none').removeClass('styled');
    });

    // Show Sections List
    $('#showSecList').on('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        $('.navMenu li').removeClass('active');
        $(this).parent('li').toggleClass('active');
        $('.secList').toggleClass('show');   
        // mobile
        if ($(window).width() < 768) {
            $('#closeSecList').removeClass('d-none').addClass('styled');
        }
    });

    // hide Sections List on mobile
    $('#closeSecList').on('click', function() {
        $('.secList').removeClass('show');   
        $(this).addClass('d-none').removeClass('styled');
    });

    // Hide Sections List on pc
    $(document).on('click', function() {
        $('#showSecList').parent('li').removeClass('active');
        $('.secList').removeClass('show');   
    });


    // Open Search 
    $('.openSearch').on('click', function() {
        $('.searchPopup').addClass('show');   
    });

    // Close Search 
    $('.searchPopup .close').on('click', function() {
        $('.searchPopup').removeClass('show');   
    });
    
    
    // Header OWL 
    $('.owlHeader').owlCarousel({
        rtl: true,
        margin: 0,
        autoplay: true,
        loop: true,
        nav: true,
        dots: true,
        autoplaySpeed : 5000,
        autoplayTimeout : 5000,
        smartSpeed: 5000 ,
        navText: ["<div class='circle'><i class='icofont-thin-right'></i></div>", "<div class='circle'><i class='icofont-thin-left'></i></div>"],
        responsive: {
            0: {
                items: 1,
                dotsEach: 1
            },
            600: {
                items: 1,
                dotsEach: 1
            },
            1000: {
                items: 1,
                dotsEach: 1
            }
        }
    });

    // Portraits OWL 
    $('.owlPortraits').owlCarousel({
        rtl: true,
        margin: 20,
        autoplay: false,
        loop: true,
        nav: true,
        dots: false,
        center : false ,
        autoplaySpeed : 5000,
        autoplayTimeout : 5000,
        smartSpeed: 5000 ,
        navText: ["<div class='circle'><i class='icofont-rounded-right'></i></div>", "<div class='circle'><i class='icofont-rounded-left'></i></div>"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2 
            },
            1000: {
                items: 3,
                stagePadding: 70
            }
        }
    });

    // Partners OWL 
    $('.owlPartners').owlCarousel({
        rtl: true,
        margin: 20,
        autoplay: true,
        loop: true,
        nav: false,
        dots: false,
        center : false ,
        autoplaySpeed : 5000,
        autoplayTimeout : 5000,
        smartSpeed: 5000 ,
        navText: ["<i class='icofont-thin-right'></i>", "<i class='icofont-thin-left'></i>"],
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    });

    // Testimonials OWL 
    $('.owlTestimonials').owlCarousel({
        rtl: true,
        margin: 0,
        autoplay: true,
        loop: true,
        nav: true,
        dots: false,
        center : false ,
        autoplaySpeed : 5000,
        autoplayTimeout : 5000,
        smartSpeed: 5000 ,
        navText: ["<div class='circle'><i class='icofont-rounded-right'></i></div>", "<div class='circle'><i class='icofont-rounded-left'></i></div>"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

    // Clients OWL 
    $('.owlSponsors').owlCarousel({
        rtl: true,
        margin: 20,
        autoplay: true,
        loop: true,
        nav: false,
        dots: false,
        center : false ,
        autoplaySpeed : 5000,
        autoplayTimeout : 5000,
        smartSpeed: 5000 ,
        navText: ["<i class='icofont-thin-right'></i>", "<i class='icofont-thin-left'></i>"],
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 3
            },
            1000: {
                items: 6
            }
        }
    });

    // iniat WOW Js
    new WOW().init();
   
})(jQuery);

