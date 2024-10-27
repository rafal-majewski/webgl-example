import type {Camera} from "../Camera.js";
import type {Coordinates} from "../Coordinates.js";
import {generateCameraPosition} from "./generateCameraPosition.js";

export function generateCamera(): Camera {
	const position: Coordinates = generateCameraPosition();

	return {
		position,
	};
}
