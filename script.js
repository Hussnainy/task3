
$(document).ready(function() {
    $('header').fadeIn(1000);
  });
  

  $('.nav-link').hover(function() {
    $(this).animate({
      fontSize: '18px',
      color: '#fff'
    }, 200);
  }, function() {
    $(this).animate({
      fontSize: '16px',
      color: '#333'
    }, 200);
  });
  
 
  $(window).scroll(function() {
    var scrollPosition = $(window).scrollTop();
    $('.left-column').css({
      transform: 'translateY(' + scrollPosition / 2 + 'px)'
    });
  });
  
   $(document).ready(function() {
    $('footer').fadeIn(1000);
  });
  
  $('.social-icons img').hover(function() {
    $(this).animate({
      width: '35px',
      height: '35px'
    }, 200);
  }, function() {
    $(this).animate({
      width: '30px',
      height: '30px'
    }, 200);
  });
  
  $('.app-links a').click(function() {
    $(this).animate({
      backgroundColor: '#333',
      color: '#fff'
    }, 200);
  });