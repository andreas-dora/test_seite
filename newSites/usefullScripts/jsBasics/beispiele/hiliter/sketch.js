var startZeit;
var endZeit;
var testforhtml = /<(.*?)>/;
const feedback = document.querySelector('#feedback');
const copyBtn = document.querySelector('#copy').addEventListener('click', copyFun);
const startBtn = document.querySelector('#start').addEventListener('click', checkFun);
var inbox = document.querySelector('#inbox')
var output =document.querySelector('#output');
var code = document.querySelector('.myCode');
// workbench= `<form action="">
// <label for="output">Output</label><br>
// <textarea name="" id="codeBox" cols="30" rows="10"></textarea>
// <button class="btn">Copy</button>
// </form>; `
// workbench = workbench.replace(/</g, '&lt;');
// workbench = workbench.replace(/>/g,'&gt;');
// workbench = workbench.replace(/(\s[a-z]{2,10})=/g,'<span class="atribut">$1</span>=');//Artibute
// workbench = workbench.replace(/>="(.*?)"/g,'>=<span class="val">"$1"</span>');//Values
// workbench = workbench.replace(/&gt;(.*?)&lt;/g,'&gt;<span class="text">$1</span>&lt;');//Values
// workbench = workbench.replace(/\/(\w+)&gt;/g,'/<span class="tag">$1</span>&gt');//Values
// workbench = workbench.replace(/&lt;(\w+)/g,'&lt;<span class="tag">$1</span>');//Values
// output.value = workbench;
// code.innerHTML = workbench;
// console.log(typeof(workbench));  

// console.log(code);
// console.log(rex.test(code));

// var inbox = document.querySelector('#inbox');


// start.addEventListener('click', checkFun);
// let myNode = document.createTextNode('nknkkn');

function checkFun(){
  if(testforhtml.test(inbox.value)){
    hiliteHtml();
  } else {
    console.log('NIX');
  }
}

function hiliteHtml (){
  startZeit = Date.now();
  let workbench;
  workbench = String(inbox.value);
  workbench = workbench.replace(/</g, '&lt;');
  workbench = workbench.replace(/>/g,'&gt;');
  console.log(workbench.valueOf);

  

  // workbench = workbench.replace(/</g, '&lt;');
  // workbench = workbench.replace(/>/g,'&gt;');
  workbench = workbench.replace(/(\s[a-z]{2,10})=/g,'<span class="atribut">$1</span>=');//Artibute
  workbench = workbench.replace(/>="(.*?)"/g,'>=<span class="val">"$1"</span>');//Values
  workbench = workbench.replace(/&gt;(.*?)&lt;/g,'&gt;<span class="text">$1</span>&lt;');//Values
  workbench = workbench.replace(/\/(\w+)&gt;/g,'/<span class="tag">$1</span>&gt');//Values
  workbench = workbench.replace(/&lt;(\w+)/g,'&lt;<span class="tag">$1</span>');//Values
  output.value = workbench;
  code.innerHTML = workbench;
  endZeit = Date.now() - startZeit;
  let timeNode = document.createTextNode('Arbeitszeit: ' + endZeit + ' Millis');
  
  // let newLi = document.createElement(li, [timeNode]);
  let eintrag = document.createElement('li');
  eintrag.appendChild(timeNode);
  feedback.appendChild(eintrag);


  // console.log(Number(endZeit) - Number(startZeit));
  console.log(endZeit);
}

function copyFun() {

    output.setSelectionRange(0, 99999); /*For mobile devices*/
    document.execCommand("copy");
    alert("Copied the text: " + output.value);
  }