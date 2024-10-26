import {createProgramFromShaderSourceCodes} from "./createProgramFromShaderSourceCodes.js";
import {resetCanvas} from "./resetCanvas.js";
const canvas = document.getElementById("canvas") as HTMLCanvasElement;
const gl = canvas.getContext("webgl2") as WebGL2RenderingContext;
gl.clearColor(0, 0, 0, 1);

const vertexShaderSourceCode = `#version 300 es
layout (location = 0) in vec2 position;

void main() {
	gl_Position = vec4(position, 0.0, 1.0);
}`;

const fragmentShaderSourceCode = `#version 300 es
precision mediump float;
out vec4 color;

void main() {
	color = vec4(1.0, 0.0, 0.0, 1.0);
}`;

const program = createProgramFromShaderSourceCodes(
	gl,
	vertexShaderSourceCode,
	fragmentShaderSourceCode,
);

resetCanvas(gl);

window.addEventListener("resize", function handleWindowResize(): void {
	resetCanvas(gl);
});
