import type {Coordinates} from "../../Coordinates.js";
import type {RgbColor} from "../../RgbColor.js";
import type {Vertex} from "../../Vertex.js";

export function generateSquareRightTopVertex(): Vertex {
	const position: Coordinates = {
		x: 0.5 + 0.5 * Math.sin(Date.now() / 1000),
		y: 0.5 + 0.5 * Math.sin(Date.now() / 1000),
		z: 0,
	};

	const color: RgbColor = {
		red: 0,
		green: 1,
		blue: 1,
	};

	return {
		position,
		color,
	};
}
