import type {Camera} from "../Camera.js";
import {computeCameraFieldOfView} from "../computeCameraFieldOfView.js";
import type {Coordinates} from "../Coordinates.js";
import type {Dimensions2} from "../Dimensions2.js";
import type {FieldOfView} from "../FieldOfView.js";
import {cameraOrientation} from "./cameraOrientation.js";
import {generateCameraPosition} from "./generateCameraPosition.js";

export function generateCamera(
	canvasDimensions: Dimensions2,
	maximalFieldOfViewRadians: number,
): Camera {
	const fieldOfView: FieldOfView = computeCameraFieldOfView(
		canvasDimensions,
		maximalFieldOfViewRadians,
	);

	const position: Coordinates = generateCameraPosition();

	return {
		position,
		fieldOfView,
		orientation: cameraOrientation,
	};
}
