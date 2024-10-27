import type {Triangle} from "../../../engine/Triangle.js";
import type {SerializedTriangle} from "../triangle/SerializedTriangle.js";
import {serializeTriangle} from "../triangle/serializeTriangle.js";
import type {SerializedTriangles} from "./SerializedTriangles.js";

export function serializeTriangles(triangles: readonly Triangle[]): SerializedTriangles {
	return triangles.flatMap((triangle: Triangle): SerializedTriangle => serializeTriangle(triangle));
}
