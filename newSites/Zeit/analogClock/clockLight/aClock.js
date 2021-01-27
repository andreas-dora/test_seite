const canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = 600;
// canvas.height = window.innerHeight;




const ctx = canvas.getContext('2d');
var clock_x = canvas.width / 8 * 5;
var clock_y = canvas.height / 5 * 3;
var clock_r = 240;

function draw(){

ctx.clearRect(0,0,canvas.width, canvas.height); 
var myTime = new Date(); 
var mySeconds = myTime.getSeconds();

var myMinutes = myTime.getMinutes()* 60 + mySeconds;
var myHours = myTime.getHours() % 12 * 3600 + myMinutes;
var sekundenWinkel = (Math.PI*2/60) * mySeconds;
var minutenWinkel = (Math.PI*2/3600) * myMinutes;
var stundenWinkel = (Math.PI*2/43200) * myHours;



var uhr = new Path2D();
uhr.arc(
  clock_x, clock_y,
  clock_r,
  0, Math.PI*2,
  false           // ---- CLOCKWISE
);

ctx.strokeStyle = '#373434';
ctx.fillStyle = '#dcdbdb';
ctx.fill(uhr);
ctx.stroke(uhr);
ctx.restore();
ctx.save();

var deckel = new Path2D();
deckel.arc(
  clock_x, clock_y,
  13,
  0, Math.PI*2,
  false           // ---- CLOCKWISE
);

for(let i = 0; i < 60; i++){
  var zeichenWinkel = (Math.PI*2/60) * i;
  ctx.translate(clock_x, clock_y);
ctx.rotate(zeichenWinkel);
ctx.beginPath();
ctx.fillStyle = '#373434';
ctx.fillRect(-1, - clock_r*0.96, 2,18);
ctx.restore();
ctx.save();
}
for(let i = 0; i < 20; i++){
  var zeichenWinkel = (Math.PI*2/20) * i;
  ctx.translate(clock_x, clock_y);
ctx.rotate(zeichenWinkel);
ctx.beginPath();
ctx.fillStyle = '#373434';
ctx.fillRect(-1, - clock_r*0.96, 2,26);
ctx.restore();
ctx.save();
}





ctx.translate(clock_x, clock_y);
ctx.rotate(stundenWinkel);
ctx.beginPath();
ctx.fillStyle = '#373434';
ctx.fillRect(-8, 10, 16,- clock_r*0.9);
ctx.restore();
ctx.save();

ctx.translate(clock_x, clock_y);
ctx.rotate(minutenWinkel);
ctx.beginPath();
ctx.fillStyle = '#373434';
ctx.fillRect(-5,0, 10,-clock_r*0.94);
ctx.restore();
ctx.save();


ctx.translate(clock_x, clock_y);
ctx.rotate(sekundenWinkel);
ctx.beginPath();
ctx.fillStyle = '#f9423a';
ctx.fillRect(-3,0, 6,-clock_r*0.96);
ctx.restore();
ctx.save();

ctx.fillStyle = '#f9423a';
ctx.fill(deckel);
ctx.restore();
ctx.save();

  requestAnimationFrame(draw)
}



document.addEventListener('DOMContentLoaded', draw);