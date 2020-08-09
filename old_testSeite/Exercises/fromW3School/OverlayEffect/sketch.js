var oBtn = document.getElementById("myBtn");
var over = document.getElementById("overlay");
oBtn.addEventListener("click", on);

function on(){
  overlay.style.display = "block";
}
window.onclick = function off(){
  if(event.target == over){
    over.style.display = "none";
  }
}

