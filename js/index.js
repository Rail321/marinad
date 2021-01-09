$(".slider__slider").slick({
	slidesToShow: 3,
	infinite: false,
	centerMode: true,
	initialSlide: 1,
	responsive: [
		{
			breakpoint: 1024,
			settings: "unslick"
		},
	]
});