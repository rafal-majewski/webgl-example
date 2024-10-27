export function createVertexShaderSourceCode(
	attributePositionVariableName: string,
	attributeColorVariableName: string,
	varyingColorVariableName: string,
): string {
	return `#version 300 es
in vec2 ${attributePositionVariableName};
in vec3 ${attributeColorVariableName};
out vec3 ${varyingColorVariableName};

void main() {
	${varyingColorVariableName} = ${attributeColorVariableName};
	gl_Position = vec4(${attributePositionVariableName}, 0.0, 1.0);
}`;
}
