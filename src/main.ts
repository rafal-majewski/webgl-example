import {generateTriangles} from "./engine/generateTriangles.js";
import type {Triangle} from "./engine/Triangle.js";
import {Displayer} from "./displayer/Displayer.js";
const canvas = document.getElementById("canvas") as HTMLCanvasElement;
const gl = canvas.getContext("webgl2") as WebGL2RenderingContext;
const displayer = Displayer.create(gl);
let triangles: readonly Triangle[] = generateTriangles();
displayer.resizeAndDisplay(triangles);

window.addEventListener("resize", function handleWindowResize(): void {
	displayer.resizeAndDisplay(triangles);
});

requestAnimationFrame(function animate(): void {
	triangles = generateTriangles();
	displayer.resizeAndDisplay(triangles);
	requestAnimationFrame(animate);
});
