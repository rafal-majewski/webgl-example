import type {Coordinates} from "./Coordinates.js";
import type {RgbColor} from "./RgbColor.js";
import type {Triangle} from "./Triangle.js";
import type {Vertex} from "./Vertex.js";

export function generateTriangles(): readonly Triangle[] {
	const rightTopVertexPosition: Coordinates = {
		x: (1 + Math.sin(0.5081701037345614 * 2 * Math.PI + Date.now() / 1000)) / 2,
		y: (1 + Math.sin(0.5093328812332449 * 2 * Math.PI + Date.now() / 1000)) / 2,
	};

	const rightTopVertexColor: RgbColor = {
		red: 0,
		green: 0,
		blue: 1,
	};

	const leftTopVertexPosition: Coordinates = {
		x: -(1 + Math.sin(0.8281861340816328 * 2 * Math.PI + Date.now() / 1000)) / 2,
		y: (1 + Math.sin(0.008359113832481668 * 2 * Math.PI + Date.now() / 1000)) / 2,
	};

	const leftTopVertexColor: RgbColor = {
		red: 0,
		green: 1,
		blue: 1,
	};

	const leftBottomVertexPosition: Coordinates = {
		x: -(1 + Math.sin(0.5195017246763363 * 2 * Math.PI + Date.now() / 1000)) / 2,
		y: -(1 + Math.sin(0.7997417796402844 * 2 * Math.PI + Date.now() / 1000)) / 2,
	};

	const leftBottomVertexColor: RgbColor = {
		red: 1,
		green: 0,
		blue: 1,
	};

	const rightBottomVertexPosition: Coordinates = {
		x: (1 + Math.sin(0.9627786568553158 * 2 * Math.PI + Date.now() / 1000)) / 2,
		y: -(1 + Math.sin(0.1344022865730814 * 2 * Math.PI + Date.now() / 1000)) / 2,
	};

	const rightBottomVertexColor: RgbColor = {
		red: 1,
		green: 1,
		blue: 0,
	};

	const rightTopVertex: Vertex = {
		position: rightTopVertexPosition,
		color: rightTopVertexColor,
	};

	const leftTopVertex: Vertex = {
		position: leftTopVertexPosition,
		color: leftTopVertexColor,
	};

	const leftBottomVertex: Vertex = {
		position: leftBottomVertexPosition,
		color: leftBottomVertexColor,
	};

	const rightBottomVertex: Vertex = {
		position: rightBottomVertexPosition,
		color: rightBottomVertexColor,
	};

	const rightTopTriangle: Triangle = {
		vertex1: rightTopVertex,
		vertex2: leftTopVertex,
		vertex3: rightBottomVertex,
	};

	const leftBottomTriangle: Triangle = {
		vertex1: leftBottomVertex,
		vertex2: rightBottomVertex,
		vertex3: leftTopVertex,
	};

	return [rightTopTriangle, leftBottomTriangle];
}
