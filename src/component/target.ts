import { WIPE_TARGET } from "./avatar"

AFRAME.registerComponent("target", {
    schema: {
        type: "string",
        default: ""
    },
    update() {
        this.el.name = this.data
    },
    remove() {
        WIPE_TARGET.set(this.data)
    }
})