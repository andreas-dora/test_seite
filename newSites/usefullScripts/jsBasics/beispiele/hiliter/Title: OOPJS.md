Title: OOP_JS
Author: Andreas Breitwieser


# JS Ohoh Programieren

---

Inhalt

---

Objekte haben einen Zustand und ein Verhalten (blahblah kacksparche)


#### Beispiel: ShoppingCart

Der Zustand eines Objekts wird durch seine Eigenschaften definiert und durch Verknüpfungen zu anderen Objekten.
Bei ShoppingCart sind das zB. enthaltene Items

Das **Verhalten** eines Objekts wird durch **Methoden** definiert.
- addItem
- removeItem
- clear
---

# Objekte erzeugen

#### Über die Literal-Schreibweise

```
let book = {
  name: 'Ada adore',
  prei: 12.90,
  author: 'Vladimir Nabokov',
  isbn: '99213989812',
  printDescription: function(){
    console.log(this.author + ' : ' + this.name);
  }
}

console.log(book.name);
console.log(book.author);

book.printDescription();
```
---

#### Über die Konstrukturfunktion

Wie bei Java-Klassen ist auch in der JS Kunstruktor-Funktion wird auch hier der Funktionsname: Book groß geschrieben. 

```
function Book(name, author, preis, isbn){
  this.name = name;
  this.author = author;
  this.preis = preis;
  this.isbn = isbn;
  this.printDescription = function(){
  console.log(this.author + ' : ' + this.name);
  }
}
```

Und jetzt der Aufruf

```
var book1 = new Book(
  'Ada Adore', 'Vladimir Nabokov', 29,90, '808123081ß'
)
var book2 = new Book(
  'Pale Fire', 'Vladimir Nabokov', 26,90, '8011823081ß'
)
```

#### Prototype

Kern jeder Konstruktorfunktion ist der Prototype, die Blaupause nach der die neuen Objekte erschaffen werden.
Mit Eigenschaft `__proto__ ` oder der Methode: `Object.getPrototypeOf()`
kann man den Erzeuger des Objekts erfragen.
Über die Eigenschaft constructor, kann für eine Object-Instanz außerdem bestimmt werden, mit welcher Konstuktorfunktion es erzeugt wurde. 

Offene Frage: Mehrere Konstruktorfunktionen möglich, wie in Java?



```
console.log(Item.prototype);
```

Antwort:
constructor: function Book(name, author, preis, isbn)

```
console.log(book.__proto__);
```
Antwort:
constructor: function Book(name, author, preis, isbn)


  


---

## Hilfmittel

Der typeof Operator  
Mit typeof-Operator wird verwendet um herauszufinden Welcher Datentyp hinter einer Variablen steckt. Steckt hinter x wirklich eine Zahl oder doch ein String?
 
 
 
 ---
 
## Der Seltsame Namenstausch


```
var kerl = {
  firstName: 'Harry',
  lastName: 'Hirsch'
}

var kerl2 =kerl;
kerl2.firstName = 'Willy';

console.log(kerl);
```

Ausgabe: Object { firstName: "Willy", lastName: "Hirsch" }

---