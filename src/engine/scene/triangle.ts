import type {Triangle} from "../Triangle.js";
import {triangleCenterCenterVertex} from "./vertices/triangleCenterCenterVertex.js";
import {triangleLeftBottomVertex} from "./vertices/triangleLeftBottomVertex.js";
import {triangleRightBottomVertex} from "./vertices/triangleRightBottomVertex.js";

export const triangle: Triangle = {
	vertex1: triangleLeftBottomVertex,
	vertex2: triangleRightBottomVertex,
	vertex3: triangleCenterCenterVertex,
};
