# Server-Sent Events

Server-Sent Events ermöglichen es, dass ein Server von sich aus NAchrichten an den Client verschickt.
Die API definiert ein EventSource-Interface, das Events erstellt und Botschaften versendet.
In der Constructor-Funktion 

### Festlegen einer Datenquelle

```javascript
var source = new EventSource('/events');
source.onmessage = (e)=>{
  console.log(e.data);
  console.log(e.origin);
  console.log(e.lastEventId);
};
```

Neben dem Eventhandler `onmessage` stehen noch die Event-Handler `onopen` und `onerror` zur Verfügung.

Alternativ zum `onmessage`-Handler kann auch die Methode `addEventListener()` verwendet werden.

```javascript
var source = new EventSource('/events');
source.addEventListener('message', (e) =>{
  document.body.innerHTML += e.data + '<br>';
});
```

## Server Seite mit Node.js

Das Beispiel soll alle fünf Sekunden eine Rechenaufgabe erzeugen und sie an den Client versenden. 