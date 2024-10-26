import type {Coordinates} from "../Coordinates.js";
import type {Triangle} from "../Triangle.js";
import {generateTriangleLeftVertex} from "./vertices/generateTriangleLeftVertex.js";
import {generateTriangleRightVertex} from "./vertices/generateTriangleRightVertex.js";
import {generateTriangleTopVertex} from "./vertices/generateTriangleTopVertex.js";

export function generateTriangle(): Triangle {
	const topVertex: Coordinates = generateTriangleTopVertex();
	const leftVertex: Coordinates = generateTriangleLeftVertex();
	const rightVertex: Coordinates = generateTriangleRightVertex();

	return {
		vertex1: topVertex,
		vertex2: leftVertex,
		vertex3: rightVertex,
	};
}
