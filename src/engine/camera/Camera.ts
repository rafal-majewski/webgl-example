import type {Coordinates} from "../Coordinates.js";
import type {Orientation} from "../orientation/Orientation.js";

export type Camera = Readonly<{
	position: Coordinates;
	orientation: Orientation;
}>;
