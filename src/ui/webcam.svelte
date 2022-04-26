<script lang="ts">
	import { videoElement, canvasElement } from 'src/component/vrm-input'
	let canvasElementSource
	let videoElementSource

	$: {
		if (canvasElementSource && !canvasElement.$) {
			canvasElement.set(canvasElementSource)
		}
		if (videoElementSource && !videoElement.$) {
			videoElement.set(videoElementSource)
		}
	}
</script>

<div class="hidden">
	<video bind:this={videoElementSource} />
	<canvas bind:this={canvasElementSource} />
</div>

<style>
	.hidden {
		display: none;
	}
</style>
