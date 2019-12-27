# JS Date
`var d = new Date();`

JS benutzt die **Zeitzone des Browsers** und spuckt einen vollen Text-String aus.

**Es gibt vier wege ein neues Date-Object zu erzeugen.**

new Date()
new Date(year, month, day hours, minuts, seconds milliseconds)
new Date(milliseconds)
new Date(date string)

new Date erzeugt ein Object mit dem aktuellenDatum und der aktuellen Uhrzeit.
Date Object sind statisch. Wenn die Uhr des Computers weiter läuft. das Object nicht.

## new Date(year, month, ...) 
Erzeugt ein Date Object mit einer bestimmten Zeit.
Sieben Zahlen spezifizieren Jahr, Monat, Tag, Stund, Minute Sekunde und Millisekunde.

`var d = new Date(2018, 11, 24, 10, 33, 30,0);`

Beim erzeugen eines Date-Objects muss mindestens der Monat angegeben werden. Sonst denkt Javascript es handelt sich um ein Date-Object mit nur Millisekunden.
**JS lebt im vergangenen Jahrhundert**
Ein oder zweistellige Jahreszahlen werden als 19xx Jahre interpretiert.
`var d = new Date("October 13, 2014 11:13:00");`

JS speichert Daten in Millisekunden.
Null-Zeit ist der 01. Januar 1970 00:00:00 UTC

jetzt ist **1577408813546 Millisekunden seit dem**

new Date(millisekuden) erzeugt ein Object akls NUll-Moment und die millisekunden seit dem

`var d = new Date (-1000000);`

 **Ein Tag hat 24 Stunden, das sind 86 400 000 Millisekunden**

## Daten darstellen

# Date Methods 
## Date Display

Wenn mans ich das date Object in html anzeigen lässt wird es automatisch mit der tpString Methode verwandelt.
```js
d = new Date();
document.getElementById("demo").innerHTML = d;
```
Alternative kann die toUTCString() Methode benutzt werden, die einen Standard UTC-String auspuckt genutzt werden.
Die Methode toDateString konvertiert das Object in einen etwas lesbareren String.


# Date Formats

Javascript stehen drei Date Formate für den Input zur Verfügung:
ISO Date: "2015-03-25"  // Das ist der internatinale Standard
Short Date "03/25/2015"
Long Date "Mar 25 2015" oder "25 Mar 2015"

Nur das ISO-Format ist genau definiert und taugt für dne Datenaustausch alle anderen Formate sind Browser und Einstellungsabhängig.

# Date Ausgabe
var d = new Date("2015-03-25");

DAs vom Computererezeugte Datum ist abhängig von der eingestellte Zeitzone.
ISO-Dates könen ohne TAg nur mit Jahr und Moant geschrieben werden
Je nach gewählter Zeituone kann das Datum vom 28. FEb und 01. März varieren.

ISO dates can be written with added hours, minutes, and seconds (YYYY-MM-DDTHH:MM:SSZ):var d = new Date("2015-03-25T12:00:00Z");


Datum  und Uhrzeit werden von einem  großen T  gertrennt

UTC-Zeit wird mit einm großen Z gekennzeichnet


Monate und TAge ohen Vorstehende Null kann bei Browsern zu Fehlern führen 

# Date Input / Parsing.

Wenn man einen gültigen Date String haben möchte kann die Date.parse() Funktion zur Hilfe genommen werden mit der ein eingegebenes Datum in  MIllisekunden umgewandelt wird
```js
var msec = Date.parse("March 21, 2012");
document.getElementById("demo").innerHTML = msec;
```
Anschließend kann sauberin eine Date String gewandelt werden.

```js
var msec = Date.parse("March 21, 2012");
var d = new Date(msec);
document.getElementById("demo").innerHTML = d;
```

---
Date Get Method

Method|Beschreibung
------|------------
getFullYear()| Gibt das Vierstellige Jahr zurück|
getMonth| gibtd den Monat 0-11 zurück
get Date()|gibr den Tag (1-31) zurück
getHours()|
getMinutes()|
getSeconds()|
getMilliseconds()| Get the millisecond (0-999)
getTime()	| Get the time (milliseconds since January 1, 1970)
Get the time (milliseconds since January 1, 1970) | Wochentag von 0-6
Date.now() | Get the time. ECMAScript 5.


In JAvaScript ist der erste TAg der woche 0-6 Sonntag.
```js
var d = new Date();
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
document.getElementById("demo").innerHTML = days[d.getDay()];
```

---
# Set Date  Methods

Method|Description
------|-----------
setDate()|	Set the day as a number (1-31)
setFullYear()|	Set the year (optionally month and day)|
setHours()|	Set the hour (0-23)
setMilliseconds()|	Set the milliseconds (0-999)
setMinutes()|	Set the minutes (0-59)
setMonth()|	Set the month (0-11)
setSeconds()|	Set the seconds (0-59)
setTime()|	Set the time (milliseconds since January 1, 1970)

---