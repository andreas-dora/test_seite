const inhalt = document.getElementById('id-inhalt');
const navTrigger = document.getElementById('id-nav-trigger');
navTrigger.addEventListener('click', navOpen);

const navCloser = document.getElementsByClassName('nav-closer')
for(i = 0; i<navCloser.length; i++){
  navCloser[i].addEventListener('click', function(){
    inhalt.style.maxHeight = null;
  });
}
function navOpen(){
  // const inhalt = document.getElementById('id-inhalt');
  if (inhalt.style.maxHeight) {
    inhalt.style.maxHeight = null;
  } else {
    inhalt.style.maxHeight = inhalt.scrollHeight + "px";
    inhalt.style.opacity = "1";
  }
}
