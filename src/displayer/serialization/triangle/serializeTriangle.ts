import type {Triangle} from "../../../engine/Triangle.js";
import type {SerializedTriangle} from "./SerializedTriangle.js";
import {serializeVertex} from "../vertex/serializeVertex.js";
import type {SerializedVertex} from "../vertex/SerializedVertex.js";

export function serializeTriangle(triangle: Triangle): SerializedTriangle {
	const serializedVertex1: SerializedVertex = serializeVertex(triangle.vertex1);
	const serializedVertex2: SerializedVertex = serializeVertex(triangle.vertex2);
	const serializedVertex3: SerializedVertex = serializeVertex(triangle.vertex3);
	return [...serializedVertex1, ...serializedVertex2, ...serializedVertex3];
}
