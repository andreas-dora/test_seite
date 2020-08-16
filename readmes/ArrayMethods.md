# JavaScript Array Methods

Wie gehabt können wir einen String mit 
`myStr.split(" ");`
in ein Array zerlegen.

Mit 
`myArr.toString()`
kann ein Array zu einem String zusammengeführt werden.

**.join()**

`var fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits.join(" * ");`

**.pop()** Entfernt das letzte Element in einem Array.

**.push("etwas neues")** fügt ein ELement am Ende hinzu.

**.shift()** Löscht das erste ELement

**.unshift()** fügt ein Elemnt am Anfang hinzu und gibt die neue Länge zurück.


**.member[0] = "Heinzi";** verwandelt das erste Element in einen Heinzi.

**myArr.delete[8]** Löscht das achte Element


## .slpice()

Mit der Splice Methode lassen sich Elemente löschen und einfügen.

```js
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi");
```

Der erste Parameter erklärt an welcher Stelle gheandelt werdne soll. Der zweite Parameter sagt aus wieviele Elemente von da an gelösch werden sollen **"0"**. Der dritte Parameter erklärt schließlich was dort eingefügt werden soll. 

---

## .concat()


Fügt bestehende Array zu einem neuen Array zusammen.
```js
var arr1 = ["Cecilie", "Lone"];
var arr2 = ["Emil", "Tobias", "Linus"];
var arr3 = ["Robin", "Morgan"];
var myChildren = arr1.concat(arr2, arr3);
```

---

## .slice()

Slice schneudet eine Teil aus einem Array heraus.
```js
var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
var citrus = fruits.slice(3);
```

Benutzt man zwei Parameter kann ein neues "Ausschnitt"-Array erzeugt werden.

```js
var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
var citrus = fruits.slice(1, 3);
```
---
## Automatische Wandlung in einen String

JS wandelt ein Array automatisch in einen String um, wenn ein primitiver Datentyp erwartet wird.
Das ist zum Besispiel immer der Fall, wenn man einen ein Array ausgeben möchte.
Es passiertd das Gleiche als würde man die .toStrig() Methode anwenden.

```js
var fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits.toString();
```

und hier ohne Methode:

```js
var fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits;
```
----
# Array Sortier Methoden


## .sort()
Sortiert die Elemte alphabetisch.
Falls sich Zahlen in dem Array befinden werden auch diese aufsteigend sortiert.

## .reverse()
Sortier die Elemente alphabetisch absteigend

---

## Die Verglleichs-Funktion

Mit Hilfe der compare Funkktion ist es möglich ein Array numerisch zu sortieren.
```js
<button onclick="myFunction1()">Sort Alphabetically</button>
<button onclick="myFunction2()">Sort Numerically</button>

<p id="demo"></p>

<script>
var points = [40, 100, 1, 5, 25, 10];
document.getElementById("demo").innerHTML = points;

function myFunction1() {
  points.sort();
  document.getElementById("demo").innerHTML = points;
}

function myFunction2() {
  points.sort(function(a, b){return a - b});
  document.getElementById("demo").innerHTML = points;
}
</script>
```

---

## Ein Array in zufälliger Reihenfolge sortieren.

```js
var points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return b - a});
// now points[0] contains the highest value
// and points[points.length-1] contains the lowest value
```
---

## Math.max() / Math.min()
Möchte man nur den höschsten order niedrigsten Wert aus einem Array ziehen kann es, je nach Größe des Array doch etwas zu Ressorcenraubend sein das ganze Array zu sortiern. Hierfür kann man die eingebauten Math.max.apply bzw. Math.min.apply Funktionen verwenden.


```js
function myArrayMax(arr) {
  return Math.max.apply(null, arr);
}
```
```js
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Array Sort</h2>

<p>The highest number is <span id="demo"></span>.</p>

<script>
var points = [40, 100, 1, 5, 25, 10];
document.getElementById("demo").innerHTML = myArrayMax(points);

function myArrayMax(arr) {
  return Math.max.apply(null, arr);
}
</script>

</body>
</html>
```


**und Math.min()**

```js
function myArrayMin(arr) {
  return Math.min.apply(null, arr);
}
```

---
## My Min / Max JS Methods
Die Schnelllste Möglichkeit das Minimum oder Maximum festzustelllen sind die maßgeschneiderten Functionen.
```js 
function myArrayMax(arr){
  var leb = arr.length;
  var max = -infinity;
  while(len--){
    if(arr[len]> maX){
      Max =arr[len];
    }
  }
  return max;
}
```


---
# Object Arrays sortieren

```js 
var cars = [
 {type: "volvo", year: 2016},
 {type: "saab", year: 2001},
 {type: "BMW", year: 2010} 
];

cars.sort(function(a,b){return a.year -b.year});