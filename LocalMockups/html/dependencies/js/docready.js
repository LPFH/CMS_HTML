/*

Global JS on document ready

*/
$(document).ready(function () {
  //Desktop nav
  //Parent menu item
  $('.deskMen .drpDown li').click(function () {
    if ($(this).hasClass('clicked')) {
      $('.childMenWrap').removeClass('open');
    }
    else {
      $('.childMenWrap').addClass('open');
    }
  });
  $('.deskMen .drpDown li').click(function () {
    if ($(this).hasClass('clicked')) {
      $('.gChildMen').find('ul').slideUp();
      $('.drpDown li').removeClass('clicked');
      $('.childContWrap').find('.childCont').find('ul').slideUp();
    }
    else {
      $('.deskMen .drpDown li').removeClass('clicked');
      $(this).addClass('clicked');
      //parent index
      var topIndex = $(this).index() + 1;
      var childCont = $('.childContWrap').find('.childCont:nth-of-type(' + topIndex + ')');
      //slide up control menus
      $('.childContWrap').find('.childCont').find('ul').hide();
      $('.childContWrap').find('.childCont').find('ul').removeClass('open');
      childCont.find('ul').addClass('open');
      childCont.find('ul').slideDown();
      var firstChild = childCont.find('ul').find('li:first-child');
      firstChild.trigger('click');
      setTimeout(function () {
        calcChildHeights();
      }, 600);
    }
  });
  //child Menu Item
  $('.childCont ul li').click(function () {
    $('.childCont ul li').removeClass('clicked');
    $(this).addClass('clicked');
    var thisIndex = $(this).index() + 1;
    var parIndex = $(this).parent('ul').parent('div').index() + 1;
    var gChildCont = $('.gChildContWrap').find('.gChildCont:nth-of-type(' + parIndex + ')');
    var gChildMen = gChildCont.find('.gChildMen:nth-of-type(' + thisIndex + ')');
    $('.gChildMen').find('ul').hide();
    $('.gChildMen').find('ul').removeClass('open');
    gChildMen.find('ul').addClass('open');
    gChildMen.find('ul').slideDown();
    setTimeout(function () {
      calcChildHeights();
    }, 600);
  });
  //Search Related
  searchBtn.click(function () {
    destroyMobMen();
    destroyDeskDrp();
    dropSearch();
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

  //sticky header
  // stickHead();

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


  $('.drpDown li').click(function () {
    var subMenWrap = $('.subMen').height();
    setTimeout(function () {
      $('.subMenCont').css('height', subMenWrap + 'px');
    }, 500);
  });
  //Catalog functions
  //filt stuff
  $('.filt-mid ul li').click(function () {
    $('.filt-mid ul li').removeClass("clicked");
    $(this).addClass("clicked");
  });
  //filt sort menu
  $('.sortMen-cont').children('a').click(function () {
    $('.sortMen-cont').find('ul').slideToggle('fast');
  });
  //slide menu after selecting option
  $('.sortMen-cont ul li').click(function () {
    $('.sortMen-cont').find('ul').slideToggle('fast');
  });
  //change text
  $('.sortMen-cont').find('ul').find('li').click(function () {
    $('.sortMen-cont').find('ul').find('li').removeClass("chosen");
    $(this).addClass("chosen");
    choText = $('li.chosen').text();
    $('.sortMen-cont a span').text(choText);
  });
  //prod filt dropdowns
  $('.filt-mid ul li').click(function () {
    theIndex = $(this).index() + 2;
    $('.filt-drp').fadeOut('fast');
    $('.filt-drp:nth-of-type(' + theIndex + ')').slideToggle();
  });
  //mob filt 
  $('.mob-filt-drpDowns .drpDownMen li').click(function () {
    theIndex = $(this).index() + 2;
    $('.mob-filt-drpDowns .drpDownMen li').removeClass('clicked');
    $(this).addClass("clicked");
    $('ul.drpDownOptions').slideUp();
    $('ul.drpDownOptions:nth-of-type(' + theIndex + ')').slideDown();
    return false;
  });
  //mob filt btns 
  $('.mob-btnOne').click(function (e) {
    //fade in overlay
    $('.mob-filt-ovrWrap').fadeIn();
    $('.mob-filt-ovrWrap').addClass("opened");
    //calculate proper height for scroll
    viewportHeight = $(window).height();
    mobTopHeight = $('.mob-filt-head-wrap').height();
    mobOvrHeight = $('.mobHeader').height();
    ovrDropMenHeight = $('.drpDownMen').height();
    totalMobHeight = mobTopHeight + mobOvrHeight;
    //subtract
    mobDrpHeight = viewportHeight - (totalMobHeight + ovrDropMenHeight);
    $('.drpDownOptions').css('max-height', function () {
      return mobDrpHeight + "px";
    });
    $('html').addClass("noScroll");
    e.preventDefault();
  });
  $('.closeBtn').click(function (e) {
    $('html, body').removeClass("noScroll");
    $('.mob-filt-ovrWrap').fadeOut();
    $('.mob-team-ovrWrap').fadeOut();
    $('.mob-filt-ovrWrap').removeClass("opened");
    e.preventDefault();
  });
  //catalog prod add to cart on hvr
  $('ul.products li').hover(function () {
    $(this).children('a').toggleClass("hovered");
  });
  //catalog size correction
  $('span.theTitle').each(function () {
    textLength = $(this).text().length;
    if (textLength > 35) {
      $(this).css('font-size', '.8em');
    }
    else {
      $(this).css('font-size', '1em');
    }
  });
  //checkboxes
  $('input[type="checkbox"]').customCheckbox();
});