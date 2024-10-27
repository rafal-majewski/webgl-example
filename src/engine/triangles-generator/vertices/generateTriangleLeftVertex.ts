import type {Coordinates} from "../../Coordinates.js";
import type {RgbColor} from "../../RgbColor.js";
import type {Vertex} from "../../Vertex.js";

export function generateTriangleLeftVertex(): Vertex {
	const position: Coordinates = {
		x: -0.5 - Math.sin(Date.now() / 1000) / 2,
		y: -0.5 - Math.sin(Date.now() / 1000) / 2,
	};

	const color: RgbColor = {
		red: 0,
		green: 1,
		blue: 0,
	};

	return {
		position,
		color,
	};
}
