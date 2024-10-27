import {computeBufferData} from "./computeBufferData.js";
import {createShaderSourceCodes} from "./shaders/createShaderSourceCodes.js";
import {createProgramFromShaderSourceCodes} from "./utilities/createProgramFromShaderSourceCodes.js";
import type {ShaderSourceCodes} from "./utilities/ShaderSourceCodes.js";
import type {Square} from "../engine/Square.js";

export class Displayer {
	private readonly gl: WebGL2RenderingContext;

	private constructor(gl: WebGL2RenderingContext) {
		this.gl = gl;
	}

	private static readonly attributePositionVariableName = "a_position";
	private static readonly dimensionInCoordinatesCount = 2;
	private static readonly componentInColorCount = 3;
	private static readonly triangleInSquareCount = 4;
	private static readonly positionSize = Displayer.dimensionInCoordinatesCount;
	private static readonly attributeColorVariableName = "a_color";
	private static readonly colorSize = Displayer.componentInColorCount;

	private static readonly colorOffsetBytes =
		Displayer.positionSize * Float32Array.BYTES_PER_ELEMENT;

	private static readonly strideBytes =
		(Displayer.positionSize + Displayer.colorSize) * Float32Array.BYTES_PER_ELEMENT;

	private static readonly positionOffsetBytes = 0;
	private static readonly vertexInTriangleCount = 3;

	public static create(gl: WebGL2RenderingContext): Displayer {
		gl.clearColor(0, 0, 0, 1);

		const shaderSourceCodes: ShaderSourceCodes = createShaderSourceCodes(
			Displayer.attributePositionVariableName,
			Displayer.attributeColorVariableName,
		);

		const program = createProgramFromShaderSourceCodes(gl, shaderSourceCodes);
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

		const attributeColorLocation = gl.getAttribLocation(
			program,
			Displayer.attributeColorVariableName,
		);

		gl.enableVertexAttribArray(attributeColorLocation);

		gl.vertexAttribPointer(
			attributeColorLocation,
			Displayer.colorSize,
			gl.FLOAT,
			false,
			Displayer.strideBytes,
			Displayer.colorOffsetBytes,
		);

		return new Displayer(gl);
	}

	public paint(square: Square): void {
		this.gl.clear(this.gl.COLOR_BUFFER_BIT);
		const bufferData = computeBufferData(square);
		this.gl.bufferData(this.gl.ARRAY_BUFFER, bufferData, this.gl.STATIC_DRAW);

		this.gl.drawArrays(
			this.gl.TRIANGLES,
			0,
			Displayer.triangleInSquareCount * Displayer.vertexInTriangleCount,
		);
	}

	public resize(): void {
		const canvas = this.gl.canvas as HTMLCanvasElement;
		const parent = canvas.parentElement as HTMLElement;
		canvas.width = parent.clientWidth;
		canvas.height = parent.clientHeight;
		this.gl.viewport(0, 0, canvas.width, canvas.height);
	}
}
