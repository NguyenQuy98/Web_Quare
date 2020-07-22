$("#btnActiveBar").click(function() {
    $("#menuHeader").show('show');
    $("#menuHeader").toggleClass('show-m');
});
$("#closeMenuHeader").click(function() {
    $("#menuHeader").hide();
    $("#menuHeader").toggleClass('show-m');
});

var swiper = new Swiper('.content-detail-sale-swiper', {
    slidesPerView: 1,
    spaceBetween: 0,
    speed: 300,
    autoplay: {
        delay: 5000,
    },
    // loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.btn-prev-sale-swiper',
        prevEl: '.btn-next-sale-swiper',
    },
    breakpoints: {
        450: {
            slidesPerView: 2,
            spaceBetween: 15,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 15,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 15,
        },
    }
});
var swiper = new Swiper('.content-pr-highli-swiper', {
    slidesPerView: 1,
    spaceBetween: 1,
    speed: 300,
    autoplay: {
        delay: 5000,
    },
    // loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.btn-prev-pr-highli-swiper',
        prevEl: '.btn-next-pr-highli-swiper',
    },
    breakpoints: {
        450: {
            slidesPerView: 2,
            spaceBetween: 1,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 1,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 1,
        },
    }
});

var swiper = new Swiper('.banner-swiper', {

    speed: 300,
    autoplay: {
        delay: 5000,
    },
    // loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
        el: '.banner-swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.btn-prev-banner',
        prevEl: '.btn-next-banner',
    },
    breakpoints: {

    }
});
$(".button_count").click(function() {
    var oldValue = $("#count_item").val();
    if (this.getAttribute('value') == "plus") {
        var newVal = parseFloat(oldValue) + 1;
    } else {
        if (oldValue > 1) {
            var newVal = parseFloat(oldValue) - 1;
        } else {
            newVal = 1;
        }
    }
    $("#count_item").val(newVal);

});

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        $(".header .top-header").removeClass('active');
    } else {
        $(".header .top-header").addClass('active');
    }
    prevScrollpos = currentScrollPos;
}

$(".active-detail-bar.m-bar").hover(

    $(".active-detail-bar.m-bar").mouseover(function() {
        $('.menu-header').addClass("active-hover");
    }).mouseout(function() {
        $('.menu-header').removeClass("active-hover");
    }),
    $('.menu-header').mouseover(function() {
        $('.menu-header').addClass("active-hover");
    }).mouseout(function() {
        $('.menu-header').removeClass("active-hover");
    }),

);