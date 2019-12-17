jQuery(document).ready(function () {
	cloudA();
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
	// var tlAnLeft = gsap.timeline({repeat: -1, repeatDelay: 0, ease: "none"});

	gsap.to(anLeft, {repeat: -1, ease: "none",duration: anDuration, stagger: 3, css: {left:"+100%"}});
	gsap.to(anLeft, {repeat: -1, ease: "none", yoyo:true,duration: 2, css: {y:"70%"}});

	gsap.to(anRight, {delay: -anDuration-1, repeat: -1, ease: "none",duration: anDuration, stagger: 3, css: {right:"+100%"}});
	gsap.to(anRight, {repeat: -1, ease: "none", yoyo:true,duration: 2, css: {y:"-70%"}});

	gsap.to(anSun, {repeat: -1, ease: "none", yoyo:true, duration: 10, css: {right:"+50%",
	bottom: "-90vh"}});


}