const uhrFeld = document.getElementById('id_uhr');
const datumFeld = document.getElementById("id_datum");
var myH;

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