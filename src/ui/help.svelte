<script lang="ts">
	import { helptext, loading, open_help } from 'src/timing'

	function close() {
		open_help.set(false)
	}
</script>

<div class="menu">
	<div class="sprites sprite" />

	<!--  -->
	<div class="vbox">
		<div class="span2 full">
			<div class="flex" on:click={close} />
			<textarea type="text" class="text button" maxlength="200" value={$helptext} readonly />
			<div class="flex" on:click={close} />
		</div>
	</div>
</div>

<style>
	.full {
		width: 90vw;
	}

	.menu {
		cursor: auto;
		display: flex;
		opacity: 0.9;
		flex-direction: column;
		position: absolute;
		overflow: hidden;
		top: 0;
		padding-top: 12.5vh;
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

	.button {
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
		font-size: inherit;
		padding: 0.4em 1rem;
		margin: 0;
		resize: none;

		text-align: left;

		font-size: 0.8rem;
		height: 75vh;
		box-sizing: border-box;
		border: 1px solid rgba(19, 18, 18, 0.836);
		background-color: rgb(190, 190, 190);
		border-radius: 0;
	}
</style>
