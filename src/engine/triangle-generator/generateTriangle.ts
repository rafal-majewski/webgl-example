import type {Coordinates} from "../Coordinates.js";
import type {Triangle} from "../Triangle.js";
import type {Vertex} from "../Vertex.js";
import {generateTriangleLeftVertex} from "./vertices/generateTriangleLeftVertex.js";
import {generateTriangleRightVertex} from "./vertices/generateTriangleRightVertex.js";
import {generateTriangleTopVertex} from "./vertices/generateTriangleTopVertex.js";

export function generateTriangle(): Triangle {
	const topVertex: Vertex = generateTriangleTopVertex();
	const leftVertex: Vertex = generateTriangleLeftVertex();
	const rightVertex: Vertex = generateTriangleRightVertex();

	return {
		vertex1: topVertex,
		vertex2: leftVertex,
		vertex3: rightVertex,
	};
}
