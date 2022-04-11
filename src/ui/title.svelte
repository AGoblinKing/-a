<div class="intro">
	<div class="favicon">
	</div>
	<div class="full">
		<div class="title">
          
            <offset><b>a</b>     <br/></offset>
			<b>G</b>oblin
			<offset><b>L</b>ife </offset>
		</div>
	</div>
</div>

<style>
	.title {
		text-shadow: -0.5vh -0.5vh 0 #000, 0.5vh -0.5vh 0 #000, -0.5vh 0.5vh 0 #000,
			0.5vh 0.5vh 0 #000;
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
		margin-top: 2.5vh;
		transform: translate(-50%, 0);
		height: 40vh;
		display: flex;
		z-index: 0;
		width: 40vh;

		background-size: 100% 100%;
	}

	.intro {
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
</style>