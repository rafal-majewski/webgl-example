import type {Cube} from "../../../engine/Cube.js";
import type {SerializedSquare} from "../square/SerializedSquare.js";
import {serializeSquare} from "../square/serializeSquare.js";
import type {SerializedCube} from "./SerializedCube.js";

export function serializeCube(cube: Cube): SerializedCube {
	const serializedLeftSquare: SerializedSquare = serializeSquare(cube.left);
	const serializedRightSquare: SerializedSquare = serializeSquare(cube.right);
	const serializedBottomSquare: SerializedSquare = serializeSquare(cube.bottom);
	const serializedTopSquare: SerializedSquare = serializeSquare(cube.top);
	const serializedNearSquare: SerializedSquare = serializeSquare(cube.near);
	const serializedFarSquare: SerializedSquare = serializeSquare(cube.far);

	return [
		...serializedLeftSquare,
		...serializedRightSquare,
		...serializedBottomSquare,
		...serializedTopSquare,
		...serializedNearSquare,
		...serializedFarSquare,
	];
}
