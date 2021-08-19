const zeitFeld = document.getElementById("id_time");
const datumFeld = document.getElementById("id_date");


function init(){
    console.log('init');
    const gIn = document.getElementById('id_q');
    const txForm = document.getElementById('id_txForm');
    txForm.addEventListener('submit', onSubmit);
    document.getElementById('id_kmBtn').addEventListener('click', sendRoute);
    document.getElementById('id_reset').addEventListener('click', () =>{
        txForm.reset();
    });

    const stInput = document.getElementsByClassName('stInput');
    stInput[0].addEventListener('input', gCopy);
    stInput[0].addEventListener('click', gCopy);
    for(let i = 0; i< stInput.length; i++){
        stInput[i].addEventListener('input', autocomplete);
        autocomplete(stInput[i], offenbach);
    }

    const citySel = document.getElementsByClassName('citySel');
    citySel[0].addEventListener('change', gCopy);

    // console.log(citySel.length);
    for(let i = 0; i< citySel.length; i++){
        citySel[i].addEventListener('change', citySelect);
        function citySelect(){
            console.log('Hier');
           console.log('citySelect: ' + citySel[i].value);
            let cityVal = citySel[i].value;
             switch (cityVal){
                 case 'Offenbach am Main':
                    autocomplete(stInput[i], offenbach);
                    break;
                case 'Frankfurt am Main':
                    autocomplete(stInput[i], frankfurt);
                    break;
                case 'Mühlheim am Main':
                    autocomplete(stInput[i], muehlheim);    
                    break;
             }
        }
    }



function gCopy(){
    gIn.value = stInput[0].value + ', ' + citySel[0].value;
}


    

function autocomplete(inp, arr) {
    var currentFocus;
    inp.addEventListener('input', function(e) {
        var a, b, i, val = this.value;
        closeAllLists();
        if (!val) { return false;}
        currentFocus = -1;
        a = document.createElement("DIV");
        a.setAttribute("id", this.id + "autocomplete-list");
        a.setAttribute("class", "autocomplete-items");
        this.parentNode.appendChild(a);
        for (i = 0; i < arr.length; i++) {
          if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
            b = document.createElement("DIV");
            b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
            b.innerHTML += arr[i].substr(val.length);
            b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
                b.addEventListener("click", function(e) {
                inp.value = this.getElementsByTagName("input")[0].value;
                closeAllLists();
                gCopy();
            });
            a.appendChild(b);
          }
        }
    });
    inp.addEventListener("keydown", function(e) {
        var x = document.getElementById(this.id + "autocomplete-list");
        if (x) x = x.getElementsByTagName("div");
        if (e.keyCode == 40) {
          currentFocus++;
          addActive(x);
        } else if (e.keyCode == 38) { //up
          currentFocus--;
          addActive(x);
        } else if ((e.keyCode == 13)||(e.keyCode == 39) || (e.keyCode == 9)){
          e.preventDefault();
          if (currentFocus > -1) {
            if (x) x[currentFocus].click();
          }
        }
    });
    function addActive(x) {
      if (!x) return false;
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
  function sendRoute(){
      const route = {
          startA: stInput[0].value + ', ' + citySel[0].value,
          zielA: stInput[1].value + ', ' + citySel[1].value,
         
      }
      console.log(route);
  }
}

function onSubmit(e){
    e.preventDefault();
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
'Ahornstraße','Albert-Schweitzer-Straße','Albertstraße','Alfred-Delp-Straße','Alter Frankfurter Weg','Am Alten Friedhof','Am Dreispitz','Am Grünen See','Am Hansteinweiher','Am Letzten Busch','Am Maienschein','Am Schwimmbad','Am Waldgraben','Am Wingertsweg','Amselweg','An Den Hirtenwiesen','An der Hildebrandsmühle','An der Jünglingshecke','Angergasse','Anne-Frank-Straße','Anton-Dey-Straße','Apfelbaumgasse','Arndtstraße','Auf Den Hirtenwiesen','August-Bebel-Straße','Außenliegend','Aussiger Straße','Austraße','Bachgasse','Bahnhofstraße','Basaltstraße','Bebraer Straße','Beethovenstraße','Benzstraße','Bernhardstraße','Bert-Brecht-Straße','Bertha-Von-Suttner-Weg','Bettinastraße','Bieberer Straße','Bieberer Weg','Birkenwaldstraße','Bischof-Kaiser-Straße','Bischof-Ketteler-Straße','Bleichstraße','Blumenstraße','Bornstraße','Bornweg','Borsigstraße','Brentanostraße','Breslauer Straße','Brückenstraße','Brühlweg','Brunnenstraße','Brunnenweg','Buchenweg','Bürgermeister-Beheim-Straße','Bürgermeister-Hainz-Straße','Büttnerstraße','Carl-Zeiss-Straße','Charles-Ottina-Straße','Daimlerstraße','Dammstraße','Dieselstraße','Dietesheimer Straße','Dietrich-Bonhoeffer-Straße','Dresdener Straße','Dürerstraße','Ebertstraße','Edith-Stein-Straße','Eigenheimstraße','Elbestraße','Elisabethenstraße','Erlenweg','Ernst-Abbe-Straße','Fackelswiesenweg','Fährenstraße','Feldbergstraße','Feldstraße','Feststraße','Fichtestraße','Forsthausstraße','Forstweg','Franz-Jakoby-Straße','Freiherr-vom-Stein-Straße','Friedensstraße','Friedhofsweg','Friedrich-Ebert-Straße','Friedrichstraße','Fritz-Erler-Straße','Fuggerstraße','Fünfhäusergasse','Gartenstraße','Geleitstraße','Gerhart-Hauptmann-Straße','Goerdelerstraße','Goethestraße','Gottfried-Keller-Straße','Grenzstraße','Grimmstraße','Gutenbergstraße','Haingrabengasse','Hallgartenstraße','Hanauer Straße','Händelstraße','Hauffstraße','Hauptstraße','Hausener Straße','Hausener Weg','Hegelstraße','Heinestraße','Heinrich-Böll-Straße','Helpertseestraße','Henri-Dunant-Straße','Herderstraße','Hermann-Hesse-Straße','Hermann-Löns-Straße','Herrnstraße','Hindemithstraße','Hirschgasse','Hoffmannstraße','Holbeinstraße','Im Brückfeld','Im Heimgarten','Im Steinbeunerfeld','In der Seewiese','Industriestraße','Jahnstraße','Jean-Monnet-Straße','Josefstraße','Karlstraße','Käthe-Kollwitz-Straße','Kettelerstraße','Kirchborngasse','Kirchstraße','Kirchweg','Kolpingstraße','Konrad-Adenauer-Straße','Körnerstraße','Kreuzstraße','Krummstraße','Lämmerspieler Straße','Lämmerspieler Weg','Leipziger Straße','Leonhardstraße','Leopoldstraße','Lerchenweg','Lessingstraße','Leuschnerstraße','Lilienweg','Lindenstraße','Louis-Raverat-Straße','Ludwigsplatz','Ludwigstraße','Luisenstraße','Mainstraße','Mainstweg','Marktstraße','Memelstraße','Mozartstraße','Mühlheimer Straße','Mühlstraße','Müllerweg','Nelkenweg','Neustraße','Obermainstraße','Obertshäuser Straße','Oberwiese','Odenwaldstraße','Offenbacher Straße','Offenbacher Weg','Otto-Hahn-Straße','Paulstraße','Pestalozzistraße','Peterstraße','Pfaffenbrunnenweg','Pfarrgasse','Philipp-Reis-Straße','Quellenweg','Querstraße','Raabestraße','Rabenlohweg','Rathenaustraße','Rilkestraße','Ringstraße','Rittelsweg','Robert-Bosch-Weg','Robert-Koch-Straße','Robert-Schuman-Straße','Rodaustraße','Roseggerstraße','Rosenweg','Rösterweg','Rote-Warte-Straße','Rubensstraße','Rückertstraße','Rumpenheimer Straße','Sackgasse','Saint-Priest-Straße','Schillerstraße','Schlehenstraße','Schlesierstraße','Schmiedegasse','Schubertstraße','Schulstraße','Schumacherstraße','Senefelderallee','Siedlerstraße','Siemensstraße','Spessartstraße','Stauffenbergstraße','Steinheimer Straße','Steinkautenweg','Sudetenstraße','Südring','Tannenweg','Taunusstraße','Thomas-Mann-Straße','Tiefenorter Ring','Tilsiter Straße','Trachstraße','Tränkgasse','Tulpenweg','Uhlandstraße','Ulmenstraße','Unter den Eichen','Untermainstraße','Vogelsangstraße','Waldheimer Straße','Waldstraße','Weingartenweg','Wichernstraße','Wiesenstraße','Wilhelm-Busch-Straße','Wilhelm-Leuschner-Straße','Wilhelmstraße','Wingertstraße','Zeppelinring','Zimmerstraße','Zum Markwald'
  ];


// #####################################################
// #####################################################
// #####################################################

function tellTime(){
    let now = new Date();
    myH = now.getHours(); //.toString().padStart(2, 0);
    let myM = now.getMinutes().toString().padStart(2, 0);
    let myDay = now.getDay();
    let myDate = now.getDate().toString().padStart(2, 0);
    let myM_ = now.getMonth()+1; 
    let myMonth = myM_.toString().padStart(2, 0);
    const tage = ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"];
    let myTime = myH.toString().padStart(2, 0) + ":" + myM; // ":" + myS;
    var myDatum = tage[myDay] + " " + myDate + "." + myMonth;
    zeitFeld.innerText = myTime;
    datumFeld.innerText = myDatum;
    // var tarifFeld = document.getElementById('id_tarif');
    // if((myH > 5 ) && (myH < 22)){
    //   tarif = 54;
    //   tarifFeld.textContent = "Normaltarif: € 0,10 für 54 Meter (ca. € 1,85 pro km)"
    // } else {
    //   tarif = 51; 
    //   tarifFeld.textContent = "Nachttartif: € 0,10 für 51 Meter (ca. € 1,95 pro km)"
    // }
  }
 
 // #####################################################
 // #####################################################
 


 // autocomplete(document.getElementById("startStr"), frankfurt);
  document.addEventListener('DOMContentLoaded', init);
  setInterval(tellTime, 1000);

