<script>
	import 'src/component/grid'
	import 'src/component/tag'
	import 'src/component/recolor'
	import { sfx_squeek } from 'src/sound/plush'
</script>

<!--	
-->
<a-entity
	class="loot drop"
	pool__dagger="mixin: dagger; size: 5;"
	activate__dagger
	pool__item="mixin: chest; size: 3;"
	activate__item
	pool__bow="mixin: bow; size: 5;"
	activate__bow
	pool__arrow="mixin: arrow; size: 5;"
	activate__arrow
	pool__barrel="mixin: barrel; size: 1;"
	activate__barrel
	position="0 4 0"
/>

<a-mixin
	id="wall"
	ammo-body="type: static; mass: 0; "
	ammo-shape="type: box; fit: manual; half-extents: 5 4 1.5; offset: 0 0.5 0.5;"
	geometry
	scale="10 4 10"
	shadow="receive: false"
/>

<a-entity
	id="ground"
	geometry
	material="color: #281b0d;"
	on:collidestart={(e) => {
		const el = e.detail.targetEl

		if (el.tags?.env) {
			el.remove()
		}
	}}
	ammo-body="type: kinematic; collisionFilterGroup: 1;  collisionFilterMask:1; disableCollision: true; mass: 0; emitCollisionEvents: true; scaleAutoUpdate: false"
	ammo-shape="type: box; fit: manual; half-extents: 10 0.2 10; "
	shadow
	scale="20 0.1 20"
	position="0 0 0"
	location="name: 🛖; box:{-15} 0 {-15} {15} 30 {15}"
/>

<a-entity mixin="wall" gltf-model="./glb/cabinWindow.glb" position="0 0 -5" />

<a-entity mixin="wall" gltf-model="./glb/cabinWindow.glb" position="0 0 5" />
<a-entity
	mixin="wall"
	gltf-model="./glb/cabinDoor.glb"
	rotation="0 90 0"
	position="-5 0 0"
	ammo-shape="type: box; fit: manual; half-extents: 2 4 1; offset: -4 0.5 0.5;"
/>

<a-entity
	mixin="wall"
	rotation="0 90 0"
	position="-5 0 0"
	material="visible: false;"
	ammo-shape="type: box; fit: manual; half-extents: 2 4 1; offset: 4 0.5 0.5;"
/>

<a-entity mixin="wall" gltf-model="./glb/cabinWindow.glb" rotation="0 90 0" position="5 0 0" />

<a-entity
	shadow
	gltf-model="./glb/cabinWindow.glb"
	scale="10 2 10"
	rotation="0 90 0"
	position="-5 4 0"
/>

<a-entity
	shadow
	gltf-model="./glb/cabinWindow.glb"
	scale="10 2 10"
	rotation="0 90 0"
	position="5 4 0"
/>

<a-entity
	shadow="receive: false"
	gltf-model="./glb/cabinRoofCenter.glb"
	scale="10 4 10"
	rotation="0 90 0"
	position="0 3.5 0"
/>
<a-entity
	shadow
	gltf-model="./glb/cabinFloor.glb"
	scale="10 4 10"
	rotation="0 0 0"
	position="0 -0.1 0"
/>

<!-- <a-entity mixin="building" material="color: #333;" scale="24 0.1 24" /> -->

<!-- vary="property: recolor__skin; range: 0 0 0 255 255 255"-->
<a-mixin
	id="elf"
	gltf-model="./char/Elf.glb"
	recolor__skin="#212F00"
	recolor__hat="black"
	recolor__clothes="black"
	recolor__face="#F0F"
	scale="0.35 0.5 0.35"
	ammo-body="type: dynamic; mass: 1; linearDamping: 0.5; angularDamping: 0.98;angularFactor: 0 1 0;"
	ammo-shape="type: capsule; fit: manual; halfExtents: 0.6 0.4 0.2; cylinderAxis: z; offset: 0 0.6 0"
	shadow="cast: true; receive: false;"
	alive="type: random;"
	target="🧝"
	host="elf"
	avatar
	sfxr__use={sfx_squeek}
	sfxr__bump={sfx_squeek}
	scatter="-5 1 -5 5 5 5"
/>

<a-entity pool__elf="mixin: elf; size: 5;" activate__elf />

<a-entity mixin="elf" host="viking" gltf-model="./char/Viking_Female.glb" />
