import type {Square} from "../../../engine/Square.js";
import type {SerializedTriangle} from "../triangle/SerializedTriangle.js";
import {serializeTriangle} from "../triangle/serializeTriangle.js";
import type {SerializedSquare} from "./SerializedSquare.js";

export function serializeSquare(square: Square): SerializedSquare {
	const serializedLeftTriangle: SerializedTriangle = serializeTriangle(square.left);
	const serializedRightTriangle: SerializedTriangle = serializeTriangle(square.right);
	const serializedTopTriangle: SerializedTriangle = serializeTriangle(square.top);
	const serializedBottomTriangle: SerializedTriangle = serializeTriangle(square.bottom);

	return [
		...serializedLeftTriangle,
		...serializedRightTriangle,
		...serializedTopTriangle,
		...serializedBottomTriangle,
	];
}
