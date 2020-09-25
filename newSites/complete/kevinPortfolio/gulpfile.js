const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();


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