var test = document.getElementById("test");
test.addEventListener("click", testfun);

function testfun(){
  window.alert("Dies ist ein Test")
}
const nav = document.getElementById("myNav");
window.onscroll = function() {scrolFun()};

function scrolFun(){
  if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20 ){
    nav.style.top ="0";
  } else {
    nav.style.top = "-50px";
  }
}