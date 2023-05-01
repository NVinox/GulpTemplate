const distPath = "dist";
const srcPath = "src";

module.exports = {
	srcPath,
	distPath,
	build: {
		html: `${distPath}/`,
		css: `${distPath}/assets/style/`,
		js: `${distPath}/assets/scripts/`,
		images: `${distPath}/assets/images/`,
		fonts: `${distPath}/assets/fonts/`,
	},
	src: {
		html: `${srcPath}/*.html`,
		scss: `${srcPath}/assets/scss/*.scss`,
		js: `${srcPath}/assets/scripts/**/*.js`,
		images: `${srcPath}/assets/images/**/*.{jpeg,png,svg,gif,ico,webp,webmanifest,xml,json}`,
	},
	watch: {
		html: `${srcPath}/**/*.html`,
		scss: `${srcPath}/assets/scss/**/*.scss`,
		js: `${srcPath}/assets/scripts/**/*.js`,
		images: `${srcPath}/assets/images/**/*.{jpeg,png,svg,gif,ico,webp,webmanifest,xml,json}`,
	},
	clean: `./${distPath}`,
};
