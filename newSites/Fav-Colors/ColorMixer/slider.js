
const rgbText =document.getElementById('rgbText');
const slider = document.querySelectorAll('.slider');
const display = document.getElementById('display');

for (let i = 0; i < slider.length; i++){
  slider[i].addEventListener('input', function(){
    const red = document.getElementById('slider-R').value,
          green = document.getElementById('slider-G').value,
          blue = document.getElementById('slider-B').value;
          console.log(blue);
          display.style.backgroundColor = "rgb(" + red + ", " + green + ", " + blue +")";
          // var myHex = Nummber(red).toString(16);
          // rgbText.innerText = myHex;
          // rgbText.innerText = red + ", " + green + ", " + blue;
  });
}