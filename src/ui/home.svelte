<script lang="ts">
	import { args, motd, open_game, open_home, videos } from 'src/timing'

	import Title from './title.svelte'
	import Video from './video.svelte'

	if (args.$.has('go')) {
		open_game.set(true)
		open_home.set(false)
	}
</script>

<div class="menu">
	<div class="sprites sprite" />

	<Title />

	<!--  -->
	<div class="vbox">
		<div class="span2 full">
			<div class="flex" />
			<textarea
				type="text"
				class="text button"
				maxlength="200"
				value={$motd}
				readonly
				on:copy={(e) => {
					e.preventDefault()
				}}
				on:paste={(e) => {
					e.preventDefault()
				}}
				on:keydown={(e) => {
					// if (e.key === 'Escape') {
					// 	open_home.set(false)
					// 	return
					// }
					// if (e.key === 'Enter') {
					//     open_home.set(false)
					// }
				}}
			/>
			<div class="flex" />
		</div>
		<div class="span2 full">
			<div class="flex" />
			<div
				type="button"
				class="button icon"
				value="GO"
				on:click={() => {
					open_home.set(false)
					open_game.set(true)
				}}
			>
				📟
			</div>
			<div class="flex" />
		</div>
	</div>

	<div class="flex span2 case">
		{#each $videos as src}
			<Video {src} />
		{/each}
	</div>
</div>

<style>
	.case {
		transform: perspective(400px) rotateX(20deg);
	}
	.full {
		width: 90vw;
	}
	.icon {
		display: flex;
		width: 3.5vh;
		height: 5vh;
		font-size: 3vh;
		transform: perspective(400px) rotateX(20deg);
	}

	.icon:hover {
		padding: 0.5vh 7.5vh;
	}

	.menu {
		cursor: auto;
		display: flex;
		opacity: 0.9;
		flex-direction: column;
		position: absolute;
		overflow: hidden;
		top: 0;
		font-family: cartoon;
		left: 0;
		right: 0;
		pointer-events: all;
		bottom: 0;
		z-index: 10;
		background-color: black;
		box-shadow: inset 0 5vh 5rem rgba(0, 140, 255, 0.2), inset 0 -5vh 5rem rgba(0, 140, 255, 0.2),
			inset 40vw 0 5rem rgba(0, 140, 255, 0.2), inset -40vw 0 5rem rgba(0, 140, 255, 0.2) !important;
	}
	.button.text {
		background-color: rgb(0, 58, 130);
		padding: 0.5vh 2.5vh;
		width: 100%;
		max-width: 60vh;
	}

	.case {
		border: 0.5vh solid rgb(0, 106, 206);

		color: white;

		font-size: 3vh;
		outline: none;
		background-color: rgb(0, 110, 255);
		text-align: center;
		border-bottom: none;
		font-weight: 500;
		align-self: center;
		border-radius: 1vh 1vh 0 0;

		box-shadow: 0 0 5vh rgb(0, 65, 150);

		text-shadow: -0.15rem -0.15rem 0 #000, 0.15rem -0.15rem 0 #000, -0.15rem 0.15rem 0 #000,
			0.15rem 0.15rem 0 #000;
		transition: all cubic-bezier(0.36, -1.2, 0.59, 1.67) 250ms;
	}

	.case:hover {
		transform: none;
	}
	.button {
		border: 0.5vh solid rgb(0, 106, 206);
		border-radius: 1vh;
		color: white;
		padding: 0.5vh 5vh;

		outline: none;
		background-color: rgb(0, 110, 255);
		text-align: center;
		justify-self: center;
		font-weight: 500;
		align-self: center;
		margin: 1vh;
		box-shadow: 0 0 5vh rgb(0, 65, 150);

		text-shadow: -0.15rem -0.15rem 0 #000, 0.15rem -0.15rem 0 #000, -0.15rem 0.15rem 0 #000,
			0.15rem 0.15rem 0 #000;
		transition: all cubic-bezier(0.36, -1.2, 0.59, 1.67) 250ms;
	}
	.button:active {
		background-color: rgb(0, 32, 53) !important;
	}
	.button:hover {
		background-color: rgb(0, 106, 206) !important;
		color: rgb(0, 225, 255);
		cursor: pointer;
		transform: none;
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
	@keyframes scroll {
		0% {
			background-position: 0% 0%;
			opacity: 20%;
			transform: scale(0.25, 5);
		}
		50% {
			opacity: 30%;
		}
		100% {
			background-position: -800% -800%;
			opacity: 20%;
			transform: scale(0.25, 5);
		}
	}
	.span2 {
		display: flex;
		align-self: center;
	}
	.sprites {
		position: absolute;

		background-size: 100% auto;
		image-rendering: pixelated;
		mix-blend-mode: hard-light;
		background-repeat: repeat;
		filter: hue-rotate(190deg);
		opacity: 0.3;
		pointer-events: none;
		width: 100%;
		height: 100%;
		animation: scroll 15s infinite linear;
	}
	.vbox {
		display: flex;
		flex: 1;
		flex-direction: column;
	}
	.flex {
		flex: 1;
	}

	textarea {
		-webkit-appearance: none;
		outline: none !important;
		font-family: monospace;

		padding: 0.4em 1rem;
		margin: 0;
		resize: none;
		text-align: left;

		font-size: 2vh;
		height: 30vh;
		box-sizing: border-box;
		border: 1px solid rgba(19, 18, 18, 0.836);
		background-color: rgb(190, 190, 190);
		border-radius: 0;
		transform: perspective(400px);
	}
</style>
