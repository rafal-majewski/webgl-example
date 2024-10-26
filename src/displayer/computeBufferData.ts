import type {Triangle} from "../engine/Triangle.js";
import type {SerializedTriangle} from "./serialization/triangle/SerializedTriangle.js";
import {serializeTriangle} from "./serialization/triangle/serializeTriangle.js";

export function computeBufferData(triangle: Triangle): Float32Array {
	const serializedTriangle: SerializedTriangle = serializeTriangle(triangle);
	return new Float32Array(serializedTriangle);
}
