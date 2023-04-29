const gulp = require("gulp");
const del = require("del");
const cssbeautify = require("gulp-cssbeautify");
const cssnano = require("gulp-cssnano");
const sass = require("gulp-sass")(require("sass"));
const removeComments = require("gulp-strip-css-comments");
const panini = require("panini");
const autoprefixer = require("gulp-autoprefixer");
const imagemin = require("gulp-imagemin");
const rename = require("gulp-rename");
const uglify = require("gulp-uglify");
const htmlmin = require("gulp-htmlmin");
const fileInclude = require("gulp-file-include");
const replace = require("gulp-replace");
const plumber = require("gulp-plumber");

module.exports = {
	gulp,
	del,
	imagemin,
	plumber,
	sass,
	panini,
	autoprefixer,
	cssbeautify,
	cssnano,
	rename,
	removeComments,
	uglify,
	htmlmin,
	fileInclude,
	replace,
};
