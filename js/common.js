
$(window).load(function() {
/* Mansonry */
    // Animate loader off screen
  $(".se-pre-con").fadeOut(300);
  $('.quotesBox').masonry({
  itemSelector: '.quoteBox',
  isFitWidth: true,
  isAnimated: true

  });

})
$(document).ready(function(){
/* Popup form */
    $('.switchTab ul li').click(function(){
      var curIndex = $(this).index();
      $('.userArea div').css({'display':'none'});
      $('.userArea div').eq(curIndex).css({'display':'block'});
   });
   $('.res_nav').click(function(){
      $('.userModal').addClass('isVisible');
      $('#userRegister').css({'display':'block'});
      $('#userLogin').css({'display':'none'});
      $('.btn_login').removeClass('tabActive')
      $('.btn_register').addClass('tabActive')

  });
   $('.log_nav').click(function(){
      $('.userModal').addClass('isVisible')
      $('#userLogin').css({'display':'block'});
      $('#userRegister').css({'display':'none'});
      $('.btn_register').removeClass('tabActive')
      $('.btn_login').addClass('tabActive')
  });
   $('.btn_login').click(function(){
      $('.btn_register').removeClass('tabActive')
      $('.btn_login').addClass('tabActive')
      });
       $('.btn_register').click(function(){
      $('.btn_login').removeClass('tabActive')
      $('.btn_register').addClass('tabActive')
      });
      $('.close_btn i').click(function() {
      $('.userModal').removeClass('isVisible');
   });

/* quotebox click */
  $('section .quoteBox').click(function(){
    $('aside').css({'visibility':'visible'})
    $('section').css({'width':'70%'});
    $('.wrap-quotesBox').addClass('asideAnimation');
    $('.quotesBox').masonry();
  });

})