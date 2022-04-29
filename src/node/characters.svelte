<script lang="ts">
	import { avatar_current, avatar_doer, size } from 'src/timing'

	import 'src/component/wasd-controller'
	import 'src/component/sfxr'
	import 'src/component/avatar'

	import { sfx_jump } from 'src/sound/action'
	import { sfx_doer1, sfx_step } from 'src/sound/person'
</script>

<a-mixin
	id="character"
	ammo-body="gravity: 0 -20 0; type: dynamic; mass: 1; linearDamping: 0.95; angularDamping: 1;angularFactor: 0 1 0;"
	ammo-shape="type: capsule; fit: manual; halfExtents: 0.35 0.6 0.35; offset: 0 0.75 0"
/>

<!-- <a-entity pool__dust="mixin: dust; size: 5;" activate__dust /> -->
<!-- sfxr__step={sfx_step} -->
<a-entity
	mixin="shadow character"
	position="0 1 0"
	vrm="src: {$avatar_current}; current: true"
	look-controls
	scale="{$size.x} {$size.y} {$size.z}"
	host="current"
	wasd-controller
	net-avatar
	sfxr__jump={sfx_jump}
>
	<a-entity
		class="vrm-interaction"
		avatar
		ammo-body="type: kinematic;  mass: 0; collisionFilterGroup: 3; disableCollision: true; emitCollisionEvents: true; collisionFilterMask:1;scaleAutoUpdate:false"
		ammo-shape="type: sphere; sphereRadius: 2.5; fit:manual;"
	/>
</a-entity>

<a-entity
	mixin="shadow character"
	position="0 1 -1"
	rotation="0 180 0"
	host="doer"
	sfxr__bump={sfx_doer1}
	target="🧙‍♀️"
	net-avatar
	vrm="src: {$avatar_doer}; mirror: true"
/>
