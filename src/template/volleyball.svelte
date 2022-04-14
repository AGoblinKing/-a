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
	import Flora from './flora.svelte'
	import FloraAssets from './flora-assets.svelte'
	import { start } from 'src/chat'
	import Text from 'src/ui/text.svelte'
	import Heard from 'src/ui/heard.svelte'

	start()
	const str = AFRAME.utils.styleParser.stringify.bind(AFRAME.utils.styleParser)

	export let groundSize = 100

	const light = '#FEE'

	const sky = '#336'
	const sky_dark = '#003'
	const scatter = [-groundSize / 2, 0, -groundSize / 2, groundSize / 2, 0, groundSize / 2].join(' ')

	const debug = 'debug: true; debugDrawMode: 1;'
	// look-controls="enabled: false;" wasd-controls="enabled;false;"
</script>

<Webcam />
<Text />
<Heard />

<a-scene
	renderer="highRefreshRate: true; alpha: false;precision: medium;"
	shadow="type:pcfsoft;"
	fog="type: linear; color: #AAA"
	physics="driver: ammo; "
>
	<a-assets>
		<audio id="sound-bg" src="/sound/bg-ocean.mp3" />
		<!-- <a-asset-item id="vrm-goblin" src="/vrm/goblin.vrm"></a-asset-item> -->

		<a-asset-item id="glb-tree" src="/glb/tree.glb" />
		<a-asset-item id="glb-rockC" src="/glb/rockC.glb" />
		<!-- <img id="heightmap" src="/image/heightmap.jpg" /> -->

		<a-mixin id="shadow" shadow="cast: true" />
		<a-mixin id="toon" material="roughness: 1;dithering: false;" />
		<a-mixin
			id="tree"
			shadow
			gltf-model="#glb-tree"
			{scatter}
			vary="property: scale; range: 1 0.5 1 2 3 2"
			ammo-body="type: static; mass: 0;"
			ammo-shape="type: box; fit: manual; halfExtents: 0.5 2.5 0.5; offset: 0 2.5 0"
		/>
		<a-mixin
			id="grass"
			shadow
			gltf-model="/glb/grass.glb"
			{scatter}
			vary="property: scale; range: 1 0.5 1 1.5 1.5 1.5"
		/>
		<a-mixin
			id="grass2"
			shadow
			gltf-model="/glb/grassLarge.glb"
			{scatter}
			vary="property: scale; range: 1 0.5 1 1.5 1.5 1.5"
		/>
		<a-mixin
			id="coinGold"
			shadow
			gltf-model="/glb/coinGold.glb"
			ammo-body="mass:0.1"
			ammo-shape="type: sphere; fit: manual; sphereRadius: 0.35; offset: -1 0.25 0.5"
			{scatter}
		/>

		<a-mixin
			id="water"
			geometry
			scale="0.5 0.1 0.5"
			ammo-body="mass:0.1"
			force="0 0 -2"
			material="color: blue; transparent: true; emissive: blue; opacity: 0.5"
			bounds="-{groundSize} -5 -{groundSize} {groundSize} 40 {groundSize}"
			ammo-shape="type: sphere; fit: manual; sphereRadius: 0.2; offset: 0 0.2 0"
			position="0 5 0"
		/>
		<a-mixin
			id="mountains"
			shadow
			gltf-model="#glb-rockC"
			ring="radius: {groundSize * 0.7}; count: 100"
			ammo-body="type: static; mass: 0;"
			vary="property: scale; range: 12 7.5 12 12 15 12"
			ammo-shape="type: box;fit: manual; halfExtents:15 7.5 15; offset: 0 7.5 0"
		/>
		<a-mixin
			id="rock"
			shadow
			gltf-model="/glb/rockB.glb"
			vary="property: scale; range: 0.5 0.25 0.5 2 1 2"
			{scatter}
			ammo-body="type: static; mass: 0"
			ammo-shape="type: sphere; fit: manual; sphereRadius: 1.5 "
		/>

		<a-mixin
			id="rockwater"
			shadow
			gltf-model="#glb-rockC"
			vary="property: scale; range: 1.5 0.1 1.5 2.5 0.5 2.5"
			ring="radius: 5; count: 10"
			ammo-body="type: static; mass: 0"
			ammo-shape="type: sphere; fit: manual; sphereRadius: 1.5 "
		/>
		<a-mixin
			id="cloud"
			{scatter}
			animation="property:position.z; dur: {3000 *
				60}; to-{groundSize}; easing: linear; loop: true;"
			material="color: #ffffff; opacity: 0.5; transparent: true; emissive: white; "
			geometry
			scale="25 5 15"
		/>
		<CharactersMixins />
		<FloraAssets {groundSize} />
	</a-assets>

	<CameraFps />
	<Flora />

	<a-sky color={sky} animate="property: color; to: {sky_dark}; easing: easeInOut; dur: 6000 " />

	<a-entity pool__tree="mixin: tree; size: 50" activate__tree />
	<a-entity pool__grass="mixin: grass; size: 100" activate__grass />
	<a-entity pool__grass2="mixin: grass2; size: 100" activate__grass2 />
	<a-entity pool__rock="mixin: rock; size: 50" activate__rock />
	<a-entity pool__rockwater="mixin: rockwater; size: 10" activate__rockwater />
	<a-entity pool__mountains="mixin: mountains; size: 100" activate__mountains />
	<a-entity pool__water="mixin: water; size: 500" activate__water />

	<a-entity
		pool__coins="mixin: coinGold; size: 20"
		material="shader: flat;"
		position="0 20 0"
		activate__coins
	/>

	<a-entity
		position="{groundSize / 4} {groundSize * 2} {groundSize / 4}"
		light={str({
			type: 'directional',
			castShadow: true,
			color: light,

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
		pool__cloud="mixin: shadow cloud; size: 15"
		activate__cloud
		position="0 25 {groundSize / 4}"
	/>

	<a-entity sound="autoplay: true; loop: true; volume: 0.1; src:#sound-bg;positional:false" />
</a-scene>
