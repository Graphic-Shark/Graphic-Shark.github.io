$(document).ready(function(){
    $('.menu-icon').on("click", menuToggle); 
});
function menuToggle(event /* obj */){
    var target = $(event.currentTarget);
    var nav = $('.site-nav');
    if(!nav.hasClass('open')){
        nav.removeClass('close').addClass('open');
    }else{
        nav.addClass('close').on('transitionend webkitTransitionEnd oTransitionEnd',     function(){
            nav.removeClass('open').off('transitionend webkitTransitionEnd oTransitionEnd');
        });
    }
    
}