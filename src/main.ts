import {resetCanvas} from "./resetCanvas.js";
const canvas = document.getElementById("canvas") as HTMLCanvasElement;
const gl = canvas.getContext("webgl2") as WebGL2RenderingContext;
gl.clearColor(0, 0, 0, 1);
resetCanvas(gl);

window.addEventListener("resize", function handleWindowResize(): void {
	resetCanvas(gl);
});
