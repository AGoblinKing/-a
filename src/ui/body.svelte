<script>
</script>

<div class="flex bag disable">
	<div class="button bounce">🗡️</div>
	<div class="reverse button bounce">🏺</div>
</div>

<div class="flex bag disable">
	<div class="button bounce">↗️</div>
	<div class="reverse button bounce">💘</div>
</div>
<div class="flex bag disable">
	<div class="button bounce">👜</div>
	<div class="reverse button bounce">👜</div>
</div>
<div class="flex bag">
	<div class="button bounce">🦾</div>
	<div class="reverse button bounce">🦾</div>
</div>

<div class="flex bag">
	<div class="reverse  button bounce">🦿</div>
	<div class="button bounce">🦿</div>
</div>

<style>
	.disable {
		filter: sepia(1) grayscale(0.5);
	}
	.disable .button {
		pointer-events: none;
	}
	.red {
		filter: hue-rotate(90deg);
	}
	.nonce {
		transform: none !important;
	}
	.flex {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.reverse {
		transform: scaleX(-1) !important;
	}

	.flex div {
		margin: 0.25vh 0.1vh;
	}
	.bag .button {
		font-size: 2vh;
	}
	.button {
		border: 0.5vh solid rgb(0, 106, 206);
		border-radius: 1vh;
		color: white;
		padding: 0.5vh 0.5vh;
		font-size: 3vh;
		opacity: 0.5;
		outline: none;
		background-color: rgb(0, 58, 130);
		text-align: center;
		justify-self: center;
		font-weight: 500;
		align-self: center;
		margin: 0 2.5vh;
		box-shadow: 0 0 5vh rgb(0, 65, 150);
		cursor: pointer;
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
