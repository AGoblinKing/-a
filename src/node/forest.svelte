<script>
	import 'src/component/scatter'
	import 'src/component/activate'
	import 'src/component/ring'

	import 'src/component/vrm-input'
	import 'src/component/vary'
	import 'src/component/floaty'
	import 'src/component/windy'
	import 'src/component/alive'
	import 'src/component/physics'

	import { sfx_squeek } from 'src/sound/plush'
	import { sfx_bump, sfx_near_miss, sfx_shthump } from 'src/sound/action'
	import { sfx_wood } from 'src/sound/material'
	import { sfx_bird, sfx_cat } from 'src/sound/animals'
	import { sfx_creepy_laugh_tick, sfx_deep_robot, sfx_funky } from 'src/sound/weird'
	import { sfx_flute } from 'src/sound/instrument'
	import { sfx_bubbles } from 'src/sound/environmental'

	const groundSize = 400

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
	tag__env
	sfxr__bump={sfx_shthump}
	ammo-body="type: static; mass: 0;"
	ammo-shape="type: sphere; fit: manual; sphereRadius: 1;"
/>

<a-mixin id="smolfix" ammo-shape="offset: -1.85 0 0.85;" />
<a-mixin
	id="flowers"
	mixin="smolitem smolfix"
	shadow
	tag__env
	target="🌺"
	gltf-model="./glb/flowers.glb"
	windy
	{scatter}
	{vary}
	host="flowers"
/>
<a-mixin
	id="mushroom"
	target="🍄"
	mixin="smolitem smolfix"
	shadow
	tag__env
	gltf-model="./glb/mushrooms.glb"
	windy
	{scatter}
	{vary}
	host="mushroom"
/>
<a-mixin
	id="flowersLow"
	target="🌹"
	tag__env
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
	shadow="cast: true; receive: true"
	target="🪨"
	tag__env
	vary="property: scale; range:5 3 5 6 15 6"
	{scatter}
	sfxr__use={sfx_bump}
	sfxr__bump={sfx_bump}
	gltf-model="./glb/rockB.glb"
	vary__rot="property: rotation; range: 0 0 0 0 360 0"
	physics-body="type: static; mass: 0;"
	physics-shape="type: box; fit: manual; halfExtents: 6 10 6"
	host
/>

<a-mixin
	id="mountains"
	gltf-model="./glb/rockC.glb"
	ring="radius: {groundSize * 0.7}; count: 50"
	ammo-body="type: static; mass: 0;"
	vary="property: scale; range: 10 5 10 60 100 60"
	ammo-shape="type: box;fit: manual; halfExtents:15 7.5 15; offset: 0 7.5 0"
/>
<a-entity pool__mountains="mixin: mountains; size: 50" activate__mountains />

<a-mixin
	id="tree"
	vary__rot="property: rotation; range: 0 0 0 0 360 0"
	target="🌲"
	class="climbable env"
	tag__env
	shadow="receive: true"
	windy
	sfxr__use={sfx_wood}
	sfxr__bump={sfx_wood}
	gltf-model="./glb/tree.glb"
	{scatter}
	vary="property: scale; range: 7 4 7 12 12 12"
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
	tag__env
	target="🌿"
	{scatter}
	host="grass"
	vary="property: scale; range: 1 0.5 1 1.5 1.5 1.5"
/>

<a-entity pool__grass="mixin: grass; size: 50" activate__grass />
<a-entity pool__rock="mixin: rock; size: 150" activate__rock />
<a-entity pool__flowers="mixin: flowers; size: 50" activate__flowers />
<a-entity pool__flowersLow="mixin: flowersLow; size: 50" activate__flowersLow />

<a-mixin
	id="animal"
	gltf-model="./char/Horse.glb"
	ammo-body="type: dynamic; mass: 1; linearDamping: 0.5; angularDamping: 0.98;angularFactor: 0 1 0;"
	scale="0.35 0.35 0.35"
	ammo-shape="type: capsule; fit: manual; halfExtents: 0.6 1 0.2; cylinderAxis: z; offset: 0 1 0"
	shadow="cast: true; receive: false;"
	alive="type: random;"
	motion-events
	gltf-events
	target="🐎"
	material="shader: flat;"
	host="horse"
	sfxr__use={sfx_squeek}
	sfxr__bump={sfx_squeek}
	{scatter}
/>

<a-mixin id="sheep" host="sheep" mixin="animal" gltf-model="./char/Sheep.glb" target="🐑" />
<a-mixin id="cow" host="cow" mixin="animal" gltf-model="./char/Cow.glb" target="🐄" />
<a-mixin
	id="frog"
	host="frog"
	mixin="animal"
	gltf-model="./char/easy_Frog.glb"
	target="🐸"
	color="white"
/>
<a-entity pool__horse="mixin: animal; size: 5;" activate__horse />
<a-entity pool__sheep="mixin: animal sheep; size: 5;" activate__sheep />
<a-entity pool__animal="mixin: animal cow; size: 5;" activate__animal />
<a-entity pool__animal="mixin: animal frog; size: 5;" activate__animal />

<a-mixin
	id="trunk"
	{...smolBoxBlocker}
	gltf-model="./glb/trunk.glb"
	tag__env
	vary={trunkVary}
	sfxr__bump={sfx_bubbles}
	target="🪵"
	{scatter}
/>
<a-entity pool__trunk="mixin: trunk; size: 20" activate__trunk />

<a-mixin
	id="trunkLong"
	target="🪵"
	{...smolBoxBlocker}
	sfxr__bump={sfx_creepy_laugh_tick}
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
	tag__env
	target="⛩️"
	sfxr__bump={sfx_cat}
/>
<a-entity pool__pillarObelisk="mixin: pillarObelisk; size: 10" activate__pillarObelisk />
