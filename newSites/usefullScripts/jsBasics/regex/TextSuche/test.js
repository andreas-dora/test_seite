var myStack = ['Lorem', 'dolorem'];
var stepList = document.querySelector('.stepList');
var s = `Lorem, ipsum dolor sit amet consectetur
 adipisicing elit. Similique, dolorum, nostrum nesciunt harum eum molestias accusantium tempore architecto ipsam laudantium nihil aliquid libero vel nemo delectus dolorem enim eos excepturi aut voluptas. Omnis inventore maiores provident perferendis cupiditate eum, nesciunt iste, aut officia consectetur, soluta blanditiis commodi. Quasi, minus aut. Dicta quas fugit exercitationem earum, veritatis animi? Minima consectetur fuga veniam asperiores dignissimos, cum alias eligendi repellendus temporibus.`;
const redSpan = `<span class="f9423a">`;
const blueSpan = `<span class="c1e90ff">`;
const closeSpan = `</span>`;
var chacka;
var preview; // Vorschau Regex
var placeHolder;
const cFeld = document.querySelector('#cFeld');
// cFeld.innerHTML = s;
var treffer = document.querySelector('#treffer');
var suche;
var chacka = 0;
var testWert = 0;
const suchBtn = document.querySelector('#suchBtn');
const testBtn = document.querySelector('#testBtn');
const suchFeld = document.querySelector('#suchFeld');

function init(){




  for(let i = 0; i< myStack.length; i++){
    let suche = myStack[i];
    let rStep = new RegExp(`(${suche})`,`g`);
    s = s.replace(rStep,`${blueSpan}PENIS${closeSpan}`);
    let listItem = document.createElement('li');
    let itemNode = document.createTextNode(`${suche}`);
    listItem.appendChild(itemNode);
    stepList.appendChild(listItem);
  }

  suchBtn.addEventListener('click', ersetzen);
  testBtn.addEventListener('click', plus);

  

  // if (!suche == ''){
  //   console.log(suche);
  // }
  // console.log(suche);

 

  cFeld.innerHTML = s;
  
}
function ersetzen(){
  console.log('nix da')
  chacka +=1;
  console.log(chacka);
};
// suchFeld.addEventListener('input', function (e){
//   suche = String(e.target.value);
  

//   });
  function plus(){
    testWert += 1;
    console.log('testWert: ' +testWert );
  }

// myStack.push('chaka');
// console.log(myStack.length);
// let pSuche;

// console.log('Aus der Mainfunction' + pSuche);



// let pRex = new RegExp(`(${pSuche})`,`g`);
// if (!pSuche == ''){
//   let matchResult = s.match(pRex);
//   if(!matchResult){
//     treffer.textContent = '0';
//   } else {
//     treffer.textContent = matchResult;
//   }
  
//   s = s.replace(pRex,`${redSpan}$1${closeSpan}`);
// } else {
//   console.log('Das Suchfeld ist leer');
// }
// var pRex = new RegExp(`(${pSuche})`,`g`);



document.addEventListener('DOMContentLoaded', init);
