$(function(){

$('.header_slider').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
    arrows:false,
    asNavFor: '.header_nav'
    
});

$('.header_nav').slick({
	arrows:false,
	slidesToShow: 5,
    asNavFor: '.header_slider',
    focusOnSelect: true

});


$('.menu_btn').on('click',function(){
	$('.header_menu_logo').slideToggle();
});

});