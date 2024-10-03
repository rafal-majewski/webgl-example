import {paint} from "./paint.js";
import {resizeCanvasToItsContainer} from "./resizeCanvasToItsContainer.js";

export function resetCanvas(gl: WebGL2RenderingContext): void {
	resizeCanvasToItsContainer(gl.canvas as HTMLCanvasElement);
	paint(gl);
}
