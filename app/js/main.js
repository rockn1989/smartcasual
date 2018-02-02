'use strict';

$(function() {


$(window).load(function() {
  $('.preloader').addClass('loaded');
  $('body').removeClass('preload');
  var timer = setTimeout(function() {
    $('.preloader').remove();
  }, 2000);
});

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
        lazyLoad: 'progressive',
        slidesToShow: 1,
        slidesToScroll: 1,
        lazyLoad: 'progressive',
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
  autoplay: false,
  speed: 1000,
  infinite: true,
  centerPadding: '50px',
  lazyLoad: 'ondemand',
  prevArrow: '<div class="btn-slide slick-prev"><i class="icon-left-arrow"></i></div>',
  nextArrow: '<div class="btn-slide slick-next"><i class="icon-right-arrow-thin"></i></div>',
  responsive: [
  {
    breakpoint: 1300,
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
      slidesToScroll: 1,
      centerPadding: '0'
    }
  },
]
});

$('.blog-slider').slick({
  arrows: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  speed: 1000,
  infinite: true,
  centerPadding: '50px',
  lazyLoad: 'ondemand',
  prevArrow: '<div class="btn-slide slick-prev"><i class="icon-left-arrow"></i></div>',
  nextArrow: '<div class="btn-slide slick-next"><i class="icon-right-arrow-thin"></i></div>',
  responsive: [
  {
    breakpoint: 1025,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
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
    breakpoint: 767,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 1
    }
  },
]
});

