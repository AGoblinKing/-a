<div class="intro">
	<div class="favicon" />
	<div class="full">
		<div class="title">
			<offset><b>a</b> <br /></offset>
			<b>G</b>oblin
			<offset><b>L</b>ife </offset>
		</div>
	</div>
</div>

<div class="ads">
	<div class="button kofi">
		<a href="https://ko-fi.com/Z8Z1C37O3" target="_blank"> 🪙 </a>
	</div>
	<div style="width: 40vh;" />
	<div class="button discord">
		<a href="https://twitter.com/agoblinlife" target="_blank">🐦 </a>
	</div>
</div>

<style>
	.ads {
		margin-top: -13vh;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}
	.kofi {
		display: block;
		transform: perspective(400px) rotateX(-10deg) rotateY(20deg);
	}
	.kofi,
	.discord {
		transition: all cubic-bezier(0.6, -0.28, 0.735, 0.045) 0.5s;
	}
	.discord {
		display: block;
		transform: perspective(400px) rotateX(-10deg) rotateY(-20deg);
	}
	.kofi:hover,
	.discord:hover {
		transform: none;
	}
	a {
		font-size: 5vh;
		text-decoration: none;
	}
	.title {
		text-shadow: -0.5vh -0.5vh 0 #000, 0.5vh -0.5vh 0 #000, -0.5vh 0.5vh 0 #000, 0.5vh 0.5vh 0 #000;
		font-size: 10vh;
		text-align: center;
		color: rgb(13, 255, 13);
		opacity: 0.8;
		font-family: cartoon;
	}
	offset {
		position: relative;
		display: block;
		margin-top: -10vh;
		margin-bottom: -10vh;
	}
	.full {
		margin-top: 10vh;
		left: 50%;
		transform: translate(-50%, 0);
		position: absolute;
		color: white;
	}

	@keyframes color {
		0% {
			color: rgb(17, 168, 62);
		}

		100% {
			color: rgb(0, 158, 47);
		}
	}
	b {
		position: relative;
		font-size: 15vh;
		margin-top: -10vh;
	}

	.favicon {
		position: absolute;
		left: 50%;
		margin-top: 0vh;
		transform: translate(-50%, 0);
		height: 40vh;
		display: flex;
		z-index: 0;
		width: 40vh;

		background-size: 100% 100%;
	}

	.intro {
		transform: perspective(400px) rotateX(-20deg);
		height: 47vh;
		background: radial-gradient(
			circle at center,
			rgb(38, 0, 255) 0,
			rgb(0, 110, 255) 20vh,
			transparent 23vh
		);
		animation: breathe ease-in-out alternate 10s infinite;
	}

	.intro:hover {
		animation: breathe ease-in-out alternate 1s infinite;
	}

	@keyframes breathe {
		0% {
			opacity: 1;
		}

		100% {
			opacity: 0.9;
		}
	}

	.button {
		border: 0.5vh solid rgb(0, 106, 206);
		border-radius: 1vh;
		color: white;
		padding: 0.3vh 2.5vh;
		font-size: 1vh;
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
	@keyframes beep {
		0% {
			opacity: 95%;
		}
		100% {
			opacity: 100%;
		}
	}
	.button:hover {
		background-color: #006ace !important;
		color: rgb(0, 225, 255);
		cursor: pointer;

		animation: beep 250ms alternate infinite;
	}
</style>
