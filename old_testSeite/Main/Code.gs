function doGet() {
    var temp = HtmlService.createTemplateFromFile("boty_page");
    return temp.evaluate();
  
}

function userClicked(uIn){
  var id1 = "1zLyKM2wvVH-LhCuCkEw2eRJXKmxli1X29-ceL62kO3U";
  var ss = SpreadsheetApp.openById(id1);
  var ws = ss.getSheetByName("data");
  var nD = new Date();
  
  ws.appendRow([uIn.g1,uIn.uName, nD]); 
  ws.appendRow([uIn.g2, uIn.uName, nD]);
}

function include(filename){
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}