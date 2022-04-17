<script>
	import '../component/scatter'
	import '../component/activate'
	import '../component/ring'

	import '../component/net'
	import '../component/webcam-vrm'
	import '../component/vrm'
	import '../component/vary'

	import Webcam from './webcam.svelte'
	import CharactersMixins from './characters-assets.svelte'
	import Characters from './characters.svelte'
	import CameraFps from './camera-fps.svelte'

	import Heard from 'src/ui/heard.svelte'
	import { open_debug, open_stats } from 'src/timing'
	import Forest from './forest.svelte'
	import Live from 'src/ui/live.svelte'

	export let groundSize = 100
</script>

<Webcam />
<Heard />
<Live />

<a-scene
	keyboard-shortcuts="enterVR: false"
	stats={$open_stats}
	renderer="highRefreshRate: true; alpha: false;precision: low;"
	shadow="type:basic;"
	fog="type: exponential; color: #555"
	physics="driver: ammo; debug: {$open_debug}"
>
	<a-assets>
		<audio id="sound-bg" src="./sound/bg-ocean.mp3" />
		<a-mixin id="shadow" shadow="cast: true" />
		<a-mixin id="toon" material="roughness: 1;dithering: false;" />

		<CharactersMixins />
	</a-assets>

	<CameraFps />
	<Characters />
	<Forest />
</a-scene>
