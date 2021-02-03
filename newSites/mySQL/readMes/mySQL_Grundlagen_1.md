Title: MySQL_Grundlagen
Author: Andreas Breitwieser
Date: 03.02.21


# MySQL Grundlagen


Eine Auswahl von Spalten einer Tabelle wird Projektion genannt. (Ausgewählte Spalten werden in Tabellenform projiziert.)
 Hinter dem Schlüsselwort **SELECT** folgen die Spaltenbezeichnungen. Hinter dem Schlüsselwort **FROM** wird die Tabelle genannt auf die die Datenbank zugreifen soll. 
 Wird mehr als eine Spalte abgefragt, werden diese mit Komma getrennt: 
 
  `SELECT name, vorname FROM mitarbeiter;`
 

 
 Mit Sternchen werden alle Spalten einer Tabelle ausgewählt:
 
 `SELECT * FROM mitarbeiter;`
  
 --- 
   
 ## Filtern mit WHERE
  
  - Numerische Werte vergleichen
  - Texte vergleichen
  - Textmuster vergleichen
  - Datumsangaben vergleichen
  - auf Intervalle prüfen
  - auf Existenz in Teilmengen prüfen
  - auf "Wert wurde definiert" prüfen
 
---

#### Vergleichsoperatoren in SQL

| Operator | Funktion | Ausgabe |
|----------|----------|----------|
| a=b | ist gleich | true / false |
| a<>b | ist **nicht** gleich | true / false |
| a!=b | ist **nicht** gleich | true / false |
| a<b | kleiner als | true / false |
| a<=b | kleiner oder gleich | true / false |
| c **BETWEEN** a **AND** b | ob Wert c zwischen ab und b liegt | true / false |
| c **NOT BETWEEN** a **AND** b | ob c **nicht** zwischen ab und b liegt | true / false |
| a **LIKE** Textmuster | ob a dem Textmuster entspricht | true / false |
| a **NOT LIKE** Textmuster | ob a dem Textmuster **nicht** entspricht | true / false |

 
 #### Beispiele
 
    
| Operator | Ergebnis |
|----------|----------|
| 1 = 1 | true |
|1 = 2 | false |
| 2<> 1 | true |
| 1 <> 1| false |
| 2 != 1 | true |
| 1!= 1 | false |
| 2 BETWEEN 1 AND 3 | true |


---

### Spalten auf Gleichheit prüfen

Aus der Mitarbeiter Tabelle sollen die Telefonnummern der von 'Frau Lang' herausgesucht werden:
 

```sql
SELECT
	name,
	vorname,
	festnetz,
	mobilnetz
FROM
	mitarbeiter
WHERE
	name = 'Lang';
```	
	 
---
	 
Es sollen alle Mitarbeiter herausgesucht werden die in einem bestimmten Gebiet wohnen (PLZ):

```SQL
SELECT
	name,
	vorname,
    plz
FROM
	mitarbeiter
WHERE
plz = 50000;
```

---

#### Ungleicheit
Sucht nach Mitarbeitern deren Steuerklasse nicht 3 ist.

```sql
SELECT
	name,
	vorname,
    steuerklasse,
    verheiratet
FROM
	mitarbeiter
WHERE
	steuerklasse<>3;
	```
 
---

#### Nach späterem Eintrittsdatum filtern

Daten werden zwar wie Strings mit einfachen Anführungszeichen versehen, lassen sich aber dennoch mit Größer- und Kleiner-Operatoren bearbeiten.
Hier wird nach Mitarbeiter gesucht die am  01.01.90 oder danach eingestellt wurden.

```sql
SELECT
	name,
	vorname,
    bonus,
    eintrittsdatum
FROM
	mitarbeiter
WHERE
	eintrittsdatum>='1990-01-01';
```

---

### Mit dem NOT-Operator verneinen
 
```
SELECT
	name,
	vorname,
	festnetz
FROM
	mitarbeiter
WHERE NOT
	name ='WINTER';
```	

