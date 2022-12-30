$(document).ready(function() {
    $("#slider").bxSlider({
        auto: true,
        minSlides: 1,
        maxSlides: 10,
        slideWidth: 500,
        slideMargin: 20,
		randomStart: true,
		captions: true,
		speed: 300
    });
});