// var lastCourse;
class Snake extends Elem {

	constructor(matrix, cords, course) {
		super(matrix, cords)
		this.value = "snake";
		this.course = course;
		this.alive = true;
		this.point = 0;
		this.speed = 1;
	}

	move() {
		if (!this.alive) {
			return false;
		}

		var head = this.cords[0].slice();

		switch (this.course) {
			case 'right':
				head[0]++;
				break;
			case 'left':
				head[0]--;
				break;
			case 'up':
				head[1]--;
				break;
			case 'down':
				head[1]++;
				break;
		}

		// this._checkAlive();
		if (!this._checkAlive(head)) {
			this.alive = false;
			return false;
		}


		var headNewCord = this.matrix.getCell(head[0], head[1]);
		switch(headNewCord) {
			case "wall":
			case "shake":
			this.alive = false;
			return false;
			break
			case "fruit":
			case "random-fruit":
			this.point++;
			this.cords.unshift(head);
			this.matrix.setCell(head[0], head[1], 'snake');
			fruit.show();
			document.querySelector('.fields-point').textContent = this.point;
			break
			case "":
			var tail = this.cords.pop();
			this.matrix.setCell(tail[0], tail[1], '');
			this.cords.unshift(head);
			this.matrix.setCell(head[0], head[1], 'snake');
			break
		}


	}
	_checkAlive(head) {
		return head[0] >= 1 && head[0] <= this.matrix.xSize && head[1] >= 1 && head[1] <= this.matrix.ySize
	}
}