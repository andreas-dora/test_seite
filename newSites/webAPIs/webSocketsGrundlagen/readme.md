# Websockets Grundlagen

Bei der Kommunikation über HTTP wird nur einseitig mit dem Server kommuniziert. Die Kommunikation geht immer vom Client aus. Der Server kann nicht (unaufgefordert) mit Daten an den Client senden. Auch wenn ‚Antworten‘ gesendet werden, geschieht das immer nur auf Anfrage des Client.

Die **Websocket** API ermöglicht eine Bidirektionale Kommuniktion mit dem Server. Der Server, kann also unaufgefordert Updates an den Client schicken. Dafür muss zwischen Client und Server eine dauerhafte Verdingen gehalten werden.

---

## Der Verbindungsaufbau
Die **Verbindung** wird folgendermaßen geöffnet:

```let connection = new WebSocket('ws://example.com/test');```


Für den Verbindungsaufbau stehen drei Event-Handler zur Verfügung:

- `onopen`
- `onerror`
- `onclose`

```javascript
connection.onopen = function (e){
  console.log('Vebindung geöffnet');
};
```

```javascript
connection.onerror = function (error){
  console.log('Web Socket Error' + error);
;}
```

```javascript
connection.onclose = function (e){
  console.log('Verbindung geschlossen');
};
```

---

## Nachrichten senden
Der Methode `send()` können Srings, Blobs (Binary Large Objects), Array Buffer und typisierte Arrays übergeben werden.
Um Dten im **JSON**-Format zu senden müssen diese mit der Methode `JSON.stringify()`umgewandelt werden.

```javascript
var message = {
  
};
connection.send(JSON.stringify(message));
```
---

## Daten vom Server
Um auf Daten, die vom Server gesendet werden reagieren zu, stellt die Web Socket API die Methode `onmessage` zur Verfügung.


```javascript
connection.onmessage = function (e){
  console.log(e.data.byteLenght);
};
```

Empfängt man **JSON**-Daten vom Server müssen diese über `JSON.parse()`umgewandelt werden.

```javascript
connection.onmessage function(e){
  let data = JSON.parse(e.data);
};
```

Wie beim Senden könenn auc **Blobs** oder **Arraybuffer** empfangen werden.
Dazu setzt man die Eigenschaft `binaryType` auf den Wert `blob` oder `arraybuffer`.

```javascript
connection.binaryType = 'arraybuffer'
```



---

## Vom Server ausgende Kommunikation


Server-Sent Events ermöglichen es, dass Server ohne Abfarge von sich aus NAchrichten an den Client senden, wenn zB neue Daten vorliegen.

Die A A
