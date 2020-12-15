const menu = document.getElementById("id_menu-btn");

menu.addEventListener("click", dropdown);

function dropdown(){
  alert("Works");
  const panel = document.getElementById("id-menu-panel");
  // panel.classList.toggle("active");
  if (panel.style.display == "none") {
    panel.style.display = "flex";
  } else {
          panel.style.display = "none";
        }
}

// for (i = 0; i < accord.length; i++) {
//   accord[i].addEventListener("click", function() {
//     this.classList.toggle("active");
//     var panel = this.nextElementSibling;
//     // panel.style.borderStyle = "none";
//     if (panel.style.maxHeight) {
//       panel.style.maxHeight = null;
//     } else {
//       panel.style.maxHeight = panel.scrollHeight + "px";
//     }
//   });
// }