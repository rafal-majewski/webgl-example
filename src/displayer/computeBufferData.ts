import type {Cube} from "../engine/Cube.js";
import {serializeCube} from "./serialization/cube/serializeCube.js";
import type {SerializedCube} from "./serialization/cube/SerializedCube.js";

export function computeBufferData(cube: Cube): Float32Array {
	const serializedCube: SerializedCube = serializeCube(cube);
	return new Float32Array(serializedCube);
}
