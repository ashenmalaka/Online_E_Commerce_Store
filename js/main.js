//Fisrt Slider
$(".slider-one")
.not(".slick-intialized")
.slick({
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
    prevArrow: ".site-slider .slider-btn .prev",
    nextArrow: ".site-slider .slider-btn .next"
});

//Fisrt Slider
$(".slider-two")
.not(".slick-intialized")
.slick({
    prevArrow: ".site-slider.two .prev",
    nextArrow: ".site-slider.two .next",
    slidesToshow: 5,
    slidesToScroll: 1
});
