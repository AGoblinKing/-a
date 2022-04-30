<script>
	import { key_down, key_map, key_up } from 'src/input'
	import { ismobile, open_text } from 'src/timing'
	import Body from './body.svelte'
	import { doControl } from 'src/chat'
	import { AVATAR } from 'src/component/avatar'
	import { sfx_button_play } from 'src/sound/sfx-ui'
	import Location from './location.svelte'

	let holder
	let x = 0.5
	let y = 0.5
	let interacting = false

	function update(e) {
		if (e.touches) {
			e.x = e.touches[0].clientX
			e.y = e.touches[0].clientY
		}
		e.preventDefault()
		e.stopPropagation()

		const { x: bx, y: by, width, height } = holder.getBoundingClientRect()
		let target_x = 0
		let target_y = 0
		target_y = e.y - by
		target_x = e.x - bx
		const ye = target_y / height
		const xd = target_x / width

		x = Math.min(Math.max(0, xd), 1)

		y = Math.min(Math.max(0, ye), 1)

		if (!interacting) return

		if (x > 0.6) {
			key_down.set('c')
		} else {
			key_up.set('c')
		}

		if (x < 0.4) {
			key_down.set('z')
		} else {
			key_up.set('z')
		}

		if (y > 0.6) {
			key_down.set('s')
		} else {
			key_up.set('s')
		}

		if (y < 0.4) {
			key_down.set('w')
		} else {
			key_up.set('w')
		}

		if (y < 0.2 || y > 0.8) {
			key_down.set('shift')
		} else {
			key_up.set('shift')
		}
	}

	// reset analog to 50%
	function stop_interact(e) {
		e.preventDefault()
		e.stopPropagation()

		interacting = false
		key_up.set('w')
		key_up.set('s')
		key_up.set('z')
		key_up.set('c')
		key_up.set('shift')
	}

	function interact(e) {
		e.preventDefault()
		e.stopPropagation()
		interacting = true
	}
</script>

<Location />

<div class="bind-bar {$ismobile ? 'mobile' : ''}">
	<div class="flexer">
		<div
			on:focus={sfx_button_play}
			on:mouseover={sfx_button_play}
			class="button bounce"
			on:click={() => doControl('~ use hand_left')}
		>
			{$AVATAR?.data.hand_left?.components.target.data || '🦾'}
		</div>
		<div
			on:focus={sfx_button_play}
			on:mouseover={sfx_button_play}
			class="jump button bounce"
			on:click={() => {
				key_down.set(' ')
				setTimeout(() => {
					key_up.set(' ')
				}, 300)
			}}
		>
			🦘
		</div>
		<div
			class="reverse button bounce"
			on:focus={sfx_button_play}
			on:mouseover={sfx_button_play}
			on:click={() => doControl('~ use hand_right')}
		>
			{$AVATAR?.data.hand_right?.components.target.data || '🦾'}
		</div>
	</div>
</div>

<div class="holder">
	<div class="motion {$ismobile ? 'mobile' : ''}">
		<div
			on:focus={sfx_button_play}
			on:mouseover={sfx_button_play}
			class="speak button bounce"
			on:click={() => {
				open_text.set('')
				requestAnimationFrame(() => {
					document.getElementById('text').focus()
				})
			}}
		>
			💬
		</div>
		<Body />

		<div
			class="move button bounce"
			on:touchmove={update}
			on:touchend={stop_interact}
			on:mousemove={update}
			on:mousedown={interact}
			on:touchstart={interact}
			on:mouseleave={stop_interact}
			on:mouseup={stop_interact}
			on:focus={sfx_button_play}
			on:mouseover={sfx_button_play}
			bind:this={holder}
		>
			<div class="dot" style="margin-top:{y * 100}%;margin-left:{x * 100}%;" />
		</div>
	</div>
</div>

<style>
	.bounce {
		opacity: 0.5;
	}

	.reverse.button {
		transform: scaleX(-1);
	}

	.mobile .reverse.button {
		transform: scaleX(-1);
	}
	.reverse.button:hover {
		transform: scaleX(-1);
	}
	.bind-bar .flexer .button {
		font-size: 2vh;
	}

	.dot {
		width: 3vh;
		height: 3vh;
		background-color: rgb(153, 173, 192);
		box-shadow: 0 0 5vh rgb(0, 65, 150);
		border-radius: 2vh;
		transform: translateX(-50%) translateY(-50%);
		cursor: pointer;
		pointer-events: none;
	}
	.bind-bar {
		position: absolute;
		left: 0;
		bottom: 5vh;
		z-index: 5;
	}

	.bind-bar .button {
		font-size: 2vh;
		width: 3vh;
	}

	.flexer {
		display: flex;
	}
	.button {
		user-select: none;
		border: 0.5vh solid rgb(0, 106, 206);
		border-radius: 1vh;
		color: white;
		padding: 0.5vh 1.5vh;
		font-size: 3vh;
		outline: none;
		background-color: rgb(0, 58, 130);
		text-align: center;
		justify-self: center;
		font-weight: 500;
		align-self: center;
		margin: 2vh 0.5vh;
		box-shadow: 0 0 5vh rgb(0, 65, 150);

		text-shadow: -0.15rem -0.15rem 0 #000, 0.15rem -0.15rem 0 #000, -0.15rem 0.15rem 0 #000,
			0.15rem 0.15rem 0 #000;
		transition: all cubic-bezier(0.36, -1.2, 0.59, 1.67) 250ms;

		cursor: pointer;
	}
	.button:active {
		background-color: rgb(0, 32, 53) !important;
	}
	.button:hover {
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

	.holder {
		position: absolute;
		right: 0;
		z-index: 5;
		bottom: 5vh;
	}

	.motion .button {
		opacity: 0.65;
	}
	.motion .button {
		padding: 0.5vh 0vh;
	}
	.move.button {
		width: 10vh;
		height: 10vh;
	}
	.motion .button:active,
	.button:hover,
	.motion .button:hover,
	.button:active {
		transform: none;
		opacity: 1;
	}
</style>
