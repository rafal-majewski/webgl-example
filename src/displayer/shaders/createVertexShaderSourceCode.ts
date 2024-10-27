export function createVertexShaderSourceCode(
	locationPosition: number,
	colorPosition: number,
	varyingColorVariableName: string,
): string {
	return `#version 300 es
layout (location = ${locationPosition}) in vec3 a_position;
layout (location = ${colorPosition}) in vec3 a_color;
out vec3 ${varyingColorVariableName};

void main() {
	${varyingColorVariableName} = a_color;
	gl_Position = vec4(a_position, 1.0);
}`;
}
