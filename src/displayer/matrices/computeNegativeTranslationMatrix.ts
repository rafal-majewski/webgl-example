import type {Coordinates} from "../../engine/Coordinates.js";
import type {Matrix4} from "../utilities/Matrix4.js";

export function computeNegativeTranslationMatrix(position: Coordinates): Matrix4 {
	return [
		[1, 0, 0, 0],
		[0, 1, 0, 0],
		[0, 0, 1, 0],
		[-position.x, -position.y, -position.z, 1],
	];
}
