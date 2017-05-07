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
  
  /*Search-hotel Sliding(up/down) form*/
  $('.search-hotel__form-content').show();/*check*/
  
  $('.search-hotel__title-block').on('click', function () {
    $('.search-hotel__form-content').slideToggle();
  });
  
  /*Search-hotel jQuery Datepicker*/
  $.datepicker.setDefaults($.datepicker.regional[""]);
  $.datepicker.setDefaults($.datepicker.regional["ru"]);
  
  $('.search-hotel__input_date, .search-hotel__icon-font_calendar').on('click', function () {
    $('.search-hotel__input_date').datepicker({
      dateFormat: 'dd MM yy',
      minDate: new Date()
    });
  });
  
/*-------------------------------------------------------*/

});