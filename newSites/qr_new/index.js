const QRCode = require('qrcode');
// const Excel = require('xlsx');

function createQR(filename, data){
    QRCode.toFile('img/' + filename + '.png', data,{
      width:200, 
      color: {
      //  dark: '#034f67', // Mainblau
        dark: '#000', // Dunkelgrau
        light: '#fff'
      }  
    });
  }

createQR(
'meins', 
`BEGIN:VCARD
VERSION:3.0
PRODID:-//Apple Inc.//macOS 11.2.2//EN
N:Breitwieser;Andreas;;;
FN:Andreas Breitwieser
EMAIL;type=INTERNET;type=HOME;type=pref:andreas.breitwieser@mail.de
TEL;type=CELL;type=VOICE;type=pref:+49 176 98242322
ADR;type=HOME;type=pref:;;Hermann-Steinhäuser-Str. 25;Offenbach am Main;;63065;
item1.ADR;type=HOME:;;;;;;Deutschland
item1.X-ABADR:de
item2.URL;type=pref:https://github.com/andreas-dora
item2.X-ABLabel:_$!<HomePage>!$_
END:VCARD`
);