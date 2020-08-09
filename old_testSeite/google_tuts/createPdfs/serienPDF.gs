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
