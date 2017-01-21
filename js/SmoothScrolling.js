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


// Color change with page scroll
$(document).scroll(function () {
	var y = $(this).scrollTop();
	var docWidth = $( document ).width();
	var blue = '#0F4556';
	var blueTri = '#0F4556 transparent transparent transparent';
	var green = '#D2DBBD';
	var greenTri = '#D2DBBD transparent transparent transparent';

	if (y > 150) {
		$('.navbar').css({ 'background-color': blue })
		$('.triangle').css({ 'border-color': blueTri })
		$('.nav-links').css({ 'top': '-5px' })
		$('.logo').attr( 'src', 'img/navbar-Logo-I.svg' )
	} else {
		$('.logo').attr( 'src', 'img/navbar-Logo.svg' )
		$('.navbar').css({ 'background-color': green })
		$('.triangle').css({ 'border-color': greenTri })
		$('.nav-links').css({ 'top': '60px' })
	}

	if(docWidth < 1280){
		if (y > 625) {
		$('.navbar').css({ 'background-color': blue })
		$('.triangle').css({ 'border-color': blueTri })
	} else {
		$('.navbar').css({ 'background-color': green })
		$('.triangle').css({ 'border-color': greenTri })
	}
}
});
