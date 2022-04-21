<script lang="ts">
	import Game from 'src/game.svelte'
	import Home from 'src/ui/home.svelte'
	import { open_home, open_game, open_loading, open_help } from 'src/timing'
	import Text from 'src/ui/text.svelte'
	import Loading from 'src/ui/loading.svelte'
	import Help from 'src/ui/help.svelte'
</script>

<Text />
{#if $open_help}
	<Help />
{/if}
{#if $open_loading}
	<Loading />
{/if}

{#if $open_home}
	<Home />
{/if}

{#if $open_game}
	<Game />
{/if}
