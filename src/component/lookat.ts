
AFRAME.registerComponent("lookat", {
    schema: {
        type: "vec3",
        default: new AFRAME.THREE.Vector3()
    },
    update() {
        this.el.object3D.lookAt(this.data)
    }
})
