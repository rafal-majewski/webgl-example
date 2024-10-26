import type {Coordinates} from "./Coordinates.js";
import type {SerializedCoordinates} from "./SerializedCoordinates.js";

export function serializeCoordinates(coordinates: Coordinates): SerializedCoordinates {
	return [coordinates.x, coordinates.y];
}
