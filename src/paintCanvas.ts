export function paintCanvas(canvas: HTMLCanvasElement): void {
	const gl = canvas.getContext("webgl") as WebGLRenderingContext;
	gl.clearColor(0, 0, 0, 1);
	gl.clear(gl.COLOR_BUFFER_BIT);
}
