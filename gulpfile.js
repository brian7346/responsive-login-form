const gulp = require("gulp");
const stylus = require("gulp-stylus");
const browserSync = require("browser-sync");

function css() {
  return gulp
    .src(["styles/*.styl"])
    .pipe(stylus())
    .pipe(gulp.dest("styles/"))
    .pipe(browserSync.stream());
}

exports.default = function() {
  gulp.watch("styles/*.styl", css);
};
