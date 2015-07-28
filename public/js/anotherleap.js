$(document).ready(function(){
  // feature on the bottom of page
  for(var i=1; i<8; i++){
    $('#anotherleap_right').append(
      '<img id="mani_' + i + '" src="../img/project/anotherleap/artworks/' + i + '.png"/>'
    );
  }

  $('#manifesto').click(function(){
    $('#anotherleap_left img, #anotherleap_right img').fadeOut();
    $('.al_bold').removeClass('al_red');
  });

  var n;
  function manifesto_click(n){
    return function(){
      $('.al_bold').removeClass('al_red');
      $('#manifesto_'+n).toggleClass('al_red');
      $('#anotherleap_right img').hide();
      $('#mani_'+n).fadeToggle('slow');
      $('#mani_'+n).click(function(){
        $(this).fadeOut('slow');
        $('.al_bold').removeClass('al_red');
      });
    }
  }

  for(var n=1; n<8; n++){
    $('#manifesto_'+n).click(manifesto_click(n));
  };

  for(var x=1; x<15; x++){
    $('#anotherleap_left').append(
      '<img id="art_' + x + '" src="../img/project/anotherleap/artworks/' + x + '.gif"/>'
    );
  }

  $('#works').click(function(){
    $('#anotherleap_left img, #anotherleap_right img').fadeOut();
    $('.al_bold').removeClass('al_red');
  });

  var y;
  function works_click(y){
    return function(){
      $('.al_bold').removeClass('al_red');
      $('#works_'+y).toggleClass('al_red');
      $('#anotherleap_left img').hide();
      $('#art_'+y).fadeToggle('slow');
      $('#art_'+y).click(function(){
        $(this).fadeOut('slow');
        $('.al_bold').removeClass('al_red');
      });
    }
  }

  for(var i=1; i<15; i++){
    $('#works_'+i).click(works_click(i));
  };


});
