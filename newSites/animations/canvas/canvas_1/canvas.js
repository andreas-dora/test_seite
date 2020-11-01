const canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const cc = canvas.getContext('2d');

var dreieck = new Path2D();

// cc.beginPath();
dreieck.moveTo(100,100);
dreieck.lineTo(200,300);
dreieck.lineTo(300,100);
dreieck.lineTo(100,100);
dreieck.closePath();
cc.stroke(dreieck);

// cc.fillRect(200, 200, 100, 100)


// console.log(canvas);