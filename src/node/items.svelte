<a-mixin
	id="dagger"
	shadow="cast; receive: false"
	gltf-model="./glb/dagger.glb"
	scale="0.01 0.01 0.01"
	ammo-body="type: dynamic;scaleAutoUpdate: false; mass: 0.1;"
	ammo-shape="type:box; fit: manual; halfExtents: 0.1 0.75 0.1; offset: 0 0.45 0"
/>

<a-mixin
	id="armor_black"
	shadow="cast; receive: false"
	gltf-model="./glb/armor_black.glb"
	scale="0.01 0.01 0.01"
	ammo-body="type: dynamic;scaleAutoUpdate: false;"
	ammo-shape="type:box; fit: manual; halfExtents: 0.4 0.4 0.4; offset: 0 0 0"
/>
<a-mixin
	id="chest"
	shadow="cast; receive: false"
	gltf-model="./glb/chest.glb"
	scale="0.01 0.01 0.01"
	ammo-body="type: dynamic;scaleAutoUpdate: false;mass: 5;"
	ammo-shape="type:box; fit: manual; halfExtents: 0.5 0.5 0.5; offset: 0 0.5 0"
/>
<a-mixin
	id="bow"
	shadow="cast; receive: false"
	gltf-model="./glb/bow.glb"
	scale="0.01 0.01 0.01"
	ammo-body="type: dynamic;scaleAutoUpdate: false;mass: 0.1;"
	ammo-shape="type:box; fit: manual; halfExtents: 0.25 1 0.4; offset: 0 0 0"
/>

<a-mixin
	id="arrow"
	shadow="cast; receive: false"
	gltf-model="./glb/arrow.glb"
	scale="0.01 0.01 0.01"
	ammo-body="type: dynamic;scaleAutoUpdate: false;mass: 0.1;"
	ammo-shape="type:box; fit: manual; halfExtents: 0.1 1 0.1; offset: 0 0 0"
/>

<a-mixin
	id="bag"
	shadow="cast; receive: false"
	gltf-model="./glb/bag.glb"
	scale="0.01 0.01 0.01"
	ammo-body="type: dynamic;scaleAutoUpdate: false;mass: 0.5;"
	ammo-shape="type:box; fit: manual; halfExtents: 0.25 0.25 0.25; offset: 0 0 0"
/>
