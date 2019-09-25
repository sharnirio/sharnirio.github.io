jQuery(document).ready(function() {
	jsCan();
});


//-------- -------- -------- --------
//-------- js custom start
//-------- -------- -------- --------

function getRadians(degrees) {
	return (Math.PI/180)*degrees;
}

function jsCan() {
	var canvas = document.querySelector('.canvas1');
	var ctx = canvas.getContext('2d');

	// just tips
	// ctx.beginPath();
	// ctx.arc(250,250, 50, getRadians(0), getRadians(60), false);
	// ctx.lineWidth = 50;
	// ctx.strokeStyle = '#FFA500';
	// ctx.stroke();

	function cirlePart(amount, lineWidthArg, radiusArg) {
		var partDeg = Math.floor(360 / amount);
		var pathStartDeg = 0;
		var pathEndDeg = partDeg;
		for (var i = 0; i <= amount; i++) {
			ctx.beginPath();
			ctx.lineWidth = lineWidthArg;
			ctx.strokeStyle = '#' + (Math.random() * Math.pow(256, 3) | 0).toString(16).padStart(6, '0');
			ctx.arc(450, 450, radiusArg, getRadians(pathStartDeg), getRadians(pathEndDeg), false);
			ctx.stroke();
			pathStartDeg = pathEndDeg;
			pathEndDeg = partDeg * i;
		}
	}
	cirlePart(10, 100, 150);
	cirlePart(10, 100, 250);
	cirlePart(10, 100, 350);
};

//-------- -------- -------- --------
//-------- js custom end
//-------- -------- -------- --------

//-------- -------- -------- --------
//-------- included js libs start
//-------- -------- -------- --------


//-------- -------- -------- --------
//-------- included js libs end
//-------- -------- -------- --------