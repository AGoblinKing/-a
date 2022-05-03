<script>
	import { sfx_coin, sfx_item } from 'src/sound/sfx-item'
</script>

<a-mixin
	id="arrow"
	target="↗️"
	item
	host="arrow"
	sfxr__use={sfx_item}
	sfxr__bump={sfx_coin}
	shadow="cast: true; receive: false"
	gltf-model="./glb/arrow.glb"
	scale="0.01 0.01 0.01"
	physics-body="type: dynamic;scaleAutoUpdate: false;mass: 0.1; emitCollisionEvents:true"
	physics-shape="type:box; fit: manual; halfExtents: 0.1 1 0.1; offset: 0 0 0"
/>
