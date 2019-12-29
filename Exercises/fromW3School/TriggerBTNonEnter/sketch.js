var input = document.getElementById("myIn");
var btn = document.getElementById("btn");

btn.addEventListener("click", functionOne);
input.addEventListener("keyup", function(event){
  if(event.keyCode === 13){
    event.preventDefault();
    btn.click();
  }
});

function functionOne(){
  window.alert(input.value);
}