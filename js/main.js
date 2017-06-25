$(document).ready(function() {
	//header - hidden menu
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

	//banner - full height banner
	var winHeight = $(window).height() - $('#banner').offset().top;
	$('#banner').css('height', winHeight);

	//banner - scroll down
	$('.scroll_down').click(function() {
		var portfolioPos = $('#portfolio').offset().top;
		$('body, html').animate({scrollTop: portfolioPos}, 800);
	});

	$('#contact').click(function() {
		$('#contact').slide();
	});

	//portfolio - filter
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

	//contact - inner social
	$('.img').mouseenter(function() {
		$('.inner_social', this).addClass('fade').css('display', 'block');
	});
	$('.img').mouseleave(function() {
		$('.inner_social', this).fadeOut(300);
	});

	//fotter - scroll up
	$('#toTop').click(function() {
		$('body, html').animate({scrollTop: 0}, 800);
		return false;
	});
});