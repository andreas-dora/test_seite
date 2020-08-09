# CSS Grid Auto-Fit & Auto-Fill
  
Ausgangsituation:

**HTML:**
```html
<body>
  <div class="gridContainer">
    <div class="quote">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores voluptates ab vitae nihil qui unde, ex, beatae eligendi adipisci hic fugit dicta eius laborum repellendus sint molestiae quia rem magnam.</p>
      <span>Jon Doe</span>
    </div>
    <div class="quote">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores voluptates ab vitae nihil qui unde, ex, beatae eligendi adipisci hic fugit dicta eius laborum repellendus sint molestiae quia rem magnam.</p>
      <span>Jon Doe</span>
    </div>
    <div class="quote">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores voluptates ab vitae nihil qui unde, ex, beatae eligendi adipisci hic fugit dicta eius laborum repellendus sint molestiae quia rem magnam.</p>
      <span>Jon Doe</span>
    </div>
    <div class="quote">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores voluptates ab vitae nihil qui unde, ex, beatae eligendi adipisci hic fugit dicta eius laborum repellendus sint molestiae quia rem magnam.</p>
      <span>Jon Doe</span>
    </div>
  </div>
</body>
```

  
  **CSS:**
  ```css
  body{font-family: Arial, Helvetica, sans-serif; background-color: cadetblue;
}
.gridContainer{
  padding: 3em;
  display: grid;
  grid-gap: 2em;
}
.quote{
  padding: 2em;
  border-radius: .3em;
  box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.3);
  background-color: ghostwhite;
}
p{
  margin-top: 0;
  margin-bottom: 16px;
}
span{
  font-weight: bold;
  position: relative;
  margin-left: 15px;
}
span::before{
  content: '';
  position: absolute;
  height: 1px;
  width: 10px;
  border-bottom: 2px solid black;
  top: 6px;
  left: -15px;
}
```


## Jr Dev Lösung:
  
Mit Media Queries arbeiten:
```css
@media (min-width: 550px){
  .gridContainer{
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 750px){
  .gridContainer{
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (min-width: 950px){
  .gridContainer{
    grid-template-columns: repeat(4, 1fr);
  }
}
```  

##Pro Lösung
  
  
Statt Mediaqueries kann Auto-Fit genutzt werden. Das gleiche Ergebnis mit viel weniger Code.

```css
.gridContainer{
  padding: 3em;
  display: grid;
  grid-gap: 2em;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}
```

Anstelle einer festen Anzahl wird auto-fit in die Repeat-Formel eingesetzt.

```repeat(auto-fit, minmax(250px, 1fr));```

    
---

### Unterschiedlich Breite Elemente


Wir geben einem der Elemente die  Klasse span-2 und bauen dafür ein Media-query


```css
@media (min-width: 550px){
  .span-2{
    grid-column: auto / span 2;
  }
}
```

---

## Auto-Fit


  
  MIt auto-fit werden die Elemente nicht Größer als im minmax Wer angeggeben.

