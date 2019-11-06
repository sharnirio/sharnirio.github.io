window.onload = function(e) {
	var div = document.querySelector('.fields');
	var matrix = new Matrix(div, 20, 20, 30);
	matrix.create();


	(new Fruit(matrix, true, 1)).show();

	var wall = new Wall(matrix, [[4,5], [4,6], [4,7], [4,8], [4,9], [4,10],
															 [8,6], [8,5], [8,4], [7,4], [7,3], [7,2], 
															 [12,12], [12,13], [12,14], [12,15], [13,15], [14,15], 
															 [1,12], [1,13], [2,13], [2,14], [3,14], [4,14]]);
	wall.show();

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

	var timerID =	setInterval(() => {
		snake.move();
		if(!snake.alive) {
			clearInterval(timerID);
			// alert('Game over');
			console.log('Game over you final score - '+ snake.point);
		}
	}, 200);
}