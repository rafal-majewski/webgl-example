import type {Square} from "../engine/Square.js";
import type {SerializedSquare} from "./serialization/square/SerializedSquare.js";
import {serializeSquare} from "./serialization/square/serializeSquare.js";

export function computeBufferData(square: Square): Float32Array {
	const serializedSquare: SerializedSquare = serializeSquare(square);
	return new Float32Array(serializedSquare);
}
