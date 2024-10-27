import type {Coordinates} from "../Coordinates.js";

export function generateCameraPosition(): Coordinates {
	const time = Date.now() / 10000;
	return {
		x: Math.sin(time) * 2,
		y: Math.cos(time) * 2,
		z: Math.sin(time) * 2,
	};
}
