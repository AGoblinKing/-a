<script>
	import '../component/scatter'
	import '../component/activate'
	import '../component/ring'
	import '../component/lookat'

	import '../component/webcam-vrm'
	import '../component/vrm'
	import '../component/vary'
	import Webcam from './webcam.svelte'
	import CharactersMixins from './characters-assets.svelte'
	import Characters from './characters.svelte'
	import CameraFps from './camera-fps.svelte'

	import { start } from 'src/chat'
	import Text from 'src/ui/text.svelte'
	import Heard from 'src/ui/heard.svelte'
	import { open_debug, open_stats } from 'src/timing'

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
<Text />
<Heard />

<a-scene
	stats={$open_stats}
	renderer="highRefreshRate: true; alpha: false;precision: medium;"
	shadow="type:basic;"
	fog="type: exponential; color: #555"
	physics="driver: ammo; debug: {$open_debug} "
>
	<a-assets>
		<audio id="sound-bg" src="/sound/bg-ocean.mp3" />
		<a-mixin id="shadow" shadow="cast: true" />
		<a-mixin id="toon" material="roughness: 1;dithering: false;" />

		<a-mixin
			id="cloud"
			{scatter}
			animation="property:position.z; dur: {3000 *
				60}; to-{groundSize}; easing: linear; loop: true;"
			material="color: #ffffff; opacity: 0.75; transparent: true; emissive: white; "
			geometry
			scale="25 5 15"
		/>
		<CharactersMixins />
	</a-assets>

	<CameraFps />

	<a-entity id="mountain-model" gltf-model="/glb/rockC.glb" instanced-mesh="capacity: 50" />
	<!-- <a-entity id="tree-model" gltf-model="/glb/tree.glb" instanced-mesh="capacity: 50" />
	<a-entity id="rock-model" gltf-model="/glb/rockB.glb" instanced-mesh="capacity: 50" /> -->
	<!-- <a-entity id="grass-model" gltf-model="/glb/grass.glb" instanced-mesh="capacity: 250" /> -->

	<!-- <a-entity id="flowers-model" gltf-model="/glb/flowers.glb" instanced-mesh />
	<a-entity id="mushroom-model" gltf-model="/glb/mushrooms.glb" instanced-mesh="capacity: 20" />
	<a-entity id="flowersLow-model" gltf-model="/glb/flowersLow.glb" instanced-mesh="capacity: 50" /> -->

	<a-mixin id="flowers" shadow gltf-model="/glb/flowers.glb" {scatter} {vary} />
	<a-mixin id="mushroom" shadow gltf-model="/glb/mushrooms.glb" {scatter} {vary} />
	<a-mixin id="flowersLow" shadow gltf-model="/glb/flowersLow.glb" {scatter} {vary} />

	<a-mixin
		id="tree"
		shadow
		gltf-model="/glb/tree.glb"
		{scatter}
		vary="property: scale; range: 1 0.5 1 2 3 2"
		ammo-body="type: static; mass: 0;"
		ammo-shape="type: box; fit: manual; halfExtents: 0.5 2.5 0.5; offset: 0 2.5 0"
	/>

	<a-mixin
		id="grass"
		gltf-model="/glb/grass.glb"
		shadow
		{scatter}
		vary="property: scale; range: 1 0.5 1 1.5 1.5 1.5"
	/>

	<a-mixin
		id="rock"
		shadow
		vary="property: scale; range: 0.5 0.25 0.5 2 1 2"
		{scatter}
		gltf-model="/glb/rockB.glb"
		ammo-body="type: static; mass: 0"
		ammo-shape="type: sphere; fit: manual; sphereRadius: 1.5 "
	/>
	<a-mixin
		id="mountains"
		shadow
		instanced-mesh-member="mesh:#mountain-model"
		ring="radius: {groundSize * 0.7}; count: 50"
		ammo-body="type: static; mass: 0;"
		vary="property: scale; range: 12 7.5 12 12 15 12"
		ammo-shape="type: box;fit: manual; halfExtents:15 7.5 15; offset: 0 7.5 0"
	/>

	<a-sky color={sky} animate="property: color; to: {sky_dark}; easing: easeInOut; dur: 6000 " />

	<a-entity pool__tree="mixin: tree; size: 50" activate__tree />
	<a-entity pool__mountains="mixin: mountains; size: 50" activate__mountains />
	<a-entity pool__mushroom="mixin: mushroom; size: 20" activate__mushroom />
	<a-entity pool__grass="mixin: grass; size: 50" activate__grass />
	<a-entity pool__rock="mixin: rock; size: 50" activate__rock />
	<a-entity pool__flowers="mixin: flowers; size: 50" activate__flowers />
	<a-entity pool__flowersLow="mixin: flowersLow; size: 50" activate__flowersLow />

	<a-entity
		position="{groundSize / 4} {groundSize * 2} {groundSize / 4}"
		light={str({
			type: 'directional',
			color: light,
			castShadow: true,

			shadowCameraTop: groundSize,
			shadowCameraLeft: -groundSize,
			shadowCameraRight: groundSize,
			shadowCameraBottom: -groundSize,
			shadowBias: -0.0001,
			shadowMapHeight: 1024 * 4,
			shadowMapWidth: 1024 * 4,
			intensity: 0.75
		})}
	/>

	<a-entity
		position="-{groundSize / 4} {groundSize * 2} -{groundSize / 4}"
		light={str({
			type: 'directional',

			color: light,

			intensity: 0.75
		})}
	/>
	<a-entity light="type:ambient; color:white; intensity:0.1;" position="-1 1 1" />

	<Characters />

	<a-plane
		shadow
		position="0 0 0"
		rotation="-90 0 0"
		width={groundSize * 1.5}
		height={groundSize * 1.5}
		ammo-body="type: static; mass: 0;"
		ammo-shape="type:box"
		material="repeat: 10 10;"
		color="#334411"
	/>

	<a-entity
		pool__cloud="mixin: shadow cloud; size: 5"
		activate__cloud
		position="0 25 {groundSize / 4}"
	/>

	<a-entity sound="autoplay: true; loop: true; volume: 0.05; src:#sound-bg;positional:false" />
</a-scene>
