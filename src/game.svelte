<script>
	import 'src/component/scatter'
	import 'src/component/activate'
	import 'src/component/ring'
	import 'src/component/vrm-input'
	import 'src/component/uniforms'
	import 'src/component/vary'
	import 'src/component/random'
	import 'src/component/target'

	import Webcam from 'src/ui/webcam.svelte'

	import Characters from 'src/node/characters.svelte'
	import Camera from 'src/camera.svelte'

	import Heard from 'src/ui/heard.svelte'
	import { open_debug, open_stats, open_ui } from 'src/timing'
	import Forest from 'src/node/forest.svelte'
	import Live from 'src/ui/live.svelte'
	import Debug from 'src/node/debug.svelte'
	import House from 'src/node/house.svelte'
	import Netdata from 'src/ui/netdata.svelte'
	import Environmental from 'src/node/environmental.svelte'
	import OnscreenUi from './ui/onscreen-ui.svelte'
	import Items from './node/items.svelte'
</script>

<Webcam />
<Netdata />

{#if $open_ui}
	<Live />
	<Heard />
	<OnscreenUi />
{/if}

<a-scene
	keyboard-shortcuts="enterVR: false"
	stats={$open_stats}
	renderer=" alpha: false; colorManagement: true;"
	shadow="type:basic;"
	device-orientation-permission-ui="enabled: false"
	physics="driver: ammo; debug: {$open_debug}; iterations: 2; fixedTimeStep: 0.01667; maxSubSteps: 2;"
	uniforms
	net
>
	<a-assets>
		<template id="forest">
			<a-sphere color="blue" radius="5" />
		</template>
		<audio id="sound-bg" src="./sound/bg-ocean.mp3" />
		<a-mixin id="shadow" shadow="cast: true; receive: false" />
		<Items />
	</a-assets>

	<Camera />
	<Characters />
	<Forest />
	<House />
	<Debug />
	<Environmental groundSize={200} />
</a-scene>
