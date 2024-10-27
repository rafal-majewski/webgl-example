import type {Coordinates} from "../Coordinates.js";
import type {Camera} from "./Camera.js";
import {generateCameraPosition} from "./generateCameraPosition.js";
import {generateCameraOrientation} from "./generateCameraOrientation.js";

export function generateCamera(): Camera {
	const cameraPosition: Coordinates = generateCameraPosition();
	const cameraOrientation = generateCameraOrientation(cameraPosition);

	return {
		position: cameraPosition,
		orientation: cameraOrientation,
	};
}
