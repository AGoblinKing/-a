<script>
	import { doControl } from 'src/chat'
	import { AVATAR } from 'src/component/avatar'
	import { binds, binds_icon } from 'src/control'
	import { key_down, key_map, key_up } from 'src/input'
	import { sfx_button_play } from 'src/sound/sfx-ui'
	import { do_drop, do_throw } from 'src/timing'
	let bound = ['!', '@', '#', '$', '%', '^', '&', '*']
</script>

<div class="flex bag red">
	<div
		on:focus={sfx_button_play}
		on:mouseover={sfx_button_play}
		class="button bounce "
		class:disable={!$do_drop}
		on:click={() => do_drop.set(!$do_drop)}
	>
		🧫
	</div>
	<div
		on:focus={sfx_button_play}
		on:mouseover={sfx_button_play}
		class="button bounce "
		class:disable={!$do_throw}
		on:click={() => do_throw.set(!$do_throw)}
	>
		🪃
	</div>
</div>

{#if $key_map['shift']}
	<div class="bag grid flex">
		{#each bound as b}
			<div
				on:focus={sfx_button_play}
				on:mouseover={sfx_button_play}
				class="button bounce bound {$key_down === '' + b ? 'down' : 'inactive'} {$binds[b]
					? 'active'
					: ''}"
				on:click={() => {
					key_down.set('' + b)
					key_up.set('' + b)
				}}
			>
				{$binds_icon[b] || b}
			</div>
		{/each}
	</div>
{:else}
	<div class="flex bag pouch ">
		<div class="button bounce" on:focus={sfx_button_play} on:mouseover={sfx_button_play}>
			{$AVATAR?.data.bag1?.components.target?.data || ' '}
		</div>
		<div class=" button bounce" on:focus={sfx_button_play} on:mouseover={sfx_button_play}>
			{$AVATAR?.data.bag2?.components.target?.data || ' '}
		</div>
	</div>

	<div class="flex bag pouch">
		<div class="button bounce" on:focus={sfx_button_play} on:mouseover={sfx_button_play}>
			{$AVATAR?.data.bag3?.components.target?.data || ' '}
		</div>
		<div class="button bounce" on:focus={sfx_button_play} on:mouseover={sfx_button_play}>
			{$AVATAR?.data.bag4?.components.target?.data || ' '}
		</div>
	</div>

	<div class="flex bag pouch">
		<div class="button bounce" on:focus={sfx_button_play} on:mouseover={sfx_button_play}>
			{$AVATAR?.data.bag5?.components.target?.data || ' '}
		</div>
		<div class="button bounce" on:focus={sfx_button_play} on:mouseover={sfx_button_play}>
			{$AVATAR?.data.bag6?.components.target?.data || ' '}
		</div>
	</div>

	<div class="flex bag pouch">
		<div class="button bounce" on:focus={sfx_button_play} on:mouseover={sfx_button_play}>
			{$AVATAR?.data.bag7?.components.target?.data || ' '}
		</div>
		<div class="button bounce" on:focus={sfx_button_play} on:mouseover={sfx_button_play}>
			{$AVATAR?.data.bag8?.components.target?.data || ' '}
		</div>
	</div>
{/if}
<div class="flex bag pouch">
	<div
		class="button bounce"
		on:focus={sfx_button_play}
		on:mouseover={sfx_button_play}
		on:click={() => {
			$key_map['shift'] = !$key_map['shift']
			key_map.poke()
		}}
	>
		🔀
	</div>
</div>

<style>
	.grid {
		flex-wrap: wrap;
		width: 12vh;
	}
	.disable {
		filter: sepia(1) grayscale(0.5);
	}
	.pouch {
		filter: sepia(1) grayscale(0.5);
	}

	.red .disable {
		filter: grayscale(0.5) hue-rotate(90deg);
	}

	.red {
		filter: hue-rotate(90deg);
	}

	.flex {
		display: flex;
		align-items: center;
		flex-wrap: wrap;
		justify-content: center;
	}

	.button {
		border: 0.5vh solid rgb(0, 106, 206);
		border-radius: 1vh;
		color: white;
		padding: 0.5vh 0.5vh;
		font-size: 2vh;
		opacity: 0.5;
		outline: none;
		min-width: 3vh;
		min-height: 3vh;
		background-color: rgb(0, 58, 130);
		text-align: center;
		justify-self: center;
		font-weight: 500;
		align-self: center;
		margin: 0.25vh 0.1vh;
		box-shadow: 0 0 5vh rgb(0, 65, 150);
		cursor: pointer;
		user-select: none;
		text-shadow: -0.15rem -0.15rem 0 #000, 0.15rem -0.15rem 0 #000, -0.15rem 0.15rem 0 #000,
			0.15rem 0.15rem 0 #000;
		transition: all cubic-bezier(0.36, -1.2, 0.59, 1.67) 250ms;
	}

	.button:active {
		opacity: 1;
		background-color: rgb(0, 32, 53) !important;
	}
	.button:hover {
		opacity: 1;
		background-color: rgb(0, 106, 206) !important;
		color: rgb(0, 225, 255);
		cursor: pointer;

		animation: beep 250ms alternate infinite;
	}
	@keyframes beep {
		0% {
			opacity: 95%;
		}
		100% {
			opacity: 100%;
		}
	}
</style>
