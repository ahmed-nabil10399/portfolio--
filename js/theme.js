(function ($) {
	"use strict";
	
	// venobox
	$(document).ready(function(){
		$('.venobox').venobox(); 
	  });

// Preloader
$(window).on('load', function () {
	$('.lds-ellipsis').fadeOut(); // will first fade out the loading animation
	$('.preloader').delay(333).fadeOut('slow'); // will fade out the white DIV that covers the website.
	$('body').delay(333);

	// venobox
	$(document).ready(function(){
		$('.venobox').venobox(); 
	});

	// Header Sticky
	$(window).on('scroll',function() {
		var stickytop = $('#header.sticky-top .bg-transparent');
		var stickytopslide = $('#header.sticky-top-slide');
		
		if ($(this).scrollTop() > 1){  
			stickytop.addClass("sticky-on-top");
			stickytop.find(".logo img").attr('src',stickytop.find('.logo img').data('sticky-logo'));
		}
		else {
			stickytop.removeClass("sticky-on-top");
			stickytop.find(".logo img").attr('src',stickytop.find('.logo img').data('default-logo'));
		}
		
		if ($(this).scrollTop() > 180){  
			stickytopslide.find(".primary-menu").addClass("sticky-on");
			stickytopslide.find(".logo img").attr('src',stickytopslide.find('.logo img').data('sticky-logo'));
		}
		else{
			stickytopslide.find(".primary-menu").removeClass("sticky-on");
			stickytopslide.find(".logo img").attr('src',stickytopslide.find('.logo img').data('default-logo'));
		}
	});

	// Sections Scroll
	if($("body").hasClass("side-header")){
	$('.smooth-scroll').on('click', function() {
		event.preventDefault();
		var sectionTo = $(this).attr('href');
		$('html, body').stop().animate({
		scrollTop: $(sectionTo).offset().top}, 1500, 'easeInOutExpo');
	});
	}else {
	$('.smooth-scroll').on('click', function() {
		event.preventDefault();
		var sectionTo = $(this).attr('href');
		$('html, body').stop().animate({
		scrollTop: $(sectionTo).offset().top - 50}, 1500, 'easeInOutExpo');
	});
	}

	// Mobile Menu
	$('.navbar-toggler').on('click', function() {
		$(this).toggleClass('show');
	});

	$(".navbar-nav a").on('click', function() {
		$(".navbar-collapse, .navbar-toggler").removeClass("show");
	});

	// Overlay Menu & Side Open Menu
	$('.navbar-side-open .collapse, .navbar-overlay .collapse').on('show.bs.collapse hide.bs.collapse', function(e) {
		e.preventDefault();
	}),

	$('.navbar-side-open [data-toggle="collapse"], .navbar-overlay [data-toggle="collapse"]').on('click', function(e) {
	e.preventDefault();
	$($(this).data('target')).toggleClass('show');
	})

	/*------------------------------------
		Isotope Portfolio Filter
	-------------------------------------- */

	$(window).on('load', function () {
	$(".portfolio-filter").each(function() {
		var e = $(this);
		var $grid = e.isotope({
			layoutMode: "masonry",
		});
		$(".portfolio-menu").find("a").on("click", function() {
			var filterValue = $(this).attr("data-filter");
			return $(".portfolio-menu").find("a").removeClass("active"), $(this).addClass("active"), 
			$grid.isotope({
			filter: filterValue
			}), !1
		});
		});
	});

	/*------------------------------------
		Typed
	-------------------------------------- */

	$(".typed").each(function() {
	var typed = new Typed('.typed', {
		stringsElement: '.typed-strings',
		loop: true,
		typeSpeed: 100,
		backSpeed: 50,
		backDelay: 1500,
	});
	});



	/*------------------------------------
		WOW animation
	-------------------------------------- */

	$(".wow").each(function() {
	if ($(window).width() > 767) {
	var wow = new WOW({
		boxClass: 'wow',
		animateClass: 'animated',
		offset: 0,
		mobile: false,
		live: true
	});
	new WOW().init();
	}
	});


	/*------------------------
	tooltips
	-------------------------- */
	$('[data-toggle=\'tooltip\']').tooltip({container: 'body'});

	/*------------------------
	Scroll to top
	-------------------------- */
	$(function () {
			$(window).on('scroll', function(){
				if ($(this).scrollTop() > 400) {
					$('#back-to-top').fadeIn();
				} else {
					$('#back-to-top').fadeOut();
				}
			});
			});
			$('#back-to-top').on("click", function() {
				$('html, body').animate({scrollTop:0}, 'slow');
				return false;
	});

		// nice scroll
		$(function() {  
			$("body").niceScroll({
				cursorcolor: '#333',
				zindex: "99999",
				cursorborder: '1px solid #555',
				cursorwidht:'13px',
				mousescrollstep: '40',
			});
		});
});
})(jQuery)
