import type {Coordinates} from "../../Coordinates.js";
import type {RgbColor} from "../../RgbColor.js";
import type {Vertex} from "../../Vertex.js";

export function generateSquareLeftBottomVertex(): Vertex {
	const position: Coordinates = {
		x: -0.5 - 0.5 * Math.sin(Date.now() / 1000),
		y: -0.5 - 0.5 * Math.sin(Date.now() / 1000),
		z: 0.0,
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