import {mat4} from 'gl-matrix';
import type {Camera} from '../engine/camera/Camera.js';

export function computeUniformCameraMatrix(camera: Camera): Float32Array {
	const viewMatrix = mat4.create();
	const projectionMatrix = mat4.create();
	const viewProjectionMatrix = mat4.create();

	const eye = [camera.position.x, camera.position.y, camera.position.z];
	const center = [0, 0, 0];
	const up = [0, 0, 1];

	mat4.lookAt(viewMatrix, eye, center, up);
	mat4.perspective(projectionMatrix, Math.PI / 4, 1, 0.1, 100);
	mat4.multiply(viewProjectionMatrix, projectionMatrix, viewMatrix);

	return viewProjectionMatrix;
}
