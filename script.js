$(document).ready(function(){

  $('.site-slider').owlCarousel({
		loop: true,
		auto: true,
		dots: true,
    mouseDrag: true,
		autoplay: true,
    items: 1,
		nav: false,
    onTranslated: function() {
        var $slideHeading = $('.site-slider .owl-item.active .slider-text #c1');
        var $slidePara = $('.site-slider .owl-item.active .slider-text #c2');

        $slideHeading.addClass('animate-in-fast').on('animationend', function(){
          $slideHeading.removeClass('animate-in-fast').addClass('opacFull');
        });

        $slidePara.addClass('animate-in-slow').on('animationend', function(){
          $slidePara.removeClass('animate-in-slow').addClass('opacFull');
        });
      },
    onChange: function(){
      var $slideHeading = $('.site-slider .owl-item.active .slider-text #c1');
      var $slidePara = $('.site-slider .owl-item.active .slider-text #c2');

      $slideHeading.removeClass('opacFull');
      $slidePara.removeClass('opacFull');

    }
  	});
  });

$(window).on('load', function(){
  var $slideHeading = $('.site-slider .owl-item.active .slider-text #c1');
  var $slidePara = $('.site-slider .owl-item.active .slider-text #c2');

  $slideHeading.addClass('animate-in-fast').on('animationend', function(){
    $slideHeading.removeClass('animate-in-fast').addClass('opacFull');
  });

  $slidePara.addClass('animate-in-slow').on('animationend', function(){
    $slidePara.removeClass('animate-in-slow').addClass('opacFull');
  });
});

var mySidebar = document.getElementById("mySidebar");

function w3_open() {
  if (mySidebar.style.display === 'block') {
    mySidebar.style.display = 'none';
  } else {
    mySidebar.style.display = 'block';
  }
}

// Close the sidebar with the close button
function w3_close() {
    mySidebar.style.display = "none";
}
setTimeout(
  function() 
  {
    $('.carder').css({ transform: 'translateY(0)'})
  }, 1000);
       /* const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]
toggleButton.addEventListener('click', () => {
          navbarLinks.classList.toggle('active')
        })*/