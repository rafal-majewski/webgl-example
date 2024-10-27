import type {ShaderSourceCodes} from "../utilities/ShaderSourceCodes.js";
import {createFragmentShaderSourceCode} from "./createFragmentShaderSourceCode.js";
import {createVertexShaderSourceCode} from "./createVertexShaderSourceCode.js";
const varyingColorVariableName = "v_color";

export function createShaderSourceCodes(
	attributePositionVariableName: string,
	attributeColorVariableName: string,
	uniformProjectionVariableName: string,
): ShaderSourceCodes {
	const vertexShaderSourceCode = createVertexShaderSourceCode(
		attributePositionVariableName,
		attributeColorVariableName,
		uniformProjectionVariableName,
		varyingColorVariableName,
	);

	const fragmentShaderSourceCode = createFragmentShaderSourceCode(varyingColorVariableName);

	return {
		vertex: vertexShaderSourceCode,
		fragment: fragmentShaderSourceCode,
	};
}
