var main = function(){
  /* Push the body and the nav over by 285px over */
//  $('.project').click(function() {
//    $('.menu').animate({
//      left: "0px"
//    }, 200);
//
//    $('body').animate({
//      left: "285px"
//    }, 200);
//  });
//
//   Then push them back 
//  $('.icon-close').click(function() {
//    $('.menu').animate({
//      left: "-285px"
//    }, 200);
//
//    $('body').animate({
//      left: "0px"
//    }, 200);
//  });
//};
    
  $('.project').click(function(){
     $('.description-row').toggle();
  });
    
  //$('#carousel').carousel('cycle');
}

$(document).ready(main);