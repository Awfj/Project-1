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

	$(window).on('scroll', function(){
		if ($(window).scrollTop() >= winHeight){
			$('#banner').css('height', 'initial');
		}
	});

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
			$('.icon[data-design]').show();
			$('li[data-design='+ design +']').addClass('active');
			$('li[data-design!='+ design +']').removeClass('active');
		} else {
			$('.icon[data-design='+ design +']').show();
			$('li[data-design='+ design +']').addClass('active');

			$('.icon[data-design!='+ design +']').hide();
			$('li[data-design!='+ design +']').removeClass('active');

		}
	});

	//lightbox
	$('.icon').mouseenter(function() {
		$('.inner_all', this).fadeIn(400);
	});
	$('.icon').mouseleave(function() {
		$('.inner_all', this).fadeOut(400);
	});

	//contact - inner social
	$('.img').mouseenter(function() {
		$('.inner_social', this).fadeIn(500);
	});
	$('.img').mouseleave(function() {
		$('.inner_social', this).fadeOut(500);
	});

	//footer - scroll up
	$('#toTop').click(function() {
		$('body, html').animate({scrollTop: 0}, 800);
		return false;
	});

	lightbox.option({
		'positionFromTop': 200
	});
	$(".owl-carousel").owlCarousel({
		responsiveClass:true,
		mouseDrag: true,
		responsive:{
		        0:{
		            items:1,
		            nav:true,
		            loop: true
		        },
		        350:{
		            items:2,
		            nav:true,
		            loop: true
		        },
		        600:{
		            items:3,
		            nav:false,
		            loop: false,
		            mouseDrag: false
		        }
		    }
	});
});