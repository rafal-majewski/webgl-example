import type {Coordinates} from "../Coordinates.js";

export function generateCameraPosition(): Coordinates {
	return {
		x: Math.sin(Date.now() / 10000) / 2,
		y: Math.cos(Date.now() / 10000) / 2,
		z: 0,
	};
}