<script lang="ts">
	import { open_targeting } from 'src/timing'

	import '../component/follow'
	import '../component/character-camera'

	let el
	// change color on targets
	// put green wireframe box around target when gazed at
	// toggle with ~ selection
	open_targeting.on(($t) => {
		if (!$t) return
	})

	const ents = {}
	const box = new AFRAME.THREE.Box3()

	function collidestart(e) {
		const who = e.detail.targetEl
		if (ents[who.id]) return

		const keys = Object.keys(ents)
		if (keys.length >= 5) {
			const key = keys[Math.floor(Math.random() * keys.length)]
			el.components.pool__targeting.returnEntity(ents[key])
			delete ents[key]
		}

		const ent = el.components.pool__targeting.requestEntity()
		ent.play()
		ents[who.id] = ent

		box.setFromObject(who.object3D, true)

		box.getSize(ent.object3D.scale)
		box.getCenter(ent.object3D.position)
	}

	function collideend(e) {
		const who = e.detail.targetEl
		el.components.pool__targeting.returnEntity(ents[who.id])

		delete ents[who.id]
	}
</script>

<!-- <a-mixin
	id="bbs"
	geometry
	material="wireframe: true; opacity: 0.5; color: #00ff00; transparent: true; shader: flat;"
/>
<a-entity
	geometry
	bind:this={el}
	material="color: blue; wireframe: true; opacity: 1; shader: flat"
	position="0 0 -1"
	pool__targeting="mixin: bbs; size: 5"
/> 


	<a-entity
	follow="target:#camera;"
	geometry
	material="wireframe: true; opacity: 0.2; transparent: true; visible: {$open_targeting} };"
	scale="0.1 0.1 20"
	position="0 0 -1"
	on:collidestart={collidestart}
	on:collideend={collideend}
	ammo-body="type: kinematic;disableCollision: true;emitCollisionEvents: true;"
	ammo-shape="type: box; halfExtents: 0.05 0.05 10;offset: 0 0 -1"
/>

-->

<a-camera
	active
	fov="75"
	id="#camera"
	character-camera
	position="0 4 0"
	wasd-controls="enabled: false;"
	look-controls="enabled: false;"
/>
