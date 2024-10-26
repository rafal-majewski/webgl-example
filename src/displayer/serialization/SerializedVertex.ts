import type {SerializedCoordinates} from "./SerializedCoordinates.js";
import type {SerializedRgbColor} from "./SerializedRgbColor.js";
export type SerializedVertex = readonly [...SerializedCoordinates, ...SerializedRgbColor];
