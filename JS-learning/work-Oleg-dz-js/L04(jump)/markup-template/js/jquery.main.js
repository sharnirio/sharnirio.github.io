jQuery(document).ready(function() {
	firstAn();
	secondAn();
	jumpAn();
	pageReload(".end .btn");
	pageReload(".end-win-text .btn");
	// finalAnnWin();
});


//-------- -------- -------- --------
//-------- js custom end
//-------- -------- -------- --------

function pageReload(btnClick) {
	let btnVar = document.querySelector(btnClick);
	btnVar.addEventListener('click', function pageReload() {
		location.reload();
	})
}

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
	let dinoGameImg = $('.dino-game-img img');
	tl3.set(dinoGameImg, {scale:0.5, y: -100, x: -100})
	.to(dinoGame, 0, {onComplete: function() {
		dinoGame.addClass('js-show');
	}})
	.to(dinoGameImg, 1, {
		scale: 1, y: 0, x: 0
	})
	.to(dinoGame, 1, { opacity: 1, onComplete: function() {
		imgLeftAn();
	}}, -1)
}

function jumpAn() {
	let tl4 = new TimelineMax();
	let jumpBtn = $('.dino-game-btn');
	let dinoImg = $('.dino-game-img img');

	jumpBtn.on('click', function(event) {
		event.preventDefault();
		tl4.to(dinoImg, 0.7, { ease: Circ.easeOut, top: -200 }).to(dinoImg, 0.6, { top: 0 })
	});
}

function imgLeftAn() {
	let bottleImg = $('.dino-game-img-inner.js-off');
	let dinoImg = $('.dino-game-img img');
	let timeAnn = (document.documentElement.clientWidth <= 767) ? 1.5 : (document.documentElement.clientWidth <= 1024) ? 2 : 1.5;
	let animateOn = true;

	if (bottleImg.length == 0) {
		animateOn = false;
		finalAnnWin();
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
			let bottleImgLastPosX = bottleImgLast.offset().left;
			let bottleImgLastFullPosX = bottleImgLastPosX + bottleImgLast.width();
			let bottleImgLastFullPosY = bottleImgLast.offset().top;
			let dinoImgFullPosX = dinoImg.offset().left;
			let dinoImgFullPosY = dinoImg.offset().top + dinoImg.height();
			if (bottleImgLastFullPosX+2 >= dinoImgFullPosX && bottleImgLastFullPosY+2 <= dinoImgFullPosY) {
				animateOn = false;
				clearInterval(idInterval);
				crashAn();
			}
		}, 100);
	}
}

function crashAn() {
	let dinoImg = $('.dino-game-img img');
	TweenMax.to(dinoImg, 2, {x: 100, y: 0, rotation: 810, onComplete: function () {
		finalAnn();
	}
	})
}

function finalAnn() {
	let tl6 = new TimelineMax();
	let dinoGame = $('.dino-game');
	let end = $('.end');
	tl6.to(dinoGame, 1, {
		opacity: 0.3,
		onComplete: function () {
			dinoGame.removeClass('js-show');
			end.addClass('js-show');
		}
	})
	.to(end, 1, {
		opacity: 1
	})
}

function finalAnnWin() {
	let tl5 = new TimelineMax();
	let endWin = $('.end-win');
	let dino = $('.end-win-img-dino');
	let bottle = $('.end-win-img-bottle');
	let conf = $('.end-win-img-conf');
	let text = $('.end-win-text');
	let dinoGame = $('.dino-game');
	let container = $('.container');
	let output = $('#output');
	tl5.to(dinoGame, 1, {
			delay: 1,
			opacity: 0.3,
			onComplete: function () {
				dinoGame.removeClass('js-show');
				endWin.addClass('js-show');
				container.addClass('js-hide');
				output.addClass('js-hide');
			}
		}).to(endWin, 0.5, {
				opacity: 1
			}).to(bottle, 1, {
		opacity: 1,
		y: 0
	}).to(dino, 1, {
		opacity: 1,
		x: 0,
		y: 0
	}).to(conf, .3, {
		yoyo: true,
		opacity: 1,
		repeat: 6
	}).to(conf, .3, {
		opacity: 0
	}).to(text, .3, {
		opacity: 1
	})

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