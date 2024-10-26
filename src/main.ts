import {Displayer} from "./displayer/Displayer.js";
const canvas = document.getElementById("canvas") as HTMLCanvasElement;
const gl = canvas.getContext("webgl2") as WebGL2RenderingContext;
const displayer = Displayer.create(gl);
displayer.resizeAndPaint();

window.addEventListener("resize", function handleWindowResize(): void {
	displayer.resizeAndPaint();
});
