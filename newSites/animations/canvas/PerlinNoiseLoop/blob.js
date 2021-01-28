var noiseMax = 0.5;
var slider;
var phase = 0;
function setup(){
  createCanvas(280,280);
  slider = createSlider(0,10,0);
}

function draw(){
  background(255, 250, 250);
  translate(width/2, height/2);
  stroke(67, 64, 77);
  noFill();
  let t = 0;  // --- For perlin noise
  beginShape();
  noiseMax = slider.value();
  for(let a= 0; a < TWO_PI; a+=0.2){
    let xoff = map(cos(a+phase),-1,1,0,noiseMax);
    let yoff = map(sin(a+phase),-1,1,0,noiseMax);
    let r = map(noise(xoff, yoff), 0,1, 100, 150); //------------- Perlin Noise
    let x = r * cos(a);
    let y = r * sin(a);
    vertex(x,y);
    t+0.1;
  }
  endShape(CLOSE);
  phase +=0.01;
}

// mit PAhse sieht es aus als würde der Kreis sich drehen, Er startet aber nur immer an einem anderen Punkt des Noise-Feldes.