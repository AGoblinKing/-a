
AFRAME.registerComponent("item", {
    schema: {
        slots: { type: "array", default: ["hand_left", "hand_right"] },
        holder: { type: "selector" },
    },
    init() {
        this.el.addEventListener("use", this.use = this.use.bind(this))
    },
    use(e) {
        console.log(e)
        // pick up item to slot 
        // use item if in slot
        // if holder and user same, then allow move between slots
        // otherwise reject
        // 
    },
    remove() {
        this.el.removeEventListener("use", this.use)
    }
})