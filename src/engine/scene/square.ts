import type {Square} from "../Square.js";
import {createSquare} from "./createSquare.js";
import {squareLeftBottomVertex} from "./vertices/squareLeftBottomVertex.js";
import {squareLeftTopVertex} from "./vertices/squareLeftTopVertex.js";
import {squareRightBottomVertex} from "./vertices/squareRightBottomVertex.js";
import {squareRightTopVertex} from "./vertices/squareRightTopVertex.js";

export const square: Square = createSquare(
	squareLeftBottomVertex,
	squareRightBottomVertex,
	squareLeftTopVertex,
	squareRightTopVertex,
);
