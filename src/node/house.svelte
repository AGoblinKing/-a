<script>
	import Volleyball from 'src/node/volleyball.svelte'
	import '../component/grid'
	// static collider that removes other static colliders found

	function collideStart() {}
	// house frame built from log cabin bits
</script>

<!--- foundation, remove static any colliders that aren't part of the house-->
<a-entity
	id="foundation"
	ammo-shape="type: box; fit: manual; halfExtents: 10 10 10; offset: 0 0 0"
	on:collisionstart={collideStart}
/>

<a-mixin
	id="floor"
	grid="width: 5; length: 2; height: 1;fill: true;"
	gltf-model="./glb/cabinFloor.glb"
	ammo-body="type: static; mass: 0;"
	ammo-shape="type: box; fit: manual; half-extents: 0.5 0.1 0.5;"
/>

<a-entity class="floors" pool__floors="size: 10; mixin: floor" activate__floors />
<a-mixin id="walls" grid="width: 5; length: 2; height: 2;" />
<!-- walls -->
<a-entity class="walls" pool__walls="" activate__walls />

<!--a pool of floor tiles-->
<a-entity id="floor" />

<a-entity position="15 0 15">
	<Volleyball />
</a-entity>
