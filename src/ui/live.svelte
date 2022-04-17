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
		right: 1vh;
		position: absolute;

		width: 3vh;
		background-color: #444;
		height: 3vh;
		border-radius: 3vh;
		border: 1vh solid #222;
		z-index: 5;
	}

	.action.live {
		background-color: red;
	}
</style>
