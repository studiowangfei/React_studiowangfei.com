$(document).ready(function(){

  $('#about_1').css('display', 'initial');

  function createCallback(i){
    return function(){
      $('.about_img img').hide();
      $('#about_' + i).fadeIn('slow');
    }
  }

  for(var i=1; i<12; i++){
    $('#about_link_' + i).click(createCallback(i));
  }
});
