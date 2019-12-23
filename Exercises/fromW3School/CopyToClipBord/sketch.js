const myBtn = document.getElementById("myBtn");
myBtn.addEventListener("click", standardFunction);

const cpBtn = document.getElementById("cpBtn");
cpBtn.addEventListener("click", myFun);

///-----------------------Standard ---------------------------
function standardFunction() {
  /* Get the text field */
  var copyText = document.getElementById("myInput");

  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /*For mobile devices*/

  /* Copy the text inside the text field */
  document.execCommand("copy");

  /* Alert the copied text */
  alert("Copied the text: " + copyText.value);
}

//--------------------- My Funktion
function myFun(){
  var myCopy = document.getElementById("testFeld1");
  const myHlp = document.createElement('textarea');
  myHlp.value = myCopy.innerText;
  myHlp.setAttribute('readonly', '');
  myHlp.style.position = 'absolute'; 
  myHlp.style.left = '-9999px';
  document.body.appendChild(myHlp);
  myHlp.select();
  myHlp.setSelectionRange(0, 99999); /*For mobile devices*/
  document.execCommand("copy");
  alert("PENGO");
  document.body.removeChild(myHlp);
}