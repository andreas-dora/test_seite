var isWorking = false;
var inPause = false;


var workStartStamp = 0;
var workStopStamp = 0;
var workMillis = 0;

var pauseStartStamp = 0;
var pauseStopStamp = 0;
var pauseMillis = 0;

var totalMillis = 0;


var workBtn = document.getElementById('id_workBtn');
var pauseBtn = document.getElementById('id_pauseBtn');


/*######################################*/
/*######################################*/
/*######################################*/

const workStartFeld = document.getElementById('id_workStartFeld');
const workStopFeld = document.getElementById('id_workStopFeld');
const workMillisFeld = document.getElementById('id_workMillisFeld');
const pauseStartFeld = document.getElementById('id_pauseStartFeld');
const pauseStopFeld = document.getElementById('id_pauseStopFeld');
const pauseMillisFeld = document.getElementById('id_pauseMillisFeld');

const totalMillisFeld = document.getElementById('id_totalMillisFeld');
showMillis();

workBtn.addEventListener('click', workFun);

pauseBtn.addEventListener('click', pauseFun);

function workFun(){
 if(!isWorking){
   workStartStamp = Date.now();
   workBtn.innerText = 'Stop';
  //  alert('Now Working');
 } else {
   workStopStamp = Date.now();
   workMillis = workStopStamp - workStartStamp;
   
   workBtn.innerText = 'Start';
  }
 isWorking = !isWorking;
 showMillis();
};

function pauseFun(){
  if(!inPause){
    pauseStartStamp = Date.now();
    pauseBtn.innerText = 'Stop';
  } else {
    pauseStopStamp = Date.now();
    pauseMillis = pauseStopStamp - pauseStartStamp;
    pauseBtn.innerText = 'Pause';
  }
  inPause = !inPause;
  showMillis();
};


/*######################################*/
/*######################################*/
/*######################################*/

function showMillis(){
 
  // workMillis = workStopStamp - workStartStamp;
  workStartFeld.innerText = workStartStamp.toString().padStart(12, 0);
  workStopFeld.innerText = workStopStamp.toString().padStart(12, 0);
  workMillisFeld.innerText = workMillis.toString().padStart(12,0);
  pauseStartFeld.innerText = pauseStartStamp.toString().padStart(12,0);
  pauseStopFeld.innerText = pauseStopStamp.toString().padStart(12,0);
  pauseMillisFeld.innerText = pauseMillis.toString().padStart(12,0);


totalMillis = workMillis - pauseMillis;

  totalMillisFeld.innerText = totalMillis.toString().padStart(12,0);
}


