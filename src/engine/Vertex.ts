import type {Coordinates} from "./Coordinates.js";
import type {RgbColor} from "./RgbColor.js";

export type Vertex = Readonly<{
	position: Coordinates;
	color: RgbColor;
}>;
