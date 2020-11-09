;

var code = document.querySelector('.myCode');
// var arrayL = document.querySelector('arrayL');
// var arrayI = document.querySelector('arrayI');

// s.split(/[,\s/]+/);




  


//  var output =document.querySelector('#output');

var s = `const startBtn = document.querySelector('#start');
const plusBtn = document.querySelector('#plus');
const minusBtn = document.querySelector('#minus');
var sek = document.querySelector('#sekunden'); 
var isRunning = false;
var startSeconds = 300;  // startSeconds 

  }
  `;
  // const ziel = `startTime`;

//  const r = /(?<=var )([a-z]+\w+\b)/g;
//  var mResult = s.match(r);
//  console.log(mResult);
var code = document.querySelector('.myCode');



// s=s.split(/(\'.*?\#)/);


 const cVTag = `<span class="code__v">`;
 const cStrTag = `<span class="code__str">`;
 const endTag = `</span>`;
var r1 = /(?<=var )([a-z]+\w+\b)/g;
var matchResults = s.match(r1);
 for(let i = 0; i < matchResults.length; i++){
   console.log(matchResults[i]);
  let r2 = new RegExp (`${matchResults[i]}`, `g`);
  console.log(r2);
  s = s.replace(r2, `${cVTag}${matchResults[i]}${endTag}`);
 }


 s = s.replace(/['"]+(.*?)['"]+/g, `'${cVTag}$1${endTag}'`);

  
  code.innerHTML = s;
  var aL = document.querySelector('#arrayL');
var aI = document.querySelector('#arrayI');
  aL.textContent = matchResults.length;
  aI.textContent = matchResults;
  
