function setup() {
	// create a place to draw
	createCanvas(640, 360);
}

function draw() {
	// Color the background
	background(150, 0, 0);
	noFill();
	stroke(255);
	ellipse(mouseX, mouseY, 40, 40);
	line(mouseX + 20, mouseY, mouseX + 1000, mouseY)
	line(mouseX - 20, mouseY, mouseX - 1000, mouseY)
	line(mouseX, mouseY + 20, mouseX, mouseY + 1000)
	line(mouseX, mouseY - 20, mouseX, mouseY - 1000)
}
