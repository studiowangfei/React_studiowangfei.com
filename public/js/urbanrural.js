$(document).ready(function(){

  //feature part: click show/hide layers
  $('#02, #03, #04, #05, #06, #07, #08, #09, #10, #11, #12').hide();

  $('#population').click(function(){
    $(this).toggleClass('urbanrural_box');
    $('#urban, #rural, #everything').removeClass('urbanrural_box');
    $('#10, #11, #12').fadeOut('slow');
    $('#02, #06').fadeToggle('slow');
  });

  $('#income').click(function(){
    $(this).toggleClass('urbanrural_box');
    $('#urban, #rural, #everything').removeClass('urbanrural_box');
    $('#10, #11, #12').fadeOut('slow');
    $('#05, #07').fadeToggle('slow');
  });

  $('#housing').click(function(){
    $(this).toggleClass('urbanrural_box');
    $('#urban, #rural, #everything').removeClass('urbanrural_box');
    $('#10, #11, #12').fadeOut('slow');
    $('#03, #04').fadeToggle('slow');
  });

  $('#urban').click(function(){
    $(this).toggleClass('urbanrural_box');
    $('#population, #income, #housing, #rural, #everything')
    .removeClass('urbanrural_box');
    $('#02, #03, #04, #05, #06, #07, #11, #12').fadeOut('slow');
    $('#10').fadeToggle('slow');
  });

  $('#rural').click(function(){
    $(this).toggleClass('urbanrural_box');
    $('#population, #income, #housing, #urban, #everything')
    .removeClass('urbanrural_box');
    $('#02, #03, #04, #05, #06, #07, #10, #12').fadeOut('slow');
    $('#11').fadeToggle('slow');
  });

  $('#policy').click(function(){
    $(this).toggleClass('urbanrural_box');
    $('#everything')
    .removeClass('urbanrural_box');
    $('#12').fadeOut('slow');
    $('#08, #09').fadeToggle('slow');
  });

  $('#everything').click(function(){
    $(this).toggleClass('urbanrural_box');
    $('#population, #income, #housing, #urban, #rural, #policy')
    .removeClass('urbanrural_box');
    $('#02, #03, #04, #05, #06, #07, #08, #09, #10, #11').fadeOut('slow');
    $('#12').fadeToggle('slow');
  });

});



