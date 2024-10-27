import type {ShaderSourceCodes} from "../utilities/ShaderSourceCodes.js";
import {createVertexShaderSourceCode} from "./createVertexShaderSourceCode.js";
import {fragmentShaderSourceCode} from "./fragmentShaderSourceCode.js";

export function createShaderSourceCodes(attributePositionVariableName: string): ShaderSourceCodes {
	const vertexShaderSourceCode = createVertexShaderSourceCode(attributePositionVariableName);

	return {
		vertex: vertexShaderSourceCode,
		fragment: fragmentShaderSourceCode,
	};
}
