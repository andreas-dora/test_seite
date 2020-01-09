var test = document.getElementById("test");
test.addEventListener("click", testFunction);

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById("id_myTopNav");
  if (x.className === "topNav") {
    x.className += " responsive";
  } else {
    x.className = "topNav";
  }
}

function testFunction(){
  window.alert("SHCÖNHEIT");
}