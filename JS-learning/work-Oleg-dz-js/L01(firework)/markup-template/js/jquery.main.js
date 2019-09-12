document.addEventListener('DOMContentLoaded', function() {
	btmAnimate();
	clickFirework();
	pageReload();
	initRemResize();
	firewokInnit();
}, false);
//-------- -------- -------- --------
//-------- js custom start
//-------- -------- -------- --------

// tutorial https://abraxabra.ru/blog/prochee/greensock-for-beginners-a-tutorial-on-web-animation-part-1/


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
		tl.to(mainPageVar, 1, { opacity: 0, scale: 0.9, onComplete: timerInit(30) }).set(mainPageVar, { className: "+=js-hidden" }).set(jsHiddenVar, { className: "+=js-hidden-off" });
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


//-------- -------- -------- --------
//-------- js custom end
//-------- -------- -------- --------
//-------- -------- -------- --------
//-------- included js libs start
//-------- -------- -------- --------

//= vendors/firework.js

//= vendors/greensock.js

//-------- -------- -------- --------
//-------- included js libs end
//-------- -------- -------- --------