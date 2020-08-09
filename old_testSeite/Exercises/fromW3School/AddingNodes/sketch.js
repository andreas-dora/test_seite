var inhalt = document.getElementById("inhalt");
var add = document.getElementById("addBtn");
var ins = document.getElementById("insBtn");

// var myCollection = document.getElementsByTagName("p");
var pSum =document.getElementById("pSumme");
var mpSum =document.getElementById("msgPSumme");


//------- Am ENDE HINZUFÜGEN

add.addEventListener("click", function(){
  let txt = document.getElementById("myInput");
  let para = document.createElement("p");
  para.setAttribute("class", "msgP");
  let timeSpan = document.createElement("span");
  timeSpan.setAttribute("class",  "red");
  let myNode = document.createTextNode(txt.value);
  let date = new Date();
  let h = date.getHours();
  let m = date.getMinutes();
  let s = date.getSeconds();
  let timeNode = document.createTextNode(h + ":" + m + ":" + s + " ");
  timeSpan.appendChild(timeNode);
  window.alert(timeSpan);
 
  let myPs = document.getElementsByTagName("p");
  let cPs = document.getElementsByClassName("msgP");

  let hierraus = document.getElementById("postContainer");
  para.appendChild(timeSpan);
  para.appendChild(myNode);
   hierraus.appendChild(para);

 let last = cPs.length;
  
 mpSum.innerHTML = last; // Anzahl der Elemente mit class msgP
 chldS.innerHTML = hierraus.childElementCount;
});

//-------------- Insert Before

ins.addEventListener("click", function(){
  let txt = document.getElementById("myInput");
  let para = document.createElement("p");
  para.setAttribute("class", "msgP");
  let timeSpan = document.createElement("span");
  timeSpan.setAttribute("class",  "red");
  let myNode = document.createTextNode(txt.value);
  let date = new Date();
  let h = date.getHours();
  let m = date.getMinutes();
  let s = date.getSeconds();
  
  let timeNode = document.createTextNode(h + ":" + m + ":" + s + " ");
  timeSpan.appendChild(timeNode); 
  let myPs = document.getElementsByTagName("p");
  let cPs = document.getElementsByClassName("msgP");
  var last = cPs.length; 
  let hierraus = document.getElementById("postContainer");
  para.appendChild(timeSpan);
  para.appendChild(myNode);
  hierraus.insertBefore(para, cPs[0]);

  
 mpSum.innerHTML = last; // Anzahl der Elemente mit class
 chldS.innerHTML = hierraus.childElementCount;
});