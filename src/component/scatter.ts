import AFRAME from "aframe"
import { Box3 } from "three"

const bb = new Box3()

AFRAME.registerComponent("scatter", {
    schema: {
        type: "string",
        default: "-0.5 -0.5 -0.5 0.5 0.5 0.5"
    },
    update() {
        bb.setFromArray(this.data.split(" ").map(parseFloat))

        // add from scatter
        this.el.object3D.position.x += bb.min.x + Math.random() * (bb.max.x - bb.min.x)
        this.el.object3D.position.y += bb.min.y + Math.random() * (bb.max.y - bb.min.y)
        this.el.object3D.position.z += bb.min.z + Math.random() * (bb.max.z - bb.min.z)
    }
})