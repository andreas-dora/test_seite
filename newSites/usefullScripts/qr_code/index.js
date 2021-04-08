const QRCode = require('qrcode');
const Excel = require('xlsx');

function createQR(filename, data){
  QRCode.toFile('img/' + filename + '.png', data,{
    width:400, 
    color: {
      dark: '#034f67', 
      light: '#0000'
    }  
  });
}


// createQR('vcard', `BEGIN:VCARD
// N:Beta;Betti;;;
// FN: Betti  Beta 
// ORG:BetaBest;
// EMAIL;type=INTERNET;type=HOME;type=pref:betti@beta.de
// TEL;type=CELL;type=VOICE;type=pref:01750555555
// item1.URL;type=pref:www.beta.de
// item1.X-ABLabel:_$!<HomePage>!$_
// END:VCARD`);


createQR('vcardTaxi', `BEGIN:VCARD
N:;;;;
FN:Taxiruf Offenbach
ORG:Taxiruf Offenbach;
TEL;type=WORK;type=VOICE;type=pref:+4969818282
NOTE:24 Stunden für Sie erreichbar
item1.URL;type=pref:https://taxiruf-offenbach.de/
item1.X-ABLabel:_$!<HomePage>!$_
X-ABShowAs:COMPANY
END:VCARD`);


createQR('taxiPhone', '+4969818282');

// createQR('firstName', 'First Name: Andy');

// createQR('allIWant', 'All I want to do is make love to you');
// createQR('phone', '+4917698242322');
// createQR('mail', 'andreas.dora@icloud.com');