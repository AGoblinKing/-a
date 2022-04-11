<script lang="ts">
    import Volleyball from "./template/volleyball.svelte"
    import Home from "./ui/home.svelte";
    import { open_home, open_game} from "./timing";
    import Webcam from "./template/webcam.svelte";

    let groundSize = 100
</script>


{#if $open_home}
    <Home />
{/if}

{#if $open_game || true}
    <Volleyball {groundSize} />
    <Webcam />
{/if}

