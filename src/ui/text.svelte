<script lang="ts">
	import { talk } from 'src/chat'

	import { key_down } from 'src/input'

	import { ismobile, open_text } from 'src/timing'
	let ele
	function send() {
		// send to text system
		talk.set(open_text.$)
		open_text.set(undefined)
	}

	function escape() {
		open_text.set(undefined)
	}

	key_down.on(() => {
		switch (key_down.$) {
			case '`':
				if (open_text.$ === undefined) {
					open_text.set('~ ')
					requestAnimationFrame(() => ele?.focus())
				}
				break
			case 'enter':
				if (open_text.$ === undefined) {
					open_text.set('')
					requestAnimationFrame(() => ele?.focus())
				}
		}
	})
</script>

{#if $open_text !== undefined}
	<div class="lofi {$ismobile ? 'mobile' : ''}">
		<input
			id="text"
			type="text"
			class="entry"
			bind:value={$open_text}
			bind:this={ele}
			on:blur={escape}
			on:keydown={(e) => {
				if (e.key === 'Enter') {
					send()
				}
				switch (e.key) {
					case 'Enter':
						send()
						break
					case 'Escape':
						escape()
						break
				}
			}}
		/>
	</div>
{/if}

<style>
	.entry {
		cursor: auto;

		background: rgba(12, 8, 240, 0.15);
		border: 0.6vh solid rgba(0, 0, 0, 0.5);
		font-size: 4vh;
		user-select: none;
		color: white;
		text-align: center;
		border: 0.5vh solid rgb(0, 106, 206);
		border-radius: 1vh;
		color: white;
		padding: 0.5vh 5vh;
		font-size: 3vh;
		outline: none;
		background-color: rgb(0, 110, 255);
		text-align: center;
		justify-self: center;
		font-weight: 500;
		align-self: center;
		margin: 1vh 10vw;
		opacity: 0.6;

		box-shadow: 0 0 5vh rgb(0 65 150);
		text-shadow: -0.15rem -0.15rem 0 #000, 0.15rem -0.15rem 0 #000, -0.15rem 0.15rem 0 #000,
			0.15rem 0.15rem 0 #000;
		transition: all cubic-bezier(0.36, -1.2, 0.59, 1.67) 250ms;
	}

	.lofi {
		display: flex;
		align-items: center;
		justify-content: center;
		position: absolute;
		bottom: 2.5vh;
		width: 100%;
		transform: perspective(400px) rotateX(30deg);
		pointer-events: all;
		z-index: 15;
	}
	.mobile.lofi {
		transform: translate(-50%, 0) !important;
	}
</style>
