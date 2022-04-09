<script>
import "aframe"

let groundSize = 100
</script>

<a-scene shadow="type:pcfsoft;" >
    <a-camera id="#camera" />
    <a-box shadow="cast: true" position="-1 0.5 -3" rotation="0 45 0" color="#4CC3D9"></a-box>
    <a-sphere shadow="cast: true" position="0 1.25 -5" radius="1.25" color="#EF2D5E"></a-sphere>
    <a-cylinder shadow="cast: true" position="1 0.75 -3" radius="0.5" height="1.5" color="#FFC65D"></a-cylinder>
    <a-plane shadow="receive: true" position="0 0 -4" rotation="-90 0 0" width={groundSize} height={groundSize} color="#7BC8A4"></a-plane>
    <a-sky color="#5599aa"></a-sky>
    <a-entity light="type:directional; castShadow:true;shadowCameraTop: {groundSize}; shadowCameraLeft: -{groundSize}; shadowCameraRight: { groundSize}; shadowCameraBottom: -{groundSize};" position="1 1 1"></a-entity>
    <a-entity light="type:ambient; color:#BBB; intensity:0.5;" position="-1 1 1"></a-entity>

    <a-entity vrm control-follow="target: #camera;" />

</a-scene>
