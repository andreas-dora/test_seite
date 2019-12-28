var add = document.getElementById("addBtn");
var ins = document.getElementById("insBtn");

var myCollection = document.getElementsByTagName("p");
// var myClassCol = document.getElementsByClassName("msgP");
var pSum =document.getElementById("pSumme");
var mpSum =document.getElementById("msgPSumme");

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
  
 pSum.innerHTML = myPs.length; // Anzahl der Elemente
 mpSum.innerHTML = last; // Anzahl der Elemente mit class msgP
//   let txt = document.getElementById("myInput");
//   let para = document.createElement("p");
//   let timeSpan = document.createElement("span");
//   let myNode = document.createTextNode(txt.value);
//   let date = new Date();
//   let h = date.getHours();
//   let m = date.getMinutes();
//   let myTime = h + ":" + m; 
//   let timeNode = document.createTextNode(h + ":" + m + " ");
//   timeSpan.appendChild(timeNode);
//   window.alert(timeSpan);
 

//  let hierraus = document.getElementById("postContainer");
//  para.appendChild(timeSpan);
//  para.appendChild(myNode);
//  hierraus.appendChild(para);

//  pSum.innerHTML = myCollection.length; // Anzahl der Elemente
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
  // window.alert(timeSpan);
 
  let myPs = document.getElementsByTagName("p");
  let cPs = document.getElementsByClassName("msgP");
  let last = cPs.length; 
 let hierraus = document.getElementById("postContainer");
 para.appendChild(timeSpan);
 para.appendChild(myNode);
 if(last < 1){
  hierraus.appendChild(para);
 } else {
  hierraus.insertBefore(cPs[last -1], para);
 }
//  hierraus.appendChild(para);

  
 pSum.innerHTML = myPs.length; // Anzahl der Elemente
 mpSum.innerHTML = last; // Anzahl der Elemente mit class msgP
  // window.alert("INSERT HELAU");
});