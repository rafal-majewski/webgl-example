import type {Coordinates} from "../../../engine/Coordinates.js";

export type SerializedCoordinates = readonly [
	x: Coordinates["x"],
	y: Coordinates["y"],
	z: Coordinates["z"],
];
