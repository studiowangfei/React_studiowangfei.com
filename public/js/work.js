$(document).ready(function(){

  // control the proportion of video
  function playItemControl(){
    var video_width_1 = $('#work_video_1').width();
    $('#work_video_1').css('height', video_width_1*0.5617+'px');

    var video_width_2 = $('#work_video_2').width();
    $('#work_video_2').css('height', video_width_2*0.75+'px');
  }
  playItemControl();
  $(window).resize(function(){
    playItemControl();
  });

  /* left-bar appear and fixed after certain scroll */
  $(window).scroll(function(){
    var scrollHeight = $(window).scrollTop();
    var work_video_height = $('.work_video').height();
    if(scrollHeight>640+work_video_height){
      $('.work_trigger').fadeIn('slow');
    }else{
      $('.work_trigger').fadeOut('slow');
    }
  });

  /* layer click and show */
  $('#02, #03, #04, #05').hide();
  $('#work_space').addClass('work_clicked_shadow');

  function click_layer(selector, layer){
    $(selector).click(function(){
      $(layer).fadeToggle('slow');
      $(this).toggleClass('work_clicked_shadow');
    });
  }

  click_layer('#work_space', '#01');
  click_layer('#work_furniture', '#02');
  click_layer('#work_social', '#03');
  click_layer('#work_price', '#04');
  click_layer('#work_protocol', '#05');

});



