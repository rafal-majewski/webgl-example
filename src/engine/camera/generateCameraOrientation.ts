import type {Coordinates} from "../Coordinates.js";
import type {Orientation} from "../orientation/Orientation.js";

export function generateCameraOrientation(position: Coordinates): Orientation {
	const horizontalRadians = Math.atan2(position.y, position.x);
	const verticalRadians = Math.atan2(position.z, Math.sqrt(position.x * position.x + position.y * position.y));
	return {
		horizontalRadians,
		verticalRadians,
	};
}
