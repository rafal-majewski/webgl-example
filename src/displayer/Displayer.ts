import type {Triangle} from "../engine/Triangle.js";
import {computeBufferData} from "./computeBufferData.js";
import {fragmentShaderSourceCode} from "./shaders/fragmentShaderSourceCode.js";
import {createProgramFromShaderSourceCodes} from "./utilities/createProgramFromShaderSourceCodes.js";
import {createVertexShaderSourceCode} from "./shaders/createVertexShaderSourceCode.js";

export class Displayer {
	private readonly gl: WebGL2RenderingContext;

	private constructor(gl: WebGL2RenderingContext) {
		this.gl = gl;
	}

	private static readonly attributePositionVariableName = "a_position";
	private static readonly dimensionInCoordinatesCount = 2;
	private static readonly positionSize = Displayer.dimensionInCoordinatesCount;
	private static readonly strideBytes = Displayer.positionSize * Float32Array.BYTES_PER_ELEMENT;
	private static readonly positionOffsetBytes = 0;
	private static readonly vertexInTriangleCount = 3;

	public static create(gl: WebGL2RenderingContext): Displayer {
		gl.clearColor(0, 0, 0, 1);

		const vertexShaderSourceCode = createVertexShaderSourceCode(
			Displayer.attributePositionVariableName,
		);

		const program = createProgramFromShaderSourceCodes(
			gl,
			vertexShaderSourceCode,
			fragmentShaderSourceCode,
		);

		gl.useProgram(program);
		const buffer = gl.createBuffer();
		gl.bindBuffer(gl.ARRAY_BUFFER, buffer);

		const attributePositionLocation = gl.getAttribLocation(
			program,
			Displayer.attributePositionVariableName,
		);

		gl.enableVertexAttribArray(attributePositionLocation);

		gl.vertexAttribPointer(
			attributePositionLocation,
			Displayer.positionSize,
			gl.FLOAT,
			false,
			Displayer.strideBytes,
			Displayer.positionOffsetBytes,
		);

		return new Displayer(gl);
	}

	public paint(triangle: Triangle): void {
		this.gl.clear(this.gl.COLOR_BUFFER_BIT);
		const bufferData = computeBufferData(triangle);
		this.gl.bufferData(this.gl.ARRAY_BUFFER, bufferData, this.gl.STATIC_DRAW);
		this.gl.drawArrays(this.gl.TRIANGLES, 0, Displayer.vertexInTriangleCount);
	}

	public resize(): void {
		const canvas = this.gl.canvas as HTMLCanvasElement;
		const parent = canvas.parentElement as HTMLElement;
		canvas.width = parent.clientWidth;
		canvas.height = parent.clientHeight;
		this.gl.viewport(0, 0, canvas.width, canvas.height);
	}
}
