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

	var anLeft = $('.an-l');
	var anRight = $('.an-r');
	var anDuration = 12;

	gsap.set(anLeft, {x: "-100%"})
	gsap.to(anLeft, {repeat: -1, ease: "none",duration: anDuration, stagger: anDuration/3, css: {x: "100vw"}});

	gsap.to(anLeft, {repeat: -1, ease: "none",duration: 2, yoyo:true, y: gsap.utils.wrap(["70%","-70%","50%","-50%"]) });

	gsap.set(anRight, {x: "100%"})
	gsap.to(anRight, {delay: -anDuration+5, repeat: -1, ease: "none",duration: anDuration, stagger: anDuration/4, css: {x: "-100vw"}});
	gsap.to(anRight, {repeat: -1, ease: "none", yoyo:true,duration: 2, css: {y:gsap.utils.wrap(["-90%","80%","-80%","90%"])}});


}

function sunA() {
	var anDurationSun = 30;
	var anSun = $('.an-s');
	var wrapperBlock = $('.wrapper-background');


	gsap.set(anSun, {xPercent: 100, yPercent: -100})
	gsap.to(anSun, {delay: 0, repeat: -1, ease: "none", yoyo:true, duration: anDurationSun/2, css: {x:"-70vw",
	y: "90vh", backgroundColor: "#CD853F", scale: 2}});

	gsap.to(wrapperBlock, {repeat: -1, yoyo:true, ease: "none",duration: anDurationSun/2, css: {backgroundColor: "#CD853F"}});
}

function carA() {
	var carBlock = $('.car-block');
	var tlCar = gsap.timeline({repeat: -1, repeatDelay: 0, ease: "none"});
	var smoke = $('.smoke');
	var anDuration = 12;

	gsap.set(carBlock, {x: "-100%"})
	gsap.fromTo(carBlock, {x: "-417px"}, {repeat: -1, ease: "none",duration: anDuration, css: {x: "100vw"}});
	tlCar.to(carBlock, {duration: anDuration*2/5, css: {y:"-50px"}}).to(carBlock, {duration: anDuration*3/5, css: {y:"10px"}});
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