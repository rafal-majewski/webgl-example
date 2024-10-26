import type {Coordinates} from "./Coordinates.js";
import type {Triangle} from "./Triangle.js";

export function generateTriangles(): readonly Triangle[] {
	const rightTopVertex: Coordinates = {
		x: (1 + Math.sin(0.5081701037345614 * 2 * Math.PI + Date.now() / 1000)) / 2,
		y: (1 + Math.sin(0.5093328812332449 * 2 * Math.PI + Date.now() / 1000)) / 2,
	};

	const leftTopVertex: Coordinates = {
		x: -(1 + Math.sin(0.8281861340816328 * 2 * Math.PI + Date.now() / 1000)) / 2,
		y: (1 + Math.sin(0.008359113832481668 * 2 * Math.PI + Date.now() / 1000)) / 2,
	};

	const leftBottomVertex: Coordinates = {
		x: -(1 + Math.sin(0.5195017246763363 * 2 * Math.PI + Date.now() / 1000)) / 2,
		y: -(1 + Math.sin(0.7997417796402844 * 2 * Math.PI + Date.now() / 1000)) / 2,
	};

	const rightBottomVertex: Coordinates = {
		x: (1 + Math.sin(0.9627786568553158 * 2 * Math.PI + Date.now() / 1000)) / 2,
		y: -(1 + Math.sin(0.1344022865730814 * 2 * Math.PI + Date.now() / 1000)) / 2,
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
