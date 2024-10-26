import {createProgramFromShaders} from "./createProgramFromShaders.js";
import {createShader} from "./createShader.js";

export function createProgramFromShaderSourceCodes(
	gl: WebGL2RenderingContext,
	vertexShaderSourceCode: string,
	fragmentShaderSourceCode: string,
): WebGLProgram {
	const vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexShaderSourceCode);
	const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSourceCode);
	return createProgramFromShaders(gl, vertexShader, fragmentShader);
}
