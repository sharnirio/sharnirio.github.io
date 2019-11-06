class Fruit extends Elem {

	constructor(matrix, random = false, numFruct = 10) {
		super(matrix);
		this.numFruct = numFruct;
		this.random = random;
		this.value = "fruit";
		if (this.random) {
			this.value = "random-fruit";
		}
	}
	show() {
		if (this.random) {
			for (var i = 0; i < this.numFruct; i++) {
				var x = Helper.randomInteger(1, this.matrix.xSize);
				var y = Helper.randomInteger(1, this.matrix.ySize);
				while(this.matrix.getCell(x,y) !== "") {
					x = Helper.randomInteger(1, this.matrix.xSize);
					y = Helper.randomInteger(1, this.matrix.ySize);
				}
				this.matrix.setCell(x, y, this.value);
			}
		}
	}
}