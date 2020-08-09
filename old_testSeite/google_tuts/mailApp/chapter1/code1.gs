function simpleMail() {
  
  const ss = SpreadsheetApp.getActiveSpreadsheet(); // Auf das verwendete Google Tabellen Datei zugreifen
  const tab = ss.getSheetByName("One"); // Wählt die gewünschte Tabelle (tab) aus.
  
  const nZ ="\n"; // Erzeugt in einem Javaskript-String eine neue Zeile.
  
  const kontakt = tab.getRange("B1").getValue(); // Mailadresse des Empfängers
  const absender = tab.getRange("B3").getValue(); // Meine Mailadresse
  
  const betreff = tab.getRange("B5").getValue();
  const anrede = tab.getRange("B6").getValue();
  const text = tab.getRange("B7").getValue();
  const gruss = tab.getRange("B8").getValue();
  const meinName = tab.getRange("B9").getValue();
  
MailApp.sendEmail(kontakt, betreff, anrede + nZ + text + nZ + gruss + nZ, meinName);
    
}