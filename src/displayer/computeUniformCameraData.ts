import {serializeCoordinates} from "./serialization/coordinates/serializeCoordinates.js";
import type {Coordinates} from "../engine/Coordinates.js";

export function computeUniformCameraData(camera: Coordinates): Float32Array {
	const serializedCamera = serializeCoordinates(camera);
	return new Float32Array(serializedCamera);
}
