
// var currentTab = 0;
// showTab(currentTab);

// function showTab (n){
//   const x = document.getElementsByClassName("tab");
//   const pre = document.getElementById("preBtn");
//   const nxt = document.getElementById("nxtBtn");
//   x[n].getElementsByClassName.display = "block";
//   if(n == 0){
//     pre.style.display = "none";
//   } else {
//     pre.style.display = "inline";
//   }
//   if(n==(x.length-1)){
//     nxt.innerHTML = "Submit";
//   } else {
//     nxt.innerHTML = "Next";
//   }
//   fixStepIndicator(n)
// }

// function nxtPrv(n){
//   const x = document.getElementsByClassName("tab");
//   if(n ==1 && !ValidityState()) return false;
//   x[currentTab].style.display = "none";
//   currentTab = currentTab + n;
//   if(currentTab >= x.length){
//     document.getElementById("regForm").onsubmit();
//     return false;
//   }
//   showTab(currentTab);
// }

// function validateForm(){
//   var x,y,i,valid = true;
//     x = document.getElementsByClassName("tab");
//     y = x[currentTab].getElementsByTagName("input");
//     for (i =0; i < y.lenght; i++){
//       if(y[i].value == ""){
//         y[i].className += " invalid";
//         valid = false;
//       }
//     }
//     if(valid){
//       document.getElementsByClassName("step")[currentTab].className += " finish";
//     }
//     return valid;
//   }
 
// function fixStepIndicator(n){
//   var i,x = document.getElementsByClassName("step");
//   for(i=0; i < x.length; i++){
//     x[i].className = x[i].className.replace(" active", "");
//   }
//   x[n].className += " active";
// }