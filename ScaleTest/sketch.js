function CustomAlert(){
    this.render = function(dialog){
        var winW = window.innerWidth;
        var winH = window.innerHeight;
        var dialogOverlay = document.getElementById('dialogOverlay');
        var dialogBox = document.getElementById('dialogBox');
        dialogOverlay.style.display = "block";
        dialogOverlay.style.height = winH+"px";
        dialogBox.style.left = (winW/2) - ( 300 * .5)+"px";
        dialogBox.style.top = "100px";
        dialogBox.style.display = "block";
        document.getElementById('dialogBoxHead').innerHTML = "FEHLER: Bitte trag deinen Vor- und Nachnamen ein.";
        document.getElementById('dialogBoxBody').innerHTML = dialog;
        document.getElementById('dialogBoxFoot').innerHTML = '<button id="ok" onclick="Alert.ok()">OK</button>';

    }
    this.ok = function(){
        document.getElementById('dialogBox').style.display = "none";
        document.getElementById('dialogOverlay').style.display = "none";

    }
}
var Alert = new CustomAlert();