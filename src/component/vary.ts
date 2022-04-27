import { do_vary } from "src/timing"

const vec3 = new AFRAME.THREE.Vector3()
const bb = new AFRAME.THREE.Box3()

AFRAME.registerComponent("vary", {
    multiple: true,
    schema: {
        property: { type: "string", default: "position" },
        range: { type: "string", default: "-1 -1 -1 1 1 1" }
    },

    init() {
        this.range = this.data.range.split(" ").map(v => parseFloat(v))

        this.cancel = do_vary.on(this.vary.bind(this))
    },

    vary() {
        const o3d = this.el.object3D

        bb.setFromArray(this.range)

        if (this.data.property.indexOf("recolor") === 0) {

            // TODO: set the attribute recolor__whatever on it to a color use the range
            this.el.setAttribute(this.data.property, `rgb(${bb.min.x + Math.random() * (bb.max.x - bb.min.x)}, ${bb.min.y + Math.random() * (bb.max.y - bb.min.y)}, ${bb.min.z + Math.random() * (bb.max.z - bb.min.z)})`)

            return
        }
        o3d[this.data.property]?.set(
            bb.min.x + Math.random() * (bb.max.x - bb.min.x),
            bb.min.y + Math.random() * (bb.max.y - bb.min.y),
            bb.min.z + Math.random() * (bb.max.z - bb.min.z)
        )
    },

    remove() {
        this.cancel()
    }
})