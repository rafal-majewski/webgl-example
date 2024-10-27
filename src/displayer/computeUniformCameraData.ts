import {serializeCoordinates} from "./serialization/coordinates/serializeCoordinates.js";
import type {Camera} from "../engine/camera/Camera.js";

export function computeUniformCameraData(camera: Camera): Float32Array {
	const serializedCamera = serializeCoordinates(camera.position);
	return new Float32Array(serializedCamera);
}
