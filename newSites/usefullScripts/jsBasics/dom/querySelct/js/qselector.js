function addBox(){
  var temp = document.getElementById('temp').content;
  var copy = document.importNode(temp,true);
  document.getElementById('app').appendChild(copy);
}
function deleftFun(e){
  if(e.target.classList.contains('del')){
    // console.log(e.target.parentElement);
    e.target.parentElement.remove();
  }
}
document.querySelector('#addBtn').addEventListener('click', addBox);
document.querySelector('#app').addEventListener('click', deleftFun);