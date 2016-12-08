$(document).ready(function(){
  //pdp page
  //prod detail accordions 
  $('.accHead').click(function () {
    //toggle close all on click
    //$('.accHead').siblings('.accCon').slideUp();
    $(this).siblings('.accCon').slideToggle();
    return false;
  });
});