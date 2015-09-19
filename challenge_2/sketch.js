function setup() {
	// create a place to draw
	createCanvas(640, 360);
	noLoop();
}

function draw() {
	// color the background
	background(140, 134, 169);
	//Setup white circles
	noFill();
	for (var i = 0; i < 100; i++) {
		stroke(225);
		ellipse(320, 180, i * 18, i * 18);
	}

	//Setup black circles
	noFill();
	for (var n = 0; n < 100; n++) {
		stroke(0);
		ellipse(320, 180, n * 36, n * 36);
	}
}
