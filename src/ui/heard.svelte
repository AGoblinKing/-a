<script lang="ts">
	import { talk } from 'src/chat'
	import { ismobile } from 'src/timing'

	let text

	talk.on(() => {
		if (!text || !talk.$) return

		text.value = talk.$
	})
</script>

<div class="lofi {$ismobile ? 'mobile' : ''}">
	<input type="text" class="entry" bind:this={text} readonly />
</div>

<style>
	.entry {
		flex: 1;
		background: rgba(12, 8, 240, 0.15);
		border: 0.6vh solid rgba(0, 0, 0, 0.5);
		font-size: 4vh;
		user-select: none;
		color: white;
		text-align: center;
		border: 0.5vh solid rgb(100, 106, 206);
		border-radius: 1vh;
		color: white;
		padding: 0.5vh 5vh;
		font-size: 3vh;
		outline: none;
		background-color: rgb(100, 110, 255);
		text-align: center;
		justify-self: center;
		font-weight: 500;
		align-self: center;
		min-width: 0;
		margin: 1vh;
		opacity: 0.4;
		box-shadow: 0 0 5vh rgb(100 65 150);
		text-shadow: -0.15rem -0.15rem 0 #000, 0.15rem -0.15rem 0 #000, -0.15rem 0.15rem 0 #000,
			0.15rem 0.15rem 0 #000;
		transition: all cubic-bezier(0.36, -1.2, 0.59, 1.67) 250ms;
	}

	.lofi {
		display: flex;
		position: absolute;
		top: 2.5vh;
		left: 50%;

		transform: translate(-50%, 0) perspective(400px) rotateX(-20deg);
		pointer-events: all;
		z-index: 2;
	}

	.mobile.lofi {
		transform: translate(-50%, 0) !important;
	}
</style>
