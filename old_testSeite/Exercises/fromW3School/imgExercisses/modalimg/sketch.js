var modal = document.getElementById("myModal");
var img = document.getElementById("myImg");
var modalimg = document.getElementById("img01");
var captionText=document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalimg.scr = this.src;
  captionText.innerHTML = this.alt;
}

var span = document.getElementsByClassName("close")[0];
span.onclick =function(){
  modal.style.display = "none";
}