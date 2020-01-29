// var test = document.getElementById("test");
// test.addEventListener("click", testfun);

// function testfun(){
//   window.alert("Dies ist ein Test")
// }
//----------------------- Sticky Nav --------------------
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

//------------ Toogle Schnaps

document.getElementById("defaultOpen").click();
function openCity(evt, cityName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}