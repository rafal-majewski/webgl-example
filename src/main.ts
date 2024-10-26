import {Displayer} from "./displayer/Displayer.js";
import {generateTriangle} from "./engine/triangle-generator/generateTriangle.js";
import type {Triangle} from "./engine/Triangle.js";
const canvas = document.getElementById("canvas") as HTMLCanvasElement;
const gl = canvas.getContext("webgl2") as WebGL2RenderingContext;
const displayer = Displayer.create(gl);
const triangle: Triangle = generateTriangle();
displayer.resizeAndPaint(triangle);

window.addEventListener("resize", function handleWindowResize(): void {
	displayer.resizeAndPaint(triangle);
});
