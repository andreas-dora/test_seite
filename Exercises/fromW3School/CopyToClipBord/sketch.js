var myBtn = document.getElementById("myBtn");
myBtn.addEventListener("click", myFun);
function myFun(){
  // var copyText = document.getElementById("myInput");
  // copyText.select();
  // copyText.setSelectionRange(0, 99999);
  // var myTest = "Zauberei";
  // myTest.select();
  // alert("FOTZILLA");
  var myZauber = document.getElementById("zauberei");
  myZauber.setSelectionRange(0, 99999);
  myZauber.value.select();
  document.execCommand("copy");
  // document.execCommand("copy");


}