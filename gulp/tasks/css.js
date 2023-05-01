const plugins = require("../plugins.js");
const path = require("../path.js");
const variables = require("../variables.js");

module.exports = () => {
	return plugins.gulp
		.src(path.src.scss)
		.pipe(
			plugins.plumber(
				plugins.notify.onError({
					title: "SCSS",
					message: "Error: <%= error.message %>",
				})
			)
		)
		.pipe(plugins.sass())
		.pipe(
			plugins.autoprefixer({
				cascade: false,
				overrideBrowserslist: ["last 3 versions"],
			})
		)
		.pipe(plugins.replace(/\.\.\/\.\.\/fonts/g, "../fonts"))
		.pipe(plugins.cssbeautify())
		.pipe(
			plugins.gulpif(variables.isDefault, plugins.gulp.dest(path.build.css))
		)
		.pipe(
			plugins.rename({
				suffix: ".min",
				extname: ".css",
			})
		)
		.pipe(plugins.csso())
		.pipe(plugins.removeComments())
		.pipe(plugins.gulp.dest(path.build.css))
		.pipe(
			plugins.gulpif(
				variables.isDefault,
				plugins.browserSync.reload({ stream: true })
			)
		);
};
