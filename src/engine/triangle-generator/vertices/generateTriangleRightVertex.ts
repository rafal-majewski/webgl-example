import type {Coordinates} from "../../Coordinates.js";
import type {Vertex} from "../../Vertex.js";

export function generateTriangleRightVertex(): Vertex {
	const position: Coordinates = {
		x: 0.5,
		y: -0.5,
	};

	return {
		position,
	};
}
