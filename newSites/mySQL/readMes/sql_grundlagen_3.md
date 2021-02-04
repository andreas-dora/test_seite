Title: MySQL_Grundlagen_3_AND_NOT_OR
Author: Andreas Breitwieser
Date: 03.02.21

# MySQL Grundlagen 3



---

## Filterbedingungen verknüpfen
##  AND (NOT) & OR (NOT)

Michale Laube schreibt in Einstieg in SQL 
> Für die logischen Verknüpfungsoperatoren gelten die Gesetze der boolschen Algebra.


#### AND:

AND verknüpft innerhalb der WHERE Klausel. AND liefert true, wenn alle verknüpften Bedingungen wahr sind:

| Bedingung 1 | Bedingung 2 | Ergebnis |
|--------------|-------------|---------|
|true | true | true |
| false | false | false | 
| false | true | false |
| true | false | false |

Also ist das Ergebnis der Gesamtaussage nur wahr, wenn alle mit AND verknüpften Bestandteile wahr sind.

---

### SQL-Bedingungen verknüpfen

In der Datenbank werden Mitarbeiter gesucht die Kinder haben und dennoch Überstunden leisten.

```sql
SELECT
	vorname,
    name,
    ueberstunden,
    anzahlkinder
FROM
	mitarbeiter
WHERE
	ueberstunden>0 AND anzahlkinder>0;
	```
 
---

Mehr Bedingungen verknüpfen:


```sql
SELECT
	vorname,
    name,
    ueberstunden,
    anzahlkinder,
    abteilung,
    umsatz
FROM
	mitarbeiter
WHERE
	ueberstunden>0 AND anzahlkinder>0 AND abteilung = 'Verkauf';
	```
	
---

## OR

Verknüpft man Bedingungen mit **OR** muss nur eine wahr sein.

| Bedingung 1 | Bedingung 2 | Ergebnis |
|--------------|-------------|---------|
|true | false | true |
| false | true | true | 
| true | true | true |
| false | false | false |	


```sql

SELECT
	vorname,
    name,
    ueberstunden,
    anzahlkinder,
    abteilung,
    umsatz
FROM
	mitarbeiter
WHERE
	abteilung = 'Verkauf' OR
    abteilung = 'Personal' OR
    abteilung = 'Vertrieb';
   ```
    

---
      
    
### AND NOT

Werden zwei Bedingungen mit **AND NOT** verknüpft darf nur die vor AND NOT wahr sein:

 | Bedingung 1 | Bedingung 2 | Ergebnis |
|--------------|-------------|---------|
|true | true | false |
| false | false | false | 
| true | true | true |
| true | false | false |

---
 

```sql
SELECT 
	vorname, 
    name, 
    ueberstunden, 
    anzahlkinder, 
    austrittsgrund 
FROM 
	mitarbeiter
WHERE
	austrittsgrund IS NOT NULL AND NOT 
	austrittsgrund='ruhestand';
	````
	
---

### OR NOT Verknüpfunng

Wie bei OR Verknüpfungen braucht auch bei der Negation nur ein Kriterium erfüllt werden:


| Bedingung 1 | Bedingung 2 | Ergebnis |
|--------------|-------------|---------|
|true | false | true |
| false | true | false | 
| true | true | true |
| false | false | true |	

---

```sql
SELECT
	name,
	abteilung
FROM	
	mitarbeiter
WHERE
abteilung='Einkauf' OR NOT abteilung='Personal';
```	
---


## Verknüpfungen kombinieren 

Werden mehrere Verknüpfungen kombiniert hat immer **AND** vorrang. 

```sql
SELECT
	name,
	urlaubstage,
	urlaubgenommen
FROM
	mitarbeiter
WHERE
	urlaubstage=30 AND urlaubgenommen<20
OR
	urlaubstage=15 AND urlaubgenommen<10;
	```		

---

Die Reihenfolge lässt sich durch Klammern beeinflussen.
### Beispiel 1

```sql
SELECT
	name,
	steuerklasse,
	anzahlkinder,
	verheiratet
FROM
	mitarbeiter
WHERE
	steuerklasse = 1
AND
	anzahlkinder>0
 OR
	verheiratet='ja';	
	```

Hier werden auch Mitarbeiter Steuerklasse 3 angezeigt.
	
---

#### Beispiel 2

```sql
SELECT
	name,
	steuerklasse,
	anzahlkinder,
	verheiratet
FROM
	mitarbeiter
WHERE
	steuerklasse = 1
AND
	(
	anzahlkinder>0
 OR
	verheiratet='ja'
	);	
	```	

Hier werden nur Mitarbeiter Steuerklasse 1 angezeigt	