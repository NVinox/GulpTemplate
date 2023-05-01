const fs = require("fs");
const plugins = require("../plugins.js");
const path = require("../path.js");

exports.otfToTtf = () => {
	return plugins.gulp
		.src(`${path.srcPath}/assets/fonts/*.otf`)
		.pipe(
			plugins.plumber(
				plugins.notify.onError({
					title: "FONTS",
					message: "Error: <%= error.message %>",
				})
			)
		)
		.pipe(plugins.fonter({ formats: ["ttf"] }))
		.pipe(plugins.gulp.dest(`${path.srcPath}/assets/fonts`));
};

exports.ttfToWoff = () => {
	return plugins.gulp
		.src(`${path.srcPath}/assets/fonts/*.ttf`)
		.pipe(
			plugins.plumber(
				plugins.notify.onError({
					title: "FONTS",
					message: "Error: <%= error.message %>",
				})
			)
		)
		.pipe(plugins.fonter({ formats: ["woff"] }))
		.pipe(plugins.gulp.dest(path.build.fonts))
		.pipe(plugins.gulp.src(`${path.srcPath}/assets/fonts/*.ttf`))
		.pipe(plugins.ttf2woff2())
		.pipe(plugins.gulp.dest(path.build.fonts));
};

exports.fontStyles = () => {
	let fontsFile = `${path.srcPath}/assets/scss/global/fonts.scss`;

	fs.readdir(path.build.fonts, (err, fontsFiles) => {
		if (fontsFiles) {
			if (!fs.existsSync(fontsFile)) {
				let newFileOnly;

				fs.writeFile(fontsFile, "", cb);

				fontsFiles.forEach((file) => {
					let fontFileName = file.split(".")[0];

					if (newFileOnly !== fontFileName) {
						let fontName = fontFileName.split("-")[0]
							? fontFileName.split("-")[0]
							: fontFileName;
						let fontWeight = fontFileName.split("-")[1]
							? fontFileName.split("-")[1]
							: fontFileName;
						let weights = {
							thin: 100,
							extralight: 200,
							light: 300,
							regular: 400,
							medium: 500,
							semibold: 600,
							bold: 700,
							extrabold: 800,
							heavy: 800,
							black: 900,
						};

						fs.appendFile(
							fontsFile,
							`
							@font-face {
								font-family: ${fontName};
								font-display: swap;
								src: url("../../fonts/${fontFileName}.woff2") format("woff2"), url("../../fonts/${fontFileName}.woff") format("woff");
								font-weight: ${weights[fontWeight.toLowerCase()]};
								font-style: normal;
							}\r\n
						`,
							cb
						);

						newFileOnly = fontFileName;
					}
				});
			} else {
				console.log(
					"File scss/global/fonts.scss exist. You need delete this file for refresh."
				);
			}
		}
	});

	return plugins.gulp.src(path.srcPath);

	function cb() {}
};
