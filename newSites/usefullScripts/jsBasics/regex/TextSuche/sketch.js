var s1 = `Lorem, ipsum dolor sit amet consectetur
 adipisicing elit. Similique, dolorum, nostrum nesciunt harum eum molestias accusantium tempore architecto ipsam laudantium nihil aliquid libero vel nemo delectus dolorem enim eos excepturi aut voluptas. Omnis inventore maiores provident perferendis cupiditate eum, nesciunt iste, aut officia consectetur, soluta blanditiis commodi. Quasi, minus aut. Dicta quas fugit exercitationem earum, veritatis animi? Minima consectetur fuga veniam asperiores dignissimos, cum alias eligendi repellendus temporibus.`;
const redSpan = `<span class="red">`;
const closeSpan = `</span>`;
const cFeld = document.querySelector('#cFeld');
cFeld.innerHTML = s1;
const treffer = document.querySelector('#treffer');

const suchFeld = document.querySelector('#suchFeld').addEventListener('input', function (e){
  console.log(e.target.value);
  // if(!suchFeld.value == ''){
  //   let suchBegriff = suchFeld.value;
  //   console.log(suchBegriff);
  // };
});
const suchBtn = document.querySelector('#suchBtn').addEventListener('click', suchFun);
const resestBtn = document.querySelector('#resestBtn').addEventListener('click',  () => {
  // console.log('dingdong');
  suchFeld.value = '';
});
// .addEventListener('change', suchFun);

function suchFun(){

  console.log('bingo');
  // console.log(suchFeld.value);
  // let suchBegriff = String(suchFeld.value);
  // if(!suchBegriff == ''){
  //   console.log(suchBegriff);
    
  // }
  
  // if(!suchFeld.value == ''){
  //   let suchBegriff = suchFeld.value;
  //   console.log(suchBegriff);
  // }

  // var r = new RegExp (`${suchBegriff}`,`g`);
  //  let result = r.exec(s1);
  // console.log(result);

}