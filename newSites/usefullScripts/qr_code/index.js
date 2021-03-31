const QRCode = require('qrcode');
const Excel = require('xlsx');

function createQR(filename, data){
  QRCode.toFile('img/' + filename + '.png', data,{
    width:500, 
    color: {
      dark: '#034f67', 
      light: '#0000'
    }  
  });
}


createQR('firstName', 'First Name: Andy');

// createQR('allIWant', 'All I want to do is make love to you');
// createQR('phone', '+4917698242322');
// createQR('mail', 'andreas.dora@icloud.com');