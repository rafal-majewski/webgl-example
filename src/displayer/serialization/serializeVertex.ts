import type {Vertex} from "../../engine/Vertex.js";
import {serializeCoordinates} from "./serializeCoordinates.js";
import type {SerializedVertex} from "./SerializedVertex.js";
import {serializeRgbColor} from "./serializeRgbColor.js";

export function serializeVertex(vertex: Vertex): SerializedVertex {
	const serializedPosition = serializeCoordinates(vertex.position);
	const serializedColor = serializeRgbColor(vertex.color);
	return [...serializedPosition, ...serializedColor];
}
