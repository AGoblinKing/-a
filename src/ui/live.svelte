<script>
	import { open_live } from 'src/timing'
</script>

<div
	class="action {$open_live ? 'live' : ''}"
	on:click={() => {
		open_live.set(!open_live.$)
	}}
/>

<style>
	.action {
		cursor: pointer;
		top: 1vh;
		right: 0vh;
		position: absolute;

		width: 3vh;
		background-color: #444;
		height: 3vh;
		border-radius: 3vh;
		border: 1vh solid #222;
		opacity: 0.75;
		z-index: 5;
		box-shadow: 0 0 5vh rgb(0 65 150);
		transform: translate(-50%, 0) perspective(400px) rotateX(-20deg) rotateY(-20deg);
	}
	.action:hover {
		box-shadow: 0 0 5vh #0f0;
	}

	.action.live {
		background-color: red;
		box-shadow: 0 0 5vh #f00;
	}
</style>