### Doppelte Verneinung mit NOT und <>

Mit dieser doppelten Verneinung finden wir wieder die Festnetznummer von Frau Winter.

``sql
SELECT
	name,
	vorname,
	festnetz
FROM
	mitarbeiter
WHERE NOT
	name <>'WINTER';
```

Alle Mitarbeiter deren Bonus nicht größer als 500 ist:

```sql
SELECT
	name,
	vorname,
	bonus
FROM
	mitarbeiter
WHERE NOT
	bonus > 500;
```

#### Intervallprüfung BETWEEN

Mit der Intervallprüfung lässt sich feststellen ob ein Wert in einem bestimmten Bereich liegt.


```sql
SELECT
	name,
	vorname,
	umsatz
FROM
	mitarbeiter
WHERE
	umsatz 
 BETWEEN  50000 AND 170000;
 ```
 
 Mitarbeiter die zwischen dem 1981 und 84 eingestellt wurden:
 
 
 ```sql
 SELECT
	name,
	vorname,
	eintrittsdatum
FROM
	mitarbeiter
WHERE
	eintrittsdatum 
 BETWEEN  '1981-01-01' AND '1984-12-31';
 ```
 
 ---
 
 ### Nach Textmustern filtern: LIKE
 
 SQL ist nicht Case sensitive. Das gilt sowohl für das Script als auch den Inhalt der Datenbank.
 **Platzhalter**: Das Prozentzeichen '**%**' steht als Platzhalter für eine beliebige Menge an Zeichen: **%weg%**
Der **Underscore** steht für exakt ein Zeichen: **d_i%**
Mehrere Platzhalter


Sucht nach Mitarbeitern deren Vorname mit 'k' beginnt:

```sql
SELECT
	name,
	vorname,
	eintrittsdatum
FROM
	mitarbeiter
WHERE
	vorname LIKE 'k%';
```

---
 
 Sucht nach Mitarbeitern deren Vorname mit 'r' endet:

```sql
SELECT
	name,
	vorname,
	eintrittsdatum
FROM
	mitarbeiter
WHERE
	vorname LIKE '%r';
```

---
 
 
 Sucht nach Mitarbeitern deren Straße mit **S** beginnt und **str** enthält:
 
 ```sql
 SELECT
	name,
	vorname,
	strasse,
    hausnummer
FROM
	mitarbeiter
WHERE
	strasse LIKE 's%str%';
```

---	

#### Textmuster mit Verneinung: NOT LIKE

Findet Mitarbeiteradressen die in Straßen wohnen, deren Straßenname nicht **str** enthält:

```sql
SELECT
	name,
	vorname,
	strasse,
    hausnummer
FROM
	mitarbeiter
WHERE
	strasse NOT LIKE '%str%';
```
 
 **Nicht Verwechseln mit Verneinung die auf die gesamte Bedingung gültig ist**
 
 ---
 
 ## Auf Listen prüfen: IN
  
 Wenn Mitarbeiter gesucht werden die Schmidt oder Müller heißen, wird dafür nicht wie in JS ein or-Operator verwendet, sondern eine Liste der Möglichkeiten erstellt. Michael Laube nennt dies **Mengenzugehörigkeit**. 
 
 
 ```sql
SELECT
	\*  
FROM
	mitarbeiter
WHERE
	name
		IN (
			'Müller',
            'Schmidt',
            'schneider',
            'Funke'
		); 
	```
 
 #### Listenverneinung: NOT IN
 
 Wer arbeitet in einer Abteilung die nicht Vertrieb, Verkauf oder Personal ist?
  
```sql
 SELECT 
 	name,
    abteilung
FROM
	mitarbeiter
WHERE
	abteilung
    NOT IN
    (
    'Personal',
    'Vertrieb',
    'Verkauf'
    );
 ```
 
 
 ---
 
 
**Weiter gehts mit mySql_GRundlagen_2**