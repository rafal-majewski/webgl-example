import type {SerializedCoordinates} from "./SerializedCoordinates.js";

export type SerializedTriangle = readonly [
	...SerializedCoordinates,
	...SerializedCoordinates,
	...SerializedCoordinates,
];
