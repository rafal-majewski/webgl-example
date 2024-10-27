import type {Camera} from "../Camera.js";
import type {Coordinates} from "../Coordinates.js";
import {generateCameraPosition} from "./generateCameraPosition.js";
import {cameraFieldOfView} from "./cameraFieldOfView.js";
import {cameraOrientation} from "./cameraOrientation.js";

export function generateCamera(): Camera {
	const position: Coordinates = generateCameraPosition();

	return {
		position,
		fieldOfView: cameraFieldOfView,
		orientation: cameraOrientation,
	};
}
