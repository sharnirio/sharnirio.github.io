jQuery(document).ready(function() {
	firstAn();
	secondAn();
	jumpAn();
	// imgLeftAn();
});


//-------- -------- -------- --------
//-------- js custom end
//-------- -------- -------- --------

function firstAn() {
	let tl = new TimelineMax();
	let firsText = $('.firs-text');
	let secondText = $('.second-text');
	let secondTextAn = $('.second-text-an');

	tl.delay(2)
	.to(firsText, 1, { opacity: 0, onComplete: function() {
		firsText.addClass('js-hide');
		secondText.addClass('js-show');
	}})
	.to(secondText, 1, {opacity: 1, onComplete: function() {
		secondTextAn.addClass('swing');
	}});
}

function secondAn() {
	let tl2 = new TimelineMax();
	let startAnnBtn = $('.dino-start-btn a');
	let dinoStartBm = $('.dino-start-bm');
	let thirdText = $('.third-text-an');
	let secondText = $('.second-text, .dino-start-img img');
	startAnnBtn.on('click', function() {
		event.preventDefault();
		tl2.to(secondText, 1, {
			opacity: 0,
			scale: 0.5,
			onComplete: function() {
				timerInit();
				secondText.removeClass('js-show');
				thirdText.addClass('js-show-o').addClass('swing');
			}
		})
	});
}

function thirdAn() {
	let tl3 = new TimelineMax();
	let dinoGame = $('.dino-game');
	tl3.set(dinoGame, {scale:0.5})
	.to(dinoGame, 0, {onComplete: function() {
		dinoGame.addClass('js-show');
	}})
	.to(dinoGame, 1, { opacity: 1, scale:1, onComplete: function() {
		imgLeftAn();
	}})
}

function jumpAn() {
	let tl4 = new TimelineMax();
	var jumpBtn = $('.dino-game-btn');
	var dinoImg = $('.dino-game-img img');

	jumpBtn.on('click', function(event) {
		event.preventDefault();
		tl4.to(dinoImg, 0.7, { ease: Circ.easeOut, top: -200 }).to(dinoImg, 0.6, { top: 0 })
	});
}

function imgLeftAn() {
	var tl5 = new TimelineMax();
	var bottleImg = $('.dino-game-img-inner.js-off');
	var dinoImg = $('.dino-game-img img');
	var timeAnn = 3;
	var animateOn = true;

	if (document.documentElement.clientWidth <= 1024) {
		timeAnn = 2;
	}
	if (bottleImg.length == 0) {
		console.log("You win");
	}

	if (bottleImg.length > 0) {
		var bottleImgLast = bottleImg.last();

		TweenMax.to(bottleImgLast, timeAnn, {
			ease: Power0.easeOut,
			left: "50%",
			onComplete: function() {
				clearInterval(idInterval);
				if (animateOn) {
				bottleImgLast.removeClass('js-off');
				imgLeftAn();
				}
			}
		})

		var idInterval = setInterval(() => {
			var bottleImgLastPosX = bottleImgLast.offset().left;
			var bottleImgLastFullPosX = bottleImgLastPosX + bottleImgLast.width();
			var bottleImgLastFullPosY = bottleImgLast.offset().top;
			var dinoImgFullPosX = dinoImg.offset().left;
			var dinoImgFullPosY = dinoImg.offset().top + dinoImg.height();
			if (bottleImgLastFullPosX >= dinoImgFullPosX && bottleImgLastFullPosY <= dinoImgFullPosY) {
				animateOn = false;
				clearInterval(idInterval);
				crashAn();
			}
		}, 100);
	}
}

function crashAn() {
	var dinoImg = $('.dino-game-img img');
	TweenMax.to(dinoImg, 2, {x: 100, y: 0, rotation: 810, onComplete: function () {
		finalAnn();
	}
	})
}

function finalAnn() {
	console.log(123);
}

let timerInit = (timeArg = 3) => {
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
		console.log("timer started");
	}

	function endTimer() {
		let dinoStartBm = $('.dino-start-bm');
		let outputTimer = $('#output');
		console.log("timer ended");
		setTimeout(function() {
			TweenMax.to(outputTimer, 1, { opacity: 0, scale: 0.7});
			TweenMax.to(dinoStartBm, 1, { opacity: 0, scale: 0.5, bottom: "100%",  onComplete: function() {
				thirdAn();
			}
			});

		}, 300)
	}
	timer1.start()
	requestAnimationFrame(tick);


	function tick() {
		id("output").innerHTML = timer1.get("dig");
		// id("slider").style.width = timer1.get() / time * 100 + "%";
	}

	function id(id) {
		return document.getElementById(id);
	}
}