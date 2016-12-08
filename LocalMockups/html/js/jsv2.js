//Vars

var mobDrpHeight;
var theIndex;
var choText;
var theSrcs;
var viewportWidth;
var viewportHeight;
var mobHeadCont;
var mobHeadHeight;
var mobDropdown;
var newHeight;
var textLength;
var mobTopHeight;
var mobOvrHeight;
var totalMobHeight;
var ovrDropMenHeight;
var theDoc = $(document);
var shopBtn = $('li.drpLef');
var searchBtn = $('li.isSearch');
var dropContain = $('.drpDown-cont.deskMen');
var winScroll = theDoc.scrollTop();
var childLink = $('.mobSubMen').children('li').children('a');
var clickedChildLink = $('.mobSubMen').children('li.isClicked').children('a');
var grChildLink = $('.mobSubMen li ul li a');
var viewWidth = $(window).width();

//Functions

//NAV
// mobile menu calculate correct height
function mobScrollControl() {
  mobHeadHeight = $('.mobHeader .row').height();
  mobDropdown = $('.mobMen .drpDown');
  viewportHeight = $(window).height();
  mobDropdown.height(viewportHeight - mobHeadHeight);
}

function childMobScrollControl() {
  //calculating correct height for scroll of submenu
  mobHeadHeight = $('.mobHeader .row').height();
  mobDropdown = $('.mobMen .drpDown');
  mobSubDropdown = $('.mobSubMen');
  viewportHeight = $(window).height();
  newHeight = viewportHeight - mobHeadHeight;
  //set container height
  mobDropdown.height(newHeight);
  //set submenu height and subtract top margin 
  mobSubDropdown.height(newHeight - 50);
}

// mobile hamburger control
function burgerControl() {
  if ($('.mobMenBtn').hasClass("fa-bars")) {
    $('.mobMenBtn').removeClass("fa-bars").addClass("fa-close");
    $('.drpDown-cont.mobMen .drpDown-act').slideDown("medium");
    $('.mobMen').slideDown();
    if (!$('html, body').hasClass('noScroll')) {
      $('html, body').addClass('noScroll');
    }
  } else if ($('.mobMenBtn').hasClass("fa-close")) {
    $('.mobMenBtn').removeClass("fa-close").addClass("fa-bars");
    $('.drpDown.condense').css('overflow-y', 'scroll');
    $('.mobMen').fadeOut('fast');
    $('.drpDown').removeClass('noScroll');
    $('.mobMen .drpDown').find('li').removeClass('clicked');
    setTimeout(function () {
      $('.mobMen .drpDown, a.topLink').removeClass('condense');
    }, 500);
    if (!$('.mob-filt-ovrWrap').hasClass('opened')) {
      $('html, body').removeClass('noScroll');
    } else {
      $('html, body').addClass('noScroll');
    }
  }
}

//basically jsut the if close block in burgercontrol 
function destroyMobMen() {
  $('.mobMenBtn').removeClass("fa-close").addClass("fa-bars");
  $('.drpDown.condense').css('overflow-y', 'scroll');
  $('.mobMen').fadeOut('fast');
  $('.drpDown').removeClass('noScroll');
  $('.mobMen .drpDown').find('li').removeClass('clicked');
  setTimeout(function () {
    $('.mobMen .drpDown, a.topLink').removeClass('condense');
  }, 500);
  if (!$('.mob-filt-ovrWrap').hasClass('opened')) {
    $('html, body').removeClass('noScroll');
  } else {
    $('html, body').addClass('noScroll');
  }
}

//reveal search  on desk and mobile
function dropSearch() {
  destroyDeskDrp();
  if ($('.deskSearch .searchBarWrap').hasClass('open')) {
    $('.deskSearch .searchBarWrap').removeClass('open').fadeOut();
    $('.deskSearch .searchResultWrap').fadeOut();
  } else {
    $(this).toggleClass("clicked");
    shopBtn.removeClass("clicked");
    setTimeout(function () {
      $('.subMenWrap').css("display", "none");
    }, 400);
    $('.deskSearch .searchBarWrap').toggleClass("open").slideToggle("fast");
    setTimeout(function () {
      $('.deskSearch .searchResultWrap').fadeIn();
    }, 20);
    $('.searchBarWrap').find('.fhContainer').find('input').focus();
  }
}

function dropSearchMob() {
  if ($('.mobSearch .searchBarWrap').hasClass('open')) {
    $('.mobSearch .searchBarWrap').removeClass('open').fadeOut();
    $('.mobSearch .searchResultWrap').fadeOut();
  } else {
    $(this).toggleClass("clicked");
    shopBtn.removeClass("clicked");
    setTimeout(function () {
      $('.subMenWrap').css("display", "none");
    }, 400);
    $('.mobSearch .searchBarWrap').toggleClass("open").slideToggle("fast");
    setTimeout(function () {
      $('.mobSearch .searchResultWrap').fadeIn();
    }, 20);
  }
}

