$(document).ready(function(){
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
  stickHead();

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
});