$('.blog-detail-slider').slick({
  arrows: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  speed: 1000,
  infinite: true,
  centerPadding: '50px',
  lazyLoad: 'ondemand',
  prevArrow: '<div class="btn-slide slick-prev"><i class="icon-left-arrow"></i></div>',
  nextArrow: '<div class="btn-slide slick-next"><i class="icon-right-arrow-thin"></i></div>',
  responsive: [
  {
    breakpoint: 1025,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
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
  lazyLoad: 'progressive',
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

  var sliderTotal = $(window).width() >= 768 ? 4 : 3,
      sliderPosition = $(window).width() >= 768 ? true : false;

 $('.detail-product-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  fade: true,
  lazyLoad: 'progressive',
  prevArrow: '<div class="btn-slide slick-prev"><i class="icon-left-arrow"></i></div>',
  nextArrow: '<div class="btn-slide slick-next"><i class="icon-right-arrow-thin"></i></div>',
  asNavFor: '.detail-product-preview-slider',
});

$('.detail-product-preview-slider').slick({
  slidesToShow: sliderTotal,
  slidesToScroll: 1,
  asNavFor: '.detail-product-slider',
  dots: false,
  infinity: true,
  centerMode: false,
  lazyLoad: 'progressive',
  focusOnSelect: true,
  vertical: sliderPosition,
  prevArrow: '<div class="btn-slide slick-prev"><i class="icon-slider-arrow-up"></i></div>',
  nextArrow: '<div class="btn-slide slick-next"><i class="icon-slider-arrow-down"></i></div>',
});

if($('.slider-center').length) {
  $('.slider-center').slick({
    arrows: false,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    infinite: true,
    lazyLoad: 'progressive',
    centerPadding: '50px',
    prevArrow: '<div class="btn-slide slick-prev"><div class="stef-arrow-left"></div></div>',
    nextArrow: '<div class="btn-slide slick-next"><div class="stef-arrow-right"></div></div>',
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
}

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

// CUSTOM SELECT

$('.js__custom-select-modal').select2({
  minimumResultsForSearch: -1
});
$('.js__custom-select-page').select2({
  minimumResultsForSearch: -1
});

$('.js__custom-select-page').on('select2:open', function (e) {
 $('.select2-results__options').mCustomScrollbar('destroy');
  setTimeout(function () {
    $('.select2-results__options').mCustomScrollbar({
      axis: "y",
      theme: "siteTheme",
      scrollInertia: 300
    });
  }, 0);
});

$('.js__custom-select-modal').on('select2:open', function (e) {
 $('.select2-results__options').mCustomScrollbar('destroy');
  setTimeout(function () {
    $('.select2-results__options').mCustomScrollbar({
      axis: "y",
      theme: "siteTheme",
      scrollInertia: 300
    });
  }, 0);
});

// ADD FAVORITES

$('.js__ajax-send').on('click', function (e) {
  e.preventDefault();
  var _self = $(this);
  $(_self).addClass('sending');
  $(_self).text('');
  $(_self).append('<span class="ajax-adding"></span>');
  $(_self).attr('disabled','true');
  setTimeout(function () {
    $(_self).remove('span.ajax-adding');
    $(_self).removeClass('sending');
    $(_self).text('Добавлено');
    $(_self).removeAttr('disabled');
  }, 2000);
});

$('button.favorites').on('click', function (e) {
  e.preventDefault();
  var _self = $(this);
  var error = true;
  if(error == true) {
    $(_self).addClass('error');
    setTimeout(function () {
      $(_self).removeClass('error');
    }, 3000)
  } else {
    $(_self).attr('disabled','true');
    setTimeout(function () {
      $(_self).addClass('success-adding');
      $(_self).text('Добавлено');
      $(_self).removeAttr('disabled');
    }, 2000);
  };
});

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
  };

  if($('form').is('.feedback-form')) {

    $('.feedback-form').validate({
      rules: {
        "message-quality": {
          required: true
        },
        "message-sleaze": {
          required: true
        },
        "message-text": {
          required: true
        },
        name: {
          required: true
        },
        "score[]": {
          required: true
        },
        email: {
          required: true,
          email: true
        }
      },
      messages: {
        name: "Обязательноe поле",
        email: "Обязательноe поле",
        "message-quality": "Обязательноe поле",
        "message-sleaze": "Обязательноe поле",
        "message-text": "Обязательноe поле"
      },
    });
  };;

  if($('form').is('.js__form-password')) {

    $('.js__form-password').validate({
      rules: {
        password: {
          required: true
        },
        "password-again": {
          equalTo: '#password'
        }
      },
      messages: {
        password: "Обязательноe поле",
        "password-again": "Пожалуйста, введите тот же пароль"
      },
    });
  };

// DISABLED UIKIT ANIMATION FOR MOBILE

  UIkit.on('beforeready.uk.dom', function () {
    if (UIkit.$win.width() < 767 && $('html').hasClass('uk-touch')) {
      UIkit.$('[data-uk-scrollspy]').removeAttr('data-uk-scrollspy');
    }
  });

// SLIDE INDICATOR SWITCHER

  function swtichingImg () {
   var _self = $(this),
       indicatorWrapper = $(_self).parents('.slide-switcher').siblings('.slide-indicator-wrapper'),
       slideImgWrapper = $(_self).parents('.slide-img-wrapper');

   var idPos = $(_self).attr('data-target').indexOf('-'),
       id = $(_self).attr('data-target').slice(idPos+1);

   $(_self)
    .parents('.slide-switcher')
    .siblings('.slide-indicator-wrapper')
    .find('.indicator')
    .removeClass('active');


    var el = $(indicatorWrapper).find('[data-target="indicator-'+id+'"]').addClass('active');

    var currentSrc = $(el).attr('data-img');

    $(slideImgWrapper).find('img.current-img').attr('src', currentSrc);
  }

  $('.slide-switcher').on('mousemove', '.switcher', swtichingImg);


  // ACCARDION
  $('.uk-accardion').on('toggle.uk.accordion', function() {
    console.log(123)
  });

  // FORM FILE UPLOAD

  $('.uk-modal form input[type="file"]').on('change', function () {
    var fileName = $(this).val().replace('C:\\fakepath\\','');
    var customFileInput = $('.uk-modal form span.custom-file');
    customFileInput.text();
    customFileInput.text(fileName);
  });

  // VIDEO PLAYER
   if($('.detail-product-video-box').length) {
    var deviceAgent = navigator.userAgent.toLowerCase();
    var typeEvent = navigator.userAgent.match(/(iphone|ipad|ipod)/) ? 'touchstart' : 'click';

    var player = new VideoPlayer({
      initBlock: $('.detail-product-video-box'),
      putAtBlock: $('.detail-product-video'),
      callback: function() {
        $('.detail-product-preview-slider').on('click', '.slide, .btn-slide', function () {
          var video = $('#detail-video')[0];
          $('.detail-product-slider').removeClass('hidden');
          $('.detail-product-video').addClass('disabled');
          $('.videoPlay').removeClass('pause');
          video.pause();
        });
      }
    });

    $('.detail-product-video-box').on('click', function () {
      player.init();
    });
   }

// MOBILE MENU

$('.js__menu-sublist-toggle').on('click', function(e) {
    e.preventDefault();
    $(this)
      .parents('a')
      .toggleClass('active')
      .siblings('.menu-sublist')
      .stop(true,true)
      .slideToggle('350');

  }
);

$('.uk-subnav').on('click', '.control-icon.mobile-search', function (e) {
  e.preventDefault();
  $('.mobile-form').slideToggle('350', function () {
    $(this).find('input[type="text"]').focus();
  });
});

$('i[data="toggle-list"]').on('click', function(e) {
  if($(window).width() < 768) {
    e.preventDefault();
    $(this)
      .parents('a')
      .toggleClass('active')
      .parent('div')
      .find('ul[data="target-list"]')
      .stop(true,true)
      .slideToggle('350');
  }
});


});
