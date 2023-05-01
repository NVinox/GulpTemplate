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
		.pipe(plugins.newer(path.build.images))
		.pipe(
			plugins.imagemin([
				plugins.imagemin.gifsicle({ interlaced: true }),
				plugins.imagemin.mozjpeg({ quality: 75, progressive: true }),
				plugins.imagemin.optipng({ optimizationLevel: 5 }),
				plugins.imagemin.svgo({
					plugins: [{ removeViewBox: true }, { cleanupIDs: false }],
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
