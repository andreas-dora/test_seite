// var cd_mth = ['getElementById', 'addEventListener', 'querySelectorAll', 'querySelector', 'log', 'replace', 'alert', 'setInterval'];
// var cd_dt = ['var', 'let', 'const', 'function', 'this', 'new' ];
// var cd_obj = ['Object', 'Number', 'String', 'Boolean', ];
// var lila = ['if', 'else if', 'else', 'return' ];

// var rVar = [ 
//   /(?<=function )([a-z]+\b)/g,
//   /(?<=class )([a-z]+\b)/g,
//   /(?<=var )([a-z]+\b)/g,
//   /(?<=const )([a-z]+\b)/g,
//   /(?<=let )([a-z]+\b)/g
// ];

// s.split(/[,\s/]+/);

var code = document.querySelector('.myCode');
// var results []

// var getV = r.[0].exec(s);
// while(result !=null){
  
// }


// s.split(/[,\s/]+/);




  


//  var output =document.querySelector('#output');

var s = `var startTime;
var workTime;
var testforhtml = /<(.*?)>/g;
var testForJs = /var|let/g
const feedback = document.querySelector('#feedback');
const copyBtn = document.querySelector('#copy').addEventListener('click', copyFun);
const startBtn = document.querySelector('#start').addEventListener('click', checkFun);
var inbox = document.querySelector('#inbox')
var output =document.querySelector('#output');
var code = document.querySelector('.myCode');

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
}`;

var code = document.querySelector('.myCode');
var aL = document.querySelector('#arrayL');
var aI = document.querySelector('#arrayI');

const ziel = `startTime`;
const cVtag = `<span class="code__v">`;
const endTag = `</span>`;
  s = s.replace(/</g, '&lt;');
  s = s.replace(/>/g,'&gt;');

//  const r = /(?<=var )([a-z]+\w+\b)/g;
 var mResult = s.match(r);
 console.log(mResult);

//  var r1 = /startTime/g;
// var st = `startTime`;
var dt = [`const`, `var`, `let`];
var r = new RegExp (`${dt[0]}`);

s = s.replace(r1 `${cVtag}${dt[0]}${endTag}`);
// s = s.replace(/startTime/g, `${cBtag}DINGDONG${endTag}`);
//  for(i=0; i<mResult.lenght; i++){
//   s = s.replace(/mResult[i]/g,'<span class="code__v">DINGDONG</span>');
//  }

  // workbench = workbench.replace(/(\w+)\s{2,}/gm,'$1 ');//whitespace
  // workbench = workbench.replace(/(\w+)\s{2,}/gm,'$1 ');//whitespac
  // workbench = workbench.replace(/constructor\((\w+)\b/g,'constructor(<span class="code__variable">$1</span>');
  // workbench = workbench.replace(/'(.*?)'/gms, `<span class="code__string">'$1'</span>`);
  // workbench = workbench.replace(/\/{2}(.*?)\n/gms, '<span class="code__comment">$1</span>\n');
  // workbench = workbench.replace(/\/{2}(.*?)\n/gms, '<span class="code__comment">$1</span>\n');
  
  code.innerHTML = s;
  aL.textContent = mResult.length;
  aI.textContent = mResult;
  //comment
  // workbench = workbench.replace(/(&lt;!--(.*?)--&gt;)/gms,'<span class="code__comment">$1</span>');


  // output.value = workbench;
  // code.innerHTML = workbench;


