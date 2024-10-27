import type {Coordinates} from "../../Coordinates.js";
import type {RgbColor} from "../../RgbColor.js";
import type {Vertex} from "../../Vertex.js";

export function generateTriangleTopVertex(): Vertex {
	const position: Coordinates = {
		x: 0,
		y: 0.5 + Math.sin(Date.now() / 1000) / 2,
	};

	const color: RgbColor = {
		red: 1,
		green: 0,
		blue: 0,
	};

	return {
		position,
		color,
	};
}
