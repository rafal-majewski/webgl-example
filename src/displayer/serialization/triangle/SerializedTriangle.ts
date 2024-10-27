import type {SerializedVertex} from "../vertex/SerializedVertex.js";

export type SerializedTriangle = readonly [
	...SerializedVertex,
	...SerializedVertex,
	...SerializedVertex,
];
