var modal = document.getElementById("myModal");
var bModal = document.getElementById("modalContent");

var btn = document.getElementById("myBtn");
// var span = document.getElementById("close");
btn.onclick = function(){
  modal.style.display = "block";
  setTimeout(function(){ 
    modal.style.display = "none";
    // alert("NONO"); 

  }, 3000);
}



