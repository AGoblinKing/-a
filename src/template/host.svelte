<script>
	import '../component/scatter'
	import '../component/activate'
	import '../component/ring'

	import '../component/webcam-vrm'
	import '../component/vrm'
	import '../component/uniforms'
	import '../component/vary'
	import '../component/random'

	import Webcam from './webcam.svelte'
	import CharactersMixins from './characters-assets.svelte'
	import Characters from './characters.svelte'
	import CameraFps from './camera-fps.svelte'

	import Heard from 'src/ui/heard.svelte'
	import { open_debug, open_stats } from 'src/timing'
	import Forest from './forest.svelte'
	import Live from 'src/ui/live.svelte'
	import Debug from './debug.svelte'
	import House from './house.svelte'
	import Netdata from 'src/ui/netdata.svelte'
	import Environmental from './environmental.svelte'
</script>

<Webcam />
<Heard />
<Live />
<Netdata />

<a-scene
	keyboard-shortcuts="enterVR: false"
	stats={$open_stats}
	renderer="highRefreshRate: true; alpha: false;precision: low;"
	shadow="type:basic;"
	fog="type: exponential; color: #555"
	physics="driver: ammo; debug: {$open_debug}"
	uniforms
	net
>
	<a-assets>
		<template id="forest">
			<a-sphere color="blue" radius="5" />
		</template>
		<audio id="sound-bg" src="./sound/bg-ocean.mp3" />
		<a-mixin id="shadow" shadow="cast: true" />

		<CharactersMixins />
	</a-assets>

	<CameraFps />
	<Characters />
	<Forest />
	<House />
	<Debug />
	<Environmental />
</a-scene>
