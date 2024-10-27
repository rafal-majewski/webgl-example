import type {Triangle} from "../engine/Triangle.js";
import {computeBufferData} from "./computeBufferData.js";
import {createProgramFromShaderSourceCodes} from "./utilities/createProgramFromShaderSourceCodes.js";
import {createShaderSourceCodes} from "./shaders/createShaderSourceCodes.js";
import type {ShaderSourceCodes} from "./utilities/ShaderSourceCodes.js";

export class Displayer {
	private readonly gl: WebGL2RenderingContext;

	private constructor(gl: WebGL2RenderingContext) {
		this.gl = gl;
	}

	private static readonly positionLocation = 0;
	private static readonly dimensionInCoordinatesCount = 3;
	private static readonly positionSize = Displayer.dimensionInCoordinatesCount;
	private static readonly componentInColorCount = 3;
	private static readonly colorSize = Displayer.componentInColorCount;

	private static readonly strideBytes =
		(Displayer.positionSize + Displayer.colorSize) * Float32Array.BYTES_PER_ELEMENT;

	private static readonly positionOffsetBytes = 0;
	private static readonly colorLocation = 1;

	private static readonly colorOffsetBytes =
		Displayer.positionSize * Float32Array.BYTES_PER_ELEMENT;

	private static readonly vertexInTriangleCount = 3;

	public static create(gl: WebGL2RenderingContext): Displayer {
		gl.clearColor(0, 0, 0, 1);

		const shaderSourceCodes: ShaderSourceCodes = createShaderSourceCodes(
			Displayer.positionLocation,
			Displayer.colorLocation,
		);

		const program = createProgramFromShaderSourceCodes(gl, shaderSourceCodes);
		gl.useProgram(program);
		const buffer = gl.createBuffer();
		gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
		gl.enableVertexAttribArray(Displayer.positionLocation);

		gl.vertexAttribPointer(
			Displayer.positionLocation,
			Displayer.positionSize,
			gl.FLOAT,
			false,
			Displayer.strideBytes,
			Displayer.positionOffsetBytes,
		);

		gl.enableVertexAttribArray(Displayer.colorLocation);

		gl.vertexAttribPointer(
			Displayer.colorLocation,
			Displayer.colorSize,
			gl.FLOAT,
			false,
			Displayer.strideBytes,
			Displayer.colorOffsetBytes,
		);

		return new Displayer(gl);
	}

	public paint(triangles: readonly Triangle[]): void {
		this.gl.clear(this.gl.COLOR_BUFFER_BIT);
		const bufferData = computeBufferData(triangles);
		this.gl.bufferData(this.gl.ARRAY_BUFFER, bufferData, this.gl.STATIC_DRAW);
		this.gl.drawArrays(this.gl.TRIANGLES, 0, triangles.length * Displayer.vertexInTriangleCount);
	}

	private resize(): void {
		const canvas = this.gl.canvas as HTMLCanvasElement;
		const parent = canvas.parentElement as HTMLElement;
		canvas.width = parent.clientWidth;
		canvas.height = parent.clientHeight;
		this.gl.viewport(0, 0, canvas.width, canvas.height);
	}

	public resizeAndPaint(triangles: readonly Triangle[]): void {
		this.resize();
		this.paint(triangles);
	}
}
