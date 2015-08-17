$(document).ready(function(){

  // hide all articles except the newest one
  for(var i=1;i<5;i++){
    $('.writing_'+i).hide();
  }

  // switch articles and reset scroll
  function clickSwitch(x){
    return function(){
      for(var i=0;i<5;i++){
        $('.writing_'+i).hide();
      }
      $('.writing_'+x).fadeIn('slow');
      $('.writing_container').scrollTop(0);

      // retract the cascade menu
      $('.blog_menu_icon')
      .removeClass('blog-menu-icon-transform');

      $('.hidden_blog_list')
      .removeClass('extend_blog_list');

      $('.hidden_blog_list_container')
      .css('display', 'none');
    }
  }

  for (var i=0; i<5; i++){
    $('#writing_list_'+i).click(clickSwitch(i));
    $('#hidden_writing_list_'+i).click(clickSwitch(i));
  }

  // layout responsive to window width
  function blogChangeLayout(){
    var containerWidth = $(window).width();
    if (containerWidth < 872){
      $('.blog_list')
      .css('display', 'none');

      $('.writing_container')
      .css('margin', '0 auto 64px auto');

      $('.hidden_blog_list')
      .css('display', 'initial');
    }else{
      $('.blog_list')
      .css('display', 'initial');

      $('.writing_container')
      .css('margin', '0 0 64px 0');

      $('.hidden_blog_list')
      .css('display', 'none');

      $('.blog_menu_icon')
      .removeClass('blog-menu-icon-transform');

      $('.hidden_blog_list')
      .removeClass('extend_blog_list');

      $('.hidden_blog_list_container')
      .css('display', 'none');
    }
  }

  blogChangeLayout();
  $(window).resize(function(){
    blogChangeLayout();
  });

  // click blog list menu icon
  // to show blog list cascade
  $('.blog_menu_icon').click(function(){
    $(this)
    .toggleClass('blog-menu-icon-transform');

    $('.hidden_blog_list_container').fadeToggle(10);

    $('.hidden_blog_list')
    .toggleClass('extend_blog_list');
  });

});



