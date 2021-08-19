const normalTarif = 54;
const nachtTarif = 51;
const zeitFeld = document.getElementById('id_time');
const datumFeld = document.getElementById('id_date');
var txForm = document.getElementById('id_txForm');
const mapBtn = document.getElementById('id_mapBtn');
var myH;

txForm.addEventListener('submit', submitFun);
mapBtn.addEventListener('click', getKm);
// var zeitFeld = document.getElementById('id_zielQuik');
function init() {
  let now = new Date();
 myH = now.getHours(); //.toString().padStart(2, 0);
  let myM = now.getMinutes().toString().padStart(2, 0);
  let myDate = now.toLocaleDateString();
  let myMonth = now.getMonth() +1;
  let myTime = myH.toString().padStart(2, 0) + ":" + myM; 
  zeitFeld.innerText = myTime;
  datumFeld.innerText = myDate;
  console.log(myTime);
}
function submitFun(e){
    e.preventDefault();
}


function getKm(){
    let tarif = 0;
    if((myH < 6) || (myH > 21)){
        tarif = nachtTarif;
    }
    else{
        tarif = normalTarif;
    }
    var startA = txForm.startCity.value + ", " + txForm.startStr.value;
    console.log(startA);
    let zielA = txForm.zielCity.value + ", " + txForm.zielStr.value; 
    console.log(zielA);
    console.log(myH);
    console.log(tarif);
}

document.addEventListener('DOMContentLoaded', init);