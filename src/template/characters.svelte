<script lang="ts">
	import { avatar_current, avatar_doer } from 'src/timing'

	import '../component/wasd-controller'
	import '../component/vrm'
	import '../component/webcam-vrm'
</script>

<a-entity
	mixin="shadow character"
	vrm="src: {$avatar_current}; current: true"
	look-controls
	id="focus"
	host="sync: position quaternion vrm; dynamic: true;"
	wasd-controller
/>

<a-entity
	mixin="shadow character"
	rotation="0 180 0"
	position="0 0 -1"
	host="sync: position quaternion vrm; dynamic: true;"
	vrm="src: {$avatar_doer}; doer: true; mirror: true"
/>
