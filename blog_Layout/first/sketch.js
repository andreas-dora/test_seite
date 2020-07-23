function navBar() {
  const navB = document.getElementById("id_topnav");
  if(navB.className === "topnav"){
    navB.className += " responsive";
  } else {
    navB.className = "topnav";
  }
}