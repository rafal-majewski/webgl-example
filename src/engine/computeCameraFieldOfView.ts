import type {Dimensions2} from "./Dimensions2.js";
import type {FieldOfView} from "./FieldOfView.js";

export function computeCameraFieldOfView(
	canvasDimensions: Dimensions2,
	maximalFieldOfViewRadians: number,
): FieldOfView {
	return {
		verticalRadians: Math.min(
			maximalFieldOfViewRadians,
			Math.atan(
				Math.tan(maximalFieldOfViewRadians / 2) *
					(canvasDimensions.height / canvasDimensions.width),
			) * 2,
		),
		horizontalRadians: Math.min(
			maximalFieldOfViewRadians,
			Math.atan(
				Math.tan(maximalFieldOfViewRadians / 2) *
					(canvasDimensions.width / canvasDimensions.height),
			) * 2,
		),
	};
}
