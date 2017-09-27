(function($) {
  
  $('#search-button').on('click', function(e) {
    if($('#search-input-container').hasClass('hdn')) {
      e.preventDefault();
      $('#search-input-container').removeClass('hdn')
      return false;
    }
  });
  
  $('#hide-search-input-container').on('click', function(e) {
    e.preventDefault();
    $('#search-input-container').addClass('hdn')
    return false;
  });
  
})(jQuery);



var $item = $('.carousel .imagenesCarrousel'); 
var $wHeight = $(window).height();
$item.eq(0).addClass('active');
$item.height($wHeight); 
$item.addClass('full-screen');

$('.carousel .sliderImagenes').each(function() {
  var $src = $(this).attr('src');
  var $color = $(this).attr('data-color');
  $(this).parent().css({
    'background-image' : 'url(' + $src + ')',
    'background-color' : $color
  });
  $(this).remove();
});

$(window).on('resize', function (){
  $wHeight = $(window).height();
  $item.height($wHeight);
});

$('.carousel').carousel({
  interval: 90000,
  pause: "true"
});





$(function(){

    $('#slide-submenu').on('click',function() {             
        $(this).closest('.list-group').fadeOut('slide',function(){
          $('.mini-submenu').fadeIn();  
        });
        
      });

  $('.mini-submenu').on('click',function(){   
        $(this).next('.list-group').toggle('slide');
        $('.mini-submenu').hide();
  })
})


$(document).ready(function() {
  $('#media').carousel({
    pause: true,
    interval: false,
  });
});




// Instantiate the Bootstrap carousel
$('.multi-item-carousel').carousel({
  interval: false
});

// for every slide in carousel, copy the next slide's item in the slide.
// Do the same for the next, next item.
$('.multi-item-carousel .item').each(function(){
  var next = $(this).next();
  if (!next.length) {
    next = $(this).siblings(':first');
  }
  next.children(':first-child').clone().appendTo($(this));
  
  if (next.next().length>0) {
    next.next().children(':first-child').clone().appendTo($(this));
  } else {
    $(this).siblings(':first').children(':first-child').clone().appendTo($(this));
  }
});




    $(function(){
        $(window).scroll(function(){
            if ($(this).scrollTop() > 100) {
                $('.scrollup').fadeIn();
            } else {
                $('.scrollup').fadeOut();
            }
        });
        $('.scrollup').click(function(){
            $("html, body").animate({ scrollTop: 0 }, 600);
            return false;
        });  

    });