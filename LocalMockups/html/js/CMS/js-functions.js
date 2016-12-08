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
  killTeams();
  setTimeout(function () {
    var btnContHeight = $('.teamDrp-cont').outerHeight();
    var btnContPad = parseInt($('.teamDrp-cont').css('padding').replace(/[^-\d\.]/g, ''));
    var btnHeight = $('.buttonWrapCont').outerHeight();
    var calcPad = ((btnContHeight - btnHeight) / 2) - btnContPad;
    $('.buttonWrapCont').css('margin-top', calcPad + 'px');
  }, 200);
};

//cat page Related
function catPagefunc() {
  // bntCenter
  var viewWidth = $(window).width();
  if (viewWidth > 1103) {
    btnCenter();
    $(window, document).resize(function () {
      btnCenter();
    });
  } else {
  }
  $(window).resize(function () {
    var viewWidth = $(window).width();
    if (viewWidth > 1103) {
      btnCenter();
    } else {
    }
  });
}

function featProdSlice() {
  //top ath slider 
  //data templating 
  //desktop and mob output el
  var outPut = $('.topAthOut');
  var outPutMob = $('.slide-cont.theSlider');
  //desk and mobile template elements
  var templateDesk = $('#topAthTemp').html();
  var templateMob = $('#topAthTempMob').html();
  //handlebar template compilation
  var CompiledTemplate = Handlebars.compile(templateDesk);
  var CompiledTemplateMob = Handlebars.compile(templateMob);
  //the data
  var data = {
    "images": [
      {
        "imgSrc": "https://placebear.com/g/500/600",
        "imgTitle": "Goes to codepen goog",
        "linkSrc": "http://www.codepen.io",
        "alt": "Codepen"
      },
      {
        "imgSrc": "https://placebear.com/g/500/600",
        "imgTitle": "Goes to google goog",
        "linkSrc": "http://www.google.com",
        "alt": "Google"
      },
      {
        "imgSrc": "https://placebear.com/g/500/600",
        "imgTitle": "Goes to jsfiddle",
        "linkSrc": "http://www.jsfiddle.com",
        "alt": "JSFiddle"
      }
    ]
  };
  //pass data to templates
  var outContent = CompiledTemplate(data);
  var outContentMob = CompiledTemplateMob(data);
  //output
  $(outPut).html(outContent);
  $(outPutMob).html(outContentMob);
  //init top slider AFTER templating, or top ath 
  $('.theSlider').slick({
    dots: true,
    arrows: false
  });
}

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

//Color swatches 
function getColors(el) {
  var theImgLogo = $(el);
  var theImgSrc = theImgLogo.attr('src');
  var img = document.createElement('img');
  img.setAttribute('src', theImgSrc)
  function imgSwatches() {
    var vibrant = new Vibrant(img);
    var swatches = vibrant.swatches();
    return swatches
  }
  return imgSwatches()
}

function logoColorTeamPage() {
  //get colors from vibrant
  var topImgSwatches = getColors('#teamLogo');
  var vibrantHex = topImgSwatches.Vibrant.getHex();
  var mutedHex = topImgSwatches.Muted.getHex();
  var darkVibrantHex = topImgSwatches.DarkVibrant.getHex();
  var darkMutedHex = topImgSwatches.DarkMuted.getHex();
  var lightVibrantHex = topImgSwatches.LightVibrant.getHex();
  var dVRGB = topImgSwatches.DarkVibrant.getRgb();
  //color elements
  $('.headCrumbs a').css('background', vibrantHex);
  $('.headCrumbs a').css('color', darkVibrantHex);
  $('.singleTeam .teamDrp-act-right h1').css('color', darkVibrantHex);
}

function calcChildHeights() {
  var childContHeight = $('.childContWrap').height();
  var gChildContHeight = $('.gChildContWrap').height();
  console.log(childContHeight);
  console.log(gChildContHeight);
  if (childContHeight > gChildContHeight) {
    $('.childContWrap').find('ul.open').css('height', childContHeight + 'px');
    $('.gChildContWrap').find('ul.open').css('height', childContHeight + 'px');
  }
  else if (childContHeight < gChildContHeight) {
    $('.childContWrap').find('ul.open').css('height', gChildContHeight + 'px');
    $('.gChildContWrap').find('ul.open').css('height', gChildContHeight + 'px');
  }
}

function stickHead() {
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 183) {
      $("body").addClass("hasFix");
      $(".headA").addClass("fixHead");
    } else {
      $("body").removeClass("hasFix");
      $(".headA").removeClass("fixHead");
    }
  });
}

//Vert and Horiz auto center
jQuery.fn.horCenter = function () {
  var theWidth = $(this).outerWidth();
  var calcWidth = (theWidth / 2) + 'px';
  $(this).css('position', 'absolute');
  $(this).css('left', '50%');
  $(this).css('margin-left', '-' + calcWidth);
}
jQuery.fn.verCenter = function () {
  var theHeight = $(this).outerHeight();
  var calcHeight = (theHeight / 2) + 'px';
  $(this).css('position', 'absolute');
  $(this).css('top', '50%');
  $(this).css('margin-top', '-' + calcHeight);
}
jQuery.fn.bothCenter = function () {
  var theHeight = $(this).outerHeight();
  var calcHeight = (theHeight / 2) + 'px';
  var theWidth = $(this).outerWidth();
  var calcWidth = (theWidth / 2) + 'px';
  $(this).css('position', 'absolute');
  $(this).css('top', '50%');
  $(this).css('margin-top', '-' + calcHeight);
  $(this).css('left', '50%');
  $(this).css('margin-left', '-' + calcWidth);
}
