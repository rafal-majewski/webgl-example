import type {Coordinates} from "../Coordinates.js";

export function generateCameraPosition(): Coordinates {
	const x = Math.sin(0.0003 * Date.now());
	const y = Math.cos(0.0003 * Date.now());

	return {
		x,
		y,
		z: 0,
	};
}
