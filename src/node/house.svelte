<script>
	import 'src/component/grid'

	// static collider that removes other static colliders found

	function collideStart() {}
	// house frame built from log cabin bits
</script>

<a-mixin
	id="wall"
	ammo-body="type: static; mass: 0; "
	ammo-shape="type: box; fit: manual; half-extents: 5 4 1; offset: 0 0.5 0.5;"
	geometry
	scale="10 4 10"
	shadow="receive: false"
/>

<a-mixin
	id="fence"
	scale="15 2 1"
	shadow
	ammo-body="type: static; mass: 0; "
	ammo-shape="type: box; fit: manual; half-extents: 7 0.5 0.5; offset: 0 0.5 0.5;"
/>

<a-entity
	id="ground"
	geometry
	material="color: #281b0d;"
	ammo-body="type: static; mass: 0; "
	ammo-shape="type: box; fit: manual; half-extents: 20 0.1 20; "
	on:collide={(e) => {
		console.log(e)
	}}
	shadow
	scale="20 0.1 20"
	position="0 0 0"
	location="name: 🛖; box:{-20} 0 {-20} {20} 30 {20}"
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
