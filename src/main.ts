import {Displayer} from "./displayer/Displayer.js";
import type {Coordinates} from "./engine/Coordinates.js";
import {generateCamera} from "./engine/scene/generateCamera.js";
import {square} from "./engine/scene/square.js";
const canvas = document.getElementById("canvas") as HTMLCanvasElement;
const gl = canvas.getContext("webgl2") as WebGL2RenderingContext;
const displayer = Displayer.create(gl);
let camera: Coordinates = generateCamera();
displayer.resize();
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
