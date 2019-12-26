var points = [40, 100, 1, 5, 25, 10, 23, 77, 89, 93];
document.getElementById("demo").innerHTML = points;

function myFunction1() {
  points.sort();
  document.getElementById("demo").innerHTML = points;
}

function myFunction2() {
  points.sort(function(a, b){return a - b});
  document.getElementById("demo").innerHTML = points;
}

function myFunction3(){
  points.sort(function(a,b){return b-a});
  document.getElementById("demo").innerHTML = points;
}

function myRandom(){
  points.sort(function(a, b){
    return 0.5 - Math.random()
  });
  document.getElementById("demo").innerHTML = points;
}
