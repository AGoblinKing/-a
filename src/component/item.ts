
AFRAME.registerComponent("item", {
    schema: {
        slots: { type: "array", default: ["hand_left", "hand_right"] }
    },
    init() {
        this.el.addEventListener("use", this.use = this.use.bind(this))
    },
    use(e) {
        console.log(e)
        // pick up item to slot 
    },
    remove() {
        this.el.removeEventListener("use", this.use)
    }
})