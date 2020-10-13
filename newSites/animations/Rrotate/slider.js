console.log('läuft');

const slider1 = document.getElementById("slider-1");
const output1 = document.getElementById("sliderOutput-1");
const item1 = document.getElementById('moveItem-1');
output1.innerText = slider1.value;  
slider1.oninput = function() {
  item1.style.transform(transla)
  output1.innerText = this.value;
}
const slider2 = document.getElementById("slider-2");
const output2 = document.getElementById("sliderOutput-2");
output2.innerText = slider2.value;  
slider2.oninput = function() {
  output2.innerText = this.value;
}