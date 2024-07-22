var canvas;
var t = 0;

var numLines = 12;



function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}

function setup() {
	canvas = createCanvas(windowWidth, windowHeight);
	canvas.position(0,0);
	canvas.style(`z-index`,`-1`);
}

function draw() {

	translate(width/2, height/2);
	
	var scalex = width/4;
	var scaley = height/5;

	var x1 = function(t){
		return scalex*(sin(t*3)) + cos(t*5);
	}
	var x2 = function(t){
		return scalex*(cos(t)) + cos(t*2);
	}
	var y1 = function(t){
		return scaley*(sin(t) + cos(t*2));
	}
	var y2 = function(t){
		return scaley*(sin(t) + cos(t/2));
	}

	var d = dist(x1(t),y1(t),x2(t),y2(t));
	background(20*sin(t/10) + 20);


	for(var i = 0; i < numLines; i++){
		strokeWeight(2);
		stroke(255-i*20, 100+i*10, 150 + 100*sin(t/10), i*15);
		
		point(x1(t+(i/10)),y1(t+(i/10)));
		point(x2(t+(i/10)),y2(t+(i/10)));
		line(x1(t+(i/10)),y1(t+(i/10)),x2(t+(i/10)),y2(t+(i/10)));
	}
	

	t += 0.04;
	

}