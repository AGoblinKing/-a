<script>
</script>

<div class="button bounce nonce" style="margin-bottom: 0.1vh">👜</div>
<div class="flex">
	<div class="button bounce" />
	<div class="reverse button bounce" />
</div>

<div class="flex">
	<div class="button bounce" />
	<div class="reverse button bounce" />
</div>

<div class="flex">
	<div class="button bounce">🦾</div>
	<div class="reverse button bounce">🦾</div>
</div>

<div class="flex">
	<div class="reverse  button bounce">🦿</div>
	<div class="button bounce">🦿</div>
</div>

<style>
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
	.button {
		opacity: 0.25;
		border: 0.5vh solid rgb(0, 106, 206);
		border-radius: 1vh;
		color: white;
		padding: 0.5vh 0.5vh;
		font-size: 3vh;
		outline: none;
		background-color: rgb(0, 58, 130);
		text-align: center;
		justify-self: center;
		font-weight: 500;
		align-self: center;
		margin: 0 2.5vh;
		box-shadow: 0 0 5vh rgb(0, 65, 150);

		text-shadow: -0.15rem -0.15rem 0 #000, 0.15rem -0.15rem 0 #000, -0.15rem 0.15rem 0 #000,
			0.15rem 0.15rem 0 #000;
		transition: all cubic-bezier(0.36, -1.2, 0.59, 1.67) 250ms;
	}
	.active {
		cursor: pointer;
	}
	.active.button:active {
		background-color: rgb(0, 32, 53) !important;
	}
	.active.button:hover {
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
