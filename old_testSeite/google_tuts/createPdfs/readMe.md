Title: PDF Serienbriefe generieren
Author: Andreas Breitwieser
Keywords: Google Docs, Google Sheets, Google Tabellen,



# PDF Serienbriefe generieren

Erinnert sich überhaupt noch wer an Serienbriefe. 
Die Kunst, mit Hilfe einer Adresstabelle Tabelle und Platzhaltern einen Text automatisch zu personalisiern.

Doc Datein zu verschicken ist nicht schön, daher schauen wir lieber mal wie man mit Hilfe der Google Office Produkte und AppScript personalisierte PDFs in großer Menge zaubert.

## Vorbereitung

Auf unserem Google Drive suchen wir uns einen ruhigen Folder - am Besten einen ganz neuen.
Darin erstellen wir uns eine Tabelle mit den Adressdaten und eine Doc, in dem wir den Brief verfassen, layouten und mit Platzhaltern versehen.

Außerdem brauchen wir noch zwei Ordner
einen Für Docs, einen für PDFs.

Die Tabelle mit meinen Kontakten schaut etwa so aus:

|vorName|nachName|anrede|str|ort|
|-------|--------|------|---|---|
|Kostantin|Curz|Herr|Kleiner Katzenweg 23|17321 Bad Mudigen|
Lena|Lange|Frau|An der Mitte 104|47474 Groß Dadheim|
|Linda|Middlehouzé|Frau|Halbe Straße 11|89989 Gutwettern|


Die Textdatei:

In der Textdatei bringt man an den entsprechenden Stellen wie Briefkopf und Anrede Platzhalter unter.

Für den Anfang sollte so eine Zeile aber sicher ausreichen:

```
Hallo {platzHalterVorName}{platzHalterNachName}, 
jetzt wirds lustig.
```

Das reicht auf jeden Fall für den ersten Test.

## Und nun zum Skript:

In der Textdatei aktiviert man unter "Tools" den Skripteditor.


### Zugriff auf die Dateine und Folder

Um auf unsere Documente und Ordner zugreifen zu können brauchen wir die IDs 

Die IDs verstecken sich in den URLs. Bei 
Datein schaut das in etwa so aus:

```https://docs.google.com/document/d/13G5jPIj60RF8mEqqnki-FfPw8arYN0sRYT6qY4zbink/edit```

Wir brauchen den Teil zwischen "/d/" und "/edit".

```13G5jPIj60RF8mEqqnki-FfPw8arYN0sRYT6qY4zbink```

Die Folder sind ganz ähnlich:

```
https://drive.google.com/drive/u/0/folders/19i3cju5zimonGG58G5ObYaTQxaBlIDJp
```

auf den Teil hinter "/folders/" kommt es an:

```19i3cju5zimonGG58G5ObYaTQxaBlIDJp```


Weil wir die Sache, ja erstmal soft angehen wollten. Ignorieren wir die Tabellen mit unsren Kontakten für einen Moment, und arbeiten für den Anfang   


### Die erste hälfte Code
Datei: Code.gs

```javascript
function createPDF() {
  
  // Zum Testen werden drei Variablen vorerst hard gecoded:
  
  let vorName = "Linda";
  let nachName = "Mirinda";
  let betreff = "Wir verschicken PDFs";

// 1xgJLJMrI1ygW7zOOW3Q7Bt7vM9PWRqYwpnqXLjEqriQ  Tabelle ID

// 13G5jPIj60RF8mEqqnki-FfPw8arYN0sRYT6qY4zbink   Textdatei

// 1GcBKkZ_57n2Opk_V8eCD19ie7w-Vl49a  Vorlagen Ordner

// 19i3cju5zimonGG58G5ObYaTQxaBlIDJp   PDF Ordner

  const textVorlage = DriveApp.getFileById("13G5jPIj60RF8mEqqnki-FfPw8arYN0sRYT6qY4zbink"); // Die Vorlage für den Serienbrief.
  const textFolder = DriveApp.getFolderById("1GcBKkZ_57n2Opk_V8eCD19ie7w-Vl49a"); // In diesem Ordner werden die Kopien abgearbeitet
  const pdfFolder = DriveApp.getFolderById("19i3cju5zimonGG58G5ObYaTQxaBlIDJp");
  const textCopy = textVorlage.makeCopy(textFolder); // Wir erstellen und seine Arbeitskopie
  const textDoc = DocumentApp.openById(textCopy.getId());
  
  const body = textDoc.getBody(); // get Body erlaubt es im Textdocument zu arbeiten. Da müssen wir jetzt heufiger ran.
  body.replaceText("{platzHalterVorName}", vorName); // Hier wird noch die in Zeile 3 erzeugte Variable verwendet
  body.replaceText("{platzHalterNachName}", nachName);

  textDoc.saveAndClose();
  
  // Soweit funktioniert es schon mal:
  // Der arbeitsOrdner wurde erzeugt, eine Kopie der Text Datei erzeugt und auch die Platzhalter wurden ersetzt.
  
  // Im nächsten Schritt soll aus der Textdatei ein PDF erzeugt werden
  
  const pdfContentBlob = textCopy.getAs(MimeType.PDF); // Die Textdatei als PDF geladen.
  pdfFolder.createFile(pdfContentBlob).setName("myNewPDF");  // DriveApp erstellt aus den im PDFBlob enthaltenen Informationen eine neue Datei
  
  // Schauen wir nochmal in den Text Folder sieht man, dass für jedes PDF ein Doc erstellen.
  // Da diese Datein, keinen weiteren Zweck erfüllen, sollte man sie entsorgen, am besten automatisch.
  
  textFolder.removeFile(textCopy);
}
```


