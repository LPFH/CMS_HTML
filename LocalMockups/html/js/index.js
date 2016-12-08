
	
	
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
    var promHeight =$('#mobilePromo').outerHeight();
  mobHeadHeight = $('.mobHeader .row').height() + promHeight;
  mobDropdown = $('.mobMen .drpDown');
  viewportHeight = $(window).height();
  mobDropdown.height(viewportHeight - mobHeadHeight );
}

function bodyTop(){
if($('.mobHeader').height() > 10){
var calcHeight = $('.mobHeader').outerHeight();
$('body').css('padding-top',calcHeight + 'px');
} else {
$('body').css('padding-top','0px');
}
}

function primeTop(){
 var primeChild = $('body header.headA .mobHeader .drpDown-cont.mobMen .drpDown-act ul.drpDown.condense li.clicked ul.mobSubMen li.offChild.onChild a.primeChild');   
var mobHeadHeight = $('.mobHeader.mobCrea .row').outerHeight();
var promHeight =$('#mobilePromo').outerHeight();
var outHeight = mobHeadHeight + promHeight;
 primeChild.css('top', outHeight + 'px');
 primeChild.css({
'-webkit-transition-property':'none',
'-moz-transition-property':'none',
'-o-transition-property':'none',
'transition-property':'none' 
});
}

function ovrTop(){
var mobHeadHeight = $('.mobHeader.mobCrea').outerHeight();
$('.mob-team-ovrWrap ').css('top', mobHeadHeight +'px');
}

function catOvrTop(){
var mobHeadHeight = $('.mobHeader.mobCrea').outerHeight();
$('.mob-filt-ovrWrap ').css('top', mobHeadHeight +'px');
}

function searchTop(){
 var searchBar = $('.searchWrap.mobSearch');   
var mobHeadHeight = $('.mobHeader.mobCrea .row').outerHeight();
var promHeight =$('#mobilePromo').outerHeight();
var outHeight = mobHeadHeight + promHeight;
 searchBar.css('top', outHeight + 'px');
}

