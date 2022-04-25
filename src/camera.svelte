<script lang="ts">
	import { open_help, open_loading, open_targeting } from 'src/timing'

	import 'src/component/character-camera'
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
	geometry
	material=" opacity: 0.15; color: #00ff00; transparent: true; shader: flat;"
	text="font: ./Roboto-msdf.json; value: targeting info"
/>

<a-camera
	active
	fov="85"
	id="camera"
	character-camera
	far="50000"
	position="0 4 0"
	wasd-controls="enabled: false;"
	look="enabled: true;pointerLockEnabled: true; magicWindowTrackingEnabled: false; reverseTouchDrag: true;"
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
			geometry
			material="wireframe: true; opacity: 0.05s;color: #0F0; shader: flat;transparent: true; visible: {$open_targeting} };"
			scale="0.1 0.1 20"
			position="0 0 -1"
			on:collidestart={collidestart}
			on:collideend={collideend}
			ammo-body="type: kinematic;disableCollision: true;emitCollisionEvents: true;collisionFilterMask: 3;"
			ammo-shape="type: box; halfExtents: 0.05 0.05 6;offset: 0 0 -9.5"
		/>
	{/if}
</a-camera>

<a-entity
	geometry
	bind:this={el}
	material="color: blue; opacity: 0.15; shader: flat; visible: false;"
	position="0 0 -1"
	pool__targeting="mixin: bbs; size: 10"
/>
