jQuery(document).ready(function () {
	cloudA();
	sunA();
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
	var anDuration = 18;
	// var tlAnLeft = gsap.timeline({repeat: -1, repeatDelay: 0, ease: "none"});

	gsap.to(anLeft, {repeat: -1, ease: "none",duration: anDuration, stagger: anDuration/3, css: {left:"+100%"}});
	gsap.to(anLeft, {repeat: -1, ease: "none", yoyo:true,duration: 2, css: {y:"70%"}});

	gsap.to(anRight, {delay: -anDuration+5, repeat: -1, ease: "none",duration: anDuration, stagger: anDuration/4, css: {right:"+100%"}});
	gsap.to(anRight, {repeat: -1, ease: "none", yoyo:true,duration: 2, css: {y:"-70%"}});


}

function sunA() {
	var anDurationSun = 20;
	var anSun = $('.an-s');
	var wrapperBlock = $('.wrapper');


	gsap.set(anSun, {xPercent: 100, yPercent: -100})
	gsap.to(anSun, {delay: 0, repeat: -1, ease: "none", yoyo:true, duration: anDurationSun/2, css: {right:"+70%",
	top: "70vh", backgroundColor: "#CD853F", scale: 1.5}});

	gsap.to(wrapperBlock, {repeat: -1, yoyo:true, ease: "none",duration: anDurationSun/2, css: {backgroundColor: "#CD853F"}});
}
function carA() {
	var carBlock = $('.car-block');
	var tlCar = gsap.timeline({repeat: -1, repeatDelay: 0, ease: "power4.out"});
	var smoke = $('.smoke');
	var anDuration = 12;
	var anDurationSun = 20;


	gsap.to(carBlock, {repeat: -1, ease: "none",duration: anDuration, css: {left:"+100%", x: 0}});
	tlCar.to(carBlock, {duration: anDuration*2/5, css: {y:"-70px"}}).to(carBlock, {duration: anDuration*3/5, css: {y:"0px"}});
	gsap.to(smoke, {repeat: -1, ease: "none", duration: 1, yoyo:true, css: {opacity:0.6, scale: 0.8, fill: "#000"}});
}

function ufoA() {

gsap.registerPlugin(MotionPathPlugin);

gsap.set("#rect", {xPercent: -50, yPercent: -50, transformOrigin: "50% 50%"})
gsap.to("#rect", {
	duration: 15,
	repeat: -1,
	repeatDelay: 1,
	yoyo: true,
	ease: "power1.inOut",
	motionPath:{
		path: "#path"
	}
});
}