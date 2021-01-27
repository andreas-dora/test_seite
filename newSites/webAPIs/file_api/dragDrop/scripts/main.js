'use strict';
function init() {
  if (window.File && window.FileReader && window.FileList && window.Blob) {
    function handleFileSelected(event) {
      event.stopPropagation();
      event.preventDefault();

      let files = event.dataTransfer.files;                               // Alle ausgewählten Dateien
      let output = '';                                                    // Variable für Ergebnis
      for (let i = 0; i < files.length; i++) {                            // Über alle Dateien iterieren ...
        let file = files[i];                                              // ... jede Datei betrachten ...
        output += '<li>' +                                                // ... und Ergebnis-HTML zusammebauen, bestehend aus:
        '<strong>' + file.name + '</strong>' +                            // Dateiname
        ' (' + (file.type || "n/a") + ') - ' +                            // Dateityp
        file.size + 'bytes, ' +                                           // Dateigröße
        ' geändert am: ' +                                                // Änderungsdatum
        file.lastModifiedDate.toLocaleDateString() +
        '</li>';
      }
      document.getElementById('list').innerHTML = '<ul>' + output + '</ul>';
    }

    function handleDragOver(event) {
      event.stopPropagation();
      event.preventDefault();
      event.dataTransfer.dropEffect = 'copy';
    }

    let dropTarget = document.getElementById('target');
    dropTarget.addEventListener('dragover', handleDragOver, false);
    dropTarget.addEventListener('drop', handleFileSelected, false);
  } else {
    alert('File API nicht vollständig durch den Browser unterstützt');
  }
}
document.addEventListener('DOMContentLoaded', init);