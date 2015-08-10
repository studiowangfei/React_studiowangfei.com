$(document).ready(function(){

  // showing title when hovering on images
  function showTitle(n, i){
    return function(){
      $('.mylio_userflow_'+ i +' p')
      .css('opacity', n);
    }
  }

  for (var i=0; i<16; i++){
    // userflow image sprite
    $('#mylio_userflow_image_' + i)
    .css('background-image', 'url("../img/project/mylio/dark_sprite.jpg")')
    .css('background-repeat','no-repeat')
    .css('background-position', -480*i+'px 0px');

    // showing image title
    $('#mylio_userflow_image_' + i)
    .mouseenter(showTitle(1, i))
    .mouseleave(showTitle(0, i));
  }

  // sprite for user flow images
  $('#mylio_userflow_image_0')
  .css('background-image', 'url("../img/project/mylio/dark_sprite.jpg")')
  .css('background-repeat','no-repeat')
  .css('background-position', '0px 0px');

  // mylio mock-up script
  var mylioSwitchIndex = 0;
  function switchPair(i){
    return function(){
      if(i===0 || i===1){
        if(mylioSwitchIndex === 0){
          $('.pic-0, .pic-1').css('border', '4px solid #212121');
          $('.pic-'+i).css('border', '4px solid #2AACE8');
          $('.pic-0 img, .pic-1 img').css('-webkit-filter','none');
          $('.pic-'+i+' img').addClass('selected').css('-webkit-filter','sepia(100%)');
          $('.mylio-mockup-sort-container').animate({scrollTop:285}, 750);
          mylioSwitchIndex = 1;
        }else{
          $('.mylio-mockup-sort-container').animate({scrollTop:0}, 750);
          mylioSwitchIndex = 0;
        }
      }else if(i===2 || i===3){
        if(mylioSwitchIndex === 1){
          $('.pic-2, .pic-3').css('border', '4px solid #212121');
          $('.pic-'+i).css('border', '4px solid #2AACE8');
          $('.pic-2 img, .pic-3 img').css('-webkit-filter','none');
          $('.pic-'+i+' img').addClass('selected').css('-webkit-filter','sepia(100%)');
          $('.mylio-mockup-sort-container').animate({scrollTop:570}, 750);
          mylioSwitchIndex = 2;
        }else{
          $('.mylio-mockup-sort-container').animate({scrollTop: 285}, 750);
          mylioSwitchIndex = 1;
        }
      }else if(i===4 || i===5){
        if (mylioSwitchIndex === 2){
          $('.pic-4, .pic-5').css('border', '4px solid #212121');
          $('.pic-'+i).css('border', '4px solid #2AACE8');
          $('.pic-4 img, .pic-5 img').css('-webkit-filter','none');
          $('.pic-'+i+' img').addClass('selected').css('-webkit-filter','sepia(100%)');
          $('.mylio-mockup-sort-container').animate({scrollTop:936}, 750);
          mylioSwitchIndex = 2;
        }else{
          $('.mylio-mockup-sort-container').animate({scrollTop: 570}, 750);
          mylioSwitchIndex = 2;
        }
      }
      mylioPreviewSwitch();
      opacityControl();
    }
  }

  function opacityControl(){
    if (mylioSwitchIndex === 0){
      $('.pic-2, .pic-3, .pic-4, .pic-5').css('opacity', '0.35');
      $('.pic-0, .pic-1').css('opacity', '1')
    }else if (mylioSwitchIndex === 1){
      $('.pic-0, .pic-1, .pic-4, .pic-5').css('opacity', '0.35');
      $('.pic-2, .pic-3').css('opacity', '1')
    }if (mylioSwitchIndex === 2){
      $('.pic-2, .pic-3, .pic-0, .pic-1').css('opacity', '0.35');
      $('.pic-4, .pic-5').css('opacity', '1')
    }
  }

  opacityControl();

  for(var i=0; i<6; i++){
    $('.pic-'+i).click(
      switchPair(i));
  }

  $('.back').click(function(){
    if(mylioSwitchIndex===0 | mylioSwitchIndex===1){
      $('.mylio-mockup-sort-container').animate({scrollTop:0}, 750);
      mylioSwitchIndex=0;
    }else if(mylioSwitchIndex===2){
      $('.mylio-mockup-sort-container').animate({scrollTop:285}, 750);
      mylioSwitchIndex=1;
    }
    mylioPreviewSwitch();
    opacityControl();
  });

  $('.next').click(function(){
    if(mylioSwitchIndex===0){
      $('.mylio-mockup-sort-container').animate({scrollTop:285}, 750);
      mylioSwitchIndex=1;
    }else if(mylioSwitchIndex===1 | mylioSwitchIndex===2){
      $('.mylio-mockup-sort-container').animate({scrollTop:570}, 750);
      mylioSwitchIndex=2;
    }
    mylioPreviewSwitch();
    opacityControl();
  });

  $('.undo').click(function(){
    if(mylioSwitchIndex===0){
      $('.pic-0, .pic-1').css('border', '4px solid #212121');
      $('.pic-0 img, .pic-1 img').css('-webkit-filter','none');
    }else if(mylioSwitchIndex===1){
      $('.pic-2, .pic-3').css('border', '4px solid #212121');
      $('.pic-2 img, .pic-3 img').css('-webkit-filter','none');
    }else if(mylioSwitchIndex===2){
      $('.pic-4, .pic-5').css('border', '4px solid #212121');
      $('.pic-4 img, .pic-5 img').css('-webkit-filter','none');
    }
  });

  for(var i=0; i<14; i++){
    $('.side-preview').append(
      '<div class="preview-pic" id="preview-'+i+'"><img src="../img/project/mylio/mockup/column_'+i+'.jpg"></div>'
    )
  }

  function mylioPreviewSwitch(){
    if(mylioSwitchIndex === 0){
      $('.mylio-mockup-side-container').animate({ scrollTop: 0 }, 750);
      for(var i=0; i<14; i++){
        $('#preview-'+i).css('opacity', '0.2');
      }
      $('#preview-4').css('opacity', '1');
    }else if(mylioSwitchIndex === 1){
      $('.mylio-mockup-side-container').animate({ scrollTop: 47 }, 750);
      for(var i=0; i<14; i++){
        $('#preview-'+i).css('opacity', '0.2');
      }
      $('#preview-5').css('opacity', '1');
    }else if(mylioSwitchIndex === 2){
      $('.mylio-mockup-side-container').animate({ scrollTop: 114 }, 750);
      for(var i=0; i<14; i++){
        $('#preview-'+i).css('opacity', '0.2');
      }
      $('#preview-6').css('opacity', '1');
    }
  }

  mylioPreviewSwitch();

  $('#preview-4').click(function(){
    mylioSwitchIndex=0;
    mylioPreviewSwitch();
    $('.mylio-mockup-sort-container').animate({scrollTop:0}, 750);
    opacityControl();
  });

  $('#preview-5').click(function(){
    mylioSwitchIndex=1;
    mylioPreviewSwitch();
    $('.mylio-mockup-sort-container').animate({scrollTop:285}, 750);
    opacityControl();
  });

  $('#preview-6').click(function(){
    mylioSwitchIndex=2;
    mylioPreviewSwitch();
    $('.mylio-mockup-sort-container').animate({scrollTop:570}, 750);
    opacityControl();
  });

});