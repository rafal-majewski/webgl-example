import type {Camera} from "../engine/Camera.js";
import {serializeCoordinates} from "./serialization/coordinates/serializeCoordinates.js";

export function computeUniformCameraData(camera: Camera): Float32Array {
	const serializedCamera = serializeCoordinates(camera.position);
	return new Float32Array(serializedCamera);
}
