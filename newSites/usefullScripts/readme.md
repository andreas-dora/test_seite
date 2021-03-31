# QR Codes mit Node.js herstellen

#### Vorbereitung

```bash
npm init

npm install --save xlsx
npm install --save qrcode
```

---

#### 1. Schritt: Minmum

###### Index.js

```js
const QRCode = require('qrcode');
const Excel = require('xlsx');

QRCode.toFile('img/test.png', 'https://andreas-dora.github.io/startPage/');
```


```bash
node index
```

---

#### 2. Schritt

Im nächsten Schritt wird die QR-Code Erzeugung in eine Funktion eingebettet, die dann nach 
Wunsch gefütter werden kann. Optionen werden in den geschweiften Klammern angegeben

###### Index.js

```js
const QRCode = require('qrcode');
const Excel = require('xlsx');

function createQR(filename, data){
  QRCode.toFile('img/' + filename + '.png', data,{width:500});
}

createQR('meinqr2', 'https://andreas-dora.github.io/startPage/');
```

---

### Blauer Kode auf transparentem Hintergrund


```js
const QRCode = require('qrcode');
const Excel = require('xlsx');

function createQR(filename, data){
  QRCode.toFile('img/' + filename + '.png', data,{
    width:500, 
    color: {
      dark: '#034f67', 
      light: '#0000'}});
}

createQR('blauqr', 'https://andreas-dora.github.io/startPage/');
```