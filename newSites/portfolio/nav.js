// const overlay = document.getElementById('id_pannel');
const overlay = document.querySelector('.pannelBox');
const openBtn = document.getElementById('id_menu-btn');
openBtn.addEventListener('click', openFun);
const closeBtn = document.getElementById('id_closeBtn').addEventListener('click', closeFun);

var pLink = document.querySelectorAll('.pannelLink');

function openFun(){
  overlay.classList.toggle('pannelOpen');
  if(openBtn.innerHTML === 'Menu'){
    openBtn.innerHTML = 'close';
  } else {
  openBtn.innerHTML = 'Menu';
  }
}

function closeFun(){
  overlay.style.height = "0%";
}