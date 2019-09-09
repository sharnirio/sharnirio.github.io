document.addEventListener('DOMContentLoaded', function() {
	btmAnimate();
	clickFirework();
	pageReload();
	initRemResize();
}, false);
//-------- -------- -------- --------
//-------- js custom start
//-------- -------- -------- --------

function initRemResize() {
	$(window).on("load resize", function() {
		var e, t;
		window.innerWidth <= 640 ? (window.innerHeight, window.innerWidth, e = window.innerWidth / 640 * 100, t = window.innerHeight / 960 * 100) : (e = window.innerWidth > 640 ? "100%" : window.innerWidth / 640 * 100, t = window.innerHeight > 960 ? "100%" : window.innerHeight / 960 * 100), e <= t ? $("html").css("font-size", e + "%") : $("html").css("font-size", 100 + "%")
	}).trigger("resize")
}


let pageReload = () => {
	let btnVar = document.querySelector('.result-btn a');
	btnVar.addEventListener('click', () => {
		location.reload();
	})
}

let btmAnimate = () => {
	let btnVar = document.querySelector('.btn-start');
	let mainPageVar = document.querySelector('.main-section');
	let jsHiddenVar = document.querySelectorAll('.js-hidden');
	var tl = new TimelineMax();
	btnVar.addEventListener('click', () => {
		tl.to(mainPageVar, 1, { opacity: 0, scale: 0.9, onComplete: timerInit(3) }).set(mainPageVar, { className: "+=js-hidden" }).set(jsHiddenVar, { className: "+=js-hidden-off" });
	});
}

let afterTimer = () => {
	let jsHiddenOffVar = document.querySelectorAll('.js-hidden-off');
	let jsHidden2Var = document.querySelectorAll('.js-hidden2');
	for (var i = 0; i < jsHiddenOffVar.length; i++) {
		jsHiddenOffVar[i].classList.remove('js-hidden-off');
	}
	for (var i = 0; i < jsHidden2Var.length; i++) {
		jsHidden2Var[i].classList.add('js-hidden2-off');
	}
}

let randomNum = (min, max)  => {
	let rand = min + Math.random() * (max + 1 - min);
	return rand.toFixed(2);
}

let stopAnimateFirework = false;
let animateFirework = () => {

		let fireworkItem = $('.firework-item');
		let fireworkBlock = $('.firework-block');
		let div = $("<div>").addClass("firework-item animation-btt").html("<img src=\"assets/img/img03.png\" alt=\"firework\">");
		let counter = 500;
		let myFunction = function() {
			if(stopAnimateFirework == true) {
				fireworkBlock.children().remove();
				return false;
			};
			counter = randomNum(500, 1500);
			let leftVar = randomNum(10, 90);
			fireworkBlock.append(div.clone().css("left", leftVar + "%"));
			setTimeout(myFunction, counter);

		}
		setTimeout(myFunction, counter);
}

let clickFirework = () => {
	let fireworkBlock = $('.firework-block');
	let countRemoveBlock = $('.second-amount span');
	let resultAmountBlock = $('.result-amount span');

	let countRemoveEl = 0;
	fireworkBlock.on('mousedown', '.firework-item', function(){
		this.remove();
		countRemoveEl++;
		countRemoveBlock.text(countRemoveEl);
		resultAmountBlock.text(countRemoveEl);
	});
}


