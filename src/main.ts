import {Displayer} from "./displayer/Displayer.js";
import type {Camera} from "./engine/Camera.js";
import {cube} from "./engine/scene/cube.js";
import {generateCamera} from "./engine/scene/generateCamera.js";
const canvas = document.getElementById("canvas") as HTMLCanvasElement;
const gl = canvas.getContext("webgl2") as WebGL2RenderingContext;
const displayer = Displayer.create(gl);
displayer.resize();
let camera: Camera = generateCamera();
displayer.paint(cube, camera);

window.addEventListener("resize", function handleWindowResize(): void {
	displayer.resize();
	displayer.paint(cube, camera);
});

requestAnimationFrame(function animate(): void {
	camera = generateCamera();
	displayer.paint(cube, camera);
	requestAnimationFrame(animate);
});
