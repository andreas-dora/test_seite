var myStr = document.getElementById("myStr").innerText;
var such = document.getElementById("such");

var btn1 = document.getElementById("do1");
btn1.addEventListener("click", functionOne);

function functionOne(){
  x = myStr.replace("und", "Fischgesicht");
  window.alert( x);
}