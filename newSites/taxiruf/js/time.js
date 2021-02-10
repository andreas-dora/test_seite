console.log('HElloTime');

var zeitFeld = document.getElementById('id_time');
// var zeitFeld = document.getElementById('id_zielQuik');
zeitFeld.value = "Hello";
function init() {
  let now = new Date();
  let myH = now.getHours().toString().padStart(2, 0);
  let myM = now.getMinutes().toString().padStart(2, 0);

  let myTime = myH + ":" + myM; 
  zeitFeld.value = myTime;

}

document.addEventListener('DOMContentLoaded', init);

// setInterval(tellTime, 1000);
