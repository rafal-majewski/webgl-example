export function createFragmentShaderSourceCode(varyingColorVariableName: string): string {
	return `#version 300 es
precision mediump float;
in vec3 ${varyingColorVariableName};
out vec4 color;

void main() {
	color = vec4(${varyingColorVariableName}, 1.0);
}`;
}
