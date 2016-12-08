$(document).ready(function(){
//Cat and Team page js
  //center league image on cat pages
  $('.fhHero .leaImg').find('img').bothCenter();
  //teamdrp button
  $('.team-btn').click(function () {
    $('.team-btn').toggleClass('btnClicked');
  });
  //team slide down
  $('.team-btn, .buttonWrap.btnClicked::after').click(function () {
    var viewWidth = $(window).width();
    if (viewWidth > 1103) {
      $('.team-btn').toggleClass("clicked");
      $('.teamDrp-theTeams ul').slideToggle('fast');
    } else {
      $('.mob-team-ovrWrap').fadeIn();
      //calculate proper height for scroll
      viewportHeight = $(window).height();
      mobTopHeight = $('.mob-filt-head-wrap').height();
      mobOvrHeight = $('.mobHeader').height();
      totalMobHeight = mobTopHeight + mobOvrHeight;
      //subtract
      mobDrpHeight = viewportHeight - (totalMobHeight);
      $('.drpDownOptions').css('max-height', function () {
        return mobDrpHeight + "px";
      });
      $('html').addClass("noScroll");
    }
  });

  $(window).resize(function () {
    if (viewWidth < 1103) {
      $('.teamDrp-theTeams ul').hide();
    } else {
    }
  });
  //team dropdown
  teamOnMob();
  //cat page functions
  catPagefunc();
// end cat and team page js
});