import type {Triangle} from "../Triangle.js";
import type {Vertex} from "../Vertex.js";
import {generateSquareLeftBottomVertex} from "./vertices/generateSquareLeftBottomVertex.js";
import {generateSquareLeftTopVertex} from "./vertices/generateSquareLeftTopVertex.js";
import {generateSquareRightBottomVertex} from "./vertices/generateSquareRightBottomVertex.js";
import {generateSquareRightTopVertex} from "./vertices/generateSquareRightTopVertex.js";

export function generateSquare(): readonly Triangle[] {
	const leftTopVertex: Vertex = generateSquareLeftTopVertex();
	const rightTopVertex: Vertex = generateSquareRightTopVertex();
	const rightBottomVertex: Vertex = generateSquareRightBottomVertex();
	const leftBottomVertex: Vertex = generateSquareLeftBottomVertex();

	const rightTopTriangle: Triangle = {
		vertex1: leftTopVertex,
		vertex2: rightTopVertex,
		vertex3: rightBottomVertex,
	};

	const leftBottomTriangle: Triangle = {
		vertex1: leftTopVertex,
		vertex2: leftBottomVertex,
		vertex3: rightBottomVertex,
	};

	return [rightTopTriangle, leftBottomTriangle];
}
