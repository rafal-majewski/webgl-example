import type {SerializedCoordinates} from "../coordinates/SerializedCoordinates.js";

export type SerializedTriangle = readonly [
	...SerializedCoordinates,
	...SerializedCoordinates,
	...SerializedCoordinates,
];
