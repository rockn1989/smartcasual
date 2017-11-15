'use strict';

$(function() {

function changeColor(color) {
  $('.brand-current-color span').text('');
  $('.brand-current-color span').text(color);
}
// CHANGE BRAND COLORS

$('.brand-color-list').on('click', 'a.color', function (e) {
  e.preventDefault();
  $(this)
    .parents()
    .find('a')
    .removeClass('checked');
  $(this).addClass('checked');
  var color = $(this).attr('data-color');
  changeColor(color);
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

$('.catalog-select').on('click', function () {
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
});


// CART CHANGE IMG

$('.action-wrapper .brand-color-list').on('click', 'a' , function (e) {
  e.preventDefault();

});

// CART CHANGE COLORS

/*$('.action-wrapper .brand-color-list').on('click', 'a.color', function (e) {
  e.preventDefault();
  $('.action-wrapper .brand-color-list').find('a.color').removeClass('checked');
  $(this).addClass('checked');
});
*/
// CART ADD TO FAVORITES

$('.action-wrapper .favorites').on('click', 'a' , function (e) {
  e.preventDefault();
  $(this).addClass('checked-favorites');
});

// ZOOM IMG 

if($('div').is('.easyzoom')) {
  var $easyzoom = $('.easyzoom').easyZoom();

  // Get an instance API
  var api = $easyzoom.data('easyZoom');
}

// CATALOG SCROLLBAR

$('.filter .group-list').mCustomScrollbar({
  axis: "y",
  theme: "siteTheme",
  scrollInertia: 300
});

// CATALOG SIDEBAR

$('.catalog-sidebar').on('click', '.js__catalog-sublist-toggle', function (e) {
  e.preventDefault();
  $(this).toggleClass('active');
  $(this).siblings('.catalog-sublist').slideToggle('350');
});

// FILTER EVENTS

$('.filter, .catalog-sidebar').on('click','.jg__group-title-toggle', function() {
  var _self = $(this);
  $(this).toggleClass('open-title');
  $(this).siblings('.group-list').slideToggle('350', function() {
   _self.toggleClass('open-list');
  });
});

});
