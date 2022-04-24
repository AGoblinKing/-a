<script>
	import '../component/scatter'
	import '../component/activate'
	import '../component/ring'

	import '../component/webcam-vrm'
	import '../component/vrm'
	import '../component/vary'
	import '../component/floaty'
	import '../component/windy'
	import '../component/ai'

	export let groundSize = 100

	const scatter = [-groundSize / 2, 0, -groundSize / 2, groundSize / 2, 0, groundSize / 2].join(' ')

	const vary = 'property: scale; range: 1.5 1.25 1.5 3 2 3'

	const trunkVary = 'property:scale; range: 2 1 2 5 2 5'

	const boxBlocker = {
		'ammo-body': 'type: static; mass: 0;',
		'ammo-shape': 'type: box; fit: manual; halfExtents: 1 2.5 1; offset: 0 2.5 0'
	}

	const smolBoxBlocker = {
		'ammo-body': 'type: static; mass: 0;',
		'ammo-shape': 'type: box; fit: manual; halfExtents: 0.5 0.5 0.5; offset: 0 0 0'
	}
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
	windy
	{scatter}
	{vary}
	host="flowers"
/>
<a-mixin
	id="mushroom"
	mixin="smolitem smolfix"
	shadow
	gltf-model="./glb/mushrooms.glb"
	windy
	{scatter}
	{vary}
	host="mushroom"
/>
<a-mixin
	id="flowersLow"
	mixin="smolitem smolfix"
	shadow
	gltf-model="./glb/flowersLow.glb"
	windy
	{scatter}
	{vary}
	host="flowersLow"
/>

<a-mixin
	id="rock"
	shadow
	vary="property: scale; range: 0.5 0.25 0.5 2 1 2"
	{scatter}
	gltf-model="./glb/rockB.glb"
	ammo-body="type: static; mass: 0"
	host
	ammo-shape="type: sphere; fit: manual; sphereRadius: 1.5 "
/>

<a-mixin
	id="mountains"
	shadow
	host
	gltf-model="./glb/rockC.glb"
	ring="radius: {groundSize * 0.7}; count: 50"
	ammo-body="type: static; mass: 0;"
	vary="property: scale; range: 12 2 12 15 20 15"
	ammo-shape="type: box;fit: manual; halfExtents:15 7.5 15; offset: 0 7.5 0"
/>
<a-entity pool__mountains="mixin: mountains; size: 50" activate__mountains />

<a-mixin
	id="tree"
	class="climbable"
	shadow
	windy
	gltf-model="./glb/tree.glb"
	{scatter}
	vary="property: scale; range: 4 2 4 8 10 8"
	{...boxBlocker}
	host
/>

<a-entity pool__tree="mixin: tree; size: 150" activate__tree />

<a-entity pool__mushroom="mixin: mushroom; size: 20" activate__mushroom />

<a-mixin
	id="grass"
	windy
	mixin="smolitem"
	gltf-model="./glb/grass.glb"
	shadow
	{scatter}
	host="grass"
	vary="property: scale; range: 1 0.5 1 1.5 1.5 1.5"
/>

<a-entity pool__grass="mixin: grass; size: 50" activate__grass />
<a-entity pool__rock="mixin: rock; size: 50" activate__rock />
<a-entity pool__flowers="mixin: flowers; size: 50" activate__flowers />
<a-entity pool__flowersLow="mixin: flowersLow; size: 50" activate__flowersLow />

<a-mixin
	id="animal"
	gltf-model="./char/Horse.glb"
	ammo-body="type: dynamic; mass: 1; linearDamping: 0.5; angularDamping: 0.98;angularFactor: 0 1 0;"
	scale="0.35 0.35 0.35"
	ammo-shape="type: capsule; fit: manual; halfExtents: 0.6 0.4 0.2; cylinderAxis: z; offset: 0 0.5 0"
	shadow="cast: true; receive: false;"
	ai="type: random;"
	motion-events
	gltf-events
	animate="property:scale; from: 1 1 1; to: 1.1 1.1 1.1; dir: alternate; loop: true;"
	material="shader: flat;"
	host="horse"
	{scatter}
/>

<a-mixin id="sheep" host="sheep" gltf-model="./char/Sheep.glb" />
<a-mixin id="cow" host="cow" gltf-model="./char/Cow.glb" />
<a-mixin id="frog" host="frog" gltf-model="./char/easy_Frog.glb" color="white" />
<a-entity pool__horse="mixin: animal; size: 5;" activate__horse />
<a-entity pool__sheep="mixin: animal sheep; size: 5;" activate__sheep />
<a-entity pool__animal="mixin: animal cow; size: 5;" activate__animal />
<a-entity pool__animal="mixin: animal frog; size: 5;" activate__animal />

<a-mixin id="trunk" {...smolBoxBlocker} gltf-model="./glb/trunk.glb" vary={trunkVary} {scatter} />
<a-entity pool__trunk="mixin: trunk; size: 20" activate__trunk />

<a-mixin
	id="trunkLong"
	{...smolBoxBlocker}
	gltf-model="./glb/trunkLong.glb"
	vary={trunkVary}
	{scatter}
/>
<a-entity pool__trunkLong="mixin: trunkLong; size: 20" activate__trunkLong />

<a-mixin
	id="pillarObelisk"
	gltf-model="./glb/pillarObelisk.glb"
	{...smolBoxBlocker}
	vary={trunkVary}
	{scatter}
/>
<a-entity pool__pillarObelisk="mixin: pillarObelisk; size: 5" activate__pillarObelisk />
