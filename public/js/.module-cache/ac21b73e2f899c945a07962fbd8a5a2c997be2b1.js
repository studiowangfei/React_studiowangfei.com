$(document).ready(function(){
  $(window).on('beforeunload', function() {
    $(window).scrollTop(0);
  });

  // top section responsive to scroll up and down
  $(window).scroll(function(){
    $('.top-container').css('background-color', 'black')
    .css('border-bottom', 'none');
    $('#logo').css('color', 'white');
    $('#current').css('color', 'white');
    $('.item').hover(function(){
      $(this).css('color', 'white');
    }, function(){
      $(this).css('color', '#888888');
      $('#current').css('color', 'white');
    });
    var topMargin = $(window).scrollTop();
    if (topMargin === 0){
      $('.top-container').css('background-color', 'white')
      .css('border-bottom', '1px solid #e3e3e3');
      $('#current').css('color', 'black');
      $('#logo').css('color', 'black');
      $('.item').hover(function(){
        $(this).css('color', 'black');
      }, function(){
        $(this).css('color', '#888888');
        $('#current').css('color', 'black');
      });
    }
  });

  //resize top fixed menu
  var widthForTop = $('.main-container').width();
  $('.top-section').css('width', widthForTop+'px');

  $(window).resize(function(){
    var widthForTop = $('.main-container').width();
    $('.top-section').css('width', widthForTop+'px');
  });

  for(var i=1;i<4;i++){
    $('.writing_'+i).hide();
  }

  //switch articles
  function clickSwitch(x){
    $('#writing_list_'+x).click(function(){
      for(var i=0;i<4;i++){
        $('.writing_'+i).hide();
      }
      $('.writing_'+x).fadeIn('slow');
      $('.writing_container').scrollTop(0);
    })
  }

  clickSwitch(0);
  clickSwitch(1);
  clickSwitch(2);
  clickSwitch(3);

})



