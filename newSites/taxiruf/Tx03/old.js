// #########################     ############################
// #######################      ##############################
// ######################     ###############################
     
     var myH;  // global für Stunde
     var tarif;
     const TxApp = {};
     TxApp.init = function(){
     TxApp.form = document.getElementById('id_txForm'); //addEventListener('submit',TxApp.prevent);
   
     TxApp.kmBtn = document.getElementById('id_kmBtn').addEventListener('click', TxApp.sendRoute);
   TxApp.form.addEventListener('submit', TxApp.prevent);

   TxApp.stInput = document.getElementsByClassName('stIn');
   console.log(TxApp.stInput);
   TxApp.stInput[0].addEventListener('input', TxApp.gCopy);
   TxApp.stInput[0].addEventListener('click', TxApp.gCopy);
   for(let i = 0; i< TxApp.stInput.length; i++){
       TxApp.stInput[i].addEventListener('input', autocomplete);
       autocomplete(TxApp.stInput[i], offenbach);
   }



   TxApp.citySel = document.getElementsByClassName('citySel');
   console.log('City Select länge: ' + TxApp.citySel.length);
   
   for(let i = 0; i< TxApp.citySel.length; i++){
     console.log('loop: ' + i);
       TxApp.citySel[i].addEventListener('change', TxApp.selctCity);
        TxApp.selctCity = function(){
           console.log('Hier');
          console.log('selctCity: ' + TxApp.citySel[i].value);
         //   let cityVal = TxApp.citySel[i].value;
         //    switch (cityVal){
         //        case 'Offenbach am Main':
         //           autocomplete(TxApp.stInput[i], offenbach);
         //           break;
         //       case 'Frankfurt am Main':
         //           autocomplete(TxApp.stInput[i], frankfurt);
         //           break;
         //       case 'Mühlheim am Main':
         //           autocomplete(TxApp.stInput[i], muehlheim);    
         //           break;
         //    }
       }
   }

 
   TxApp.citySel[0].addEventListener('change', TxApp.gCopy);
  
  TxApp.gInput = document.getElementById('id_q');
  TxApp.gCopy();  // Gelich zum Start den Offenbach werrt Kopier 

    // TxApp.mapBtn.addEventListener('click', TxApp.mapFun);
    TxApp.copyBtn = document.getElementById('id_copyApo');
    TxApp.copyBtn.addEventListener('click',copyFun)

   // TxApp.stCity1 = document.getElementById('id_stC');
   //  TxApp.stCity1.addEventListener('change', TxApp.funktionOne);
   // TxApp.funktionOne();
   // }
   TxApp.prevent = function(e){
    e.preventDefault();
   }

// #####################################################
// #####################################################
 // #####################################################
// #####################################################

   TxApp.sendRoute = function(){

     const route = {
       stA: TxApp.form.stStr.value + ", " + TxApp.form.stC.value,
       zA: TxApp.form.zStr.value + ", " + TxApp.form.zC.value
     }
     console.log(route.stA);
     google.script.run.withSuccessHandler(TxApp.getBack).GOOGLEMAPS(route);    
   }

   TxApp.getBack = function(result){
     document.getElementById('von').textContent = result.start;
     document.getElementById('nach').textContent = result.ziel;
     document.getElementById('km').textContent = (result.meter / 1000).toFixed(1);
     document.getElementById('minuten').textContent = result.minuten;
     var preis = ((Math.ceil(result.meter / tarif))*0.1+4.5).toFixed(2);
     document.getElementById('preis').textContent = preis;
   }
// #####################################################
// #####################################################
// #####################################################

   TxApp.gCopy = function(){
     TxApp.gInput.value = TxApp.stInput[0].value + ', ' + TxApp.citySel[0].value ;
     console.log(TxApp.citySel[0].value);
   }

// #####################################################
// #####################################################
// #####################################################


function autocomplete(inp, arr) {
   var currentFocus;
   inp.addEventListener('input', function(e) {
       var a, b, i, val = this.value;
       closeAllLists();
       if (!val) { return false;}
       currentFocus = -1;
       a = document.createElement("DIV");
       a.setAttribute("id", this.id + "autocomplete-list");
       a.setAttribute("class", "autocomplete-items");
       this.parentNode.appendChild(a);
       for (i = 0; i < arr.length; i++) {
         if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
           b = document.createElement("DIV");
           b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
           b.innerHTML += arr[i].substr(val.length);
           b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
               b.addEventListener("click", function(e) {
               inp.value = this.getElementsByTagName("input")[0].value;
               closeAllLists();
               gCopy();
           });
           a.appendChild(b);
         }
       }
   });
   inp.addEventListener("keydown", function(e) {
       var x = document.getElementById(this.id + "autocomplete-list");
       if (x) x = x.getElementsByTagName("div");
       if (e.keyCode == 40) {
         currentFocus++;
         addActive(x);
       } else if (e.keyCode == 38) { //up
         currentFocus--;
         addActive(x);
       } else if ((e.keyCode == 13)||(e.keyCode == 39) || (e.keyCode == 9)){
         e.preventDefault();
         if (currentFocus > -1) {
           if (x) x[currentFocus].click();
         }
       }
   });
   function addActive(x) {
     if (!x) return false;
     removeActive(x);
     if (currentFocus >= x.length) currentFocus = 0;
     if (currentFocus < 0) currentFocus = (x.length - 1);
     /*add class "autocomplete-active":*/
     x[currentFocus].classList.add("autocomplete-active");
   }
   function removeActive(x) {
     for (var i = 0; i < x.length; i++) {
       x[i].classList.remove("autocomplete-active");
     }
   }
   function closeAllLists(elmnt) {
     var x = document.getElementsByClassName("autocomplete-items");
     for (var i = 0; i < x.length; i++) {
       if (elmnt != x[i] && elmnt != inp) {
       x[i].parentNode.removeChild(x[i]);
     }
   }
 }
 document.addEventListener("click", function (e) {
     closeAllLists(e.target);
 });
 }
     }
