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
var TopContainer = React.createClass({displayName: "TopContainer",
  render: function(){
    return (
      React.createElement("div", null, 
        React.createElement("div", {className: "top-placeholder"}
        ), 
        React.createElement("div", {className: "top-container"}, 
          React.createElement("div", {className: "top-section"}, 
            React.createElement("div", {className: "left"}, 
              React.createElement("a", {id: "logo", href: "http://www.studiowangfei.com/"}, "Studiowangfei")
            ), 
            React.createElement("div", null, 
              React.createElement("a", {className: "item", id: projectPage, href: urlMap+"project.html"}, " Project"), 
              React.createElement("a", {className: "item", id: aboutPage, href: urlMap+"about.html"}, " About"), 
              React.createElement("a", {className: "item", id: blogPage, href: urlMap+"blog.html"}, " Blog"), 
              React.createElement("a", {className: "item", id: contactPage, href: urlMap+"contact.html"}, " Contact")
            )
          )
        )
      )
    );
  }
});

React.render(
  React.createElement(TopContainer, null),
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
