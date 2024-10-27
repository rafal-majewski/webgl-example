import type {Camera} from "../engine/Camera.js";
import {computeClippingMatrix} from "./matrices/computeClippingMatrix.js";
import {computeFieldOfViewMatrix} from "./matrices/computeFieldOfViewMatrix.js";
import {computeHorizontalOrientationMatrix} from "./matrices/computeHorizontalOrientationMatrix.js";
import {computeNegativeTranslationMatrix} from "./matrices/computeNegativeTranslationMatrix.js";
import {computeVerticalOrientationMatrix} from "./matrices/computeVerticalOrientationMatrix.js";
import {multiplyManyMatrices4} from "./utilities/multiplyManyMatrices4.js";
const nearClippingPlane = 0.1;
const farClippingPlane = 300;

export function computeUniformProjectionData(camera: Camera): Float32Array {
	const fieldOfViewMatrix = computeFieldOfViewMatrix(camera.fieldOfView);
	const clippingMatrix = computeClippingMatrix(nearClippingPlane, farClippingPlane);
	const translationMatrix = computeNegativeTranslationMatrix(camera.position);

	const horizontalOrientationMatrix = computeHorizontalOrientationMatrix(
		camera.orientation.horizontalRadians,
	);

	const verticalOrientationMatrix = computeVerticalOrientationMatrix(
		camera.orientation.verticalRadians,
	);

	const combinedMatrix = multiplyManyMatrices4(
		translationMatrix,
		horizontalOrientationMatrix,
		verticalOrientationMatrix,
		clippingMatrix,
		fieldOfViewMatrix,
	);

	return new Float32Array(combinedMatrix.flat());
}
