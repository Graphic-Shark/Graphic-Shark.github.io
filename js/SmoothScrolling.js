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

var y = $(this).scrollTop();
var docWidth = $( document ).width();
var blue = '#0F4556';
var green = '#D2DBBD';
var blueLogo = 'img/navbar-Logo.svg';
var greenLogo =  'img/navbar-Logo-I.svg';
var navColor = green;
var navImage = greenLogo;
var borderColor = green + 'transparent transparent transparent';
var linkTop = '60px';
var oldColor = navColor;
$(document).scroll(function () {
	switch (docWidth && y) {
		case (docWidth < 768 && y > 10):
			navColor = blue;
			navImage = blueLogo;
			borderColor = blue + 'transparent transparent transparent';
			linkTop = '-5px';
			break;
		default:
			navColor = green;
			navImage = greenLogo;
			borderColor = green + 'transparent transparent transparent';
			linkTop = '60px';
			break;
	}
	 if(navColor !== oldColor){
		 $('.navbar').css({'background-color': navColor});
		 $('.triangle').css({'border-color': borderColor});
		 $('.logo').attr({'src': blueLogo});
		 $('.nav-links').css({'top':  linkTop});
		 oldColor = navColor;
	 }
});

 //Color change with page scroll
//$(document).scroll(function () {
//	var y = $(this).scrollTop();
//	var docWidth = $( document ).width();
//	var blue = {'background-color' : '#0F4556'};
//	var blueLogo = {src: 'img/navbar-Logo.svg'};
//	var blueTri = {'border-color': '#0F4556 transparent transparent transparent'};
//
//	var green = {'background-color' :'#D2DBBD'};
//	var greenLogo = {src: 'img/navbar-Logo-I.svg'};
//	var greenTri = {'border-color': '#D2DBBD transparent transparent transparent'};
//
//	if (y > 150) {
//		$('.navbar').css(blue)
//		$('.logo').attr( greenLogo )
//		$('.triangle').css(blueTri)
//		$('.nav-links').css({ 'top': '-5px' })
//	} else {
//		$('.navbar').css(green)
//		$('.logo').attr( blueLogo )
//		$('.triangle').css(greenTri)
//		$('.nav-links').css({ 'top': '60px' })
//	}
//
//	if(docWidth < 1280){
//		if (y > 625) {
//		$('.navbar').css(blue)
//		$('.triangle').css(blueTri)
//	} else {
//		$('.navbar').css(green)
//		$('.triangle').css(greenTri)
//	}
//}
//});
