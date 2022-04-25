<script>
	import { location } from 'src/component/location'

	import { binds, binds_icon } from 'src/control'
	import { key_down, key_map, key_up } from 'src/input'
	import { ismobile, open_text } from 'src/timing'

	let bound = [1, 2, 3, 4, 5]
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
			key_down.set('e')
		} else {
			key_up.set('e')
		}

		if (x < 0.4) {
			key_down.set('q')
		} else {
			key_up.set('q')
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
		key_up.set('q')
		key_up.set('e')
		key_up.set('shift')
	}

	function interact(e) {
		e.preventDefault()
		e.stopPropagation()
		interacting = true
	}
</script>

<div class="bind-bar {$ismobile ? 'mobile' : ''}">
	{#each bound as b}
		<div
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

<div class="motion {$ismobile ? 'mobile' : ''}">
	<div
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
	<div
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
		class="move button bounce"
		on:touchmove={update}
		on:touchend={stop_interact}
		on:mousemove={update}
		on:mousedown={interact}
		on:touchstart={interact}
		on:mouseleave={stop_interact}
		on:mouseup={stop_interact}
		bind:this={holder}
	>
		<div class="dot" style="margin-top:{y * 100}%;margin-left:{x * 100}%;" />
	</div>
</div>

<div class="location">
	{#each $location as loc}
		<div class="loc">{loc}</div>
	{/each}
</div>

<style>
	.location {
		display: flex;
		flex-direction: row;
		position: absolute;
		font-size: 5vh;
		opacity: 0.5;
		bottom: 0;
		left: 0;
		text-shadow: -0.15rem -0.15rem 0 #000, 0.15rem -0.15rem 0 #000, -0.15rem 0.15rem 0 #000,
			0.15rem 0.15rem 0 #000;
		z-index: 1;

		pointer-events: none;
	}
	.loc {
		margin: 1vh;
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
		top: 50%;
		transform: translateY(-50%);
		z-index: 5;
	}
	.inactive {
		opacity: 0;
	}
	.button {
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

		transform: perspective(400px) rotateY(40deg);
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
	.button.down {
		box-shadow: 0 0 5vh rgb(0, 65, 150), 0 0 2vh rgb(31, 255, 2);
	}
	.motion {
		position: absolute;
		right: 0;
		z-index: 5;
		bottom: 0;
	}

	.motion .button {
		opacity: 0.65;
	}
	.motion .button {
		padding: 0.5vh 1vh;
		transform: perspective(400px) rotateY(-40deg);
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
	.active {
		opacity: 0.65;
	}

	.mobile .button {
		transform: none !important;
	}
</style>
