//Go to anchor tag
//$(document).ready(function () {
//	var lastLocation = window.location.hash;
//	if (lastLocation) {
//		$('html, body').animate({
//			scrollTop: $(lastLocation).offset().top
//			}, 800);
//		}
//});

// Smoothly Scrolls down to desired link
$(function() {
	$('a[href*="#"]:not([href="#"])').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
				$('html, body').animate({
					scrollTop: target.offset().top
				}, 800);
				return false;
			}
		}
	});
});

//Color change with page scroll
$(document).scroll(function () {
	var y = $(this).scrollTop();
	var docWidth = $( document ).width();
	var blue = {'background-color' : '#0F4556'};
	var blueLogo = {src: 'img/navbar-Logo.svg'};
	var blueTri = {'border-color': '#0F4556 transparent transparent transparent'};

	var green = {'background-color' :'#e7ebdc'};
	var greenLogo = {src: 'img/navbar-Logo-I.svg'};
	var greenTri = {'border-color': '#e7ebdc transparent transparent transparent'};

	if (docWidth < 645 && y > 370) {
		$('.navbar').css(blue)
		$('.logo').attr( greenLogo )
		$('.triangle').css(blueTri)
		$('.nav-links').css({ 'top': '-5px' })
	}else if (docWidth < 927 && y > 150){
		$('.navbar').css(blue)
		$('.logo').attr( greenLogo )
		$('.triangle').css(blueTri)
		$('.nav-links').css({ 'top': '3px' })
	}else if (docWidth < 1200 && y > 150){
		$('.navbar').css(blue)
		$('.logo').attr( greenLogo )
		$('.triangle').css(blueTri)
		$('.nav-links').css({ 'top': '-5px' })
	}else if (docWidth > 1200 && y > 200){
		$('.navbar').css(blue)
		$('.logo').attr( greenLogo )
		$('.triangle').css(blueTri)
		$('.nav-links').css({ 'top': '-5px' })
	}else {
		$('.navbar').css(green)
		$('.logo').attr( blueLogo )
		$('.triangle').css(greenTri)
		$('.nav-links').css({ 'top': '60px' })
	}
});
