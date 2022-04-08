<script lang="ts">
	import Header from './Header.svelte'
	import Game from "./Game.svelte"
</script>

<Header />

<main>
	<Game />
</main>

<style>
	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		width: 100%;
		height: 100%;
	}
</style>
