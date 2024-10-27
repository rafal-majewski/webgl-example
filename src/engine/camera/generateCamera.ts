import type {Coordinates} from "../Coordinates.js";
import type {Camera} from "./Camera.js";
import {generateCameraPosition} from "./generateCameraPosition.js";

export function generateCamera(): Camera {
	const cameraPosition: Coordinates = generateCameraPosition();

	return {
		position: cameraPosition,
	};
}
