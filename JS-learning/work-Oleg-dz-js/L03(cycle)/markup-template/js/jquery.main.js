jQuery(document).ready(function() {
	// drawIt()
});



//-------- -------- -------- --------
//-------- js custom start
//-------- -------- -------- --------

function getRadians(degrees) {
	return (Math.PI/180)*degrees;
}



// set up the canvas
var canvas = document.querySelector('.canvas1');
var ctx = canvas.getContext('2d');


// set up the geometry
var start_angle = getRadians(0);
var end_angle = getRadians(360);
var arc_end_angle = start_angle;
var angle_step = 2 * Math.PI / 60;
var radius = 20;
var amount = 3;
// the drawFrame function is called up to 60 times per second
function drawFrame() {
	ctx.lineWidth = 6;
	ctx.lineCap = "round";
	// draw an arc
	ctx.beginPath();
	ctx.arc(canvas.width / 2, canvas.height / 2, radius, start_angle, arc_end_angle, false);
	ctx.stroke();
	// update the geometry, for use in the next call to
	// drawFrame
	arc_end_angle += angle_step;
	if (arc_end_angle > end_angle) {
		arc_end_angle = start_angle;
		radius += 10;
		amount--;
	}
	// request that drawFrame be called again, for the
	// next animation frame
	var an = requestAnimationFrame(drawFrame);
	if (amount == 0) {
		console.log("End animate");
		cancelAnimationFrame(an)
	}
}

// request that drawFrame be called once, in the next
// animation frame
var an = requestAnimationFrame(drawFrame);



function cirlePart(amount, lineWidthArg, radiusArg) {
	// just tips
	// ctx.beginPath();
	// ctx.arc(250,250, 50, getRadians(0), getRadians(60), false);
	// ctx.lineWidth = 50;
	// ctx.strokeStyle = '#FFA500';
	// ctx.stroke();
	var partDeg = Math.floor(360 / amount);
	var pathStartDeg = 0;
	var pathEndDeg = partDeg;
	for (var i = 0; i <= amount; i++) {
		var randColor = '#' + (Math.random() * Math.pow(256, 3) | 0).toString(16).padStart(6, '0');
		ctx.beginPath();
		ctx.lineWidth = lineWidthArg;
		ctx.strokeStyle = randColor;
		ctx.arc(450, 450, radiusArg, getRadians(pathStartDeg), getRadians(pathEndDeg), false);
		ctx.stroke();
		pathStartDeg = pathEndDeg;
		pathEndDeg = partDeg * i;
	}
}

cirlePart(10, 100, 150);
cirlePart(10, 100, 250);
cirlePart(10, 100, 350);

//-------- -------- -------- --------
//-------- js custom end
//-------- -------- -------- --------

//-------- -------- -------- --------
//-------- included js libs start
//-------- -------- -------- --------


//-------- -------- -------- --------
//-------- included js libs end
//-------- -------- -------- --------