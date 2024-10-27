import {Displayer} from "./displayer/Displayer.js";
import {generateSquare} from "./engine/triangles-generator/generateSquare.js";
import type {Triangle} from "./engine/Triangle.js";
import {generateCamera} from "./engine/camera/generateCamera.js";
import type {Coordinates} from "./engine/Coordinates.js";
const canvas = document.getElementById("canvas") as HTMLCanvasElement;
const gl = canvas.getContext("webgl2") as WebGL2RenderingContext;
const displayer = Displayer.create(gl);
let triangles: readonly Triangle[] = generateSquare();
let camera: Coordinates = generateCamera();
displayer.resizeAndPaint(triangles, camera);

window.addEventListener("resize", function handleWindowResize(): void {
	displayer.resizeAndPaint(triangles, camera);
});

requestAnimationFrame(function animate(): void {
	triangles = generateSquare();
	camera = generateCamera();
	displayer.resizeAndPaint(triangles, camera);
	requestAnimationFrame(animate);
});
