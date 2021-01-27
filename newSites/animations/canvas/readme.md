# HMTL Canvas

*(siehe JS_Ackermann Kapietel 11)


### FullScreen:

```js
const canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
```

### Ein paar Werte:

```js
var clock_x = canvas.width / 8 * 5;
var clock_y = canvas.height / 8 *5;
var clock_r = 200;
```

Eine Linie

```js
const canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var clock_x = canvas.width / 8 * 5;
var clock_y = canvas.height / 8 *5;
var clock_r = 200;

cc.beginPath();
cc.moveTo(clock_x, clock_y);
cc.lineTo(clock_x, clock_y + clock_r);
cc.stroke();


```

#### BESSER:

```js
var minZeiger = new Path2D();
minZeiger.moveTo(clock_x, clock_y);
minZeiger.lineTo(clock_x, clock_y + clock_r);
cc.stroke(minZeiger);
```


### Ein Kreis:

```javascript
const canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var clock_x = canvas.width / 8 * 5;
var clock_y = canvas.height / 8 *5;
var clock_r = 200;

const cc = canvas.getContext('2d');
var kreis = new Path2D();
kreis.arc(
  clock_x, clock_y,
  clock_r,
  0, Math.PI*2,
  false
);
cc.strokeStyle = 'rgb(55, 52 52)';
cc.fillStyle = 'rgb(166, 150, 108)';
cc.fill(kreis);


```


---

```js
const canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var clock_x = canvas.width / 8 * 5;
var clock_y = canvas.height / 8 *5;
var clock_r = 200;

const cc = canvas.getContext('2d');


var uhr = new Path2D();
uhr.arc(
  clock_x, clock_y,
  clock_r,
  0, Math.PI*2,
  false           // ---- CLOCKWISE
);
cc.strokeStyle = 'rgb(55, 52 52)';
cc.fillStyle = 'rgb(166, 150, 108)';
cc.fill(uhr);

var minZeiger = new Path2D();
minZeiger.moveTo(clock_x, clock_y);
minZeiger.lineTo(clock_x, clock_y + clock_r);
cc.stroke(minZeiger);


var deckel = new Path2D();
deckel.arc(
  clock_x, clock_y,
  8,
  0,
  Math.PI*2,
  false
);
cc.stroke(deckel);
```


----


# Text


```js
var myTime = new Date().toLocaleTimeString();
// cc.font = '48px serif';
cc.font = '48px Arial';
cc.fillText(myTime, 40, 60);s

```

### Texteigenschaften:

`font()` wie in CSS: `cc.font = '48px Arial';`
`textAlign()` zur horizontalen Ausrichtung:  `start, end, left, right, center`
`textBaseline()` zur vertikalen Positionierung: `top, hanging, middle, alphabetic, ideographic, bottom`
`direction()` selbsterklärend: `ltr, rtl, inherit`

```
