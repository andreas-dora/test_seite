console.log('Hello Inputs');

const dateInput = document.getElementById('id_date');
const dtlInput = document.getElementById('id_localDateTime');


function init(){
  let jetzt = new Date();
  console.log(jetzt);
  dateInput.value=jetzt;
  dtlInput.value=jetzt.toLocaleString();
}

document.addEventListener('DOMContentLoaded', init);