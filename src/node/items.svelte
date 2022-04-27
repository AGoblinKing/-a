<script>
	import { sfx_coin, sfx_item } from 'src/sound/item'
</script>

<a-mixin
	id="dagger"
	shadow="cast; receive: false"
	gltf-model="./glb/dagger.glb"
	scale="0.01 0.01 0.01"
	target="🗡️"
	sfxr__use={sfx_item}
	sfxr__bump={sfx_coin}
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
	target="🧰"
	sfxr__use={sfx_item}
	sfxr__bump={sfx_coin}
	shadow="cast; receive: false"
	gltf-model="./glb/chest.glb"
	scale="0.01 0.01 0.01"
	ammo-body="type: dynamic;scaleAutoUpdate: false;mass: 5;"
	ammo-shape="type:box; fit: manual; halfExtents: 0.5 0.5 0.5; offset: 0 0.4 0"
/>
<a-mixin
	id="bow"
	target="🏹"
	sfxr__use={sfx_item}
	sfxr__bump={sfx_coin}
	shadow="cast; receive: false"
	gltf-model="./glb/bow.glb"
	scale="0.01 0.01 0.01"
	ammo-body="type: dynamic;scaleAutoUpdate: false;mass: 0.1;"
	ammo-shape="type:box; fit: manual; halfExtents: 0.25 1 0.5; offset: 0 0 0"
/>

<a-mixin
	id="arrow"
	target="↗️"
	sfxr__use={sfx_item}
	sfxr__bump={sfx_coin}
	shadow="cast; receive: false"
	gltf-model="./glb/arrow.glb"
	scale="0.01 0.01 0.01"
	ammo-body="type: dynamic;scaleAutoUpdate: false;mass: 0.1;"
	ammo-shape="type:box; fit: manual; halfExtents: 0.1 1 0.1; offset: 0 0 0"
/>

<a-mixin
	id="bag"
	target="👝"
	sfxr__use={sfx_item}
	sfxr__bump={sfx_coin}
	shadow="cast; receive: false"
	gltf-model="./glb/bag.glb"
	scale="0.01 0.01 0.01"
	ammo-body="type: dynamic;scaleAutoUpdate: false;mass: 0.5;"
	ammo-shape="type:box; fit: manual; halfExtents: 0.4 0.4 0.4; offset: 0 0 0"
/>
