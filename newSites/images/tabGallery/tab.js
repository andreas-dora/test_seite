function tabGal(imgs){
  var expandingImg = document.getElementById("expandedImg");
  var imgText = document.getElementById("imgtext");
  expandingImg.src = imgs.src;
  imgText.innerHTML = imgs.alt;
  expandingImg.parentElement.style.display = "block";
}