let width = 400;
let height = 400;


function setup() {
	createCanvas(width, height);
	angleMode(DEGREES);
}

function draw() {
	background(5, 25, 45);
	translate(width / 2, height / 2);

	let hr = hour() % 12;
	let mn = minute();
	let sc = second();
	let mymin = mn * 60 + sc;
	let myhr = hr * 3600 + mymin;



	let secondAngle = map(sc, 0, 60, -90, 270);

	// stroke(150, 100, 255);
	let minuteAngle = map(mymin, 0, 3600, -90, 270);

	// stroke(150, 255, 100);
	let hourAngle = map(myhr, 0, 43200, -90, 270);

	let scale = width / 200;
	let size = 100;
	let offset = 2;



	let d = (2 * size - 2 * offset) * scale;
	let hzl = (size - 15) * scale;
	let mzl = (size - 4 * offset) * scale - 2;
	let szl = (size - 4 * offset) * scale - 2;
	let hzw = 6 * scale;
	let mzw = 4 * scale;
	let szw = 2 * scale;

	let c = ('deeppink');
	fill(c);
	noStroke();

	push();
	rotate(hourAngle);
	// stroke(150, 255, 100);
	line(0, 0, 50, 0);
	rect(0, -hzw / 2, hzl, hzw);
	pop();

	push();
	rotate(minuteAngle);
	// stroke(150, 100, 255);
	rect(0, -mzw / 2, mzl, mzw);
	//line(0, 0, 75, 0);
	pop();

	strokeWeight(offset * scale);
	stroke(c);

	push();
	rotate(secondAngle);
	//stroke(255, 100, 150);
	// line(0, 0, 100, 0);
	line(0, 0, szl, 0);
	pop();

	//	stroke(c);
	//strokeWeight(2);
	ellipse(0, 0, hzw, hzw);
	noFill();
	ellipse(0, 0, d, d);

}