<script lang="ts">
	import { avatar_current, avatar_doer, size, video } from 'src/timing'

	import '../component/wasd-controller'
	import '../component/sfxr'

	import { sfx_jump } from 'src/sound/action'
</script>

<a-mixin
	id="character"
	ammo-body="type: dynamic; mass: 1; linearDamping: 0.95; angularDamping: 1;angularFactor: 0 1 0;"
	ammo-shape="type: capsule; fit: manual; halfExtents: 0.35 0.6 0.35; offset: 0 0.75 0"
/>

<a-entity
	mixin="shadow character"
	position="0 1 0"
	vrm="src: {$avatar_current}; current: true"
	look-controls
	scale="{$size.x} {$size.y} {$size.z}"
	host="current"
	wasd-controller
	net-avatar
	sfxr__jump={AFRAME.utils.styleParser.stringify(sfx_jump)}
/>

<a-entity
	mixin="shadow character"
	position="0 1 -1"
	rotation="0 180 0"
	host="doer"
	net-avatar
	vrm="src: {$avatar_doer}; mirror: true"
/>
