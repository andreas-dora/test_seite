console.log("PENIkkS");

var h;
var s;
var v;
// var r;
// var g;
var red = document.querySelector('#input_r');
var green = document.querySelector('#input_g');
var blue = document.querySelector('#input_b');
var red_ = (Number(red.value))/255;
var green_ = (Number(green.value))/255;
var blue_ = (Number(blue.value))/255;
var c_min;
var c_max;
var delta;

c_max = Math.max(red_, green_, blue_);
c_min = Math.min(red_, green_, blue_);
delta = c_max - c_min;

if(delta = 0) h= 0;
else if(c_max == red_) h=((green_ - blue_)/delta)%6;
else if(c_max == green_) h=(blue_ - red_)/delta+2;
else  h=(red_ - green_)/delta +4;
h*=60;
if(h<0) h+=360;
v = c_max;
if(v == 0) s= 0;
else s =c_max /v;
s*=100;
v*=100;



console.log(h) ;
