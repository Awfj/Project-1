$(document).ready(function() {

	// hidden menu
	$('.menu').click(function(i) {
		i.stopPropagation();
		$('#main_nav').toggleClass('active_menu');
	});
	$(document).click(function() {
		$('#main_nav').removeClass('active_menu');
	});
	

	$('nav').find('a').click(function(){
	    var $href = $(this).attr('href');
	    var $anchor = $(''+$href).offset();
	    $('body').animate({ scrollTop: $anchor.top }, 1000);
	    return false;
	});

	//filter
	$('.filter li[data-design]').click(function() {
		var design = $(this).data().design;
		if (design == 'all') {
			$('img[data-design]').show();
			$('li[data-design='+ design +']').addClass('active');
			$('li[data-design!='+ design +']').removeClass('active');
		} else {
			$('img[data-design='+ design +']').show();
			$('li[data-design='+ design +']').addClass('active');

			$('#icons img[data-design!='+ design +']').hide();
			$('li[data-design!='+ design +']').removeClass('active');

		}
	});

	// scroll down
	$('.scroll_down').click(function() {
		var portfolioPos = $('#portfolio').offset().top;
		$('body, html').animate({scrollTop: portfolioPos}, 800);
	});

	$('#contact').click(function() {
		$('#contact').slide();
	});

	//scroll up
	$('#toTop').click(function() {
		$('body, html').animate({scrollTop: 0}, 800);
		return false;
	});
});
