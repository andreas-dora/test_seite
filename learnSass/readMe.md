# Sass
  
## Inhalt

  - Vorteile
  - Gliederung (imports)
  - Mixins
  - Nesting + Parent Selectors
  
--- 

## Vorteile

### Webkit & Co
Sass erzeugt automatisch alle Kompatibilitätszusätze für die verschiedenen Browser.
  
**Beispiel:**  

---
## Gliederung
Mit Sass kann der CSS-Code auf mehrere Dateien aufgeteilt werden. zB.

- Variablen
- Typo
- Components
- Grid

Dafür erstellen wir neben der Hauptdatei ```main.scss``` für die Abschnitte weitere Dateien, deren Namen mit einem Unterstrich beginnen müssen. 
zB.
```
_vari.scss
_typo.scss
_compo.scss
_grid.scss
```
In unserer ```main.scss```-Datei importieren wir dann die einzelnen Bausteine wie folgt:
```css
@import "./vari";
@import "./grid";
```

---

## Mixins
  
  Sich wiederholende Code-Blöcke können in 'Mixins' zusammengefast werden. 

```css
@mixin flexCenter {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
```

Wird das Mixin dann benötigt ruft man es im entsprechenden Block auf.
```css
section{
  @include flexCenter();
}
```
---

## Mixins mit Argumenten


Einem Mixin können auch zusaätzliche Argumente übergeben werden. In diesem Besipiel die ```flex-direction```. Dazu erstellt man hinter dem Namen des Mixins in Klammen eine Variable.  
```@mixin flexCenter($flex-direction) {```  
im Mixin wird die Variable an  entsprechender Stelle untergebracht.  
```css  
@mixin flexCenter($flex-direction) {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: $flex-direction;
}  
```

Benutzt man das Mixin nun in seiner SCSS-Datei muss das entsprechende Argument ('column' oder 'row') beim Aufrufen in Klammern übergeben werden.

```css
section{
  @include flexCenter(column);
}
```

In der CSS-Datei wird nun folgendes eingetragen:

```css
section {
  height: 100vh;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
}
```


