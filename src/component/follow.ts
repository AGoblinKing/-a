AFRAME.registerComponent("follow", {
    schema: { target: { type: "selector" } },
    init() {
        console.log("follow", this.data)
    },
    tick() {
        if (!this.data.target) return

        console.log(this.data)
    }
})

