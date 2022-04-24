<script lang="ts">
	import { avatar_current, avatar_doer, size, video } from 'src/timing'

	import '../component/wasd-controller'
	import '../component/sfxr'

	import { sfx_jump } from 'src/sound/action'
</script>

<a-entity
	mixin="shadow character"
	position="0 1 1"
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