// #####################################################
// #####################################################
// #####################################################
  

   function superFun(){
     let mymy = "lala";
     console.log(mymy);
 /*    startCity = TxApp.stCSelect.value;
        switch (startCity){
            case 'Offenbach am Main':
               autocomplete(startStr, offenbach);
               break;
           case 'Frankfurt am Main':
               autocomplete(startStr, frankfurt);
               break;
           case 'Mühlheim am Main':
               autocomplete(startStr, muehlheim);    
               break;
        } */
   }


// #####################################################
// #####################################################
// #####################################################

 function copyFun(){
   let apoInfo = document.getElementById('id_apoInfo').textContent;
   console.log(apoInfo);
   let myHlp = document.createElement('textarea');
   myHlp.value = apoInfo;
   myHlp.setAttribute('readonly', '');
   myHlp.style.position = 'absolute'; 
   myHlp.style.left = '-9999px';
   document.body.appendChild(myHlp);
   myHlp.select();
   myHlp.setSelectionRange(0, 99999); /*For mobile devices*/
   document.execCommand("copy");
 //  alert("PENGO");
   document.body.removeChild(myHlp);
 }


// #####################################################
// #####################################################
// #####################################################

 function tellTime(){
   let now = new Date();
   myH = now.getHours(); //.toString().padStart(2, 0);
   let myM = now.getMinutes().toString().padStart(2, 0);
   let myDay = now.getDay();
   let myDate = now.getDate().toString().padStart(2, 0);
   let myM_ = now.getMonth()+1; 
   let myMonth = myM_.toString().padStart(2, 0);
   const tage = ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"];
   let myTime = myH.toString().padStart(2, 0) + ":" + myM; // ":" + myS;
   var myDatum = tage[myDay] + " " + myDate + "." + myMonth;
   document.getElementById("id_time").innerText = myTime;
   document.getElementById("id_date").innerText = myDatum;
   var tarifFeld = document.getElementById('id_tarif');
   if((myH > 5 ) && (myH < 22)){
     tarif = 54;
     tarifFeld.textContent = "Normaltarif: € 0,10 für 54 Meter (ca. € 1,85 pro km)"
   } else {
     tarif = 51; 
     tarifFeld.textContent = "Nachttartif: € 0,10 für 51 Meter (ca. € 1,95 pro km)"
   }
 }

// #####################################################
// #####################################################
