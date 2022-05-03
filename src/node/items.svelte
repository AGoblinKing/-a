<script>
	import { sfx_coin, sfx_item, sfx_sword } from 'src/sound/sfx-item'
	import 'src/component/item'
	import { sfx_charge_up, sfx_near_miss } from 'src/sound/action'
	import Bow from './item/bow.svelte'
	import Arrow from './item/arrow.svelte'
</script>

<a-mixin
	id="dagger"
	shadow="cast: true; receive: false"
	gltf-model="./glb/dagger.glb"
	scale="0.01 0.01 0.01"
	target="🗡️"
	host="dagger"
	item
	sfxr__use={sfx_sword}
	sfxr__bump={sfx_sword}
	physics-body="type: dynamic;scaleAutoUpdate: false; mass: 0.1;"
	physics-shape="type:box; fit: manual; halfExtents: 0.2 0.75 0.2; offset: 0 0.45 0"
/>

<a-mixin
	id="armor_black"
	host="armor_black"
	shadow="cast: true; receive: false"
	gltf-model="./glb/armor_black.glb"
	scale="0.01 0.01 0.01"
	physics-body="type: dynamic;scaleAutoUpdate: false;"
	physics-shape="type:box; fit: manual; halfExtents: 0.4 0.4 0.4; offset: 0 0 0"
/>
<a-mixin
	id="chest"
	host="chest"
	target="🧰"
	sfxr__use={sfx_item}
	sfxr__bump={sfx_coin}
	shadow="cast: true; receive: false"
	gltf-model="./glb/chest.glb"
	scale="0.01 0.01 0.01"
	physics-body="type: dynamic;scaleAutoUpdate: false;mass: 5;"
	physics-shape="type:box; fit: manual; halfExtents: 0.5 0.5 0.5; offset: 0 0.4 0"
/>
<Bow />
<Arrow />
<a-mixin
	id="bag"
	host="bag"
	target="👝"
	sfxr__use={sfx_item}
	sfxr__bump={sfx_coin}
	shadow="cast: true; receive: false"
	gltf-model="./glb/bag.glb"
	scale="0.01 0.01 0.01"
	physics-body="type: dynamic;scaleAutoUpdate: false;mass: 0.5;"
	physics-shape="type:box; fit: manual; halfExtents: 0.4 0.4 0.4; offset: 0 0 0"
/>
<a-mixin
	id="barrel"
	host="barrel"
	target="🛢️"
	sfxr__use={sfx_item}
	sfxr__bump={sfx_coin}
	shadow="cast: true; receive: false"
	gltf-model="./glb/barrel.glb"
	scale="2 2 2"
	physics-body="type: dynamic;scaleAutoUpdate: false;mass: 20;"
	physics-shape="type:box; fit: manual; halfExtents: 0.75 0.75 0.75; offset: 0 0.5 0"
/>

<a-mixin
	id="crate"
	target="📦"
	host="crate"
	sfxr__use={sfx_item}
	sfxr__bump={sfx_coin}
	shadow="cast: true; receive: false"
	gltf-model="./glb/crate.glb"
	scale="2 2 2"
	physics-body="type: dynamic;scaleAutoUpdate: false;mass: 10;"
	physics-shape="type:box; fit: manual; halfExtents: 0.5 0.5 0.5; offset: -2 0.5 1"
/>
