const startBtn = document.querySelector('#startBtn');
const plusBtn = document.querySelector('#plusBtn');
const minusBtn = document.querySelector('#minusBtn');
var sek = document.querySelector('#sekunden'); 
var min = document.querySelector('#minuten'); 
var isRunning = false;
var startSeconds = 300;  // startSeconds 
var workSeconds;

function init(){
  workSeconds = 300;
  updateDisplay();
  startBtn.addEventListener('click', btnState);
  plusBtn.addEventListener('click', plusTime);
  minusBtn.addEventListener('click', minusTime);
}
function btnState(){
  isRunning = !isRunning;
}
function plusTime (){
  if((!isRunning)&&(workSeconds == startSeconds)){
    startSeconds += 60;
    workSeconds = startSeconds;
    updateDisplay();
  }
}
function minusTime (){
  if((!isRunning)&&(workSeconds == startSeconds)){
    if(startSeconds > 60){
      startSeconds -= 60;
      workSeconds = startSeconds;
    } else {
      startSeconds = 60;
    }
    updateDisplay();
  }
}
function timerFun(){
  if(isRunning){
    workSeconds -=1;
    if(workSeconds<= 0){
      isRunning = false;
      workSeconds = startSeconds;
    }
    updateDisplay();
  }
}
function updateDisplay(){
  sek.innerText = (workSeconds % 60).toString().padStart(2, 0);
  min.innerText = (Math.floor(workSeconds /60)).toString().padStart(2, 0);
}

setInterval(timerFun, 1000);
document.addEventListener('DOMContentLoaded', init);

