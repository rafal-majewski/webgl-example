import {Displayer} from "./displayer/Displayer.js";
import type {Camera} from "./engine/Camera.js";
import {generateCamera} from "./engine/scene/generateCamera.js";
import {square} from "./engine/scene/square.js";
const canvas = document.getElementById("canvas") as HTMLCanvasElement;
const gl = canvas.getContext("webgl2") as WebGL2RenderingContext;
const displayer = Displayer.create(gl);
displayer.resize();
let camera: Camera = generateCamera();
displayer.paint(square, camera);

window.addEventListener("resize", function handleWindowResize(): void {
	displayer.resize();
	displayer.paint(square, camera);
});

requestAnimationFrame(function animate(): void {
	camera = generateCamera();
	displayer.paint(square, camera);
	requestAnimationFrame(animate);
});
