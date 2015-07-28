$(document).ready(function(){
  // control the proportion of video
  function playItemControl(){
    var video_width_1 = $('#im_video_1').width();
    $('#im_video_1').css('height', video_width_1*0.6644+'px');

    var video_width_2 = $('#im_video_2').width();
    $('#im_video_2').css('height', video_width_2*0.6644+'px');
  }

  playItemControl();
  $(window).resize(function(){
    playItemControl();
  });

});


