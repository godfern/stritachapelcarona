// global. currently active menu item 
var current_item = 0;

// few settings
var section_hide_time = 500;
var section_show_time = 500;

// jQuery stuff
jQuery(document).ready(function($) {

	// Switch section
	$("a", '.mainmenu').click(function() 
	{
		$(".section").scrollTop(0);
		if( ! $(this).hasClass('active') ) { 
			current_item = this;
			// close all visible divs with the class of .section
			$('.section:visible').fadeOut( section_hide_time, function() { 
				$('a', '.mainmenu').removeClass( 'active' );  
				$(current_item).addClass( 'active' );
				var new_section = $( $(current_item).attr('href') );
				new_section.fadeIn( section_show_time );
			} );
		}
		
		return false;
	});

	// Switch section
	$(".button").click(function() 
	{
		$(".section").scrollTop(0);
		if( ! $(this).hasClass('active') ) { 
			current_item = this;
			// close all visible divs with the class of .section
			$('.section:visible').fadeOut( section_hide_time, function() { 
				$('a', '.mainmenu').removeClass( 'active' );  
				$(current_item).addClass( 'active' );
				var new_section = $( $(current_item).attr('href') );
				new_section.fadeIn( section_show_time );
			} );
		}
		
		return false;
	});	
	
	// Switch section
	$(".wardClick").click(function() 
	{
		//alert(this.id);
		var id = this.id;
		if(id == 'path-ward'){
			$("#wards").scrollTop(400);
		}
		if(id == 'pinta-ward'){
			$("#wards").scrollTop(600);
		}
		
		if(id == 'khursa-ward'){
			$("#wards").scrollTop(800);
		}
		
		if(id == 'kamti-ward'){
			$("#wards").scrollTop(1000);
		}
		
		if(id == 'pqn-ward'){
			$("#wards").scrollTop(1200);
		}
		
		if(id == 'muddo-ward'){
			$("#wards").scrollTop(1400);
		}
		
		if(id == 'lakdem-ward'){
			$("#wards").scrollTop(1600);
		}
		
		if(id == 'carv-ward'){
			$("#wards").scrollTop(1800);
		}
		
		if(id == 'nivim-ward'){
			$("#wards").scrollTop(1950);
		}
		
		if(id == 'son-ward'){
			$("#wards").scrollTop(2300);
		}
		
		
		
		/*$('html, body').animate({
			scrollTop: $("#wards").offset().top
		}, 2000);*/
		/*$(".section").scrollTop(0);
		if( ! $(this).hasClass('active') ) { 
			current_item = this;
			// close all visible divs with the class of .section
			$('.section:visible').fadeOut( section_hide_time, function() { 
				$('a', '.mainmenu').removeClass( 'active' );  
				$(current_item).addClass( 'active' );
				var new_section = $( $(current_item).attr('href') );
				new_section.fadeIn( section_show_time );
			} );
		}
		
		return false;*/
	});
	
		
});