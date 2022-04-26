<script lang="ts">
	import { open_help, open_loading, open_targeting, toggle_pointerlock } from 'src/timing'

	import 'src/component/camera-controller'
	import 'src/component/copy'
	import 'src/component/look'

	let el
	// change color on targets
	// put green wireframe box around target when gazed at
	// toggle with ~ selection
	open_targeting.on(($t) => {
		if (!$t) return
	})

	const ents: any = {}
	const box = new AFRAME.THREE.Box3()

	open_targeting.on((t) => {
		if (!t) {
			Object.values(ents).forEach((e: any) => {
				el.components.pool__targeting.returnEntity(e)
				delete ents[e.object3D.uuid]
			})
		}
	})
	function collidestart(e) {
		const who = e.detail.targetEl
		if (who.id === 'ground') return

		const keys = Object.keys(ents)
		if (keys.length >= 10) {
			const key = keys[Math.floor(Math.random() * keys.length)]
			el.components.pool__targeting.returnEntity(ents[key])
			delete ents[key]
		}

		const ent = el.components.pool__targeting.requestEntity()
		ent.play()

		ents[who.object3D.uuid] = ent

		box.setFromObject(who.object3D)

		box.getSize(ent.object3D.scale)
		box.getCenter(ent.object3D.position)
	}

	function collideend(e) {
		const who = e.detail.targetEl
		if (!ents[who.object3D.uuid]) return
		el.components.pool__targeting.returnEntity(ents[who.object3D.uuid])

		delete ents[who.object3D.uuid]
	}
</script>

<a-mixin
	id="bbs"
	geometry="primitive: circle; segments: 4;"
	animation="property: rotation; to: 0 360 0; loop: true; dur: 1000; easing: linear"
	material="wireframe: true; color: #00ff00; shader: flat;"
/>

<a-camera
	active
	fov="85"
	id="camera"
	camera-controller
	far="50000"
	position="0 4 0"
	wasd-controls="enabled: false;"
	look="enabled: true;pointerLockEnabled: true;  reverseTouchDrag: true;"
	look-controls="enabled: false;"
>
	<a-entity
		geometry="primitive: box; width: 0.4; height: 0.4; depth: 0.1"
		material="shader: flat; transparent: true; opacity: 0.5; color: #006ace"
		position="0 -0.2 -0.5"
		rotation="-40 0 0"
		visible={$open_loading || $open_help}
	/>

	{#if $open_targeting}
		<a-entity
			scale="0.1 0.1 20"
			position="0 0 -1"
			on:collidestart={collidestart}
			on:collideend={collideend}
			ammo-body="type: kinematic;disableCollision: true;emitCollisionEvents: true;collisionFilterMask: 3;"
			ammo-shape="type: box; halfExtents: 0.05 0.05 6;offset: 0 0 -8; fit: manual;"
		/>
	{/if}
</a-camera>

<!-- <a-entity mixin="bbs" material="color: blue;" position="0 0 -1" /> -->
<a-entity bind:this={el} pool__targeting="mixin: bbs; size: 10" />
