// do NOT write comment like"// xxxxxxxx" in JSX syntax, it cannot be parsed or skipped

// project index
var projectList = [
  "Mylio Pair",
  "SOM BIM Data Dashboard",
  "LinkedIn Welcome-Back Portal",
  "Another Taobao Village 2",
  "New York City Sub Rider-Readers",
  "Studiowangfei.com v1.0",
  "Another Taobao Village",
  "San Francisco POPOS",
  "Inside x Insight",
  "W@RK",
  "Another Leap",
  "Urban v.s. Rural of China 1979- ",
  "Instant Impressionism",
  "Holistic Realm",
  "Draw It",
  "Closer"
];

var projectID;
var projectTitle = $('.project_name').text();

for (var i=0; i<projectList.length; i++){
  if (projectList[i] === projectTitle){
    projectID = i;
  }
}

var nextProject = function(){
  if (projectID === projectData.length){
    return projectData.length
  }else{
    return projectID+1
  }
}

var previousProject = function(){
  if (projectID === 0){
    return 0
  }else{
    return projectID-1
  }
}

///////////// React.js components
// component structure
/* -TopContainer
   -ProjectTitleContainer
   -ProjectContainer
    -Link
   -BottomContainer */
/* -ProjectSlideContainer */


var ProjectTitleContainer = React.createClass({
  render: function(){
    return (
      <div>
        <div className="project_title">
          {projectData[projectID].name}
        </div>
      </div>
    );
  }
});

var Link = React.createClass({
  render: function(){
    return (
      <div>
        <a id="linkNodes" href={this.props.weblink}>
          {this.props.website}
        </a>
      </div>
    );
  }
});

var ProjectContainer = React.createClass({
  render: function(){
    if(projectData[projectID].relatedLinks != null){
      var linkNodes = projectData[projectID].relatedLinks.map(function(link){
        return (
          <Link weblink={link.weblink} website={link.website}>
          </Link>
        );
      });
    }
    return (
      <div>
        <div className="project_container">

          <div className="project_brief">
            {projectData[projectID].story}
            <br></br><br></br>
            {linkNodes}
            <br></br>
            <span className="bold" id="scroll"> Scroll down</span> {projectData[projectID].scrollDown}
          </div>

          <div className="project_img">
          </div>
        </div>
      </div>
    );
  }
});

var BottomContainer = React.createClass({
  render: function(){
    return (
      <div>
        <div className="bottom-section">
          <div className="back_project">
            <a href = "../project.html">Back</a>
          </div>
          <div className="prev_next_project">
            <a href = {projectData[previousProject()].projectUrl}>Prev</a> &nbsp;&nbsp;&nbsp;&nbsp;
            <a href = {projectData[nextProject()].projectUrl}>Next</a>
          </div>
        </div>
        <div className="copyright">
          <span className="left">&nbsp;</span>
          <span>
            &#169; 2010 - 2015 studiowangfei | all rights reserved
          </span>
        </div>
      </div>
    );
  }
});

