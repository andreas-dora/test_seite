// const img0 = document.getElementById("id_img0");
// const mod0 = document.getElementById("id_modal0");
// const imgL0 =document.getElementById("id_imgL0");
// const nav = document.getElementById("bNav");

// window.onscroll = function() {scrolFun()};

// img0.addEventListener("click", openMod0);

// function openMod0(){
//   mod0.style.display = "block";
//   imgL0.scr = this.src;
//   captionText.innerHTML = this.alt;
// }
// var span = document.getElementsByClassName("close")[0];
//   span.onclick =function(){
//   mod0.style.display = "none";
// }

//------------------------------------------- NAV
// When the user scrolls the page, execute myFunction
window.onscroll = function() {scrollFun()};

// Get the navbar
var navbar = document.getElementById("id_navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function scrollFun() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
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