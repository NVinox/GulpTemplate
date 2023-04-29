"use strict";
const { gulp } = require("./gulp/plugins.js");
const js = require("./gulp/tasks/js.js");
const html = require("./gulp/tasks/html.js");
const css = require("./gulp/tasks/css.js");
const clean = require("./gulp/tasks/clean.js");
const images = require("./gulp/tasks/images.js");
const fonts = require("./gulp/tasks/fonts.js");
const serve = require("./gulp/tasks/server.js");
const watchFiles = require("./gulp/watch.js");

const build = gulp.series(clean, gulp.parallel(html, css, js, images, fonts));
const watch = gulp.parallel(build, watchFiles, serve);
const oserver = gulp.parallel(build, watchFiles);

gulp.task("build", build);
gulp.task("dev", watch);
gulp.task("oserver", oserver);
