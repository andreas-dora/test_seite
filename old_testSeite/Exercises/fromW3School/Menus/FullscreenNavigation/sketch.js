const mBtn = document.getElementById("id_menuBtn");
mBtn.addEventListener("click", navFunction);

function navFunction(){
  document.getElementById("id_myNav").style.height = "100%";
}
function closeNav() {
  document.getElementById("id_myNav").style.height = "0%";
}