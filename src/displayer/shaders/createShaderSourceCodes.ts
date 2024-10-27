import type {ShaderSourceCodes} from "../utilities/ShaderSourceCodes.js";
import {createVertexShaderSourceCode} from "./createVertexShaderSourceCode.js";
import {fragmentShaderSourceCode} from "./fragmentShaderSourceCode.js";

export function createShaderSourceCodes(locationPosition: number): ShaderSourceCodes {
	const vertexShaderSourceCode = createVertexShaderSourceCode(locationPosition);

	return {
		vertex: vertexShaderSourceCode,
		fragment: fragmentShaderSourceCode,
	};
}
