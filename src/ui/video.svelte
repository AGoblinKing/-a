<script>
	import { videos } from 'src/timing'

	export let src = 'MePBW53Rtpw'
</script>

<iframe
	width="{(1 / $videos.length) * 100}%"
	height="100%"
	src="https://www.youtube.com/embed/{src}"
	title="YouTube video player"
	frameborder="0"
	allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
	allowfullscreen
/>
