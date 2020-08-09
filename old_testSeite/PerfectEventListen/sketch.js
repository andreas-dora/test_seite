var myTe = document.getElementById("myTest");
var myBu = document.getElementById("myButton");
var myP = document.getElementById("myPara");
var firstLast = "Charly Babaluna";
var firstName = firstLast.split(" ");

myBu.addEventListener("click", myBuFu, false);
myBu.addEventListener("click", changeText, false);



function myBuFu(){
    // alert(this.id+" : mouse click makes the world hum");
  //   alert("PENGO");
    myTe.style.background = "red";
    var zwei =document.getElementById("buttonZwei");
   zwei.style.display = 'none';
  };


function changeText(){
    var words = ["kurios", "artist", "bossmode"];
    var pos = words.indexOf("artist");
    var zahlen = ["zwei", "drei", "fünf"];
   
//  myP.textContent = "Thank you Ernie " + firstName[pos] + " THEE Rythem OV "  + zahlen[pos];   



switch (pos){
    case 0:
            myP.textContent = "Thank you Ernie " + firstName[pos] + " THEE Rythem OV "  + zahlen[pos];  
    break;
    case 1:
            myP.textContent = "RYTHEMTECHNO";
    break;
    case 2:
            myP.textContent = "Mother";

    break;
    default:
            myP.textContent = "Father";

}
};

document.getElementsByClassName("validate").style.display = "none"