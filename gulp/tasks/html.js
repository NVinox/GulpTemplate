const plugins = require("../plugins.js");
const path = require("../path.js");
const variables = require("../variables.js");

module.exports = () => {
	return plugins.gulp
		.src(path.src.html)
		.pipe(
			plugins.plumber(
				plugins.notify.onError({
					title: "HTML",
					message: "Error: <%= error.message %>",
				})
			)
		)
		.pipe(plugins.fileInclude())
		.pipe(plugins.replace(/@images\//g, "assets/images/"))
		.pipe(plugins.replace(/@script\//g, "assets/scripts/"))
		.pipe(plugins.replace(/js/g, "min.js"))
		.pipe(plugins.replace(/@scss\//g, "assets/style/"))
		.pipe(plugins.replace(/css/g, "min.css"))
		.pipe(plugins.htmlmin({ removeComments: true, collapseWhitespace: true }))
		.pipe(plugins.gulp.dest(path.build.html))
		.pipe(
			plugins.gulpif(
				variables.isDefault,
				plugins.browserSync.reload({ stream: true })
			)
		);
};
