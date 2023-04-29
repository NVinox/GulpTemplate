const plugins = require("../plugins.js");
const path = require("../path.js");
const variables = require("../variables.js");

module.exports = () => {
	return plugins.gulp
		.src(path.src.images)
		.pipe(
			plugins.plumber(
				plugins.notify.onError({
					title: "IMAGES",
					message: "Error: <%= error.message %>",
				})
			)
		)
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
		.pipe(plugins.gulp.dest(path.build.images))
		.pipe(
			plugins.gulpif(
				variables.isDefault,
				plugins.browserSync.reload({ stream: true })
			)
		);
};