var ProjectSlideContainer = React.createClass({
  render: function(){
    return (
      <div>
        <div className="project_slide_container">
          <div className="project_close">
            <img src="../img/close.png"/>
          </div>
          <div className="project_slide">
            <div id="project_arrow_left"><img src="../img/arrow_left.png"/>
            </div>
            <div className="project_slide_img">
            </div>
            <div id="project_arrow_right"><img src="../img/arrow_right.png"/>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

React.render(
  <ProjectTitleContainer />,
  document.getElementById('projectTitleContainer')
);

React.render(
  <ProjectContainer />,
  document.getElementById('projectContainer')
);

React.render(
  <BottomContainer />,
  document.getElementById('bottomContainer')
);

React.render(
  <ProjectSlideContainer />,
  document.getElementById('projectSlideContainer')
);

/////////////////// jQuery controller for all projects //////////////

$(document).ready(function(){

  // hide scroll when the project doesn't need it
  if(projectData[projectID].scrollDown === null){
    $('#scroll').css('display', 'none');
  }else{
    $('#scroll').css('display', 'initial');
  }

  // scroll down certain value when click
  $('#scroll').click(function(){
    $('body, html').animate({ scrollTop: projectData[projectID].scrollDownValue }, 800);
  });

  // slideshow image append
  var img_number = projectData[projectID].imgNum;

  for(var x=0;x<img_number;x++){
    $('.project_img').append(
      '<img id="project_small_' + x + '" src="' + projectData[projectID].imgUrl + x +'_big.jpg"/>'
    );
    $('.project_slide_img').append(
      '<img id="project_big_' + x + '" src="' + projectData[projectID].imgUrl + x +'_big.jpg"/>'
    );
  }

  // project image and brief text change layout according to window width
  function projectImageLayout(){
    var containerWidth = $('.feature_container').width();
    if (containerWidth >= 840){
      $('.project_img')
      .css('width', '58%')
      .css('margin', '0 auto')
      .css('height', '500px');

      $('.project_title')
      .css('text-align', 'left');

      $('.project_brief')
      .css('width', '35%')
      .css('margin-right', '7%')
      .css('text-align', 'left');

      $('.feature_descript')
      .css('width', '75%');

    }else{

      $('.project_img')
      .css('width', containerWidth*0.9 + 'px')
      .css('margin', '0 auto')
      .css('height', containerWidth*0.7 + 'px');

      $('.project_title')
      .css('text-align', 'center');

      $('.project_brief')
      .css('text-align', 'center')
      .css('width', containerWidth*0.9 + 'px')
      .css('margin', '0 auto 64px auto');

      $('.feature_descript')
      .css('width', containerWidth*0.9 + 'px');
    }
  }

  projectImageLayout();

  $(window).resize(function(){
    projectImageLayout()
  });

  // project slideshow (automatic on page top-right)
  $(".project_img > img:gt(0)").hide();

  function slideSwitch(){
    $('.project_img > img:first')
      .fadeOut(1000)
      .next()
      .fadeIn(1000)
      .end()
      .appendTo('.project_img');
  }

  //slideshow pause when hover
  var theInterval;
  function startSlide() {
    theInterval = setInterval(slideSwitch, 4000);
  }

  function stopSlide() {
    clearInterval(theInterval);
  }

  startSlide();
  $('.project_img').hover(function(){
    stopSlide();
  }, function(){
    startSlide();
  });

  //project slideshow new window & slide resize
  function slide_resize(){
    // slide responsive to window, initial and resize
    var windowHeight = $(window).height();
    var windowWidth = $(window).width();
    var slideHeight = $('.project_slide').height();
    if(windowHeight-slideHeight>0){
      $('.project_slide').css('margin-top', (windowHeight-slideHeight)*0.5+'px');
    }else{
      $('.project_slide').css('margin-top', '48px');
    }
    $('#project_arrow_left, #project_arrow_right').css('margin-top', (slideHeight-72)*0.5+'px');
  }

  $(window).resize(function(){
    slide_resize();
  });

  // slideshow show up and show in sequence
  var slideshowIndex = 0;
  function project_slideshow(id){
    return function(){
      slideshowIndex = id;
      $('body, html').css('overflow', 'hidden');
      $('.project_slide_container').show();
      $('.project_slide_img img').hide();
      $('#project_big_'+id).fadeIn('slow');
      slide_resize();
    }
  }

  function project_slide_prev(){
    if (slideshowIndex === 0) {
      slideshowIndex = img_number-1;
      $('.project_slide_img img').hide();
      $('#project_big_'  + slideshowIndex).fadeIn('slow');
    } else {
      slideshowIndex--;
      $('.project_slide_img img').hide();
      $('#project_big_'  + slideshowIndex).fadeIn('slow');
    }
  }

  function project_slide_next(){
    if (slideshowIndex === img_number-1) {
      slideshowIndex = 0;
      $('.project_slide_img img').hide();
      $('#project_big_'  + slideshowIndex).fadeIn('slow');
    } else {
      slideshowIndex++;
      $('.project_slide_img img').hide();
      $('#project_big_'  + slideshowIndex).fadeIn('slow');
    }
  }

  for(var y=0;y<img_number;y++){
    $('#project_small_'+y).click(project_slideshow(y));
  }

  $('#project_arrow_left').click(project_slide_prev);
  $('#project_arrow_right').click(project_slide_next);
  $('.project_slide_img img').click(project_slide_next);

  // escape key setting, keycode '27', only for standard project components
  $(document).keyup(function(e) {
    if (e.keyCode == 27) {
      $('body, html').css('overflow', 'auto');
      $('.project_slide_container').hide();
    }
  });

  // close button setting, only for standard project components
  $('.project_close').click(function(){
    $('body, html').css('overflow', 'auto');
    $('.project_slide_container').hide();
  });

});
