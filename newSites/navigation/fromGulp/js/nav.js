const openBtn = document.querySelector('#open');
const closeBtn = document.querySelector('.closeBtn');
openBtn.addEventListener('click', openNav);
closeBtn.addEventListener('click', closeNav);

function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

// /* Close when someone clicks on the "x" symbol inside the overlay */

function closeNav() {
document.getElementById("myNav").style.width = "0%";
}