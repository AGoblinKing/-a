<script>
	import '../component/scatter'
	import '../component/activate'
	import '../component/ring'

	import '../component/net'
	import '../component/webcam-vrm'
	import '../component/vrm'
	import '../component/vary'
	import '../component/floaty'
	import '../component/windy'

	const str = AFRAME.utils.styleParser.stringify.bind(AFRAME.utils.styleParser)

	export let groundSize = 100

	const light = '#FEE'

	const sky = '#336'
	const sky_dark = '#003'
	const scatter = [-groundSize / 2, 0, -groundSize / 2, groundSize / 2, 0, groundSize / 2].join(' ')
	const scatterBig = [-groundSize, 0, -groundSize, groundSize, 0, groundSize].join(' ')

	const vary = 'property: scale; range: 1.5 1.25 1.5 3 2 3'

	// look-controls="enabled: false;" wasd-controls="enabled;false;"
</script>

<a-mixin
	id="smolitem"
	ammo-body="type: static; mass: 0;collisionFilterGroup: 2;"
	ammo-shape="type: sphere; fit: manual; sphereRadius: 1;"
/>

<a-mixin id="smolfix" ammo-shape="offset: -1.85 0 0.85;" />
<a-mixin
	id="flowers"
	mixin="smolitem smolfix"
	shadow
	gltf-model="./glb/flowers.glb"
	host
	windy
	{scatter}
	{vary}
/>
<a-mixin
	id="mushroom"
	mixin="smolitem smolfix"
	shadow
	gltf-model="./glb/mushrooms.glb"
	host
	windy
	{scatter}
	{vary}
/>
<a-mixin
	id="flowersLow"
	mixin="smolitem smolfix"
	shadow
	gltf-model="./glb/flowersLow.glb"
	host
	windy
	{scatter}
	{vary}
/>

<a-mixin
	id="rock"
	shadow
	host
	vary="property: scale; range: 0.5 0.25 0.5 2 1 2"
	{scatter}
	gltf-model="./glb/rockB.glb"
	ammo-body="type: static; mass: 0"
	ammo-shape="type: sphere; fit: manual; sphereRadius: 1.5 "
/>

<a-entity id="mountain-model" gltf-model="./glb/rockC.glb" instanced-mesh="capacity: 50" />
<a-mixin
	id="mountains"
	shadow
	host
	instanced-mesh-member="mesh:#mountain-model"
	ring="radius: {groundSize * 0.7}; count: 50"
	ammo-body="type: static; mass: 0;"
	vary="property: scale; range: 12 2 12 15 20 15"
	ammo-shape="type: box;fit: manual; halfExtents:15 7.5 15; offset: 0 7.5 0"
/>
<a-entity pool__mountains="mixin: mountains; size: 100" activate__mountains />

<a-sky color={sky} host animate="property: color; to: {sky_dark}; easing: easeInOut; dur: 6000 " />

<!-- <a-entity id="tree-model" gltf-model="./glb/tree.glb" instanced-mesh="capacity: 300" /> -->
<a-mixin
	id="tree"
	class="climbable"
	shadow
	host
	windy
	gltf-model="./glb/tree.glb"
	{scatter}
	vary="property: scale; range: 1 0.5 1 2 3 2"
	ammo-body="type: static; mass: 0;"
	ammo-shape="type: box; fit: manual; halfExtents: 0.5 2.5 0.5; offset: 0 2.5 0"
/>
<a-entity pool__tree="mixin: tree; size: 50" activate__tree />

<a-entity pool__mushroom="mixin: mushroom; size: 20" activate__mushroom />

<a-mixin
	id="grass"
	host
	windy
	mixin="smolitem"
	gltf-model="./glb/grass.glb"
	shadow
	{scatter}
	vary="property: scale; range: 1 0.5 1 1.5 1.5 1.5"
/>
<a-entity pool__grass="mixin: grass; size: 50" activate__grass />

<a-entity pool__rock="mixin: rock; size: 50" activate__rock />
<a-entity pool__flowers="mixin: flowers; size: 50" activate__flowers />
<a-entity pool__flowersLow="mixin: flowersLow; size: 50" activate__flowersLow />

<a-entity
	host
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
>
	<a-sphere position="0 100 0" radius="10" material="color: yellow; shader: flat;" />
</a-entity>

<a-entity
	host
	position="-{groundSize / 4} {groundSize * 2} -{groundSize / 4}"
	light={str({
		type: 'directional',

		color: light,

		intensity: 0.75
	})}
/>
<a-entity host light="type:ambient; color:white; intensity:0.1;" position="-1 1 1" />

<a-plane
	shadow
	id="ground"
	host
	position="0 0 0"
	rotation="-90 0 0"
	width={groundSize * 1.5}
	height={groundSize * 1.5}
	ammo-body="type: static; mass: 0;"
	ammo-shape="type:box"
	color="#334411"
/>

<a-mixin
	id="cloud"
	scatter={scatterBig}
	material="color: #ffffff; shader: flat; emissive: white; "
	geometry
	host
	scale="15 5 10"
	vary="property: scale; range: 1 1 1 1.5 1.5 1.5"
/>

<a-entity
	pool__cloud="mixin: shadow cloud; size: 30"
	activate__cloud
	position="0 35 {groundSize}"
	animation="property:object3D.position.z; to:-{groundSize}; dur: {400 * 300 * 2}; loop: true;"
	animation__scale="property:object3D.scale; from: 0 0 0; to:1 1 1; dur: {(400 * 300) /
		2}; loop: true; dir: alternate"
/>

<a-entity sound="autoplay: true; loop: true; volume: 0.05; src:#sound-bg;positional:false" />

<a-mixin
	id="floof"
	geometry
	scale="0.05 0.05 0.05"
	material="color: white; shader: flat;"
	vary="property: position; range: -{groundSize * 0.75} 0 -{groundSize * 0.75} {groundSize *
		0.75} 4 {groundSize * 0.75}"
	floaty
/>

<a-entity pool__floof="mixin: floof; size: 300;" activate__floof />

<a-mixin
	id="birds"
	geometry
	scale="0.25 0.15 0.15"
	material="color: yellow; shader: flat;"
	vary="property: position; range: -{groundSize * 0.75} 10.5 -{groundSize * 0.75} {groundSize *
		0.75} 40 {groundSize * 0.75}"
	floaty
/>

<a-entity pool__birds="mixin: birds; size: 50;" activate__birds />
