

function smooth(target, duration){
  var target = document.querySelector(target);
  var targetPosition = target.getBoundingClientRect().top;
  var startPosition = window.pageYOffset;
  var distance = targetPosition - startPosition;
  var startTime = null;

  var startTime = null;

  function animation(currentTime){
    if(startTime === null) startTime = currentTime;
    var timeElapsed  = currentTime - startTime; 
    var run = ease(timeElapsed, startPosition, distance, duration);
    window.scrollTo(0,run);    //der erste wert für y der zweite für x  (Es gibt auch eine scrollX Function(warum nicht diese))
    if(timeElapsed < duration) requestAnimationFrame(animation);
  }

  function ease(t, b, c, d) {
    t /= d/2;
    if (t < 1) return c/2*t*t*t*t + b;
    t -= 2;
    return -c/2 * (t*t*t*t - 2) + b;
  }

  requestAnimationFrame(animation); 
}

var section1 = document.querySelector('.section1');
section1.addEventListener('click', function(){
  smooth('.section2',1000);
});


//---------------------------


// var one = document.getElementById("id_one");
// one.addEventListener("click", test);

// function test(){
//   alert("THIS IS A TEST");
// }