## 2. Tel

```javascript
function autoPdf(){
  const textVorlage = DriveApp.getFileById("13G5jPIj60RF8mEqqnki-FfPw8arYN0sRYT6qY4zbink"); // Die Vorlage für den Serienbrief.
  const textFolder = DriveApp.getFolderById("1GcBKkZ_57n2Opk_V8eCD19ie7w-Vl49a"); // In diesem Ordner werden die Kopien abgearbeitet
  const pdfFolder = DriveApp.getFolderById("19i3cju5zimonGG58G5ObYaTQxaBlIDJp");

  const getSheet = SpreadsheetApp.openById("1xgJLJMrI1ygW7zOOW3Q7Bt7vM9PWRqYwpnqXLjEqriQ");
  const kontakte = getSheet.getSheetByName("Leute");
  
//  const kontaktData = kontakte.getRange(2,1, 3, 6).getValues();  // Range = ab 2 Zeile, ab 1  erster Spalte, drei Zeilen lang, 5 Spalten breit)
  const kontaktData = kontakte.getRange(2,1, kontakte.getLastRow()-1, 6).getValues();
  
  kontaktData.forEach(row=> {
  createPDF(row[0], row[1], row[2], row[4], row[5], row[0] + " " +  row[1], textVorlage, textFolder, pdfFolder);
  });

}


function createPDF(vorName, nachName, gender, str, ort, pdfName, textVorlage, textFolder, pdfFolder) {
  
  
  const textCopy = textVorlage.makeCopy(textFolder); // Wir erstellen und seine Arbeitskopie
  const textDoc = DocumentApp.openById(textCopy.getId());
  
  const body = textDoc.getBody(); // get Body erlaubt es im Textdocument zu arbeiten. Da müssen wir jetzt heufiger ran.
  body.replaceText("{phVorName}", vorName); // Hier wird noch die in Zeile 3 erzeugte Variable verwendet
  body.replaceText("{phNachName}", nachName);
  body.replaceText("{phGender}", gender);
  if(gender === "Herr"){
  body.replaceText("{phGender2}", "geehrter");
  } else {
  body.replaceText("{phGender2}", "geehrte");
  } 
  body.replaceText("{phStr}", str);
  body.replaceText("{phOrt}", ort);


  textDoc.saveAndClose();
  
  // Soweit funktioniert es schon mal:
  // Der arbeitsOrdner wurde erzeugt, eine Kopie der Text Datei erzeugt und auch die Platzhalter wurden ersetzt.
  
  // Im nächsten Schritt soll aus der Textdatei ein PDF erzeugt werden
  
  const pdfContentBlob = textCopy.getAs(MimeType.PDF); // Die Textdatei als PDF geladen.
  pdfFolder.createFile(pdfContentBlob).setName(pdfName);  // DriveApp erstellt aus den im PDFBlob enthaltenen Informationen eine neue Datei
  
  // Schauen wir nochmal in den Text Folder sieht man, dass für jedes PDF ein Doc erstellen.
  // Da diese Datein, keinen weiteren Zweck erfüllen, sollte man sie entsorgen, am besten automatisch.
  
  textFolder.removeFile(textCopy);
  
}
```




https://www.youtube.com/watch?v=r9uU_KwGgzQ