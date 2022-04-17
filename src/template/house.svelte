<script>
	// static collider that removes other static colliders found

	function collideStart() {}
	// house frame built from log cabin bits
</script>

<!--- foundation-->
<a-entity
	id="foundation"
	ammo-shape="type: box; fit: manual; halfExtents: 10 10 10; offset: 0 0 0"
	on:collisionstart={collideStart}
/>

<!-- walls -->
<a-entity walls />

<!--a pool of floor tiles-->
<a-entity id="floor" />
