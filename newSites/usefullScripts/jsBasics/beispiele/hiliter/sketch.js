// var rex =/\+?\d{2}\s\d{2}\s\d{5,7}/g
// var text = "Eine Telefonnummer: 49 30 1234567 und die Nebenstelle: 49 30 98798798";
// text = text.replace(rex, '<Telefonnummer durch überangedne Programierkunst verborgen>')
// console.log(text);
var output = document.querySelector('#output');
var rex = /</;
var workbench;
var code = document.querySelector('.myCode');
workbench= `<form action="">
<label for="output">Output</label><br>
<textarea name="" id="codeBox" cols="30" rows="10"></textarea>
<button class="btn">Copy</button>
</form>; `
workbench = workbench.replace(/</g, '&lt;');
workbench = workbench.replace(/>/g,'&gt;');
workbench = workbench.replace(/(\s[a-z]{2,10})=/g,'<span class="atribut">$1</span>=');//Artibute
workbench = workbench.replace(/>="(.*?)"/g,'>=<span class="val">"$1"</span>');//Values
workbench = workbench.replace(/&gt;(.*?)&lt;/g,'&gt;<span class="text">$1</span>&lt;');//Values
workbench = workbench.replace(/\/(\w+)&gt;/g,'/<span class="tag">$1</span>&gt');//Values
workbench = workbench.replace(/&lt;(\w+)/g,'&lt;<span class="tag">$1</span>');//Values
output.value = workbench;
code.innerHTML = workbench;
// console.log(typeof(workbench));  

// console.log(code);
// console.log(rex.test(code));

// var inbox = document.querySelector('#inbox');


// start.addEventListener('click', checkFun);
// let myNode = document.createTextNode('nknkkn');

// function checkFun(){
//   if(firstCheck.test(inbox.value)){
//     let workString = inbox.value;

//     console.log(workString);
//   } else {
//     console.log('NIX');
//   }
// }



  // if(inbox.value){
  //   console.log('cool');

  // } else {
  //   console.log('muschi');
  // }

