/*=========================================================
Template Name: GOK - Geeks Of Kolachi
==========================================================*/

(function ($) {
	"use strict";

	/*======================
    Javascript for preloader
    =======================*/
   $(window).on("load", function(){
		   	$(".preloader").fadeOut();
			$("#home-img").addClass("fadeInRight")		   
	})
	
	$(document).ready(function(){
		/*==========================
		javaScript for typed string
		============================*/
		var typed = new Typed('.typed', {
            stringsElement: '.typed-strings',
            typeSpeed: 100,
            backSpeed: 20,
            loop: true 
        });
		/*==========================
		javaScript for smooth scroll
		============================*/
		$(".navbar-nav .nav-link").on("click", function(e){
			e.preventDefault();
			var hash = this.hash;
			var position = $(hash).offset().top;
			$("html").animate({
				scrollTop : position
			}, 1000);
		});

		/*==========================================================
		Closes responsive menu when a scroll trigger link is clicked
		============================================================*/ 
	        $('.nav-link').on('click', function () {
	            $('.navbar-collapse').collapse('hide');
	        });

		/*==========================
		javaScript for sticky header
		============================*/
			$(".sticky-header").sticky();
			
		/*======================
		Javascript for barfiller 
		=======================*/
    		// $('#bar1').barfiller({
    		// 	barColor: '#484848',
    		// });
    		// $('#bar2').barfiller({
    		// 	barColor: '#484848'
    		// });
    		// $('#bar3').barfiller({
    		// 	barColor: '#484848'
    		// });
    		// $('#bar4').barfiller({
    		// 	barColor: '#484848'
    		// });

		/*======================
		javaScript for filtering 
		=======================*/
			// $(".project-filter span").on("click", function(){

			// 	$(".project-filter span").removeClass("active");
			// 	$(this).addClass("active");

			// 	var selector = $(this).attr("data-filter");
			// 	$(".project-lists").isotope({
			// 		filter : selector,
			// 	});
			// });
		

		/*============================
		  Javascript for magnificPopup
		============================*/
	 		// $(".project-lists").magnificPopup({

		 	// 	delegate: '.gallary',
		 	// 	type: 'image',
		 	// 	gallery: {
		    //         enabled: true
		    //     }
	 		// });

	 	/*============================
		  Javascript for ripple
		============================*/
			// $('.home-11.hero-area').ripples({
	        //     resolution: 512,
	        //     dropRadius: 20,
	        //     perturbance: 0.1,
	        // });	
	    /*=================================
		  Javascript for hero area carousel
		==================================*/
			// $(".hero-area-slide").owlCarousel({
			// 	items:1,
			// 	autoplay:true,
			// 	autoplayTimeout: 5000,
			// 	animateOut: 'fadeOut',
			// 	loop:true,
			// 	nav:true,
			// 	navText:["<i class='fa fa-arrow-left'></i>", "<i class='fa fa-arrow-right'></i>"],
			// 	dots:false
			// });

		
		/*===================================
		  Javascript for testimonial carousel
		====================================*/
			// $(".testimonial-carousel").owlCarousel({
			// 	items:1,
			// 	autoplay:false,
			// 	autoplayTimeout: 5000,
			// 	loop:true,
			// 	nav:true,
			// 	navText:["<i class='fa fa-arrow-left'></i>", "<i class='fa fa-arrow-right'></i>"],
			// 	dots:false
			// });


		/*=============================
		  Javascript for scroll to top
		==============================*/
			$(window).on("scroll", function () {
			if ($(this).scrollTop() > 450) {
				$('.scroll-up').fadeIn();
			} else {
				$('.scroll-up').fadeOut();
			}
	        });
	        $('.scroll-up').on("click", function () {
	            $("html, body").animate({
	                scrollTop: 0
	            }, 1000);
	            return false;
	        });

		/*===================================================
		  Javascript for handling content &  character image
		=====================================================*/
			// Optimalisation: Store the references outside the event handler:
			var $window = $(window);
			var $headerTitleContent = $('#header-title-content');
		
			function checkWidth() {
				var windowsize = $window.width();
				if (windowsize < 751) {
					//if the window is greater than 768px wide then hide header charachter
					$headerTitleContent.removeClass('my-auto');
					$headerTitleContent.css("margin-top", "80px");
				} else {
					$headerTitleContent.addClass('my-auto');
					$headerTitleContent.css('margin-top',"");
				}
			}
			// Execute on load
			checkWidth();
			// Bind event listener
			$(window).resize(checkWidth);
			
		/*===================================================
		  Javascript for handling animations
		=====================================================*/
			// SERVICE SECTION VARS START
				var $serSection = $("#ser-section").position();
				var $serSec1 = $("#ser-sec-1");
				var $serSec2 = $("#ser-sec-2");
				var $serSec3 = $("#ser-sec-3");
			// SERVICE SECTION VARS END
			$(document).scroll(function () {
				var documentTop = $(this).scrollTop();
				if (documentTop > ($serSection.top - 700)) { // -350 so things don't overlap
					$serSec1.addClass("fadeInLeft");
					$serSec2.addClass("fadeInUp");
					$serSec3.addClass("fadeInRight");
					$serSec1.css("visibility", "visible");
					$serSec2.css("visibility", "visible");
					$serSec3.css("visibility", "visible");
				}
			});

	});



}(jQuery));		