import {Displayer} from "./displayer/Displayer.js";
import {camera} from "./engine/scene/camera.js";
import {square} from "./engine/scene/square.js";
const canvas = document.getElementById("canvas") as HTMLCanvasElement;
const gl = canvas.getContext("webgl2") as WebGL2RenderingContext;
const displayer = Displayer.create(gl);
displayer.resize();
displayer.paint(square, camera);

window.addEventListener("resize", function handleWindowResize(): void {
	displayer.resize();
	displayer.paint(square, camera);
});
