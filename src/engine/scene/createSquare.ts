import type {Triangle} from "../Triangle.js";
import type {Vertex} from "../Vertex.js";
import type {Square} from "../Square.js";

export function createSquare(
	leftBottomVertex: Vertex,
	rightBottomVertex: Vertex,
	leftTopVertex: Vertex,
	rightTopVertex: Vertex,
): Square {
	const centerVertex: Vertex = {
		position: {
			x:
				(leftBottomVertex.position.x +
					rightBottomVertex.position.x +
					leftTopVertex.position.x +
					rightTopVertex.position.x) /
				4,
			y:
				(leftBottomVertex.position.y +
					rightBottomVertex.position.y +
					leftTopVertex.position.y +
					rightTopVertex.position.y) /
				4,
		},
		color: {
			red:
				(leftBottomVertex.color.red +
					rightBottomVertex.color.red +
					leftTopVertex.color.red +
					rightTopVertex.color.red) /
				4,
			green:
				(leftBottomVertex.color.green +
					rightBottomVertex.color.green +
					leftTopVertex.color.green +
					rightTopVertex.color.green) /
				4,
			blue:
				(leftBottomVertex.color.blue +
					rightBottomVertex.color.blue +
					leftTopVertex.color.blue +
					rightTopVertex.color.blue) /
				4,
		},
	};

	const leftTriangle: Triangle = {
		vertex1: leftBottomVertex,
		vertex2: centerVertex,
		vertex3: leftTopVertex,
	};

	const rightTriangle: Triangle = {
		vertex1: rightBottomVertex,
		vertex2: centerVertex,
		vertex3: rightTopVertex,
	};

	const bottomTriangle: Triangle = {
		vertex1: leftBottomVertex,
		vertex2: centerVertex,
		vertex3: rightBottomVertex,
	};

	const topTriangle: Triangle = {
		vertex1: leftTopVertex,
		vertex2: centerVertex,
		vertex3: rightTopVertex,
	};

	return {
		left: leftTriangle,
		right: rightTriangle,
		bottom: bottomTriangle,
		top: topTriangle,
	};
}