// more info https://www.youtube.com/watch?v=BAfiXPkubYw
let timerInit = (timeArg = 20) => {
	var time = timeArg,
		fps = 60;
	var Timer = function(obj) {
		this.time = obj.time;
		this.fps = obj.fps;
		this.onEnd = obj.onEnd || null;
		this.onStart = obj.onStart || null;
		this.onTick = obj.onTick || null;
		this.intervalID = null;
		this.start = () => {
			this.interval = setInterval(this.update, 1000 / this.fps);
			this.onStart ? this.onStart() : void 0;
			return this;
		};
		this.stop = () => {
			clearInterval(this.interval);
			this.onEnd ? this.onEnd() : void 0;
		};
		this.update = () => {
			this.time > 0 ? this.time -= 1 / this.fps : this.stop();
			this.onTick ? this.onTick() : void 0;
			return this.get();
		}
		this.get = (par) => {
			switch (par) {
				case undefined:
					return this.time;
					break;
				case "dig":
					return Math.ceil(this.time);
					break;
				case "end":
					return this.onEnd();
					break;
			}
		}
	}
	var timer1 = new Timer({
		time: time,
		fps: fps,
		onTick: tick,
		onEnd: endTimer,
		onStart: onTimerStart
	});

	function onTimerStart() {
		// console.log("timer started");
		animateFirework();
		// clickFirework();
	}

	function endTimer() {
		// console.log("timer ended");
		stopAnimateFirework = true;
		afterTimer();
	}
	timer1.start()
	requestAnimationFrame(tick);

	function tick() {
		id("output").innerHTML = timer1.get("dig");
		id("slider").style.width = timer1.get() / time * 100 + "%";
	}

	function id(id) {
		return document.getElementById(id);
	}
}
// tutorial https://abraxabra.ru/blog/prochee/greensock-for-beginners-a-tutorial-on-web-animation-part-1/
// function init
// function greensockInit() {
// 	//first animation
// 	var myElement = '.my-element';
// 	TweenMax.set(myElement, { paddingBottom: 60, rotation: -15 }); // just css value
// 	TweenMax.from(myElement, 6, { color: "#DC143C" });
// 	TweenMax.to(myElement, 6, { rotation: 0, color: "#00FF00", delay: 6 });
// 	//second animation with construction
// 	var tl = new TimelineMax();
// 	var myElement2 = '.my-element2';
// 	var myElement3 = '.my-element3';
// 	TweenMax.set(myElement2, { position: 'relative' });
// 	tl.fromTo(myElement2, 4, {
// 		// from state
// 		opacity: 1,
// 		top: "-100px",
// 	}, {
// 		// to end state
// 		opacity: 0.5,
// 		top: "100px",
// 	}).to(myElement2, 4, { top: "-100px", opacity: 1, ease: Bounce.line }).to(myElement3, 4, { scale: 0.5, }).to(myElement2, 4, { top: "0px", scale: 0.8, })
// 	//The third animation with group
// 	var tl2 = new TimelineMax();
// 	var myElement4 = '.my-element4';
// 	var myElement4img = '.my-element4 img';
// 	TweenMax.set(myElement4, { display: 'flex' });
// 	tl2.staggerTo(myElement4img, 0.5, {
// 		rotation: 180,
// 	}, 1).staggerTo(myElement4img, 0.5, {
// 		rotation: 0,
// 	}, 1);
// }
// function greensockInit2() {
// 	var tl = new TimelineMax();
// 	var $box1 = $('.box1');
// 	var $box2 = $('.box2');
// 	var $box3 = $('.box3');
// 	var $box4 = $('.box4');
// 	var $allBox = $('.box1, .box2, .box3, .box4');
// 	var restart = $('.restart-box');
// 	var pause = $('.pause-box');
// 	var play = $('.play-box');
// 	tl.to($box1, 1, {
// 		left: "100%",
// 	}).to($box2, 1, {
// 		right: "100%",
// 	}, '-=1').to($box2, 1, {
// 		bottom: "-100%",
// 	}).to($box3, 1, {
// 		top: "-100%",
// 	}, '-=1').to($box4, 1, {
// 		top: "-100%",
// 	}).to($box1, 1, {
// 		bottom: "-100%",
// 	}, '-=1').to($box2, 1, {
// 		right: "0",
// 	}).to($box1, 1, {
// 		left: "0",
// 	}, '-=1').to($box1, 1, {
// 		top: "0",
// 	}).to($box2, 1, {
// 		top: "0",
// 	}, '-=1').to($box3, 1, {
// 		top: "0%",
// 	}, '-=1').to($box4, 1, {
// 		top: "0%",
// 	}, '-=1').to($allBox, 3, {
// 		rotation: 180
// 	}).to($allBox, 3, {
// 		fontSize: "100px"
// 	}, '+=1').add('newPoint').to($allBox, 5, {
// 		scale: 0.5
// 	}).to($allBox, 5, {
// 		scale: 0.9
// 	}).to($box1, 3, {
// 		rotation: 360,
// 		fontSize: "50px"
// 	}, 'newPoint').to($box2, 3, {
// 		rotation: 0,
// 		fontSize: "80px"
// 	}, 'newPoint').to($box3, 3, {
// 		rotation: 360,
// 		fontSize: "120px"
// 	}, 'newPoint').to($box4, 3, {
// 		rotation: 0,
// 		fontSize: "140px"
// 	}, 'newPoint');
// 	restart.on('click', function() {
// 		$allBox.removeAttr("style");
// 		tl.restart();
// 	})
// 	pause.on('click', function() {
// 		tl.pause();
// 	})
// 	play.on('click', function() {
// 		tl.play();
// 	})
// }
//-------- -------- -------- --------
//-------- js custom end
//-------- -------- -------- --------
//-------- -------- -------- --------
//-------- included js libs start
//-------- -------- -------- --------
//-----module greensock js
//= vendors/greensock.js
//-------- -------- -------- --------
//-------- included js libs end
//-------- -------- -------- --------