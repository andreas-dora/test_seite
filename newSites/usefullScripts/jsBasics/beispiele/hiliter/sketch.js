var inbox = document.querySelector('#inbox');
const start = document.getElementById('start');
var firstCheck = /<(.*?)>/;
// const testString = '"<button id="row-reverse">row-rev.</button>"';
// const fString = "Peter";
start.addEventListener('click', checkFun);
var workString;
function checkFun(){
  if(firstCheck.test(inbox.value)){
    console.log('BUHA');
  } else {
    console.log('NIX');
  }

  // if(inbox.value){
  //   console.log('cool');

  // } else {
  //   console.log('muschi');
  // }


  
}