import type {Coordinates} from "../../Coordinates.js";
import type {Vertex} from "../../Vertex.js";

export function generateTriangleTopVertex(): Vertex {
	const position: Coordinates = {
		x: 0,
		y: 0.5,
	};

	return {
		position,
	};
}
