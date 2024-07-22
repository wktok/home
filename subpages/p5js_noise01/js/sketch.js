var canvas;

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}

function setup() {
	canvas = createCanvas(windowWidth, windowHeight);
	canvas.position(0,0);
	canvas.style(`z-index`,`-1`);

}


var moveX = 0;
var moveY = 0;
var speed = 10;

function refresh(){
	noiseSeed(random(100));
}

function draw() {
	frameRate(20);
	background(20);

	noStroke();
	fill(255);

	// noiseseed()s

	var grid = 20;
	var offsetL = 200;
	var offsetS = 20;
	var scale = 0.01;

	if (keyIsDown(LEFT_ARROW) === true) {
		moveX+=speed;
	}
	if (keyIsDown(RIGHT_ARROW) === true) {
		moveX-=speed;
	}
	if (keyIsDown(UP_ARROW) === true) {
		moveY+=speed;
	}
	if (keyIsDown(DOWN_ARROW) === true) {
		moveY-=speed;
	}

	var color = abs((moveX + width/2) % 1440) / 4;
	console.log(color);
	for (let i = grid + offsetL; i < width - offsetS; i+=grid){
		for(let j = grid + offsetS; j< height - offsetS; j+=grid){

			let pnoise = noise((i + moveX) * scale, (j + moveY) * scale);
			let diameter = pnoise * grid;
			colorMode(HSL);
			fill((color + i/60+ j/30) % 360, 100, 80);
			ellipse(i, j, diameter);
		}
	}
}


function keyPressed() {
	if (keyCode === UP_ARROW) {
		document.getElementById("up").style.backgroundColor = "rgba(255, 255, 255, 0.5)";
	}
	if (keyCode === DOWN_ARROW) {
		document.getElementById("down").style.backgroundColor = "rgba(255, 255, 255, 0.5)";
	}
	if (keyCode === RIGHT_ARROW) {
		document.getElementById("right").style.backgroundColor = "rgba(255, 255, 255, 0.5)";
	}
	if (keyCode === LEFT_ARROW) {
		document.getElementById("left").style.backgroundColor = "rgba(255, 255, 255, 0.5)";
	}
	if (keyCode === 32) {
		document.getElementById("space").style.backgroundColor = "rgba(255, 255, 255, 0.5)";
		noiseSeed(random(100)); 
	}
  }
function keyReleased() {
	if (keyCode === UP_ARROW) {
		document.getElementById("up").style.backgroundColor = "rgba(255, 255, 255, 0.1)";
	}
	if (keyCode === DOWN_ARROW) {
		document.getElementById("down").style.backgroundColor = "rgba(255, 255, 255, 0.1)";
	}
	if (keyCode === RIGHT_ARROW) {
		document.getElementById("right").style.backgroundColor = "rgba(255, 255, 255, 0.1)";
	}
	if (keyCode === LEFT_ARROW) {
		document.getElementById("left").style.backgroundColor = "rgba(255, 255, 255, 0.1)";
	}
	if (keyCode === 32) {
		document.getElementById("space").style.backgroundColor = "rgba(255, 255, 255, 0.1 )";
	}

  }
