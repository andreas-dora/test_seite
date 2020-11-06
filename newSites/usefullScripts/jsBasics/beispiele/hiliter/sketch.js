var inbox = document.querySelector('#inbox');
var codeBox = document.querySelector('.codeBox');
const start = document.getElementById('start');
var firstCheck = /<(.*?)>/;

start.addEventListener('click', checkFun);
let myNode = document.createTextNode('nknkkn');
  // codeBox.appendChild(myNode);
  // console.log(myNode.nodeValue);

function checkFun(){
  
  if(firstCheck.test(inbox.value)){
    let workString = inbox.value;

    console.log(workString);
    // codeBox.value = inBox.value;
  } else {
    console.log('NIX');
  }

  // if(inbox.value){
  //   console.log('cool');

  // } else {
  //   console.log('muschi');
  // }


  
}