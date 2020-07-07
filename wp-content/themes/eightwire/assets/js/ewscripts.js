jQuery(document).ready(function ($) {
	$('.flexslider.banner').flexslider({
		selector: ".slides > li",
		animation: "fade",
		controlNav: true,
		easing: "linear",
		useCSS: true,
		directionNav: true,
		slideshow: true,
		slideshowSpeed: "7000",
		animationSpeed: "600",
		randomize: false,
		pauseOnHover: true,
		prevText: "",
		nextText: ""
	});

	$('.flexslider.testimonials').flexslider({
		selector: ".slides > div",
		animation: "slide",
		animationLoop: true,
		controlNav: false,
		easing: "linear",
		useCSS: true,
		directionNav: true,
		slideshow: true,
		slideshowSpeed: "4000",
		animationSpeed: "600",
		randomize: false,
		pauseOnHover: true,
		prevText: "",
		nextText: ""
	});

	$('.flexslider.thumbslider').flexslider({
		selector: ".slides > li",
		animation: "slide",
		controlNav: false,
		easing: "linear",
		useCSS: true,
		directionNav: true,
		slideshow: true,
		slideshowSpeed: "7000",
		animationSpeed: "600",
		randomize: false,
		pauseOnHover: true,
		prevText: "",
		nextText: "",
		minItems: 2,
		maxItems: 4,
		itemWidth: 280,
		itemMargin: 10,
		move: 1
	});


	//Scroll on internal links
  $('a[href^="#"]').on('click', function (event) {
    event.preventDefault();

    var target = this.hash;

		//Don't scroll on tab links
		if (!target.substr(0, 4) == '#tab') {
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 900, 'swing', function () {
	        window.location.hash = target;
	    });
		}
	});
});
