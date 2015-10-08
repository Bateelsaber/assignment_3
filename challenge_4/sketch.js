var ballX = 200;
var ballY = 100;
var ballSpeedX = 4;
var ballSpeedY = 4;
var ballXa = 500;
var ballYa = 250;
var ballSpeedXa = 4;
var ballSpeedYa = 4;

function setup() {
	// create a place to draw
	createCanvas(640, 360);
	noStroke();
}

function draw() {

	//////////////////////////////
	// update

	// change position
	ballX = ballX + ballSpeedX;
	ballY = ballY + ballSpeedY;
	ballXa = ballXa + ballSpeedXa;
	ballYa = ballYa + ballSpeedYa;


	// don't let the ball go to far

	// right
	if (ballX > width) {
		ballSpeedX = -ballSpeedX;
	} else {
		ballSpeedXa = -ballSpeedX;

	}

	// bottom
	if (ballY > height) {
		ballSpeedY = -ballSpeedY;
	} else {
		ballSpeedYa = ballSpeedY;
	}

	// left
	if (ballX < 0) {
		ballSpeedX = -ballSpeedX;
	} else {
		ballSpeedXa = -ballSpeedX;
	}

	// top
	if (ballY < 0) {
		ballSpeedY = -ballSpeedY;
	} else {
		ballSpeedYa = -ballSpeedY;
	}

	//////////////////////////////
	// draw

	background(0);
	ellipse(ballX, ballY, 50, 50);
	ellipse(ballXa - 100, ballYa, 50, 50);

}
