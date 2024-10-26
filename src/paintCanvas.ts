export function paintCanvas(gl: WebGL2RenderingContext): void {
	gl.clear(gl.COLOR_BUFFER_BIT);
	gl.drawArrays(gl.TRIANGLES, 0, 6);
}
