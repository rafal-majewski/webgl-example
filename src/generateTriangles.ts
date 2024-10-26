import type {Coordinates} from "./Coordinates.js";
import type {Triangle} from "./Triangle.js";

export function generateTriangles(): readonly Triangle[] {
	const rightTopVertex: Coordinates = {
		x: 0.5,
		y: 0.5,
	};

	const leftTopVertex: Coordinates = {
		x: -0.5,
		y: 0.5,
	};

	const leftBottomVertex: Coordinates = {
		x: -0.5,
		y: -0.5,
	};

	const rightBottomVertex: Coordinates = {
		x: 0.5,
		y: -0.5,
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
