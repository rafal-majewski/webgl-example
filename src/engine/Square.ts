import type {Triangle} from "./Triangle.js";

export type Square = Readonly<{
	left: Triangle;
	right: Triangle;
	top: Triangle;
	bottom: Triangle;
}>;
