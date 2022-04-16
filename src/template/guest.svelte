<script>
	import { open_help, open_loading, open_stats } from 'src/timing'
	import Heard from 'src/ui/heard.svelte'

	import Help from 'src/ui/help.svelte'
	import Loading from 'src/ui/loading.svelte'

	import Text from 'src/ui/text.svelte'
	import CharactersAssets from './characters-assets.svelte'
	import Characters from './characters.svelte'
	import Webcam from './webcam.svelte'

	import '../component/net'
</script>

<Text />

{#if $open_help}
	<Help />
{/if}
{#if $open_loading}
	<Loading />
{/if}

<Webcam />
<Heard />

<a-scene
	keyboard-shortcuts="enterVR: false"
	stats={$open_stats}
	renderer="highRefreshRate: true; alpha: false;precision: medium;"
	shadow="type:basic;"
	fog="type: exponential; color: #555"
	guest
>
	<a-assets>
		<CharactersAssets />
	</a-assets>

	<Characters />
</a-scene>
