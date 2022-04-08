// Add some debug tools

import type { Board } from 'src/buffer/board'
import { scene } from 'src/game'
import { BoxBufferGeometry, Mesh, MeshToonMaterial, PlaneBufferGeometry } from 'three'
import random from './random'

// base line plane
export default (board: Board) => {
	random(board)

	const floor = new Mesh(
		new PlaneBufferGeometry(32, 32, 1, 1),
		new MeshToonMaterial({
			color: 'red'
		})
	)

	const box = new Mesh(
		new BoxBufferGeometry(1, 1, 1),
		new MeshToonMaterial({
			color: 'green'
		})
	)

	floor.rotateX(-Math.PI / 2)
	box.position.z += 0.5

	scene.add(floor, box)
}
