console.log('HElloTime');

var zeitFeld = document.getElementById('id_time');
var datumFeld = document.getElementById('id_datum');
// var zeitFeld = document.getElementById('id_zielQuik');
function init() {
  let now = new Date();
  let myH = now.getHours().toString().padStart(2, 0);
  let myM = now.getMinutes().toString().padStart(2, 0);
  let myDate = now.toLocaleDateString();
  let myMonth = now.getMonth() +1;
  let myTime = myH + ":" + myM; 
  zeitFeld.value = myTime;
  // datumFeld.value = '11.11.2011';
  console.log(myDate);
}

document.addEventListener('DOMContentLoaded', init);

// setInterval(tellTime, 1000);
