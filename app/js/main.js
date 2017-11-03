'use strict';

$(function() {

//  HOME PAGE TOP SLIDER

$('.products-preview-slider').slick({
        arrows: true,
        dots: false,
        infinity: true,
        fade: true,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<div class="btn-slide slick-prev"><i class="icon-left-arrow"></i></div>',
        nextArrow: '<div class="btn-slide slick-next"><i class="icon-right-arrow-thin"></i></div>',
        responsive: [
          {
            breakpoint: 1025,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
            }
          },
          {
            breakpoint: 940,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      });

// PRODUCT SLIDER

$('.slider').slick({
  arrows: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  speed: 1000,
  infinite: true,
  centerPadding: '50px',
  prevArrow: '<div class="btn-slide slick-prev"><i class="icon-left-arrow"></i></div>',
  nextArrow: '<div class="btn-slide slick-next"><i class="icon-right-arrow-thin"></i></div>',
  responsive: [
  {
    breakpoint: 1025,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 1
    }
  },
  {
    breakpoint: 940,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 1
    }
  },
  {
    breakpoint: 600,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  },
]
});


// PRODUCT SLIDER

$('.soc-slider').slick({
  arrows: true,
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: false,
  speed: 1000,
  infinite: true,
  centerPadding: '50px',
  prevArrow: '<div class="btn-slide slick-prev"><i class="icon-left-arrow"></i></div>',
  nextArrow: '<div class="btn-slide slick-next"><i class="icon-right-arrow-thin"></i></div>',
  responsive: [
  {
    breakpoint: 1025,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 1
    }
  },
  {
    breakpoint: 940,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 1
    }
  },
  {
    breakpoint: 600,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  },
]
});

// DETAIL SLIDER

 $('.detail-product-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  lazyLoad: 'progressive',
  asNavFor: '.detail-product-preview-slider'
});

$('.detail-product-preview-slider').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  asNavFor: '.detail-product-slider',
  dots: false,
  infinity: true,
  centerMode: false,
  lazyLoad: 'progressive',
  focusOnSelect: true,
  vertical: true,
  prevArrow: '<div class="btn-slide slick-prev"><i class="icon-slider-arrow-up"></i></div>',
  nextArrow: '<div class="btn-slide slick-next"><i class="icon-slider-arrow-down"></i></div>',
});

// HEADER SEARCH FORM

function closeModal (e) {
  var _self = $(this);
  if(e.target.className.match(/search-form|close/gi)) {
    $(_self).removeClass('visible');
    $(_self).unbind('click', closeModal);
  }
}

$('a[data="search-form"]').on('click', function (e) {
    e.preventDefault();
    var formModal = $(this).attr('data');
    $('#'+formModal).addClass('visible');
    $('#'+formModal)
      .find('input')
      .focus();
    $('#'+formModal).bind('click', closeModal);
})


// SHOP THE LOOK ON MAIN PAGE

$('.shop-the-look').on('click', '.shop-link', function (e) {
  e.preventDefault();
  $('.shop-the-look-inner').removeClass('uk-hidden');
  $('.shop-the-look-inner').trigger('display.uk.check');
  UIkit.init('.shop-the-look-inner');
});


/* MASK FORM */
$('.js__input-phone').mask('+7 999 999-99-99', {clearIfNotMatch: true}).focus(function (e) {
  if (!$(this).val()) {
    $(this).val('+7 ');
  }
});

//FORM VALIDATE
  if($('form').is('.order-form')) {

    $('.order-form').validate({
      rules: {
        message: {
          required: true
        },
        email: {
          required: true,
          email: true
        }
      },
      messages: {
        email: "Обязательноe поле",
        message: "Обязательноe поле"
      },
    });
  }

// DISABLED UIKIT ANIMATION FOR MOBILE 

  UIkit.on('beforeready.uk.dom', function () {
    if (UIkit.$win.width() < 767 && $('html').hasClass('uk-touch')) {
      UIkit.$('[data-uk-scrollspy]').removeAttr('data-uk-scrollspy');
    }
  });

//TEST
/*[].forEach.call(document.querySelectorAll('img[data-src]'), function(img) {
  img.setAttribute('src', img.getAttribute('data-src'));
  img.onload = function() {
    img.removeAttribute('data-src');
  };
});*/
});
