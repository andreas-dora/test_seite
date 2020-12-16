const overlay = document.getElementById('navOverlay');
const openBtn = document.getElementById('id_menu-btn');
openBtn.addEventListener('click', openFun);
const closeBtn = document.getElementById('id_closeBtn').addEventListener('click', closeFun);

function openFun(){
  overlay.style.height = "100%";
}

function closeFun(){
  overlay.style.height = "0%";
}