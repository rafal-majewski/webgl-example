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
	vec3 cameraDirection = normalize(${uniformCameraVariableName});
	vec3 up = vec3(0.0, 0.0, 1.0);
	vec3 right = normalize(cross(up, cameraDirection));
	up = cross(cameraDirection, right);
	mat3 cameraRotation = mat3(right, up, cameraDirection);
	gl_Position = vec4(cameraRotation * ${attributePositionVariableName}, 1.0);
}`;
}
