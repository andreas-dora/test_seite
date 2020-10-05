// const test = document.getElementById("test");
// test.addEventListener("click", functionOne);

// function functionOne(){
//   alert("PENIS");
// }

var accord = document.getElementsByClassName("accordion__btn");
var i;


for (i = 0; i < accord.length; i++) {
  accord[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    // panel.style.borderStyle = "none";
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}