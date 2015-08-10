$(document).ready(function(){
  // no feature, adding margin
  $('.bottom-section').css('margin-top', '48px');

  // wechat QR code click and show
  $('#wechat').click(function(){
    if($('#wechatCode').css('opacity') == 0){
      $('#wechatCode').css('opacity', '1');
    }else{
      $('#wechatCode').css('opacity', '0');
    }
  });
});



