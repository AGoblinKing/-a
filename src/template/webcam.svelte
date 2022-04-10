<script lang="ts">
    import { videoElement } from "src/component/webcam-vrm";

    let videoElementSource

    
    $: {
        if(videoElementSource && !videoElement.$) {
            videoElement.set(videoElementSource)
        }


    }
</script>

<div class="hidden">
    <video bind:this={videoElementSource} />

</div>

<style>

.hidden {
    display: none;
}
</style>