import type {SerializedCoordinates} from "../coordinates/SerializedCoordinates.js";
import type {SerializedRgbColor} from "../rgb-color/SerializedRgbColor.js";
export type SerializedVertex = readonly [...SerializedCoordinates, ...SerializedRgbColor];
