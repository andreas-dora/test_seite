// const startSt = document.getElementById('id_stStr');

// console.log(startSt);

// var schwester = startSt.nextElementSibling;

// console.log(schwester);

// var tante = document.getElementById('cS1');

// console.log(tante);

// var nichte = tante.firstElementChild;

// console.log(nichte);
// console.log(nichte.value);

// console.log('all at onece: ' +  startSt.nextElementSibling.firstElementChild.value)



function init(){
    console.log('init');
    const myForm = document.getElementById('id_txForm');
    myForm.addEventListener('submit', onSubmit);
    const sndBtn = document.getElementById('id_kmBtn');
    sndBtn.addEventListener('click', sendFun);
    const startStr = document.getElementById('id_stStr');
    
    const startCitySelect = document.getElementById('id_stC');
    const autoIn = document.getElementsByClassName('autoIn');
    console.log(autoIn.length);
    for(let i = 0; i<autoIn.length; i++){
        let tempCity = autoIn[i].nextElementSibling.firstElementChild.value;
        switch(tempCity){
            case 'Offenbach am Main':
                autocomplete(autoIn[i], offenbach);
                break;
            case 'Frankfurt am Main':
                    autocomplete(autoIn[i], frankfurt);
                    break;
                case 'Mühlheim am Main':
                    autocomplete(autoIn[i], muehlheim);    
                    break;
             
        }
        
    }


    autocomplete(startStr, offenbach);
    startCitySelect.addEventListener('change', citySelect);
    

    // var startCity = startCitySelect.value;
    function sendFun(){
        console.log(startCity.value);
    }

    function citySelect(){
        console.log('citySelect: ' + startStr.nextElementSibling.firstElementChild.value);
         startCity = startCitySelect.value;
         switch (startCity){
             case 'Offenbach am Main':
                autocomplete(startStr, offenbach);
                break;
            case 'Frankfurt am Main':
                autocomplete(startStr, frankfurt);
                break;
            case 'Mühlheim am Main':
                autocomplete(startStr, muehlheim);    
                break;
         }
    }
    

    

function autocomplete(inp, arr) {
    /*the autocomplete function takes two arguments,
    the text field element and an array of possible autocompleted values:*/
    var currentFocus;
    /*execute a function when someone writes in the text field:*/
    inp.addEventListener("input", function(e) {
        var a, b, i, val = this.value;
        /*close any already open lists of autocompleted values*/
        closeAllLists();
        if (!val) { return false;}
        currentFocus = -1;
        /*create a DIV element that will contain the items (values):*/
        a = document.createElement("DIV");
        a.setAttribute("id", this.id + "autocomplete-list");
        a.setAttribute("class", "autocomplete-items");
        /*append the DIV element as a child of the autocomplete container:*/
        this.parentNode.appendChild(a);
        /*for each item in the array...*/
        for (i = 0; i < arr.length; i++) {
          /*check if the item starts with the same letters as the text field value:*/
          if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
            /*create a DIV element for each matching element:*/
            b = document.createElement("DIV");
            /*make the matching letters bold:*/
            b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
            b.innerHTML += arr[i].substr(val.length);
            /*insert a input field that will hold the current array item's value:*/
            b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
            /*execute a function when someone clicks on the item value (DIV element):*/
                b.addEventListener("click", function(e) {
                /*insert the value for the autocomplete text field:*/
                inp.value = this.getElementsByTagName("input")[0].value;
                /*close the list of autocompleted values,
                (or any other open lists of autocompleted values:*/
                closeAllLists();
            });
            a.appendChild(b);
          }
        }
    });
    /*execute a function presses a key on the keyboard:*/
    inp.addEventListener("keydown", function(e) {
        var x = document.getElementById(this.id + "autocomplete-list");
        if (x) x = x.getElementsByTagName("div");
        if (e.keyCode == 40) {
          /*If the arrow DOWN key is pressed,
          increase the currentFocus variable:*/
          currentFocus++;
          /*and and make the current item more visible:*/
          addActive(x);
        } else if (e.keyCode == 38) { //up
          /*If the arrow UP key is pressed,
          decrease the currentFocus variable:*/
          currentFocus--;
          /*and and make the current item more visible:*/
          addActive(x);
        } else if ((e.keyCode == 13)||(e.keyCode == 39) || (e.keyCode == 9)){
          /*If the ENTER key is pressed, prevent the form from being submitted,*/
          e.preventDefault();
          if (currentFocus > -1) {
            /*and simulate a click on the "active" item:*/
            if (x) x[currentFocus].click();
          }
        }
    });
    function addActive(x) {
      /*a function to classify an item as "active":*/
      if (!x) return false;
      /*start by removing the "active" class on all items:*/
      removeActive(x);
      if (currentFocus >= x.length) currentFocus = 0;
      if (currentFocus < 0) currentFocus = (x.length - 1);
      /*add class "autocomplete-active":*/
      x[currentFocus].classList.add("autocomplete-active");
    }
    function removeActive(x) {
      /*a function to remove the "active" class from all autocomplete items:*/
      for (var i = 0; i < x.length; i++) {
        x[i].classList.remove("autocomplete-active");
      }
    }
    function closeAllLists(elmnt) {
      /*close all autocomplete lists in the document,
      except the one passed as an argument:*/
      var x = document.getElementsByClassName("autocomplete-items");
      for (var i = 0; i < x.length; i++) {
        if (elmnt != x[i] && elmnt != inp) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }
  /*execute a function when someone clicks in the document:*/
  document.addEventListener("click", function (e) {
      closeAllLists(e.target);
  });
  }
}
  const offenbach = [
"Adam-Marsch-Straße","Adolf-Kolping-Platz","Ahornstraße","Aliceplatz","Alicestraße","Alt-Bieber","Alter Heusenstammer Weg","Alter Heusenstammer Weg","Altkönigstraße","Am Alten Judenfriedhof","Am Aussichtsturm","Am Entensee","Am Grenzgraben","Am Heiligenstock","Am Hinterberg","Am Hirtenschild","Am Kandel","Am Klingenrain","Am Maingarten","Am Michelsee","Am Mühlwehr","Am Pfortengraben","Am Rebstock","Am Schießberg","Am Schneckenberg","Am Stützel","Am Waldeck","Am Waldpark","Am Waldschwimmbad","Am Wetterpark","Am Wiesengrund","An der Roten Warte","Andréstraße","Anhalter Straße","Annastraße","Annelise-Heikaus-Straße","Anton-Bruckner-Straße","Anzengruberstraße","Arendsstraße","Arndtstraße","Arnoldstraße","Arthur-Zitscher-Straße","Aschaffenburger Straße","Aschaffweg","Auf der Reiswiese","Auf der Rosenhöhe","August-Bebel-Ring","August-Birlenbach-Straße","August-Hecht-Straße","Auheimer Straße","Aulmannstraße","Austraße","Babenhäuser Schneise","Bachstraße","Backstraße","Bahnhofstraße","Beethovenstraße","Benzstraße","Bergstraße","Berliner Straße","Berliner Straße","Bernardstraße","Bert-Brecht-Straße","Bertha-Von-Suttner-Straße","Bethnal-Green-Straße","Bettinastraße","Bieberer Feldschneise","Bieberer Straße","Bieberer Straße","Bieberer Wiesenschneise","Bieberer Wiesenschneise","Biebernseeweg","Bierbrauerweg","Bildstockstraße","Birkenlohrstraße","Birkenlohrstraße","Birnenweg","Bischofsheimer Weg","Bismarckstraße","Bleichstraße","Blücherstraße","Blumenstraße","Bockschneise","Böhmerwaldweg","Boschweg","Brahmsstraße","Brandenburger Straße","Brandsbornstraße","Braunseeschneise","Bregenzer Straße","Breite Straße","Bremer Straße","Brinkstraße","Brockmannstraße","Bruchschneise","Brückenstraße","Brüder-Grimm-Straße","Brunnenweg","Brüsseler Platz","Buchenweg","Buchhügelallee","Buchrainweg","Buddenstraße","Bürgeler Straße","Bürgerplatz","Bürgerstraße","Carl-Legien-Straße","Carl-Maria-von-Weber-Straße","Carl-von-Ossietzky-Weg","Christian-Pleß-Straße","Clara-Grein-Straße","Cronberger Straße","Cronbergerstraße","Dag-Hammarskjöld-Platz","Daimlerstraße","Danziger Straße","Darmstädter Straße","Dickstraße","Dielmannstraße","Dieselstraße","Dietesheimer Straße","Dietzenbacher Straße","Ditmar-Schaup-Brücke","Domstraße","Donauweg","Dornbergerstraße","Dornbuschstraße","Dörnigheimer Straße","Dr.-Köhler-Straße","Dr.-Rebentisch-Straße","Dreieichring","Dreiherrnsteinweg","Eberhard-von-Rochow-Straße","Ebsenweg","Edelsheimerstraße","Edith-Stein-Straße","Eduard-Oehler-Straße","Egerländer Straße","Eginhardstraße","Eibenweg","Eichwaldweg","Eifelweg","Eigenheimstraße","Elbestraße","Elisabeth-Selbert-Steg","Elisabethenstraße","Ellenbogengasse","Elsa-Brändström-Straße","Elsawaweg","Else-Sterne-Roth-Straße","Emdener Straße","Emmastraße","Engelsgäßchen","Enkheimer Straße","Eppsteiner Straße","Erfaweg","Erich-Ollenhauer-Straße","Erlenbruchstraße","Erlenstegschneise","Erlenstegscshneise","Ermlandweg","Ernst-Griesheimer-Platz","Eschstraße","Eupener Straße","Europaplatz","Fachackerweg","Fachweg","Falltorstraße","Fechenheimer Straße","Feldbergweg","Feldschneise","Feldstraße","Felix-Mendelssohn-Straße","Ferdinand-Porsche-Straße","Feuerwehrplatz","Fichtestraße","Finkenstraße","Fischergasse","Flurstraße","Flutstraße","Forstmeisterschneise","Frankenstraße","Frankfurter Straße","Frankfurter Straße","Franz-Liszt-Straße","Französisches Gäßchen","Frauhohlwiesenweg","Freiherr-vom-Stein-Straße","Freiligrathstraße","Friedensstraße","Friedhofstraße","Friedrichsring","Friedrichstraße","Friesenstraße","Fritz-Erler-Straße","Fritz-Remy-Straße","Frühlingsaustraße","Fuchsbau","Fuldaweg","Gabelsbergerstraße","Gambachschneise","Gartenfeldstraße","Gartenstraße","Gaußstraße","Geisfeldkreisel","Geishornstraße","Geisschneise","Geleitsstraße","Georg-Büchner-Weg","Georg-Oswald-May-Weg","Gerberstraße","Gerhard-Becker-Straße","Gerhart-Hauptmann-Straße","Germaniastraße","Gersprenzweg","Geschwister-Scholl-Straße","Gießener Weg","Glockengasse","Goerdelerstraße","Goethering","Goethestraße","Goldbergstraße","Gottfried-Schaider-Straße","Grabenstraße","Gravenbruchweg","Grazer Straße","Groß-Hasenbach-Straße","Große Marktstraße","Großer Biergrund","Grünring","Gustav-Adolf-Straße","Gustav-Stresemann-Straße","Gutenbergstraße",
"Habichtswaldweg","Hafen","Hafenallee","Hafeninsel","Hafenplatz","Hainbachweg","Hainerweg","Hainstädter Straße","Hamburger Straße","Hanauer Straße","Händelplatz","Harrasweg","Hartmannstraße","Hauffstraße","Hauffstraße","Haupteinfahrt Sana Klinikum","Haydnstraße","Hebestraße","Heinrich-Heine-Straße","Heinrich-Krumm-Straße","Helene-Mayer-Straße","Herderstraße","Hergenröderstraße","Hergenröderweg","Hermann-Löns-Straße","Hermann-Steinhäuser-Straße","Hermannstraße","Herrnrainweg","Herrnstraße","Hertzweg","Herzogstraße","Hesselbuschstraße","Hessenring","Hessenstraße","Heusenstammer Schneise","Heusenstammer Weg","Heusenstammer-Feld-Schneise","Hintergasse","Hinterwaldweg","Hochrainstraße","Hochstädter Straße","Hochstraße","Hofstraße","Hohe Straße","Hölderlinstraße","Holzwiesenweg","Hospitalstraße","Hugenottenplatz","Hugo-Eberhardt-Weg","Hugo-Wolf-Straße","Humboldtstraße","Humboldtstraße","Humperdinckstraße","Hunsrückweg","Im Birkengrund","Im Eschig","Im Frankfurter Grund","Im Gartenfeld","Im Gartenrain","Im Großen Ahl","Im Hain","Im Mittelfeld","In den Bruchgärten","In den Lindengärten","In den Obstgärten","in Den Rosengärten","In den Tannen","in Den Weingärten","In der Kalkwiese","In der Tränk","Innsbrucker Straße","Isenburgring","J.-F.-Kennedy-Promenade","Jacob-Mönch-Straße","Jacques-Offenbach-Straße","Jägerweg","Jahnstraße","Jakob-Mönch-Straße","Jean-Weipert-Straße","Johann-Strauß-Weg","Johannes-Morhart-Straße","Jossaweg","Judenbuschschneise","Julie-Heraeus-Straße","Julius-Leber-Straße","Kahlweg","Kaiserleipromenade","Kaiserleistraße","Kaiserstraße","Kalte-Klinge-Schneise","Kantstraße","Karl-Ferdinand-Becker-Weg","Karl-Herdt-Weg","Karl-Nahrgang-Weg","Karlstraße","Karolingerstraße","Kasernenstraße","Kaufunger-Wald-Weg","Kékuléstraße","Kettelerstraße","Kiefern-Neuheeg-Schneise","Kinzigweg","Kirchenpfad","Kirchgasse","Kleewasem","Kleewasen","Kleine Bleiche","Kleine Marktstraße","Kleiner Biergrund","Kleines Gäßchen","Klingsporstraße","Klopstockstraße","Konrad-Adenauer-Straße","Kopernikusstraße","Körnerstraße","Kornkammer","Krafftstraße","Kreuzfeldweg","Kreuzstraße","Krimmerstraße","Krotzenburger Straße","Kühruhschneise","Kurfürstenstraße","Kurhessenplatz","Kurhessenstraße","Kurt-Schumacher-Straße","Kurt-Tucholsky-Straße","Kurze Straße","Lachwiesen","Lahnstraße","Lämmerspieler Weg","Lammertstraße","Landgraf-Friedrich-Straße","Landgrafenring","Landgrafenstraße","Langener Straße","Langschneise","Langschneise","Langstraße","Lärchenpfad","Lärchenschneise","Larochestraße","Laskastraße","Lausitzer Straße","Lauterbornweg","Lautzenhardtweg","Lehenstraße","Lehrstraße","Leibnizstraße","Leimenkautschneise","Leopold-Bode-Straße","Lessingstraße","Lichtenplattenweg","Liebigstraße","Lilienthalstraße","Lilistraße","Limburger Weg","Lindenstraße","Linsenberg","Linzer Straße","Lohrweg","Lohweg","Lortzingstraße","Löwenstraße","Lübecker Straße","Ludo-Mayer-Straße","Ludwigstraße","Luisenstraße","Lützowstraße","Maindammweg","Maingaustraße","Mainkurstraße","Mainländerstraße","Mainstraße","Mainuferradweg","Mainzer Ring","Manchotstraße","Marburger Weg","Marienstraße","Marktplatz","Markusplatz","Markwaldstraße","Marstallstraße","Martin Luther Park","Martin-Luther-Park","Masurenweg","Mater-Bonifacia-Weg","Mathildenplatz","Mathildenstraße","Matthias-Erzberger-Straße","Mauerfeldstraße","Mäuslachschneise","Max-Dienemann-Weg","Max-Reger-Straße","Maybachstraße","Mecklenburger Straße","Memeler Straße","Merianstraße","Merowingerstraße","Mistweg","Mittelschneise","Mittelseestraße","Mödlingstraße","Mozartweg","Mozartweg","Mühlbachweg","Mühlheimer Straße","Müllerweg","Müllerweg","Mümlingweg","Münzenbergerstraße",
"Nahestraße","Nasses Dreieck","Nasses Dreieck","Neckarstraße","Neue Schneise","Neuer Weg","Neugasse","Neusalzer Straße","Niddaweg","Niedergasse","Nordring","Obere Grenzstraße","Oberfeldstraße","Oberhofstraße","Obermühlstraße","Oberräder Weg","Obertshäuser Wegschneise","Odenwaldring","Offenbacher Straße","Oppelner Straße","Ostendplatz","Ostpreußenstraße","Ostschneise","Ostsschneise","Osw.-v.-Nell-Breuning-Straße","Oswald-Von-Nell-Breuning-Straße","Ottersfuhrstraße","Otto-Scheugenpflug-Straße","Otto-Steinwachs-Weg","Parkhaus Ziegelgasse","Parkstraße","Paul-Löbe-Straße","Pechschneise","Pfaffenweg","Pfarrer-Kaspar-Walter-Straße","Pfarrgasse","Philipp-Reis-Straße","Phillip-Ullrich-Straße","Phillipp-Ullrich-Straße","Pirazzistraße","Platz d.Deutschen Einheit","Platz Der Deutschen Einheit","Platz Des 9","Pommernstraße","Poststraße","Prinz-Georg-Straße","Provisorische Anbindung Zur Walter-Spiller-Brücke","Puteauxpromenade","Querstraße","Radfeldstraße","Rathausgasse","Rathenaustraße","Regina-Jonas-Weg","Rehschneise","Reichertweg","Reinhardswaldweg","Rembrücker Wegschneise","Rheinstraße","Rhönstraße","Richard-Wagner-Straße","Riethgasse","Robert-Koch-Straße","Rodauweg","Rödernstraße","Rohrmühlstraße","Rohrstraße","Rondellweg","Roseggerstraße","Rosenaustraße","Rostocker Straße","Rotdornweg","Rowentastraße","Rubensstraße","Rügener Straße","Rumpenheimer Schloßgasse","Rumpenheimer Straße","Saaleweg","Sachsenstraße","Saligstraße","Salomon-Formstecher-Weg","Salzburger Straße","Salzgäßchen","Samlandweg","Sandgasse","Schäferbornweg","Schäferstraße","Scharfensteinerstraße","Scheffelstraße","Schifferstraße","Schillerplatz","Schillerstraße","Schillstraße","Schlesierstraße","Schloßgartenstraße","Schloßgrabengasse","Schloßmühlstraße","Schloßstraße","Schmiedegasse","Schnegelbachweg","Schöffenstraße","Schönbornstraße","Schöne Aussicht","Schopenhauerstraße","Schreberstraße","Schubertstraße","Schuckertweg","Schulstraße","Schumannstraße","Schutzbaumstraße","Schwarzwaldweg","Seestraße","Seligenstädter Straße","Senefelderstraße","Sibeliusstraße","Siebeneichen","Siegfried-Guggenheim-Weg","Siemensstraße","Sigmund-Merzbach-Platz","Sinnweg","Sophie-Von-La-Roche-Platz","Spatzennest","Spessartring","Speyerstraße","Spießstraße","Sprendlinger Landstraße","Sprendlinger Weg","St.-Gilles-Straße","Stadthof","Starkenburgring","Staudenstraße","Staufenstraße","Stauffenbergstraße","Steinbrechpfad","Steinheimer Straße","Steinweg","Sternstraße","Stiftstraße","Stoltzestraße","Storchsrain","Strackgasse","Strahlenbergerstraße","Sudetenstraße","Sulzbachweg","Tambourweg","Tauberweg","Taunusring","Taunusstraße","Tempelseestraße","Tennisstraße","Thüringer Straße","Tilsiter Weg","Trappbörnchen","Tulpenhofstraße","Uhlandstraße","Ulmenstraße","Ulrichschneise","Untere Grenzstraße","Untergass","Valentin-Unkelbach-Weg","Viehweidschneise","Vilbeler Straße","Vogelsbergweg","Von-Behring-Straße","Von-Brentano-Straße","Von-Gluck-Straße","Vorderwaldweg","Wacholderpfad","Waitzenäckerstraße","Waldenburger Weg","Waldhofschneise","Waldhofstraße","Waldstraße","Waldstraße","Walpertswiesenweg","Walter-Spiller-Brücke","Warschauer Straße","Weidigweg","Weikertsblochstraße","Weilburger Weg","Weinbergstraße","Weißdornpfad","Welfenstraße","Wenkenwiesenweg","Werraweg","Weserstraße","Westerwaldweg","Wiener Ring","Wiesenstraße","Wikingerstraße","Wilhelm-Busch-Straße","Wilhelm-Leuschner-Straße","Wilhelm-Schramm-Straße","Wilhelm-Weber-Weg","Wilhelmsplatz","Wilhelmstraße","Wilhelmstraße","Willemerstraße","Willi-Bauer-Straße","Wingertstraße","Wintergasse","Wolframstraße","Wolfsheckenweg","Würzburger Straße","Yorckstraße","Ziegelstraße","Zu Den Mainwiesen","Zufahrt Tiefgarage","Zufahrt Wirtschaftshof","Zum Mühler","Zwingerweg","Äsele Starße"
];
  const frankfurt = [
      "APenis",
      "BLulu"

  ];

  const muehlheim = [
      "AMühl muma",
      "BMühlamuma"
  ];

 // autocomplete(document.getElementById("startStr"), frankfurt);
  document.addEventListener('DOMContentLoaded', init);

  function onSubmit(e){
    e.preventDefault();
}