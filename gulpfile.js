"use strict";
const { gulp } = require("./gulp/plugins.js");
const js = require("./gulp/tasks/js.js");
const html = require("./gulp/tasks/html.js");
const css = require("./gulp/tasks/css.js");
const clean = require("./gulp/tasks/clean.js");
const images = require("./gulp/tasks/images.js");
const serve = require("./gulp/tasks/server.js");
const watchFiles = require("./gulp/watch.js");
const { otfToTtf, ttfToWoff, fontStyles } = require("./gulp/tasks/fonts.js");

// Task для обработки шрифтов
const fonts = gulp.series(otfToTtf, ttfToWoff, fontStyles);

// Task для запуска основных задач
const build = gulp.series(clean, fonts, gulp.parallel(css, js, images, html));
// Task для запуска в режиме разработки
const dev = gulp.series(build, gulp.parallel(watchFiles, serve));
// Task запуска в режиме предустановленного локального сервера
const oserver = gulp.series(build, watchFiles);

gulp.task("build", build);
gulp.task("dev", dev);
gulp.task("oserver", oserver);
