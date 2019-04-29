(function ($) {
	"use strict";

    jQuery(document).ready(function($){

//---=============== service-area owl-carousel start ===============---//
        $(".service-area-section").owlCarousel({
			singleItem:true,
			items: 3,
			loop: true,
			autoplay: true,
			autoplayTimeout: 3000,
			nav: true,
			navText: ["<i class='fa fa-long-arrow-left'</i>","<i class='fa fa-long-arrow-right'</i>"],
			 responsive:{
					0:{
						items:1,
						nav:true,
						loop:true
					},
					600:{
						items:2,
						nav:true,
						loop:true
					},
					1000:{
						items:3,
						nav:true,
						loop:true
					}
			 }
		});
		
//---============= service-area owl-carousel end ===================---//
		
//---============= team-section owl-carousel start =================---//
        $(".team-section").owlCarousel({
			items: 2,
			loop: true,
			autoplay: true,
			autoplayTimeout: 3000,
			nav: true,
			navText: ["<i class='fa fa-long-arrow-left'</i>","<i class='fa fa-long-arrow-right'</i>"],
			responsive:{
					0:{
						items:1,
						nav:true,
						loop:true
					},
					600:{
						items:2,
						nav:true,
						loop:true
					},
					1000:{
						items:2,
						nav:true,
						loop:true
					}
			 }
		});
//---============== team-section owl-carousel end ===============---//
		
//---============== slicknav js start ===============---//
		$("ul#navigation").slicknav({
			prependTo: ".responsive-menu-wrap"
		});
//---============== slicknav js end ===============---//
		
//---============== Sticky js start ===============---//

	  $(window).on('scroll',function() {    
	   var scroll = $(window).scrollTop();
	   if (scroll < 10) {
		$("#sticky-header").removeClass("sticky");
	   }else{
		$("#sticky-header").addClass("sticky");
	   }
	  });
		
//---============== Sticky js end ===============---//
//---============== scrollToTop js start ===============---//
		
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.scroll-to-top').fadeIn();
        } else {
            $('.scroll-to-top').fadeOut();
        }
    });

    $('.scroll-to-top').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });
//---============== scrollToTop js end ===============---//
		
//---============== WOW js start ===============---//
	new WOW().init();	
//---============== WOW js end ===============---//
		


    });


    jQuery(window).load(function(){
//---============== site preloader start ===============---//
		jQuery(".site-preloader-wrap").fadeOut(2000); 
//---============== site preloader end ===============---//
		
    });


}(jQuery));	