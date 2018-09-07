var gulp = require("gulp"),
  sass = require("gulp-sass"),
  postcss = require("gulp-postcss"),
  autoprefixer = require("autoprefixer");

// Compile Sass
gulp.task("sass", function() {
  return gulp
    .src("./app/assets/sass/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(postcss([autoprefixer]))
    .pipe(gulp.dest("./app/temp/styles"));
});
