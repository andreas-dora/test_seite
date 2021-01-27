// const canvas = document.querySelector('canvas');
// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;

function draw(){

  window.requestAnimationFrame(redraw);
}

function redraw(){
  const canvas = document.querySelector('canvas');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  var ctx = canvas.getContext('2d');
  ctx.clearRect(0,0, canvas.width, canvas.height);
  var time = new Date();
  var angle = ((2*Math.PI)/6)*time.getSeconds() +
  ((2*Math.PI)/6000)*time.getMilliseconds();

  ctx.fillStyle = '#FF0000';
  ctx.save();
  ctx.translate(150, 150);
  ctx.rotate(angle);
  ctx.translate(0,25);
  ctx.fillRect(5,5,20,20);
  ctx.restore();

  ctx.fillStyle = '#00FF00';
  ctx.save();
  ctx.translate(150, 150);
  ctx.rotate(angle);
  ctx.translate(0,50);
  ctx.fillRect(5,5,20,20);
  ctx.restore();

  // console.log(angle);
  // console.log(time);
  window.requestAnimationFrame(redraw);

}


window.addEventListener('DOMContentLoaded', draw);