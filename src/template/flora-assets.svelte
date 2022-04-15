<script lang="ts">
	export let groundSize: number
	const scatter = `-${groundSize} 0 -${groundSize} ${groundSize} 0 ${groundSize}`
	const vary = 'property: scale; range: 1.5 1.25 1.5 3 2 3'
	const vary__rot = 'property: rotation; range: 0 0 0 0 360 0'
	const vary__rotx = 'property: rotation; range: 0 0 0 360 0 0'
</script>

