<script lang="ts">
	import { renderer } from "../game"

	let gameSection

	$: {
		gameSection?.appendChild(renderer.domElement)
	}
</script>


<section bind:this={gameSection}>

</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;
	}
</style>
