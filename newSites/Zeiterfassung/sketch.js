var isWorking = false;
const workStartBtn = document.getElementById('id_workStartBtn').addEventListener('click', workStartStop);
const startTagFeld = document.getElementById('id_tagStart');
const startStempelFeld = document.getElementById('id_startStempel');
const endeTagFeld = document.getElementById('id_tagEnde');
const endeStempelFeld = document.getElementById('id_EndeStempel');
const millisFeld = document.getElementById('id_myMillis');
const minutenFeld = document.getElementById('id_minutenFeld');

const uhrFeld = document.getElementById('id_uhr');
const datumFeld = document.getElementById("id_datum");
var myH;
var startStempel;

function workStartStop(){
  if(!isWorking){
    let startTag = new Date();
    startStempel = Date.now();
    startTagFeld.innerText = startTag.toLocaleTimeString();
    startStempelFeld.innerText = startStempel;
    // alert(startTime);
    
  } else {
    let EndeTag = new Date();
    let endeStempel = Date.now();
    endeTagFeld.innerText = EndeTag.toLocaleTimeString();
    endeStempelFeld.innerText = endeStempel;
    let myMillis = endeStempel - startStempel;
    millisFeld.innerText = myMillis;
    minutenFeld.innerText = myMillis % 60000;
  }
  isWorking = !isWorking;
}


function tellTime() {
    let now = new Date();
     myH = now.getHours().toString().padStart(2, 0);
    let myM = now.getMinutes().toString().padStart(2, 0);
 //   let myS = now.getSeconds().toString().padStart(2, 0);

    let myDay = now.getDay();
    let myDate = now.getDate().toString().padStart(2, 0);
    let myM_ = now.getMonth()+1; 
    let myMonth = myM_.toString().padStart(2, 0);


    const tage = ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"];
   const monate = ["Januar", "Februar", "März", "April", "Mai", "Juni", "August", "September", "Oktober", "November", "Dezember"];

    let myTime = myH + ":" + myM; // ":" + myS;
    //var myDatum = myDate;
   // let myDatum = myDate + "." + myMonth +".";
    var myDatum = tage[myDay] + " " + myDate + "." + myMonth;
  
   // document.getElementById("tag").innerText = tage[myDay];
    uhrFeld.innerText = myTime;
    datumFeld.innerText = myDatum;
}

setInterval(tellTime, 1000);
