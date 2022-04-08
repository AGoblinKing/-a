import { camera, delta } from 'src/game'
import { key_map } from 'src/input/keyboard'
import { Vector3 } from 'three'

camera.position.set(0, 40, 0)
camera.lookAt(0, 0, 0)

const $vec3 = new Vector3()
const $lookat = new Vector3(0, 0, -10)

delta.on(() => {
	// rotate camera within restricted angle
	// move with wasd
	$vec3.set(0, 0, 0)

	if (key_map.$['s']) {
		$vec3.z += 1
	}
	if (key_map.$['w']) {
		$vec3.z -= 1
	}
	if (key_map.$['a']) {
		$vec3.x -= 1
	}
	if (key_map.$['d']) {
		$vec3.x += 1
	}

	if (key_map.$['shift']) {
		$vec3.multiplyScalar(5)
	}

	camera.position.add($vec3.multiplyScalar(delta.$))

	camera.lookAt($vec3.set(camera.position.x, 0, camera.position.z).add($lookat))
})
