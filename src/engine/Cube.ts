import type {Square} from "./Square.js";

export type Cube = Readonly<{
	left: Square;
	right: Square;
	top: Square;
	bottom: Square;
	near: Square;
	far: Square;
}>;
