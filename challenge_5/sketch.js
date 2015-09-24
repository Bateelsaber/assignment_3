function setup() {
	// create a place to draw
	createCanvas(640, 360);
	noStroke();

}

function draw() {
	background(0);

	var i;
	i = random(-3, 3);
	fill(255, 255, 255);
	ellipse(mouseX + i, mouseY + i, 50, 50);

}
