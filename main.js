(function($){
    "use strict";
    jQuery(document).ready(function($){

	    window.onscroll = function() {myFunction()};

    	function myFunction() {

    	  if (document.documentElement.scrollTop > 50) {

	  	    var element = document.getElementById("hero-menu-area");
	  	    jQuery('.hero-menu-area').addClass("menu-hide");

    	  } else {

	  	    var element = document.getElementById("hero-menu-area");
	  	    jQuery('.hero-menu-area').removeClass("menu-hide");

    	  }
    	}


    	function isScrolledIntoView(elem) {
    		var docViewTop = jQuery(window).scrollTop();
    		var docViewBottom = docViewTop + jQuery(window).height();

    		var elemTop = jQuery(elem).offset().top;
    		var elemBottom = elemTop + jQuery(elem).height();

    		return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
    	}

    	jQuery(window).scroll(function () {
    		jQuery('.left-img-animation').each(function () {
    			if (isScrolledIntoView(this) === true) {
    				jQuery(this).addClass('img-left-border');
    			}else{
    				jQuery(this).removeClass('img-left-border');
    			}
    		});

            jQuery('.right-img-animation').each(function () {
                if (isScrolledIntoView(this) === true) {
                    jQuery(this).addClass('img-right-border');
                }else{
                    jQuery(this).removeClass('img-right-border');
                }
            });

    	});

    });  



}(jQuery));