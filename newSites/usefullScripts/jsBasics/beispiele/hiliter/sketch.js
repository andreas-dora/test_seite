var startTime;
var workTime;
var testforhtml = /<(.*?)>/g;
var testForJs = /var|let/g
const feedback = document.querySelector('#feedback');
const copyBtn = document.querySelector('#copy').addEventListener('click', copyFun);
const startBtn = document.querySelector('#start').addEventListener('click', checkFun);
var inbox = document.querySelector('#inbox')
var output =document.querySelector('#output');
var code = document.querySelector('.myCode');

const cssArea = document.getElementById('id_css');
const cssBtn = document.getElementById('id_copyCss');
cssBtn.addEventListener('click', copyCss);
const resetBtn = document.getElementById('id_reset').addEventListener('click', () =>{
  inbox.value = '';
});

function copyCss(){
  cssArea.select();
  cssArea.setSelectionRange(0, 99999); /*For mobile devices*/
  document.execCommand("copy");  alert("Copied the text: " + cssArea.value);
}

function checkFun(){
  startTime = Date.now();

  if(testforhtml.test(inbox.value)){
    hiliteHtml();
  } else if(testForJs.test(inbox.value)){
    liteJS();
  }
  else {
    console.log('NIX');
  }
}

function hiliteHtml (){

  let workbench;
  workbench = String(inbox.value);
  workbench = workbench.replace(/</g, '&lt;');
  workbench = workbench.replace(/>/g,'&gt;');
  let charCount = workbench.match(/(.)/gms)
  let charNote = document.createTextNode('Empfangen: ' +charCount.length + ' HTML');
  
  let listItem = document.createElement('li');
  listItem.appendChild(charNote);
  feedback.appendChild(listItem);
  

  // workbench = workbench.replace(/</g, '&lt;');
  // workbench = workbench.replace(/>/g,'&gt;');
  workbench = workbench.replace(/(\w+)\s{2,}/gm,'$1 ')
  workbench = workbench.replace(/(\s[a-z]{2,10})=/g,'<span class="code__variable">$1</span>=');//Artibute
  workbench = workbench.replace(/>="(.*?)"/g,'>=<span class="code__string">"$1"</span>');//Values
  workbench = workbench.replace(/&gt;(.*?)&lt;/g,'&gt;<span class="code__text">$1</span>&lt;');//plain text
  workbench = workbench.replace(/\/(\w+)&gt;/g,'/<span class="code__dType">$1</span>&gt');//tag
  workbench = workbench.replace(/&lt;(\w+)/g,'&lt;<span class="code__dType">$1</span>');//tag
  output.value = workbench;
  code.innerHTML = workbench;
  let charCount2 = workbench.match(/(.)/gms)
  let charNote2 = document.createTextNode('Ausgabe: ' +charCount2.length);
  let listItem2 = document.createElement('li');
  listItem2.appendChild(charNote2);
  feedback.appendChild(listItem2);
  workTime = Date.now() - startTime;
  timeNode = document.createTextNode('Arbeitszeit: ' + workTime + ' Millis');
  let listItem3 = document.createElement('li');
  listItem3.appendChild(timeNode);
  feedback.appendChild(listItem3);
  console.log(workTime);
}

function liteJS(){
  alert('JS Alert');
}


function copyFun() {
  output.select();
    output.setSelectionRange(0, 99999); /*For mobile devices*/
    document.execCommand("copy");
    alert("Copied the text: " + output.value);
  }