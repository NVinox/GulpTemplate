const { gulp } = require("./plugins.js");
const path = require("./path.js");
const js = require("./tasks/js.js");
const html = require("./tasks/html.js");
const css = require("./tasks/css.js");
const images = require("./tasks/images.js");
const fonts = require("./tasks/fonts.js");

module.exports = () => {
	gulp.watch([path.watch.js], js);
	gulp.watch([path.watch.html], html);
	gulp.watch([path.watch.scss], css);
	gulp.watch([path.watch.images], images);
	gulp.watch([path.watch.fonts], fonts);
};
