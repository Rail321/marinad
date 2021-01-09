document.querySelector( ".header__burger").onclick = function() {
	let header = document.querySelector( ".header");
	if( header.classList.contains( "header-active")) {
		header.classList.remove( "header-active");
	}
	else {
		header.classList.add( "header-active");
	}
}

const counter = () => {
	$('.cartbasket__buys').on('click','.cartbasket__plus',function () {
		$(this).prev().get(0).value++;
	})
	
	$('.cartbasket__buys').on('click','.cartbasket__minus',function () {
		if($(this).next().get(0).value <= 1){
			return
		}
		$(this).next().get(0).value--;
	})
}
if($('.cartbasket__buys li').length){
	counter();
}

const counterTwo = () => {
	$('.basket__buys').on('click','.basket__plus',function () {
		$(this).prev().get(0).value++;
	})
	
	$('.basket__buys').on('click','.basket__minus',function () {
		if($(this).next().get(0).value <= 1){
			return
		}
		$(this).next().get(0).value--;
	})
}
if($('.basket__buys li').length){
	counterTwo();
}

$(".slider__slider").slick({
	slidesToShow: 3,
	infinite: true,
	centerMode: true,
	initialSlide: 1,
	responsive: [
		{
			breakpoint: 1024,
			settings: "unslick"
		}
	]
});

$("#phone").mask("+7(999)999-99-99");
