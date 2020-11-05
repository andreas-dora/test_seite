const dobject = document.getElementById('dateobject');
const uTime = document.getElementById('uTime'); // Zeit ohne weitere Formatierung
const uDate = document.getElementById('uDate'); // Date ohne weitere Formatierung


var jetzt = new Date();
dobject.innerText = jetzt;
var h = jetzt.getHours();
var m = jetzt.getMinutes();
var s = jetzt.getSeconds();

uTime.innerText = h+":"+m+":"+":"+s;

// console.log(jetzt);
