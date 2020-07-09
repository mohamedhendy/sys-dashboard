
$(function() {

  // sidebar control if screen more than 767 
  if ($(window).width() > 767) {
  $(document).on('click', '#menuBtn', function() {
    
    $('.right-space').toggleClass('sm-right-space');
    $('.main-sidebar').toggleClass('small-side-bar');
    $('.main-sidebar').toggleClass('touch-sidebar');
  })
  $(document).on('mouseover', '.main-sidebar  ', function () {
    $('.right-space').removeClass('sm-right-space');
    $('.main-sidebar').removeClass('small-side-bar');
  })
  
  $(document).on('mouseleave', '.touch-sidebar  ', function () {
    $('.right-space').addClass('sm-right-space');
    $('.main-sidebar').addClass('small-side-bar');
  })
  $(document).on('mouseleave', '.small-side-bar nav-item  ', function () {
    $(this).tooltip(
      {
        container: 'body',
        trigger: 'hover'
      }
    )

  });
  $(document).on('mouseleave', '.small-side-bar nav-item  ', function () {
    $('.tooltip').remove();
  });
  $('small-side-bar [data-toggle="tooltip"]').tooltip(
    {
      container: 'body',
      trigger: 'hover'
    }
  )
  }
  // sidebar control if screen less than 767 

  if ($(window).width() <= 767) {
    $(document).on('click', '#menuBtn', function() {
      $('.main-sidebar').toggleClass('open-mobile-sidebar');
      $(this).toggleClass('mobile-mn')
    })
  }


  // sidebar links 
  $(document).on('click','.nav-sidebar .nav-item a', function(e) {
    e.preventDefault();
    $(this).addClass('active-menu-b').parent().siblings().find('a').removeClass('active-menu-b')
    $(this).parent().find('ul').slideToggle(300);
    $(this).parent().siblings().find('ul').slideUp(300);
    $(this).parent().toggleClass('nav-open').siblings().removeClass('nav-open');
  })
})