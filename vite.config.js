/** @type {import("vite").UserConfig} */
const viteConfig = {
	root: "./src",
	build: {
		outDir: "../build",
		emptyOutDir: true,
	},
	base: process.env["GITHUB_ACTIONS"] === "true" ? "/webgl-example/" : "/",
};

export default viteConfig;
