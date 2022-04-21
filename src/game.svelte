<script>
	import 'src/component/scatter'
	import 'src/component/activate'
	import 'src/component/ring'
	import 'src/component/webcam-vrm'
	import 'src/component/vrm'
	import 'src/component/uniforms'
	import 'src/component/vary'
	import 'src/component/random'

	import Webcam from 'src/ui/webcam.svelte'
	import CharactersMixins from 'src/node/characters-assets.svelte'
	import Characters from 'src/node/characters.svelte'
	import Camera from 'src/camera.svelte'

	import Heard from 'src/ui/heard.svelte'
	import { open_debug, open_stats } from 'src/timing'
	import Forest from 'src/node/forest.svelte'
	import Live from 'src/ui/live.svelte'
	import Debug from 'src/node/debug.svelte'
	import House from 'src/node/house.svelte'
	import Netdata from 'src/ui/netdata.svelte'
	import Environmental from 'src/node/environmental.svelte'
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

	<Camera />
	<Characters />
	<Forest groundSize={200} />
	<House />
	<Debug />
	<Environmental groundSize={200} />
</a-scene>
