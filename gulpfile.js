const gulp = require("gulp");
const { src, dest, watch } = require("gulp");
const concat = require("gulp-concat");
const autoprefixer = require("gulp-autoprefixer");
const cleanCSS = require("gulp-clean-css");
var sass = require("gulp-sass");
var rename = require("gulp-rename");
var run = require("gulp-run-command").default;

function css(cb) {
  src("src/scss/*.scss")
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(concat("style.css"))
    .pipe(dest("src/css"))
    .pipe(cleanCSS())
    .pipe(rename("style.min.css"))
    .pipe(dest("src/css"));

  cb();
}

exports.default = function () {
  watch("src/scss/*.scss", css);
};
