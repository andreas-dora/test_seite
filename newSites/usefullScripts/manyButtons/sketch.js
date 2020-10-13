// console.log("Running");
// const test = document.getElementById('test');
// test.addEventListener('click', testFun);
// function testFun(){
//   alert("PEnis");
// }
// const wrap = documet.querySelector('#wrap');

const actionBox =document.querySelector('#actionBox');
const dirGrp = document.querySelector('#flex_direction');
const wrapGrp = document.querySelector('#flex_wrap');
const colorGrp = document.querySelector('#align_items');
const contentAlignGrp = document.querySelector('#align_content');
const justifyContentGrp = document.querySelector('#justify_content');

dirGrp.addEventListener('click', dirFun, false);
colorGrp.addEventListener('click', alignItemsFun, false);
contentAlignGrp.addEventListener('click', alignContentFun, false);
justifyContentGrp.addEventListener('click', justifyContentFun, false);
wrapGrp.addEventListener('click', wrapFun, false);


function dirFun(e){
  if(e.target !== e.currentTarget){
    var itemValue = e.target.id;
    actionBox.style.flexDirection = itemValue;
    document.getElementById('direct').innerText = itemValue;  
  // alert("penis");
  }
}
function alignItemsFun(e){
  if(e.target !== e.currentTarget){
    var itemValue = e.target.id;
    actionBox.style.alignItems = itemValue;
    document.getElementById('aItems').innerText = itemValue;  
  // alert("penis");
  }
}
function alignContentFun(e){
  if(e.target !== e.currentTarget){
    var itemValue = e.target.id;
    actionBox.style.alignContent = itemValue;
    document.getElementById('alignContent').innerText = itemValue;
  }
}
function justifyContentFun(e){
  if(e.target !== e.currentTarget){
    var alignItemValue = e.target.id;
    actionBox.style.justifyContent = alignItemValue;
    document.getElementById('jContent').innerText = alignItemValue;
  }
}
function wrapFun(e){
  if(e.target !== e.currentTarget){
    var alignItemValue = e.target.id;
    actionBox.style.flexWrap = alignItemValue;
    wrap= document.getElementById('wrap');
    wrap.innerText = alignItemValue;
    // alert("PEnis" + alignItemValue);
  }
}

