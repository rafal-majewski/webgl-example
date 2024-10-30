import {createCube} from "./createCube.js";
import {cubeLeftBottomFarVertex} from "./vertices/cubeLeftBottomFarVertex.js";
import {cubeLeftBottomNearVertex} from "./vertices/cubeLeftBottomNearVertex.js";
import {cubeLeftTopFarVertex} from "./vertices/cubeLeftTopFarVertex.js";
import {cubeLeftTopNearVertex} from "./vertices/cubeLeftTopNearVertex.js";
import {cubeRightBottomFarVertex} from "./vertices/cubeRightBottomFarVertex.js";
import {cubeRightBottomNearVertex} from "./vertices/cubeRightBottomNearVertex.js";
import {cubeRightTopFarVertex} from "./vertices/cubeRightTopFarVertex.js";
import {cubeRightTopNearVertex} from "./vertices/cubeRightTopNearVertex.js";

export const cube = createCube(
	cubeLeftBottomNearVertex,
	cubeLeftBottomFarVertex,
	cubeLeftTopNearVertex,
	cubeLeftTopFarVertex,
	cubeRightBottomNearVertex,
	cubeRightBottomFarVertex,
	cubeRightTopNearVertex,
	cubeRightTopFarVertex,
);
