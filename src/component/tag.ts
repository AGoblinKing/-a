AFRAME.registerComponent("tag", {
    multiple: true,

    schema: {
        type: "string",
        default: "true"
    },

    init() {
        if (!this.el.tags) {
            this.el.tags = {}
        }

        this.el.tags[this.id] = this.data
    }
})