var stack = [];
var steps = document.querySelector('.steps');
var s = `Lorem, ipsum dolor sit amet consectetur
 adipisicing elit. Similique, dolorum, nostrum nesciunt harum eum molestias accusantium tempore architecto ipsam laudantium nihil aliquid libero vel nemo delectus dolorem enim eos excepturi aut voluptas. Omnis inventore maiores provident perferendis cupiditate eum, nesciunt iste, aut officia consectetur, soluta blanditiis commodi. Quasi, minus aut. Dicta quas fugit exercitationem earum, veritatis animi? Minima consectetur fuga veniam asperiores dignissimos, cum alias eligendi repellendus temporibus.`;
const redSpan = `<span class="f9423a">`;
const blueSpan = `<span class="c1e90ff">`;

const closeSpan = `</span>`;

var preview; // Vorschau Regex
var placeHolder;
const cFeld = document.querySelector('#cFeld');
cFeld.innerHTML = s;
var treffer = document.querySelector('#treffer');




// const suchBtn = document.querySelector('#suchBtn'.addEventListener('click', replaceIt);
// const resestBtn = document.querySelector('#resestBtn').addEventListener('click', cleanUp);
const suchFeld = document.querySelector('#suchFeld').addEventListener('input', function (e){
    let input = String(e.target.value);
    
    let r = new RegExp(`(${input})`, `gm`);
    let p = `${redSpan}$1${closeSpan}`;
    if (!input == ''){
      let matchResult = s.match(r);
      if(!matchResult){
        // treffer.textContent = '0';
        // cFeld.innerHTML = s;
        cleanUp();
      } else { 
        // let workS = s;
        treffer.textContent = String(matchResult.length);
        preview = r;
        placeHolder = String(p);
        // let result = workS.replace(r,`${redSpan}$1${closeSpan}`);
        // cFeld.innerHTML = result;
        // console.log(r);
    }
  }
});

s = s.replace(/(Lorem)/g, `${blueSpan}$1${closeSpan}`);
// s = s.replace(preview,`XXXXXXXXX`);
s = s.replace(preview, placeHolder);

console.log(preview);


function replaceIt(){
//   let myS = s;
//   console.log("Ich hab den String :" + r);
//  let result = myS.replace(r,`${blueSpan}$1${closeSpan}`);
 stack.push(preview);
 console.log(stack.length);
//  cFeld.innerHTML = s;
//  treffer.textContent = '0';
  // let eintrag = document.createElement('li');
  // let textNote = document.createTextNode(stackStep[i]);
  // eintrag.appendChild(textNote);
  // steps.appendChild(eintrag);
}

// for(let i = 0; i<stack.length; i++){
//   let eintrag = document.createElement('li');
//   let textNote = document.createTextNode(stackStep[i]);
//   eintrag.appendChild(textNote);
//   steps.appendChild(eintrag);
// }


//   suchFeld.value = '';
// });
// .addEventListener('change', suchFun);

// function cleanUp(){
//   treffer.textContent = '0';
//   cFeld.innerHTML = s;
// }


cFeld.innerHTML = s;


