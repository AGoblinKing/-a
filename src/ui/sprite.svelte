<script lang="ts">
	import { createEventDispatcher } from 'svelte'

	export let idx = 0
	export let hoverable = true
	export let shadow = false
	export let active = false
	export let style = ''

	$: x = (idx % 32) * 100
	$: y = Math.floor(idx / 32) * 100

	const dispatch = createEventDispatcher()

	function forward(event) {
		dispatch(event.type, event.detail)
	}
</script>

<sprite
	class="sprite"
	class:hoverable
	class:active
	class:shadow
	on:click={forward}
	style="background-position: -{x}% -{y}%; {style}"
/>

<style>
	.sprite {
		display: flex;
		padding: 0.25rem;
		flex: 1;
		background-size: 3200% 3200%;

		image-rendering: pixelated;
		cursor: pointer;
	}

	.active {
		background-color: #222 !important;
	}

	.shadow {
		filter: drop-shadow(0 0 0.1rem rgb(0, 58, 130));
	}

	.sprite.hoverable:hover {
		background-color: #333;
	}
</style>