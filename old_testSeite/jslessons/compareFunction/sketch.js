var points = [40, 100, 1, 5, 25, 10, 23, 77, 89, 93];
document.getElementById("demo").innerHTML = points;

var mBtn = document.getElementById("maxBtn");
mBtn.addEventListener("click", myMax);

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


function myMax(){
  myArrayMax(points);
  // var len = points.length;
  // var max = -Infinity;
  // while (len--) {
  //   if (arr[len] > max) {
  //     max = arr[len];
  //   }
  // }
  //  return max;
  // alert("PENG");
  // document.getElementById("out").innerHTML = "PENG";
}

function myArrayMax(arr) {
   var len = arr.length;
  var max = -Infinity;
  // while (len--) {
  //   if (arr[len] > max) {
  //     max = arr[len];
  //   }
  // }
  // return max;
  alert("PENG");
}