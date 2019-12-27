# JS Iteration Methods

## Array.forEach

Die **forEach() Methode** ruft für jedes Element des Arrays eine Callback-Funktion auf.
```js
var txt =  "";
var numbers = [45, 4, 9, 16, 25];
numbers.forEach(myFunction);
document.getElementById("demo").innerHTML = txt;
function myFunction(value, index, array){
  txt = txt + value + "<br>";
} 
```
Die Funktion benötigt drei Argumente:

- The Item value
- The Item Index
- THe Array Itself

DAs Beispiel kann umgeschrieben werden zu:

```js
var txt = "";
var numbers = [45, 4, 9, 16, 25];
numbers.forEach(myFunction);

function myFunction(value) {
  txt = txt + value + "<br>";
}
```

----

# Array.map()
The map() Method erstellt ein neues Array während es die Methodes auf jedes Element des ursprünglichen Arrays ausübt

Die **.map()**-Methode wird nicht auf Elemente ohne Wert (Value) ausgeübt. Die **.map()**-Methode verändert nicht das Ursprungs-Array


```js
var numbers1 = [45, 4, 9, 16, 25];
var numbers2 = numbers1.map(myFunction);

function myFunction(value) {
  return value * 2;
}
```
