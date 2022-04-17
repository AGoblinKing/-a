const vec3 = new AFRAME.THREE.Vector3()
const quat = new AFRAME.THREE.Quaternion()
const scale = new AFRAME.THREE.Vector3()

AFRAME.registerComponent("copy", {
    schema: {
        target: { type: "selector" },
        position: { type: "bool", default: true },
        quaternion: { type: "bool", defualt: true },
        scale: { type: "bool", default: false },
    },

    tick() {
        if (!this.data.target) return

        const o3d = this.el.object3D

        const o_o3d = this.data.target.object3D
        o_o3d.updateMatrixWorld()
        o_o3d.matrixWorld.decompose(vec3, quat, scale)

        if (this.data.position) {
            o3d.position.copy(vec3)
        }

        if (this.data.quaternion) {
            o3d.quaternion.copy(quat)
        }
    }
})