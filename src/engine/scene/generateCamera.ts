import type {Coordinates} from "../Coordinates.js";

export function generateCamera(): Coordinates {
	return {
		x: Math.sin(0.0003 * Date.now()),
		y: Math.cos(0.0003 * Date.now()),
		z: 0,
	};
}
