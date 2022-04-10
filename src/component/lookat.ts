import AFRAME from "aframe"
import { Vector3 } from "three"

AFRAME.registerComponent("lookat", {
    schema: {
        type: "vec3",
        default: new Vector3()
    },
    update() {
        this.el.object3D.lookAt(this.data)
    }
})
