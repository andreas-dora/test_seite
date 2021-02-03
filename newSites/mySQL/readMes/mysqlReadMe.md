# Erste Schritte mit MySql

## Cheatshet
Ein Cheetsheet von Brad Travery ist [hier](https://gist.github.com/bradtraversy/c831baaad44343cc945e76c2e30927b3)

---


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

### Drei Möglichkiten die Datenbank zu füttern
- über das Terminal
-  Desktop Tools wie MYSQL Workbench
-  Web Tools wie PHPMyAdmin

---
# Der Pfad zur Datenbak
- Mac OS: /usr/local/mysql/bin

***Wichtig:*** Der Pfad muss zum Profile der Terminal Application hinzugefügt werden.

Entwerder in der Terminal-Seession:

```
export PATH=${PATH}:/usr/local/mysql/bin
```

oder Permanten den pfad zu
`~/.bash_profile`
bzw
`~/.zshrc`
hinzufügen

```
echo 'export PATH="/usr/local/mysql/bin:$PATH"'
```

Test:
```
mysql --version
```

Vor dem Anmelden die MySql start. Dazu unter Mac Os Systemeinstellungen den neuen Punkt MySQL auswählen und Server starten drücken.

anschließen mit dem default Passwort einloggen. Dazu folgenden Befehl eingeben:

```
mysql -u root -p
```

Zu allererst muss das Root-Passwort geändert werden. Das geht mit folgendem Befehl:
```
ALTER USER 'root'@'localhost' IDENTIFIED BY 'neuesPasswortHier';
```
Danach können wir uns einen neuen User erstellen, den wir auch noch zum Admin machen müssen.
```
CREATE USER 'someuser'@'localhost' IDENTIFIED BY 'somepassword';
```


```
GRANT ALL PRIVILEGES ON * . * TO 'andy'@localhost;

FLUSH PRIVILEGES;
```

Nochmal nachsehen:

```
SHOW GRANTS FOR 'andy'@'localhost';

```


```
+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Grants for andy@localhost                                                                                                                                                                                                                                                                                                                                                              |
+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| GRANT SELECT, INSERT, UPDATE, DELETE, CREATE, DROP, RELOAD, SHUTDOWN, PROCESS, FILE, REFERENCES, INDEX, ALTER, SHOW DATABASES, SUPER, CREATE TEMPORARY TABLES, LOCK TABLES, EXECUTE, REPLICATION SLAVE, REPLICATION CLIENT, CREATE VIEW, SHOW VIEW, CREATE ROUTINE, ALTER ROUTINE, CREATE USER, EVENT, TRIGGER, CREATE TABLESPACE, CREATE ROLE, DROP ROLE ON *.* TO `andy`@`localhost` |
| GRANT BINLOG_ADMIN,CONNECTION_ADMIN,ENCRYPTION_KEY_ADMIN,GROUP_REPLICATION_ADMIN,PERSIST_RO_VARIABLES_ADMIN,REPLICATION_SLAVE_ADMIN,ROLE_ADMIN,SET_USER_ID,SYSTEM_VARIABLES_ADMIN,XA_RECOVER_ADMIN ON *.* TO `andy`@`localhost`                                                                                                                                                        |
+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
2 rows in set (0,07 sec)

mysql>
```


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
CREATE TABLE userRegister(
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
### Alle Tables anzeigen
```
SHOW TABLES;
```

### Eine Reihe hinzufügen:

```
INSERT INTO users (first_name, last_name, user_name, email, password, telefon, position, is_admin, register_date) values ('Dogtor', 'Nott', 'dog_nott', 'dog.nott@hormail.com', '123456','065555555', 'runner', 1, now());
```

----
# Workbench