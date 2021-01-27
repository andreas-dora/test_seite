const canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ctx = canvas.getContext('2d');


var myTime = new Date().toLocaleTimeString();
ctx.font = '100px Arial';
ctx.fillText(myTime, 60, 160);


function draw(){

ctx.clearRect(0,0,canvas.width, canvas.height); 
var myTime = new Date().toLocaleTimeString();
ctx.font = '100px Arial';
ctx.fillText(myTime, 60, 160);

let sc = myTime.getSeconds(); 
let secondAngle = map(sc, 0, 60, -90, 270);

ctx.fillText(secondAngle, 60, 360);

// 	let minuteAngle = map(mymin, 0, 3600, -90, 270);

// 	let hourAngle = map(myhr, 0, 43200, -90, 270);

  requestAnimationFrame(draw)
}



document.addEventListener('DOMContentLoaded', draw);