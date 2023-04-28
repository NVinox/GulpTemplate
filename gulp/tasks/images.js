const plugins = require("../plugins.js");
const path = require("../path.js");

module.exports = () => {
	return plugins.gulp
		.src(path.src.images)
		.pipe(plugins.plumber())
		.pipe(
			plugins.imagemin([
				plugins.imagemin.optipng({
					optimizationLevel: 5,
				}),
				plugins.imagemin.gifsicle({
					optimizationLevel: 2,
				}),
				plugins.imagemin.mozjpeg({
					quality: 80,
				}),
			])
		)
		.pipe(plugins.gulp.dest(path.build.images));
};
