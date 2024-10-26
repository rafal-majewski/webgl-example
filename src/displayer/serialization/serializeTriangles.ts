import type {Triangle} from "../../engine/Triangle.js";
import type {SerializedTriangle} from "./SerializedTriangle.js";
import {serializeTriangle} from "./serializeTriangle.js";

export function serializeTriangles(triangles: readonly Triangle[]): readonly number[] {
	return triangles.flatMap((triangle: Triangle): SerializedTriangle => serializeTriangle(triangle));
}
