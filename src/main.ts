import {Displayer} from "./displayer/Displayer.js";
import type {Triangle} from "./engine/Triangle.js";
import {generateCamera} from "./engine/camera/generateCamera.js";
import type {Camera} from "./engine/camera/Camera.js";
import {generateCube} from "./engine/triangles-generator/generateCube.js";
const canvas = document.getElementById("canvas") as HTMLCanvasElement;
const gl = canvas.getContext("webgl2") as WebGL2RenderingContext;
const displayer = Displayer.create(gl);
const triangles: readonly Triangle[] = generateCube();
let camera: Camera = generateCamera();
displayer.resizeAndPaint(triangles, camera);

window.addEventListener("resize", function handleWindowResize(): void {
	displayer.resizeAndPaint(triangles, camera);
});

requestAnimationFrame(function animate(): void {
	camera = generateCamera();
	displayer.resizeAndPaint(triangles, camera);
	requestAnimationFrame(animate);
});
