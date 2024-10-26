import type {Vertex} from "./Vertex.js";

export type Triangle = Readonly<{
	vertex1: Vertex;
	vertex2: Vertex;
	vertex3: Vertex;
}>;
