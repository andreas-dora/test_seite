const keyCodeFeld = document.querySelector('.keyCodeFeld');
const myFrame = document.querySelector('.keyCodeIn');
const istGleich = document.querySelector('.istGleich');
myFrame.p
myFrame.addEventListener('keydown', function(event){
   console.log('bongo');
  console.log (event.key + " "+ event.key.length + " " + event.metaKey + " " + event.code);
  keyCodeFeld.textContent = event.code;
  if(!event.key.length > 1){
    myFrame.placeholder = event.key; 
  } else {
    myFrame.placeholder = '';
  }
  
  myFrame.value = '';
  istGleich.textContent = '= ';
});

// elem.querySelector('input')
// });