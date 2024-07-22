var canvas;

var r = 2;
var dots = []; 


function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}

function setup() {
	canvas = createCanvas(windowWidth, windowHeight, WEBGL);
	canvas.position(0 , 0);
	canvas.style(`z-index`,`-1`);
}

function draw() {
	background(30);
	noStroke();
	
	var scale = 80; 
	
	for(var i = scale-(width/2) ; i < width/2; i+= scale){
		for(var j = scale-(height/2); j < height/2; j+= scale){
			var mx = mouseX-width/2;
			var my = mouseY-height/2;
			var distance = dist(i, j, mx, my);
			var x0 = 25*(mx-i)/distance;
			var y0 = 25*(my-j)/distance;
			stroke(100, 255-200*distance/width, 255-150*distance/width);
			strokeWeight(2);
			line(i, j, i+x0, j+y0)
		}
	}
	
	
}