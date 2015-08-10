// do NOT write comment like"// xxxxxxxx" in JSX syntax, it cannot be parsed or skipped

// get page type info by testing if 'feature_container' exists,
// and decide the  current section from DOM
var pageType;
if (!document.getElementsByClassName('feature_container')[0]){
  pageType = $('.page_type').text();
}else{
  pageType = "projectEach";
}

// deciding url path and the current section page by pageType
var urlMap;
var projectPage, aboutPage, blogPage, contactPage;

if (pageType == "projectIndex" || pageType == "projectEach"){
  projectPage = "current";
  aboutPage = null;
  blogPage = null;
  contactPage = null;
}else if (pageType == "about"){
  projectPage = null;
  aboutPage = "current";
  blogPage = null;
  contactPage = null;
}else if (pageType == "blog"){
  projectPage = null;
  aboutPage = null;
  blogPage = "current";
  contactPage = null;
}else{
  projectPage = null;
  aboutPage = null;
  blogPage = null;
  contactPage = "current";
}

if (pageType == "projectEach"){
  urlMap = "../";
}else{
  urlMap = "";
}

// top bar framework for index and project pages
// to make React-constructed element perfectly match html-constructed element spacing, add " " before each section name
var TopContainer = React.createClass({
  render: function(){
    return (
      <div>
        <div className="top-placeholder">
        </div>
        <div className="top-container">
          <div className="top-section">
            <div className="left">
              <a id="logo" href="http://www.studiowangfei.com/">Studiowangfei</a>
            </div>
            <div>
              <a className="item" id={projectPage} href= {urlMap+"project.html"}> Project</a>
              <a className="item" id={aboutPage} href= {urlMap+"about.html"}> About</a>
              <a className="item" id={blogPage} href= {urlMap+"blog.html"}> Blog</a>
              <a className="item" id={contactPage} href= {urlMap+"contact.html"}> Contact</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

React.render(
  <TopContainer />,
  document.getElementById('topContainer')
);

// standard controller for all pages
$(document).ready(function(){

  // back to top when reload
  $(window).on('beforeunload', function(){
    $(window).scrollTop(0);
  });

  // top section responsive to scroll up and down
  $(window).scroll(function(){
    $('.top-container')
    .css('background-color', '#f3f3f3')
    .css('border-bottom', 'none')
    .css('box-shadow', '0px 3px 6px rgba(0, 0, 0, 0.2)');
    //$('#logo').css('color', 'white');
    //$('#current').css('color', 'white');
    $('.item').hover(function(){
      $(this).css('color', 'black');
    }, function(){
      $(this).css('color', '#a3a3a3');
      $('#current').css('color', 'black');
    });
    var topMargin = $(window).scrollTop();
    if (topMargin === 0){
      $('.top-container')
      .css('background-color', 'white')
      .css('box-shadow', 'none');
      $('#current').css('color', 'black');
      $('#logo').css('color', 'black');
      $('.item').hover(function(){
        $(this).css('color', 'black');
      }, function(){
        $(this).css('color', '#a3a3a3');
        $('#current').css('color', 'black');
      });
    }
  });

});
