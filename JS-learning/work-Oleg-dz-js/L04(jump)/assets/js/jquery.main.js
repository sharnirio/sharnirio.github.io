"use strict";

jQuery(document).ready(function () {
  firstAn();
  secondAn();
  jumpAn(); // imgLeftAn();
}); //-------- -------- -------- --------
//-------- js custom end
//-------- -------- -------- --------

function firstAn() {
  var tl = new TimelineMax();
  var firsText = $('.firs-text');
  var secondText = $('.second-text');
  var secondTextAn = $('.second-text-an');
  tl.delay(2).to(firsText, 1, {
    opacity: 0,
    onComplete: function onComplete() {
      firsText.addClass('js-hide');
      secondText.addClass('js-show');
    }
  }).to(secondText, 1, {
    opacity: 1,
    onComplete: function onComplete() {
      secondTextAn.addClass('swing');
    }
  });
}

function secondAn() {
  var tl2 = new TimelineMax();
  var startAnnBtn = $('.dino-start-btn a');
  var dinoStartBm = $('.dino-start-bm');
  var thirdText = $('.third-text-an');
  var secondText = $('.second-text, .dino-start-img img');
  startAnnBtn.on('click', function () {
    event.preventDefault();
    tl2.to(secondText, 1, {
      opacity: 0,
      scale: 0.5,
      onComplete: function onComplete() {
        timerInit();
        secondText.removeClass('js-show');
        thirdText.addClass('js-show-o').addClass('swing');
      }
    });
  });
}

function thirdAn() {
  var tl3 = new TimelineMax();
  var dinoGame = $('.dino-game');
  tl3.set(dinoGame, {
    scale: 0.5
  }).to(dinoGame, 0, {
    onComplete: function onComplete() {
      dinoGame.addClass('js-show');
    }
  }).to(dinoGame, 1, {
    opacity: 1,
    scale: 1,
    onComplete: function onComplete() {
      imgLeftAn();
    }
  });
}

function jumpAn() {
  var tl4 = new TimelineMax();
  var jumpBtn = $('.dino-game-btn');
  var dinoImg = $('.dino-game-img img');
  jumpBtn.on('click', function (event) {
    event.preventDefault();
    tl4.to(dinoImg, 0.7, {
      ease: Circ.easeOut,
      top: -200
    }).to(dinoImg, 0.6, {
      top: 0
    });
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
      onComplete: function onComplete() {
        clearInterval(idInterval);

        if (animateOn) {
          bottleImgLast.removeClass('js-off');
          imgLeftAn();
        }
      }
    });
    var idInterval = setInterval(function () {
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
  TweenMax.to(dinoImg, 2, {
    x: 100,
    y: 0,
    rotation: 810,
    onComplete: function onComplete() {
      finalAnn();
    }
  });
}

function finalAnn() {
  console.log(123);
}

var timerInit = function timerInit() {
  var timeArg = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 3;
  var time = timeArg,
      fps = 60;

  var Timer = function Timer(obj) {
    var _this = this;

    this.time = obj.time;
    this.fps = obj.fps;
    this.onEnd = obj.onEnd || null;
    this.onStart = obj.onStart || null;
    this.onTick = obj.onTick || null;
    this.intervalID = null;

    this.start = function () {
      _this.interval = setInterval(_this.update, 1000 / _this.fps);
      _this.onStart ? _this.onStart() : void 0;
      return _this;
    };

    this.stop = function () {
      clearInterval(_this.interval);
      _this.onEnd ? _this.onEnd() : void 0;
    };

    this.update = function () {
      _this.time > 0 ? _this.time -= 1 / _this.fps : _this.stop();
      _this.onTick ? _this.onTick() : void 0;
      return _this.get();
    };

    this.get = function (par) {
      switch (par) {
        case undefined:
          return _this.time;
          break;

        case "dig":
          return Math.ceil(_this.time);
          break;

        case "end":
          return _this.onEnd();
          break;
      }
    };
  };

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
    var dinoStartBm = $('.dino-start-bm');
    var outputTimer = $('#output');
    console.log("timer ended");
    setTimeout(function () {
      TweenMax.to(outputTimer, 1, {
        opacity: 0,
        scale: 0.7
      });
      TweenMax.to(dinoStartBm, 1, {
        opacity: 0,
        scale: 0.5,
        bottom: "100%",
        onComplete: function onComplete() {
          thirdAn();
        }
      });
    }, 300);
  }

  timer1.start();
  requestAnimationFrame(tick);

  function tick() {
    id("output").innerHTML = timer1.get("dig"); // id("slider").style.width = timer1.get() / time * 100 + "%";
  }

  function id(id) {
    return document.getElementById(id);
  }
};