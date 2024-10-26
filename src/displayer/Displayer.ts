export class Displayer {
	private readonly gl: WebGL2RenderingContext;

	private constructor(gl: WebGL2RenderingContext) {
		this.gl = gl;
	}

	public static create(gl: WebGL2RenderingContext): Displayer {
		gl.clearColor(0, 0, 0, 1);
		return new Displayer(gl);
	}

	public paint(): void {
		this.gl.clear(this.gl.COLOR_BUFFER_BIT);
	}

	public resize(): void {
		const canvas = this.gl.canvas as HTMLCanvasElement;
		const parent = canvas.parentElement as HTMLElement;
		canvas.width = parent.clientWidth;
		canvas.height = parent.clientHeight;
		this.gl.viewport(0, 0, canvas.width, canvas.height);
	}
}
