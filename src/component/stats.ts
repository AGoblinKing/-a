AFRAME.registerComponent("stats", {
    schema: {
        hp: { type: "number", default: 1 },
        hpMax: { type: "number", default: 1 },
    },
    init() {
        requestAnimationFrame(() => {
            this.born()
        })
    },
    born() {
        // keep track of where they started for respawn
        this.respawn = this.el.object3D.position.clone()
    },
    remove() {
        delete this.respawn
    }
})