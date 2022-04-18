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

<a-mixin id="walls" rectangle="width: 5; length: 2; height: 2;" />

<!-- walls -->
<a-entity class="walls" pool__walls="" activate__walls />

<!--a pool of floor tiles-->
<a-entity id="floor" />
