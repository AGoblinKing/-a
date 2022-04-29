import { doControl } from "src/chat"


AFRAME.registerComponent("control", {
    multiple: true,

    schema: {
        type: "string"
    },

    init() {
        this.el.addEventListener(this.id, this.handleEvent = this.handleEvent.bind(this))
    },

    handleEvent(e) {
        doControl(this.data)
    },

    remove() {
        this.el.removeEventListener(this.id, this.handleEvent)
    }

})