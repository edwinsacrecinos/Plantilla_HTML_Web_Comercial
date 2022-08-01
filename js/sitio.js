/* Iniciamos WOW */
new WOW().init();
/*----------------------------------
Iniciamos smoothScroll (Scroll Suave)
--------------------------------*/
var scroll = new SmoothScroll('a[href*="#"]', {
	// Speed & Easing
	speed: 1000, // Integer. How fast to complete the scroll in milliseconds
	offset: 90 // Integer or Function returning an integer. How far to offset the scrolling anchor location in pixels

});
/*---------------------------------
    OCULTAR Y MOSTRAR BOTON IR ARRIBA
 ----------------------------------*/
$(function () {
    $(window).scroll(function () {
        var scrolltop = $(this).scrollTop();
        if (scrolltop >= 50) {
            $(".ir-arriba").fadeIn();
        } else {
            $(".ir-arriba").fadeOut();
        }
    });

});