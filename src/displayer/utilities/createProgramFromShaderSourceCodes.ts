import type {ShaderSourceCodes} from "./ShaderSourceCodes.js";
import {createProgramFromShaders} from "./createProgramFromShaders.js";
import {createShader} from "./createShader.js";

export function createProgramFromShaderSourceCodes(
	gl: WebGL2RenderingContext,
	shaderSourceCodes: ShaderSourceCodes,
): WebGLProgram {
	const vertexShader = createShader(gl, gl.VERTEX_SHADER, shaderSourceCodes.vertex);
	const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, shaderSourceCodes.fragment);
	return createProgramFromShaders(gl, vertexShader, fragmentShader);
}
