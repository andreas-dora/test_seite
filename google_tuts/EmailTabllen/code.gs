function tabellenHtml() {
  const ss = SpreadsheetApp.getActiveSpreadsheet(); // Auf das verwendete Google TAbellen Datei zugreifen
  const tab = ss.getSheetByName("3. Bestellung"); // Wählt die gewünschte TAbelle (tab) aus.
  
  const betreff = tab.getRange("B2").getValue(); // holt sich die daten aus Zelle B2
  const anrede = tab.getRange("B3").getValue(); 
  const text = tab.getRange("B4").getValue(); 
  
  
  const kopf = tab.getRange("B26:E26").getValues(); //Holt sich die Daten aus der Kopfzeile der Tabelle 
  // ACHTUNG weil jetzt mehrer DAten abgefragt werden heist es Values - plural
  const produkt = kopf[0][0]; // greift auf Position 0 0 dees Arrays zu
  const flaschen = kopf[0][1];
  const liter = kopf[0][2];
  const menge = kopf[0][3];
  
  const eZ = 27; // ersteZeile unsere Bestelltabelle
  const lZ = tab.getLastRow(); // ermittelt die letzte Zeie
  
  const tabelle = tab.getRange(eZ,1,lZ-eZ, 4).getValues(); // holt die Daten aus der Tabelle und verstaut sie in einem Zweidimensionalen Array
  
  // #####################################
  
  // Nun müssen die Daten in den html Code
   
  const htmlVorlage = HtmlService.createTemplateFromFile("email");
  htmlVorlage.betreff = betreff;  // übergibt die Variable an eine gleichnamigeVAriable in der html DAtei
  htmlVorlage.anrede = anrede;
  htmlVorlage.text = text;
  
  htmlVorlage.produkt = produkt;
  htmlVorlage.flaschen = flaschen;  
  htmlVorlage.liter = liter;  
  htmlVorlage.menge = menge;
  htmlVorlage.tabelle = tabelle;
  
  // Um die Variablen in der HTML Datei verwenden zu können müsen größer und kleiner zeichen gesett werden <?= betreff ?> 
  
  // Sobald das Erledigt greifen wir den den inhalt der html Datei mit volgender Zeile
  
  const htmlForEmail = htmlVorlage.evaluate().getContent();
  
  console.log(htmlForEmail);
  // GmailApp.sendEmail(recipient, subject, body); Hinter dem Body packen wir unseren HTML Code
  
  
   MailApp.sendEmail("andreas.dora@me.com", "Mail Test", "Please Open with Love", { htmlBody: htmlForEmail });
  
 // GmailApp.sendEmail("andreas.dora@me.com", "Mail Test", "Please Open with Love",{ htmlBody: htmlForEmail });
  
}
