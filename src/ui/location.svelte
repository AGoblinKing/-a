<script>
	import { doControl } from 'src/chat'
	import { AVATAR } from 'src/component/avatar'

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
		<div
			class="loc clickable"
			in:scale={{ easing: bounceInOut }}
			out:scale={{ easing: bounceInOut }}
			on:click={() => {
				doControl(`~ use ${$AVATAR.data.hand_left ? 'hand_right' : 'hand_left'} ${g.id}`)
			}}
		>
			{g.name}
		</div>
	{/each}
</div>

<style>
	.clickable {
		cursor: pointer;
		pointer-events: all;
	}
	.clickable:active,
	.clickable:hover {
		background: rgba(255, 255, 255, 0.5);
		border-radius: 0.25vh;
	}

	.ground,
	.location {
		transition: all cubic-bezier(0.68, -0.55, 0.265, 1.55) 0.5s;
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
