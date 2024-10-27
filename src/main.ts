import {Displayer} from "./displayer/Displayer.js";
import {generateSquare} from "./engine/triangles-generator/generateSquare.js";
import type {Triangle} from "./engine/Triangle.js";
const canvas = document.getElementById("canvas") as HTMLCanvasElement;
const gl = canvas.getContext("webgl2") as WebGL2RenderingContext;
const displayer = Displayer.create(gl);
let triangles: readonly Triangle[] = generateSquare();
displayer.resizeAndPaint(triangles);

window.addEventListener("resize", function handleWindowResize(): void {
	displayer.resizeAndPaint(triangles);
});

requestAnimationFrame(function animate(): void {
	triangles = generateSquare();
	displayer.resizeAndPaint(triangles);
	requestAnimationFrame(animate);
});
