function draw(){
  let canvas = document.getElementById('canvas');
  if(canvas.getContext){
    let cc = document.getElementById('canvas').getContext('2d');
    cc.save();
cc.fillStyle = '#FF0000';
cc.scale(7, 7);
cc.fillRect(0,0,40,40);
cc.restore()
cc.save();
cc.fillStyle = '#00FF00';
cc.scale(6, 6);
cc.fillRect(0,0,40,40);
cc.restore()
cc.save();
cc.fillStyle = '#0000FF';
cc.scale(5,5);
cc.fillRect(0,0,40,40);

  }
}

document.addEventListener('DOMContentLoaded', draw);