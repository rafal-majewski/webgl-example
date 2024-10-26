import type {SerializedVertex} from "./SerializedVertex.js";

export type SerializedTriangle = readonly [
	...SerializedVertex,
	...SerializedVertex,
	...SerializedVertex,
];
