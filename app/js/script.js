/*global $, jQuery*/

$(document).ready(function () {
  'use strict';

/*event.preventDefault() gor IE9(event.returnValue = false)*/
  $.fn.eventPreventDefaultSafe = function () {
    if (event.preventDefault) {
      event.preventDefault();
    } else {
      event.returnValue = false;
    }
  };
  
  /*Search-hotel slide form*/
  $('.search-hotel__form-content').show();/*check*/
  
  $('.search-hotel__title-block').on('click', function () {
    $('.search-hotel__form-content').slideToggle();
  });
  
/*-------------------------------------------------------*/

});