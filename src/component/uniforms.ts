import { time } from "src/timing"

AFRAME.registerComponent("uniforms", {
    tick() {
        time.$.value = this.el.time
        time.poke()
    }
})