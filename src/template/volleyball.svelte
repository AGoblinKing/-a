<script>
	import '../component/scatter'
	import '../component/activate'
	import '../component/ring'
	import '../component/lookat'

	import '../component/webcam-vrm'
	import '../component/vrm'
	import Webcam from './webcam.svelte'
	import CharactersMixins from './characters-assets.svelte'
	import Characters from './characters.svelte'
	import CameraFps from './camera-fps.svelte'
	const str = AFRAME.utils.styleParser.stringify.bind(AFRAME.utils.styleParser)

	export let groundSize = 100

	const light = '#EEF'
	const light_dark = '#aaF'
	const sky = '#336'
	const sky_dark = '#003'
	const scatter = [-groundSize / 2, 0, -groundSize / 2, groundSize / 2, 0, groundSize / 2].join(' ')

	const debug = 'debug: true; debugDrawMode: 1;'
	// look-controls="enabled: false;" wasd-controls="enabled;false;"
</script>

<Webcam />
<a-scene shadow="type:pcfsoft;" fog="type: linear; color: #AAA" physics="driver: ammo; ">
	<a-assets>
		<audio id="sound-bg" src="/sound/bg-ocean.mp3" />
		<!-- <a-asset-item id="vrm-goblin" src="/vrm/goblin.vrm"></a-asset-item> -->

		<a-asset-item id="glb-tree" src="/glb/tree.glb" />

		<a-mixin id="shadow" shadow="cast: true" />
		<a-mixin id="toon" material="roughness: 1;dithering: false;" />
		<a-mixin
			id="tree"
			shadow
			gltf-model="#glb-tree"
			{scatter}
			ammo-body="type: static; mass: 0;"
			ammo-shape="type: box; fit: manual; halfExtents: 0.5 2.5 0.5; offset: 0 2.5 0"
		/>
		<a-mixin id="grass" shadow gltf-model="/glb/grass.glb" {scatter} />
		<a-mixin id="grass2" shadow gltf-model="/glb/grassLarge.glb" {scatter} />
		<a-mixin
			id="coinGold"
			shadow
			gltf-model="/glb/coinGold.glb"
			ammo-body
			material="flatShading: true;shader:flat; emissive: #FFF"
			ammo-shape="type: sphere; fit: manual; sphereRadius: 0.35; offset: -1 0.25 0.5"
			{scatter}
		/>
		<a-mixin
			id="mountains"
			shadow
			gltf-model="/glb/rockC.glb"
			ring="radius: {groundSize * 0.7}; count: 100"
			scale="12 7.5 12"
			ammo-body="type: static; mass: 0;"
			ammo-shape="type: box;fit: manual; halfExtents:15 7.5 15; offset: 0 7.5 0"
		/>
		<a-mixin
			id="rock"
			shadow
			gltf-model="/glb/rockB.glb"
			scale="0.5 0.25 0.5"
			{scatter}
			ammo-body="type: static; mass: 0"
			ammo-shape="type: box; fit: manual; halfExtents: 0.25 0.5 0.25;"
		/>
		<a-mixin
			id="cloud"
			{scatter}
			animation="property:position; dur: {3000 *
				60}; to:0 0 -{groundSize}; easing: linear; loop: true;"
			material="color: #ffffff; opacity: 0.5; transparent: true; "
			geometry
			scale="15 5 5"
		/>
		<CharactersMixins />
	</a-assets>

	<CameraFps />

	<a-sky color={sky} animate="property: color; to: {sky_dark}; easing: easeInOut; dur: 6000 " />

	<a-entity pool__tree="mixin: tree; size: 100" activate__tree />
	<a-entity pool__grass="mixin: grass; size: 100" activate__grass />
	<a-entity pool__grass2="mixin: grass2; size: 100" activate__grass2 />
	<a-entity pool__rock="mixin: rock; size: 100" activate__rock />
	<a-entity pool__mountains="mixin: mountains; size: 100" activate__mountains />

	<a-entity
		pool__coins="mixin: coinGold; size: 100"
		material="shader: flat;"
		position="0 20 0"
		activate__coins
	/>

	<a-entity
		position="{groundSize / 4} {groundSize * 2} {groundSize / 4}"
		animate="property: color; to: {light_dark}; easing: easeInOut"
		light={str({
			type: 'directional',
			castShadow: true,
			color: light,

			shadowCameraTop: groundSize,
			shadowCameraLeft: -groundSize,
			shadowCameraRight: groundSize,
			shadowCameraBottom: -groundSize,
			shadowMapHeight: 1024 * 4,
			shadowMapWidth: 1024 * 4,
			intensity: 0.9
		})}
	/>
	<a-entity
		light="type:ambient; color:{light}; intensity:1;"
		animate="property: light.color; to: {light_dark}; easing: easeInOutBounce; dur: 6000"
		position="-1 1 1"
	/>

	<Characters />

	<a-plane
		shadow
		position="0 0 0"
		rotation="-90 0 0"
		width={groundSize}
		height={groundSize}
		ammo-body="type: static; mass: 0;"
		ammo-shape="type:box"
		color="#334411"
	/>

	<a-entity
		pool__cloud="mixin: shadow cloud; size: 15"
		activate__cloud
		position="0 20 {groundSize / 4}"
	/>

	<a-sound autoplay loop volume={0.5} src="#sound-bg" />
</a-scene>
