import type {Cube} from "../Cube.js";
import type {Square} from "../Square.js";
import type {Vertex} from "../Vertex.js";
import {createSquare} from "./createSquare.js";

export function createCube(
	leftBottomNearVertex: Vertex,
	leftBottomFarVertex: Vertex,
	leftTopNearVertex: Vertex,
	leftTopFarVertex: Vertex,
	rightBottomNearVertex: Vertex,
	rightBottomFarVertex: Vertex,
	rightTopNearVertex: Vertex,
	rightTopFarVertex: Vertex,
): Cube {
	const leftSquare: Square = createSquare(
		leftBottomNearVertex,
		leftBottomFarVertex,
		leftTopNearVertex,
		leftTopFarVertex,
	);

	const rightSquare: Square = createSquare(
		rightBottomNearVertex,
		rightBottomFarVertex,
		rightTopNearVertex,
		rightTopFarVertex,
	);

	const bottomSquare: Square = createSquare(
		leftBottomNearVertex,
		leftBottomFarVertex,
		rightBottomNearVertex,
		rightBottomFarVertex,
	);

	const topSquare: Square = createSquare(
		leftTopNearVertex,
		leftTopFarVertex,
		rightTopNearVertex,
		rightTopFarVertex,
	);

	const nearSquare: Square = createSquare(
		leftBottomNearVertex,
		leftTopNearVertex,
		rightBottomNearVertex,
		rightTopNearVertex,
	);

	const farSquare: Square = createSquare(
		leftBottomFarVertex,
		leftTopFarVertex,
		rightBottomFarVertex,
		rightTopFarVertex,
	);

	return {
		left: leftSquare,
		right: rightSquare,
		bottom: bottomSquare,
		top: topSquare,
		near: nearSquare,
		far: farSquare,
	};
}
