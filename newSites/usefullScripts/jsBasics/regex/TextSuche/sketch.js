var s = `<span class="bronze"> Lorem, ipsum dolor sit amet consectetur
 adipisicing elit. Similique, dolorum, nostrum nesciunt harum eum molestias accusantium tempore architecto ipsam laudantium nihil aliquid libero vel nemo delectus dolorem enim eos excepturi aut voluptas. Omnis inventore maiores provident perferendis cupiditate eum, nesciunt iste, aut officia consectetur, soluta blanditiis commodi. Quasi, minus aut. Dicta quas fugit exercitationem earum, veritatis animi? Minima consectetur fuga veniam asperiores dignissimos, cum alias eligendi repellendus temporibus. </span>`;
const redSpan = `<span class="f9423a">`;
const blueSpan = `<span class="c1e90ff">`;

const closeSpan = `</span>`;
const cFeld = document.querySelector('#cFeld');
cFeld.innerHTML = s;
var treffer = document.querySelector('#treffer');


var r;
const suchFeld = document.querySelector('#suchFeld').addEventListener('input', function (e){
  // console.log(e.target.value);
    
    let input = String(e.target.value);
    
    r = new RegExp(`(${input})`, `gm`);
    if (!input == ''){
      let matchResult = s.match(r);// r.exec(s);
      if(!matchResult){
        treffer.textContent = '0';
        cFeld.innerHTML = s;
        // 
      } else { 
        treffer.textContent = String(matchResult.length);
        let result = s.replace(r,`${redSpan}$1${closeSpan}`);
        cFeld.innerHTML = result;
        console.log(r);
    }
  }
});
function replaceIt(){
  console.log("Ich hab den String :" + r);
 s = s.replace(r,`${blueSpan}$1${closeSpan}`);
 cleanUp()
}

const suchBtn = document.querySelector('#suchBtn').addEventListener('click', replaceIt);
const resestBtn = document.querySelector('#resestBtn').addEventListener('click', cleanUp);
//   suchFeld.value = '';
// });
// .addEventListener('change', suchFun);

function cleanUp(){
  treffer.textContent = '0';
  cFeld.innerHTML = s;


}