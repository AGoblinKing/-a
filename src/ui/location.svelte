<script>
	import { location } from 'src/component/location'

	import { ground } from 'src/timing'
	import { bounceInOut } from 'svelte/easing'
	import { scale } from 'svelte/transition'
</script>

<div class="location">
	{#each $location as loc}
		<div class="loc" in:scale={{ easing: bounceInOut }} out:scale={{ easing: bounceInOut }}>
			{loc}
		</div>
	{/each}
</div>
<div class="ground">
	{#each $ground as g}
		<div class="loc" in:scale={{ easing: bounceInOut }} out:scale={{ easing: bounceInOut }}>
			{g}
		</div>
	{/each}
</div>

<style>
	.ground,
	.location {
		user-select: none;
		display: flex;
		flex-direction: row;
		position: absolute;
		font-size: 4vh;
		opacity: 0.5;
		left: 0;
		pointer-events: none;
		text-shadow: -0.15rem -0.15rem 0 #000, 0.15rem -0.15rem 0 #000, -0.15rem 0.15rem 0 #000,
			0.15rem 0.15rem 0 #000;
		z-index: 1;
	}
	.ground {
		bottom: 0;
		left: 50%;
		align-items: center;
		transform: translateX(-50%);
	}
	.loc {
		margin: 1vh;
	}
	.location {
		flex-direction: column;
		top: 7vh;
		left: 0%;
	}
</style>
