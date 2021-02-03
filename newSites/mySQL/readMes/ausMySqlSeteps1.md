# Node Express und MySQL
Weitere Informationen zu MySQL (Erst-Einrichtung) im mySqlReadMe.md
Informationen zur Instalation nd Verwednung von dotenv in der dotenvReadMe.md Datei.


## Cheatshet
Ein Cheetsheet von Brad Travery ist [hier](https://gist.github.com/bradtraversy/c831baaad44343cc945e76c2e30927b3)

---
# Session starten

Nr| WAS            | WIE 
--|----------------|-----------------------
1.| My SQL starten:| Mac Systemeinstellungen
2.| Pfad freigeben:|export PATH=${PATH}:/usr/local/mysql/bin
3.| Anmelden:  | mysql -u usernname -p

### ACHTUNG: Für die Erstanmeldung braucht man das Rootpasswort.
In index.js werden zunächst die benötigten Packete eingebundn

```javascript
const express =require('express');
const mysql =require('mysql');
```
Erst kommt das **Setup** für die Verbindung. Falls die Datenbank noch nicht existiert muss die letzte Zeile `database: 'chatbase',` auskomentiert werden.

Mit der Funktion `db.connect()`wird die Datenbank anschließend verbunden.


```javascript
const db = mysql.createConnection({
  host: 'localhost',
  user: 'andy',
  password: 'XXXXXXX',
  database: 'chatbase' //<--- Auskomentieren, wenn es die DB nicht gibt
});

db.connect((err)=>{
  if(err){
    throw err;
  }
  console.log('Deine Datenbank hat sich mit der Machine verbunden');
});
```
Falls tatsächlich noch keine Datenbank existieren sollte, was ziemlich unwahrscheinlich ist, könnte über eine Route-Funktion eine neue Datenbankk erzeugen. Dabei wird einfach, der entsprechnde Command-Line Befehl `sql = 'CREATE DATABASE chatbase';` übergeben.
 Aber das ist wirklich sehr unwahrscheinlich.

 ```javascript
app.get('/createdb',(req, res)=>{
  let sql = 'CREATE DATABASE chatbase';
  db.query(sql, (err,result) => {
    if (err) throw err;
    console.log(result);
    res.send('Deine Datenbank wurde für dich gemacht');
  });
});
```

Auf die selbe Art wird hier ein neuer **Table** erzeugt:

```javascript
app.get('/ctable',(req, res) => {
  let sql = 'CREATE TABLE posts(id int AUTO_INCREMENT, title VARCHAR(255), body VARCHAR(255), PRIMARY KEY (id))';
    db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send('Ein neuer Tisch für blöder Fisch');
  });
});
```
Der Rout für neue Posts ist auch nur ein klein wenig anders gebaut:
```Javascript
app.get('/addpost',(req, res) => {
  let post = {title: 'Post One', body: 'Hier könnte jetzt eine Menge Post-One-Text stehen. Der über das Platzhalter-Fragezeichen eingesaugt wird.'};
    let sql = 'INSERT INTO posts SET ?';
    let query= db.query(sql, post, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send('Blödes Poster Nummer One');
  });
});

```
```JSON
OkPacket {
  fieldCount: 0,
  affectedRows: 1,
  insertId: 3,
  serverStatus: 2,
  warningCount: 0,
  message: '',
  protocol41: true,
  changedRows: 0
}
```
## POST ABFRAGEN

Für die Abfrage von Posts wird ein Template String (mit Backticks genutzt), das ermöglicht das einsetzen von Variables 

```js
app.get('/getpost/:id',(req, res) => {
  let sql = `SELECT * FROM posts WHERE id = ${req.params.id}`;
  let query= db.query(sql, (err, results) => {
    if (err) throw err;
if (err) throw err;
console.log(results);
res.send('Posts fetched...');
});
});
```
Der Post kann jetzt mit `http://localhost:3000/getpost/4` abgefragt werden.

**PROBLEM:** Wenn man am Ende **"/:4"** eingiebt Stürzt der Server ab. 

---
# Update 
```js
// UPADTE Post
app.get('/updatepost/:id',(req, res) => {
  let newTitle = 'Meine neue Seite';
  let sql = `UPDATE posts SET title = '${newTitle}' WHERE id = ${req.params.id}`;
  let query= db.query(sql, (err, results) => {
    if (err) throw err;
if (err) throw err;
console.log(results);
res.send('Haha, Da haben wir ein kleines Update gemacht...');
});
});
```
`http://localhost:3000/updatepost/2`

---
# Post LÖSCHEN

```js
// POST LÖSCHEN
app.get('/deletepost/:id',(req, res) => {
  let sql = `DELETE FROM posts WHERE id = ${req.params.id}`;
  let query= db.query(sql, (err, results) => {
    if (err) throw err;
if (err) throw err;
console.log(results);
res.send('Zack, weg ist das Ding');
});
});
```
`http://localhost:3000/deletepost/2`
___




## DatenTypen

|**id** | **First Name** | **Last Name** | **email** | **Password** 
-------|----------------|---------------|-----------|-------------
|1|Andy| Theke|andy@mehlbocks.de| gemein234|
|2|Peter|Lustig|lustig@peter.de|ramses123
|3|Charly|Harrig|mr.charly@affenhaus.net|nö000|
|4|Lady|Feint|out@now.de|866281MY2|

### Gängige Datentypen
Verwendeung| Möglichkeitein
--------|---------------------------
Numeric | INT, TINYINT, BIGINT, FLOAT
String|VARCHAR, TEXT, LONGTEXT, CHAR
Dates| DATE, DATETIME, TIMESTAMP
Others|BINARY, JSON

- VARCHAR:  Names , Emails (max 255 Charcters)
-  Text: zB Blog Posts (max 65000 Characters)
-  LONGTEXT: Für sehr lange Texte
-  CHAR: ?

---  


Dann lassen wir uns eine Liste aller Benutzer anzeigen:

```
SELECT User, Host FROM mysql.user;
```

und uns dann als root verbaschieden.
### Ausloggen:
```
exit
```

### Einem Benutzer die Rechte entziehen:
```
REVOKE ALL PRIVILEGES, GRANT OPTION FROM 'someuser'@'localhost';
```
### Einen Benutzer löschen:
```
DROP USER 'someuser'@'localhost';
```

---
In der Comand Line nimmt mySql Multiline Statemments
Jedes Statement wird mit einem Semikolon beendet.

---

# Eine Datenbank aus der Command Line erzeugen

Wir melden uns wieder mit `mysql -u andy -p` und geben das Passwort ein.

### Datenbanken Auflisten:

```
SHOW DATABASES
```
### Datenbank erzeugen:

```
CREATE DATABASE chatDB;
```
### Datenbank löschen:
```
DROP DATABASE chatDB;
```
### Datenbank auswählen / benutzen:
```
USE chatDB;
```
---
# TABLES

### Einen Table ereugen:

```
CREATE TABLE users(
id INT AUTO_INCREMENT,
   first_name VARCHAR(100),
   last_name VARCHAR(100),
   user_name VARCHAR(100),
   email VARCHAR(50),
   password VARCHAR(20),
   telefon VARCHAR(100),
   position VARCHAR(100),
   date_ob VARCHAR(100),
   is_admin TINYINT(1),
   register_date DATETIME,
   PRIMARY KEY(id)
);
```


```
CREATE TABLE `Movies`(
`id` INT(11) AUTO_INCREMENT,
   `title` VARCHAR(255),
   `year` int(11),
   PRIMARY KEY(`id`)
);
 ENGINE=InnoDB DEFAULT CHARSET=utf8;
```
### Eine Reihe hinzufügen:

```
INSERT INTO users (first_name, last_name, user_name, email, password, telefon, position, is_admin, register_date) values ('Dogtor', 'Nott', 'dog_nott', 'dog.nott@hormail.com', '123456','065555555', 'runner', 1, now());
```


```
INSERT INTO movies (title, year ) VALUES ('Iron Man`, 2008), ('Thor', 2011), ('Captain America', 2012);
----
# Workbench