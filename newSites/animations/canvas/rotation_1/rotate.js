const canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// var clock_x = canvas.width / 8 * 5;
// var clock_y = canvas.height / 8 *5;
// var clock_r = 200;

const ctx = canvas.getContext('2d');

var p1 =  {x:60, y:60};
var p2 =  {x:90, y:70};

var dx = p2.x - p1.x;
var dy = p2.y - p1.y;

var length = Math.sqrt(dx*dx+ dy*dy);
var angle = Math.atan2(dy,dx);

draw(angle);
requestAnimationFrame(animate);

function animate(time){
  requestAnimationFrame(animate);
  draw(angle);
  angle+= Math.PI/60;
}

function draw(radianAngle){
  ctx.clearRect(0,0, canvas.width, canvas.height);
  ctx.beginPath();
  ctx.fillStyle = 'orange';
  ctx.rect(p1.x, p1.y, 30, 50);
  ctx.fill();
  ctx.save();

  ctx.translate(canvas.width/2, canvas.height/2);
  ctx.rotate(radianAngle);
  
  ctx.beginPath();
  ctx.fillStyle = 'red';
  ctx.rect(-15,-25,30,50);
  ctx.fill();
  ctx.restore();

}

