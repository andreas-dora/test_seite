const canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ctx = canvas.getContext('2d');
var clock_x = canvas.width / 8 * 5;
var clock_y = canvas.height / 8 *5;
var clock_r = 200;

function draw(){

ctx.clearRect(0,0,canvas.width, canvas.height); 
var myTime = new Date(); 
var mySeconds = myTime.getSeconds();

var myMinutes = myTime.getMinutes()* 60 + mySeconds;
var myHours = myTime.getHours() % 12 * 3600 + myMinutes;
var minutenWinkel = (Math.PI*2/3600) * myMinutes;
var stundenWinkel = (Math.PI*2/43200) * myHours;
// ctx.font = '100px Arial';
// ctx.fillText(myTime.toLocaleTimeString(), 60, 160);
// ctx.fillText(myMinutes, 60, 360);
// ctx.fillText(myHours, 60, 560);

var uhr = new Path2D();
uhr.arc(
  clock_x, clock_y,
  clock_r,
  0, Math.PI*2,
  false           // ---- CLOCKWISE
);

ctx.strokeStyle = 'rgb(55, 52 52)';
ctx.fillStyle = 'rgb(166, 150, 108)';
ctx.fill(uhr);
ctx.restore();
ctx.save();

var deckel = new Path2D();
deckel.arc(
  clock_x, clock_y,
  13,
  0, Math.PI*2,
  false           // ---- CLOCKWISE
);
ctx.fillStyle = '#034f67';
ctx.fill(deckel);
ctx.restore();
ctx.save();

ctx.translate(clock_x, clock_y);
ctx.rotate(minutenWinkel);
ctx.beginPath();
ctx.fillStyle = '#034f67';
ctx.fillRect(-5,0, 10,-200);
ctx.restore();
ctx.save();

ctx.translate(clock_x, clock_y);
ctx.rotate(stundenWinkel);
ctx.beginPath();
ctx.fillStyle = '#034f67';
ctx.fillRect(-10, 10, 20,-180);
ctx.restore();
ctx.save();
  requestAnimationFrame(draw)
}

document.addEventListener('DOMContentLoaded', draw);