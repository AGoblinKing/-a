<script lang="ts">
	import { talk } from 'src/chat'
	import { ismobile } from 'src/timing'

	let text = '👾Welcome to a.Goblin.Life👾'

	talk.on(() => {
		if (!talk.$) return

		text = talk.$ + '\n' + text
	})
</script>

<div class="lofi {$ismobile ? 'mobile' : ''}">
	<textarea class="entry" bind:value={text} readonly />
</div>

<style>
	.entry {
		flex: 1;

		font-size: 2vh;
		user-select: none;
		color: white;

		resize: none;

		border-radius: 1vh;
		background-color: transparent;
		color: white;
		border: none;
		padding: 0;
		padding-right: 1vh;
		background-color: transparent;
		outline: none;
		border: none;
		text-align: right;
		box-shadow: none;
		font-weight: 500;
		height: 18vh;
		width: 50vw;
		direction: ltr;
		opacity: 0.4;
		border-radius: 1vh;
		text-shadow: -0.15rem -0.15rem 0 #000, 0.15rem -0.15rem 0 #000, -0.15rem 0.15rem 0 #000,
			0.15rem 0.15rem 0 #000;
		transition: all cubic-bezier(0.36, -1.2, 0.59, 1.67) 250ms;
	}

	.lofi {
		display: flex;
		position: absolute;
		top: 0vh;
		right: 0;
		direction: rtl;

		pointer-events: all;
		z-index: 2;
	}
</style>