function destroySearch() {
  $('.mobSearch .searchBarWrap').removeClass('open').fadeOut();
  $('.mobSearch .searchResultWrap').fadeOut();
}
function destroyDeskDrp() {
  $('.gChildMen').find('ul').hide();
  $('.drpDown li').removeClass('clicked');
  $('.childContWrap').find('.childCont').find('ul').hide();
  $('.childMenWrap').removeClass('open');
}

function searchScrollControl() {
  var mobHeight = $('.mobHeader').height();
  var seaHeight = 96;
  var totalHeight = mobHeight + seaHeight;
  var viewportHeight = $(window).height();
  var calcHeight = (viewportHeight - totalHeight);
  var mobSearWrap = $('.mobSearch .searchResultWrap');
  mobSearWrap.css('height', calcHeight + 'px')
}

//Kill team dropdowns
function killTeams() {
  $('.team-btn').removeClass("clicked");
  $('.teamDrp-theTeams ul').slideUp('fast');
}
// center btn on cat pages
function btnCenter() {

  if ($('.teamDrp-act-right').length > 0) {
    setTimeout(function () {
      var btnContHeight = $('.teamDrp-act-right').outerHeight();
      var btnContPad = parseInt($('.teamDrp-act-right').css('padding').replace(/[^-\d\.]/g, ''));
      var btnHeight = $('.buttonWrapCont').outerHeight();
      var calcPad = ((btnContHeight - btnHeight) / 2) - btnContPad;
      $('.buttonWrapCont').css('margin-top', calcPad + 'px');
    }, 200);
  } else {
    return false
  }
};

//Copy teams from desktop to mobile
function teamOnMob() {
  var teamsActual = $('.teamDrp-theTeams ul').html();
  $('.mob-filt-drpDowns .drpDownOptions.team').html(teamsActual);
}
//Clean nested child classes
function cleanChildren() {
  childLink.parent('li').removeClass('isClicked');
  childLink.parent('li').removeClass('offChild');
  childLink.parent('li').removeClass('onChild');
}

function calcChildHeights() {
  var childContHeight = $('.childContWrap').height();
  var gChildContHeight = $('.gChildContWrap').height();
  $('.childContWrap').find('ul').css('height', 'auto');
  $('.gChildContWrap').find('ul').css('height', 'auto');
  $('.gChildContWrap').find('ul.open').css('min-height', childContHeight + 'px');

}

function killChildMen() {

  $('.gChildMen').find('ul').fadeOut();
  $('.childMen').find('ul').fadeOut();
  $('.drpDown li').removeClass('clicked');
  $('.childMenWrap').removeClass('open');
  $('.childMenInnerWrap').hide();
}

