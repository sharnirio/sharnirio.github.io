window.onload = function(e) {
	var div = document.querySelector('.fields');
	var matrix = new Matrix(div, 20, 20, 30);
	matrix.create();

	var wall = new Wall(matrix, [[4,5], [4,6], [4,7], [4,8], [4,9], [4,10],
															 [8,6], [8,5], [8,4], [7,4], [7,3], [7,2], 
															 [12,12], [12,13], [12,14], [12,15], [13,15], [14,15], 
															 [1,12], [1,13], [2,13], [2,14], [3,14], [4,14], 
															 [1,20], [1,19], [2,19], [2,18], [3,18], [3,17], 
															 [20,1], [19,1], [19,2], [18,2], [18,3], [17,3], 
															 [18,12], [18,13], [18,14], [18,15], [17,15], [16,15],
															 [14,5], [14,6], [14,7], [14,8], [14,9], [14,10],
															 [14,18], [13,18], [14,17], [14,16], [14,15], [14,16]
															 ],
															 );
	wall.show();

	fruit = new Fruit(matrix, true, 1);
	fruit.show();

	var snake = new Snake(matrix, [[10,10],[10,9],[10,8],[10,7]], "down");
	snake.show();


	var addEvent = document.addEventListener ? function(target, type, action) {
		if (target) {
			target.addEventListener(type, action, false);
		}
	} : function(target, type, action) {
		if (target) {
			target.attachEvent('on' + type, action, false);
		}
	}

	addEvent(document, 'keydown', function(e) {
		e = e || window.event;
		var key = e.which || e.keyCode;
		if (key === 37) {
			snake.course = "left";
		}
		if (key === 39) {
			snake.course = "right";
		}
		if (key === 40) {
			snake.course = "down";
		}
		if (key === 38) {
			snake.course = "up";
		}
	});

	var blockStart = document.querySelector('.fields-start-btn');
	var blockReload = document.querySelector('.fields-reload-btn');
	var btnStart = document.querySelector('.fields-start-btn a');
	var btnReload = document.querySelector('.fields-reload-btn a');
	var pointFinal = document.querySelector('.fields-point-final');
	var start = false;

	function gameStart() {
		var	gameSpeed = 11-snake.speed;
		if(gameSpeed < 3
			) {
			gameSpeed = 3;
		}
		if (!start) {
			start = true;
			var timerID = setInterval(() => {
			snake.move();
			if (!snake.alive) {
				clearInterval(timerID);
				blockStart.classList.add('js-hide');
				blockReload.classList.add('js-show');
				pointFinal.textContent = snake.point;
			}
		}, 20*gameSpeed);
		}

	}

	addEvent(document, 'keydown', function(e) {
		e = e || window.event;
		var key = e.which || e.keyCode;
		if (key === 13) {
			gameStart();
		}
	});

	var btnStartFun = function() {
		gameStart();
		btnStart.removeEventListener("click", btnStartFun);
	};

	btnStart.addEventListener("click", btnStartFun);

	btnReload.addEventListener("click", function() {
		location.reload()
	});


}