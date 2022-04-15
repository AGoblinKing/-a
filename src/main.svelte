<script lang="ts">
	import Volleyball from './template/volleyball.svelte'
	import Home from './ui/home.svelte'
	import { open_home, open_game, open_loading, open_help } from './timing'
	import Text from './ui/text.svelte'
	import Loading from './ui/loading.svelte'
	import Help from './ui/help.svelte'

	let groundSize = 100
</script>

<Text />

{#if $open_loading}
	<Loading />
{/if}
{#if $open_home}
	<Home />
{/if}

{#if $open_game}
	<Volleyball {groundSize} />
{/if}

{#if $open_help}
	<Help />
{/if}
