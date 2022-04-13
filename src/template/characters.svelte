<script lang="ts">
	import '../component/wasd-controller'
	import '../component/speech-controller'
</script>

<a-entity
	mixin="shadow character"
	position="0 0 -5"
	vrm="src: /vrm/goblin.vrm; current: true"
	id="focus"
	wasd-controller
/>
<a-box position="1 1 -5" rotation="0 0 0" scale="1 1 1" color="#FFF" speech-controller />
<!-- <a-entity mixin="shadow" position="0 0 -5"  rotation="0 180 0" vrm="src: /vrm/femgoblin.vrm; mirror: true" scatter="-5 0 -5 5 0 5"  /> -->
<a-entity
	mixin="shadow character"
	position="0 0.15 -6"
	rotation="0 180 0"
	vrm="src: /vrm/doer.vrm; mirror: true"
/>
