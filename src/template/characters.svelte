<script lang="ts">
	import { avatar_current, avatar_doer, video } from 'src/timing'

	import '../component/wasd-controller'
	import '../component/sfxr'

	import { sfx_jump } from 'src/sound/action'
</script>

<a-entity
	mixin="shadow character"
	position="0 0 15"
	vrm="src: {$avatar_current}; current: true"
	look-controls
	id="focus"
	wasd-controller
	sfxr__jump={AFRAME.utils.styleParser.stringify(sfx_jump)}
/>

<!--
	sfxr__collide
-->
<!-- <a-entity mixin="shadow" position="0 0 -5"  rotation="0 180 0" vrm="src: /vrm/femgoblin.vrm; mirror: true" scatter="-5 0 -5 5 0 5"  /> -->
<a-entity
	mixin="shadow character"
	position="0 0.25 14"
	rotation="0 180 0"
	vrm="src: {$avatar_doer}; mirror: true"
/>
