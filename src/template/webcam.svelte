<script lang="ts">
	import { videoElement, canvasElement } from 'src/component/webcam-vrm'

	let videoElementSource
	let canvasElementSource

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
	.broadcast {
		position: absolute;
		z-index: 5;
	}
	.hidden {
		display: none;
	}
</style>
