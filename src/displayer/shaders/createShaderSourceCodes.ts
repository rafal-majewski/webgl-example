import type {ShaderSourceCodes} from "../utilities/ShaderSourceCodes.js";
import {createFragmentShaderSourceCode} from "./createFragmentShaderSourceCode.js";
import {createVertexShaderSourceCode} from "./createVertexShaderSourceCode.js";
const varyingColorVariableName = "v_color";

export function createShaderSourceCodes(
	locationPosition: number,
	colorPosition: number,
): ShaderSourceCodes {
	const vertexShaderSourceCode = createVertexShaderSourceCode(
		locationPosition,
		colorPosition,
		varyingColorVariableName,
	);

	const fragmentShaderSourceCode = createFragmentShaderSourceCode(varyingColorVariableName);

	return {
		vertex: vertexShaderSourceCode,
		fragment: fragmentShaderSourceCode,
	};
}
