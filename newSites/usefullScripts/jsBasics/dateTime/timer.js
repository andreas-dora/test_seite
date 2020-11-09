const startBtn = document.querySelector('#start');
const plusBtn = document.querySelector('#plus');
const minusBtn = document.querySelector('#minus');
var sek = document.querySelector('#sekunden'); 
var isRunning = false;
var startSeconds = 300;  // startSeconds 
var workSeconds;

function init(){
  workSeconds = 300;
  startBtn.addEventListener('click', btnState);
  plusBtn.addEventListener('click', plusTime);
}
function btnState(){
  if(!isRunning){
    isRunning = true;
  } else {
    isRunning =  false;
  }
  
  console.log(isRunning)
}
function plusTime (){
  if((!isRunning)&&(workSeconds == startSeconds)){
    startSeconds += 60;
    workSeconds = startSeconds;
    sek.innerText = workSeconds;
  }
  

}
function timerFun(){
 
  if(isRunning){
    workSeconds -=1;
    if(workSeconds<= 0){
      isRunning = false;
      workSeconds = startSeconds;
    }
  }
  sek.innerText = workSeconds;
}
setInterval(timerFun, 1000);
document.addEventListener('DOMContentLoaded', init);

