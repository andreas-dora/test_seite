var test = document.getElementById("test");
test.addEventListener("click", testfun);

function testfun(){
  window.alert("Dies ist ein Test")
}

window.onscroll = function() {stickFunction()};
var nav = document.getElementById("myNav");

var sticky = nav.offsetTop;

function stickFunction(){
  if(window.pageYOffset >=sticky){
    nav.classList.add("sticky")
  } else {
    nav.classList.remove("sticky");
  }
}