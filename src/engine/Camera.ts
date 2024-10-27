import type {Coordinates} from "./Coordinates.js";
import type {FieldOfView} from "./FieldOfView.js";
import type {Orientation} from "./Orientation.js";

export type Camera = Readonly<{
	position: Coordinates;
	orientation: Orientation;
	fieldOfView: FieldOfView;
}>;
