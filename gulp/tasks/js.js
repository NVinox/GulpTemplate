const plugins = require("../plugins.js");
const path = require("../path.js");
const variables = require("../variables.js");

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
		.pipe(plugins.replace(/\.js/g, ".min.js"))
		.pipe(plugins.gulp.dest(path.build.js))
		.pipe(
			plugins.gulpif(
				variables.isDefault,
				plugins.browserSync.reload({ stream: true })
			)
		);
};
