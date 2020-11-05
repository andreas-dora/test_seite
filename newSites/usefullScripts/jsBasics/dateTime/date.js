const dobject = document.getElementById('dateobject');
const uTime = document.getElementById('uTime'); // Zeit ohne weitere Formatierung
const uWT = document.getElementById('uTag'); // Zeit ohne weitere Formatierung
const uDate = document.getElementById('uDate'); // Date ohne weitere Formatierung
const utc = document.getElementById('utc'); // Date ohne weitere Formatierung


const volleTage = ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'];

const volleMonate = ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'];

var jetzt = new Date();
dobject.innerText = jetzt;
var h = jetzt.getHours();
var m = jetzt.getMinutes();
var s = jetzt.getSeconds();

var wt = jetzt.getDay();  // Wochentag
var tag = jetzt.getDate();
var monat = jetzt.getMonth();
var jahr = jetzt.getFullYear();
uTime.innerText = h+":"+m+":"+":"+s;
uWT.innerText = wt;
uDate.innerText = tag+"."+monat+"."+jahr;
utc.innerText = jetzt.getTime();
// console.log(volleTage[wt]);
// console.log(volleMonate[monat]);


// var stunde = 7;
// console.log(stunde.toString().padStart(2,0));

// console.log(jetzt.toLocaleDateString());
// console.log(jetzt.toLocaleTimeString());
// console.log(jetzt.toLocaleString());

// var myUtc = 1604554130384;
// var n = new Date(myUtc);
// console.log(n.toLocaleString());
// console.log(n.toLocaleTimeString());

var gegenwart = Date.now();

var deadLine = new Date('3 19 2021');
var restZeit = deadLine.getTime() - gegenwart;
// console.log(gegenwart);
console.log("Verbleibende Stunden: " + Math.round(restZeit/3600000));
console.log("Verbleibende Tage: " + Math.round(restZeit/86400000));

const zeitOutput = document.querySelector('#zeitOutput');
function tellTime(){
	let now = new Date();
	zeitOutput.innerText = now.toLocaleTimeString();
};
setInterval(tellTime, 1000);