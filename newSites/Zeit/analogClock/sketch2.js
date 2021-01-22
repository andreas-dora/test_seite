const canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const cc = canvas.getContext('2d');

var kreis = new Path2D();
// kreis.moveTo(25,200);
kreis.arc(
  250,
  250,
  200,
  0,
  Math.PI*2,
  false
);
cc.stroke(kreis);

var kreis = new Path2D();
kreis.arc(
  250,
  250,
  10,
  0,
  Math.PI*2,
  false
);

// kreis.lineTo(200,25);
cc.stroke(kreis);


// var dreieck = new Path2D();

// cc.beginPath();
// dreieck.moveTo(100,100);
// dreieck.lineTo(200,300);
// dreieck.lineTo(300,100);
// dreieck.lineTo(100,100);
// dreieck.closePath();
// cc.stroke(dreieck);

// console.log('hello');

// var width = window.innerWidth;
// var height = window.innerHeight;

// console.log(width);

// function setup() {
// 	// createCanvas(width, height);
// 	angleMode(DEGREES);
// }

// function draw() {
// 	background(225, 25, 45);
// 	translate(width / 2, height / 2);

// 	let hr = hour() % 12;
// 	let mn = minute();
// 	let sc = second();
// 	let mymin = mn * 60 + sc;
// 	let myhr = hr * 3600 + mymin;



	// let secondAngle = map(sc, 0, 60, -90, 270);

// 	let minuteAngle = map(mymin, 0, 3600, -90, 270);

// 	let hourAngle = map(myhr, 0, 43200, -90, 270);

// 	let scale = width / 200;
// 	let size = 100;
//   let offset = 2;
// }