export function createVertexShaderSourceCode(attributePositionVariableName: string): string {
	return `#version 300 es
in vec2 ${attributePositionVariableName};

void main() {
	gl_Position = vec4(${attributePositionVariableName}, 1.0, 1.0);
}`;
}
