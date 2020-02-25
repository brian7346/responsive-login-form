const gulp = require("gulp");
const stylus = require("gulp-stylus");
function css() {
  gulp
    .src(["styles/*.styl"])
    .pipe(stylus())
    .pipe(gulp.dest("styles/"));
}

exports.default = function() {
  gulp.watch("styles/*.styl", css);
};
