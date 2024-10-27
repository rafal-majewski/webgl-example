import type {FieldOfView} from "../../engine/FieldOfView.js";
import type {Matrix4} from "../utilities/Matrix4.js";

export function computeFieldOfViewMatrix(fieldOfView: FieldOfView): Matrix4 {
	return [
		[1.0 / Math.tan(fieldOfView.horizontalRadians / 2), 0, 0, 0],
		[0, 1.0 / Math.tan(fieldOfView.verticalRadians / 2), 0, 0],
		[0, 0, 1, 0],
		[0, 0, 0, 1],
	];
}
