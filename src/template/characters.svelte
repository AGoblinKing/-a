<script lang="ts">
	import '../component/wasd-controller'
</script>

<a-entity
	mixin="shadow character"
	position="0 0 -5"
	vrm="src: /vrm/goblin.vrm; current: true"
	id="focus"
	wasd-controller
/>
<!-- <a-entity mixin="shadow" position="0 0 -5"  rotation="0 180 0" vrm="src: /vrm/femgoblin.vrm; mirror: true" scatter="-5 0 -5 5 0 5"  /> -->
<a-entity
	mixin="shadow character"
	position="0 0.15 -6"
	rotation="0 180 0"
	vrm="src: /vrm/doer.vrm; mirror: true"
/>
