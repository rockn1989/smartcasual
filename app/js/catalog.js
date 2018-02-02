'use strict';

$(function() {

function changeColor(color) {
  $('.brand-current-color span').text('');
  $('.brand-current-color span').text(color);
}

// CHANGE IMG IN CARD

/* SOME CODE */


// CHANGE BRAND COLORS

$('.brand-color-list').on('click', 'a.color', function (e) {
  e.preventDefault();
  $(this)
    .parents('.brand-color-list')
    .find('a')
    .removeClass('checked');
  $(this).addClass('checked');
  var color = $(this).attr('data-color');
  $(this).parents('.brand-color-list').siblings('.brand-current-color').find('span').text('');
  $(this).parents('.brand-color-list').siblings('.brand-current-color').find('span').text(color);
});

// CHANGE BRAND SIZE

$('.brand-size-block').on('click', function () {
  $('.brand-size-list').slideToggle('350');
});

$('.brand-size-list').on('click', 'a', function (e) {
  e.preventDefault();
  $(this)
    .parents()
    .find('a')
    .removeClass('active');
  $(this).addClass('active');
  $('.brand-size-current').text($(this).text());
});

// CHANGE BRAND SIZE MODAL

$('.brand-list-size').on('click', 'a', function (e) {
  e.preventDefault();
  $(this)
    .parents()
    .find('a')
    .removeClass('active');
  $(this).addClass('active');
});

// CHANGE FILTER TYPE

/*$('.catalog-select').on('click', function () {
  $('.catalog-option-list').slideToggle('350');
});

$('.catalog-option-list').on('click', 'a', function (e) {
  e.preventDefault();
  $(this)
    .parents()
    .find('a')
    .removeClass('active');
  $(this).addClass('active');
  $('.catalog-option-current').text($(this).text());
});*/


// CARD CHANGE IMG

$('.action-wrapper .cart-brand-color-list').on('click', 'a' , function (e) {
  e.preventDefault();

});

// CARD CHANGE COLORS

/*$('.action-wrapper .brand-color-list').on('click', 'a.color', function (e) {
  e.preventDefault();
  $('.action-wrapper .brand-color-list').find('a.color').removeClass('checked');
  $(this).addClass('checked');
});
*/
// CARD ADD TO FAVORITES

$('.action-wrapper .favorites').on('click', 'a' , function (e) {
  e.preventDefault();
  $(this).addClass('checked-favorites');
});

// WISHLIST REMOVE CARD

$('.js__remove-cart').on('click', function (e) {
  e.preventDefault();
  var cart = $(this).parents('.cart');
  $(this).parents('.wishlist-body').find(cart).remove();
});

// ZOOM IMG

if($('div').is('.easyzoom')) {
  if($(window).width() > 768) {
    var $easyzoom = $('.easyzoom').easyZoom();

    // Get an instance API
    var api = $easyzoom.data('easyZoom');
  }

}

// CATALOG SCROLLBAR
if($('.filter').length) {
  $('.filter .group-list').mCustomScrollbar({
    axis: "y",
    theme: "siteTheme",
    scrollInertia: 300
  });
}


// CATALOG SIDEBAR

$('.catalog-sidebar').on('click', '.js__catalog-sublist-toggle', function (e) {
  e.preventDefault();
  $(this).toggleClass('active');
  $(this).stop(true, true).siblings('.catalog-sublist').slideToggle('350');
});

// FILTER EVENTS

$('.filter, .catalog-sidebar').on('click','.js__group-title-toggle', function() {
  var _self = $(this);
  _self.toggleClass('open-title');
  _self.siblings('.group-list').stop(true, true).slideToggle('350', function() {
    _self.toggleClass('open-list');
  });
});

 // CATALOG BANNER

 $('.catalog-banner').on('click', '.read-more', function(e) {
  e.preventDefault();
  $(this).siblings('.text').toggleClass('open');
  $(this).toggleClass('open');
 });

});


// BASKET

function updateBonus(value) {
  var summBonus = parseInt($('.full-bonus>.result').text().replace(' ',''), 10);
  var counter = $('i.counter');
  var counterValue = parseInt(counter.text().replace("\\s",''), 10);
  
  if(counterValue < 0 || counterValue >= 0) {
    value = value*(-1);
  }

  if(value == 0) {
    value = counterValue*(-1);
  }
  if((counterValue+value)*-1 > summBonus) {
    counterValue = 0;
    value = (summBonus)*(-1);
  }
  $({numberValue: value}).animate({numberValue: counterValue+value}, {
    duration: 500,
    easing: 'linear',
    step: function(val) {
      $(counter).html(Math.ceil(val));
    }
  });
};

$(function() {
  $('.table-products').on('click', '.close', function(e) {
    e.preventDefault();
    var el = $(this).parents('.product');
    $(this)
      .parents('.table-products')
      .find(el)
      .fadeOut('350', function() {
        el.remove();
      });
  });

  $('.checkout-block').on('click', '.spend-bonus-btn', function(e) {
    e.preventDefault();
    var input = $(this).siblings('input');
    var el = parseInt(input.val(), 10);
    updateBonus(el);
    input.val(0);
  });

  $('.checkout-block').on('click', '.reset-bonus', function(e) {
    e.preventDefault();
    updateBonus(0);
  });

});

// USER PROFILE ORDERS

$(function() {
  $('.order-table-header.toggle').on('click', function() {
    $(this)
      .toggleClass('open')
      .siblings('.table-wrapper')
      .stop(true, true)
      .slideToggle('150');
  });
});
