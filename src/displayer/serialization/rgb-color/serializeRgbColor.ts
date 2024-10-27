import type {RgbColor} from "../../../engine/RgbColor.js";
import type {SerializedRgbColor} from "./SerializedRgbColor.js";

export function serializeRgbColor(color: RgbColor): SerializedRgbColor {
	return [color.red, color.green, color.blue];
}
