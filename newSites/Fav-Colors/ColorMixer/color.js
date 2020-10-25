

const hexInput = document.getElementById('hex-input');
const rInput = document.getElementById('r-input');
const gInput = document.getElementById('g-input');
const bInput = document.getElementById('b-input');

const display = document.getElementById('display');
const rgbSlider = document.querySelectorAll('.slider');


// document.querySelector('#app').addEventListener('click', deleftFun)
// function deleftFun(e){
//   if(e.target.classList.contains('del')){
//     e.target.parentElement.remove();
//   }
// }


for (let i = 0; i < rgbSlider.length; i++){
  rgbSlider[i].addEventListener('input', function(){
    const red = document.getElementById('slider-R').value,
          green = document.getElementById('slider-G').value,
          blue = document.getElementById('slider-B').value;
          display.style.backgroundColor = "rgb(" + red + ", " + green + ", " + blue +")";
          rInput.value = red;
          gInput.value = green;
          bInput.value = blue;


          console.log(Number(rInput.value).toString(16));
          hexInput.value = '#' + Number(rInput.value).toString(16) + Number(gInput.value).toString(16) + Number(bInput.value).toString(16);

  });
}
