$(window).on("load", function () {
    AOS.refresh();

    $(".loader").fadeOut(1000);
    $("html").css("overflow-y", "auto");
});

$(function () {
    AOS.init({
        once: true,
        disable: "mobile",
    });
    $(window).on("scroll", function () {
        AOS.refresh();
    });

    var header_slider = new Swiper('.header_slider .swiper-container', {
        autoplay: {
            delay: 5000,
        },
        observer: true,
        observeParents: true,
        loop: true,
        navigation: {
            nextEl: '.header_slider .swiper-button-next',
            prevEl: '.header_slider .swiper-button-prev',
        },
        pagination: {
          el: '.header_slider .swiper-pagination',
          clickable: true,
        },
    });

    var volunteering_slider = new Swiper('.volunteerings .swiper-container', {
        autoplay: {
            delay: 5000,
        },
        observer: true,
        observeParents: true,
        loop: true,
        navigation: {
            nextEl: '.volunteerings .swiper-button-next',
            prevEl: '.volunteerings .swiper-button-prev',
        },
        breakpoints: {
            0:{
                slidesPerView: 1.2,
                spaceBetween: 16
            },
            480: {
                slidesPerView: 2,
                spaceBetween: 16
            },
            768:{
                slidesPerView: 3,
                spaceBetween: 16
            },
            1200:{
                slidesPerView: 4,
                spaceBetween: 16
            }
        }
    });

    // open Side Nav
  $(".menuTrigger").on("click", function () {
    $(".sideNav").toggleClass("open");
    $(".navover").toggleClass("open");
    $("body").css("overflow", "hidden");
    setTimeout(function () {
      $(".sideNav").addClass("origin");
    }, 500);
  });

  // Close Side Nav
  $(".close1").on("click", function () {
    $(".navover").removeClass("open");
    $(".sideNav").toggleClass("open");
    $(".sideNav").toggleClass("origin");
    $("body").css("overflow", "auto");
    setTimeout(function () {
      $(".sideNav").removeClass("origin");
    }, 600);
  });

    //lazy load 
    lazyLoad();
    function lazyLoad() {
        const images = document.querySelectorAll('.lazy-omd');

        const imageObserver = new IntersectionObserver((enteries) => {
            enteries.forEach(entery => {
                if (!entery.isIntersecting) {
                    return;
                } else {
                    preloadImage(entery.target);
                    imageObserver.unobserve(entery.target);
                }
            });

        });

        images.forEach(image => {
            imageObserver.observe(image)
        });
    }

    function preloadImage(img) {
        img.src = img.getAttribute('data-src');
        img.onload = () => {
            img.parentElement.classList.remove('loading-omd');
            img.parentElement.classList.add("loaded-omd");
            img.parentElement.parentElement.classList.add("lazy-head-om");
        }
    }

    $('[data-fancybox]').fancybox({
        transitionEffect: "zoom-in-out",
        youtube : {
            controls : 0,
            showinfo : 0
        },
        vimeo : {
            color : 'f00'
        }
    });
});
