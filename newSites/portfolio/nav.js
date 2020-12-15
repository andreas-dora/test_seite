const menu = document.getElementById("id_menu-btn");

menu.addEventListener("click", dropdown);

function dropdown(){
  const panel = document.getElementById("id-menu-panel");
  // panel.classList.toggle("active");
  if (panel.style.display == "none") {
    panel.style.display = "flex";
    menu.innerText = "close";
  } else {
          panel.style.display = "none";
          menu.innerText = "Menü";
        }
}
