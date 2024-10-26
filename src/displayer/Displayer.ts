import type {Triangle} from "../engine/Triangle.js";
import {computeBufferData} from "./computeBufferData.js";
import {fragmentShaderSourceCode} from "./fragmentShaderSourceCode.js";
import {createProgramFromShaderSourceCodes} from "./utilities/createProgramFromShaderSourceCodes.js";
import {resizeCanvasToItsContainer} from "./utilities/resizeCanvasToItsContainer.js";
import {vertexShaderSourceCode} from "./vertexShaderSourceCode.js";

export class Displayer {
	private readonly gl: WebGL2RenderingContext;

	private constructor(gl: WebGL2RenderingContext) {
		this.gl = gl;
	}

	public static create(gl: WebGL2RenderingContext): Displayer {
		gl.clearColor(0, 0, 0, 1);

		const program = createProgramFromShaderSourceCodes(
			gl,
			vertexShaderSourceCode,
			fragmentShaderSourceCode,
		);

		gl.useProgram(program);
		return new Displayer(gl);
	}

	public display(triangles: readonly Triangle[]): void {
		const bufferData = computeBufferData(triangles);
		const buffer = this.gl.createBuffer();
		this.gl.bindBuffer(this.gl.ARRAY_BUFFER, buffer);
		this.gl.bufferData(this.gl.ARRAY_BUFFER, bufferData, this.gl.STATIC_DRAW);
		this.gl.enableVertexAttribArray(0);
		const dimensionInVertexCount = 2;
		const positionOffsetBytes = 0;
		const componentInColorCount = 3;
		const strideBytes =
			Float32Array.BYTES_PER_ELEMENT * (dimensionInVertexCount + componentInColorCount);

		this.gl.vertexAttribPointer(
			0,
			dimensionInVertexCount,
			this.gl.FLOAT,
			false,
			strideBytes,
			positionOffsetBytes,
		);

		const colorAttributeLocation = 1;
		this.gl.enableVertexAttribArray(colorAttributeLocation);
		const colorOffsetBytes = Float32Array.BYTES_PER_ELEMENT * dimensionInVertexCount;
		this.gl.vertexAttribPointer(
			colorAttributeLocation,
			componentInColorCount,
			this.gl.FLOAT,
			false,
			strideBytes,
			colorOffsetBytes,
		);

		this.gl.clear(this.gl.COLOR_BUFFER_BIT);
		this.gl.drawArrays(this.gl.TRIANGLES, 0, bufferData.length / (dimensionInVertexCount + componentInColorCount));
	}

	public resizeAndDisplay(triangles: readonly Triangle[]): void {
		resizeCanvasToItsContainer(this.gl.canvas as HTMLCanvasElement);
		this.gl.viewport(0, 0, this.gl.canvas.width, this.gl.canvas.height);
		this.display(triangles);
	}
}
