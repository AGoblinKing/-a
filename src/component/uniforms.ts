import { time } from "src/timing"

AFRAME.registerComponent("uniforms", {
    init() {
        this.el.object3D.frustumCulled = false
    },
    tick() {
        time.$.value = this.el.time
        time.poke()
    }
})