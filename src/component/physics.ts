AFRAME.registerComponent("physics-body", {
    schema: {
        type: "string"
    },

    init() {
        this.loaded = this.loaded.bind(this)

        this.el.addEventListener("model-loaded", this.loaded)
    },

    loaded() {
        this.ready = true
        this.update()
    },

    update() {
        if (!this.ready) return
        this.el.setAttribute("ammo-body", this.data)
    },

    remove() {
        this.el.removeEventListener("model-loaded", this.loaded)
    }
})

AFRAME.registerComponent("physics-shape", {
    schema: {
        type: "string"
    },

    init() {
        this.loaded = this.loaded.bind(this)

        this.el.addEventListener("model-loaded", this.loaded)
    },

    loaded() {
        this.ready = true
        this.update()
    },

    update() {
        if (!this.ready) return
        this.el.setAttribute("ammo-shape", this.data)
    },

    remove() {
        this.el.removeEventListener("model-loaded", this.loaded)
    }
})