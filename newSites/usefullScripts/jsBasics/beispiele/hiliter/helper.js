var startZeit;
var endZeit;
var testforhtml = /<(.*?)>/g;
var testForJs = /var|let/g
// const feedback = document.querySelector('#feedback');
// const copyBtn = document.querySelector('#copy').addEventListener('click', copyFun);
// const startBtn = document.querySelector('#start').addEventListener('click', checkFun);
// var inbox = document.querySelector('#inbox')
 var output =document.querySelector('#output');
var code = document.querySelector('.myCode');

var workbench = `const feedback = document.querySelector('#feedback');
const copyBtn = document.querySelector('#copy').addEventListener('click', copyFun);
const startBtn = document.querySelector('#start').addEventListener("click", checkFun);
let inbox = document.querySelector('#inbox')
var output =document.querySelector('#output');
var code = document.querySelector('.myCode');
// var workbench;
var myNumber = 9237;
var tab6 = 222;
function checkFun(){
  startTime = Date.now();`;

  workbench = workbench.replace(/</g, '&lt;');
  workbench = workbench.replace(/>/g,'&gt;');
  // console.log(workbench.valueOf);
  // var zCount = workbench.match(/(.)/gms);
  // console.log(zCount.length);

  workbench = workbench.replace(/(\w+)\s{2,}/gm,'$1 ');//whitespace
  workbench = workbench.replace(/(\w+)\s{2,}/gm,'$1 ');//whitespac
  workbench = workbench.replace(/'(.*?)'/gms, `<span class="code__string">'$1'</span>`);
  workbench = workbench.replace(/\/{2}(.*?)\n/gms, '<span class="code__comment">$1</span>\n');
  workbench = workbench.replace(/\/{2}(.*?)\n/gms, '<span class="code__comment">$1</span>\n');
  // workbench = workbench.replace(/DOCTYPE/,'<span class="code__dType">DOCTYPE</span>');
  

  //comment
  // workbench = workbench.replace(/(&lt;!--(.*?)--&gt;)/gms,'<span class="code__comment">$1</span>');

  // workbench = workbench.replace(/(\s[a-z]{2,10})=/g,'<span class="code__variable">$1</span>=');//Artibute
  // workbench = workbench.replace(/>="(.*?)"/g,'>=<span class="code__string">"$1"</span>');//Values
  // workbench = workbench.replace(/&gt;(.*?)&lt;/gs,'&gt;<span class="code__text">$1</span>&lt;');//plain text
  // workbench = workbench.replace(/\/(\w+)&gt;/g,'/<span class="code__dType">$1</span>&gt');//tag
  // workbench = workbench.replace(/&lt;(\w+)/g,'&lt;<span class="code__dType">$1</span>');//tag
  


  output.value = workbench;
  code.innerHTML = workbench;

// function checkFun(){
//   if(testforhtml.test(inbox.value)){
//     hiliteHtml();
//   } else if(testForJs.test(inbox.value)){
//     liteJS();
//   }
//   else {
//     console.log('NIX');
//   }
// }

// function hiliteHtml (){
//   startZeit = Date.now();
//   let workbench;
//   workbench = String(inbox.value);
//   workbench = workbench.replace(/</g, '&lt;');
//   workbench = workbench.replace(/>/g,'&gt;');
//   console.log(workbench.valueOf);

//   workbench = workbench.replace(/(\s[a-z]{2,10})=/g,'<span class="atribut">$1</span>=');//Artibute
//   workbench = workbench.replace(/>="(.*?)"/g,'>=<span class="val">"$1"</span>');//Values
//   workbench = workbench.replace(/&gt;(.*?)&lt;/g,'&gt;<span class="text">$1</span>&lt;');//Values
//   workbench = workbench.replace(/\/(\w+)&gt;/g,'/<span class="tag">$1</span>&gt');//Values
//   workbench = workbench.replace(/&lt;(\w+)/g,'&lt;<span class="tag">$1</span>');//Values
//   output.value = workbench;
//   code.innerHTML = workbench;
//   endZeit = Date.now() - startZeit;
//   let timeNode = document.createTextNode('Arbeitszeit: ' + endZeit + ' Millis');
  
//   // let newLi = document.createElement(li, [timeNode]);
//   let eintrag = document.createElement('li');
//   eintrag.appendChild(timeNode);
//   feedback.appendChild(eintrag);


//   console.log(endZeit);
// }

// function liteJS(){
//   alert('JS Alert');
// }


// function copyFun() {

//     output.setSelectionRange(0, 99999); /*For mobile devices*/
//     document.execCommand("copy");
//     alert("Copied the text: " + output.value);
//   }