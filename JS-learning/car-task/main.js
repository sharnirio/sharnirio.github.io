jQuery(document).ready(function () {
	cloudA();
	carA();
	ufoA();
});


//-------- -------- -------- --------
//-------- js custom start
//-------- -------- -------- --------

//function jsActive()
function cloudA() {
	// tlTop.staggerTo(topImg, 3, {left:"+100%"}, 0);

	var anLeft = $('.an-l');
	var anRight = $('.an-r');
	var anSun = $('.an-s');
	var anDuration = 9;
	var anDurationSun = 20;
	// var tlAnLeft = gsap.timeline({repeat: -1, repeatDelay: 0, ease: "none"});

	gsap.to(anLeft, {repeat: -1, ease: "none",duration: anDuration, stagger: 3, css: {left:"+100%"}});
	gsap.to(anLeft, {repeat: -1, ease: "none", yoyo:true,duration: 2, css: {y:"70%"}});

	gsap.to(anRight, {delay: -anDuration-1, repeat: -1, ease: "none",duration: anDuration, stagger: 3, css: {right:"+100%"}});
	gsap.to(anRight, {repeat: -1, ease: "none", yoyo:true,duration: 2, css: {y:"-70%"}});

	gsap.to(anSun, {delay: 0, repeat: -1, ease: "none", yoyo:true, duration: anDurationSun/2, css: {right:"+50%",
	bottom: "-90vh"}});


}

function carA() {
	var carBlock = $('.car-block');
	var wrapperBlock = $('.wrapper');
	var tlCar = gsap.timeline({repeat: -1, repeatDelay: 0, ease: "power4.out"});
	var smoke = $('.smoke');
	var anDuration = 9;
	var anDurationSun = 20;

	gsap.to(wrapperBlock, {repeat: -1, yoyo:true, ease: "none",duration: anDurationSun/2, css: {backgroundColor: "#CD853F"}});
	gsap.to(carBlock, {repeat: -1, ease: "none",duration: anDuration, css: {left:"+100%", x: 0}});
	tlCar.to(carBlock, {duration: anDuration*2/5, css: {y:"-70px"}}).to(carBlock, {duration: anDuration*3/5, css: {y:"0px"}});
	gsap.to(smoke, {repeat: -1, ease: "none", duration: 1, yoyo:true, css: {opacity:0.6, scale: 0.8, fill: "#000"}});
}

function ufoA() {
	var carBlock = $('.ufo');
	var tlCar = gsap.timeline({repeat: -1, repeatDelay: 0, ease: "power4.out"});
	var anDuration = 9;
}