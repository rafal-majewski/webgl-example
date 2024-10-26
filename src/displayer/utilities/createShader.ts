export function createShader(
	gl: WebGL2RenderingContext,
	type: number,
	sourceCode: string,
): WebGLShader {
	const shader = gl.createShader(type) as WebGLShader;
	gl.shaderSource(shader, sourceCode);
	gl.compileShader(shader);
	return shader;
}
