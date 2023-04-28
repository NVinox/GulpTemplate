const plugins = require("../plugins.js");
const path = require("../path.js");

module.exports = () => {
	return plugins.gulp
		.src(path.src.js)
		.pipe(plugins.plumber())
		.pipe(plugins.uglify())
		.pipe(
			plugins.rename({
				suffix: ".min",
				extname: ".js",
			})
		)
		.pipe(plugins.gulp.dest(path.build.js));
};
