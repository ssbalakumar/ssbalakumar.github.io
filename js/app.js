//$(function ($) {
//
//    
//     //Detecting viewpot dimension and calculating the adjustments of components   
//     var vH = $(window).height();
//     var vHperc40 = vH*50/100;
//     var vHperc10 = vH*10/100;
//     $('#intro').css('height', vH);
///*     $('#intro').css('margin-top', vHperc10);*/
//     $('.scroll-trigger').css('margin-top', vHperc40);					
//});


// Custom Build

// Avoid `console` errors in browsers that lack a console.

(function () {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());





 
// Nice Scroll

$(document).ready(
    function () {
        $("html").niceScroll({
            cursorcolor: "#2C2F35"
        });
    }
);

//Hover project images

$(".project-item").mouseenter(function () {
    var $width = $(this).outerWidth();
    $(this).children('.project-overlay').css('width', $width);
    $(this).children('.project-overlay').fadeIn(200);

}).mouseleave(function () {

    $(this).children('.project-overlay').fadeOut(400);
});


// Open indidvidual projects

$('.project-overlay').click(function () {
    $('.project-content').slideUp(600);
    $id = $(this).parent().data('project-id');

    $('.project-item').css('opacity', '0.9');
    $(this).parent().css('opacity', '1');

    $('#' + $id).slideDown(200);


});

// Close Project

$('.close-project').click(function () {
    $('.project-item').animate({
        opacity: 1
    }, 300);
    $('.project-content').slideUp(200);

});


// Smooth Scrolling Internal Links 
// #tags with internal function

$(document).ready(function(){
	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash,
	    $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 900, 'swing', function () {
	        window.location.hash = target;
	    });
	});
});
  
// Intractive Animations
//Note First include animate.css file
 
 $(window).load(function(){
	$(".project-title h4").addClass("animated fadeInUp"); 
	$(".project-title h5").addClass("animated fadeInDown");
	 	 
});
 
// function thirty_pc() {
//    var height = $(window).height();
//    var thirtypc = (30 * height) / 100;
//    thirtypc = parseInt(thirtypc) + 'px';
//    $("#pro").css('height',thirtypc);
//}
//
//$(document).ready(function() {
//    thirty_pc();
//    $(window).bind('resize', thirty_pc);
//});
 



/*custom animation for each items*/
/*Mix waypoint + animation.css*/
/* src: http://imakewebthings.com/jquery-waypoints/ */
/*	$('#header').waypoint(function(){
	
 $('nav a').addClass('animated shake').css('display', 'block');
		
	}, {offset: 800});
	
*/

	$('#about').waypoint(function(){
	
		var $items = $('.progress');
		
		$items.each(function(i){
			$(this).css({
				'-webkit-animation-delay': (i*0.5)+"s",
				'-moz-animation-delay': (i*0.5)+"s",
				'-ms-animation-delay': (i*0.5)+"s",	
				'-o-animation-delay': (i*0.5)+"s",	
				'animation-delay': (i*0.5)+"s"				
			});
		});
		
		$items.addClass('animated fadeInRight');	
		
	}, {offset: 800});
	

 
		$('#contact').waypoint(function(){
	
		var $items = $('li');
		
		$items.each(function(i){
			$(this).css({
				'-webkit-animation-delay': (i*0.3)+"s",
				'-moz-animation-delay': (i*0.3)+"s",
				'-ms-animation-delay': (i*0.3)+"s",	
				'-o-animation-delay': (i*0.3)+"s",	
				'animation-delay': (i*0.3)+"s"				
			});
		});
		
		$items.addClass('animated fadeInLeft');	
		
	}, {offset: 800});
		
	$('#pro').waypoint(function() {
  $('.circle-pro i').addClass('animated fadeInRight').css('display', 'block');
		
	$('.arrow').addClass('animated fadeInLeftBig').css('display', 'block');
}, { offset: 200 });

