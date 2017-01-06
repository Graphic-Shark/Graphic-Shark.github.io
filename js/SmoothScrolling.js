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

$(document).scroll(function () {
  var y = $(this).scrollTop();
  if (y > 150) {
    $('.navbar').css({ 'background-color': '#0F4556' })
    $('.triangle').css({ 'border-color': '#0F4556 transparent transparent transparent' })
    $('.nav-links').css({ 'top': '-5px' })
    $('.logo').attr( 'src', 'img/navbar-Logo-I.svg' )
  } else {
    $('.logo').attr( 'src', 'img/navbar-Logo.svg' )
    $('.navbar').css({ 'background-color': '#D2DBBD' })
    $('.triangle').css({ 'border-color': '#D2DBBD transparent transparent transparent' })
    $('.nav-links').css({ 'top': '60px' })
  }
  var docWidth = $( document ).width();
  if(docWidth < 1280){
    if (y > 625) {
    $('.navbar').css({ 'background-color': '#0F4556'})
    $('.triangle').css({ 'border-color': '#0F4556 transparent transparent transparent' })
  } else {
    $('.navbar').css({ 'background-color': '#D2DBBD' })
    $('.triangle').css({ 'border-color': '#D2DBBD transparent transparent transparent' })
  }
}
});
