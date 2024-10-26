import {createProgramFromShaderSourceCodes} from "./createProgramFromShaderSourceCodes.js";
import {resetCanvas} from "./resetCanvas.js";
import {generateTriangles} from "./generateTriangles.js";
import {serializeTriangle} from "./serializeTriangle.js";

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

gl.useProgram(program);

const triangles = generateTriangles();
const serializedTriangles = triangles.flatMap(serializeTriangle);

const buffer = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(serializedTriangles), gl.STATIC_DRAW);

const positionAttributeLocation = gl.getAttribLocation(program, "position");
gl.enableVertexAttribArray(positionAttributeLocation);
gl.vertexAttribPointer(positionAttributeLocation, 2, gl.FLOAT, false, 0, 0);

resetCanvas(gl);

window.addEventListener("resize", function handleWindowResize(): void {
	resetCanvas(gl);
});
