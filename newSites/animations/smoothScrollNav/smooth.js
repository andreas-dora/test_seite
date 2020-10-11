const navbarToggler = document.querySelector('.navbar-toggler');
const navBarMenu = document.querySelector('.navbar ul');
const navBarLinks = document.querySelectorAll('.navbar a');

navbarToggler.addEventListener('click', navbarToggleClick);

function navbarToggleClick(){
  navBarMenu.classList.toggle('open');
}

navBarLinks.forEach(elem => elem.addEventListener('click', navbarLinksClick));

  
function navbarLinksClick(){
  smoothScroll(event);
  if(navBarMenu.classList.contains('open')){
    navbarToggler.click();
  }
}
function smoothScroll(event){
  event.preventDefault();
  const targetId = event.currentTarget.getAttribute("href")==='#' ? 'header' : event.currentTarget.getAttribute("href");

  const targetPosition = document.querySelector(targetId).offsetTop;
  //gibt die Entfernung des Zies, relativ zum 0-Y-Pixel wieder.

  const startPosition =window.pageYOffset;
  // Gibt die aktuelle Entfernung zum 0-Y-Pixel wieder.

  // nun noch subtrahieren:

  const distance = targetPosition - startPosition;
  const duration = 1000;
  let start = null;

  window.requestAnimationFrame(step);

  function step(timestamp){
    if(!start) start = timestamp;
    const progress = timestamp - start;
    window.scrollTo(0, easeInOutCubic(progress, startPosition, distance, duration)); 
    // HInter der Null die Easing-Funktion einsetzen

    if(progress < duration)
      window.requestAnimationFrame(step);    
  }
}

//------------- Auswahl Easing-Funktionen
// mehr unter http://gizma.com/easing/#l

function linear(t, b, c, d) {
	return c*t/d + b;
};

//-------------------------------------

function easeInOutQuad(t, b, c, d) {
	t /= d/2;
	if (t < 1) return c/2*t*t + b;
	t--;
	return -c/2 * (t*(t-2) - 1) + b;
};

//--------------------------------

function easeInOutCubic(t, b, c, d) {
	t /= d/2;
	if (t < 1) return c/2*t*t*t + b;
	t -= 2;
	return c/2*(t*t*t + 2) + b;
};


//--------------------------------------------
// VERSUCH 1: Window.scrollTo()
// window.scrollTo(x-coord, y-coord);
// window.scrollTo(options);  // such as top, left


// function smoothScroll(event){
//   event.preventDefault();
//   const targetId = event.currentTarget.getAttribute("href");
//   // console.log(targetId);
//   window.scrollTo({
//     top: targetId==='#' ? 0 : document.querySelector(targetId).offsetTop, 
//     behavior: 'smooth'
//   });
// }
// Wenn die TargetId '#' entspricht zu Pixel 0 gehen ansonsten den Selector targetId als offset von oben benutzen