AFRAME.registerComponent("target", {
    schema: {
        type: "string",
        default: ""
    },
    update() {
        this.el.name = this.data
    }
})