<script>
	import 'src/component/grid'

	// static collider that removes other static colliders found

	function collideStart() {}
	// house frame built from log cabin bits
</script>

<a-entity
	class="loot drop"
	pool__dagger="mixin: dagger; size: 5;"
	activate__dagger
	pool__item="mixin: chest; size: 2;"
	activate__item
	pool__bow="mixin: bow; size: 5;"
	activate__bow
	pool__arrow="mixin: arrow; size: 5;"
	activate__arrow
	pool__bag="mixin: bag; size: 5;"
	activate__bag
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

<a-mixin
	id="fence"
	scale="15 2 4"
	shadow
	ammo-body="type: static; mass: 0; "
	ammo-shape="type: box; fit: manual; half-extents: 7 0.5 0.25; offset: 0 0.5 0.5;"
/>

<a-entity
	id="ground"
	geometry
	material="color: #281b0d;"
	ammo-body="type: static; mass: 0; "
	ammo-shape="type: box; fit: manual; half-extents: 20 0.2 20; "
	on:collide={(e) => {
		console.log(e)
	}}
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

<a-entity gltf-model="./glb/fence.glb" mixin="fence" position="0 0 9" />
<a-entity gltf-model="./glb/fence.glb" mixin="fence" position="0 0 -9" />
<a-entity
	shadow
	gltf-model="./glb/cabinWindow.glb"
	scale="10 2 10"
	rotation="0 90 0"
	position="-5 4 0"
/>

<a-entity
	mixin="fence"
	gltf-model="./glb/fence.glb"
	scale="4 2 4"
	rotation="0 90 0"
	position="-12 0 -4"
	ammo-shape="type: box; fit: manual; half-extents: 2 0.5 0.5; offset: 0 0.5 1.5;"
/>
<a-entity
	mixin="fence"
	gltf-model="./glb/fence.glb"
	scale="4 2 4"
	rotation="0 90 0"
	position="-12 0 4"
	ammo-shape="type: box; fit: manual; half-extents: 2 0.5 0.5; offset: 0 0.5 1.5;"
/>

<a-entity
	shadow
	gltf-model="./glb/cabinWindow.glb"
	scale="10 2 10"
	rotation="0 90 0"
	position="5 4 0"
/>

<a-entity mixin="fence" gltf-model="./glb/fence.glb" rotation="0 90 0" position="9 0 0" />

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
	position="0 0.01 0"
/>
<a-entity light="type: point; distance: 12" />
<!-- <a-entity mixin="building" material="color: #333;" scale="24 0.1 24" /> -->
