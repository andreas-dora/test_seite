# Cookies

Cookies sind kleine Textdateien die auf der Clientseite gespeichert werden.
Sie können dem Server mitteilen, ob der Client (innerhalb des Verfallsdatums) diese Seite schon einmal besucht hat.

### Inhalt:

#### Namen und Wert

Jeder Kecks braucht einen Namen und einen Wert. Bei Namen wird nicht zwischen Groß- und Kleinschreibung untreschieden. Bei Werten 

#### Domain und Pfad

Ein Cooke mit der Angabe **www.meine-seite.de** wird nur bei Anfragen an diese Domain gesendet.
Wenn etwa **www.meine-seite.de/team** angegebn ist wird der Cookie nur bei Anfragen an genau diese Seite mitgeschickt.



## Verwaltung

Die Dinger werden über die Eigenschaft cookie des document Object erstellt und verwaltet


Hinweis:
Bei lokalen HTML-Dateine kann es sein, dass standardmäßig kein Cookie gesetzt wird.
Chrome muss mit
`--enable-file-cookies`
dazu gebracht werden.


Hinweis:
`document.cookie = newCookie`
überschreibt nicht die Eigenschaften cookie 