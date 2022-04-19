<script>
	import { passcode, room } from 'src/component/net'
	import { open_hostid } from 'src/timing'
</script>

{#if $open_hostid}
	<div class="netdata">
		{$room}
	</div>
{/if}

<style>
	.netdata {
		position: absolute;
		top: 0vh;
		left: 1vh;
		z-index: 15;
		color: white;
		font-size: 4vh;
		user-select: all;
		opacity: 0.75;
		text-shadow: -0.15rem -0.15rem 0 #000, 0.15rem -0.15rem 0 #000, -0.15rem 0.15rem 0 #000,
			0.15rem 0.15rem 0 #000;
	}
</style>
