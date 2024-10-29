import type {Camera} from "../engine/Camera.js";
import type {Cube} from "../engine/Cube.js";
import type {Dimensions2} from "../engine/Dimensions2.js";
import {computeBufferData} from "./computeBufferData.js";
import {computeUniformProjectionData} from "./computeUniformProjectionData.js";
import {createShaderSourceCodes} from "./shaders/createShaderSourceCodes.js";
import {createProgramFromShaderSourceCodes} from "./utilities/createProgramFromShaderSourceCodes.js";
import type {ShaderSourceCodes} from "./utilities/ShaderSourceCodes.js";

export class Displayer {
	private readonly gl: WebGL2RenderingContext;
	private readonly uniformProjectionLocation: WebGLUniformLocation;

	private constructor(gl: WebGL2RenderingContext, uniformProjectionLocation: WebGLUniformLocation) {
		this.gl = gl;
		this.uniformProjectionLocation = uniformProjectionLocation;
	}

	private static readonly attributePositionVariableName = "a_position";
	private static readonly dimensionInCoordinatesCount = 3;
	private static readonly componentInColorCount = 3;
	private static readonly triangleInSquareCount = 4;
	private static readonly squareInCubeCount = 6;
	private static readonly positionSize = Displayer.dimensionInCoordinatesCount;
	private static readonly attributeColorVariableName = "a_color";
	private static readonly colorSize = Displayer.componentInColorCount;

	private static readonly colorOffsetBytes =
		Displayer.positionSize * Float32Array.BYTES_PER_ELEMENT;

	private static readonly strideBytes =
		(Displayer.positionSize + Displayer.colorSize) * Float32Array.BYTES_PER_ELEMENT;

	private static readonly positionOffsetBytes = 0;
	private static readonly vertexInTriangleCount = 3;
	private static readonly uniformProjectionVariableName = "u_projection";

	public static create(gl: WebGL2RenderingContext): Displayer {
		gl.clearColor(0, 0, 0, 1);

		const shaderSourceCodes: ShaderSourceCodes = createShaderSourceCodes(
			Displayer.attributePositionVariableName,
			Displayer.attributeColorVariableName,
			Displayer.uniformProjectionVariableName,
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

		const uniformProjectionLocation = gl.getUniformLocation(
			program,
			Displayer.uniformProjectionVariableName,
		) as WebGLUniformLocation;

		gl.enable(gl.DEPTH_TEST);
		gl.depthFunc(gl.LESS);
		return new Displayer(gl, uniformProjectionLocation);
	}

	public paint(cube: Cube, camera: Camera): void {
		this.gl.clear(this.gl.COLOR_BUFFER_BIT);
		const bufferData = computeBufferData(cube);
		this.gl.bufferData(this.gl.ARRAY_BUFFER, bufferData, this.gl.STATIC_DRAW);
		const uniformProjectionData = computeUniformProjectionData(camera);
		this.gl.uniformMatrix4fv(this.uniformProjectionLocation, false, uniformProjectionData);

		this.gl.drawArrays(
			this.gl.TRIANGLES,
			0,
			Displayer.squareInCubeCount *
				Displayer.triangleInSquareCount *
				Displayer.vertexInTriangleCount,
		);
	}

	public resize(): void {
		const canvas = this.gl.canvas as HTMLCanvasElement;
		const parent = canvas.parentElement as HTMLElement;
		canvas.width = parent.clientWidth;
		canvas.height = parent.clientHeight;
		this.gl.viewport(0, 0, canvas.width, canvas.height);
	}

	public getCanvasDimensions(): Dimensions2 {
		const canvas = this.gl.canvas as HTMLCanvasElement;

		return {
			width: canvas.width,
			height: canvas.height,
		};
	}
}
