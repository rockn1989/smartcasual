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

// ZOOM IMG 

var $easyzoom = $('.easyzoom').easyZoom();

// Get an instance API
var api = $easyzoom.data('easyZoom');


});
