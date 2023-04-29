const plugins = require("../plugins.js");
const path = require("../path.js");

module.exports = () => {
	return plugins.gulp
		.src(path.src.html)
		.pipe(plugins.plumber())
		.pipe(plugins.fileInclude())
		.pipe(plugins.replace(/@images\//g, "assets/images/"))
		.pipe(plugins.replace(/@script\//g, "assets/script/"))
		.pipe(plugins.replace(/js/g, "min.js"))
		.pipe(plugins.htmlmin({ removeComments: true, collapseWhitespace: true }))
		.pipe(plugins.gulp.dest(path.build.html));
};
