$(document).ready(function(){

    // wow js
    new WOW().init();

      //typed js
  var typed = new Typed('#typed' ,{
    strings: ["designer.", "developer."],
    typeSpeed: 80,
    loop: true,
    loopCount: Infinity,
    showCursor: false,
    backSpeed: 70,
  });


  //add class for nav

  $('#bar-btn').click(function(){
    $('#nav-right').toggleClass('show')
})

 // for icons

  
 $('#bars').click(function(){
  $('#bars').addClass('hide'),
  $('#times').removeClass('hide')
});

$('#times').click(function(){
  $(this).addClass('hide'),
  $('#bars').removeClass('hide')

});


    // progress bar design

    $('#one').LineProgressbar({
        percentage: 95,
        fillBackgroundColor: '#3498db',
        backgroundColor: '#EEEEEE',
        radius: '5px',
        height: '15px',
        width: '100%',
        ShowProgressCount:true

      });
      $('#two').LineProgressbar({
        percentage: 80,
        fillBackgroundColor: '#3498db',
        backgroundColor: '#EEEEEE',
        radius: '5px',
        height: '15px',
        width: '100%',
        ShowProgressCount:true

      });
      $('#three').LineProgressbar({
        percentage: 50,
        fillBackgroundColor: '#3498db',
        backgroundColor: '#EEEEEE',
        radius: '5px',
        height: '15px',
        width: '100%',
        ShowProgressCount:true

      });
      $('#four').LineProgressbar({
        percentage: 85,
        fillBackgroundColor: '#3498db',
        backgroundColor: '#EEEEEE',
        radius: '5px',
        height: '15px',
        width: '100%',
        ShowProgressCount:true

      });
      $('#five').LineProgressbar({
        percentage: 70,
        fillBackgroundColor: '#3498db',
        backgroundColor: '#EEEEEE',
        radius: '5px',
        height: '15px',
        width: '100%',
        ShowProgressCount:true

      });
      $('#six').LineProgressbar({
        percentage: 90,
        fillBackgroundColor: '#3498db',
        backgroundColor: '#EEEEEE',
        radius: '5px',
        height: '15px',
        width: '100%',
        ShowProgressCount:true

      });


        //add class for  fixed nav
    $(window).scroll(function() {    
      var scroll = $(window).scrollTop();
  
      if (scroll >= 500) {
          $("#nav-bar").addClass("fixed");
      } else {
          $("#nav-bar").removeClass("fixed");
      }
  });

      // scroll top function
      $("#sctop").click(function(){            
        $('html, body').animate({
                scrollTop: $("#nav").offset().top
            }, 800);
    });


    //add class for scroll top button
    $(window).scroll(function() {    
      var scroll = $(window).scrollTop();
  
      if (scroll >= 500) {
          $("#sctop").addClass("show");
      } else {
          $("#sctop").removeClass("show");
      }
  });

  // for mixit up
  var mixer = mixitup('#projects');


  //for one page nav

  $('#one-page-nav').onePageNav({
    currentClass: 'current',
    changeHash: false,
    scrollSpeed: 750,
    scrollThreshold: 0.5,
    filter: '',
    easing: 'swing',
    begin: function() {
      //I get fired when the animation is starting
    },
    end: function() {
      //I get fired when the animation is ending
    },
    scrollChange: function($currentListItem) {
      //I get fired when you enter a section and I pass the list item of the section
    }
  });



 

 
});