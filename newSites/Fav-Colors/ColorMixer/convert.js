// console.log('hello');

const redIn = document.getElementById('red-in');
const redOut = document.getElementById('red-out');
const conBtn = document.getElementById('convertBtn');
conBtn.addEventListener('click', convertFun);

function convertFun(){
  let redVal = Number(redIn.value);
  // let redVal = Number.parseInt(redIn, 16);
  redOut.innerText = redVal.toString(16);

}

// var input = Number(prompt ("Eine Zahl bitte"));
// console.log("HEX: ", input.toString(16));
