import {serializeCoordinates} from "./serialization/coordinates/serializeCoordinates.js";
import type {Camera} from "../engine/camera/Camera.js";

export function computeUniformCameraData(camera: Camera): Float32Array {
	const serializedPosition = serializeCoordinates(camera.position);
	const serializedOrientation = new Float32Array([camera.orientation.horizontalRadians, camera.orientation.verticalRadians]);
	return new Float32Array([...serializedPosition, ...serializedOrientation]);
}