function childMobScrollControl() {
  //calculating correct height for scroll of submenu
var promHeight =$('#mobilePromo').outerHeight();
  mobHeadHeight = $('.mobHeader .row').height() + promHeight;
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
  if ($('.mobMenBtn').hasClass("fa-bars fh-new-hamburger")) {
    $('.mobMenBtn').removeClass("fa-bars fh-new-hamburger").addClass("fa-close fh-new-close");
    $('.drpDown-cont.mobMen .drpDown-act').slideDown("medium");
    $('.mobMen').slideDown();
    if (!$('html, body').hasClass('noScroll')) {
      $('html, body').addClass('noScroll');
    }
  } else if ($('.mobMenBtn').hasClass("fa-close fh-new-close")) {
    $('.mobMenBtn').removeClass("fa-close fh-new-close").addClass("fa-bars fh-new-hamburger");
    $('.drpDown.condense').css('overflow-y', 'scroll');
    $('.mobMen').fadeOut('fast');
    $('.drpDown').removeClass('noScroll');
    $('.mobMen .drpDown').find('li').removeClass('clicked');
  setTimeout(function () {
       $('.mobMen .drpDown, a.topLink').removeClass('clicked');
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
  $('.mobMenBtn').removeClass("fa-close fh-new-close").addClass("fa-bars fh-new-hamburger");
  $('.drpDown.condense').css('overflow-y', 'scroll');
  $('.mobMen').fadeOut('fast');
  $('.drpDown').removeClass('noScroll');
 $('.mobMen .drpDown').find('li').removeClass('clicked');
  setTimeout(function () {
       $('.mobMen .drpDown, a.topLink').removeClass('clicked');
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
  $('.teamDrp-theTeams').slideUp('fast');
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
  var childContHeight = $('.childContWrap').find('ul.open').outerHeight();
  var gChildContHeight = $('.gChildContWrap').find('ul.open').outerHeight();

  $('.childContWrap').height(childContHeight);
    $('.gChildContWrap').height(gChildContHeight);
  $('.childContWrap').find('ul').css('height', 'auto');
    $('.gChildContWrap').find('ul').css('height', 'auto');
  if (childContHeight > gChildContHeight) {
      $('.childContWrap').find('ul').css('height', 'auto');
    $('.gChildContWrap').find('ul').css('height', 'auto');
  $('.gChildContWrap').height(childContHeight);
  } else{
      $('.childContWrap').find('ul').css('height', 'auto');
    $('.gChildContWrap').find('ul').css('height', 'auto');
     $('.childContWrap').height(gChildContHeight);
  }


}

function killChildMen() {
  $('.childMenWrap').hide();
  $('.childMenWrap').removeClass('open');
  $('.gChildMen').find('ul').fadeOut();
  $('.childMen').find('ul').fadeOut();
  $('.drpDown li').removeClass('clicked');
  $('.childMenInnerWrap').hide();
  return false
}

function allSameHeight(selector) {
    var maxHeight = -1;
    $(selector).each(function () {
        $(this).height('auto');
    });

    $(selector).each(function () {
        maxHeight = maxHeight > $(this).height() ? maxHeight : $(this).height();
    });

    if (maxHeight < 18) {
        maxHeight = 'auto';
    }

    $(selector).each(function () {
        $(this).height(maxHeight);
    });
}
/*

Global JS on document ready

*/
$(document).ready(function () {
bodyTop();
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

  $('.deskMen .drpDown li').hoverIntent(function () {
    $('.gChildMen').find('ul').hide();
    if ($(this).hasClass('noChildren')) {
      $('.childMenWrap').removeClass('open');
      killChildMen();
    }
    else if (!$(this).hasClass('clicked')) {

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

      setTimeout(function () {
        firstChild.trigger('mouseenter');
        calcChildHeights();
      }, 200);
      setTimeout(function () {
        $('.childMenWrap').addClass('open');
      }, 200);

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
  $('.childCont ul li').mouseenter(function () {
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

  //  $('.gChildMen ul li').hover(function(){
  //         calcChildHeights();
  //  });

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
    if ($('.mobMenBtn').hasClass("fa-bars fh-new-hamburger")) {
        searchTop();
      searchScrollControl();
      dropSearchMob();
    } else {
      destroyMobMen();
      setTimeout(function () {
          searchTop();
        searchScrollControl();
        dropSearchMob();
      }, 220);
    }
  });

  $('.searchBarWrap .fh-new-close').click(function () {
    $('.searchBarWrap').removeClass('open').fadeOut();
    $('.searchResultWrap').fadeOut();
  })


//mobile menu
$('.team-btn').click(function(){
  ovrTop();
});
$('.mob-btnOne').click(function(){
  catOvrTop();
});

  $(window).resize(function(){
  bodyTop();
  ovrTop();
  mobScrollControl();
  childMobScrollControl();
   searchScrollControl();
     primeTop();
     searchTop();
  });
  //mob men btn
  $('.mobMenBtn').click(function () {
    destroySearch();
    burgerControl();
    mobScrollControl();
  });


  $('.drpDown li a.topLink').click(function () {
    if ($(this).hasClass('realLink')) {
      return true;
    } else if ($(this).hasClass('clicked')){
       $(this).parent('li').parent('ul').toggleClass('condense');
      $('a.topLink').toggleClass('condense');
      $('.mobMen .drpDown').find('li').removeClass('clicked');
      $(this).parent('li').removeClass('clicked');
      $(this).removeClass('clicked');
      $('.drpDown').toggleClass('noScroll');
      $('li').removeClass('onChild');
      $('li').removeClass('offChild');
      $('li').removeClass('isClicked');
      $(this).removeClass('primeChild');
      $(this).removeClass('notPrime');
      childMobScrollControl();

    } else{
      //condensing menu and killing scroll of outer menu
      $(this).parent('li').parent('ul').toggleClass('condense');
      $('a.topLink').toggleClass('condense');
      $('.mobMen .drpDown').find('li').removeClass('clicked');
      $(this).parent('li').addClass('clicked');
      $(this).addClass('clicked');
      $('.drpDown').toggleClass('noScroll');
      $('li').removeClass('onChild');
      $('li').removeClass('offChild');
      $('li').removeClass('isClicked');
      $(this).removeClass('primeChild');
      $(this).removeClass('notPrime');
      childMobScrollControl();

    }
  });


  childLink.click(function () {
  console.log('test11');
    if ($(this).hasClass('realLink')) {
      return true;
    } else if ($(this).parent('li').hasClass('isClicked')) {

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
       primeTop();
      return false;
    }
  });
 

 

  $('.deskMen .drpDown li').click(function () {
   destroyDeskDrp();
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
  
  $('#teamDrpList li img').css('cursor','pointer');

$('#teamDrpList li img').click(function(){
    var getUrl = window.location;
    var baseUrl = getUrl.protocol + "//" + getUrl.host;
    var linkDest = $(this).siblings('a').attr('href');
    window.location.href = baseUrl + linkDest; 
});

//Same height Function call

allSameHeight('ul.products .theTitle');

$(window).resize(function () {
    allSameHeight('ul.products .theTitle');
});


//mob promo stuff
$('#mobilePromo .summary').click(function(){
$('.promo-dialog').fadeIn();
$('#promo-pop').fadeIn();
});

$('.promoClose').click(function(){
$('#mobilePromo').css({
'height':'0px',
'padding':'0px',
'display':'none'
});
catOvrTop();
  ovrTop();
  mobScrollControl();
  childMobScrollControl();
   searchScrollControl();
     primeTop();
     searchTop();
     bodyTop();
});

  
}); //THEEND

