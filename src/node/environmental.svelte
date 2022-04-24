<script>
	import 'src/component/scatter'
	import 'src/component/activate'
	import 'src/component/ring'

	import 'src/component/webcam-vrm'
	import 'src/component/vrm'
	import 'src/component/vary'
	import 'src/component/floaty'
	import 'src/component/windy'
	import 'src/component/ai'

	import 'src/shader/space'

	const str = AFRAME.utils.styleParser.stringify.bind(AFRAME.utils.styleParser)

	export let groundSize = 100

	const light = '#FEE'
	const scatterBig = [-groundSize, 0, -groundSize, groundSize, 0, groundSize].join(' ')

	// look-controls="enabled: false;" wasd-controls="enabled;false;"
</script>

<a-plane
	shadow
	id="ground"
	position="0 0 0"
	rotation="-90 0 0"
	width={groundSize * 1.5}
	height={groundSize * 1.5}
	ammo-body="type: static; mass: 0;"
	ammo-shape="type:box"
	color="#334411"
	location="name: 🌳; color: green; box: {-groundSize * 1.5} 0 {-groundSize * 1.5} {groundSize *
		1.5} 100 {groundSize * 1.5}"
/>
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
>
	<a-sphere position="0 100 0" radius="10" material="color: yellow; shader: flat;" />
</a-entity>

<a-entity
	position="-{groundSize / 4} {groundSize * 2} -{groundSize / 4}"
	light={str({
		type: 'directional',

		color: light,

		intensity: 0.75
	})}
/>

<a-entity light="type:ambient; color:white; intensity:1.5;" />

<a-mixin
	id="cloud"
	scatter={scatterBig}
	material="color: #ffffff; shader: flat; "
	geometry
	scale="15 5 10"
	vary="property: scale; range: 1 1 1 1.5 1.5 1.5"
/>

<a-entity
	pool__cloud="mixin: shadow cloud; size: 50"
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

<a-entity pool__floof="mixin: floof; size: 100;" activate__floof />

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
<a-sky shader="space" />
