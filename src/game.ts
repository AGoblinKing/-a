import { AmbientLight, DirectionalLight, PerspectiveCamera, Scene, WebGLRenderer } from 'three'

import { Value } from './value'

export const renderer = new WebGLRenderer()
export const camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
export const scene = new Scene()
export const tick = new Value(0)

export const ambient = new AmbientLight(0xffffff, 0.5)
export const sun = new DirectionalLight(0xffffff, 0.5)

sun.position.set(1, 1, 1)

scene.add(sun, ambient)

renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

function resize() {
	camera.aspect = window.innerWidth / window.innerHeight
	camera.updateProjectionMatrix()
	renderer.setSize(window.innerWidth, window.innerHeight)
}

window.addEventListener('resize', resize)

export const timestamp = new Value(0)
export const delta = new Value(0)

function Ticker(ts: DOMHighResTimeStamp) {
	requestAnimationFrame(Ticker)

	delta.set((ts - timestamp.$) / 1000)
	timestamp.set(ts)
	tick.set(tick.$ + 1)

	renderer.render(scene, camera)
}

Ticker(0)

