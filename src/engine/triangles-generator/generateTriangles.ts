import type {Triangle} from "../Triangle.js";
import {generateTriangle} from "./generateTriangle.js";

export function generateTriangles(): readonly Triangle[] {
	const triangle: Triangle = generateTriangle();
	return [triangle];
}
