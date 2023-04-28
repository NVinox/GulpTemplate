const plugins = require("../plugins.js");
const path = require("../path.js");

module.exports = () => {
	return plugins.gulp
		.src(path.src.scss)
		.pipe(plugins.plumber())
		.pipe(plugins.sass())
		.pipe(
			plugins.autoprefixer({
				cascade: false,
				overrideBrowserslist: ["last 3 versions"],
			})
		)
		.pipe(plugins.cssbeautify())
		.pipe(plugins.gulp.dest(path.build.css))
		.pipe(
			plugins.rename({
				suffix: ".min",
				extname: ".css",
			})
		)
		.pipe(
			plugins.cssnano({
				zindex: false,
				discardComments: {
					removeAll: true,
				},
			})
		)
		.pipe(plugins.removeComments())
		.pipe(plugins.gulp.dest(path.build.css));
};
