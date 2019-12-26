# String Methods
`var x = myStr.search("dingsie");` ist **RegEx**-Fähig
.indexOf("dies", 16)

fängt bei 16 an zu suchen


x = myStr.slice(start, end)

x = myStr.slice(23)

  liefert alles nach index 23 zurück

`var x = myStr.slice(-23)`

    liefert alles bis 23 zurück

---

### .replace
`x = myStr.replace("Liebe", "Füße");`
DIe Replace Methode erzeugt einen neuen String  x in dem Liebe gegen Füße getauscht wurde wurde:

.replace(); kann die RegEx Flags benutzen mit /i wird Groß - und Kleinschreibung ignoriert.

Anstelle von Anführungszeichen werden dann aber nach bester RexEx manier Schrägstriche verwendet.

`x = myStr.replace(/und/i, "Füße");`


mit der **/g** Global Flag wir jedes /und/g ausgetauscht

`var x = myStr.toUpperCase`

`var x = myStr.toLowerCase`

`var x = myStr.trim();`

Löscht übberlüssige Leerzeichen zu  begin  und zu ende.

`myStr.charAt(3);`

`myStr.charCodeAt(3)`

## String in ein Array umwnandeln / ZErlegen

`myStr.split(",");` Zerlegt den Strig in Array. Geschnitten wird bei jedem Komma oder " " bei jedem Leerzeichen