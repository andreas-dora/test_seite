#Gulp Setup

Vorab muss ```gulp-dir -g``` instaliert worden sein.

Folgende Schritte sind zu tun:

```npm init```

```install --save-dev gulp gulp-sass browser-sync```

```touch gulpfile.js```

---

Die Datei **gulpfile.js** bekommt folgenden Inhalt:

```js
function style() {
  // Wo ist die scss-Datei?
  return gulp.src('./scss/**/*.scss')
  // Diese Datei durch den compiler schicken
    .pipe(sass())
    .pipe(sass().on('error', sass.logError))
  // Wo soll die CSS-Datei gespeichert werden  
    .pipe(gulp.dest('./css'))
  // Alle Änderungen Streamen  
    .pipe(browserSync.stream());
}

function watch(){
  browserSync.init({
    server: {
      baseDir: './'
    }
  });
  gulp.watch('./scss/**/*.scss', style);
  gulp.watch('./*.html').on('change', browserSync.reload);
  gulp.watch('./js/**/*.js').on('change', browserSync.reload);

}

exports.style = style;
exports.watch = watch;

```
---

Die Normalize-Datei


https://necolas.github.io/normalize.css/8.0.1/normalize.css