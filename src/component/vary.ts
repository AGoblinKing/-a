const vec3 = new AFRAME.THREE.Vector3()
const bb = new AFRAME.THREE.Box3()

AFRAME.registerComponent("vary", {
    schema: {
        property: { type: "string", default: "position"},
        range: { type: "string", default: "-1 -1 -1 1 1 1" }
    },

    update() {
        const o3d = this.el.object3D
        
        bb.setFromArray(this.data.range.split(" ").map(v => parseFloat(v)))
       
        o3d[this.data.property]?.set(
            bb.min.x + Math.random() * (bb.max.x - bb.min.x),
            bb.min.y + Math.random() * (bb.max.y - bb.min.y),
            bb.min.z + Math.random() * (bb.max.z - bb.min.z)  
        )
    }
})