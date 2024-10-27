import type {SerializedTriangle} from "../triangle/SerializedTriangle.js";

export type SerializedSquare = readonly [
	...SerializedTriangle,
	...SerializedTriangle,
	...SerializedTriangle,
	...SerializedTriangle,
];
