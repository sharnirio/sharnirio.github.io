class Matrix{
	
	/* 
	 * на дз - M x N есть 
	 * */
	constructor(elem, m, n, cellsSizeAr){
		this.elem = elem;
		this.xSize = m;
		this.ySize = n;
		this.cells = [];
		this.allSize = n*m;
		this.cellsSize = cellsSizeAr;
	}
	
	create(){
		this.elem.style.cssText  = `width: ${this.xSize*this.cellsSize}px`;
		for(let i = 0; i < this.allSize; i++){
			let div = document.createElement('div');
			div.style.cssText  = `width: ${this.cellsSize}px; height: ${this.cellsSize}px`;
			div.setAttribute("data-game", "empty");
			this.elem.appendChild(div);
			this.cells[i] = '';
		}
	}
	
	getCell(x, y){
		let num = this._calcNum(x, y);
		return this.cells[num];
	}
	
	setCell(x, y, val){
		let num = this._calcNum(x, y);
		this.cells[num] = val;
		this.elem.children[num].setAttribute('data-game', val);
	}
	
	/* пересчитать № строки и № столбца в i */ 
	_calcNum(x, y){
		return ((x-1)+this.xSize*(y-1));
	}
}