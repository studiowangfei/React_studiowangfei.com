$(document).ready(function(){

    // collecting all components that need effect
    var componentList = [
    "headerComponent",
    "titleComponent",
    "briefComponent",
    "weblinkComponent",
    "imageComponent",
    "footerComponent",
    "slideComponent",
    "mapComponent",
    "mediaComponent",
    "logComponent",
    "pageLeftContainer",
    "pageRightContainer"
  ];


  // index pages appending
  for (var i=0; i<4; i++){
    componentList.push("index_page_"+i);
    var name;
    if (i==0){
      name = "Project";
    }else if(i==1){
      name = "About";
    }else if(i==2){
      name = "Blog";
    }else{
      name = "Contact"
    }

    $('.index_page').append(
      '<div class="index_page_'+i+'">'
      +'<p>1.'+(i+1)+' &nbsp; '+name+'</p>'
      +'<img class="webframeBottomImage" src="../img/project/webframe/component/'
      +(i+16)+'.png" />'
      +'<img class="webframeTopImage" src="../img/project/webframe/component/'
      +(i+16)+'-.png" /></div>'
    );
  }

  // project pages appending
  for (var i=0; i<8; i++){
    componentList.push("project_page_"+i);
    var name;
    if (i==0){
      name = "Inside x Insight";
    }else if(i==1){
      name = "Taobao Village 2";
    }else if(i==2){
      name = "Urban vs Rural China";
    }else if(i==3){
      name = "San Francisco POPOS";
    }else if(i==4){
      name = "Another Leap";
    }else if(i==5){
      name = "Taobao Village 1";
    }else if(i==6){
      name = "W@RK";
    }else if(i==7){
      name = "NYC Sub Rider-Reader";
    }else{
    }

    $('.project_page').append(
      '<div class="project_page_'+i
      +'"><p>1.1.'+(i+1)+' &nbsp; '+name+'</p>'
      +'<img class="webframeBottomImage" src="../img/project/webframe/component/'
      +(i+7)+'.png" />'
      +'<img class="webframeTopImage" src="../img/project/webframe/component/'
      +(i+7)+'-.png"</div>'
    );
  }

  // box-shadow effect
  for (var i=0; i<componentList.length; i++){
    $('.'+componentList[i]+' p')
    .addClass("componentTitle");

    $('.'+componentList[i]+' img')
    .addClass('componentImage')
    .mouseenter(showTitleShadow(i, 1))
    .mouseleave(showTitleShadow(i, 0));
  }

  // showing its title when hovering on image
  function showTitleShadow(i, n){
    return function(){
      $('.'+componentList[i]+' p')
      .css('opacity', n);

      if (n == 1){
        $('.'+componentList[i]+' img')
        .addClass('componentImageHover');
      }else{
        $('.'+componentList[i]+' img')
        .removeClass('componentImageHover');
      }
    }
  }

});
