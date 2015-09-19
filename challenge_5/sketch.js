function setup() {
	// create a place to draw
	createCanvas(640, 360);
	noStroke();

}

function draw() {
	background(0);
	fill(255, 255, 255);
	ellipse(mouseX, mouseY, 100, 100);
}
