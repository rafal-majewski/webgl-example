import type {Triangle} from "../Triangle.js";
import type {Vertex} from "../Vertex.js";

function createSquare(
	vertex1: Vertex,
	vertex2: Vertex,
	vertex3: Vertex,
	vertex4: Vertex,
): readonly Triangle[] {
	return [
		{
			vertex1,
			vertex2,
			vertex3,
		},
		{
			vertex1,
			vertex2: vertex3,
			vertex3: vertex4,
		},
	];
}

export function generateCube(): readonly Triangle[] {
	const leftBottomNearVertex: Vertex = generateSquareLeftBottomNearVertex();
	const leftBottomFarVertex: Vertex = generateSquareLeftBottomFarVertex();
	const leftTopNearVertex: Vertex = generateSquareLeftTopNearVertex();
	const leftTopFarVertex: Vertex = generateSquareLeftTopFarVertex();
	const rightBottomNearVertex: Vertex = generateSquareRightBottomNearVertex();
	const rightBottomFarVertex: Vertex = generateSquareRightBottomFarVertex();
	const rightTopNearVertex: Vertex = generateSquareRightTopNearVertex();
	const rightTopFarVertex: Vertex = generateSquareRightTopFarVertex();

	const bottomSquare: readonly Triangle[] = createSquare(
		leftBottomNearVertex,
		rightBottomNearVertex,
		rightBottomFarVertex,
		leftBottomFarVertex,
	);
	const topSquare: readonly Triangle[] = createSquare(
		leftTopNearVertex,
		rightTopNearVertex,
		rightTopFarVertex,
		leftTopFarVertex,
	);
	const leftSquare: readonly Triangle[] = createSquare(
		leftBottomNearVertex,
		leftTopNearVertex,
		leftTopFarVertex,
		leftBottomFarVertex,
	);
	const rightSquare: readonly Triangle[] = createSquare(
		rightBottomNearVertex,
		rightTopNearVertex,
		rightTopFarVertex,
		rightBottomFarVertex,
	);
	const nearSquare: readonly Triangle[] = createSquare(
		leftBottomNearVertex,
		rightBottomNearVertex,
		rightTopNearVertex,
		leftTopNearVertex,
	);
	const farSquare: readonly Triangle[] = createSquare(
		leftBottomFarVertex,
		rightBottomFarVertex,
		rightTopFarVertex,
		leftTopFarVertex,
	);

	return [
		...bottomSquare,
		...topSquare,
		...leftSquare,
		...rightSquare,
		...nearSquare,
		...farSquare,
	];
}

function generateSquareLeftBottomNearVertex(): Vertex {
	return {
		position: {
			x: -0.5,
			y: -0.5,
			z: -0.5,
		},
		color: {
			red: 0,
			green: 0,
			blue: 0,
		},
	};
}

function generateSquareLeftBottomFarVertex(): Vertex {
	return {
		position: {
			x: -0.5,
			y: -0.5,
			z: 0.5,
		},
		color: {
			red: 0,
			green: 0,
			blue: 1,
		},
	};
}

function generateSquareLeftTopNearVertex(): Vertex {
	return {
		position: {
			x: -0.5,
			y: 0.5,
			z: -0.5,
		},
		color: {
			red: 0,
			green: 1,
			blue: 0,
		},
	};
}

function generateSquareLeftTopFarVertex(): Vertex {
	return {
		position: {
			x: -0.5,
			y: 0.5,
			z: 0.5,
		},
		color: {
			red: 0,
			green: 1,
			blue: 1,
		},
	};
}

function generateSquareRightBottomNearVertex(): Vertex {
	return {
		position: {
			x: 0.5,
			y: -0.5,
			z: -0.5,
		},
		color: {
			red: 1,
			green: 0,
			blue: 0,
		},
	};
}

function generateSquareRightBottomFarVertex(): Vertex {
	return {
		position: {
			x: 0.5,
			y: -0.5,
			z: 0.5,
		},
		color: {
			red: 1,
			green: 0,
			blue: 1,
		},
	};
}

function generateSquareRightTopNearVertex(): Vertex {
	return {
		position: {
			x: 0.5,
			y: 0.5,
			z: -0.5,
		},
		color: {
			red: 1,
			green: 1,
			blue: 0,
		},
	};
}

function generateSquareRightTopFarVertex(): Vertex {
	return {
		position: {
			x: 0.5,
			y: 0.5,
			z: 0.5,
		},
		color: {
			red: 1,
			green: 1,
			blue: 1,
		},
	};
}
