const canvas = document.getElementById('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const cc = canvas.getContext('2d');

cc.save();
cc.rotate(7);
cc.fillStyle = 'rgb(166, 150, 108)';
cc.fillRect(200, 0, 140, 140);
cc.restore(); // zurück auf Eins davor 
cc.save();
cc.fillStyle = 'rgb(140, 150, 150)';

cc.rotate(7);
cc.fillRect(200, -180, 140, 140);
cc.restore(); // zurück auf Eins davor 
cc.save();
cc.fillStyle = 'rgb(166, 150, 108)';
cc.rotate(7);
cc.fillRect(380, -180, 140, 140);
cc.restore();
cc.save();







// function draw(){
//   let canvas = document.getElementById('canvas');
//   if(canvas.getContext){
//     let cc = document.getElementById('canvas').getContext('2d');
//     cc.save();
// cc.fillStyle = '#FF0000';
// // cc.rotate(7);
// cc.fillRect(200, 0, 140, 140);
//   }
// }

// document.addEventListener('DOMContentLoaded', draw);


// function draw() {
//   var canvas = document.getElementById('canvas');
//   if (canvas.getContext){
//     let canvas = document.getElementById('canvas');
//     canvas.width = window.innerWidth;
//     canvas.getContext('2d');

//     canvas.save();                     // Speichern des initialen Zustands
//     canvas.fillStyle = '#FF0000';      // Füllfarbe rot
//     canvas.rotate(7);                  // Rotation
//     canvas.fillRect(200,0,140,140);    // Zeichnen des roten Rechtecks
//     canvas.restore();                  // Zurücksetzen auf initialen Zustand
//     canvas.save();                     // Speichern des initialen Zustands
//     canvas.fillStyle = '#00FF00';      // Füllfarbe grün
//     canvas.rotate(7);                  // Rotation
//     canvas.fillRect(200,-180,140,140); // Zeichnen des grünen Rechtecks
//     canvas.restore();                  // Zurücksetzen auf initialen Zustand
//     canvas.save();                     // Speichern des initialen Zustands
//     canvas.fillStyle = '#0000FF';      // Füllfarbe blau
//     canvas.rotate(7);                  // Rotation
//     canvas.fillRect(380,-180,140,140); // Zeichnen des blauen Rechtecks
//   }
// }

// document.addEventListener('DOMContentLoaded', draw);