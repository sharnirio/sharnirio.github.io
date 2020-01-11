var $ = $.noConflict();
$(document).ready(function() {
	isElementExist("body", fff, "test", 123);
	isElementExist("body", mySwiperF);
	isElementExist("body", mySwiperFV2);
	isElementExist("body", mySwiperFV3);
	isElementExist("#www", scrollM);
	isElementExist("body", scrollM2);
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
		uniqueNavElements: false,
		navigation: {
			prevEl: '.slider-b .s-b-n1-v2',
			nextEl: '.slider-b .s-b-p1-v2',
		}
	})
	var mySwiper5 = new Swiper('.swiper-container5', {
		loop: true,
		uniqueNavElements: false,
		navigation: {
			prevEl: '.slider-b .s-b-n2-v2',
			nextEl: '.slider-b .s-b-p2-v2',
		}
	})
	var mySwiper6 = new Swiper('.swiper-container6', {
		loop: true,
		uniqueNavElements: false,
		navigation: {
			prevEl: '.slider-b .s-b-n3-v2',
			nextEl: '.slider-b .s-b-p3-v2',
		}
	})
}

function mySwiperFV3() {
	var swiper = new Swiper('.swiper-container7', {
		direction: 'vertical',
		// slidesPerView: 1,
		centeredSlides: true,
		spaceBetween: 0,
		grabCursor: true,
		slidesPerView: 'auto',
		spaceBetween: 30,
		// mousewheel: {
		// 	forceToAxis: true,
		// 	releaseOnEdges: true,
		// 	invert: true
		// },
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
		navigation: {
			prevEl: '.next1',
			nextEl: '.prev1',
		}
	});
}

function scrollM() {
	// const menuAnim = gsap.to(".www-an", {rotation:360, x: 1000, duration: 1});
	 var action =  gsap.timeline()
  action.to(".www-an", {rotation:360, x: 1000, y: 500, duration: 10});
  var action2 =  new TimelineMax();
  action2.to(".www-an2", {rotation:7200, x: 1200, y: 1000, duration: 10});
	// menuAnim.pause()
	var controller = new ScrollMagic.Controller({
		globalSceneOptions: {
			triggerHook: 'onLeave'
		}
	});
	var scene = new ScrollMagic.Scene({
			triggerElement: "#www",
			offset: 0, // start scene after scrolling for 100px
			duration: 1000// pin the element for 400px of scrolling
		})
	.setTween(action)
	// .on("enter", function(e) {
	// 		menuAnim.play();
	// 	})
	// .on("leave", function(e) {
	// 		menuAnim.reverse();
	// 	})
		.setPin('#www')
		.addIndicators({ name: "1 #www (duration: 100)" })
		.loglevel(3)
		.addTo(controller)

			var scene2 = new ScrollMagic.Scene({
			triggerElement: "#www2",
			offset: 0, // start scene after scrolling for 100px
			duration: 1000// pin the element for 400px of scrolling
		})
	.setTween(action2)
	// .on("enter", function(e) {
	// 		menuAnim.play();
	// 	})
	// .on("leave", function(e) {
	// 		menuAnim.reverse();
	// 	})
		.setPin('#www2')
		.addIndicators({ name: "1 #www2 (duration: 100)" }).addTo(controller);
}

function scrollM2() {
	var www = $(".www-an3-bl").innerHeight();
	console.log(www);
	// const menuAnim = gsap.to(".www-an", {rotation:360, x: 1000, duration: 1});
	 var action3 =  gsap.timeline()
  action3.to(".www-an3", {y: www,rotation:360,  duration: 1 , ease: "none"});
  var action4=  new TimelineMax();
  action4.to(".www-an4", {y: 500,rotation:360,  duration: 10 , ease: "none"});

	var controller = new ScrollMagic.Controller({
		
			// triggerHook: 'onLeave'
		
	});
	var scene = new ScrollMagic.Scene({
		triggerHook: 'onLeave',
			triggerElement: "#www3",
			// reverse: false,
			offset: 0, // start scene after scrolling for 100px
			duration: www// pin the element for 400px of scrolling
		})
	.setTween(action3)
	.setClassToggle("#www3", "myclass")
		// .setPin('#www3')
		.addIndicators({ name: "3 #www3"})
		.addTo(controller)

			var scene2 = new ScrollMagic.Scene({
				triggerHook: 'onCenter',
			triggerElement: "#www4",
			offset: 0, // start scene after scrolling for 100px
			duration: 500// pin the element for 400px of scrolling
		})
	.setTween(action4)
		// .setPin('#www4')
		.addIndicators({ name: "4 #www4"} )
		.addTo(controller);
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