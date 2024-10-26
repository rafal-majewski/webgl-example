import type {Coordinates} from "./Coordinates.js";

export type Triangle = Readonly<{
	vertex1: Coordinates;
	vertex2: Coordinates;
	vertex3: Coordinates;
}>;
