const QRCode = require('qrcode');
// const Excel = require('xlsx');

function createQR(filename, data){
  QRCode.toFile('img/' + filename + '.png', data,{
    width:400, 
    color: {
      dark: '#373434', 
      light: '#000'
    }  
  });
}



createQR('vcard', `BEGIN:VCARD
VERSION:3.0
PRODID:-//Apple Inc.//macOS 11.2.2//EN
N:Breitwieser;Andreas;;;
FN:Andreas Breitwieser
EMAIL;type=INTERNET;type=HOME;type=pref:andreas.breitwieser@mail.de
TEL;type=CELL;type=VOICE;type=pref:+49 176 98242322
ADR;type=HOME;type=pref:;;Hermann-Steinhäuser-Str. 25;Offenbach am Main;;63065;
item1.ADR;type=HOME:;;;;;;Deutschland
item1.X-ABADR:de
END:VCARD`);


// createQR('vcardTaxi', `BEGIN:VCARD
// N:;;;;
// FN:Taxiruf Offenbach
// ORG:Taxiruf Offenbach;
// TEL;type=WORK;type=VOICE;type=pref:+4969818282
// NOTE:24 Stunden für Sie erreichbar
// item1.URL;type=pref:https://taxiruf-offenbach.de/
// item1.X-ABLabel:_$!<HomePage>!$_
// X-ABShowAs:COMPANY
// END:VCARD`);


// createQR('taxiPhone', '+4969818282');

// createQR('firstName', 'First Name: Andy');

// createQR('allIWant', 'All I want to do is make love to you');
// createQR('phone', '+4917698242322');
// createQR('mail', 'andreas.dora@icloud.com');