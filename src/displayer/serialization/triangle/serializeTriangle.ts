import type {Triangle} from "../../../engine/Triangle.js";
import {serializeCoordinates} from "../coordinates/serializeCoordinates.js";
import type {SerializedTriangle} from "./SerializedTriangle.js";

export function serializeTriangle(triangle: Triangle): SerializedTriangle {
	const serializedVertex1 = serializeCoordinates(triangle.vertex1);
	const serializedVertex2 = serializeCoordinates(triangle.vertex2);
	const serializedVertex3 = serializeCoordinates(triangle.vertex3);
	return [...serializedVertex1, ...serializedVertex2, ...serializedVertex3];
}
