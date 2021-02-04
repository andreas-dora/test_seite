Title: MySQL_Grundlagen_2
Author: Andreas Breitwieser
Date: 03.02.21

# MySQL Grundlagen 2


---

 ## Was ist NULL 

 

| Vorname | Name | Firma | Kd.Nr |
| ---------|--------|------|-------|
| Walter | Wurmer | Wurm Metal | 23 |
| Vera | Feint | | 24 |
| | Dr.  Not | Not Work | 25 |


In einer relationalen Datenbank werden fehlende Werte als **NULL** beschrieben. **Null** entspricht dem leeren Kästchen in einer Tabelle und sollte nicht mit der Zahl **'0'** verwechselt werden. 
Zeilenumbrüche, Leerzeichen oder Tabs sind ebenfalls nicht NULL.

---

```sql
SELECT
	name,
    name=NULL,
    name='Klein'
FROM
	mitarbeiter;
	```
	 
#### Ergebnis:

| name | name=NULL | name='Klein' |
|-------|-------------|--------------|
| Schneider | NULL | 0 |
| Müller | NULL | 0 |
| Klein | NULL | 1 |
| Lang | NULL | 0 |

In der mittleren Spalte wird der Name der Spalte auf Gleichheit mit **Null** verglichen. So eine Spalte ist nicht abrufbar. Ergebnis: NULL.
Die rechte Spalte Vergleicht den Wert von Name mit 'Klein'. '0' und '1' stehen für **true** und **false**
**Null**-Werte sind nie gleich (**=**). Denn NULL bedeutet das kein Wert vorhanden ist.
NULL = NULL wird immer den Wert NULL zurückgeben.
Neben true und false ist NULL ein dritter Wert. 

### Auf NULL prüfen

Um auf NULL zu  prüfen wird folgende Syntax verwendet:
 
```sql
SELECT
	name,
    vorname,
    abteilung
FROM
	mitarbeiter
WHERE
	umsatz IS NULL; 
```

#### Auf nicht NULL:


```sql
SELECT
	name,
    vorname,
    abteilung
FROM
	mitarbeiter
WHERE
	umsatz IS NOT NULL;
	```
	
	----
	