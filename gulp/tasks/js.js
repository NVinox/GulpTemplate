const plugins = require("../plugins.js");
const path = require("../path.js");

module.exports = () => {
	return plugins.gulp
		.src(path.src.js)
		.pipe(
			plugins.plumber(
				plugins.notify.onError({
					title: "JS",
					message: "Error: <%= error.message %>",
				})
			)
		)
		.pipe(plugins.uglify())
		.pipe(
			plugins.rename({
				suffix: ".min",
				extname: ".js",
			})
		)
		.pipe(plugins.gulp.dest(path.build.js))
		.pipe(plugins.browserSync.reload({ stream: true }));
};
