<script lang="ts">
	import type { Value } from 'src/value'

	export let axis: Value<number>
	export let min: number = 0
	export let max: number = 1
	export let min2: number = 0
	export let max2: number = 1
	export let axis2: Value<number> = undefined

	export let color = 'blue'

	export let reset: number = undefined
	export let reset2: number = undefined

	$: wide = axis2 !== undefined

	let interacting = false

	const interact = (e) => {
		e.preventDefault()
		e.stopPropagation()
		interacting = true
		update(e)
	}

	let limit = 0
	const update = (e) => {
		if (e.touches) {
			e.x = e.touches[0].clientX
			e.y = e.touches[0].clientY
		}
		e.preventDefault()
		e.stopPropagation()
		if (!holder) return
		const now = Date.now()
		if (now > limit) {
			//	wind()
			limit = now + 400
		}
		if (!interacting) return

		const { x, y, width, height } = holder.getBoundingClientRect()

		let target_x = 0
		let target_y = 0

		target_y = e.y - y
		target_x = e.x - x

		const ye = target_y / height
		axis.set(Math.min(max, Math.max(min, (max - min) * ye + min)))

		if (!axis2) return
		const xd = target_x / width

		axis2.set(Math.min(max2, Math.max(min2, (max2 - min2) * xd + min)))
	}

	const stop_interact = (e) => {
		e.preventDefault()
		e.stopPropagation()

		if (reset !== undefined) {
			axis.set(reset)
		}
		if (reset2 !== undefined) {
			axis2.set(reset2)
		}
		interacting = false
	}

	let holder

	const magic = 8.5
</script>

<bg
	on:touchmove={update}
	on:touchstart={interact}
	on:touchend={stop_interact}
	on:mousemove={update}
	on:mouseleave={stop_interact}
	on:mousedown={interact}
	on:mouseup={stop_interact}
>
	<holder class:wide bind:this={holder}>
		{#if axis2 !== undefined}
			<left style="transform: scale({1 + $axis2 * magic}, 1.0) translate(50%, 0); {color}" />
		{/if}

		<bottom style="transform: scale(1.0, {1 + $axis * magic}) translate(0, 50%);{color} " />
	</holder>
</bg>

<style>
	.wide {
		width: 10vh;
	}

	left,
	bottom {
		border-radius: 5vh;
		position: absolute;
		opacity: 0.5;
		width: 1vh;
		height: 1vh;
		transition: transform 50ms ease-in-out;
	}

	left {
		height: 10vh;
	}
	bottom {
		width: 3vh;
	}
	.wide bottom {
		width: 10vh;
	}

	holder {
		background-color: rgb(27, 27, 27, 0.5);

		display: flex;
		width: 3vh;
		border-radius: 1vh;
		border: 1vh solid rgba(0, 0, 0, 0.5);
		height: 10vh;
	}

	bg {
		border-radius: 1vh;
	}
</style>
