import type {Triangle} from "../engine/Triangle.js";
import {serializeTriangles} from "./serialization/triangles/serializeTriangles.js";

export function computeBufferData(triangles: readonly Triangle[]): Float32Array {
	const serializedTriangles = serializeTriangles(triangles);
	return new Float32Array(serializedTriangles);
}
