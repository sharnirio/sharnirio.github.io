var $ = $.noConflict();
$(document).ready(function() {
	isElementExist("body", fff, "test", 123);
	isElementExist("body", mySwiperF);
	isElementExist("body", mySwiperFV2);
});

function mySwiperF() {
	var mySwiper = new Swiper('.swiper-container1', {
		loop: true,
		simulateTouch: false,
		// "slide", "fade", "cube", "coverflow" or "flip"
		effect: "slide",
		autoHeight: true,
		spaceBetween: 10,
		navigation: {
			prevEl: '.slider-b .s-b-n1',
			nextEl: '.slider-b .s-b-p1',
		}
	})
	var mySwiper2 = new Swiper('.swiper-container2', {
		loop: true,
		spaceBetween: 10,
		simulateTouch: false,
		navigation: {
			prevEl: '.slider-b .s-b-n2',
			nextEl: '.slider-b .s-b-p2',
		}
	})
	var mySwiper3 = new Swiper('.swiper-container3', {
		loop: true,
		spaceBetween: 10,
		simulateTouch: false,
		navigation: {
			prevEl: '.slider-b .s-b-n3',
			nextEl: '.slider-b .s-b-p3',
		}
	})
	$(".slider-b").on('click', ".s-b-n1", function(event) {
		mySwiper2.slidePrev();
	});
	$(".slider-b").on('click', ".s-b-p1", function(event) {
		mySwiper2.slideNext();
	});
	$(".slider-b").on('click', ".s-b-n2", function(event) {
		mySwiper3.slidePrev();
	});
	$(".slider-b").on('click', ".s-b-p2", function(event) {
		mySwiper3.slideNext();
	});
	$(".slider-b").on('click', ".s-b-n3", function(event) {
		mySwiper.slidePrev();
	});
	$(".slider-b").on('click', ".s-b-p3", function(event) {
		mySwiper.slideNext();
	});
}

function mySwiperFV2() {
	var mySwiper4 = new Swiper('.swiper-container4', {
		loop: true,
		simulateTouch: false,
		uniqueNavElements: false,
		navigation: {
			prevEl: '.slider-b .s-b-n1-v2',
			nextEl: '.slider-b .s-b-p1-v2',
		}
	})
	var mySwiper5 = new Swiper('.swiper-container5', {
		loop: true,
		simulateTouch: false,
		uniqueNavElements: false,
		navigation: {
			prevEl: '.slider-b .s-b-n2-v2',
			nextEl: '.slider-b .s-b-p2-v2',
		}
	})
	var mySwiper6 = new Swiper('.swiper-container6', {
		loop: true,
		simulateTouch: false,
		uniqueNavElements: false,
		navigation: {
			prevEl: '.slider-b .s-b-n3-v2',
			nextEl: '.slider-b .s-b-p3-v2',
		}
	})
}




function isElementExist(_el, _cb, ..._rest) {
	var elem = document.querySelector(_el);
	var rest = _rest
	if (document.body.contains(elem)) {
		if (arguments.length <= 2) {
			_cb();
		}
		if (arguments.length == 3) {
			_cb(rest[0]);
		}
		if (arguments.length == 4) {
			_cb(rest[0], rest[1]);
		}
	}
}

function fff(arg, arg2) {
	console.log(arg);
	console.log(arg2);
}