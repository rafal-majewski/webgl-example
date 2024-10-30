import type {SerializedSquare} from "../square/SerializedSquare.js";

export type SerializedCube = readonly [
	...SerializedSquare,
	...SerializedSquare,
	...SerializedSquare,
	...SerializedSquare,
	...SerializedSquare,
	...SerializedSquare,
];
