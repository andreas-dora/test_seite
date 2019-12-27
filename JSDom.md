# JS Dom 

## Eine Element finden:

- document.getElementById()
- document.getElementsByTagName()
- document.getElementsByClassName()

## Elemente verändern
- element.innerHTML =
- element.attribute =
- element.style.property =
- element.setAttribute =

## Elemente hinzufügen und löschen
document.createElement()
document.removeChild();
document.appendChild();
document.replaceChild(neu gegen alt)
document.write(text)

---
## Adding Event Handlers

`document.getElementById(id).onclick = function(){code}`


---

## Elemente auffinden:

Property|description|DOM Level
--------|-----------|----------
document.anchors | Gibt alle \<a> Elemnte zurück, die einen Namen haben|1
document.baseURI | gibt die Base-URI (???)|1
document.body | Gibt das Body-Element zurück.|3
document.cookie| gibt deb Cookie zurück | 1
document.doctype|	Returns the document's doctype|	3
document.documentElement|	Returns the \<html> element|	3
document.documentMode | Returns the mode used by the browser |	3
document.documentURI	| Returns the URI of the document |	3
document.domain	| Returns the domain name of the document server|	1
document.domConfig	| Obsolete. Returns the DOM configuration	| 3
document.embeds |	Returns all \<embed> elements |	3
document.forms|	Returns all \<form> elements	| 1
document.head	| Returns the \<head> element	| 3
document.images |	Returns all \<img> elements	| 1
document.implementation |	Returns the DOM implementation |	3
document.inputEncoding |	Returns the document's encoding (character set)| 	3
document.lastModified	| Returns the date and time the document was updated |	3
document.links |	Returns all \<area> and \<a> elements that have a href attribute	| 1
document.readyState	| Returns the (loading) status of the | document	| 3
document.referrer |	Returns the URI of the referrer (the linking document) |	1
document.scripts |	Returns all \<script> elements |	3
document.strictErrorChecking |	Returns if error checking is enforced |	3
document.title|	Returns the \<title> element |	1
document.URL |	Returns the complete URL of the document |	1

---

Die Variante **document.write()** sollte man besser nicht verwenden.
Sie überschreibt, das bereits geladene HTML Dokument

Die einfachste Methode bleibt also den HTML Innhalt zu verändern:
`document.getElementById("piPi").innerHTML = newContent`

## Den Wert eines Atributes verändern 
`document.getElementById("piPi").attribute = new value`

zum Beispiel:

`doculment.getElementById("myImg").src = "landscape.jpg";`


---
# Mögliche Events

- When a user clicks the mouse
- When a web page has loaded
- When an image has been loaded
- When the mouse moves over an element
- When an input field is changed
- When an HTML form is submitted
- When a user strokes a key

`<button onclick="displayDate()">Try it</button>`

## Die onload & onunload Events

Diese Evenst werden getriggert wenn der User eines betritt oder verlässt. Man kann sie benutzen um den Browser-Typ abzufragen um anschließend ie passende Versin der Webseite zu laden.
Die Events sind auch geeignet um Cookkies zu checken.

```js
<body onload="checkCookies()">
```
## Eingabe: onchange

Der Onchanege  Event wird häufihgin Verbindungmit Input-Validation benutzt.

- onfocus

## Mouse Events:
- onmouseover
- onmouseout
- onmousedown
- onmouseup
- onclick

# Die addEventListener() Methode

Die Verwendung der addEventListener()-Methode fügt einen neuen Listner hinzu ohne bestehende zu überschreiben.
Es können unbegrenzt viele EL an ein Element gehäng werden.

ICH VERSTHEN NICHT:
Die Methode macht es leichter zu kontrollieren "how reacts to bubbling." 

Add Eventlistener wird immer ohne **on-** Prefix notiert.

```js
element.addEventListener("click", function(){ alert("Hello World!"); });
```

oder 
```js
element.addEventListener("click", myFunction);

function myFunction() {
  alert ("Hello World!");
}
```

Das Gegenstück dazu ist
**removeEventListener()**

## EventListerner am Window Object

```js
window.addEventListener("resize", function(){
  document.getElementById("demo").innerHTML = sometext;
});
```
## Parameter im Eventlistner übergeben.

Wenn bestimmte Paramater übergeben werdne sollen, get das nur mit anonymen Funktionen:

```js
element.addEventListener("click", function(){ myFunction(p1, p2); });
```

#

There are two ways of event propagation in the HTML DOM, bubbling and capturing.

Event propagation is a way of defining the element order when an event occurs. If you have a <p> element inside a <div> element, and the user clicks on the <p> element, which element's "click" event should be handled first?

In bubbling the inner most element's event is handled first and then the outer: the <p> element's click event is handled first, then the <div> element's click event.

In capturing the outer most element's event is handled first and then the inner: the <div> element's click event will be handled first, then the <p> element's click event.

----
# Event Bubbling or Event Capturing?
With the addEventListener() method you can specify the propagation type by using the "useCapture" parameter:

`addEventListener(event, function, useCapture);
`
The default value is false, which will use the bubbling propagation, when the value is set to true, the event uses the capturing propagation.
```js
document.getElementById("myP").addEventListener("click", myFunction, true);
document.getElementById("myDiv").addEventListener("click", myFunction, true);
```