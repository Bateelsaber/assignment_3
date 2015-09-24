function setup() {
	// create a place to draw
	createCanvas(660, 360);
	noLoop();
}

function draw() {

	stroke(255);
	background(50);
	from = color(255, 0, 0);
	to = color(0);
	interA = lerpColor(from, to, .18);
	interB = lerpColor(from, to, .27);
	interC = lerpColor(from, to, .36);
	interD = lerpColor(from, to, .45);
	interE = lerpColor(from, to, .54);
	interF = lerpColor(from, to, .63);
	interG = lerpColor(from, to, .72);
	interH = lerpColor(from, to, .81);
	fill(from);
	rect(10, 150, 52, 52);
	fill(interA);
	rect(75, 150, 52, 52);
	fill(interB);
	rect(140, 150, 52, 52);

	fill(interC);
	rect(205, 150, 52, 52);
	fill(interD);
	rect(270, 150, 52, 52);
	fill(interE);
	rect(335, 150, 52, 52);
	fill(interF);
	rect(400, 150, 52, 52);
	fill(interG);
	rect(465, 150, 52, 52);
	fill(interH);
	rect(530, 150, 52, 52);

	fill(to);
	rect(595, 150, 52, 52);
}
