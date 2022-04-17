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

	import { start } from 'src/chat'

	import Heard from 'src/ui/heard.svelte'
	import { open_debug, open_stats } from 'src/timing'
	import Forest from './forest.svelte'

	start()
	const str = AFRAME.utils.styleParser.stringify.bind(AFRAME.utils.styleParser)

	export let groundSize = 100

	const light = '#FEE'

	const sky = '#336'
	const sky_dark = '#003'
	const scatter = [-groundSize / 2, 0, -groundSize / 2, groundSize / 2, 0, groundSize / 2].join(' ')

	const debug = 'debug: true; debugDrawMode: 1;'
	const vary = 'property: scale; range: 1.5 1.25 1.5 3 2 3'

	// look-controls="enabled: false;" wasd-controls="enabled;false;"
</script>

<Webcam />
<Heard />

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

		<a-mixin
			id="cloud"
			{scatter}
			animation="property:position.z; dur: {3000 *
				60}; to-{groundSize}; easing: linear; loop: true;"
			material="color: #ffffff; opacity: 0.75; transparent: true; emissive: white; "
			geometry
			host
			scale="25 5 15"
		/>
		<CharactersMixins />
	</a-assets>

	<CameraFps />
	<Characters />
	<Forest />
</a-scene>
