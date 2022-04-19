<script>
	import { open_help, open_loading, open_stats } from 'src/timing'
	import Heard from 'src/ui/heard.svelte'

	import Help from 'src/ui/help.svelte'
	import Loading from 'src/ui/loading.svelte'

	import Text from 'src/ui/text.svelte'

	import Webcam from './webcam.svelte'

	import '../component/net'
	import { avatar_current, avatar_doer, size, video } from 'src/timing'

	import '../component/wasd-controller'
	import '../component/sfxr'
	import '../component/uniforms'
	import { sfx_jump } from 'src/sound/action'
	import Netdata from 'src/ui/netdata.svelte'
	import CameraFps from './camera-fps.svelte'
	import Live from 'src/ui/live.svelte'
	import Environmental from './environmental.svelte'
</script>

<Text />

{#if $open_help}
	<Help />
{/if}
{#if $open_loading}
	<Loading />
{/if}

<Live />
<Netdata />
<Webcam />
<Heard />

<a-scene
	keyboard-shortcuts="enterVR: false"
	stats={$open_stats}
	renderer="highRefreshRate: true; alpha: false;precision: low;"
	shadow="type:basic;"
	uniforms
	fog="type: exponential; color: #555"
>
	<a-assets>
		<audio id="sound-bg" src="./sound/bg-ocean.mp3" />
		<a-mixin id="shadow" shadow="cast: true" />
	</a-assets>
	<CameraFps />
	<a-entity
		mixin="shadow "
		position="0 0 15"
		guest
		vrm="src: {$avatar_current}; current: true"
		look-controls
		scale="{$size.x} {$size.y} {$size.z}"
		id="focus"
		sfxr__jump={AFRAME.utils.styleParser.stringify(sfx_jump)}
	/>

	<!--
sfxr__collide
-->
	<!-- <a-entity mixin="shadow" position="0 0 -5"  rotation="0 180 0" vrm="src: /vrm/femgoblin.vrm; mirror: true" scatter="-5 0 -5 5 0 5"  /> -->
	<a-entity
		mixin="shadow "
		guest
		position="0 0.25 14"
		rotation="0 180 0"
		vrm="src: {$avatar_doer}; mirror: true"
	/>
	<Environmental />
</a-scene>
