
	/* ---------------------------- */
	
		$(document).ready(function() {
 
		$(".fa-search").click(function() {
		   $(".search-box").toggle();
		   $("input[type='text']").focus();
		 });

	});
	
	
	/* -------------------------- */
	
	

	/*----------- toggle menu bar ---------------- */
	
	   $(document).ready(function() {
				 $("#show_hide").click(function () {
				 $("#toggle_tst").toggle(1000)
			});
		});
	
	
	/* ----------- toggle menu bar  end ----------------- */
	
	
	

 /* ------------- scrolling smooth ---------------- */
 
$(document).ready(function(){

  $("a").on('click', function(event) {
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});

 /* ------------- scrolling smooth end ---------------- */
 
 

/*  --------- scroll js bottom to tob -------------- */


jQuery(document).ready(function() {
    var offset = 220;
    var duration = 500;
    jQuery(window).scroll(function() {
        if (jQuery(this).scrollTop() > offset) {
            jQuery('.back-to-top').fadeIn(duration);
        } else {
            jQuery('.back-to-top').fadeOut(duration);
        }
    });
    
    jQuery('.back-to-top').click(function(event) {
        event.preventDefault();
        jQuery('html, body').animate({scrollTop: 0}, duration);
        return false;
    })
});





/* --- --------- scroll js bottom to tob end  -------------- */ 


/*----------- animation js ---------- */
AOS.init();	
	AOS.init({
		duration: 1500,
	})

/*----------- animation js ---------- */



function isOnScreen(elem) {
	// if the element doesn't exist, abort
	if( elem.length == 0 ) {
		return;
	}
	var $window = jQuery(window)
	var viewport_top = $window.scrollTop()
	var viewport_height = $window.height()
	var viewport_bottom = viewport_top + viewport_height
	var $elem = jQuery(elem)
	var top = $elem.offset().top
	var height = $elem.height()
	var bottom = top + height

	return (top >= viewport_top && top < viewport_bottom) ||
	(bottom > viewport_top && bottom <= viewport_bottom) ||
	(height > viewport_height && top <= viewport_top && bottom >= viewport_bottom)
}


jQuery( document ).ready( function() {
	window.addEventListener('scroll', function(e) {
		if( isOnScreen( jQuery( '#videiosection' ) ) ) { /* Pass element id/class you want to check */
			console.log( 'The specified container is in view.' );
 		}	
	});
});




jQuery( document ).ready( function() {
	window.addEventListener('scroll', function(e) {
		if( isOnScreen( jQuery( '.custome_tapimg img' ) ) ) { /* Pass element id/class you want to check */
			console.log( 'The specified container is in view.' );
            
            $("#fixnav_vikas").addClass("fixnav_yash");    
 		}
        else{
        $("#fixnav_vikas").removeClass("fixnav_yash");
}	
	});
});



