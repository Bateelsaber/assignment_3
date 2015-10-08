var BallX = 100
var BallY = 200
var SpeedBallX = 2.5
var SpeedBallY = 2.5


function setup() {
	// create a place to draw
	createCanvas(640, 360);
	noStroke();

}

function draw() {

	if (BallX > mouseX) {
		BallX = BallX - SpeedBallX;

	}
	if (mouseX > BallX) {
		BallX = BallX + SpeedBallX;
	}
	if (BallY > mouseY) {
		BallY = BallY - SpeedBallY;

	}
	if (mouseY > BallY) {
		BallY = BallY + SpeedBallY

	}

	background(0);

	ellipse(BallX, BallY, 50, 50);

}
