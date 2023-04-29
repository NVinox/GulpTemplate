const plugins = require("../plugins.js");
const path = require("../path.js");
const variables = require("../variables.js");

module.exports = () => {
	return plugins.gulp
		.src(path.src.fonts)
		.pipe(plugins.gulp.dest(path.build.fonts))
		.pipe(
			plugins.gulpif(
				variables.isDefault,
				plugins.browserSync.reload({ stream: true })
			)
		);
};
