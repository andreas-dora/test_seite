const nurObjekt = document.getElementById('id_nurObject');
const getTimeFeld = document.getElementById('id_getTime');

var jetzt = new Date();
nurObjekt.innerText = jetzt;
getTimeFeld.innerText = jetzt.getTime();


document.getElementById('id_localeTimeString').innerText = jetzt.toLocaleTimeString();

document.getElementById('id_timeString').innerText = jetzt.toTimeString();
document.getElementById('id_dateString').innerText = jetzt.toDateString();
document.getElementById('id_isoString').innerText = jetzt.toISOString();
document.getElementById('id_toJSON').innerText = jetzt.toJSON();
document.getElementById('id_getUTCYear').innerText = jetzt.getUTCMonth();
console.log(jetzt.toISOString());
console.log(jetzt.toJSON());

var stampTime = new Date();
stampTime.setTime(1611223475646);

var stamp = 1611223475646;
console.log(stampTime);
console.log(stampTime.toLocaleTimeString());
// console.log(a);



const uhrFeld = document.getElementById('id_uhr');
const datumFeld = document.getElementById("id_datum");

function tellTime() {
  let now = new Date();
  let myH = now.getHours().toString().padStart(2, 0);
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
