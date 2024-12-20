import type {Vertex} from "../../../engine/Vertex.js";
import {serializeCoordinates} from "../coordinates/serializeCoordinates.js";
import {serializeRgbColor} from "../rgb-color/serializeRgbColor.js";
import type {SerializedVertex} from "./SerializedVertex.js";

export function serializeVertex(vertex: Vertex): SerializedVertex {
	const serializedPosition = serializeCoordinates(vertex.position);
	const serializedColor = serializeRgbColor(vertex.color);
	return [...serializedPosition, ...serializedColor];
}
