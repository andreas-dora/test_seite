const canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var clock_x = canvas.width / 8 * 5;
var clock_y = canvas.height / 8 *5;
var clock_r = 200;

const cc = canvas.getContext('2d');


var uhr = new Path2D();
uhr.arc(
  clock_x, clock_y,
  clock_r,
  0, Math.PI*2,
  false           // ---- CLOCKWISE
);
cc.strokeStyle = 'rgb(55, 52 52)';
cc.fillStyle = 'rgb(166, 150, 108)';
cc.fill(uhr);




var deckel = new Path2D();
deckel.arc(
  clock_x, clock_y,
  8,
  0,
  Math.PI*2,
  false
);
cc.stroke(deckel);
cc.restore();
cc.save();

cc.translate(clock_x,clock_y);
cc.rotate(radians);
cc.beginPath();
cc.fillStyle = 'rgb(255, 255, 255)';
 cc.lineStyle = '#000';
 cc.rect(0,0,1,-185);
 cc.fill();
 cc.stroke();
 cc.restore();






 
// var stdZeiger = new Path2D();
//  stdZeiger.translate(clock_x, clock_y);
//  stdZeiger.beginPath();
//  stdZeiger.translate(10,10);


//  stdZeiger.fillStyle = 'rgb(255, 255, 255)';
//  stdZeiger.lineStyle = '#000';
//  stdZeiger.rect(30,30,50,50);
//  cc.fill(stdZeiger);
//  cc.stroke(stdZeiger);
// minZeiger.moveTo(0, 0);
// minZeiger.lineTo(clock_x, clock_y - clock_r);
// cc.stroke(minZeiger);

// var minZeiger = new Path2D();
// minZeiger.moveTo(clock_x, clock_y);
// minZeiger.lineTo(clock_x, clock_y - clock_r);
// cc.stroke(minZeiger);


// var myTime = new Date().toLocaleTimeString();
// cc.font = '48px serif';
// cc.font = '48px Arial';
// cc.fillText(myTime, 40, 60);s





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