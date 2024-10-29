import {Displayer} from "./displayer/Displayer.js";
import type {Camera} from "./engine/Camera.js";
import type {Dimensions2} from "./engine/Dimensions2.js";
import {cube} from "./engine/scene/cube.js";
import {generateCamera} from "./engine/scene/generateCamera.js";
const canvas = document.getElementById("canvas") as HTMLCanvasElement;
const gl = canvas.getContext("webgl2") as WebGL2RenderingContext;
const displayer = Displayer.create(gl);
displayer.resize();
const initialCanvasDimensions: Dimensions2 = displayer.getCanvasDimensions();
const maximalFieldOfViewRadians = 0.5 * Math.PI;
let camera: Camera = generateCamera(initialCanvasDimensions, maximalFieldOfViewRadians);
displayer.paint(cube, camera);

window.addEventListener("resize", function handleWindowResize(): void {
	displayer.resize();
	const canvasDimensions: Dimensions2 = displayer.getCanvasDimensions();
	camera = generateCamera(canvasDimensions, maximalFieldOfViewRadians);
	displayer.paint(cube, camera);
});

requestAnimationFrame(function animate(): void {
	const canvasDimensions: Dimensions2 = displayer.getCanvasDimensions();
	camera = generateCamera(canvasDimensions, maximalFieldOfViewRadians);
	displayer.paint(cube, camera);
	requestAnimationFrame(animate);
});
