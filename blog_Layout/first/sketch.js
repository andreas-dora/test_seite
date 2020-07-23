
const modal = document.getElementById("id_modal_1");
const img = document.getElementById("id_img_001");
const modalImg = document.getElementById("img_1")
const captionText =document.getElementById("id_caption_1");
img.onclick =function () {
  // alert("PFUI,PFUI");
  modal.style.display = "block";
  modalImg.src =this.src;
  captionText = this.textContent;
};
var span = document.getElementsByClassName("close")[0];
span.onclick = function (){
  modal.style.display = "none";
};
function navBar() {
  const navB = document.getElementById("id_topnav");
  if(navB.className === "topnav"){
    navB.className += " responsive";
  } else {
    navB.className = "topnav";
  }
}

