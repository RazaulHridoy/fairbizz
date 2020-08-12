(function ($) {
"use strict";

// Slider
function mainSlider() {
	var BasicSlider = $('.slider-active');
	BasicSlider.on('init', function(e, slick) {
		var $firstAnimatingElements = $('.single-slider:first-child').find('[data-animation]');
		doAnimations($firstAnimatingElements);
	});
	BasicSlider.on('beforeChange', function(e, slick, currentSlide, nextSlide) {
		var $animatingElements = $('.single-slider[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
		doAnimations($animatingElements);
	});
	BasicSlider.slick({
		autoplay: false,
		autoplaySpeed: 10000,
		dots: true,
		fade: true,
		prevArrow:'<button type="button" class="slick-prev">Prev</button>',
		nextArrow:'<button type="button" class="slick-next">Next</button>',
		arrows: true,
		responsive: [
			{ breakpoint: 767, settings: { dots: false, arrows: false } }
		]
	});

	function doAnimations(elements) {
		var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
		elements.each(function() {
			var $this = $(this);
			var $animationDelay = $this.data('delay');
			var $animationType = 'animated ' + $this.data('animation');
			$this.css({
				'animation-delay': $animationDelay,
				'-webkit-animation-delay': $animationDelay
			});
			$this.addClass($animationType).one(animationEndEvents, function() {
				$this.removeClass($animationType);
			});
		});
	}
}
mainSlider();


$('.service-active').slick({
	dots: true,
	infinite: false,
	speed: 300,
	slidesToShow: 4,
	slidesToScroll: 1,
	arrows:  false,
	responsive: [
	  {
		breakpoint: 1024,
		settings: {
		  slidesToShow: 3,
		  slidesToScroll: 3,
		  infinite: true,
		  dots: true
		}
	  },
	  {
		breakpoint: 600,
		settings: {
		  slidesToShow: 2,
		  slidesToScroll: 2
		}
	  },
	  {
		breakpoint: 480,
		settings: {
		  slidesToShow: 1,
		  slidesToScroll: 1
		}
	  }
	  // You can unslick at a given breakpoint now by adding:
	  // settings: "unslick"
	  // instead of a settings object
	]
  });

//   case-active
  
$('.case-active').slick({
	dots: false,
	infinite: true,
	speed: 300,
	slidesToShow: 4,
	slidesToScroll: 1,
	prevArrow:'<button type="button" class="slick-prev"><i class="far fa-arrow-alt-circle-left"></i></button>',
	nextArrow:'<button type="button" class="slick-next"><i class="far fa-arrow-alt-circle-right"></i></button>',
	arrows:  true,
	responsive: [
	  {
		breakpoint: 1024,
		settings: {
		  slidesToShow: 3,
		  slidesToScroll: 3,
		  infinite: true,
		  dots: true
		}
	  },
	  {
		breakpoint: 600,
		settings: {
		  slidesToShow: 2,
		  slidesToScroll: 2
		}
	  },
	  {
		breakpoint: 480,
		settings: {
		  slidesToShow: 1,
		  slidesToScroll: 1
		}
	  }
	 
	]
  });

//   testmonial-active

$('.testmonial-active').slick({
	dots: false,
	infinite: true,
	speed: 300,
	slidesToShow: 1,
	slidesToScroll: 1,
	prevArrow:'<button type="button" class="slick-prev"><i class="far fa-arrow-alt-circle-left"></i></button>',
	nextArrow:'<button type="button" class="slick-next"><i class="far fa-arrow-alt-circle-right"></i></button>',
	arrows:  true,
	responsive: [
	  {
		breakpoint: 1024,
		settings: {
		  slidesToShow: 3,
		  slidesToScroll: 3,
		  infinite: true,
		  dots: true
		}
	  },
	  {
		breakpoint: 600,
		settings: {
		  slidesToShow: 2,
		  slidesToScroll: 2
		}
	  },
	  {
		breakpoint: 480,
		settings: {
		  slidesToShow: 1,
		  slidesToScroll: 1
		}
	  }
	 
	]
  });

  $('.video-view').magnificPopup({
	type: 'iframe'
	// other options
  })


$('select').niceSelect();



$('.brand-active').slick({
	dots: false,
	infinite: true,
	speed: 300,
	slidesToShow: 6,
	slidesToScroll: 1,
	prevArrow:'<button type="button" class="slick-prev"><i class="far fa-arrow-alt-circle-left"></i></button>',
	nextArrow:'<button type="button" class="slick-next"><i class="far fa-arrow-alt-circle-right"></i></button>',
	arrows:  false,
	responsive: [
	  {
		breakpoint: 1024,
		settings: {
		  slidesToShow: 3,
		  slidesToScroll: 3,
		  infinite: true,
		  dots: true
		}
	  },
	  {
		breakpoint: 600,
		settings: {
		  slidesToShow: 2,
		  slidesToScroll: 2
		}
	  },
	  {
		breakpoint: 480,
		settings: {
		  slidesToShow: 1,
		  slidesToScroll: 1
		}
	  }
	 
	]
  });




})(jQuery);	




// $('.owl-carousel').owlCarousel({
//     loop:true,
//     margin:0,
// 	items:1,
// 	navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'];
//     nav:true,
// 	dots:false;
//     responsive:{
//         0:{
//             items:1
//         },
//         767:{
//             items:3
//         },
//         992:{
//             items:5
//         }
//     }
// })


// /* magnificPopup img view */
// $('.popup-image').magnificPopup({
// 	type: 'image',
// 	gallery: {
// 	  enabled: true
// 	}
// });

// /* magnificPopup video view */
// $('.popup-video').magnificPopup({
// 	type: 'iframe'
// });



// $('.grid').imagesLoaded( function() {
// 	// init Isotope
// 	var $grid = $('.grid').isotope({
// 	  itemSelector: '.grid-item',
// 	  percentPosition: true,
// 	  masonry: {
// 		// use outer width of grid-sizer for columnWidth
// 		columnWidth: '.grid-item',
// 	  }
// 	});
// });

// // filter items on button click
// $('.portfolio-menu').on( 'click', 'button', function() {
//   var filterValue = $(this).attr('data-filter');
//   $grid.isotope({ filter: filterValue });
// });	



// //for menu active class
// $('.portfolio-menu button').on('click', function(event) {
// 	$(this).siblings('.active').removeClass('active');
// 	$(this).addClass('active');
// 	event.preventDefault();
// });
