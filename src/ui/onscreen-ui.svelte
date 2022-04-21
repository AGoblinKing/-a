<script>
	import { binds } from 'src/control'

	let bound = Object.keys($binds).filter((i) => parseInt(i) < 5)
</script>

<div class="bind-bar" />

<div class="motion">
	<div class="speak" />
	<div class="jump" />
	<div class="move" />
</div>

<style>
	.bind-bar {
		position: absolute;
		left: 0;
		top: 50%;
		transform: translateY(-50%);
	}
</style>
