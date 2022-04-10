<script>
import AFRAME from "aframe"

import "../component/vrm"
import "../component/physx"
import "../component/scatter"
import "../component/activate"


const str = AFRAME.utils.styleParser.stringify.bind(AFRAME.utils.styleParser)

export let groundSize = 100

const scatter = [-groundSize/2, 0, -groundSize/2, groundSize/2, 0, groundSize/2].join(" ") 
</script>

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
        <a-mixin id="mountains" shadow gltf-model="/glb/rockC.glb" ring="{groundSize/1.5}"/>
        <a-mixin id="rock" shadow gltf-model="/glb/rockB.glb" scale="0.5 0.25 0.5" {scatter} />
        <a-mixin id="cloud" {scatter} animation="property:position; dur: {3000 * 60}; to:0 0 -{groundSize}; easing: linear; loop: true;" material="color: #ffffff; opacity: 0.5; transparent: true; shading: flat;" geometry="type: box" scale="15 5 5"/>
    </a-assets>

    <a-camera id="#camera"  control-pursuit="target: #focus;"   position="0 1.65 5" />
 
    <a-sky color="#225599"></a-sky>
    <a-entity 
    position="{groundSize/4} {groundSize/2} {groundSize/4}"
    light={str({
        type: "directional",
        castShadow:true,
        color: "#aaa",
        shadowCameraTop: groundSize,
        shadowCameraLeft: -groundSize,
        shadowCameraRight: groundSize,
        shadowCameraBottom: -groundSize,
        shadowMapHeight: 1024 * 4,
        shadowMapWidth: 1024 * 4,
    })} 
    ></a-entity>
    <a-entity light="type:ambient; color:#BBB; intensity:0.5;" position="-1 1 1"></a-entity>

    <a-entity mixin="shadow" vrm="src: /vrm/goblin.vrm;fps: true" id="focus" />
    <a-entity mixin="shadow" vrm="src: /vrm/femgoblin.vrm;" scatter="-5 0 -5 5 0 5"  />
    
    <a-box mixin="phys shadow toon" position="-1 0.5 -3" rotation="0 45 0" color="#4CC3D9" ></a-box>
    <a-sphere mixin="phys shadow toon" position="0 1.25 -5" radius="1.25" color="#EF2D5E"></a-sphere>
    <a-cylinder mixin="phys shadow toon" position="1 0.75 -3" radius="0.5" height="1.5" color="#FFC65D"></a-cylinder>
    <a-plane mixin="phys toon" shadow position="0 0 -4" rotation="-90 0 0" width={groundSize} height={groundSize} color="#227733" ></a-plane>

    <a-entity pool__tree="mixin: tree; size: 100" activate__tree />
    <a-entity pool__grass="mixin: grass; size: 100" activate__grass />
    <a-entity pool__grass2="mixin: grass2; size: 100" activate__grass2 />
    <a-entity pool__rock="mixin: rock; size: 100" activate__rock />

    <a-entity pool__cloud="mixin: shadow cloud; size: 15" activate__cloud position="0 20 {groundSize/4}" />

    <a-sound autoplay loop volume={0.5} src="#sound-bg" />
</a-scene>