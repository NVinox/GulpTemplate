const distPath = "dist";
const srcPath = "src";

module.exports = {
	srcPath,
	distPath,
	build: {
		html: `${distPath}/`,
		css: `${distPath}/assets/css/`,
		js: `${distPath}/assets/script/`,
		images: `${distPath}/assets/images/`,
		fonts: `${distPath}/assets/fonts/`,
	},
	src: {
		html: `${srcPath}/**/*.html`,
		scss: `${srcPath}/assets/scss/*.scss`,
		js: `${srcPath}/assets/script/**/*.js`,
		images: `${srcPath}/assets/images/**/*.{jpeg,png,svg,gif,ico,webp,webmanifest,xml,json}`,
		fonts: `${srcPath}/assets/fonts/**/*.{eot,woff,woff2,ttf,svg}`,
	},
	watch: {
		html: `${srcPath}/**/*.html`,
		scss: `${srcPath}/assets/scss/**/*.scss`,
		js: `${srcPath}/assets/script/**/*.js`,
		images: `${srcPath}/assets/images/**/*.{jpeg,png,svg,gif,ico,webp,webmanifest,xml,json}`,
		fonts: `${srcPath}/assets/fonts/**/*.{eot,woff,woff2,ttf,svg}`,
	},
	clean: `./${distPath}`,
};