<script>
import AFRAME from "aframe"

import "../component/vrm"
import "../component/physx"
import "../component/scatter"
import "../component/activate"
import "../component/ring"
import "../component/webcam-vrm"
import "../component/lookat"

import Webcam from "./webcam.svelte"

const str = AFRAME.utils.styleParser.stringify.bind(AFRAME.utils.styleParser)

export let groundSize = 100

const light =  "#EEF"
const light_dark = "#aaF"
const sky = "#22C"
const sky_dark = "#225"
const scatter = [-groundSize/2, 0, -groundSize/2, groundSize/2, 0, groundSize/2].join(" ") 


</script>

<Webcam />
<a-scene shadow="type:pcfsoft;"  >
    <a-assets>
        <audio id="sound-bg" src="/sound/bg-ocean.mp3"></audio>
        <!-- <a-asset-item id="vrm-goblin" src="/vrm/goblin.vrm"></a-asset-item> -->

        <a-asset-item id="glb-tree" src="/glb/tree.glb"></a-asset-item>

        <a-mixin id="phys" physx=""></a-mixin>
        <a-mixin id="shadow" shadow="cast: true"></a-mixin>
        <a-mixin id="toon" material="roughness: 1;dithering: false;"></a-mixin>
        <a-mixin id="tree" shadow gltf-model="/glb/tree.glb" {scatter} />
        <a-mixin id="grass" shadow gltf-model="/glb/grass.glb" {scatter}/>
        <a-mixin id="grass2" shadow gltf-model="/glb/grassLarge.glb" {scatter}/>
        <a-mixin id="mountains" shadow gltf-model="/glb/rockC.glb" ring="radius: {groundSize * 0.7}; count: 100" scale="15 7.5 15"/>
        <a-mixin id="rock" shadow gltf-model="/glb/rockB.glb" scale="0.5 0.25 0.5" {scatter} />
        <a-mixin id="cloud" {scatter} animation="property:position; dur: {3000 * 60}; to:0 0 -{groundSize}; easing: linear; loop: true;" material="color: #ffffff; opacity: 0.5; transparent: true; " geometry scale="15 5 5"/>
    </a-assets>

    <a-camera active fov="75"  id="#camera" pursuit="target: #focus;" position="0 1.65 -3.5" lookat="0 1.65 0"/>
 
    <a-sky color="{sky}" animate="property: color; to: {sky_dark}; easing: easeInOut; dur: 6000 "></a-sky>

    <a-entity pool__tree="mixin: tree; size: 100" activate__tree />
    <a-entity pool__grass="mixin: grass; size: 100" activate__grass />
    <a-entity pool__grass2="mixin: grass2; size: 100" activate__grass2 />
    <a-entity pool__rock="mixin: rock; size: 100" activate__rock />
    <a-entity pool__mountains="mixin: mountains; size: 100" activate__mountains />

    <a-entity 
    position="{groundSize/4} {groundSize*2} {groundSize/4}"
    animate="property: color; to: {light_dark}; easing: easeInOut"
    light={str({
        type: "directional",
        castShadow:true,
        color: light,
   
        shadowCameraTop: groundSize,
        shadowCameraLeft: -groundSize,
        shadowCameraRight: groundSize,
        shadowCameraBottom: -groundSize,
        shadowMapHeight: 1024 * 4,
        shadowMapWidth: 1024 * 4,
        intensity: 0.9
    })} 
    ></a-entity>
    <a-entity light="type:ambient; color:{light}; intensity:1;" animate="property: light.color; to: {light_dark}; easing: easeInOutBounce; dur: 6000" position="-1 1 1"></a-entity>

    <a-entity mixin="shadow" position="0 0 -5" rotation="0 180 0" vrm="src: /vrm/goblin.vrm;current: true" id="focus" />
    <a-entity mixin="shadow" position="0 0 -5"  rotation="0 180 0" vrm="src: /vrm/femgoblin.vrm; mirror: true" scatter="-5 0 -5 5 0 5"  />
    
    <a-box mixin="phys shadow toon" position="-1 0.5 -13" rotation="0 45 0" color="#4CC3D9" ></a-box>
    <a-sphere mixin="phys shadow toon" position="0 1.25 -15" radius="1.25" color="#EF2D5E"></a-sphere>
    <a-cylinder mixin="phys shadow toon" position="1 0.75 -13" radius="0.5" height="1.5" color="#FFC65D"></a-cylinder>

    <a-plane mixin="phys toon" shadow position="0 0 -4" rotation="-90 0 0" width={groundSize} height={groundSize} color="#115511" ></a-plane>

    <a-entity pool__cloud="mixin: shadow cloud; size: 15" activate__cloud position="0 20 {groundSize/4}" />

    <a-sound autoplay loop volume={0.5} src="#sound-bg" />
</a-scene>