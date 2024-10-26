import {Displayer} from "./displayer/Displayer.js";
import {triangle} from "./engine/scene/triangle.js";
const canvas = document.getElementById("canvas") as HTMLCanvasElement;
const gl = canvas.getContext("webgl2") as WebGL2RenderingContext;
const displayer = Displayer.create(gl);
displayer.resize();
displayer.paint(triangle);

window.addEventListener("resize", function handleWindowResize(): void {
	displayer.resize();
	displayer.paint(triangle);
});
