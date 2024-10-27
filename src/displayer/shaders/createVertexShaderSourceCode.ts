export function createVertexShaderSourceCode(
	attributePositionVariableName: string,
	attributeColorVariableName: string,
	uniformCameraVariableName: string,
	varyingColorVariableName: string,
): string {
	return `#version 300 es
in vec3 ${attributePositionVariableName};
in vec3 ${attributeColorVariableName};
uniform vec3 ${uniformCameraVariableName};
out vec3 ${varyingColorVariableName};

void main() {
	${varyingColorVariableName} = ${attributeColorVariableName};
	gl_Position = vec4(${attributePositionVariableName} - ${uniformCameraVariableName}, 1.0);
}`;
}