function killGchildMen() {

  $('.gChildMen').find('ul').hide();

}
/*

Global JS on document ready

*/
$(document).ready(function () {

  //Desktop nav
  //Parent menu item
  //handling hover events for child and gchild menu

  // $('.deskMen .drpDown li').mouseenter(function () {
  //   if ($(this).hasClass('clicked')) {
  //     $('.childMenWrap').removeClass('open');
  //   }
  //   else {
  //     $('.childMenWrap').addClass('open');
  //   }
  // });
$().css
  $('.deskMen .drpDown li').hoverIntent(function () {
    $('.gChildMen').find('ul').hide();
    if (!$(this).hasClass('clicked')) {
     
      $('.childMenInnerWrap').show();
      $('.deskMen .drpDown li').removeClass('clicked');
      $(this).addClass('clicked');
      //parent index
      var topIndex = $(this).index() + 1;
      var childCont = $('.childContWrap').find('.childCont:nth-of-type(' + topIndex + ')');
      //slide up control menus
      $('.childContWrap').find('.childCont').find('ul').hide();
      $('.childContWrap').find('.childCont').find('ul').removeClass('open');
      childCont.find('ul').addClass('open');
      var firstChild = childCont.find('ul').find('li:first-child');
      setTimeout(function () {
        childCont.find('ul').fadeIn();
      }, 200);
      calcChildHeights();
      setTimeout(function () {
        firstChild.trigger('click');
      }, 200);
      setTimeout(function(){
         $('.childMenWrap').addClass('open');
      },300);
    } else {
      $('.childMenWrap').removeClass('open');
      killChildMen();
    }
  }, function () {
    return false
  });

  //Kill menu to be safe 
  $('.childMenWrap').mouseleave(function () {
    killChildMen();
  });
  $('.headerContainer').mouseenter(function () {
    killChildMen();
  });

  //child Menu Item
  $('.childCont ul li').hoverIntent(function () {
    killGchildMen();
    $('.childCont ul li').removeClass('clicked');
    $(this).addClass('clicked');
    var thisIndex = $(this).index() + 1;
    var parIndex = $(this).parent('ul').parent('div').index() + 1;
    var gChildCont = $('.gChildContWrap').find('.gChildCont:nth-of-type(' + parIndex + ')');
    var gChildMen = gChildCont.find('.gChildMen:nth-of-type(' + thisIndex + ')');

    $('.gChildMen').find('ul').hide();
    $('.gChildMen').find('ul').removeClass('open');
    gChildMen.find('ul').addClass('open');
    gChildMen.find('ul').fadeIn();

    calcChildHeights();


  }, function () {
    killGchildMen();
  });

  $('.childCont ul li').click(function () {
    killGchildMen();
    $('.childCont ul li').removeClass('clicked');
    $(this).addClass('clicked');
    var thisIndex = $(this).index() + 1;
    var parIndex = $(this).parent('ul').parent('div').index() + 1;
    var gChildCont = $('.gChildContWrap').find('.gChildCont:nth-of-type(' + parIndex + ')');
    var gChildMen = gChildCont.find('.gChildMen:nth-of-type(' + thisIndex + ')');

    $('.gChildMen').find('ul').hide();
    $('.gChildMen').find('ul').removeClass('open');
    gChildMen.find('ul').addClass('open');
    gChildMen.find('ul').fadeIn();

    calcChildHeights();


  });

  //Search Related
  searchBtn.click(function () {
    destroyMobMen();
    destroyDeskDrp();
    dropSearch();
  });
  $(document).keyup(function (e) {
    if ($('.searchBarWrap').hasClass('open')) {
      if (e.keyCode == 27) {
        $('.searchBarWrap').removeClass('open').fadeOut();
        $('.searchResultWrap').fadeOut();
      }
    } else {
      if (e.keyCode == 83) {

      }
    }
  });

  $('i.mobSearch').click(function () {
    if ($('.mobMenBtn').hasClass("fa-bars")) {
      searchScrollControl();
      dropSearchMob();
    } else {
      destroyMobMen();
      setTimeout(function () {
        searchScrollControl();
        dropSearchMob();
      }, 220);
    }
  });
  $('.searchBarWrap').click(function () {
    return false;
  });
  $('.searchBarWrap .fa-close').click(function () {
    $('.searchBarWrap').removeClass('open').fadeOut();
    $('.searchResultWrap').fadeOut();
  })



  //mob men btn
  $('.mobMenBtn').click(function () {
    destroySearch();
    burgerControl();
    mobScrollControl();
  });
  $('.drpDown li a.topLink').click(function () {
    //condensing menu and killing scroll of outer menu
    $(this).parent('li').parent('ul').toggleClass("condense");
    $('a.topLink').toggleClass("condense");
    $('.mobMen .drpDown').find('li').removeClass('clicked');
    $(this).parent('li').toggleClass('clicked');
    $(this).toggleClass('clicked');
    $('.drpDown').toggleClass('noScroll');
    $('li').removeClass('onChild');
    $('li').removeClass('offChild');
    $('li').removeClass('isClicked');
    $(this).removeClass('primeChild');
    $(this).removeClass('notPrime');
    childMobScrollControl();
    $(this).find()
  });
  childLink.click(function () {
    if ($(this).parent('li').hasClass('isClicked')) {
      $(this).addClass('notPrime');
      $(this).removeClass('primeChild');
      cleanChildren();
      return false;
    } else {
      $(this).parent('li').addClass('isClicked');
      childLink.parent('li').addClass('offChild');
      childLink.parent('li').removeClass('onChild');
      $(this).addClass('primeChild');
      $(this).removeClass('notPrime');
      $(this).parent('li').addClass('onChild');
      return false;
    }
  });
  //
  $(window).resize(function () {
    killTeams();
  });

  setTimeout(function () {
    $('.buttonWrapCont').css('opacity', '1');
  }, 300);

  $('.drpDown li').click(function () {
    var subMenWrap = $('.subMen').height();
    setTimeout(function () {
      $('.subMenCont').css('height', subMenWrap + 'px');
    }, 500);
  });
  //end nav js 


  //catalog prod add to cart on hvr
  $('ul.products li').mouseenter(function () {
    $(this).children('a').addClass("hovered");
  });
  $('ul.products li').mouseleave(function () {
    $(this).children('a').removeClass("hovered");
  });

  //End catalog js 
  //checkboxes global
  //$('input[type="checkbox"]').customCheckbox();
});