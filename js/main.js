
$(document).ready(function(){
	
		
	//this is for popular-course area
	
	$('.popolar-courses').owlCarousel({
		loop:true,
		margin:0,
		nav:true,
		dots:true,
		navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
		autoplay:true,    
		autoplayTimeout:4000,
		autoplaySpeed:1500,
		navSpeed:800,
		pagination: true,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:2
			},
			1000:{
				items:3
			}
		}
	});	
	
	
	//this is for popular-course area
	
	$('.testimonials').owlCarousel({
		loop:true,
		margin:0,
		dots:true,
		autoplay:true,    
		autoplayTimeout:4000,
		autoplaySpeed:1500,
		navSpeed:800,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:1
			},
			1000:{
				items:1
			}
		}
	});
	
	
	
	//this is for popular-course area
	
	$('.latest-news-content').owlCarousel({
		loop:true,
		margin:0,
		nav:true,
		dots:true,
		navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
		autoplay:true,    
		autoplayTimeout:4000,
		autoplaySpeed:1500,
		navSpeed:800,
		pagination: true,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:1
			},
			1000:{
				items:1
			}
		}
	});
	
	
	//online-courses-area

	$('.online-courses').owlCarousel({
		mouseDrag:true,
		navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
		nav:true,
		navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
		autoplay:false,    
		autoplayTimeout:4000,
		autoplaySpeed:1500,
		navSpeed:800,
		pagination: true,
		responsive:{
			0:{
				items:2
			},
			600:{
				items:4
			},
			1000:{
				items:5
			}
		}
	});
	
		
		 
	// Portfolio Area
	
	$('#container').imagesLoaded( function() {
		
		// init Isotope
		var $grid = $('.grid').isotope({
		  itemSelector: '.grid-item',
		  percentPosition: true,
		  masonry: {
			// use outer width of grid-sizer for columnWidth
			columnWidth: 1
		  }
		});

		// filter items on button click
		$('.portfolio-menu').on( 'click', 'button', function() {
		  var filterValue = $(this).attr('data-filter');
		  $grid.isotope({ filter: filterValue });
		}); 

		$('.portfolio-menu button').on('click', function(event) {
			$(this).siblings('.active').removeClass('active');
			$(this).addClass('active');
			event.preventDefault();
		});
	});	
	
	// Magnific Popup Images
	$('.pop-image').magnificPopup({
		type: 'image',
		removalDelay: 300,
		mainClass: 'mfp-with-zoom',
	    gallery:{
		  enabled:true
	    }
	});
	
	 //Magnific Popup Images
	$('.pop-video').magnificPopup({
		type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
	    gallery:{
		  enabled:false
	    }
	});		
	
	
	
	
	//counterUp
	
	$('.counter').counterUp({
		delay: 10,
		time: 1000
	});
	
	
}(jQuery));	
