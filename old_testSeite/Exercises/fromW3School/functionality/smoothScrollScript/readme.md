# Smooth Scroll mit Javascript


Die Function ```.getBoundingClientRect()``` gibt die DOMRect x / y koordinaten des Elements sowie entfernung von links, rechts, oben, unten und Höhe und Breite zurück.
Um nicht unötigt Daten zu sammeln wird der 

Mit dem Zusatz `.top` wird nur die Entfernung von Oben angegeben. In meine Fall 1151 Pixel.
  
```window.pageYOffset``` gibt an wie Weit das Fenster schon nach unten gescrollt wurde.  
  
In der Variable *distance* wird die Entfernung zwischen *targetPosition* und *startPosition* gespeichert.


```javascript
function smooth(target, duration){
  var target = document.querySelector(target);
  var targetPosition = target.getBoundingClientRect().top;
  var startPosition = window.pageYOffset;
  var distance = targetPosition - startPosition;
}

smooth('.section1', 1000);
```

---

## window.requestAnimationFrame()

The **window.requestAnimationFrame()** method tells the browser that you wish to perform an animation and requests that the browser calls a specified function to update an animation before the next repaint. The method takes a callback as an argument to be invoked before the repaint.

*it keeps track of the time*

Infos zu **window.requestAnimationFrame()** bei [MDN](https://developer.mozilla.org/de/docs/Web/API/window/requestAnimationFrame)

```javascript
unction smooth(target, duration){
  var target = document.querySelector(target);
  var targetPosition = target.getBoundingClientRect().top;
  var startPosition = window.pageYOffset;
  var distance = targetPosition - startPosition;
  var startTime = null;

  var startTime = null;

  function animation(currentTime){
  if(startTime === null) startTime = currentTime;
  var timeElapsed  = startTime - currentTime; 
  }
  requestAnimationFrame(animation); 
}

smooth('.section2', 1000);
```


---
## Easing Function

Die *Easing Funktion* peppt den Verlauf der Animation auf. Zum Glück muss die nicht von Grund auf neu geschrieven werden.  
Robert Penner hat auf [hier](http://www.gizma.com/easing/) eine Sortiment Funktionen veröffentlicht.

zB.

### Quartic easing in/out 
**acceleration until halfway, then deceleration**

```
Math.easeInOutQuart = function (t, b, c, d) {
	t /= d/2;
	if (t < 1) return c/2*t*t*t*t + b;
	t -= 2;
	return -c/2 * (t*t*t*t - 2) + b;
};
```
Der Funktion müssen vier Werte übergeben werden:

t = current time  
b = start value  
c = change in value  
d = duration

