<script lang="ts">
	export let groundSize: number
	const scatter = `-${groundSize} 0 -${groundSize} ${groundSize} 0 ${groundSize}`
	const vary = 'property: scale; range: 1.5 1.25 1.5 3 2 3'
	const vary__rot = 'property: rotation; range: 0 0 0 0 360 0'
	const vary__rotx = 'property: rotation; range: 0 0 0 360 0 0'
</script>

<a-asset-item id="glb-tree" src="/glb/tree.glb" />

<a-mixin id="flowers" shadow gltf-model="/glb/flowers.glb" {scatter} {vary} {vary__rot} />
<a-mixin id="mushroom" shadow gltf-model="/glb/mushrooms.glb" {scatter} {vary} {vary__rot} />
<a-mixin id="flowersLow" shadow gltf-model="/glb/flowersLow.glb" {scatter} {vary} {vary__rot} />
<a-mixin
	id="rock"
	shadow
	gltf-model="/glb/rockB.glb"
	vary="property: scale; range: 0.5 0.25 0.5 2 1 2"
	{scatter}
	{vary__rot}
	ammo-body="type: static; mass: 0"
	ammo-shape="type: sphere; fit: manual; sphereRadius: 1.5 "
/>

<a-mixin
	id="tree"
	shadow
	gltf-model="#glb-tree"
	{scatter}
	vary="property: scale; range: 1 0.5 1 2 3 2"
	{vary__rot}
	ammo-body="type: static; mass: 0;"
	ammo-shape="type: box; fit: manual; halfExtents: 0.5 2.5 0.5; offset: 0 2.5 0"
/>
<a-mixin
	id="grass"
	shadow
	{vary__rot}
	gltf-model="/glb/grass.glb"
	{scatter}
	vary="property: scale; range: 1 0.5 1 1.5 1.5 1.5"
/>
<a-mixin
	id="grass2"
	shadow
	gltf-model="/glb/grassLarge.glb"
	{scatter}
	{vary__rot}
	vary="property: scale; range: 1 0.5 1 1.5 1.5 1.5"
/>
