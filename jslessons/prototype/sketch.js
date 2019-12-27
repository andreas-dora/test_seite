function Particle(){
  this.x = 100;
  this.y = 99;

}

Particle.prototype.show = function(){
  points(this.x, this.y);


}

//  var p = new Particle();
var p;
var p2;

function setup(){
  createCanvas(640,360);
}

function draw(){
  ellipse(50,50,50,50);
  p =new Particle();
  p2 =new Particle();
}
