<script>
	import { video } from 'src/timing'
</script>

<a-mixin
	id="character"
	physx-body="type: dynamic; mass: 1; linearDamping: 0.95; angularDamping: 1;angularFactor: 0 1 0;"
	ammo-shape="type: capsule; fit: manual; halfExtents: 0.2 0.6 0.2; offset: 0 0.75 0"
/>
