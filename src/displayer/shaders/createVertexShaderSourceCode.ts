export function createVertexShaderSourceCode(
	attributePositionVariableName: string,
	attributeColorVariableName: string,
	uniformProjectionVariableName: string,
	varyingColorVariableName: string,
): string {
	return `#version 300 es
in vec3 ${attributePositionVariableName};
in vec3 ${attributeColorVariableName};
uniform mat4 ${uniformProjectionVariableName};
out vec3 ${varyingColorVariableName};

void main() {
	${varyingColorVariableName} = ${attributeColorVariableName};
	gl_Position = ${uniformProjectionVariableName} * vec4(${attributePositionVariableName}, 1.0);
}`;
}
