console.log('Ich bin hier');
var katzen = 0;
const displayMain = document.querySelector('#displayMain');
const displayHaus =document.querySelector('#displayHaus');
const displayA1 =document.querySelector('#displayA1');
const btnHaus =document.querySelector('#btnHaus');
const btnA1 =document.querySelector('#btnA1');

function init(){
  btnHaus.addEventListener('click', hausBtnFun);
  btnA1.addEventListener('click', aFun);

  function hausBtnFun(){
    katzen+=1;
    console.log('Haus Fun' + katzen);
  }
    function aFun(){
      katzen+=1;
      console.log('Apartment Fun' + katzen);
      displayA1.textContent = 'Katzen' + katzen;
    }
    displayHaus.textContent = 'Katzen' + katzen;
    displayMain.textContent = 'Katzen' + katzen;
    // displayA1.textContent = 'Katzen' + katzen;

  }




document.addEventListener('DOMContentLoaded', init);
console.log('Letzte Zeile');