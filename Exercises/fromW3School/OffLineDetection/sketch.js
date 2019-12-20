var outp = document.getElementById("detect");
var x = "Is the browser online? " + navigator.onLine;
console.log(x);
outp.innerText = navigator.onLine;