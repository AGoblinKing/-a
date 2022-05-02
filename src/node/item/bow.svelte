<script>
	import { sfx_near_miss } from 'src/sound/action'
</script>

<a-mixin
	id="bow"
	host="bow"
	target="🏹"
	sfxr__use={sfx_near_miss}
	sfxr__bump={sfx_near_miss}
	item="action: ~ shoot arrow $id"
	shadow="cast: true; receive: false"
	gltf-model="./glb/bow.glb"
	scale="0.01 0.01 0.01"
	ammo-body="type: dynamic;scaleAutoUpdate: false;mass: 0.1;"
	ammo-shape="type:box; fit: manual; halfExtents: 0.5 1 0.15; offset: 0 0 0"
/>
