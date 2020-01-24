var test = document.getElementById("test");
test.addEventListener("click", testfun);

function testfun(){
  window.alert("Dies ist ein Test")
}
const nav = document.getElementById("myNav");
window.onscroll = function() {scrolFun()};

function scrolFun(){
  if(document.body.scrollTop > 310 || document.documentElement.scrollTop > 310 ){
    nav.style.bottom ="0";
  } else {
    nav.style.bottom = "-60px";
  }
}