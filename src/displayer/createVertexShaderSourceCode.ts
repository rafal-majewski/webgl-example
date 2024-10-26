export function createVertexShaderSourceCode(locationPosition: number) {
	return `#version 300 es
layout (location = ${locationPosition}) in vec2 a_position;

void main() {
	gl_Position = vec4(a_position, 0.0, 1.0);
}`;
}
