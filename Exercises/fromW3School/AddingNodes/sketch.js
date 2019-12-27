var add = document.getElementById("addBtn");
var ins = document.getElementById("insBtn");
add.addEventListener("click", function(){
  let txt = document.getElementById("myInput");
  let para = document.createElement("p");
  let timeSpan = document.createElement("span");
  let myNode = document.createTextNode(txt.value);
  let date = new Date();
  let h = date.getHours();
  let m = date.getMinutes();
  let myTime = h + ":" + m; 
  let timeNode = document.createTextNode(h + ":" + m + " ");
  timeSpan.appendChild(timeNode);
  window.alert(timeSpan);
 

 let hierraus = document.getElementById("postContainer");
 para.appendChild(timeSpan);
 para.appendChild(myNode);
 hierraus.appendChild(para);
});


ins.addEventListener("click", function(){
  let txt = document.getElementById("myInput");
  let para = document.createElement("p");
  let timeSpan = document.createElement("span");
  let myNode = document.createTextNode(txt.value);
  let date = new Date();
  let h = date.getHours();
  let m = date.getMinutes();
  let myTime = h + ":" + m; 
  let timeNode = document.createTextNode(h + ":" + m + " ");
  timeSpan.appendChild(timeNode);
  window.alert(timeSpan);
 

 let hierraus = document.getElementById("postContainer");
 para.appendChild(timeSpan);
 para.appendChild(myNode);
 hierraus.appendChild(para);
  
  
  // window.alert("INSERT HELAU");
});